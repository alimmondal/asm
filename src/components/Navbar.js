import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import Header from "./Header";
// import { FaBookReader } from "react-icons/fa";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { Button } from "flowbite-react";
import { MdLocalPhone } from "react-icons/md";
const Navbar = () => {
    const auth = useAuth();
    // console.log(auth);
    const [nav, setNav] = useState(false);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const handleLogout = async () => {
        if (auth) {
            await auth.logout();
        }
    };
    const changedBackground = () => {
        if (window.scrollY >= 10) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    };
    window.addEventListener("scroll", changedBackground);
    return (_jsx(_Fragment, { children: _jsx("div", { className: nav
                ? "lg:fixed top-0 left-0 right-0 z-10 transition-all bg-green-400 text-white font-bold"
                : "bg-sky-500 font-bold text-black", children: _jsxs("div", { className: "navbar ", children: [_jsxs("div", { className: "navbar-start", children: [_jsxs("div", { className: "dropdown", children: [_jsx("div", { onClick: handleClick, tabIndex: 0, role: "button", className: "btn btn-ghost ", children: click ? (_jsx(FaRegTimesCircle, { className: "w-5 h-5" })) : (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h8m-8 6h16" }) })) }), _jsxs("ul", { tabIndex: 0, className: click
                                            ? "menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 text-green-400 dark:text-slate-400 border-2 border-green-400"
                                            : "dropdown-content right-96", children: [_jsx("li", { children: _jsx(Link, { onClick: closeMobileMenu, to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { onClick: closeMobileMenu, to: "/about", children: "About" }) }), !auth?.user && (_jsxs(_Fragment, { children: [_jsx("li", { children: _jsx(Link, { onClick: closeMobileMenu, to: "/login", children: "Login" }) }), _jsx("li", { children: _jsx(Link, { onClick: closeMobileMenu, to: "/register", children: "Register" }) })] })), auth?.user && (_jsxs(_Fragment, { children: [_jsx("li", { children: _jsx(Link, { onClick: closeMobileMenu, to: "/ssc", children: "SSC" }) }), _jsx("li", { children: _jsx(Link, { onClick: closeMobileMenu, to: "/hsc", children: "HSC" }) }), _jsx("li", { children: _jsx(Link, { onClick: closeMobileMenu, to: "/degree", children: "Degree" }) }), _jsx("li", { children: _jsx(Link, { onClick: closeMobileMenu, to: "/dashboard", children: "Dashboard" }) })] })), auth?.user && (_jsx("li", { children: _jsx(Button, { type: "button", gradientDuoTone: "purpleToPink", className: "w-flexDirection: 'column',", onClick: handleLogout, children: "Logout" }) }))] })] }), _jsxs(Link, { onClick: closeMobileMenu, to: "/", className: "btn btn-ghost text-xl ml-[-20px]", children: [_jsx("img", { src: "/man.jpg", className: "w-10 border-2 rounded-full" }), _jsx("span", { className: "heading2 ", children: "ASM" })] })] }), _jsx("div", { className: "hidden md:flex z-50", children: _jsx(SearchBar, {}) }), _jsxs("div", { className: "navbar-end space-x-2", children: [auth?.user ? (_jsx(Button, { pill: true, size: "sm", type: "button", gradientDuoTone: "purpleToPink", 
                                // className="w-flexDirection: 'column',"
                                onClick: handleLogout, children: "Logout" })) : (_jsx(Link, { to: "/login", children: _jsx(Button, { pill: true, size: "sm", type: "button", gradientDuoTone: "purpleToPink", children: "Sign In" }) })), _jsx("div", { className: "avatar", children: _jsx("div", { className: "w-10 rounded-full border-2 border-white animate-pulse", children: _jsx("ul", { className: "flex items-center justify-center gap-2", children: _jsx("li", { className: "p-2  hover:text-rose-500 transition-all", children: _jsx("a", { href: "tel:+8801751337773", children: _jsx(MdLocalPhone, { size: 20, className: "" }) }) }) }) }) })] })] }) }) }));
};
export default Navbar;
