import React from "react";
import Reset from "../../components/Auth/Reset";
import { AuthProvider } from "../../contexts/AuthContext";

function ResetScreen() {
  return (
    <AuthProvider>
      <div className="signupcontainer">
        <Reset />
      </div>
    </AuthProvider>
  );
}

export default ResetScreen;
