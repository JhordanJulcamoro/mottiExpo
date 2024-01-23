import { View, Text, TextInput, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginButton from '../components/LoginButton';
import SvgTop from '../components/svg/SvgTop';
import { signIn, signUp } from '../authFunctions';
import { loginStyles } from '../styles/loginStyles';
import { commonStyles } from '../styles/commonStyles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

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
                                <TouchableOpacity style={commonStyles.socialButton}>
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