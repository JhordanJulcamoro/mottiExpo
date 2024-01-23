import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Svg, { Path, G, Defs } from "react-native-svg"
const { width, height } = Dimensions.get('window')

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const SvgTop = () => (
        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width={width} height={height * 0.3}>
            {/* <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width={width} height={height * 0.3}> */}
            <Path
                fill="#2B333E"
                d="M208.741 244.012c-104.514-26.172-249.741 0-249.741 0V-5.414h477V230.53s-122.744 39.655-227.259 13.483Z"
            />
            <G filter="url(#a)">
                <Path
                    fill="#355469"
                    d="M206.918 242.426c-160.417 23.792-247.918 0-247.918 0V-7h477v249.426s-68.664-23.793-229.082 0Z"
                />
            </G>
            <Defs></Defs>
        </Svg>
    )
    

const singIn = async () => {
    setLoading(true);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (err: any) {
        console.log(err);
        alert('Registration failed ' + err.message);
    } finally {
        setLoading(false);
    }
}

const singUp = async () => {
    setLoading(true);
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert('Check your emails!');
    } catch (err: any) {
        console.log(err);
        alert('Registration failed ' + err.message);
    } finally {
        setLoading(false);
    }

}


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
                        <Button title='Login' onPress={singIn} />
                        <Button title='Create account' onPress={singUp} />
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
})