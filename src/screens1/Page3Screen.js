import React from "react";
import Page3 from "../components/Page3";
import { AuthProvider } from "../contexts/AuthContext";

const HomeScreen = () => {
  return (
    <AuthProvider>
      <Page3 />
    </AuthProvider>
  );
};

export default HomeScreen;
