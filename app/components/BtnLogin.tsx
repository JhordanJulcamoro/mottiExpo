import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <LinearGradient
                colors={['#2B333E', '#2B333E', '#355469']}
                style={styles.linearGradient}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <Text style={styles.text}>Login</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
});

export default LoginButton;
