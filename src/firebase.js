// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyB98n99ru9pqBIokhNyWy8Xk3tBB-KY5o0",
  authDomain: "nite-mobile-396a5.firebaseapp.com",
  databaseURL:
    "https://nite-mobile-396a5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nite-mobile-396a5",
  storageBucket: "nite-mobile-396a5.appspot.com",
  messagingSenderId: "463647968516",
  appId: "1:463647968516:web:7c3bf140c1c52b9905d451",
});

export const auth = app.auth;
export default app;

// ciao
