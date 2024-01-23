// loginStyles.js
import { StyleSheet } from 'react-native';
import { commonStyles } from './commonStyles';

export const loginStyles = StyleSheet.create({
  title: {
    fontSize: 80,
    color: "#2B333E",
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#2B333E',
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
});

export const loginButtonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 50,
    marginTop: 25
  },
  linearGradient: commonStyles.linearGradient,
  text: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
},
});
