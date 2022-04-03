import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [name, setName] = useState("User");
  const { user } = useUser();
  const { setUser } = useUser();

  function signup(email, password) {
    console.log("Got to the signup function");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error);
      });
    console.log("Created user with email: " + email);
    navigate("/login");
  }

  function login(email, password) {
    console.log("Got to the login function");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error);
      });
    setUser(currentUser);
    console.log("Logged in as: " + email);
    navigate("/");
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

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log("Checking auth status...");
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  React.useEffect(namesetter);

  const value = {
    currentUser,
    name,
    signup,
    login,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
