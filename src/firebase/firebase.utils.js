import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCS8ob3k7QecJlo9sW2IsWI_orMydk8G1I",
  authDomain: "react-exercise-e-commerc-7dadb.firebaseapp.com",
  databaseURL: "https://react-exercise-e-commerc-7dadb.firebaseio.com",
  projectId: "react-exercise-e-commerc-7dadb",
  storageBucket: "react-exercise-e-commerc-7dadb.appspot.com",
  messagingSenderId: "687633202951",
  appId: "1:687633202951:web:22a438371fe9ff6d1acfa2"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;