import React, { useEffect } from "react";
import { Worker, Viewer, ScrollMode } from "@react-pdf-viewer/core";
import { scrollModePlugin } from "@react-pdf-viewer/scroll-mode";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "pdfjs-dist/build/pdf.worker.entry";

const FirstPaperModel = () => {
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

  // Page input state
  const [pageInput, setPageInput] = React.useState("");

  const handleJump = () => {
    const pageNum = parseInt(pageInput, 10);
    if (!isNaN(pageNum)) {
      jumpToPage(pageNum - 1); // 👈 pages are 0-based internally
      setPageInput("");
    }
  };

  return (
    <div className="h-full w-full md:w-[85%] mx-auto">
      <div className="py-10">
        <h1 className="text-center text-xl font-bold">
          HSC Model Test 1st-Part
        </h1>
      </div>

      {/* PDF viewer */}
      <div className="h-[80vh] border rounded relative">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js">
          <Viewer
            fileUrl="/FirstPaperModel.pdf"
            plugins={[scrollModePluginInstance, pageNavigationPluginInstance]}
            onDocumentLoad={handleDocumentLoad}
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

      {/* Download */}
      <div className="text-center py-6">
        <a
          href="/FirstPaperModel.pdf"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default FirstPaperModel;
