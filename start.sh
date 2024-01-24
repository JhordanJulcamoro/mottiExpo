npx create-expo-app mottiApp -t expo-template-blank-typescript
cd ./mottiApp
npx expo install firebase

#Navigation
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

#SVG
npx expo install react-native-svg

#LinearGradient
npx expo install expo-linear-gradient

#Icons
npx expo install @types/react-native-vector-icons

#Others commands
npx expo customize metro.config.js

#LoginGoogle 
npx expo install expo-auth-session expo-crypto expo-web-browser
npx expo install expo-application 
npx expo install expo-dev-client 
npx expo install @react-native-async-storage/async-storage
#Configuration for EAS 
npm install -g eas-cli  
eas whoami
eas login
eas build:configure
>yes
>all
eas credentials -p android
>production
>keystore
>set up a new keystore
>enter
>yes
npx expo prebuild
npm install -g yarn
yarn ios #compila para ios?
npx expo run:android #ompila para android?

# npm install @react-native-async-storage/async-storage 

#Open Emulator
open -a Simulator

#Run application
npx expo start

#Shorcuts Application
rnfe

#Generate Ios and Android
npx expo prebuild 