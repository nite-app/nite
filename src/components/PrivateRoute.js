import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginScreen from "../screens/auth/LoginScreen";

const PrivateRoute = () => {
  const { logged } = useAuth();

  return logged ? <Outlet /> : <LoginScreen />;
};

export default PrivateRoute;
