import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const Dashboard = () => {
    // const [userInfo, setUserInfo] = useState();
    // console.log(userInfo);
    // useEffect(() => {
    //   fetch(`http://localhost:5000/user/${user?.email}`)
    //     .then((res) => res.json())
    //     .then((data) => setUserInfo(data));
    // }, [user]);
    return (_jsx("div", { className: "max-w-lg mx-auto p-3 w-full", children: _jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [_jsx("h1", { className: "my-7 text-center font-semibold text-3xl", children: "Welcome to your dashboard" }), _jsx("div", { className: "w-320 h- self-center cursor-pointer shadow-md overflow-hidden rounded-full", children: _jsx(Link, { className: "w-full ", to: `/dashboard/profile`, children: _jsx("img", { src: "/giphy.gif", className: "", alt: "" }) }) }), _jsx("div", { className: "w-full flex items-center justify-center", children: _jsx(Link, { className: "", to: `/dashboard/profile`, children: _jsx(Button, { type: "button", gradientDuoTone: "purpleToPink", className: "w-flexDirection: 'column',", children: "Edit profile" }) }) })] }) }));
};
export default Dashboard;
