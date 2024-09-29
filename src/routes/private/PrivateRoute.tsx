import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ReactNode } from "react";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
