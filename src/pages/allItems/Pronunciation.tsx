// import { Link } from "react-router-dom";
import "pdfjs-dist/build/pdf.worker.entry";
import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
// import frontCover from "../../../public/bookCover.jpg";

const Pronunciation = () => {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState<number | "">("");
  const [isPortrait, setIsPortrait] = useState(false); // 🔥 auto mode

  const totalPages = 24; // Update when you add more pages

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
          <div className="absolute top-1/4 md:top-[30%] left-[25%] md:left-1/3">
            <div className="">
              <h1 className="text-9xl text-center">📖</h1>
              <h2 className="text-green-400 text-3xl text-center">
                Pronunciation
              </h2>
              <p className="text-center text-white">
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
              আমরা বাংলাদেশীরা স্কুল/কলেজ/ভার্সিটিতে যেভাবে ইংরেজি উচ্চারণ শিখে
              এসেছি সেভাবেই উচ্চারণ করতে অভ্যস্ত, যা বিদেশী বা ন্যাটিভদের সাথে
              অনেকাংশে মিল হয় না। কিন্তু, গ্লোবালাইজেশনের এ যুগে বিভিন্ন
              ক্ষেত্রে বিদেশীদের সাথে আমাদের কথা বলতে বা কমিউনিকেট করতে হয়।
              এজন্য, সময় এসেছে ন্যাটিভরা যেভাবে কথা বলে সেভাবে শুদ্ধ উচ্চারণে
              কথা বলতে শেখার। <br />
              শুদ্ধ উচ্চারণ শেখার আন্তর্জাতিক স্বীকৃত পদ্ধতি হচ্ছে IPA
              (International Phonetic Alphabet), বইটিতে IPA কে রুট/বেস হিসাবে
              বিবেচনা করে সহজ পদ্ধতিতে বিভিন্ন রুলস ও টেকনিকসহ প্রচুর উদাহরণের
              মাধ্যমে দেখানো হয়েছে। <br />
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
          {/* 1 */}
          <div className="">
            <p className="font-bold">Alphabet (এ্যালফাবেট) এর সঠিক উচ্চারণ</p>
            <div className="w-full flex  justify-between text-sm md:text-base">
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
                0 = ওউ <br />
                P = ফী <br />Q = খীউ
              </p>
              <p className="">
                R = আ (র) <br />S = এস্ <br />T = ঠী <br />U = ইউ <br />V = ভীই{" "}
                <br />W = ডাবল্টউ <br />X = এক্স <br />Y = ওয়াই <br />Z = জেড/জি{" "}
                <br />
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
                দি = V (Vowel) <br />
                দা = C (Consonant) <br /> <br />
                ✨ The এর পর যদি Vowel sound থাকে তবে এর উচ্চারণ 'দি' এর মতো
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
          {/* 1 */}
          <div className="">
            <p className="font-bold">Aspirated Sound: P, T & K</p>
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
                এগুলো উচ্চারণের সময় মুখ দিয়ে বেশি পরিমানে বাতাস বের হবে। <br />
                যেমনঃ P এর উচ্চারণ ph অনেকটা 'ফ' এর মত হবে। <br />
                T এর উচ্চারণ th অনেকটা 'ঠ' এর মত হবে। <br />
                K এর উচ্চারণ kh অনেকটা 'খ' এর মত হবে। <br />
                'P Sound' বা উচ্চারণ' <br />
                Pen ফেন <br />
                Pin ফিন <br />
                Peace ফীচ <br />
                Pain ফেইন <br />
              </p>
            </div>
          </div>
        </div>

        {/* page5 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 5</h2>

          <div className="">
            <p className="font-bold">Example of T, C, Q & K</p>
            <div className="flex justify-between text-sm md:text-base">
              <p className="">
                <span className="font-semibold">❇️ 'T' Sound বা উচ্চারণঃ </span>
                <br />
                Time = ঠাইম <br />
                Table = ঠেইবল <br />
                Talk = ঠোক <br />
                Today = ঠুডেই <br />
                Touch = ঠাচ <br />
                Tense = ঠেনস <br />
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
                Comment = খমেন্ট <br />
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
          {/* 1 */}
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
            {/* <p className="font-bold"> Aspirated rules: </p>  */}
            <div className=" text-sm md:text-base">
              <span className="font-semibold">Rule-3</span> <br />
              'Word' এর শেষে 'p, t, k, c, q' থাকলে সেই Sound-গুলো Aspirated হয়
              না। অর্থাৎ সেই অক্ষরগুলোর উচ্চারণ 'প', 'ট', 'ক' এর মত হয়। 'ফ','ঠ',
              'খ' এর মত নয়। যেমনঃ <br />
              {/* 10 Words ending with 'P' <br />
              'No Aspirated Sound' বা উচ্চারণ Capখ্যাপ <br /> */}
              Clap = ফ্ল্যাপ <br />
              Deep = ডিপ <br />
              Camp = খ্যাম্প <br />
              {/* Copখপ <br />
              Cupখাপ <br />
              Cheapচিপ <br />
              Slapস্ন্যাপ <br />
              Sleepস্লিপ <br />
              Sipসিপ <br />
              Backupব্যাকআপ <br /> */}
              <span className="font-semibold">Rule-4</span> <br />
              'Word' এর মাঝখানে যখন 'p, t, k' থাকে সেই Sound- কখনও Aspirated হয়,
              আবার কখনও Aspirated হয় না। যদি মাঝের অক্ষরটির 'p/t/k' উপর stress
              দেয়া হয়, তাহলে Sound-টি Aspirated হবে; আর যদি stress দেয়া না হয়,
              তাহলে Sound-টি Aspirated হবে না। যেমনঃ <br />
              {/* Words with 'P/T/K' with stress <br />
              'Aspirated Sound বা উচ্চারণ <br /> */}
              appoint = অফোইন্ট <br />
              Fatal = ফেইঠল <br />
              compose = খমফৌজ <br />
              metal = মেঠল <br />
              {/* appealঅফিল <br />
              completeখমফিট <br />
              leopardলেফাড <br />
              actorঅ্যাকটো <br />
              Important ইমফঠান্ট <br />
              Water ওয়াঠা (র) <br />
              encourageইনখারিজ <br />
              remarkableরিমাখাবল <br />
              ticketটিখিট */}
            </div>
          </div>
        </div>

        {/* page8 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 8</h2>
          <div className="">
            <p className="font-bold"> Pronunciation of "R"</p>
            <div className=" text-sm md:text-base">
              ব্রিটিশরা কোথাও কোথাও 'R' এর উচ্চারণ করে; আবার কোথাও কোথাও 'R' এর
              উচ্চারণ করে না। আবার আমেরিকানরা সর্বদাই 'R' এর উচ্চারণ করতে
              অভ্যস্ত। <br />
              আমরা বাংলাদেশিরা আবার আমেরিকানদের মতো 'Accent' অর্থাৎ বাচনভঙ্গি না
              করতে পারলেও প্রায় সবখানেই 'R' এর উচ্চারণ করে থাকি। তবে, ইংরেজি
              বলার সময় আমাদের ব্রিটিশ ও আমেরিকান: এই দুই ধরনের উচ্চারণের মিশ্রণ
              সমীচীন নয়। কাজেই, চলুন জেনে নিই ব্রিটিশরা কোথায় 'R' এর উচ্চারণ
              করে; আর কোথায় করে না।
              <br />
              <br />
              ব্রিটিশরা 'R' যখন উচ্চারণ করে থাকেঃ <br />
              ১. শব্দের এর শুরুতে 'R' থাকলে ব্রিটিশরা 'R' এর উচ্চারণ করে থাকে।
              যেমনঃ <br />
              {/* 'Word' বা 'British Pronunciation' বা উচ্চারণ Rateরেইট <br /> */}
              Read = রিড <br />
              Rice = রাইস <br />
              Ring = রিং <br />
              Road = রৌড <br />
            </div>
          </div>
        </div>

        {/* page9 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 9</h2>
          <div className="">
            {/* <p className="font-bold"> Aspirated rules: </p>  */}
            <div className=" text-sm md:text-base">
              ২. শব্দের এর শুরুতে 'Wr' থাকলে ব্রিটিশরা 'R' এর উচ্চারণ করে থাকে।
              যেমনঃ <br />
              ব্রিটিশরা 'R' যখন উচ্চারণ করে নাঃ <br />
              ১. 'word' এর শেষে 'R' থাকলে ব্রিটিশরা 'R' এর উচ্চারণ করে না। যেমনঃ{" "}
              <br />
              {/* 'Word' বা শব্দ 'British Pronunciation' বা উচ্চারণ actorঅ্যাকটো{" "}
              <br /> */}
              Brother = ব্রাদা <br />
              Doctor = ডকঠো <br />
              Father = ফাদা <br />
              Teacher = ঠিচা <br />
              ২. 'word এর শেষে 'Re' থাকলেও ব্রিটিশরা 'R' এর উচ্চারণ করে না।
              যেমনঃ <br />
              {/* 'Word' বা শব্দ 'British Pronunciation' বা উচ্চারণ careখ্যায়া{" "} */}
              fare = ফ্যায়া <br />
              here = হিয়া <br />
              there = দেয়া <br />
              more = মো <br />
              ৩. 'word' এর মধ্যে 'R' এর পর pure consonant থাকলে ব্রিটিশরা 'R' এর
              উচ্চারণ করে না। যেমনঃ <br />
              {/* 'Word' বা শব্দ 
              'British Pronunciation' বা উচ্চারণ */}
              cart = খাট <br />
              chart = চাট <br />
              Saturday = স্যটাডেই <br />
              dark = ডাখ <br />
              {/* partফাট <br /> */}
            </div>
          </div>
        </div>

        {/* page10 */}
        <div className="p-3 text-black md:p-16 bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page 10</h2>
          <div className="">
            <p className="font-bold"> IPA (International Phonetic Alphabet) </p>
            <div className=" text-sm md:text-base">
              Vowel & Consonant sound <br />
              ইংরেজিতে মোট ৪৪টি সাউন্ড রয়েছে। বিদেশীরা যেভাবে শুদ্ধ উচ্চারণে কথা
              বলে এর মূল ভিত্তি মূলতঃ ৪৪টি সাউন্ড। এই ৪৪টি সাউন্ড সঠিকভাবে
              উচ্চারণ শিখতে পারলে আমরাও ন্যাটিভদের মত শুদ্ধ ও স্মার্ট উচ্চারণে
              ইংরেজিতে কথা বলতে পারবো। ৪৪টি সাউন্ড এর মধ্যে 20 Vowel sound & 24
              consonant sound. <br />
              Vowel sound ২ ধরনেরঃ <br />
              Single vowel sound <br />
              Double Vowel sound <br />
              এই সাউন্ডগুলোর উচ্চারণ মূলতঃ IPA (International Phonetic Alphabet)
              দিয়ে লেখা হয়। IPA হচ্ছে সঠিকভাবে ইংরেজি উচ্চারণের আন্তর্জাতিক
              সিম্বল। IPA সিম্বলগুলো slash /-/ বন্ধনীর মাধ্যমে দেখানো হয়। <br />
              যেমনঃ A-/ex/, Day - /der/, Good - /gud/ <br />
              আমি আপনাদেরকে পর্যায়ক্রমে ব্যাসিক থেকে IPA সিম্বল অনুযায়ী বিভিন্ন
              উদাহরণের মাধ্যমে শেখানোর চেষ্টা করবো। <br />
              প্রথমেই আমি 24 consonant sound এর বিস্তারিত আলোচনা করবো। Let's get
              started. <br />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-18 text-black bg-[#EFE5D6] book-shadow">
          <h2 className="text-xl font-bold mb-2">Page </h2>
          <p>
            When sentences contain <b>now, at this moment, at present</b> → use{" "}
            <b>Present Continuous</b>.
          </p>
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
