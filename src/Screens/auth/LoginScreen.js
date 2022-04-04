import React from "react";
import Login from "../../components/Auth/Login";
import { AuthProvider } from "../../contexts/AuthContext";
import { UserProvider } from "../../contexts/userContext";

function RegisterScreen() {
  return (
    <AuthProvider>
      <UserProvider>
        <div className="signupcontainer">
          <Login />
        </div>
      </UserProvider>
    </AuthProvider>
  );
}

export default RegisterScreen;
