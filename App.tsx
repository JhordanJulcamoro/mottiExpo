import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Detail from './app/screens/Detail';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

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

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      // console.log('user', user);
      setUser(user);
    });
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