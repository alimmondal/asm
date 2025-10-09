import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Button } from "flowbite-react";
const Profile = () => {
    const auth = useAuth();
    // console.log(user);
    return (_jsx("div", { className: "p-3 w-full", children: _jsxs("div", { className: "flex flex-col items-center justify-center gap-2 md:gap-4", children: [_jsx("h1", { className: "my-7 text-center font-semibold text-3xl", children: "Profile" }), _jsx("div", { className: "relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full", children: _jsx("img", { src: auth?.user?.photoURL || "/placeholder.jpg", className: "rounded-full w-full h-full object-cover border-8 border-[lightgray]" }) }), _jsxs("h1", { className: "text-xl md:text-4xl", children: ["Name: ", auth?.user?.displayName || "alim"] }), _jsxs("h1", { className: "text-xl md:text-4xl", children: ["Email: ", auth?.user?.email] }), _jsx("div", { className: "w-full flex items-center justify-center", children: _jsx(Link, { className: "", to: `/dashboard/profile/edit/${auth?.user}`, children: _jsx(Button, { type: "button", gradientDuoTone: "purpleToPink", className: "w-flexDirection: 'column',", children: "Edit profile" }) }) })] }) }));
};
export default Profile;
