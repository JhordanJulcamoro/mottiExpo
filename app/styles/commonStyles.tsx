import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

export const commonStyles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    width: '100%',
    height: '100%',
  },
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
});