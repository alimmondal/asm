import { useState, useEffect } from "react";
import { Worker, Viewer, ScrollMode } from "@react-pdf-viewer/core";
import { scrollModePlugin } from "@react-pdf-viewer/scroll-mode";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "pdfjs-dist/build/pdf.worker.entry";

const EBook = () => {
  const scrollModePluginInstance = scrollModePlugin();
  const { switchScrollMode } = scrollModePluginInstance;

  const pageNavigationPluginInstance = pageNavigationPlugin();
  const {
    jumpToNextPage,
    jumpToPreviousPage,
    CurrentPageLabel,
    NumberOfPages,
    jumpToPage,
  } = pageNavigationPluginInstance;

  const handleDocumentLoad = () => {
    switchScrollMode(ScrollMode.Horizontal);
  };

  // States
  const [pageInput, setPageInput] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // track current page

  const handleJump = () => {
    const pageNum = parseInt(pageInput, 10);
    if (!isNaN(pageNum)) {
      jumpToPage(pageNum - 1); // 0-based
      setPageInput("");
    }
  };

  // 👇 Keyboard navigation (ArrowLeft ←, ArrowRight →)
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "ArrowRight") {
        jumpToNextPage();
      } else if (e.key === "ArrowLeft") {
        jumpToPreviousPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jumpToNextPage, jumpToPreviousPage]);

  return (
    <div className="h-full w-full md:w-[85%] mx-auto">
      <div className="py-10">
        <h1 className="text-center text-xl font-bold">E-Book</h1>
      </div>

      {/* PDF viewer */}
      <div className="h-[100vh] border rounded relative">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js">
          <Viewer
            fileUrl="/Oxford-Fluency-Essentials.pdf"
            plugins={[scrollModePluginInstance, pageNavigationPluginInstance]}
            onDocumentLoad={(e) => {
              handleDocumentLoad();
              setTotalPages(e.doc.numPages); // store total pages
            }}
            onPageChange={(e) => setCurrentPage(e.currentPage + 1)} // update on page change
          />
        </Worker>

        {/* Prev / Next buttons */}
        <button
          onClick={jumpToPreviousPage}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-gray-700"
        >
          ◀
        </button>
        <button
          onClick={jumpToNextPage}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-gray-700"
        >
          ▶
        </button>
      </div>

      {/* Page number controls */}
      <div className="flex items-center justify-center gap-3 py-4">
        <span className="text-gray-700">
          Page <CurrentPageLabel /> / <NumberOfPages />
        </span>

        <input
          type="number"
          min="1"
          className="w-16 border rounded px-2 py-1 text-center"
          placeholder="Go to"
          value={pageInput}
          onChange={(e) => setPageInput(e.target.value)}
        />
        <button
          onClick={handleJump}
          className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
        >
          Go
        </button>
      </div>

      {/* Page number row */}
      <div className="flex flex-wrap justify-center gap-2 py-4">
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNum = i + 1;
          const isActive = pageNum === currentPage;
          return (
            <button
              key={i}
              onClick={() => jumpToPage(i)}
              className={`px-3 py-1 border rounded transition ${
                isActive
                  ? "bg-blue-500 text-white font-bold"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EBook;
