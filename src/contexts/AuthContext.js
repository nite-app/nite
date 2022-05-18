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
  deleteDoc,
} from "firebase/firestore";
import useAlert from "../hooks/useAlert";

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
  const { setAlert } = useAlert();

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
    try {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  function deleteAccount() {
    if (currentUser) {
      deleteDoc(doc(db, "users", currentUser.uid));
      firebase.auth().currentUser.delete();
    } else {
      console.log("Internal error: no user logged in, can't delete any");
    }
  }

  function updateEmail(email) {
    if (currentUser) {
      firebase.auth().currentUser.updateEmail(email);
      console.log("Changed email to " + email);
    }
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
    deleteAccount,
    updateEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
