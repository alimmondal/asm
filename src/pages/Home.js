import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Banner from "../components/home/Banner";
import GrammarItem from "../components/home/GrammarItem";
import useAuth from "../hooks/useAuth";
import Welcome from "../components/Welcome";
import Glob from "../components/home/Glob";
import LoadingSpinner from "../components/LoadingSpinner";
import Composition from "../components/Composition";
const Home = () => {
    const auth = useAuth();
    // console.log(auth);
    if (auth?.loading) {
        return _jsx(LoadingSpinner, {});
    }
    return (_jsx("div", { className: "", children: auth?.user ? (_jsxs("div", { children: [_jsx(Banner, {}), _jsx("div", { className: "py-10", children: _jsx(Glob, {}) }), _jsxs("div", { className: "md:max-w-[65%]  mx-auto", children: [_jsx(GrammarItem, {}), _jsx(Composition, {})] })] })) : (_jsx(_Fragment, { children: _jsx(Welcome, {}) })) }));
};
export default Home;
