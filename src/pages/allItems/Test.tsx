import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const Test: React.FC = () => {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  // Add this state at the top
  const [jumpPage, setJumpPage] = useState<number | "">("");

  const totalPages = 8; // Update when you add more pages

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const FlipBook = HTMLFlipBook as any;

  return (
    <div className="flex flex-col items-center py-20 px-5">
      <FlipBook
        width={500}
        height={300}
        className="shadow-2xl rounded"
        style={{ margin: "0 auto" }}
        showCover={true}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        drawShadow={true}
        flippingTime={800}
        usePortrait={true}
        startPage={0}
        autoSize={true}
        clickEventForward={true}
        startZIndex={0}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        onFlip={onFlip}
        ref={flipBook}
      >
        {/* Cover Page */}
        <div className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-3xl font-bold">
          📖 Right Form of Verbs
        </div>

        {/* Rule Pages */}
        <div className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-2">Rule 1</h2>
          <p>
            When sentences contain <b>always, regularly, daily, every day</b> →
            use <b>Present Indefinite</b>.
          </p>
        </div>

        <div className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-2">Rule 2</h2>
          <p>
            When sentences contain <b>now, at this moment, at present</b> → use{" "}
            <b>Present Continuous</b>.
          </p>
        </div>

        <div className="p-6 bg-white" data-density="hard">
          <h2 className="text-xl font-bold mb-2">Rule 3</h2>
          <p>
            When sentences contain <b>yesterday, ago, last night</b> → use{" "}
            <b>Past Indefinite</b>.
          </p>
        </div>

        <div className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-2">Rule 4</h2>
          <p>
            When sentences contain <b>tomorrow, next week, soon</b> → use{" "}
            <b>Future Indefinite</b>.
          </p>
        </div>

        <div className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-2">Rule 5</h2>
          <p>
            When sentences contain <b>since, for, just, already</b> → use{" "}
            <b>Present Perfect</b>.
          </p>
        </div>

        <div className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-2">Rule 6</h2>
          <p>
            When sentences contain <b>before, after, by the time</b> → use{" "}
            <b>Past Perfect</b>.
          </p>
        </div>
        {/* Back Cover */}
        <div className="flex items-center justify-center bg-gray-800 text-white text-xl font-bold">
          🔚 The End
        </div>
      </FlipBook>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4 mt-6">
        <button
          className="px-3 py-1 bg-gray-700 text-white rounded"
          onClick={() => flipBook.current.pageFlip().turnToPrevPage()}
        >
          ◀ Prev
        </button>

        <span className="text-lg font-semibold">
          Page {currentPage + 1} / {totalPages}
        </span>

        <button
          className="px-3 py-1 bg-gray-700 text-white rounded"
          onClick={() => flipBook.current.pageFlip().turnToNextPage()}
        >
          Next ▶
        </button>
      </div>

      {/* Jump to Page */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="number"
          min="1"
          max={totalPages}
          value={jumpPage}
          onChange={(e) => {
            const value = e.target.value;
            setJumpPage(value === "" ? "" : parseInt(value, 10));
          }}
          className="border px-2 py-1 rounded w-20 text-center"
          placeholder="Go to..."
        />
        <button
          className="px-3 py-1 bg-indigo-600 text-white rounded disabled:opacity-50"
          disabled={jumpPage === "" || jumpPage < 1 || jumpPage > totalPages}
          onClick={() => {
            if (
              typeof jumpPage === "number" &&
              jumpPage >= 1 &&
              jumpPage <= totalPages
            ) {
              flipBook.current.pageFlip().flip(jumpPage - 1);
            }
          }}
        >
          Go
        </button>
      </div>

      {/* Numbered Page Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded border ${
              currentPage === i
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => flipBook.current.pageFlip().flip(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Test;

// import { useRef, useState } from "react";
// import HTMLFlipBook from "react-pageflip";

// const VerbsBook = () => {
//   const flipBook = useRef<any>(null);
//   const [currentPage, setCurrentPage] = useState(0);

//   // totalPages = number of pages in your book
//   const totalPages = 25; // Example with many pages

//   const onFlip = (e: any) => {
//     setCurrentPage(e.data);
//   };

//   const FlipBook = HTMLFlipBook as any;

//   return (
//     <div className="flex flex-col items-center py-10">
//       {/* Flipbook */}
//       <FlipBook
//         width={500}
//         height={700}
//         showCover={true}
//         className="shadow-2xl rounded"
//         style={{ margin: "0 auto" }}
//         flippingTime={800}
//         usePortrait={true}
//         onFlip={onFlip}
//         ref={flipBook}
//       >
//         {/* Cover */}
//         <div className="flex items-center justify-center bg-indigo-600 text-white text-3xl font-bold">
//           📖 Right Form of Verbs
//         </div>

//         {/* Example Pages */}
//         {Array.from({ length: totalPages - 2 }, (_, i) => (
//           <div key={i} className="p-6 bg-white">
//             <h2 className="text-xl font-bold mb-2">Rule {i + 1}</h2>
//             <p>Example explanation for rule {i + 1}...</p>
//           </div>
//         ))}

//         {/* Back Cover */}
//         <div className="flex items-center justify-center bg-gray-800 text-white text-xl font-bold">
//           🔚 The End
//         </div>
//       </FlipBook>

//       {/* Navigation Controls */}
//       <div className="flex flex-wrap items-center gap-3 mt-6">
//         <button
//           className="px-3 py-1 bg-gray-700 text-white rounded"
//           onClick={() => flipBook.current.pageFlip().flip(0)}
//         >
//           ⏮ First
//         </button>

//         <button
//           className="px-3 py-1 bg-gray-700 text-white rounded"
//           onClick={() => flipBook.current.pageFlip().turnToPrevPage()}
//         >
//           ◀ Prev
//         </button>

//         <span className="text-lg font-semibold">
//           Page {currentPage + 1} / {totalPages}
//         </span>

//         <button
//           className="px-3 py-1 bg-gray-700 text-white rounded"
//           onClick={() => flipBook.current.pageFlip().turnToNextPage()}
//         >
//           Next ▶
//         </button>

//         <button
//           className="px-3 py-1 bg-gray-700 text-white rounded"
//           onClick={() => flipBook.current.pageFlip().flip(totalPages - 1)}
//         >
//           ⏭ Last
//         </button>
//       </div>

//       {/* Scrollable Numbered Page Buttons */}
//       <div className="w-full max-w-2xl mt-4 overflow-x-auto">
//         <div className="flex gap-2 whitespace-nowrap px-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               className={`px-3 py-1 rounded border text-sm ${
//                 currentPage === i
//                   ? "bg-indigo-600 text-white"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//               onClick={() => flipBook.current.pageFlip().flip(i)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerbsBook;

// @ts-ignore
// import FlipPage from "react-flip-page";

// or
// import FlipPageLib from "react-flip-page";
// const FlipPage: any = FlipPageLib;

// function Test() {
//   return (
//     <div className="flex justify-center py-10 px-5">
//       <FlipPage
//         orientation="horizontal"
//         width={500}
//         height={700}
//         className="shadow-2xl rounded-xl bg-white p-5"
//         showHint
//         animationDuration={600}
//         pageBackground="#fff"
//       >
//         <article>
//           <h1>Right Form of Verbs</h1>
//           <p>Intro text...</p>
//         </article>
//         <article>
//           <h2>Rule 1</h2>
//           <p>Always, regularly, daily... → Present Indefinite</p>
//         </article>
//         <article>
//           <h2>Rule 2</h2>
//           <p>Now, at this moment... → Present Continuous</p>
//         </article>
//         <article>
//           <h2>Rule 3</h2>
//           <p>Now, at this moment... → Present Continuous</p>
//         </article>
//         <article>
//           <h2>Rule 4</h2>
//           <p>Now, at this moment... → Present Continuous</p>
//         </article>
//         <article>
//           <h2>Rule 5</h2>
//           <p>Now, at this moment... → Present Continuous</p>
//         </article>
//       </FlipPage>
//     </div>
//   );
// }
// export default Test;
