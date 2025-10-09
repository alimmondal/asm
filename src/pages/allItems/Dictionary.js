import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import DictionaryApi from "../../components/DictionaryApi";
import TranslateWidget from "../../components/TranslateWidget";
import Translator from "../../components/Translator";
const Dictionary = () => {
    const [activeTab, setActiveTab] = useState("translate");
    return (_jsxs("div", { className: "p-4 bg-gray-100 min-h-screen md:w-1/2 mx-auto", children: [_jsx("div", { className: "py-20 text-center", children: _jsx("h1", { className: "", children: "Dictionary" }) }), _jsxs("div", { className: "flex justify-center space-x-4 mb-6 border-b border-gray-300", children: [_jsx("button", { onClick: () => setActiveTab("translate"), className: `py-2 px-2 font-semibold ${activeTab === "translate"
                            ? "border-b-2 border-blue-500 text-blue-500"
                            : "text-gray-500"}`, children: "G-Translate" }), _jsx("button", { onClick: () => setActiveTab("dictionary"), className: `py-2 px-2 font-semibold ${activeTab === "dictionary"
                            ? "border-b-2 border-blue-500 text-blue-500"
                            : "text-gray-500"}`, children: "E-To-E" }), _jsx("button", { onClick: () => setActiveTab("translator"), className: `py-2 px-2 font-semibold ${activeTab === "translator"
                            ? "border-b-2 border-blue-500 text-blue-500"
                            : "text-gray-500"}`, children: "Translator" })] }), _jsxs("div", { className: "bg-white rounded-xl shadow-2xl p-6 overflow-x-auto", children: [activeTab === "translate" && _jsx(TranslateWidget, {}), activeTab === "dictionary" && _jsx(DictionaryApi, {}), activeTab === "translator" && _jsx(Translator, {})] })] }));
};
export default Dictionary;
