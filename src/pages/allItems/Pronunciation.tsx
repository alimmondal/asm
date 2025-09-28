// import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
// import frontCover from "../../../public/bookCover.jpg";

const Pronunciation = () => {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState<number | "">("");
  const [isPortrait, setIsPortrait] = useState(false); // 🔥 auto mode

  const totalPages = 50; // Update when you add more pages

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
  return (
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
          <div className="absolute top-1/4 md:top-[30%] left-[12%] md:left-[42%] px-5">
            <div className="">
              <h1 className="text-9xl text-center mb-5">📖</h1>
              <h2 className="text-green-500 text-3xl text-center">
                Pronunciation
              </h2>
              <p className="text-black text-center font-bold">
                শুদ্ধ উচ্চারণ শেখার সহজ উপায়
              </p>
              <p className="text-center text-blue-500">
                Click/touch to read the book
              </p>
            </div>
          </div>
          <img src="/bookCover3.jpg" className="w-full h-full" alt="" />
        </div>

        {/* page1 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 1</h2>
          <div className="">
            <p className="text-xs md:text-base">
              ভূমিকা <br />
              ইংরেজিতে যারা দক্ষ হতে চান, বিশেষ করে ন্যাটিভ স্পিকারদের মত যারা
              শুদ্ধ উচ্চারণে কথা বলতে চান বা বিদেশীদের কথা বুঝতে চান তাদের জন্য
              আমাদের বই <br />
              শুদ্ধ উচ্চারণ শেখার আন্তর্জাতিক স্বীকৃত পদ্ধতি হচ্ছে IPA
              (International Phonetic Alphabet), বইটিতে IPA কে রুট হিসাবে
              বিবেচনা করে সহজ পদ্ধতিতে বিভিন্ন রুলস ও টেকনিকসহ উদাহরণের মাধ্যমে
              দেখানো হয়েছে। <br />
              শুদ্ধ উচ্চারণ শেখার জন্য IPA অনুসরণ করে শেখাই সবচেয়ে কার্যকর
              পন্থা। কারণ, ইংরেজির এমন কিছু ধ্বনি বা উচ্চারণ রয়েছে যা প্রকাশের
              জন্য বাংলায় কোন বর্ণ নেই। উদাহরণস্বরুপ, 'Pen' শব্দটির 'P' উচ্চারণ
              করতে অনেকটা 'ফ' এর মত মনে হয়, অর্থাৎ, 'প' ও 'ফ' এর মাঝামাঝি একটি
              উচ্চারণ যেটি বাংলায় কোন বর্ণ নেই। এজন্য, মূলতঃ বইটিতে উল্লেখিত
              উদাহরণ বার বার প্র্যাকটিসের মাধ্যমে শুদ্ধ উচ্চারণ আয়ত্ত্ব করতে
              হবে। <br />
              সবশেষে সুপ্রিয় শিক্ষার্থীদের প্রতি অনুরোধ বইটিতে কোন ভুল/অসংগতি
              চোঁখে পরলে নীচের ই-মেইলে জানালে কৃতজ্ঞ থাকবো। <br />
              ধন্যবাদান্তে,
            </p>
          </div>
        </div>

        {/* page2 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 2</h2>
          <div className="">
            <p className="font-bold">Alphabet (এ্যালফাবেট) এর সঠিক উচ্চারণ</p>
            <div className="w-full flex  justify-evenly text-sm md:text-base">
              <p className="">
                A = এই <br />
                B = বী <br />
                C = সী <br />
                D = ডী <br />
                E = ঈ <br />
                F = এফ <br />
                G = জী <br />
                H = এইচ্ <br />
                | = আই <br />
                J = জ্বেই <br />
                K = খেই <br />
                L = এল্ <br />
                M = এ্যম্ <br />
                N = এন্‌ <br />
              </p>
              <p className="">
                {" "}
                0 = ওউ <br />
                P = ফী <br />Q = খীউ <br />
                R = আ (র) <br />S = এস্ <br />T = ঠী <br />
                U = ইউ <br />V = ভীই <br />W = ডাবল্ইউ <br />X = এক্স <br />Y =
                ওয়াই <br />Z = জেড/জি <br />
                (British-জেড, American- জি) <br />
              </p>
            </div>
          </div>
        </div>

        {/* page3 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 3</h2>
          {/* 1 */}
          <div className="">
            <p className="font-bold">কখন “দা” এবং কখন "দি” হবে</p>

            <div className="text-sm md:text-base">
              <p className="">
                সূত্রঃ "দাদির CV" <br />
                দা = C (Consonant) <br />
                দি = V (Vowel) <br />
                <br />
                ➡️ The এর পর যদি Vowel sound থাকে তবে এর উচ্চারণ 'দি' এর মতো
                হবে। যেমন: <br />
                The egg = দি এগ <br />
                The apple = দি অ্যাপল <br />
                The honest boy = দি অনিষ্ট বয় <br /> <br />
                ✨ The এর পর যদি Consonant sound থাকে তবে এর উচ্চারণ 'দা' এর মতো
                হবে। <br />
                যেমন: <br />
                The ball = দা বল <br />
                The holy Quran = দা হৌলি কুরআন <br />
                The country = দা খানট্টি <br />
                The book = দা বুক <br />
              </p>
              <p className=""></p>
            </div>
          </div>
        </div>

        {/* page4 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 4</h2>
          <div className="">
            <p className="font-bold">Sound: P, T & K</p>
            <div className="text-sm md:text-base">
              <p className="">
                P, T & K এই ৩টি অক্ষরের উচ্চারণ সঠিক হলে শুদ্ধ উচ্চারণের ৩০%
                সঠিক হয়ে যাবে। সাধারণতঃ আমরা বাংলাদেশীরা এ ৩টি লেটারকে পি, টি,
                কে এর মত উচ্চারণ করি, কিন্তু Native speaker রা এগুলো P (ফি), T
                (ঠি), K (খেই) উচ্চারণ করে থাকে। <br />
                Ph -ফ <br />
                Th - 'ঠ' <br />
                Kh - খ <br />
                Aspirated Sound এর বৈশিষ্ট্যঃ <br />
                এগুলো উচ্চারণের সময় মুখ দিয়ে বেশি পরিমানে বাতাস বের হবে। যেমনঃ{" "}
                <br />
                P এর উচ্চারণ ph অনেকটা 'ফ' এর মত হবে। <br />
                T এর উচ্চারণ th অনেকটা 'ঠ' এর মত হবে। <br />
                K এর উচ্চারণ kh অনেকটা 'খ' এর মত হবে। <br />
                'P Sound' বা উচ্চারণ' <br />
                Pen ফেন <br />
                Pin ফিন <br />
                Pain ফেইন
              </p>
            </div>
          </div>
        </div>

        {/* page5 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 5</h2>
          <div className="">
            <p className="font-bold">Example of P, T, C, Q & K</p>
            <div className="flex justify-between text-sm md:text-base">
              <p className="">
                <span className="font-semibold">❇️'T' Sound বা উচ্চারণঃ </span>
                <br />
                Time = ঠাইম <br />
                Table = ঠেইবল <br />
                Talk = ঠোক <br />
                Today = ঠুডেই <br />
                Touch = ঠাচ <br />
                Tuition = ঠিউশন <br />
                <span className="font-semibold">❇️'K, C, Q' Sound' </span>
                <br />
                Cat = খ্যাট <br />
                question = খোয়েশচন <br />
                Cute = খিউট <br />
              </p>
              <p className="">
                Country = খান্ট্রি <br />
                Carry = খ্যারি <br />
                Caption = খ্যাপশন <br />
                Curious = খিউওরিয়াশ <br />
                Kick = খিক <br />
                kind = খাইন্ড <br />
                Kite = খাইট <br />
                king = খিং <br />
                queen = খুইন <br />
                quarrel = খুআরল <br />
                quarter = খুআটা
              </p>
            </div>
            <p className="pt-2">
              Note: উচ্চারণে সম্পূর্ণ পারফেকশন আনার জন্য ক্যামব্রিজসহ অন্যান্য
              অনলাইন ডিকশনারীতে যে কোন শব্দ লিখে সার্চ দিয়ে অডিও শুনে শুনে
              প্র্যাকটিস করতে হবে। অনলাইন ডিকশনারীঃ www.dictionary.cambridge.org
            </p>
          </div>
        </div>

        {/* page6 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 6</h2>
          <div className="">
            <p className="font-bold">সবসময় কি Aspirated হবে? </p>
            <div className=" text-sm md:text-base">
              না, এটা কখনো Aspirated হবে কখনো হবে না। <br />
              নিচের রুলগুলোতে শিখবো কখন Aspirated হবে আর কখন হবে না। <br />
              <span className="font-semibold">Rule-1</span> <br />
              'Word' এর শুরুতে 'p, t, k, c, q' থাকলে সেই Sound-গুলো Aspirated
              হয়। অর্থাৎ সেই অক্ষরগুলোর উচ্চারণ 'ফ' , 'ঠ' , ও 'খ' এর মত হয়ে
              থাকে।
              <br />
              যেমনঃ Pot (ফট), Team (ঠিম), kind (খাইন্ড) <br />
              <span className="font-semibold">Rule-2</span> <br />
              'S' এর পর 'p, t, k' থাকলে সেই Sound- টি Aspirated হবে না। এ
              ক্ষেত্রে বাংলা প, ট, ক এর মতই উচ্চারিত হবে। যেমনঃ <br />
              {/* 'Sp' স্প <br /> */}
              Spot-স্পট <br />
              Spy- স্পাই <br />
              {/* 'St' স্ট <br /> */}
              stop - স্টপ <br />
              Stay- স্টেই <br />
              {/* 'Sk' স্ক <br /> */}
              Sky – স্কাই <br />
              Basket - বাস্কিট <br />
            </div>
          </div>
        </div>

        {/* page7 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 7</h2>
          <div className="">
            <p className="font-bold">'p, t, k, c, q' </p>
            <div className=" text-sm md:text-base">
              <span className="font-semibold">Rule-3</span> <br />
              'Word' এর শেষে 'p, t, k, c, q' থাকলে সেই Sound-গুলো Aspirated হয়
              না। অর্থাৎ সেই অক্ষরগুলোর উচ্চারণ 'প', 'ট', 'ক' এর মত হয়। 'ফ','ঠ',
              'খ' এর মত নয়। যেমনঃ <br />
              Clap = ফ্ল্যাপ <br />
              Deep = ডিপ <br />
              <span className="font-semibold">Rule-4</span> <br />
              'Word' এর মাঝখানে যখন 'p, t, k' থাকে সেই Sound- কখনও Aspirated হয়,
              আবার কখনও Aspirated হয় না। যদি মাঝের অক্ষরটির 'p/t/k' উপর stress
              দেয়া হয়, তাহলে Sound-টি Aspirated হবে; আর যদি stress দেয়া না হয়,
              তাহলে Sound-টি Aspirated হবে না। যেমনঃ <br />
              appoint = অফোইন্ট <br />
              Fatal = ফেইঠল <br />
              compose = খমফৌজ <br />
            </div>
          </div>
          <p className="heading2 text-center pt-3">ASM English Academy</p>
        </div>

        {/* page8 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 8</h2>
          <div className="">
            <p className="font-bold"> Pronunciation of "R"</p>
            <div className=" text-sm md:text-base">
              <p className="">
                ব্রিটিশরা কোথাও কোথাও 'R' এর উচ্চারণ করে; আবার কোথাও কোথাও 'R'
                এর উচ্চারণ করে না। আবার আমেরিকানরা সর্বদাই 'R' এর উচ্চারণ করতে
                অভ্যস্ত। <br />
                আমরা সবখানেই 'R' এর উচ্চারণ করে থাকি। তবে, ইংরেজি বলার সময়
                আমাদের ব্রিটিশ ও আমেরিকান: এই দুই ধরনের উচ্চারণের মিশ্রণ সমীচীন
                নয়। কাজেই, চলুন জেনে নিই ব্রিটিশরা কোথায় 'R' এর উচ্চারণ করে; আর
                কোথায় করে না।
                <br />
                <br />
                ব্রিটিশরা 'R' যখন উচ্চারণ করে থাকেঃ <br />
                ১. শব্দের এর শুরুতে 'R'/ Vowel er purbe R থাকলে ব্রিটিশরা 'R' এর
                উচ্চারণ করে থাকে। যেমনঃ <br />
                Read = রিড <br />
                Rice = রাইস <br />
                Ring = রিং
              </p>
            </div>
          </div>
        </div>

        {/* page9 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 9</h2>
          <div className="">
            <p className="font-medium"> R এর উচ্চারণ: </p>
            <div className=" text-sm md:text-base">
              <p className="">
                ২. শব্দের এর শুরুতে 'Wr' থাকলে ব্রিটিশরা 'R' এর উচ্চারণ করে
                থাকে। যেমনঃ <br />
                Write - রাইট <br />
                ব্রিটিশরা 'R' যখন উচ্চারণ করে নাঃ <br />
                ১. 'word' এর শেষে 'R' থাকলে ব্রিটিশরা 'R' এর উচ্চারণ করে না।
                যেমনঃ <br />
                {/* actorঅ্যাকটো
              <br />  */}
                Brother = ব্রাদা <br />
                Teacher = ঠিচা <br />
                ২. 'word এর শেষে 'Re' থাকলেও ব্রিটিশরা 'R' এর উচ্চারণ করে না।
                যেমনঃ <br />
                care = খ্যায়া <br />
                fare = ফ্যায়া <br />
                ৩. 'word' এর মধ্যে 'R' এর পর pure consonant থাকলে ব্রিটিশরা 'R'
                এর উচ্চারণ করে না। যেমনঃ <br />
                cart = খাট <br />
                Saturday = স্যটাডেই{" "}
              </p>
              <p className="text-center pt-7 heading2">ASM English Academy</p>
            </div>
          </div>
        </div>

        {/* page10 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 10</h2>
          <div className="">
            <p className="font-bold"> IPA </p>
            <div className=" text-sm md:text-base">
              Vowel & Consonant sound <br />
              <p className="">
                ইংরেজিতে মোট ৪৪টি সাউন্ড রয়েছে। এই ৪৪টি সাউন্ড সঠিকভাবে উচ্চারণ
                শিখতে পারলে আমরাও ন্যাটিভদের মত শুদ্ধ ও স্মার্ট উচ্চারণে
                ইংরেজিতে কথা বলতে পারবো। ৪৪টি সাউন্ড এর মধ্যে 20 Vowel sound &
                24 consonant sound. <br />
                এই সাউন্ডগুলোর উচ্চারণ মূলতঃ IPA (International Phonetic
                Alphabet) দিয়ে লেখা হয়। IPA হচ্ছে সঠিকভাবে ইংরেজি উচ্চারণের
                আন্তর্জাতিক সিম্বল। IPA সিম্বলগুলো slash /-/ বন্ধনীর মাধ্যমে
                দেখানো হয়। <br />
                যেমনঃ A-/eɪ/, Day - /deɪ/, Good - /gud/ <br />
                আমি আপনাদেরকে পর্যায়ক্রমে ব্যাসিক থেকে IPA সিম্বল অনুযায়ী
                বিভিন্ন উদাহরণের মাধ্যমে শেখানোর চেষ্টা করবো।
              </p>
              <br />
              Let's get started.
            </div>
          </div>
        </div>

        {/* page11 */}
        <div className="p-3 text-black md:p- bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold ">Page 11</h2>
          <div className="">
            <p className="font-bold"> IPA (Vowel-1) </p>
            <p className="text-xs md:text-base">
              প্রতিটি সিম্বলগুলো আয়ত্ব করে ফেলুন। কারণ, এ সিম্বলগুলো রপ্ত করলেই
              শব্দের সঠিক উচ্চারণ বের করতে সক্ষম হবেন।
            </p>
            <div className=" text-sm md:text-base">
              <div className="flex justify-center pt-1">
                {/* Left Table */}
                <table className="table-auto border-collapse border border-gray-400 shadow-md">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        IPA
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                        B.P.
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        Word
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        IPA
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                        B.P.W.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /iː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ঈ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        see
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /siː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        সী
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɪ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ই
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        sit
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /sɪt/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        সিট
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /eɪ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        এই
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        say
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /seɪ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        সে
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /æ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        এ্যা
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        cat
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /kæt/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ক্যাট
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɑː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        car
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /kɑː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        কার
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ʌ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        cup
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /kʌp/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        কাপ
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɒ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        অ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        hot
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /hɒt/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        হট
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /oʊ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        উ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        go
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɡoʊ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        গো
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɔː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ও
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        law
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /lɔː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ল’
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ʊ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        উ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        book
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /bʊk/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        বুক
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* page12  */}
        <div className="p-3 text-black md:p- bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold ">Page 12 </h2>
          <div className="">
            <p className="font-bold"> IPA (Vowel-2) </p>
            <p className="text-xs md:text-base">
              প্রতিটি সিম্বলগুলো আয়ত্ব করে ফেলুন। কারণ, এ সিম্বলগুলো রপ্ত করলেই
              শব্দের সঠিক উচ্চারণ বের করতে সক্ষম হবেন।
            </p>
            <div className=" text-sm md:text-base">
              <div className="flex justify-center">
                <table className="table-auto border-collapse border border-gray-400 shadow-md">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        IPA
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                        B.P.
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        Word
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        IPA
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                        B.P.W
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /uː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ঊ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        food
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /fuːd/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ফু:ড
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ʌ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        sun
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /sʌn/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        সান
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ə/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        অ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        about
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /əˈbaʊt/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আ'বাউট
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /j/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ই
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        yes
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /jes/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ইয়েস
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /w/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ও<sup>আ</sup>
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        we
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /wiː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        উই
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /iə/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ইয়া
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        idea
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /aɪˈdiə/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আই'ডিয়া
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /eə/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        এয়া
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        air
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /eə/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        এয়ার
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ʊə/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        উয়া
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        poor
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /pʊə/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        পুয়া
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /e/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        এ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        red
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /red/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        রেড
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɛ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        এ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        bed
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /bɛd/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        বেড
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* page13 */}
        <div className="p-3 text-black md:p- bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold ">Page 13</h2>
          <div className="">
            <p className="font-bold"> IPA (Consonant-1) </p>
            <p className="text-xs md:text-base">
              এ সিম্বলগুলো রপ্ত করলেই শব্দের সঠিক উচ্চারণ বের করতে সক্ষম হবেন।
            </p>
            <div className="text-sm md:text-base">
              <div className="flex justify-center pt-1 ">
                <div className="">
                  <table className="table-auto border-collapse border border-gray-400 shadow-md">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                          Bangla
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          Word
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                          Bangla
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /v/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ভ (v)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          van
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /væn/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ভ্যান
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /θ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          থ (th)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          think
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /θɪŋk/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          থিঙ্ক
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ð/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          দ (dh)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          this
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ðɪs/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          দিস
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /s/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          স (s)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          sun
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /sʌn/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          সান
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /z/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          য (z)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          zoo
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /zuː/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          জু
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ʃ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          শ (sh)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          she
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ʃiː/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          শি
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ʒ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ঝ (zh)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          vision
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ˈvɪʒən/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ভিঝন
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /tʃ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          চ (ch)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          chair
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /tʃeə/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          চেয়ার
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /dʒ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          জ (j)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          job
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /dʒɒb/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          জব
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /m/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ম (m)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          man
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /mæn/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ম্যান
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /n/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ন (n)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          net
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /net/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          নেট
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* page14 */}
        <div className="p-3 text-black md:p- bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold ">Page 14</h2>
          <div className="">
            <p className="font-bold"> IPA (Consonant-2) </p>
            <p className="text-xs md:text-base">
              এ সিম্বলগুলো রপ্ত করলেই শব্দের সঠিক উচ্চারণ বের করতে সক্ষম হবেন।
            </p>
            <div className="text-sm md:text-base">
              <div className="flex justify-center pt-1 ">
                <div className="flex md:flex-row gap-3 p-1">
                  {/* Right Table */}
                  <table className="table-auto border-collapse border border-gray-400 shadow-md">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                          Bangla
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          Word
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                          Bangla
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ŋ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ঙ (ng)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          sing
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /sɪŋ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          সিং
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /l/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ল (l)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          lip
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /lɪp/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          লিপ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /r/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          র (r)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          red
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /red/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          রেড
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /h/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          হ (h)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          hat
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /hæt/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          হ্যাট
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /p/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          প (p)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          pen
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /pen/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          পেন
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /b/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ব (b)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          bat
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /bæt/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ব্যাট
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /t/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ট (t)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          top
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /tɒp/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          টপ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /d/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ড (d)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          dog
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /dɒɡ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ডগ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /k/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ক (k)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          cat
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /kæt/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          খ্যাট
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /g/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          গ (g)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          go
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ɡoʊ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          গৌ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /f/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ফ (f)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          fan
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /fæn/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ফ্যান
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* page15 */}
        <div className="p-3 text-black md:p- bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold ">Page 15</h2>
          <div className="">
            <p className="font-bold"> IPA (Diphthongs) </p>
            <div className="">
              <p className="text-sm md:text-base">
                দুটি vowel সিম্বল একত্রে হলে তাকে Diphthongs বলা হয়। এ ক্ষেত্রে
                দ্বিতীয় ধ্বনিটি খুবই মৃদুভাবে উচ্চারণ করতে হয়।যেমনঃ
              </p>
            </div>
            <div className="text-sm md:text-base">
              <div className="flex justify-center pt-1">
                <table className="table-auto border-collapse border border-gray-400 shadow-lg">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border border-gray-400 px-4 py-1">IPA</th>
                      <th className="border border-gray-400 px-4 py-1">
                        উচ্চারণ
                      </th>
                      <th className="border border-gray-400 px-4 py-1">Word</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/eɪ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        এ<sup>ই</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Able (এইবল)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/aɪ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        আ<sup>ই</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        buy (বাই)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/ɪə/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        ই<sup>য়া</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Deer (ডিয়া(র))
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/eə/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        এ<sup>আ</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Hair (হিয়া(র))
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/ɔɪ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        অ<sup>ই</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Toy (ঠই)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/ʊə/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        উ<sup>আ</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Sure (শুয়া(র))
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/aʊ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        আ<sup>উ</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Now (নাউ)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/əʊ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        অ<sup>উ</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        So (সৌ)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="pt-8 heading2 text-center">ASM English Academy</p>
            </div>
          </div>
        </div>

        {/* page16 */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-1">Page 16</h2>
          <div className="">
            <p className="font-medium">Verb Contraction (সংকোচন):</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Contraction হল Subject + Verb একত্রে উচ্চারণ করা। Spoken English
                এ এটি গুরুত্বপূর্ণ। এক্ষেত্রে আমাদের IPA সিম্বলকেই ফলো করতে হবে।
              </p>
              <div className="overflow-x-auto p-1">
                <table className="table-auto border-collapse border border-gray-300 shadow-md w-full text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        Short form
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        IPA
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        উচ্চারণ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["I’m", "/aɪm/", "আইম"],
                      ["I’ve", "/aɪv/", "আইভ"],
                      ["I’d", "/aɪd/", "আইড"],
                      ["I’ll", "/aɪl/", "আইল"],
                      ["We’re", "/wɪə/", "উইআ"],
                      ["We’ve", "/wiːv/", "উইভ"],
                      ["We’d", "/wiːd/", "উইড"],
                      ["We’ll", "/wiːl/", "উইল"],
                      ["You’re", "/jʊə/", "ইউআ"],
                      ["You’ve", "/juːv/", "ইউভ"],
                    ].map(([shortForm, ipa, bangla], index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-1 py-1">
                          {shortForm}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {ipa}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {bangla}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* page17 */}
        <div className="p-2 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-1">Page 17</h2>
          <div className="">
            <p className="font-medium">Contraction(সংকোচন): </p>

            <div className=" text-sm md:text-base">
              <div className="overflow-x-auto p-1">
                <table className="table-auto border-collapse border border-gray-300 shadow-md w-full text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        Short form
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        IPA
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        উচ্চারণ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["You’d", "/juːd/", "ইউড"],
                      ["Don’t", "/dəʊnt/", "ডোন্ট"],
                      ["Doesn’t", "/dʌznt/", "ডাজন্"],
                      ["Didn’t", "/dɪdnt/", "ডিডন্"],
                      ["Shouldn’t", "/ˈʃʊdnt/", "শুডন্"],
                      ["Won’t", "/wəʊnt/", "উওন্"],
                      ["Wouldn’t", "/wʊdnt/", "উডন্"],
                      ["Can’t", "/kɑːnt/", "কান্ট"],
                      ["Couldn’t", "/ˈkʊdnt/", "কুডন্"],
                      ["Mayn’t", "/ˈmeɪənt/", "মেইআন্ট"],
                      ["Mightn’t", "/maɪtnt/", "মাইঠন্"],
                      ["Mustn’t", "/ˈmʌsnt/", "মাসন্"],
                    ].map(([shortForm, ipa, bangla], index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-1 py-1">
                          {shortForm}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {ipa}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {bangla}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* page18 */}
        <div className="p-2 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-1">Page 18</h2>
          <div className="">
            <p className="font-medium">Contraction(সংকোচন): </p>

            <div className=" text-sm md:text-base">
              <div className="overflow-x-auto p-1">
                <table className="table-auto border-collapse border border-gray-300 shadow-md w-full text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        Short form
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        IPA
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        উচ্চারণ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["He’s", "/hiːz/", "হিজ"],
                      ["He’d", "/hiːd/", "হিড"],
                      ["He’ll", "/hiːl/", "হিল"],
                      ["She’s", "/ʃiːz/", "শিজ"],
                      ["She’d", "/ʃiːd/", "শিড"],
                      ["She’ll", "/ʃiːl/", "শিল"],
                    ].map(([shortForm, ipa, bangla], index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-1 py-1">
                          {shortForm}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {ipa}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {bangla}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="heading2 text-center pt-20">ASM English Academy</p>
          </div>
        </div>

        {/* page19 */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-1">Page 19</h2>
          <div className="">
            <p className="font-medium">Elision: </p>
            <div className=" text-sm md:text-base">
              <p className="">
                ইংরেজি দ্রুত বলার আরেকটি মাধ্যম হলো Elision বা ধ্বনিলোপ যেখানে
                ২টি sound এর মধ্যে যে কোন একটি sound এর অনুচ্চারিত থাকে। <br />
                Rule: <br />
                যদি কোন শব্দের শেষ অক্ষর /t/,/d/, /k/থাকে এবং পরবর্তী শব্দের ১ম
                অক্ষর consonant sound থাকে তাহলে ঐ /t/,/d/, /k/এর উচ্চারণ লোপ
                পায়, অর্থাৎ উচ্চারিত হয় না। সেক্ষেত্রে /t/,/d/, /k/এর স্থলে একটা
                ধাক্কা দিয়ে উচ্চারিত হয়। যেমনঃ <br />
                First boy: <br />
                Firs'boy - ফার্স + বয় = ফার্সবয় <br />
                Great poet: <br />
                Grea' poet - গ্রেই + ফৌইট = গ্রেইফৌইট <br />
                Second chance: <br />
                Secon' chance সেকন চ্যান্স = সেকনচ্যান্স <br />
                That man: <br />
                Tha' man- দ্য + ম্যান = দ্যম্যান <br />
              </p>
            </div>
          </div>
        </div>
        {/* page20 */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-1">Page 20</h2>
          <div className="">
            <p className="font-medium">Elision:</p>
            <div className=" text-sm md:text-base">
              <p className="">
                আরো মনে রাখতে Schwa (/ǝ/) প্রকৃতপক্ষে জোর দিয়ে উচ্চারণ করা হয়ে
                থাকে না। যেমনঃ <br />
                1. Diff(e)rent = 'difrent/ ডিফরেন্ট = ডিফ্রেন্ট <br />
                2. Int(e)rest = 'intrest/ ইন+ট্রেস্ট = ইসট্রেস্ট <br />
                3. Libr(a)ry = 'laibri/ - লাই+ব্রি = লাইব্রি <br />
                Magic Rules of English Pronunciation 76 4. Rest(au)rant =
                restront/- রেস-ট্রন্ট = রেসট্রন্ট <br />
                5. Sim(i)lar similo/ সিম+লো = সিমলা <br />
                6. T(o)night = T'night/ ঠ+নাইট ঠনাইট <br />
                7. Veg(e)tables = veg'table - ভেজ+টেবল ভেজটেবল <br />
                8. Yest(er)day = yestoday ইয়েস-টডেই = ইয়েসটডেই <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        {/* page20 */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-1">Page 20</h2>
          <div className="">
            <p className="font-medium">উচ্চারণের টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className=""></p>
            </div>
          </div>
        </div>

        {/* page15 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 15</h2>
          <div className="">
            <p className="font-semibold">উচ্চারণ শেখার শর্টকাট টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-1 <br />
                শব্দের শেষে "e" থাকলে "e" এর উচ্চারণ হয়না। তবে "ee" থাকলে
                উচ্চারিত হবে। উদাহরণ: <br />
                Name - (নেইম) - নাম। <br />
                See - (সী) - দেখা। <br />
                Rule-2 <br />
                শব্দের শুরুতে KN থাকলে তার উচ্চারণ হবে "ন" এক্ষেত্রে K
                অনুচ্চারিত থাকে। <br />
                Know - নৌ - (জানা) <br />
                Knack - ন্যাক - (কৌশল/দক্ষতা) <br />
                👉কিন্তু এগুলোর আগে vowel থাকলে, K উচ্চারিত হয়। যেমন: <br />
                Acknowledge - অ্যাক্সলিজ <br />
                Rule-3
                <br />
                ইংরেজি শব্দের শেষে gh থাকলে তার উচ্চারণ হয় "ফ” অথবা কখনো তা
                অনুচ্চারিত থাকে। উদাহরণ:
                <br />
                Tough - (টাফ) - কঠিন।
                <br />
                High - (হাই) - উচ্চ।
              </p>
            </div>
          </div>
        </div>

        {/* page14 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 14</h2>
          <div className="">
            <p className="font-bold">উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule- 4<br />
                word-এর শেষে 'tion' পাশাপাশি থাকলে 'শন'-এর মতো উচ্চারণ হয়। যেমন:
                <br />
                Nation- (নেইশন) - জাতি
                <br />
                Rule- 5<br />
                M+B পর পর থাকলে এবং B এর পর কোন Vowel না থাকলে B উচ্চারিত হয় না।
                উদাহরণ:
                <br />
                Bomb- (বম)- বোমা।
                <br />
                Rule-6
                <br />
                L+ M পর পর থাকলে এবং পরে vowel না থাকলে L অনুচ্চারিত থাকে।
                উদাহরণ:
                <br />
                Calm- (কাম)- শান্ত।
                <br />
                Rule-7 word-এর মাঝামাঝি 'tu' থাকলে সাধারণত 'চ'-এর মতো উচ্চারণ
                হয়। যেমন:
                <br />
                Nature- (নেইচার)- প্রকৃতি
                <br />
                Rule-8 <br />
                P+ S পরপর থাকলে এবং P এর আগে কোন vowel না থাকলে P অনুচ্চারিত
                থাকে। উদাহরণ: <br />
                Psycho- (সাইকো)- মন।
              </p>
            </div>
          </div>
        </div>

        {/* page15 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 15</h2>
          <div className="">
            <p className="font-bold"> উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-9 <br />
                Word-এর মধ্যে Mpt এর উচ্চারণে p উহ্য। এর উচ্চারণ হবে "মট্”।
                যেমন: <br />
                Attempt - (অ্যাটেম্‌ট্) - চেষ্টা/প্রয়াস। <br />
                Rule-10 <br />Y সাধারণত One-syllable এর শব্দে "আই" হিসেবে
                উচ্চারিত হয়। উদাহরণ: <br />
                Fly -(ফ্লাই) - উড়া। <br />
                ➡️ Two-syllable এর শব্দে Y "ই" হিসেবে উচ্চারিত হয়। <br />
                City - (সিটি) - শহর। <br />
                Rule-11 <br />
                'Wh'-এর উচ্চারনে সাধারণত 'h' এর উচ্চারণ উহ্য থাকবে। যেমন: <br />
                What (ওএ্যঅট) = কী <br />
                কিন্তু , <br />
                Who - (হু) - কে/কারা <br />
                Whom - (হুম) - কাকে/কাদের
              </p>
            </div>
          </div>
        </div>

        {/* page16 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 16</h2>
          <div className="">
            <p className="font-bold"> উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-12 <br />
                'w'-এরপর 'r' থাকলে সাধারণত 'w' উচ্চারিত হয় না। যেমন: <br />
                Write (রাইট) - লেখা <br />
                Rule-13 <br />
                শব্দের শেষে /consonant+y/ থাকলে এবং তা যদি এক syllable-এ
                উচ্চারিত হয়, তখন তার উচ্চারণ হবে বাংলা 'আই' এর মতো। যেমন: <br />
                Fly (ফ্লাই) - উড়ানো, মাছি <br />
                Rule-14 <br />
                শব্দের শেষে ous থাকলে সাধারনতঃ "আস" উচ্চারিত হয়। উদাহরণ:
                <br />
                Delicious (ডেলিশাস) - সুস্বাদু <br />
                Rule-15 <br />
                Word এর শেষে IGN থাকলে তার উচ্চারণ "আইন” হয়। এ ক্ষেত্রে G
                অনুচ্চারিত থাকে। <br />
                Sign (সাইন) - দস্তখত <br />
              </p>
            </div>
          </div>
        </div>

        {/* page17 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 17</h2>
          <div className="">
            <p className="font-bold"> উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-16 <br />
                শব্দের শেষে Sure থাকলে এর উচ্চারণ সাধারণত 'জ' হয়। উদাহরণ: <br />
                Pleasure - প্লেজা (র) <br />
                কিন্তু <br />
                ➡️২টি 's' (ssure) হলে এর উচ্চারণ 'শ' হবে। <br />
                pressure - প্রেশা(র) <br />
                Assure - আশুআ (র) <br />
                Rule-17 <br />
                C এর পরে i, e, y এই তিন অক্ষর থাকলে তার উচ্চারণ হবে বাংলা
                ছ/'স'-এর মতো হয়। যেমন: <br />
                Cease - সিস - বিরতি; স্থগিত <br />
                ➡️ C এর পরে i, e, y না থাকলে উচ্চারণ হবে 'ক'/'খ' এর মতো। যেমন:{" "}
                <br />
                Cat - ক্যাট (UK খ্যাট) - বিড়াল <br />
                Rule-18 <br />
                G এর পরে i, e, y এই তিন অক্ষর থাকলে তার উচ্চারণ হবে সফট্ অর্থাৎ
                বাংলা 'জ'-এর মতো। যেমন: <br />
                Age - এইজ - বয়স; যুগ <br />
              </p>
            </div>
          </div>
        </div>

        {/* page18 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 18</h2>
          <div className="">
            <p className="font-bold"> উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                ➡️G এর পরে i, e, y এই তিন অক্ষর না থাকলে তার উচ্চারণ হবে 'গ'-এর
                মতো। যেমন: <br />
                Again - অ্যগেন/অ্যগেইন - আবার; পুনরায় <br />
                Rule-19 <br />
                শব্দের শেষে que এর উচ্চারণ "ক" হয়ে থাকে। উদাহরণ: <br />
                Cheque - (চেক) - কিস্তি, হুন্ডি। <br />
                Rule-20 <br />
                Consonant+ U+ Consonant এভাবে word গঠিত হলে U এর উচ্চারণ "আ" এর
                মত হয়। উদাহরণ: <br />
                Null - (নাল) - বাতিল <br />
                ব্যতিক্রমঃ <br />
                Put - (পুট) <br />
                Rule-21 <br />
                EA+ R+ consonant এভাবে word গঠিত হলে, EA এর উচ্চারণ "আ" হবে।
                উদাহরণ: <br />
                Heart -(হার্ট) - হৃদয়। <br />
                Rule-22 <br />
                "IO" এর উচ্চারণ সাধারণত "আইয়" হয়। উদাহরণ: <br />
                Violet - (ভাইয়লেইট) - বেগুনী রঙ।
              </p>
            </div>
          </div>
        </div>

        {/* page19 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 19</h2>
          <div className="">
            <p className="font-medium">উচ্চারণ টেকনিকঃ</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-23 <br />
                যেসব শব্দের মধ্যে দু বা তার অধিক syllable থাকে সেখানে যদি শব্দের
                শেষে 'al' থাকে তবে 'a' এর উচ্চারণ উহ্য থাকবে। যেমন: <br />
                Animal - অ্যানিমল্ <br />
                Practical - প্র্যাকটিকল্ <br />
                👉এছাড়া, শব্দের শেষে 'ally' থাকলেও 'a' এর উচ্চারণ হবে না। <br />
                Basically - বেইসকলি <br />
                Automatically - ওটোম্যাটিকলি <br />
                Rule-24 <br />
                'IGH'-এর উচ্চারণ 'G' উচ্চারিত না হয়ে সে অংশটুকুর উচ্চারণ "আই"
                হয়। যেমন: <br />
                {/* Delight (ডিলাইট) - (আনন্দ) <br /> */}
                Light - (লাইট) - (আলো) <br />
                Rule-25 <br />
                শব্দস্থিত OA+ R এভাবে ব্যবহৃত হলে, OA এর উচ্চারণ হবে "অ্য"।
                উদাহরণ: <br />
                Road - (রোড) - রাস্তা। <br />
                Board -(বোর্ড) - মোটা শক্ত কাগজ। <br />
              </p>
            </div>
          </div>
        </div>

        {/* page20 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 20</h2>
          <div className="">
            <p className="font-bold"> উচ্চারণের টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-26 <br />
                Consonant + EA + consonant (R ছাড়া) এভাবে ব্যবহৃত হলে EA এর
                উচ্চারণ "ঈ" হবে। <br />
                Feather - (ফেদার) - পালক। <br />
                Leader - (লিডার) - সর্দার। <br />
                Rule- 27 <br />
                Consonant এরপর ০। এর উচ্চারণ "অই" হয়। উদাহরণ: <br />
                Join - (জইন) - যোগদান করা। <br />
                Rule-28 <br />
                শব্দস্থিত OE এর উচ্চারণ হয় "ঈ"। <br />
                Phoenix - (ফীনিক্স) - রুপ কথার পাখি বিশেষ। <br />
                Amoeba - (এ্যামিবা) - ক্ষুদ্র এক কোষী প্রাণী। <br />
                Rule- 29 <br />
                ইংরেজি শব্দের শেষে TCH থাকলে এর উচ্চারণ হয় "চ"। উদাহরণ: <br />
                Batch - (ব্যাচ) ক্ষুদ্রদল। <br />
              </p>
            </div>
          </div>
        </div>

        {/* page21 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 21</h2>
          <div className="">
            <p className="font-bold"> উচ্চারণের টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-30 <br />
                i + Consonant + E এভাবে ব্যবহৃত হলে তার উচ্চারণ "আই" এর মত হয়।
                উদাহরণ: <br />
                Rice - (রাইস) - চাউল। <br />
                Size - (সাইজ) - আয়তন। <br />
                Rule-31 <br />
                শব্দস্থিত EE + R এভাবে ব্যবহৃত হলে R যদি word শেষ অক্ষর হয় তাহলে
                EE এর উচ্চারণ "ইঅ্যা" হবে উদাহরণ: <br />
                Deer - (ডিয়্যার) - হরিণ। <br />
                Peer - (পিয়‍্যার) - সমকক্ষ। <br />
                Rule-32 <br />
                EE+ consonant (R ছাড়া) এভাবে ব্যবহৃত হলে, EE এর উচ্চরণ "ঈ" হয়।
                উদাহরণ: <br />
                Need - (নীড) - প্রয়োজন। <br />
                {/* Meek - (মীক) - বিনম্র <br /> */}
                Rule-33 <br />
                শব্দস্থিত STL এর উচ্চারণ হয় "সল্” এখানে। অনুচ্চারিত থাকে।
                উদাহরণ: <br />
                Nestle - (নেসল) - বাসা বাঁধা
              </p>
            </div>
          </div>
        </div>

        {/* page22 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 22</h2>
          <div className="">
            <p className="font-bold"> উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-34 <br />
                Vowel এর পর BT এর উচ্চারণ "ট" এক্ষেত্রে "B" অনুচ্চারিত থাকে।
                উদাহরণ: <br />
                {/* Debt (ডেট) - ঋণ। <br /> */}
                Doubtful (ডাউটফুল) - সন্দিহান। <br />
                Rule-35 <br />
                শব্দস্থিত OA+ Consonant এভাবে ব্যবহৃত হলে OA এর উচ্চারণ হয় "ও"।
                উদাহরণ: <br />
                Road (রৌড) - রাস্তা। <br />
                Loan (লৌন) ঋণ। <br />
                Rule-36 <br />
                শব্দের শেষে MN থাকলে সাধারণতঃ N অনুচ্চারিত থাকে। উদাহরণ: <br />
                Damn (ড্যাম) অভিশাপ দেয়া। <br />
                {/* Solemn (সলেম) গুরুগম্ভীর। <br /> */}
                Rule-37 <br />
                Word-এর মধ্যে।I+ R+ Consonant এভাবে Word গঠিত হলে "।" এর উচ্চারণ
                "আই" না হয়ে "আ" হয়। উদাহরণ: <br />
                First (ফাস্ট) - প্রথম। <br />
                Bird (বাড) - পাখি। <br />
                {/* Birth (বাথ) জন্ম। <br /> */}
              </p>
            </div>
          </div>
        </div>

        {/* page23 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 23</h2>
          <div className="">
            <p className="font-medium">উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-38 <br />
                Word এর মধ্যে GH পাশাপাশি থাকলে তা উচ্চারিত হয় না। <br />
                Right - (রাইট) - সঠিক <br />
                Night - (নাইট) - রাত <br />
                Rule-39 <br />
                কোন শব্দে U এরপর consonant + vowel+..... থাকলে U এর উচ্চারণ
                সাধারণত "ইউ" হয়। <br />
                Mute - (মিউট) - স্তব্ধ, নির্বাক। <br />
                Rule-40 <br />
                কোন শব্দে CC+OU/ consonant থাকলে CC এর উচ্চারণ হবে "ক"। উদাহরণ:{" "}
                <br />
                Accuse - (এ্যাকিউজ) - অভিযুক্ত করা। <br />
                According - (এ্যাকর্ডিং) - অনুযায়ী। <br />
                Rule-41 <br />
                Consonant এর পর "AI" এর উচ্চারণ সবসময় "এই" বা "এয়‍্যা" হয়।
                উদাহরণ: <br />
                Rail - (রেইল) - রেলের লাইন। <br />
                Nail - (নেইল) - পেরেক
              </p>
            </div>
          </div>
        </div>

        {/* page24 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 24</h2>
          <div className="">
            <p className="font-medium">উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-42 <br />
                I+ R+ E বর্ণ তিনটি যদি word এর শেষে থাকে তবে এর উচ্চারণ "আয়‍্যা"
                <br />
                Dire - (ডায়‍্যার) - ভয়ংকর। <br />
                Admire - (এ্যাডমায়‍্যার) - তারিফ করা। <br />
                Rule-43 <br />
                কোন শব্দে U এর পূর্বে consonant + R/L+...... থাকলে U এর উচ্চারণ
                সাধারণত "উ" হয়। উদাহরণ: <br />
                Blue - (ব্লু) - নীল। <br />
                True - (ট্র) - সত্য। <br />
                Rule-44 <br />
                U এর পর যদি এমন দুটি Consonant থাকে যাদেরকে আলাদাভাবে উচ্চারণ
                করতে হয় (ফলে প্রথমটিতে একটি syllable শেষ হয় এবং পরেরটিতে আরেকটি
                syllable শুরু হয়) তাহলে ঐ দুটি consonant এর পর E/I/A থাকা সত্বেও
                U - "আ"- এর মত হয়। উদাহরণ: <br />
                Incumbent - (ইনকামবেন্ট) - বাধ্যতামূলক। <br />
                Number - (নাম্বার) - সংখ্যা।
              </p>
            </div>
          </div>
        </div>

        {/* page25 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 25</h2>
          <div className="">
            <p className="font-medium text-base">উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule-45 <br />
                শব্দের মধ্যে DG বা DJ একত্রে থাকলে তার উচ্চারণ হবে 'জ'। D এর
                উচ্চারণ উহ্য থাকবে। <br />
                Badge - (ব্যায) <br />
                Adjective - (অ্যাযিকটিভ) <br />
                Rule-46 <br />
                শব্দের শেষে GUE থাকলে তার উচ্চারণ হবে "গ"। <br />
                Fatigue - (ফেটিগ) <br />
                Rogue - (রৌগ) <br />
                Rule-47 <br />
                Consonant + IA+ Consonant এভাবে Word গঠিত হলে, IA এর উচ্চারণ
                (আইঅ্যা) মত হয়। উদাহরণ: <br />
                Dialogue - (ডায়ালগ) - কথোপকথন। <br />
                Diamond - (ডায়ামন্ড) - হীরক। <br />
                Rule-48 <br />
                শব্দের মধ্যে Ph একসাথে থাকলে Ph' এর উচ্চারণ (ফ) হবে।উদাহরণ:
                <br />
                Phone -ফৌন <br />
                Pharmacy -ফাম'সী
              </p>
            </div>
          </div>
        </div>

        {/* page26 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 26</h2>
          <div className="">
            <p className="font-medium">উচ্চারণ টেকনিক</p>
            <div className="text-sm md:text-base">
              <p className="">
                Rule-49 <br />
                EA + R এভাবে ব্যবহৃত হলে এবং R যদি word এর শেষ বর্ণ হয় তাহলে EA
                এর উচ্চারণ "ঈঅ্যা" হবে। <br />
                Dear - (ডিয়্যার) - প্রিয়। <br />
                Fear - (ফিয়্যার) - ভয়। <br />
              </p>
              <p className="pt-8 font-bold">আরো গুরুত্বপূর্ণ টেকনিক</p>
              <p className="">
                ইংরেজিতে Y এর উচ্চারণঃ <br />
                👉 ইংরেজিতে Y এর উচ্চারণ কখনও long 'e' অর্থাৎ বাংলা "ঈ” উচ্চারণ
                হয়। আবার কখনও short/e/ অর্থাৎ "ই" এবং কখনও "এই" এর মতো উচ্চারণ
                হবে। <br />
                Rule No. 1: <br /> শব্দের শেষে 'ly' থাকলে তার উচ্চারণ হবে এর মতো
                হয়। যেমন: <br />
                Friendly - ফ্রেন্ডলি - বন্ধুত্বপূর্ণ; বন্ধুসুলভ <br />
                Hardly - হাডলি - খুব কমই <br />
              </p>
            </div>
          </div>
        </div>

        {/* page27 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 27</h2>
          <div className="">
            <p className="font-medium">উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule No. 2: <br /> শব্দের শেষে 'ty' থাকলে তার উচ্চারণ হবে long
                'e' অর্থাৎ বাংলা "ঈ" এর মতো। যেমন: <br />
                Ability - অ্যবিলিটি - সক্ষমতা <br />
                Activity - অ্যকটিভ্যটি - কর্মকান্ড <br />
                Rule No 3: <br />
                শব্দের শেষে /ey/ থাকলে এবং তা যদি এক syllable-এ উচ্চারিত হয়, তখন
                তার উচ্চারণ হবে long /e/ অর্থাৎ বাংলা "ঈ" এর মতো।যেমন: <br />
                Honey - হানি - মধু <br />
                Key - কী - চাবি <br />
                Rule No 4: <br />
                শব্দের শেষে /ay/ থাকলে এবং তা যদি এক syllable-এ উচ্চারিত হয়, তখন
                তার উচ্চারণ হবে বাংলা "এই" এর মতো। যেমন: <br />
                Bay - বেই - উপসাগর <br />
                May - মেই - সম্ভাবনা সূচক ক্রিয়া <br />
                Pay - ফেই
              </p>
            </div>
          </div>
        </div>

        {/* page28 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 28</h2>
          <div className="">
            <p className="font-medium">উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="font-semibold">X এর উচ্চারণঃ </p>
              <p className="">
                👉 ইংরেজিতে X এর উচ্চারণ কখনও 'ks'; কখনও বা /gz/ এর মতো হয়; আবার
                কখনও শুধু /z/ এর মতো হয়। <br />
                Rule No. 1: <br /> শব্দের শেষে বা মাঝে 'X' থাকলে তা 'ks' অর্থাৎ
                বাংলায় 'ক্স' এর মতো হয়। যেমন: <br />
                Fox - ফক্স - শেয়াল <br />
                Extra - এক্সট্রা - অতিরিক্ত <br />
                Rule No. 3: <br />
                শব্দের শুরুতে 'vowel+x+vowel' থাকলে তা জোর দিয়ে উচ্চারণ করতে হয়,
                তখন তা 'gz' অর্থাৎ বাংলায় 'ইগ্‌জ' এর মতো হয়। এক্ষেত্রে 'x'
                stressed syllable এর আগে বসে। যেমন: <br />
                Exam - ইগজ্যাম - পরীক্ষা <br />
                Exactly - ইগজাক্টলি - হুবুহু; যথাযথভাবে <br />
                Example - ইগজাম্পল
              </p>
            </div>
          </div>
        </div>

        {/* page29 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 29</h2>
          <div className="">
            <p className="font-medium">উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="font-semibold">L এর উচ্চারণঃ</p>
              <p className="">
                👉 ইংরেজিতে L এর উচ্চারণ কখনও স্পষ্ট অর্থাৎ 'Clear L' sound হয়;
                আবার কখনও অস্পষ্ট হয় অর্থাৎ 'Dark L' sound । <br />
                ❇️ যে L - এর উচ্চারণ জিহ্বার সামনের অংশ দিয়ে উচ্চারণ করা হয়,
                তাকে 'Clear L' sound বলে; <br />
                ❇️ আর যে L - এর উচ্চারণ জিহ্বার পেছনের অংশ দিয়ে উচ্চারণ করা হয়
                তাকে 'Dark L' sound বলে। <br />
                Rule No. 1: <br />
                'L+vowel' থাকলে তা স্পষ্ট অর্থাৎ 'Clear L' sound হয়। অর্থাৎ
                এখানে L-এর উচ্চারণ করতে হবে জিহ্বার সামনের অংশ দিয়ে। <br />
                যেমনঃ শব্দের শুরুতে 'L' থাকলে উচ্চারণ হবে স্পষ্ট অর্থাৎ 'Clear
                L'
                <br />
                Late - লেইট - দেরী; বিলম্বে <br />
                Last - লাস্ট - শেষ; গত <br />
                Little - লিট ('ল) - অল্প; ছোট্ট <br />
                later -লেইটার -
              </p>
            </div>
          </div>
        </div>

        {/* page30 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 30</h2>
          <div className="">
            <p className="font-medium">উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Rule No. 2: <br />
                L + consonant' অথবা 'L' যদি শব্দের শেষে বসে, কিংবা শব্দের শেষে
                যদি 'll' বা 'le' হয়, তাহলেও সেখানে L-এর উচ্চারণ করতে হবে জিহ্বার
                পেছনের অংশ দিয়ে, তখন তাকে বলা হবে অস্পষ্ট বা 'Dark L' sound ।
                <br />
                যেমনঃ
                <br />
                Ball - ব('ল) - বল <br />
                Fool - ফু('ল) - বোকা <br />
                Little - লিট ('ল) - অল্প; ছোট্ট <br />
              </p>
              <p className="text-center pt-16 heading2">ASM English Academy</p>
            </div>
          </div>
        </div>
        {/* page20 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 20</h2>
          <div className="">
            <p className="font-medium">উচ্চারণের টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className=""></p>
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
            className="border px-2 lg:px-8 py-1 rounded w-20 text-center"
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
    </div>
  );
};

export default Pronunciation;
