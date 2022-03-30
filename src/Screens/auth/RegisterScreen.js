import React from "react";
import Register from "../../components/Auth/Register";
import { AuthProvider } from "../../contexts/AuthContext";

function RegisterScreen() {
  return (
    <AuthProvider>
      <div className="signupcontainer">
        <Register />
      </div>
    </AuthProvider>
  );
}

export default RegisterScreen;
