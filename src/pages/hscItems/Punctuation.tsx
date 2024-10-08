function Punctuation() {
  return (
    <div className="h-full md:w-[85%] mx-auto">
      <h1 className="my-20">Punctuation & Capitalisation</h1>
      <div className=" bg-white text-gray-800">
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
        <div className="">
          <h3>Capitalization:</h3>

          <h1 className="text-2xl font-bold mb-4">Capitalization</h1>
          <ol className="list-decimal pl-6">
            <li className="mb-2">
              <span className="font-semibold">Sentence:</span>
              <span> একটি Sentence এ Capital Letter দিয়ে লেখা হয়।</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Proper Noun:</span>
              <span> একটি Proper Noun এর প্রথম অক্ষর বড় হয়।</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Abbreviation:</span>
              <span> Abbreviation এর প্রথম অক্ষর বড় হয়।</span>
            </li>
          </ol>
          <h2 className="text-xl font-semibold mt-4">Examples:</h2>
          <ol className="list-decimal pl-6">
            <li>Proper noun: I met Raton yesterday.</li>
            <li>I came home on Monday.</li>
            <li>February.</li>
            <li>Dhannmondi Girls School.</li>
            <li>The Quran is a holy book.</li>
          </ol>
          <h2 className="text-xl font-semibold mt-4">
            Pronoun and Interjection:
          </h2>
          <p>
            Pronoun “আমি” এবং Interjection শব্দের বড় হয়।
            <span> Oh, Good bless me.</span>
          </p>
          <p>Interjection হলো: O, Oh, Alas, Hurra.</p>
        </div>
      </div>
    </div>
  );
}

export default Punctuation;
