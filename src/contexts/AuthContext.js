import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
    console.log("Created user as: " + email);
  }

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log("Checking auth status...");
      // detaching the listener
      if (user) {
        setCurrentUser(user);
      } else {
        // No user is signed in...code to handle unauthenticated users.
      }
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
