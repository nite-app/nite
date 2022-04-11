import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginScreen from "../screens/auth/LoginScreen";

const PrivateRoute = () => {
  let logged = useAuth();

  useEffect(() => {
    console.log("At Private Route: " + logged);
  });

  return logged ? <Outlet /> : <LoginScreen />;
};

export default PrivateRoute;
