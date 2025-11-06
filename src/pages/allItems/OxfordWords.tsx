import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

import "@react-pdf-viewer/core/lib/styles/index.css";

import data from "../../../data.json";

const OxfordWords = () => {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState<number | "">("");
  const [isPortrait, setIsPortrait] = useState(false); // 🔥 auto mode

  const totalPages = 24; // Update when you add more pages

  // 🔊 Add audio ref for page flip sound
  const flipSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    flipSound.current = new Audio("/sounds/mixkit-page-turn-single-1104.wav");
    flipSound.current.volume = 1.0; // optional: adjust volume
  }, []);

  // Play sound on flip
  const onFlip = (e: any) => {
    setCurrentPage(e.data);
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current.play();
    }
  };

  const FlipBook = HTMLFlipBook as any;

  // 🔥 Detect screen size & adjust orientation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile & small tablets → Portrait
        setIsPortrait(true);
      } else {
        // Desktop → Landscape
        setIsPortrait(false);
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper: play sound when flipping manually
  const playFlipSound = () => {
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current
        .play()
        .catch((err) => console.warn("Playback prevented:", err));
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center py-10 px-5 md:px-10">
        <FlipBook
          width={isPortrait ? 400 : 500} // smaller width for portrait
          height={isPortrait ? 600 : 300} // taller height for portrait
          className="shadow-2xl rounded"
          style={{
            margin: "0 auto",
            backgroundImage: "url('/bookBg.jpg')",
            backgroundSize: "cover",
          }}
          showCover={true}
          size="stretch"
          minWidth={300}
          maxWidth={1200}
          minHeight={300}
          maxHeight={900}
          drawShadow={true}
          flippingTime={800}
          usePortrait={isPortrait} // 🔥 auto toggle
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
          <div
            data-density="hard"
            className="font-bold relative book"
            // style={{
            //   backgroundImage: `url(${frontCover})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   width: "100%",
            //   height: "100%",
            // }}
          >
            <div className="absolute top-1/4 md:top-[30%] left-[15%] md:left-1/3">
              <div className="">
                <h1 className="text-9xl text-center pb-3">📖</h1>
                <h2 className="text-green-500 text-3xl text-center">
                  Oxford 3000 Essential Words
                </h2>
                <p className="text-center text-white">
                  Click/touch to read the book
                </p>
              </div>
            </div>
            <img src="/bookCover3.jpg" className="w-full h-full" alt="" />
          </div>

          {/* page1 */}
          <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 1</h2>

            <div className="">
              <p className="text-xs md:text-base">
                ভূমিকা <br />
                বিশ্বের সর্ববৃহৎ এবং সবচেয়ে গ্রহণযোগ্য ইংরেজি অভিধান হলো Oxford
                English Dictionary এটি তৈরি করেছে-Oxford University Press Oxford
                <br />
                University Press ইংরেজি ভাষার শব্দভাণ্ডার থেকে ৩ হাজার শব্দ
                বাছাই করেছে। তাদের ভাষ্যমতে এই শব্দগুলো প্রচলিত ইংরেজি ভাষার ৯০
                শতাংশ! ফলে কেউ মাত্র এই ৩ হাজার শব্দ শিখতে পারলে- পত্রিকা,
                ম্যাগাজিন, জার্নাল, টিভি চ্যানেল, আর্টিক্যাল, বইপত্র ও কথোপকথনের
                ৯০ শতাংশ শিখে ফেলতে পারবে! ইংরেজি পড়া, বুঝা, লেখা ও বলায় ফুয়েতি
                আনতে Oxford University Press এই তিন হাজার শব্দের তালিকা করেছে।
                <br />
                এই বইতে থাকছে-
                <br />
                *সেই ৩ হাজার শব্দ
                <br />
                *IPA অনুসারে প্রতিটি শব্দের উচ্চারণ
                <br />
                *সেই শব্দের উপরে ক্লিক করলে যেতে পারবেন original ডিকশনারিতে
                <br />
                *শব্দার্থ
                <br />
                *প্রতিটি শব্দ দিয়ে একটি করে বাক্য
                <br />
                *বাক্যের অর্থ
                <br />
                *বাক্যে ব্যবহৃত Appropriate Preposition
                <br />
                *জটিল শব্দ-বাক্যের ব্যাখ্যা
                <br />
                ধন্যবাদান্তে,
              </p>
            </div>
          </div>

          {/* page2 */}
          <div className="p-3 text-black md:p-24 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 2</h2>
            <ul className="flex flex-wrap gap-2 items-center justify-center ">
              {" "}
              {/* 👈 parent flex */}
              {data.slice(0, 14).map((item: any, index: number) => (
                <a
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="border border-gray-50 p-1 text-blue-600 hover:underline"
                  href={item.link}
                >
                  <li key={index} className="">
                    {`${index + 1}. ${item.word}`}-
                  </li>
                  <li>{item.BengaliMeaning}</li>
                </a>
              ))}
            </ul>
          </div>

          {/* page3 */}
          <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 3</h2>
            <ul className="lg:hidden flex flex-wrap gap-2 items-center justify-center ">
              {/* 👈 parent flex */}
              {data.slice(15, 28).map((item: any, index: number) => (
                <a
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="border border-gray-50 p-1 text-blue-600 hover:underline"
                  href={item.link}
                >
                  <li key={index} className="">
                    {`${index + 1}. ${item.word}`}-
                  </li>
                  <li>{item.BengaliMeaning}</li>
                </a>
              ))}
            </ul>
            <ul className="hidden lg:flex flex-wrap gap-2 items-center justify-center ">
              {/* 👈 parent flex */}
              {data.slice(15, 28).map((item: any, index: number) => (
                <a
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="border border-gray-50 p-3 text-blue-600 hover:underline"
                  href={item.link}
                >
                  <li key={index} className="">
                    {`${index + 1}. ${item.word}`}-
                  </li>
                  <li>উচ্চারণ: {item.banglaPronunciation}</li>
                  <li>Meaning: {item.BengaliMeaning}</li>
                </a>
              ))}
            </ul>
          </div>

          {/* Back Cover */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600  text-white text-xl font-bold">
            <div className="w-full h-full text-7xl flex flex-col items-center justify-center">
              <p className="">🔚 </p>
              <p className="">The End</p>
            </div>
          </div>
        </FlipBook>

        {/* Button section */}
        <div className="flex flex-col items-center">
          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              className="px-3 py-1 bg-gray-700 text-white rounded"
              onClick={() => {
                playFlipSound();
                flipBook.current.pageFlip().turnToPrevPage();
              }}
            >
              ◀ Prev
            </button>

            <span className="text-lg font-semibold">
              Page {currentPage + 1} / {totalPages}
            </span>

            <button
              className="px-3 py-1 bg-gray-700 text-white rounded"
              onClick={() => {
                playFlipSound();
                flipBook.current.pageFlip().turnToNextPage();
              }}
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
                playFlipSound();
                const value = e.target.value;
                setJumpPage(value === "" ? "" : parseInt(value, 10));
              }}
              className="border px-1 py-1 rounded w-20 text-center"
              placeholder="Go to..."
            />
            <button
              className="px-3 py-1 bg-indigo-600 text-white rounded disabled:opacity-50"
              disabled={
                jumpPage === "" || jumpPage < 1 || jumpPage > totalPages
              }
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
                onClick={() => {
                  playFlipSound();
                  flipBook.current.pageFlip().flip(i);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* scrolling effect */}
      <div className="py-10">
        <div className="container mx-auto p-2">
          <div className="overflow-x-auto">
            <table className="md:w-full min-w-[300px] table-auto  border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-1 px-1 border-b">Words</th>
                  <th className="py-1 px-1 border-b">Phonemic transcription</th>
                  <th className="py-1 px-1 border-b">banglaPronunciation</th>
                  <th className="py-1 px-1 border-b">Meaning</th>
                  <th className="py-1 px-1 border-b">Examples</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: any) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-1 px-1 border-b hover:bg-blue-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link}
                        className=""
                      >
                        {index + 1}. <br /> ${item.word}
                      </a>
                    </td>
                    <td className="py-1 px-1 border-b">{item.phonetic}</td>
                    <td className="py-1 px-1 border-b">
                      {item.banglaPronunciation}
                    </td>
                    <td className="py-1 px-1 border-b">
                      {item.BengaliMeaning}
                    </td>
                    <td className="py-1 px-1 border-b">{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="py-10 w-[60%] mx-auto h-screen">
        <div>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl="/Oxford-Fluency-Essentials.pdf" />
          </Worker>
        </div>
      </div> */}
    </div>
  );
};

export default OxfordWords;
