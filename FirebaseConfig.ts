// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0Qiy0rxgAPnhzcrC_UoVF9RiNWYejMI",
  authDomain: "mottiapp-a9aa5.firebaseapp.com",
  projectId: "mottiapp-a9aa5",
  storageBucket: "mottiapp-a9aa5.appspot.com",
  messagingSenderId: "77889881196",
  appId: "1:77889881196:web:f67358d0385e2acbc00449",
  measurementId: "G-1SEG4BS9J6"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

//IOS 11429232960-siut1q47f49khpkevdol1ljt6sa1aoij.apps.googleusercontent.com
//Android 11429232960-g87dr8tadnhjhuh7srdltlh7u9df4f16.apps.googleusercontent.com