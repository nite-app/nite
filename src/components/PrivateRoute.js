import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  const [logged, setLogged] = useState(false);

  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
