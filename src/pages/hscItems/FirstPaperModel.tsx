import React, { useRef, useState, useEffect } from "react";
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
        </FlipBook>
      </Document>

      {/* Controls */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => flipBook.current?.pageFlip().flipPrev()}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          ◀ Prev
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage + 1} / {numPages}
        </span>
        <button
          onClick={() => flipBook.current?.pageFlip().flipNext()}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default FirstPaperModel;

// import { useState, useEffect } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { useSpring, animated } from "react-spring";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

// // Use a compatible pdf worker
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

// const FlipbookPDF = () => {
//   const [numPages, setNumPages] = useState<number>(0);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [direction, setDirection] = useState<"left" | "right">("right");

//   const [pdfLoaded, setPdfLoaded] = useState(false);

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//     setPdfLoaded(true);
//   };

//   // Flip animation
//   const flipAnimation = useSpring({
//     transform:
//       direction === "right"
//         ? "rotateY(0deg)"
//         : "rotateY(180deg)",
//     from: {
//       transform:
//         direction === "right"
//           ? "rotateY(-180deg)"
//           : "rotateY(0deg)",
//     },
//     reset: true,
//     config: { mass: 2, tension: 300, friction: 30 },
//   });

//   const handleNext = () => {
//     if (currentPage < numPages) {
//       setDirection("right");
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setDirection("left");
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") handleNext();
//       if (e.key === "ArrowLeft") handlePrevious();
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [currentPage, numPages]);

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       <h1 className="text-center text-2xl font-bold mb-6">
//         HSC Model Test 1st-Part
//       </h1>

//       <div className="relative h-[80vh] w-full border rounded overflow-hidden shadow-md bg-white flex items-center justify-center">
//         <Document
//           file="/FirstPaperModel.pdf"
//           onLoadSuccess={onDocumentLoadSuccess}
//           loading={<div>Loading PDF...</div>}
//         >
//           <animated.div style={{ ...flipAnimation }} className="w-full h-full">
//             <Page
//               pageNumber={currentPage}
//               width={800}
//               loading=""
//               renderAnnotationLayer={false}
//               renderTextLayer={false}
//             />
//           </animated.div>
//         </Document>

//         {/* Navigation buttons */}
//         {pdfLoaded && (
//           <>
//             <button
//               onClick={handlePrevious}
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-gray-700"
//               disabled={currentPage === 1}
//             >
//               ◀
//             </button>
//             <button
//               onClick={handleNext}
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-gray-700"
//               disabled={currentPage === numPages}
//             >
//               ▶
//             </button>
//           </>
//         )}
//       </div>

//       {/* Page number controls */}
//       <div className="flex items-center justify-center gap-3 py-6">
//         <span className="text-gray-700">
//           Page {currentPage} / {numPages}
//         </span>
//         <input
//           type="number"
//           min="1"
//           max={numPages}
//           value={currentPage}
//           onChange={(e) =>
//             setCurrentPage(
//               Math.min(numPages, Math.max(1, parseInt(e.target.value)))
//             )
//           }
//           className="w-16 border rounded px-2 py-1 text-center"
//         />
//       </div>

//       {/* Download button */}
//       <div className="text-center py-6">
//         <a
//           href="/FirstPaperModel.pdf"
//           download
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Download PDF
//         </a>
//       </div>
//     </div>
//   );
// };

// export default FlipbookPDF;
