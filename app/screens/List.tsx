import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
  const handleLogout = async () => {
    try {
      console.log("Logout :::")
      await FIREBASE_AUTH.signOut();
      await AsyncStorage.removeItem("@user");
      navigation.navigate('/'); 
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title='Open Details' onPress={() => navigation.navigate('detail')} />
      {/* <Button title='Logout' onPress={()=>FIREBASE_AUTH.signOut()} /> */}
      <Button title='Logout' onPress={handleLogout} />
    </View>
  )
}

export default List