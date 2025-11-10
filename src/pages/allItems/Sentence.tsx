// import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
// import frontCover from "../../../public/bookCover.jpg";

const Sentence = () => {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState<number | "">("");
  const [isPortrait, setIsPortrait] = useState(false); // 🔥 auto mode

  const totalPages = 20; // Update when you add more pages

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
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

  const contents = [
    { title: "Definition of Sentence", pages: "4-6" },
    { title: "Subject & Predicate", pages: "4-6" },
    { title: "Assertive Sentence", pages: "4-6" },
    { title: "Interrogative Sentence", pages: "7-8" },
    { title: "Imperative Sentence", pages: "9 - 12" },
    { title: "optative Sentence", pages: "13 - 14" },
    { title: "Exclamatory Sentence", pages: "15 - 20" },
    { title: "Simple Sentence", pages: "15 - 20" },
    { title: "Compound Sentence", pages: "15 - 20" },
    { title: "Complex Sentence", pages: "15 - 20" },
    { title: "Exclamatory Sentence", pages: "15 - 20" },

    { title: "Assimilation সন্ধি", pages: "37 - 40" },
    { title: "উচ্চারণ টেকনিক", pages: "41 - 58" },
    { title: "Y এর উচ্চারণ", pages: "55 - 58" },
    { title: "X এর উচ্চারণ", pages: "56 - 58" },
    { title: "Chunking", pages: "59" },
  ];

  const goToPage = (page: number) => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flip(page + 1);
    }
  };

  // const goToContents = () => {
  //   if (flipBook.current) {
  //     flipBook.current.pageFlip().flip(2); // 👈 contents page (Page 2 visually)
  //   }
  // };
  return (
    <div className="">
      <div className="flex flex-col items-center py-4 md:py-10 px-5 md:px-10">
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
            <div className="absolute top-1/4 left-[18%] sm:left-[27%] sm:top-[30%]  md:top-[12%] md:left-[20%] lg:top-[10%] lg:left-[25%] xl:left-[30%] 2xl:left-[35%] 2xl:top-[25%] px-5">
              <div className="">
                <h1 className="text-9xl md:text-5xl lg:text-9xl text-center mb-3">
                  📖
                </h1>
                <h2 className="text-green-500 text-3xl text-center uppercase">
                  Sentence
                </h2>
                <h2 className="text-green-500 text-3xl text-center">বাক্য</h2>
                <p className="text-black text-center font-bold">
                  Sentence & its classification
                </p>
                <p className="text-center text-blue-500">
                  Click/touch to read the book
                </p>
              </div>
            </div>
            <img src="/bookCover3.jpg" className="w-full h-full" alt="" />
          </div>

          {/* page1 */}
          <div className="p-3 text-black md:p-5 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-1">Page 1</h2>
            <div className="">
              <p className="text-xs md:text-sm lg:text-base">
                ভূমিকা <br />
                ইংরেজিতে যারা দক্ষ হতে চান, বিশেষ করে ন্যাটিভ স্পিকারদের মত যারা
                শুদ্ধ উচ্চারণে কথা বলতে চান বা বিদেশীদের কথা বুঝতে চান তাদের
                জন্য আমাদের বই <br />
                শুদ্ধ উচ্চারণ শেখার আন্তর্জাতিক স্বীকৃত পদ্ধতি হচ্ছে IPA
                (International Phonetic Alphabet), বইটিতে IPA কে রুট হিসাবে
                বিবেচনা করে সহজ পদ্ধতিতে বিভিন্ন রুলস ও টেকনিকসহ উদাহরণের
                মাধ্যমে দেখানো হয়েছে। <br />
                শুদ্ধ উচ্চারণ শেখার জন্য IPA অনুসরণ করে শেখাই সবচেয়ে কার্যকর
                পন্থা। কারণ, ইংরেজির এমন কিছু ধ্বনি বা উচ্চারণ রয়েছে যা প্রকাশের
                জন্য বাংলায় কোন বর্ণ নেই। উদাহরণস্বরুপ, 'Pen' শব্দটির 'P'
                উচ্চারণ করতে অনেকটা 'ফ' এর মত মনে হয়, অর্থাৎ, 'প' ও 'ফ' এর
                মাঝামাঝি একটি উচ্চারণ যেটি বাংলায় কোন বর্ণ নেই।
                {/* এজন্য, মূলতঃ বইটিতে উল্লেখিত
              উদাহরণ বার বার প্র্যাকটিসের মাধ্যমে শুদ্ধ উচ্চারণ আয়ত্ত্ব করতে
              হবে।  */}
                <br />
                {/* সবশেষে সুপ্রিয় শিক্ষার্থীদের প্রতি অনুরোধ বইটিতে কোন ভুল/অসংগতি
              চোঁখে পরলে নীচের ই-মেইলে জানালে কৃতজ্ঞ থাকবো। <br /> */}
                ধন্যবাদান্তে,
              </p>
            </div>
          </div>

          {/* page2 */}
          <div className="p-2 text-black md:p-5 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-1">Page 2</h2>
            <div className="w-full flex flex-col items-center">
              <div className="">
                <h2 className="text-sm font-bold mb-1 text-center">
                  index (সূচিপত্র)
                </h2>
                <div className="overflow-x-auto">
                  <table className="table-auto max-w-fit border border-gray-300 shadow-2xl rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 py-1 text-left">
                          Contents
                        </th>
                        <th className="border border-gray-300 px-2 py-1 text-left">
                          Pages
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {contents.slice(0, 7).map((item, index) => {
                        // Take the first page from the range "7-8" → 7
                        const targetPage = parseInt(
                          item.pages.split("-")[0].trim()
                        );

                        return (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } cursor-pointer hover:bg-blue-100`}
                            onClick={() => goToPage(targetPage)}
                          >
                            <td className="border border-gray-300 text-blue-600 px-2 py-1 md:text-base">
                              {item.title}
                            </td>
                            <td className="border border-gray-300 px-2 py-1 text-sm md:text-base text-blue-600 underline">
                              {item.pages}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p className="pt-3 text-center">
              Click/touch any page number to read.
            </p>
          </div>

          {/* page3 */}
          <div className="p-3 text-black md:p-5 lg:p-10 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 3</h2>
            <div className="w-full flex flex-col items-center">
              <div className="">
                <h2 className="text-sm font-bold mb-1 text-center">
                  index (সূচিপত্র)
                </h2>
                <div className="overflow-x-auto">
                  <table className="table-auto max-w-fit border border-gray-300 shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 py-2 text-left">
                          Contents
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-left">
                          Pages
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {contents.slice(8, 15).map((item, index) => {
                        // Take the first page from the range "7-8" → 7
                        const targetPage = parseInt(
                          item.pages.split("-")[0].trim()
                        );
                        return (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } cursor-pointer hover:bg-blue-100`}
                            onClick={() => goToPage(targetPage)}
                          >
                            <td className="border border-gray-300 text-blue-600 px-2 py-1 md:text-base">
                              {item.title}
                            </td>
                            <td className="border border-gray-300 px-2 py-1 text-sm md:text-base text-blue-600 underline">
                              {item.pages}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p className="pt-3 text-center">
              Click/touch any page number to read.
            </p>
          </div>

          {/* page 4 */}
          <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 4</h2>
            <div className="">
              <p className="font-semibold">Chunking: </p>
              <div className=" text-sm md:text-base">
                <p className="">Coming sooooooon.....</p>
                <div className=""></div>
              </div>
            </div>
          </div>
          {/* page 4 */}
          <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 4</h2>
            <div className="">
              <p className="font-semibold">Chunking: </p>
              <div className=" text-sm md:text-base">
                <p className="">Coming sooooooon.....</p>
                <div className=""></div>
              </div>
            </div>
          </div>
          {/* page 4 */}
          <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 4</h2>
            <div className="">
              <p className="font-semibold">Chunking: </p>
              <div className=" text-sm md:text-base">
                <p className="">Coming sooooooon.....</p>
                <div className=""></div>
              </div>
            </div>
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
              disabled={
                jumpPage === "" || jumpPage < 1 || jumpPage > totalPages
              }
              onClick={() => {
                if (
                  typeof jumpPage === "number" &&
                  jumpPage >= 1 &&
                  jumpPage <= totalPages
                ) {
                  flipBook.current.pageFlip().flip(jumpPage);
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
      </div>

      <div className="hidden">
        <p className="">
          Sentence <br />
          Sentence <br />
          A Sentence is a set or combination of words that expresses a complete
          sense or meaning. (এক বা একাধিক শব্দ সমষ্টিবদ্ধ ভাবে ব্যবহৃত হয়ে যদি
          মনের ভাব প্রকাশ করে তাহলে তাকে Sentence বলে) <br />
          Example: He has gone there. <br />
          The basic formula of a sentence <br />
          Singular subject + Singular verb (with s/es) <br />
          Example: The owner of the restaurant always rants about his employees.{" "}
          <br />
          Plural subject + Plural verb (without s/es) <br />
          Example: The employees have made an arrangement for the customers.{" "}
          <br />
          একটি বাক্য গঠনের জন্য subject এবং finite verb সমৃদ্ধ একটি principle
          clause প্রয়োজন। <br />
          Example: <br />
          He wants to do the work <br />
          Or, I want to go there <br />
          Finite verbs are Changeable <br />
          to do/ to go/ to finish- these are non-finite verbs; Unchangeable{" "}
          <br />
          A sentence has two parts: <br />
          Subject (The person or thing about which something is said in the
          sentence- যার সম্বন্ধে বা যাকে উদ্দেশ্য করে কিছু বলা হয়) Predicate
          (What is said about the subject in a sentence– বাক্যের যে অংশে subject
          সম্পর্কে কিছু বলা হয়) <br />
          Subject & Predicate <br />
          In a sentence, the Subject always comes first, and it is made based on
          its Noun and Pronoun. The Predicate, on the other hand, is made based
          on the Verb of a sentence. It can be a single word or a number of
          words too. Example: Brazil has won the world cup. <br />
          Sub Predicate <br />
          Kinds of sentences – part 1 <br />
          Assertive <br />
          Interrogative <br />
          Imperative <br />
          Optative <br />
          Exclamatory <br />
          1. Assertive Sentence <br />
          A sentence that makes a statement or assertion is called an Assertive
          sentence. It is also called “Declarative sentence” <br />
          Example: He speaks English very well. <br />
          There are two types of assertive sentences. <br />
          Affirmative: Conveys the validity or truth of a basic assertion.{" "}
          <br />
          Example: I do have a car/ He knows it well/ We have a good
          neighborhood. <br />
          Negative: It is formed by placing auxiliary
          verbs(am/is/are/was/were/shall/should/could etc.) +not– before the
          main verb to express something false. <br />
          Example: Ex. I do not have a car/ He does not know it well/ We do not
          have a good neighborhood. <br />
          2. Interrogative Sentence <br />
          A sentence that generally asks questions is called an Interrogative
          sentence. <br />
          Example: Who are you talking to? Or Is he home? <br />
          Interrogative sentences start with the auxiliary verbs (to-be verbs){" "}
          <br />
          Or, Wh-words/ Relative pronouns (who/ when/whom etc.) <br />
          3. Imperative Sentence <br />
          It is a kind of sentence that gives orders, commands, or advice and
          expresses proposals, or requests in order to make a statement. <br />
          Example: <br />
          Leave the place at once/Always speak the truth etc. <br />
          Imperative sentences can be negative too. <br />
          As a subject, the second person “YOU” stays invisible. <br />
          4. Optative Sentence <br />
          A type of sentence that expresses a wish, desire, prayer or curse is
          called an Optative sentence <br />
          Example: May God bless you/ Long live our president/ I hope you do
          well. <br />
          Basically starts with “May” but sometimes “May” stays hidden. Simple
          structure – May/ Wish/ Hope+ Assertive <br />
          5. Exclamatory Sentence <br />
          An exclamatory sentence declares a simple statement but also conveys
          strong emotion or excitement and always ends with an exclamation (!)
          mark. <br />
          Example: How peaceful the scenario is! or, If I had so much money!
          <br />
          Starts with What or How: sometimes with “Had” <br />
          Bravo, Alas, Hurrah, Oh, etc. – can also be used to begin the sentence{" "}
          <br />
          Kinds of Sentence- Part 2 <br />
          Simple <br />
          Complex & <br />
          Compound <br />
          1. Simple Sentence <br />
          A sentence that has only one (principal) clause, is known as a simple
          sentence. <br />
          1 subject + 1 finite verb = Simple sentence <br />
          Example: Kamal wants to read this book
          <br />
          2. Complex Sentence <br />
          A sentence that has only one principal clause and one or more
          subordinate clauses is known as a complex sentence. <br />
          P. Clause+Sub-ord clause <br />
          Sub-ord clause + P. Clause <br />
          Example: <br />
          Clause+ Sub-ord clause = I believe that he is honest. <br />
          Sub-ord clause + P. Clause = Although he is poor, he is honest. <br />
          3. Compound Sentence <br />A sentence having more than one principal
          clause connected by one, or more coordinating conjunctions is called a
          Compound sentence. Coordinating conjunctions are- for, and, nor, but,
          or, yet, and so. <br />
          principal clause+ coordinating conjunction+ principal clause <br />
          Example: <br />
          You must give up smoking or you will suffer. <br />
          He worked hard but failed.
        </p>
      </div>

      {/* Scroll view */}
      <div className="px-5 py-5 lg:w-1/2 mx-auto">
        <div className="text-center py-20">
          <h1 className="">Sentence</h1>
          <p className="">A brief discussion on Sentence</p>
        </div>
        <div className="">
          <div className="">
            Sentence কাকে বলে? <br />
            Definition:  পাশাপাশি অবস্থিত কিছু অর্থবোধক শব্দ বা শব্দ সমষ্টি
            দ্বারা যদি সম্পূর্ণভাবে মনের ভাব প্রকাশ পায় তখন ঐ শব্দ সমস্টিকে
            Sentence বা বাক্য বলে। আবার, পাশা পাশি অর্থবোধক শব্দ আছে কিন্তু মনের
            ভাব সম্পূর্ণ ভাবে প্রকাশ করতে পারছে না এমন হলে Sentence বা বাক্য বলা
            যাবে না। নিচে উদাহরণ গুলো লক্ষ্য করুন।  <br />
            Example:
            <br />
            Correct: We speak English everyday. <br />
            (Here We is subject, speak is verb, English is object and everyday
            is an adverb) <br />
            Incorrect:  I pen a have ( I অর্থ আমি, Pen অর্থ কলম, a অর্থ একটি এবং
            have অর্থ আছে। এগুলো অর্থবোধক শব্দ হওয়া সত্ত্বেও ইংরেজির বাক্য
            গঠনরীতি অনুযায়ী সম্পূর্ণভাবে মনের ভাব প্রকাশ করতে না পারায় এটাকে
            বাক্য/Sentence বলা যাবে না। ) <br />
            Generally, there are two parts of a sentence: (একটি Sentence এ মূলত
            দুটি অংশ থাকে- Subject & Predicate)
            <br />
            <br />
            Subject and predicate কাকে বলে? <br />
            Subject: <br />
            কোন Sentence-এ যে ব্যক্তি বা বস্তু সম্পর্কে কোনকিছু বলা বা লিখা হয়
            তাকে Subject বা কর্তা বলে । In other words, বাক্যে যে কাজ করে তাকে
            Subject বলে।
            <br />
            Predicate: <br />
            কোন Sentence-এ subject বা কর্তা সম্পর্কে যা বলা হয় তাকে Predicate
            বলে।
          </div>
          <br />
          <br />
          <div className="">
            Sentence এর প্রকারভেদঃ
            <br />
            <br />
            অর্থ অনুসারে sentence কত প্রকার? <br />
            অর্থ অনুযায়ী ইংরেজিতে Sentence কে সাধারণত পাঁচ ভাগে ভাগ করা যায়।
            <br />
            They are: <br />
            1. Assertive Sentence. <br />
            2. Interrogative Sentence. <br />
            3. Imperative Sentence. <br />
            4. Optative Sentence. <br />
            5. Exclamatory Sentence.
            <br />
            <br />
            Assertive sentence কাকে বলে? <br />
            Assertive Sentence: সাধারণত কোনো বিবৃতি বা বক্তব্য কে Assertive
            Sentence (বিবৃতি মূলক বাক্য) বলে | <br />
            Structure: Subject + Verb + Object/Complement/Adverb/Adjective.{" "}
            <br />
            Example: <br />
            He is an intelligent boy. (Affirmative) <br />
            They are not always happy. (Negative) <br />
            Everybody should know English. (Modal auxiliaries)
            <h3>Short Technique:</h3>
            <p>
              চিনার উপায়ঃ <br />
              ** দ্বিতীয় বাক্যটি Subject দ্বারা শুরু হয় এবং <br />
              ** বাক্যের শেষে full stop থাকে।
            </p>
            <br />
            <br />
            Interrogative sentence কাকে বলে? <br />
            Interrogative Sentence: যে Sentence দিয়ে কোন প্রশ্ন বা  কিছু জিজ্ঞেস
            করা বোঝায় তাকে Interrogative Sentence বলে। <br />
            * It always ends with a note of interrogation question mark (?).
            <br />
            Structure: Auxiliary Verb + Subject + Verb Extension + ? <br />
            Structure: Wh + Auxiliary Verb + Subject + Verb Extension + ?
            <br />
            <br />
            * There are two basic ways to form an interrogative sentence. <br />
            1. Beginning with Auxiliary verbs (am, is, are, was, were, have,
            has, had) or modal auxiliaries (shall, should, will, would, can,
            could, may, might, etc.).
            <br />
            <br />
            Example: <br />
            Do you study in university? <br />
            Does he speak English? <br />
            Did she drive a car? <br />
            Should I go with you? <br />
            Can you hear the sound? <br />
            Don’t you like the dress? (Negative)
            <br />
            <br />
            2. Beginning with some specific words like who, which, what, when,
            where, why, how, whom, how much, how many, etc. [These words are
            specially known as ‘WH’ questions.] <br />
            Example: <br />
            How is your life going on? <br />
            Who fixed the broken door? <br />
            Whom do you like most in your family? <br />
            What are you expecting from the training? <br />
            What is the time now? <br />
            How much money do you need to study abroad?
            <h3>Short Technique</h3>
            <p>
              চিনার উপায়ঃ
              <br />
              ** দ্বিতীয় বাক্যটি Wh/ helping verb দ্বারা শুরু হয় এবং <br />
              ** বাক্যের শেষে প্রশ্নবোধক চিহ্ন থাকে (?)।
            </p>
            <br />
            <br />
            Imperative sentence কাকে বলে? <br />
            Imperative Sentence: সাধারণত যে sentence দ্বারা আদেশ, উপদেশ বা
            অনুরোধ প্রকাশ করা হয় তাকে Imperative Sentence বলে (Imperative
            sentence এর Subject উহ্য থাকে) | <br />
            Structure: Subject (Invisible - You - উহ্য) + Verb + Extension.{" "}
            <br />
            Examples: <br />
            Study attentively. <br />
            Give me some water. <br />
            Do it right now. <br />
            Be honest and truthful. <br />
            Come here <br />
            Speak the truth. <br />
            Never tell a lie. <br />
            Do not laugh at others. <br />
            Let me do I want.
            <h3>Short Technique:</h3>
            <p>
              চিনার উপায়ঃ <br />
              (দ্বিতীয় বাক্যে) Verb দ্বারা বাক্যে শুরু হয় এবং
              আদেশ/অনুরোধ/উপদেশ বোঝায়।
            </p>
            <br />
            <br />
            Optative sentence কাকে বলে? <br />
            Optative Sentence: যে sentence দ্বারা কোন ইচ্ছা, আকাঙ্ক্ষা বা
            প্রার্থনা প্রকাশ করা হয় তাকে Optative Sentence বলে | <br />
            Structure: May + Subject + Verb + Extension. <br />
            Example: <br />
            May Allah bless you. <br />
            May You be happy. <br />
            May you prosper in your life. <br />
            May you live long. <br />
            Long live Bangladesh. (Can also be formed without ‘may’).
            <h3>Short Technique:</h3>
            <p>
              চিনার উপায়ঃ <br />
              দ্বিতীয় বাক্যে May দ্বারা শুরু হয় এবং বাকের শেষে ফুল স্টপ থাকে।
            </p>
            <br />
            <br />
            Exclamatory sentence কাকে বলে? <br />
            Exclamatory Sentence: যে sentence দ্বারা কোন আকস্মিক আনন্দ-বেদনা
            ইত্যাদি প্রকাশ করা হয় তাকে Exclamatory Sentence বলে |  <br />
            Structure: Alas/ Hurrah/ Bravo/ What/ How etc. + Others. <br />
            Example: <br />
            Hurrah! We have won the game. <br />
            Alas! He is no more. <br />
            Hurrah! Our cricket team has won the series. <br />
            Bravo! You have done a great job. <br />
            What a talented boy he is! <br />
            How sweetly the cuckoo sings! <br />
            What a wonderful country Bangladesh is! <br />
            Were I a Super Hero! <br />
            What a pity! <br />
            Fantastic! What a nice idea! <br />
            Put that down now!
            <h3>Short Technique:</h3>
            <p>
              চিনার উপায়ঃ <br />
              দ্বিতীয় বাক্যে May দ্বারা শুরু হয় এবং বাকের শেষে ফুল স্টপ থাকে।
            </p>
          </div>

          <br />
          <br />
          <div className="">
            <h1 className="text-pink-800 text-center">
              গঠন অনুসারে Sentence কত প্রকার?
            </h1>
            <br />
            Structure/গঠন অনুসারে Sentence তিন প্রকার। <br />
            They are: <br />
            1. Simple Sentence <br />
            3. Compound Sentence & <br />
            2. Complex Sentence
            <br />
            <br />
            <p className="text-pink-700 font-bold">
              Simple sentence কাকে বলে? <br />
            </p>
            যে sentence-এ একটি মাত্র subject ও একটি মাত্র finite verb (সমাপিকা
            ক্রিয়া) থাকে তাকে simple sentence বলে | <br />
            Example: <br />
            👉 The boys play football. <br />
            এ sentence-এ একটি মাত্র subject “The boys” ও একটি মাত্র finite verb
            “play".
            <br />
            <br />
            <div className="">
              <p className="text-pink-700 font-bold">
                Compound Sentence কাকে বলে? <br />
              </p>
              যদি একাধিক Principal Clause কোন Sentence-এ and, or, but, yet, so,
              therefore ইত্যাদি Co-ordinating Conjunction দ্বারা যুক্ত হয় তাকে
              Compound Sentence বলে। <br />
              <span className="text-green-500 font-bold">
                Short-techniq:
              </span>{" "}
              একাধিক Simple Sentence যদি and, or, but, yet দ্বারা যুক্ত তবে তাকে
              Compund Sentence বলে। <br />
              Examples: <br />
              👉 He is meritorious but he could not get a job. <br />
              👉 Read or you will fail. <br />
              👉 I went there and found him reading
              <br />
              <br />
              N.B: <br />
              and দ্বারা যুক্ত Compound Sentence এর দ্বিতীয় Subject টি উহ্য
              থাকে । (উভয় Clause-এ Subject এক-ই হওয়ার কারণে)।
              <br />
              <br />
              Co-ordinating Conjunction কিভাবে চিনবো? / Compound Sentence কিভাবে
              চিনবো? <br />
              Co-ordinating Conjunction/Clause/Compound Sentence কিভাবে চিনবো?
              <br />
              Co-ordinating Conjunction: and, or, but, yet, and, so, and so,
              therefore <br />
              তার মানে, কোন Sentence-এ এই Co-ordinating Conjunction গুলো থাকলে
              সাধারণত সেটি Compound Sentence হবে |
              <br />
              <br />
            </div>
            <div className="">
              <p className="text-pink-700 font-bold">
                Complex Sentence কাকে বলে?{" "}
              </p>
              যে sentence-এ একটি Principal Clause এবং এক বা একাধিক Subordinate
              Clause থাকে তাকে Complex Sentence বলে | <br />
              <span className="text-green-500 font-bold">
                Short-techniq:
              </span>{" "}
              একাধিক Simple Sentence যদি and, or, but, yet ছাড়া অন্য Conjunction
              দ্বারা যদি যুক্ত/শুরু হয় তবে তাকে Complex Sentence বলে। <br />
              Conjunction গুল হল: (যেমনঃ Though, although, if, since, as, when/
              wh ইত্যাদি) <br />
              Example: <br />
              👉 Although he is rich, he is not happy. <br />
              👉 or: He is not happy although he is rich. <br />
              👉 I know that he would help me. <br />
              <br />
              <br />
              প্রথম sentence-এ ”Although he is rich” - Subordinate Clause এবং
              “he is not happy”-Principal Clause. <br />
              দ্বিতীয় Sentence-এ “I know” - Principal Clause এবং ”that he would
              help me” - Subordinate Clause. অতএব Sentence দুটি Complex
              Sentence.
              <br />
              <br />
              Subordinate Clause কিভাবে চিনবো? Complex Sentence কিভাবে চিনবো?
              <br />
              Subordinate Clause/Complex Sentence কিভাবে চিনবো?
              <br />
              <br />
              Well, <br />
              Subordinate Conjunction গুল হল: if, though, although, as, because,
              since, so that, that, until, till, unless, when, why, which, who,
              where, how, before, after, whether, while ইত্যাদি word/connectors
              বসে|  <br />
              N.B: তাহলে কোন Clause-এ এই word/connectors গুলো থাকলে সেটি
              Subordinate Clause এবং যে Sentence-এ Subordinate Clause থাকবে সেটা
              Complex Sentence. Take it easy ...... <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentence;
