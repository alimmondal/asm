import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "pdfjs-dist/build/pdf.worker.entry";
function TestPaper2ndPart() {
    return (_jsxs("div", { className: "h-full w-full md:w-[85%] mx-auto", children: [_jsx("div", { className: "py-20", children: _jsx("h1", { className: "text-center", children: "HSC Model Test 1st-Part" }) }), _jsx("div", { children: _jsx(Worker, { workerUrl: `https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`, children: _jsx(Viewer, { fileUrl: "/HSEModelTest1st.pdf" }) }) }), _jsx("div", { className: "text-center py-4 sticky bottom-0 left-0 right-0", children: _jsx("a", { href: "/suffix-prefix.pdf", download: true, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Download PDF" }) }), _jsx("div", { className: "text-center", children: _jsx("p", { className: "", children: "Note: \u09AA\u09BF\u09A1\u09BF\u098F\u09AB \u09AB\u09BE\u0987\u09B2 \u09A1\u09BE\u0989\u09A8\u09B2\u09A1 \u0995\u09B0\u09B2\u09C7 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2\u09C7\u09B0 File manager/ My File-\u098F \u099C\u09AE\u09BE \u09B9\u09DF\u0964 \u0997\u09C7\u09B2\u09BE\u09B0\u09BF\u09A4\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09AC\u09C7 \u09A8\u09BE\u0964" }) })] }));
}
export default TestPaper2ndPart;
