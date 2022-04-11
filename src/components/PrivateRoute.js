import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Login from "../screens/auth/Login";
import { AuthProvider } from "../contexts/AuthContext";

const PrivateRoute = () => {
  let { logged } = useAuth();

  return logged ? <Outlet /> : <Login />;
};

export default PrivateRoute;
