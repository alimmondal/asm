function Punctuation() {
  return (
    <div className="h-full md:w-[85%] mx-auto px-3">
      <h1 className="py-20 text-2xl md:text-6xl text-center">
        Punctuation <br /> <span className="text-center"> &</span> <br />
        Capitalization
      </h1>
      <div className="dark:text-gray-300">
        <h3> Punctuation:</h3>
        {/* 1. Assertive, imperative and optative sentence */}
        <div className="mb-6">
          <p className="text-base">
            1. Assertive, imperative এবং optative sentence এর শেষে Full Stop (.)
            বসে।
            <br />
            Example: My you be happy.
          </p>
        </div>

        {/* 2. Interrogative sentence */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">
            2. Interrogative বাক্যের শেষে প্রশ্নবোধক (?) চিহ্ন বসে।
          </h2>
          <p className="text-base">Examples:</p>
          <ul className="list-disc ml-6">
            <li>Do you want to pass?</li>
            <li>What is he?</li>
          </ul>
        </div>

        {/* 3. Exclamatory sentence */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">
            3. Exclamatory বাক্যের শেষে এবং Interjection এর পরে Note of
            exclamation (!) বসে।
          </h2>
          <p className="text-base">Examples:</p>
          <ul className="list-disc ml-6">
            <li>Alas! I am undone.</li>
            <li>How fine it is!</li>
          </ul>
          <p className="text-base">
            Interjection এর Examples: Alas, Hurrah, Oh, Hush, Hi, etc.
          </p>
        </div>

        {/* 4. Say/Said, tell/told, replied, etc */}
        <div className="mb-6">
          <p className="text-base">
            4. Say/said, tell/told, reply(ied), ask(ed), pray(ed)/ wish(ed),
            exclaim(ed) with joy, order(ed), request(ed) এর পরে that/ If/
            whether না থাকলে এগুলোর পরে Comma (,) বসে।
            <br />
            কিন্তু এগুলোর পরে object থাকলে obj এর পরে কোমা (,) বসে। আবার এগুলোর
            পরে কমা বসলে পরের বাক্যের উপরে ইনভারটেড ("-") কমা বসে। ইনভারটেড
            ("-") কমা শেষে হলে বাক্যানুসারে (.)/ (?)/ (!) এর যেকোন একটি বসে।
            <br />
            যেমনঃ The man said to me, "Are you hungry"? ।<br />
            কিন্তু এগুলোর পরে that/ If/ whether/to থাকলে এর পরের বাক্যের শেষে
            ফুলস্টপ বসে <br />
            Examples:The man asked me if I was hungry.
          </p>
        </div>

        {/* 5. As, since, though, etc */}
        <div className="mb-6">
          <p className="text-base">
            5. As, since, though, although, if, when এর পরে যদি বাক্য থাকে তবে
            Comma (,) বসে। Example:
          </p>
          <p className="text-base">Though he was ill, he attended the class.</p>
        </div>

        {/* 6. So, yes, sir, sorry, hello */}
        <div className="mb-6">
          <p className="text-base">
            6. So, yes, sir, sorry, Hi, hello এগুলির পরে সাধারণত কমা (,) বসে।
            Example: Yes, I've understood. <br />
            কিন্তু সম্বোধনসুচক শব্দ যদি বাক্যের শুরুতে থাকে তবে এর পরে কোমা বসে,
            যদি বাক্যের শেষে থাকে তবে এর আগে কোমা বসে, যদি বাক্যের মাঝখানে থাকে
            তবে এর আগে এবং পরে কোমা বসে। যেমনঃ
            <ul className="list-disc ml-6">
              <li>Jerry, have you seen your mother?</li>
              <li> ave you seen your mother, Jerry?</li>
              <li> ave you seen your mother, Jerry?</li>
            </ul>
          </p>
        </div>

        {/* 7. Contractions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            7. Contractions (সংক্ষেপ) এর Apostrophe (')
          </h2>
          <p className="text-base">
            কোনো শব্দের বাদ অংশের স্থলে Apostrophe (') বসে। Example: I've (=I
            have) gone there.
          </p>
        </div>

        {/* 8. Possessive case */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">8. Possessive case</h2>
          <p className="text-base">
            Possessive case এর শেষে Apostrophe (') বসে। অর্থাৎ কোন নামার সঙ্গে S
            যুক্ত থাকলে সেই নাম S এর মাঝখানে উপরে কোমা বসে। <br />
            Example: Rahim's book.
          </p>
        </div>
      </div>

      <div className="my-8">
        <h1 className="text-2xl font-bold ">Capitalization</h1>

        {/* 1. Start of sentence */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            1. Sentence এর প্রথম শব্দ Capital Letter দিয়ে শুরু করতে হয়।
          </h2>
        </div>

        {/* 2. Proper Noun */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            2. Proper Noun এর প্রথম অক্ষর বড় হাতের হয়।
          </h2>
        </div>

        {/* 3. Days, months, names, etc. */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            3. দিনের নাম, মাসের নাম, উপাধি বা তাদের Abbreviation, উপাধি এবং
            উপাধির নাম, শিক্ষা প্রতিষ্ঠানের নামের প্রথম অক্ষর, ধর্মীয়
            প্রতিষ্ঠান বা ধর্মের নাম, জাতি এবং ধর্মীয় সম্প্রদায়ের নাম এবং
            ঐতিহাসিক ঘটনার প্রথম অক্ষর Capital Letter হয়। <br />
            Examples:
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Proper Noun:</strong> I met Raton yesterday.
            </li>
            <li>
              <strong>দিনের নাম:</strong> I came home on Monday.
            </li>
            <li>
              <strong>উপাধি বা পদবি:</strong> M.A./B.A.
            </li>
            <li>
              <strong>মাসের নাম:</strong> February.
            </li>
            <li>
              <strong>শিক্ষা প্রতিষ্ঠানের নাম:</strong> Dhanmondi Girls School.
            </li>
            <li>
              <strong>পবিত্র গ্রন্থের নাম:</strong> The Quran is a holy book.
            </li>
          </ul>
        </div>

        {/* 4. Pronoun and Interjection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            4. Pronoun "I" (আমি) এবং Interjection সর্বদা বড় হাতের হয়।
            <br />
            Example:
          </h2>
          <ul className="list-disc ml-6">
            <li>Oh, Good bless me.</li>
            <li>Interjection includes: O, Oh, Alas, Hurra.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Punctuation;
