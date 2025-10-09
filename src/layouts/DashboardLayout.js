import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
export default function DashboardLayout() {
    const auth = useAuth();
    const handleLogout = async () => {
        if (auth) {
            await auth?.logout();
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "drawer lg:drawer-open", children: [_jsx("input", { id: "my-drawer-2", type: "checkbox", className: "drawer-toggle" }), _jsxs("div", { className: "drawer-content flex flex-col items-center justify-center", children: [_jsx("label", { htmlFor: "my-drawer-2", className: "btn btn-primary drawer-button lg:hidden", children: "Open drawer" }), _jsx(Outlet, {})] }), _jsxs("div", { className: "drawer-side", children: [_jsx("label", { htmlFor: "my-drawer-2", "aria-label": "close sidebar", className: "drawer-overlay" }), _jsxs("ul", { className: "menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between", children: [_jsxs("div", { children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "profile", children: "Profile" }) }), _jsx("li", { children: _jsx(Link, { to: "profile/edit/:id", children: "Update Profile" }) }), _jsx("li", { children: _jsx("button", { className: "btn btn-error", onClick: handleLogout, children: "Logout" }) })] }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Link, { to: "/", className: "btn btn-neutral", children: "Home" }), _jsx("button", { className: "btn btn-error", onClick: handleLogout, children: "Logout" })] })] })] })] })] }));
}
