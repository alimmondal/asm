import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    // console.log("authstate", auth)
    const location = useLocation();
    if (auth?.loading) {
        return _jsx(LoadingSpinner, {});
    }
    if (auth?.user) {
        return children;
    }
    return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
};
export default PrivateRoute;
