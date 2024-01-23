import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginButton from '../components/LoginButton';
import SvgTop from '../components/svg/SvgTop';
import { signIn, signUp } from '../authFunctions';
const { width, height } = Dimensions.get('window')

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
        <View style={styles.mainContainer}>
            <View style={styles.containerSVG}>
                <SvgTop />
            </View>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='padding'>
                    <Text style={styles.title}>Hello</Text>
                    <Text style={styles.subtitle}>Sign into your account</Text>
                    <TextInput value={email} style={styles.input} placeholder='motti@motti.com' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                    <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>

                    {loading ?
                        <ActivityIndicator size="large" color="#000ff" />
                        :
                        <>
                            <Text style={styles.forgotPassword}> Forgot your password?</Text>

                            <LoginButton onPress={handleSignIn} />

                            <View style={styles.orLoginWithContainer}>
                                <View style={styles.line}></View>
                                <Text style={styles.orLoginWithText}> or login with </Text>
                                <View style={styles.line}></View>
                            </View>

                            <View style={styles.socialButtonsContainer}>
                                <TouchableOpacity style={styles.socialButton}>
                                    <Icon name="facebook" size={35} color="#2B333E" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.socialButton}>
                                    <Icon name="google" size={35} color="#2B333E" />
                                </TouchableOpacity>
                            </View>


                            <TouchableOpacity onPress={handleSignUp}>
                                <Text style={styles.registerAccount}> Already have account?{' '}
                                    <Text style={styles.boldText}>Register now</Text>
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

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#f1f1f1',
        flex: 1,
    },
    container: {
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    containerSVG: {
        width: width,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 80,
        color: "#2B333E",
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#2B333E',
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        marginVertical: 4,
        paddingStart: 20,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        width: '100%',
        height: '100%',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#2B333E',
        alignSelf: 'flex-end',
        paddingTop: 15,
    },
    registerAccount: {
        fontSize: 16,
        color: '#2B333E',
        paddingTop: 30,
        alignSelf: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 0,
    },
    socialButton: {
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    socialButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    orLoginWithContainer: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#2B333E',
    },
    orLoginWithText: {
        color: '#2B333E',
        marginHorizontal: 14,
    },
})