import { View, Text, TextInput, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginButton from '../components/LoginButton';
import SvgTop from '../components/svg/SvgTop';
import { signIn, signUp } from '../authFunctions';
import { loginStyles } from '../styles/loginStyles';
import { commonStyles } from '../styles/commonStyles';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider,onAuthStateChanged,signInWithCredential } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
    const [userInfo,setUserInfo] = useState<User | null>(null);
    const [request,response,promptAsync] = Google.useAuthRequest({
        iosClientId:'11429232960-siut1q47f49khpkevdol1ljt6sa1aoij.apps.googleusercontent.com',
        androidClientId:'11429232960-g87dr8tadnhjhuh7srdltlh7u9df4f16.apps.googleusercontent.com',
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    // const checkLocalUser = async () => {
    //     try {
    //         const userJSON = await AsyncStorage.getItem("@user");
    //         const userData = userJSON ? JSON.parse(userJSON):null;
    //         console.log("Local storage: ", userData);
    //         setUserInfo(userData);
    //     } catch (error:any) {
    //         alert(error.message);
    //     }
    // }

    useEffect(() => {
        if(response?.type == "success") {
            const {id_token} = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    }, [response]);

    // useEffect(() => { 
    //     checkLocalUser();
    //     const unsub = onAuthStateChanged(auth,async (user) => {
    //         if (user){
    //             console.log("User in::" + JSON.stringify(user,null,2));
    //             setUserInfo(user);
    //             await AsyncStorage.setItem("@user", JSON.stringify(user));
    //         }else {
    //             console.log("Not logged registered")
    //         }
    //     });

    //     return () => 
    //     unsub();
    // }, []);

    const handleSignIn = async () => {
        setLoading(true);
        await signIn(email, password);
        setLoading(false);
    };

    const handleSignUp = async () => {
        setLoading(true);
        await signUp(email, password);
        setLoading(false);
    };

    return (
        <View style={commonStyles.mainContainer}>
            <View style={commonStyles.containerSVG}>
                <SvgTop />
            </View>
            <View style={commonStyles.container}>
                <KeyboardAvoidingView behavior='padding'>
                    <Text style={loginStyles.title}>Hello</Text>
                    <Text style={loginStyles.subtitle}>Sign into your account</Text>
                    <TextInput value={email} style={commonStyles.input} placeholder='motti@motti.com' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                    <TextInput secureTextEntry={true} value={password} style={commonStyles.input} placeholder='password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>

                    {loading ?
                        <ActivityIndicator size="large" color="#000ff" />
                        :
                        <>
                            <Text style={loginStyles.forgotPassword}> Forgot your password?</Text>

                            <LoginButton onPress={handleSignIn} />

                            <View style={commonStyles.orLoginWithContainer}>
                                <View style={commonStyles.line}></View>
                                <Text style={commonStyles.orLoginWithText}> or login with </Text>
                                <View style={commonStyles.line}></View>
                            </View>

                            <View style={commonStyles.socialButtonsContainer}>
                                <TouchableOpacity style={commonStyles.socialButton}>
                                    <Icon name="apple" size={35} color="#2B333E" />
                                </TouchableOpacity>
                                <TouchableOpacity style={commonStyles.socialButton} onPress={() => promptAsync()}>
                                    <Icon name="google" size={35} color="#2B333E" />
                                </TouchableOpacity>
                            </View>


                            <TouchableOpacity onPress={handleSignUp}>
                                <Text style={loginStyles.registerAccount}> Already have account?{' '}
                                    <Text style={loginStyles.boldText}>Register now</Text>
                                </Text>
                            </TouchableOpacity>
                        </>
                    }
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default Login;