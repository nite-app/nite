import React from "react";
import Home from "../components/Home";
import { AuthProvider } from "../contexts/AuthContext";

const HomeScreen = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default HomeScreen;
