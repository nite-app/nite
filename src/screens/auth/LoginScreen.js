import React from "react";
import Login from "../../components/Auth/Login";
import { AuthProvider } from "../../contexts/AuthContext";

function RegisterScreen() {
  return (
    <AuthProvider>
      <div className="signupcontainer">
        <Login />
      </div>
    </AuthProvider>
  );
}

export default RegisterScreen;
