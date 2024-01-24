import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Detail from './app/screens/Detail';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const insideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <insideStack.Navigator>
      <insideStack.Screen name="My Todos" component={List} />
      <insideStack.Screen name="detail" component={Detail} />
    </insideStack.Navigator>
  );
}


export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const checkLocalUser = async () => {
    try {
        const userJSON = await AsyncStorage.getItem("@user");
        const userData = userJSON ? JSON.parse(userJSON):null;
        console.log("Local storage: ", userData);
        setUser(userData);
    } catch (error:any) {
        alert(error.message);
    }
}

  // useEffect(() => {
  //   onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //     setUser(user);
  //   });
  // }, []);

  useEffect(() => { 
    checkLocalUser();
    const unsub = onAuthStateChanged(FIREBASE_AUTH,async (user) => {
        if (user){
            console.log("User in::" + JSON.stringify(user,null,2));
            setUser(user);
            await AsyncStorage.setItem("@user", JSON.stringify(user));
        }else {
            console.log("Not logged registered")
        }
    });

    return () => 
    unsub();
}, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ?
          (<Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: true }} />)
          :
          (<Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}