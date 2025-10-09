import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import the worker from the installed `pdfjs-dist` package
import "pdfjs-dist/build/pdf.worker.entry";
const ModelTest = () => {
    return (_jsxs("div", { className: "h-full w-full md:w-[85%] mx-auto", children: [_jsx("div", { className: "py-20", children: _jsx("h1", { className: "text-center", children: "HSC Test Questions" }) }), _jsxs("div", { className: "py-5", children: [_jsx("div", { children: _jsx(Worker, { workerUrl: `https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`, children: _jsx(Viewer, { fileUrl: "/HscTestPapers2025.pdf" }) }) }), _jsx("div", { className: "text-center py-4", children: _jsx("a", { href: "/HscTestPapers2025.pdf", download: true, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Download PDF" }) })] })] }));
};
export default ModelTest;
