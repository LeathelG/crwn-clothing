import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkmr8jnxDH3En02_PCb3zzDqsHe8DNSTI",
    authDomain: "crwn-db-79118.firebaseapp.com",
    databaseURL: "https://crwn-db-79118.firebaseio.com",
    projectId: "crwn-db-79118",
    storageBucket: "crwn-db-79118.appspot.com",
    messagingSenderId: "981297362788",
    appId: "1:981297362788:web:bed3bd91b27728c7bd2c71"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;