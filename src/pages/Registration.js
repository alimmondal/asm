import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth"; // ✅ Import this
import LoadingSpinner from "../components/LoadingSpinner";
const Registration = () => {
    const [passMatch, setPassMatch] = useState(true);
    const [loginLoading, setLoginLoading] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.namedItem("name").value;
        const email = form.elements.namedItem("email").value;
        const password = form.elements.namedItem("password")
            .value;
        const confirmPassword = form.elements.namedItem("confirm_password").value;
        if (password !== confirmPassword) {
            setPassMatch(false);
            return;
        }
        setPassMatch(true);
        setLoginLoading(true);
        try {
            const data = await auth?.createUser(email, password);
            if (data?.user) {
                // ✅ Proper TypeScript-safe way to update display name in Firebase
                await updateProfile(data.user, { displayName: name });
                // ✅ Redirect after success
                navigate(from, { replace: true });
            }
        }
        catch (error) {
            console.error("Registration error:", error);
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
    return (_jsx("form", { onSubmit: handleSubmit, className: "hero min-h-screen bg-base-200", children: _jsxs("div", { className: "hero-content flex-col lg:flex-row-reverse", children: [_jsxs("div", { className: "text-center lg:text-left", children: [_jsx("h1", { className: "text-5xl font-bold", children: "Sign Up now!" }), _jsx("p", { className: "py-6", children: "Before registering, please contact me via the number in the footer \u2014 otherwise, your account may be disabled. Feel free to reach out." })] }), _jsx("div", { className: "card shrink-0 w-full max-w-sm shadow-2xl bg-base-100", children: _jsxs("div", { className: "card-body", children: [_jsxs("div", { className: "form-control", children: [_jsx("label", { className: "label", children: _jsx("span", { className: "label-text", children: "Name" }) }), _jsx("input", { type: "text", placeholder: "Name", className: "input input-bordered", name: "name", required: true })] }), _jsxs("div", { className: "form-control", children: [_jsx("label", { className: "label", children: _jsx("span", { className: "label-text", children: "Email" }) }), _jsx("input", { type: "email", placeholder: "Email", className: "input input-bordered", name: "email", required: true })] }), _jsxs("div", { className: "form-control", children: [_jsx("label", { className: "label", children: _jsx("span", { className: "label-text", children: "Password" }) }), _jsx("input", { type: "password", placeholder: "Password", className: "input input-bordered", name: "password", required: true })] }), _jsxs("div", { className: "form-control", children: [_jsx("label", { className: "label", children: _jsx("span", { className: "label-text", children: "Confirm Password" }) }), _jsx("input", { type: "password", placeholder: "Confirm password", className: "input input-bordered", name: "confirm_password", required: true })] }), !passMatch && (_jsx("p", { className: "text-red-500 my-2", children: "Passwords do not match!" })), _jsx("div", { className: "form-control mt-6", children: _jsx("input", { className: "btn bg-red-500 text-white", type: "submit", value: "Sign up" }) }), _jsx("div", { className: "mt-6", children: _jsx(GoogleLogin, {}) }), _jsx("div", { className: "mt-6 text-center", children: _jsxs("p", { children: ["Already have an account?", " ", _jsx(Link, { to: "/login", className: "text-red-500", children: "Login/ Sign In" })] }) })] }) })] }) }));
};
export default Registration;
