import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../configs/firebase';

firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signOut = function() {
    return firebase.auth().signOut();
}

export const signInWithGoogle = function() {
    return firebase.auth().signInWithPopup(googleProvider);
}

export const signInWithFacebook = function() {
    return firebase.auth().signInWithPopup(facebookProvider);
}