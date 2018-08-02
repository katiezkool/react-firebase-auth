import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAThvnRBgEDnmCZeD2YNJketLyIsqhipFs",
    authDomain: "react-firebase-auth-121cd.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-121cd.firebaseio.com",
    projectId: "react-firebase-auth-121cd",
    storageBucket: "react-firebase-auth-121cd.appspot.com",
    messagingSenderId: "224670686406"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};

