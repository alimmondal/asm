import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
// Set up the real worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
// import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url"; // ✅ worker import for Vite/CRA
import { Viewer, Worker } from "@react-pdf-viewer/core";
const FirstPaperModel = () => {
    const flipBook = useRef(null);
    const [numPages, setNumPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [dimensions, setDimensions] = useState({ width: 600, height: 800 });
    const [gotoPage, setGotoPage] = useState("");
    const [scale, setScale] = useState(1.0); // 🆕 Initial zoom scale
    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 768) {
                setDimensions({ width: 300, height: 400 });
            }
            else {
                setDimensions({ width: 600, height: 800 });
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    const FlipBook = HTMLFlipBook;
    // Go to page handler
    const handleGotoPage = () => {
        const pageNum = parseInt(gotoPage, 10);
        const totalPages = numPages + 2; // Cover + PDF pages + Back
        if (!isNaN(pageNum) && pageNum >= 0 && pageNum < totalPages) {
            flipBook.current?.pageFlip().flip(pageNum);
        }
        setGotoPage("");
    };
    // 🆕 Zoom handlers
    const zoomIn = () => {
        console.log("clicked");
        setScale((prevScale) => Math.min(prevScale + 0.2, 2.5)); // 📈 Max zoom 2.5
    };
    const zoomOut = () => {
        setScale((prevScale) => Math.max(prevScale - 0.2, 0.5)); // 📉 Min zoom 0.5
    };
    return (_jsxs("div", { className: "h-full flex flex-col items-center justify-center gap-1 mt-1", children: [_jsxs("div", { className: "flex  gap-4 ", children: [_jsx("button", { onClick: zoomIn, className: "px-4 py-2 bg-blue-500 text-white rounded", children: "\u2795" }), _jsx("button", { onClick: zoomOut, className: "px-4 py-2 bg-red-500 text-white rounded", children: "\u2796" })] }), _jsxs("div", { className: "flex flex-col items-center py-1", children: [_jsx("div", { className: "w-[100%], h-[100%] ", children: _jsx(Document, { file: "/FirstPaperModel.pdf", onLoadSuccess: onDocumentLoadSuccess, children: _jsxs(FlipBook, { width: dimensions.width, height: dimensions.height, showCover: true, mobileScrollSupport: true, ref: flipBook, onFlip: (e) => setCurrentPage(e.data), className: "shadow-2xl rounded-lg", children: [_jsx("div", { className: "w-full h-full bg-[#EFE5D6] text-green-500 flex flex-col items-center justify-center text-center", children: _jsxs("div", { className: "w-full h-full bg-[#EFE5D6] text-green-500 flex flex-col items-center justify-center", children: [_jsx("h1", { className: "text-9xl", children: "\uD83D\uDCD6" }), _jsx("h1", { className: "text-3xl font-bold", children: "First Paper Model book" }), _jsx("p", { className: "mt-2", children: "Welcome! Swipe or click to begin." })] }) }), Array.from(new Array(numPages), (_, i) => (_jsx("div", { className: "bg-white flex items-center justify-center", style: {
                                            width: "100%",
                                            height: "100%",
                                            overflow: "hidden",
                                        }, children: _jsx("div", { style: {
                                                transform: `scale(${scale})`,
                                                transformOrigin: "center center",
                                            }, children: _jsx(Page, { pageNumber: i + 1, 
                                                // scale={scale}
                                                width: dimensions.width - 40, renderTextLayer: false, renderAnnotationLayer: false, renderMode: "canvas", loading: _jsx("div", { className: "text-gray-500", children: "Loading..." }) }) }) }, i))), _jsxs("div", { className: "bg-gray-800 text-white flex flex-col items-center justify-center text-center px-2", children: [_jsx("h2", { className: "text-2xl font-semibold", children: "\uD83C\uDF89 The End" }), _jsx("p", { className: "mt-2", children: "Thanks for reading!" })] })] }) }) }), _jsxs("div", { className: "flex flex-col items-center gap-4 mt-6", children: [_jsxs("div", { className: "flex gap-4", children: [_jsx("button", { onClick: () => flipBook.current?.pageFlip().flipPrev(), className: "px-4 py-2 bg-gray-700 text-white rounded", children: "\u25C0 Prev" }), _jsxs("span", { className: "text-lg font-semibold", children: ["Page ", currentPage, " / ", numPages + 1] }), _jsx("button", { onClick: () => flipBook.current?.pageFlip().flipNext(), className: "px-4 py-2 bg-gray-700 text-white rounded", children: "Next \u25B6" })] }), _jsx("div", { className: "flex flex-wrap gap-2 justify-center mt-2", children: Array.from(new Array(numPages + 2), (_, i) => (_jsx("button", { onClick: () => flipBook.current?.pageFlip().flip(i), className: `px-3 py-1 rounded ${currentPage === i
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 hover:bg-gray-300"}`, children: i === 0 ? "Cover" : i === numPages + 1 ? "Back" : i }, i))) }), _jsxs("div", { className: "flex gap-2 items-center mt-2", children: [_jsx("input", { type: "number", min: "0", max: numPages + 1, value: gotoPage, onChange: (e) => setGotoPage(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleGotoPage(), placeholder: `0 - ${numPages + 1}`, className: "w-28 px-2 py-1 border rounded text-center" }), _jsx("button", { onClick: handleGotoPage, className: "px-4 py-1 bg-blue-600 text-white rounded", children: "Go" })] }), _jsx("div", { className: "text-center py-4 ", children: _jsx("a", { href: "/FirstPaperModel.pdf", download: true, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Download PDF" }) }), _jsx("div", { className: "text-center", children: _jsx("p", { className: "", children: "Note: \u09AA\u09BF\u09A1\u09BF\u098F\u09AB \u09AB\u09BE\u0987\u09B2 \u09A1\u09BE\u0989\u09A8\u09B2\u09A1 \u0995\u09B0\u09B2\u09C7 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2\u09C7\u09B0 File manager/ My File-\u098F \u099C\u09AE\u09BE \u09B9\u09DF\u0964 \u0997\u09C7\u09B2\u09BE\u09B0\u09BF\u09A4\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09AC\u09C7 \u09A8\u09BE\u0964" }) })] })] }), _jsx("div", { className: "py-10", children: _jsx("div", { children: _jsx(Worker, { workerUrl: `https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`, children: _jsx(Viewer, { fileUrl: "/FirstPaperModel.pdf" }) }) }) })] }));
};
export default FirstPaperModel;
