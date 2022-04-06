import React from "react";
import Page2 from "../components/Page2";
import { AuthProvider } from "../contexts/AuthContext";

const HomeScreen = () => {
  return (
    <AuthProvider>
      <Page2 />
    </AuthProvider>
  );
};

export default HomeScreen;
