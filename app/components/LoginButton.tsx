import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { loginButtonStyles } from '../styles/loginStyles';

interface LoginButtonProps {
    onPress: (event: GestureResponderEvent) => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={loginButtonStyles.button} onPress={onPress}>
            <LinearGradient
                colors={['#2B333E', '#2B333E', '#355469']}
                style={loginButtonStyles.linearGradient}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <Text style={loginButtonStyles.text}>Login</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default LoginButton;
