import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginScreen from "../screens/auth/LoginScreen";
import { AuthProvider } from "../contexts/AuthContext";

const PrivateRoute = () => {
  let { logged } = useAuth();

  return logged ? <Outlet /> : <LoginScreen />;
};

export default PrivateRoute;
