import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const auth = FIREBASE_AUTH;

const signIn = async (email: any, password: any) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (err: any) {
        console.log(err);
        alert('Sign in failed ' + err.message);
    }
};

const signUp = async (email: any, password: any) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert('Check your emails!');
    } catch (err: any) {
        console.log(err);
        alert('Sign up failed ' + err.message);
    }
};

export { signIn, signUp };
