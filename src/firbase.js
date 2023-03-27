// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBeL4qUYuk7uZSd4eKhUC-fD7MkwgxarU",
    authDomain: "netflix-clone-522.firebaseapp.com",
    projectId: "netflix-clone-522",
    storageBucket: "netflix-clone-522.appspot.com",
    messagingSenderId: "92522663819",
    appId: "1:92522663819:web:5c230621ccdfc4388de98e",
    measurementId: "G-2JWFWB9NEV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;