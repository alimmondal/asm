import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [loginLoading, setLoginLoading] = useState(false);
    const from = location?.state?.from?.pathname || "/";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.namedItem("email").value;
        const password = form.elements.namedItem("password")
            .value;
        setLoginLoading(true);
        try {
            await auth?.signIn(email, password);
        }
        finally {
            // Don’t stop loading here; it will stop after navigation when auth.user updates
        }
    };
    useEffect(() => {
        if (auth?.user) {
            navigate(from, { replace: true });
        }
    }, [auth?.user, from, navigate]);
    // show spinner when:
    // - auth is globally loading (initial auth check)
    // - OR local loginLoading (after login click)
    if (auth?.loading || loginLoading) {
        return (_jsx("div", { className: "h-screen flex justify-center items-center", children: _jsx(LoadingSpinner, {}) }));
    }
    return (_jsx("form", { onSubmit: handleSubmit, className: "hero min-h-screen bg-base-200", children: _jsxs("div", { className: "hero-content flex-col lg:flex-row-reverse", children: [_jsxs("div", { className: "text-center lg:text-left", children: [_jsx("h1", { className: "text-5xl font-bold", children: "Login now!" }), _jsx("p", { className: "py-6", children: "Before Register/ signup, you should contact with me on mobile which is given on footer section otherwise your account may be disabled by me. So, feel freedom to contact me." })] }), _jsx("div", { className: "card shrink-0 w-full max-w-sm shadow-2xl bg-base-100", children: _jsxs("div", { className: "card-body", children: [_jsxs("div", { className: "form-control", children: [_jsx("label", { className: "label", children: _jsx("span", { className: "label-text", children: "Email" }) }), _jsx("input", { type: "email", placeholder: "email", className: "input input-bordered", name: "email", required: true })] }), _jsxs("div", { className: "form-control", children: [_jsx("label", { className: "label", children: _jsx("span", { className: "label-text", children: "Password" }) }), _jsx("input", { type: "password", placeholder: "password", className: "input input-bordered", name: "password", required: true })] }), _jsx("div", { className: "form-control mt-6", children: _jsx("input", { className: "btn bg-red-500 text-white", type: "submit", value: "Login" }) }), _jsx("div", { className: "mt-6", children: _jsx(GoogleLogin, {}) }), _jsx("div", { className: "mt-6", children: _jsxs("p", { children: ["New here?", " ", _jsx(Link, { to: "/register", className: "text-red-500", children: "Signup/ Register" })] }) })] }) })] }) }));
};
export default Login;
