import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (_jsxs("div", { className: "container flex flex-col justify-center items-center h-screen text-center py-32", children: [_jsxs("h1", { className: "text-7xl font-extrabold mb-8", children: ["Error ", status || 404] }), _jsx("p", { className: "lg:text-3xl", children: error?.message }), _jsx("button", { className: "btn bg-red-500 text-white mt-8", children: _jsx(Link, { to: "/", children: "HomePage" }) })] }));
};
export default ErrorPage;
