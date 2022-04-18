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
  const [logged, setLogged] = useState(false);
  const db = getFirestore();

  function docExists(currentUser) {
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = getDoc(docRef);

    if (docSnap.exists) {
      return true;
    } else {
      return false;
    }
  }

  const addDocument = async (currentUser, email, first, last) => {
    await setDoc(doc(db, "users", currentUser.uid), {
      email: email,
      firstName: first,
      lastName: last,
    });
  };

  function signup(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Created user with email: " + email);
        login(email, password);
      })
      .catch(function (error) {
        console.log(error);
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

  function namesetter() {
    if (currentUser == null) {
      setName("User");
    } else {
      let s = currentUser.email;
      let n = s.indexOf("@");
      s = s.substring(0, n != -1 ? n : s.length);
      setName(s);
    }

    return name;
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

  useEffect(namesetter);

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

  const value = {
    currentUser,
    name,
    logged,
    signup,
    login,
    signout,
    resetPassword,
    addDocument,
    docExists,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
