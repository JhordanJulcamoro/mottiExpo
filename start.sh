npx create-expo-app mottiApp -t expo-template-blank-typescript
cd ./mottiApp
npx expo install firebase

#Navigation
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

#Open Emulator
open -a Simulator

#Run application
npx expo start