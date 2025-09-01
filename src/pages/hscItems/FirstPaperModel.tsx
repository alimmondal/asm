import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const FirstPaperModel = () => {
  const flipBook = useRef<any>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 600, height: 800 });
  const [gotoPage, setGotoPage] = useState<string>("");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: 300, height: 400 });
      } else {
        setDimensions({ width: 600, height: 800 });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const FlipBook = HTMLFlipBook as any;

  // Go to page handler
  const handleGotoPage = () => {
    const pageNum = parseInt(gotoPage, 10);
    const totalPages = numPages + 2; // Cover + PDF pages + Back

    if (!isNaN(pageNum) && pageNum >= 0 && pageNum < totalPages) {
      flipBook.current?.pageFlip().flip(pageNum);
    }
    setGotoPage("");
  };

  return (
    <div className="flex flex-col items-center py-6">
      <Document
        file="/FirstPaperModel.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <FlipBook
          width={dimensions.width}
          height={dimensions.height}
          showCover={true}
          mobileScrollSupport={true}
          ref={flipBook}
          onFlip={(e: any) => setCurrentPage(e.data)}
          className="shadow-2xl rounded-lg"
        >
          {/* --- Cover Page --- */}
          <div className="w-full h-full bg-blue-600 text-white flex flex-col items-center justify-center text-center px-3 md:px-6">
            <h1 className="text-3xl font-bold">📖 First Paper Model book</h1>
            <p className="mt-2">Welcome! Swipe or click to begin.</p>
          </div>

          {/* --- PDF Pages --- */}
          {Array.from(new Array(numPages), (_, i) => (
            <div key={i} className="bg-white flex items-center justify-center">
              <Page
                pageNumber={i + 1}
                width={dimensions.width - 40}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}

          {/* --- Back Page --- */}
          <div className="bg-gray-800 text-white flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-2xl font-semibold">🎉 The End</h2>
            <p className="mt-2">Thanks for reading!</p>
          </div>
        </FlipBook>
      </Document>

      {/* Controls */}
      <div className="flex flex-col items-center gap-4 mt-6">
        {/* Prev / Next */}
        <div className="flex gap-4">
          <button
            onClick={() => flipBook.current?.pageFlip().flipPrev()}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            ◀ Prev
          </button>
          <span className="text-lg font-semibold">
            Page {currentPage} / {numPages + 1}
          </span>
          <button
            onClick={() => flipBook.current?.pageFlip().flipNext()}
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            Next ▶
          </button>
        </div>

        {/* Number Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {Array.from(new Array(numPages + 2), (_, i) => (
            <button
              key={i}
              onClick={() => flipBook.current?.pageFlip().flip(i)}
              className={`px-3 py-1 rounded ${
                currentPage === i
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i === 0 ? "Cover" : i === numPages + 1 ? "Back" : i}
            </button>
          ))}
        </div>

        {/* Go To Page Input */}
        <div className="flex gap-2 items-center mt-2">
          <input
            type="number"
            min="0"
            max={numPages + 1}
            value={gotoPage}
            onChange={(e) => setGotoPage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGotoPage()}
            placeholder={`0 - ${numPages + 1}`}
            className="w-28 px-2 py-1 border rounded text-center"
          />
          <button
            onClick={handleGotoPage}
            className="px-4 py-1 bg-blue-600 text-white rounded"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPaperModel;
