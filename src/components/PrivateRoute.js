import { useLocation, Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

const PrivateRoute = () => {
  const { user } = useUser();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
