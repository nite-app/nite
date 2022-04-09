import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const { logged } = useAuth();

  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
