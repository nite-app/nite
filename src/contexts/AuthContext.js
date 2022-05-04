import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
} from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [name, setName] = useState("User");
  const [mail, setMail] = useState("user@nite.com");
  const [userColor, setUserColor] = useState("User");
  const [logged, setLogged] = useState(false);
  const db = getFirestore();

  function signup(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Created user with email: " + email);
        login(email, password);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function login(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error);
      });
    console.log("Logged in as: " + email);
  }

  function signout() {
    console.log("Signed out successfully");

    return firebase.auth().signOut();
  }

  function resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log("Checking auth status...");
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  useEffect(() => {
    const setLog = firebase.auth().onAuthStateChanged(() => {
      if (currentUser === null) {
        setLogged(false);
      } else {
        setLogged(true);
      }
    });
    return () => setLog();
  });

  useEffect(() => {
    if (currentUser) {
      const docRef = doc(db, "users", currentUser.uid);

      getDoc(docRef).then((doc) => {
        setName(doc.data().firstName + " " + doc.data().lastName);
        setUserColor(doc.data().pfpColor);
        setMail(doc.data().email);
      });
    } else {
      setName("User 1");
      setMail("user@nite.com");
    }
  });

  const value = {
    currentUser,
    name,
    mail,
    userColor,
    logged,
    signup,
    login,
    signout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
