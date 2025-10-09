import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const Welcome = () => {
    return (_jsxs("div", { className: "h-screen w-full flex flex-col items-center justify-center gap-4 bg-rose-50", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "", children: _jsx("img", { src: "/a.jpg", alt: "", className: "w-[500px]" }) }), _jsxs("h1", { className: "absolute top-10 left-3 heading2 text-gray-50", children: ["Hy! ", _jsx("br", {}), " I'm ", _jsx("br", {}), _jsx("span", { className: "text-6xl md:text-8xl ", children: "Alim" })] })] }), _jsx(Link, { to: "/login", children: _jsx(Button, { className: "w-full", type: "button", gradientDuoTone: "purpleToPink", children: "Login/ Sign in" }) })] }));
};
export default Welcome;
