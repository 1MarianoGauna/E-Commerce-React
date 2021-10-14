// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBjxAxlvF7tPRxdOvtyUgsirlNr7wZGdUg",
  authDomain: "e-commerce-reactjs-5d57e.firebaseapp.com",
  projectId: "e-commerce-reactjs-5d57e",
  storageBucket: "e-commerce-reactjs-5d57e.appspot.com",
  messagingSenderId: "654017635993",
  appId: "1:654017635993:web:638724b22c3ad02d003a08"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const getFireBase = () => app;
export const getFireStore = () => firebase.firestore(app);