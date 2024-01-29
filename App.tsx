import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Detail from './app/screens/Detail';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  const navigation = useNavigation(); // Esto debería funcionar correctamente aquí

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const checkLocalUser = async () => {
    try {
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      console.log("Local storage: ", userData);
      setUser(userData);
    } catch (error: any) {
      alert(error.message);
    }
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        console.log("User in::" + JSON.stringify(user, null, 2));
        setUser(user);
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        // No necesitas navegar aquí porque StackNavigation lo manejará automáticamente
      } else {
        // No necesitas navegar aquí porque StackNavigation lo manejará automáticamente
        console.log("Not logged registered")
      }
    });

    // Llama a la función para verificar el usuario local
    checkLocalUser();

    return () => unsub();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
