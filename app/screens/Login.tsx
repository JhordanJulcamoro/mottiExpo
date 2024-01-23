import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg"
// import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import BtnLogin from '../components/BtnLogin'
const { width, height } = Dimensions.get('window')

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const SvgTop = () => (
        // <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width={width} height={height * 0.3}>
        //     <Path
        //         fill="#2B333E"
        //         d="M208.741 244.012c-104.514-26.172-249.741 0-249.741 0V-5.414h477V230.53s-122.744 39.655-227.259 13.483Z"
        //     />
        //     <G filter="url(#a)">
        //         <Path
        //             fill="#355469"
        //             d="M206.918 217C23.837 271-41 242.426-41 242.426V-7h477v249.426S390 163 206.918 217Z"
        //         />
        //     </G>
        //     <Defs></Defs>
        // </Svg>

        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width={width} height={height * 0.3}>
            <Path
                fill="#2B333E"
                d="M209.741 251.012c-104.514-26.172-249.741 0-249.741 0V1.586h477V237.53s-122.744 39.655-227.259 13.483Z"
            />
            <G filter="url(#a)">
                <Path
                    fill="url(#b)"
                    d="M207.918 224C24.837 278-40 249.426-40 249.426V0h477v249.426S391 170 207.918 224Z"
                    shapeRendering="crispEdges"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="b"
                    x1={4}
                    x2={393.5}
                    y1={6}
                    y2={211}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E617A" />
                    <Stop offset={0.173} stopColor="#4682AB" stopOpacity={0.665} />
                    <Stop offset={0.676} stopColor="#3A6786" stopOpacity={0.329} />
                    <Stop offset={0.965} stopColor="#355469" stopOpacity={0} />
                </LinearGradient>
            </Defs>
        </Svg>

        // <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width={width} height={height * 0.3}>
        //     <Path
        //         fill="#2B333E"
        //         d="M209.741 251.012c-104.514-26.172-249.741 0-249.741 0V1.586h477V237.53s-122.744 39.655-227.259 13.483Z"
        //     />
        //     <G filter="url(#a)">
        //         <Path
        //             fill="url(#b)"
        //             d="M207.918 224C24.837 278-40 249.426-40 249.426V0h477v249.426S391 170 207.918 224Z"
        //             shapeRendering="crispEdges"
        //         />
        //     </G>
        //     <Rect
        //         width={11.421}
        //         height={21.417}
        //         x={1.008}
        //         y={0.989}
        //         fill="#809FB4"
        //         stroke="#2F3D4B"
        //         strokeWidth={2}
        //         rx={5.71}
        //         transform="rotate(-.612 5569.685 -11048.318) skewX(-.13)"
        //     />
        //     <Path
        //         fill="#809FB4"
        //         stroke="#2F3D4B"
        //         strokeWidth={2}
        //         d="m127.807 81.103 2.54-2.367 5.337 7.274c.567.773.458 1.93-.244 2.583-.701.654-1.73.557-2.297-.216l-5.336-7.274Z"
        //     />
        //     <Rect
        //         width={11.421}
        //         height={21.417}
        //         x={238.055}
        //         y={59.539}
        //         fill="#809FB4"
        //         stroke="#2F3D4B"
        //         strokeWidth={2}
        //         rx={5.71}
        //     />
        //     <Path
        //         fill="#809FB4"
        //         stroke="#2F3D4B"
        //         strokeWidth={2}
        //         d="m233.76 86.58 5.221-7.265 2.56 2.336-5.221 7.266c-.559.777-1.584.884-2.291.239-.707-.646-.828-1.799-.269-2.576Z"
        //     />
        //     <Path
        //         fill="#809FB4"
        //         stroke="#2F3D4B"
        //         strokeWidth={3}
        //         d="M214.658 164.368a29.795 29.795 0 0 0 1.387-.239c.94-.183 2.251-.477 3.723-.917 2.981-.892 6.463-2.338 8.923-4.556 2.493-2.248 3.717-4.584 4.322-6.329.303-.876.452-1.606.525-2.104.036-.249.053-.439.061-.559.005-.06.006-.103.007-.126l.001-.018v-.027l.865-40.697-.001-.039-.008-.233-.03-.894a718.928 718.928 0 0 0-.608-13.67c-.435-8-1.081-16.83-1.917-20.714-1.281-5.955-2.186-8.613-3.57-12.678a350.42 350.42 0 0 1-1.585-4.736c-1.06-3.258-2.949-4.925-4.524-5.8a8.74 8.74 0 0 0-2.061-.826 6.526 6.526 0 0 0-.726-.144h-67.29a10.666 10.666 0 0 0-.75.218 15.93 15.93 0 0 0-2.424 1.042c-1.968 1.038-4.472 2.84-6.582 5.898-2.083 3.018-3.392 7.69-4.171 11.778a69.979 69.979 0 0 0-.935 6.68l-.033.412-.008.104-.002.025v.005l77.411 89.144Zm0 0h-.069l-.492.001a331.785 331.785 0 0 0-7.584.101c-4.398.11-9.604.343-12.343.857-2.663.501-4.737 1.78-6.393 2.803l-.473.291c-1.839 1.123-3.012 1.672-4.329 1.425-1.645-.309-2.676-.935-3.96-1.769a11.109 11.109 0 0 1-.198-.129c-1.274-.829-2.788-1.815-5.147-2.574-2.57-.828-5.56-.729-8.552-.63l-.181.006c-3.027.102-6.235.209-9.677-.361-3.55-.589-7.35-1.775-10.291-2.829a87.862 87.862 0 0 1-4.581-1.79 15.21 15.21 0 0 1-.199-.085l-.109-.085a15.083 15.083 0 0 1-.668-.562 18.372 18.372 0 0 1-2.062-2.161c-1.514-1.877-2.914-4.417-2.914-7.352V108.789c0-5.16.696-13.506 1.4-20.617a682.935 682.935 0 0 1 1.372-12.605l.023-.195.006-.049.002-.012v-.003l-1.489-.182m78.908 89.242L135.75 75.126m0 0 1.489.18.005-.04.003-.041-1.497-.099Zm97.857 74.391c0-.001 0-.002 0 0Z"
        //     />
        //     <Path
        //         fill="#809FB4"
        //         stroke="#303F4E"
        //         strokeWidth={2}
        //         d="M156.768 41h57.969a4 4 0 0 1 4 4v2.782h-65.969V45a4 4 0 0 1 4-4Z"
        //     />
        //     <Path
        //         fill="#809FB4"
        //         stroke="#2F3D4B"
        //         strokeWidth={2}
        //         d="M153.858 60.978c-5.412 1.708-5.412 6.83-5.412 6.83l-6.927 33.907s-1.731 9.025 6.927 10.732c8.659 1.708 14.287 2.44 14.287 2.44h43.509s9.308-.244 15.369-2.44c6.061-2.195 6.061-10.732 6.061-10.732l-6.061-33.907s-2.165-5.61-6.278-6.83c-4.113-1.22-24.027-4.39-24.027-4.39h-15.153s-16.884 2.682-22.295 4.39Z"
        //     />
        //     <Rect
        //         width={20.079}
        //         height={13.124}
        //         x={142.378}
        //         y={126.376}
        //         fill="#809FB4"
        //         stroke="#2F3D4B"
        //         strokeWidth={2}
        //         rx={5}
        //     />
        //     <Rect
        //         width={20.079}
        //         height={13.124}
        //         x={206.451}
        //         y={126.376}
        //         fill="#809FB4"
        //         stroke="#2F3D4B"
        //         strokeWidth={2}
        //         rx={5}
        //     />
        //     <Path
        //         fill="#809FB4"
        //         stroke="#2F3D4B"
        //         strokeWidth={2}
        //         d="M164.314 144.915h38.981c1.117 0 2.022.905 2.022 2.021 0 6.401-5.189 11.59-11.59 11.59h-19.845c-6.401 0-11.59-5.189-11.59-11.59 0-1.116.906-2.021 2.022-2.021ZM226.883 162.35v15.17a5 5 0 0 1-5 5h-6.977a5 5 0 0 1-5-5v-12.027a42.2 42.2 0 0 0 1.365-.126c1.611-.172 4.123-.515 7.759-1.197 3.638-.682 5.931-1.254 7.326-1.661.192-.056.367-.109.527-.159ZM142.129 177.52v-15.567c.275.098.591.206.953.322 1.625.522 4.151 1.21 7.803 1.895 3.628.68 5.909 1.022 7.29 1.195.372.047.679.081.931.106v12.049a5 5 0 0 1-5 5h-6.977a5 5 0 0 1-5-5Zm32.533 4.556v-16.044a27.057 27.057 0 0 0 3.465 2.104c1.438.722 3.096 1.354 4.76 1.546 1.678.194 3.425-.055 4.927-1.175 1.688-1.257 2.752-1.933 3.405-2.287l.42 15.869a4.422 4.422 0 0 1-4.422 4.409h-8.133a4.422 4.422 0 0 1-4.422-4.422Zm17.364-16.206-.017.002.017-.002Z"
        //     />
        //     <Defs>
        //         <LinearGradient
        //             id="b"
        //             x1={4}
        //             x2={393.5}
        //             y1={6}
        //             y2={211}
        //             gradientUnits="userSpaceOnUse"
        //         >
        //             <Stop stopColor="#3E617A" />
        //             <Stop offset={0.173} stopColor="#4682AB" stopOpacity={0.665} />
        //             <Stop offset={0.676} stopColor="#3A6786" stopOpacity={0.329} />
        //             <Stop offset={0.965} stopColor="#355469" stopOpacity={0} />
        //         </LinearGradient>
        //     </Defs>
        // </Svg>
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
                            <Text style={styles.forgotPassword}> Forgot your password?</Text>

                            {/* <TouchableOpacity style={styles.button} onPress={singIn}>
                                <LinearGradient
                                    colors={['#2B333E', '#2B333E', '#355469']}
                                    style={styles.linearGradient}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 1 }}
                                >
                                    <Text style={styles.text}>Login</Text>
                                </LinearGradient>
                            </TouchableOpacity> */}
                            <BtnLogin onPress={singIn} />

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


                            <TouchableOpacity onPress={singUp}>
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
    button: {
        alignItems: 'center',
        height: 50,
        marginTop: 25
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        width: '100%',
        height: '100%',
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
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