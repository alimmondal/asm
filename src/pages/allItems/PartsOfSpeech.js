import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, } from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon, } from "@heroicons/react/24/solid";
import PartsOfSpeechBeginner from "../../components/PartsOfSpeechBeginner";
import DPartsOfSpeech from "../DegreeItems/DPartsOfSpeech";
import { PartsOfSpeechAdvanced } from "../../components/PartsOfSpeechAdvanced";
function PartsOfSpeech() {
    const data = [
        {
            label: "Beginner",
            value: "beginner",
            icon: Square3Stack3DIcon,
            desc: _jsx(PartsOfSpeechBeginner, {}),
        },
        {
            label: "Short ",
            value: "short",
            icon: UserCircleIcon,
            desc: _jsx(DPartsOfSpeech, {}),
        },
        {
            label: "Advanced",
            value: "advanced",
            icon: Cog6ToothIcon,
            desc: _jsx(PartsOfSpeechAdvanced, {}),
        },
    ];
    return (_jsxs("div", { className: "w-[95%] h-full", children: [_jsx("div", { className: "text-center py-28", children: _jsx("h1", { className: "", children: "Parts of Speech" }) }), _jsx("div", { className: "px-3 ", children: _jsxs(Tabs, { value: "beginner", children: [_jsx(TabsHeader, { children: data.map(({ label, value, icon }) => (_jsx(Tab, { value: value, children: _jsxs("div", { className: "flex items-center gap-2", children: [React.createElement(icon, { className: "w-5 h-5" }), label] }) }, value))) }), _jsx(TabsBody, { children: data.map(({ value, desc }) => (_jsx(TabPanel, { value: value, children: _jsx("div", { className: "text-gray-400 dark:text-gray-300", children: desc }) }, value))) })] }) })] }));
}
export default PartsOfSpeech;
