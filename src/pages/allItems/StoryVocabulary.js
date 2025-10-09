import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@react-pdf-viewer/core/lib/styles/index.css";
// import { useRef, useState, useEffect } from "react";
// import HTMLFlipBook from "react-pageflip";
// import { Document, Page, pdfjs } from "react-pdf";
import { pdfjs } from "react-pdf";
// Set up the real worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";
import { Viewer, Worker } from "@react-pdf-viewer/core";
const StoryVocabulary = () => {
    // Function to scroll up
    const scrollUp = () => {
        window.scrollBy({ top: -window.innerHeight / 2, behavior: "smooth" });
    };
    // Function to scroll down
    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight / 2, behavior: "smooth" });
    };
    return (_jsxs("div", { className: "w-full h-full lg:w-4/5 mx-auto relative", children: [_jsx("div", { className: "", children: _jsx("div", { children: _jsx(Worker, { workerUrl: `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`, children: _jsx(Viewer, { fileUrl: "/\u0997\u09B2\u09CD\u09AA\u09C7\u0997\u09B2\u09CD\u09AA\u09C7Vocabulary.pdf" }) }) }) }), _jsxs("div", { className: "fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50", children: [_jsx("button", { onClick: scrollUp, className: "bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors focus:outline-none", "aria-label": "Scroll Up", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 15l7-7 7 7" }) }) }), _jsx("button", { onClick: scrollDown, className: "bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors focus:outline-none", "aria-label": "Scroll Down", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })] })] }));
};
export default StoryVocabulary;
