import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/userContext";

const PrivateRoute = () => {
  const { user } = useUser();
  const location = useLocation();

  console.log("at PrivateRoute: " + user);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
