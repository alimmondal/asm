import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const EBook = () => {
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
        file="/Oxford-Fluency-Essentials.pdf"
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
          <div
            className="w-full h-full bg-[#EFE5D6] text-green-500 flex flex-col items-center justify-center text-center px-3 md:px-6"
            // style={{
            //   backgroundImage: `url('/bookCover2.jpg')`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   width: "100%",
            //   height: "100%",
            // }}
          >
            <div className="w-full h-full bg-[#EFE5D6] text-green-500 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">📖 First Paper Model book</h1>
              <p className="mt-2">Welcome! Swipe or click to begin.</p>
            </div>
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

export default EBook;

// import { useState, useEffect } from "react";
// import { Worker, Viewer, ScrollMode } from "@react-pdf-viewer/core";
// import { scrollModePlugin } from "@react-pdf-viewer/scroll-mode";
// import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "pdfjs-dist/build/pdf.worker.entry";

// const EBook = () => {
//   const scrollModePluginInstance = scrollModePlugin();
//   const { switchScrollMode } = scrollModePluginInstance;

//   const pageNavigationPluginInstance = pageNavigationPlugin();
//   const {
//     jumpToNextPage,
//     jumpToPreviousPage,
//     CurrentPageLabel,
//     NumberOfPages,
//     jumpToPage,
//   } = pageNavigationPluginInstance;

//   const handleDocumentLoad = () => {
//     switchScrollMode(ScrollMode.Horizontal);
//   };

//   // States
//   const [pageInput, setPageInput] = useState("");
//   const [totalPages, setTotalPages] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1); // track current page

//   const handleJump = () => {
//     const pageNum = parseInt(pageInput, 10);
//     if (!isNaN(pageNum)) {
//       jumpToPage(pageNum - 1); // 0-based
//       setPageInput("");
//     }
//   };

//   // 👇 Keyboard navigation (ArrowLeft ←, ArrowRight →)
//   useEffect(() => {
//     const handleKeyDown = (e: any) => {
//       if (e.key === "ArrowRight") {
//         jumpToNextPage();
//       } else if (e.key === "ArrowLeft") {
//         jumpToPreviousPage();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [jumpToNextPage, jumpToPreviousPage]);

//   return (
//     <div className="h-full w-full md:w-[85%] mx-auto">
//       <div className="py-10">
//         <h1 className="text-center text-xl font-bold">E-Book</h1>
//       </div>

//       {/* PDF viewer */}
//       <div className="h-[100vh] border rounded relative">
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js">
//           <Viewer
//             fileUrl="/Oxford-Fluency-Essentials.pdf"
//             plugins={[scrollModePluginInstance, pageNavigationPluginInstance]}
//             onDocumentLoad={(e) => {
//               handleDocumentLoad();
//               setTotalPages(e.doc.numPages); // store total pages
//             }}
//             onPageChange={(e) => setCurrentPage(e.currentPage + 1)} // update on page change
//           />
//         </Worker>

//         {/* Prev / Next buttons */}
//         <button
//           onClick={jumpToPreviousPage}
//           className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-gray-700"
//         >
//           ◀
//         </button>
//         <button
//           onClick={jumpToNextPage}
//           className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-gray-700"
//         >
//           ▶
//         </button>
//       </div>

//       {/* Page number controls */}
//       <div className="flex items-center justify-center gap-3 py-4">
//         <span className="text-gray-700">
//           Page <CurrentPageLabel /> / <NumberOfPages />
//         </span>

//         <input
//           type="number"
//           min="1"
//           className="w-16 border rounded px-2 py-1 text-center"
//           placeholder="Go to"
//           value={pageInput}
//           onChange={(e) => setPageInput(e.target.value)}
//         />
//         <button
//           onClick={handleJump}
//           className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
//         >
//           Go
//         </button>
//       </div>

//       {/* Page number row */}
//       <div className="flex flex-wrap justify-center gap-2 py-4">
//         {Array.from({ length: totalPages }, (_, i) => {
//           const pageNum = i + 1;
//           const isActive = pageNum === currentPage;
//           return (
//             <button
//               key={i}
//               onClick={() => jumpToPage(i)}
//               className={`px-3 py-1 border rounded transition ${
//                 isActive
//                   ? "bg-blue-500 text-white font-bold"
//                   : "hover:bg-blue-500 hover:text-white"
//               }`}
//             >
//               {pageNum}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default EBook;
