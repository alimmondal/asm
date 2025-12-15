const Pronoun = () => {
  const pronounTable = [
    {
      person: "1st person",
      rows: [
        { number: "Singular", subject: "I", object: "me", possessive: "my" },
        { number: "Plural", subject: "We", object: "us", possessive: "our" },
      ],
    },
    {
      person: "2nd person",
      rows: [
        {
          number: "Singular",
          subject: "You",
          object: "you",
          possessive: "your",
        },
        { number: "Plural", subject: "You", object: "you", possessive: "your" },
      ],
    },
    {
      person: "3rd person",
      rows: [
        {
          number: "Singular",
          subject: "Kamal, he, she",
          object: "him, her",
          possessive: "his, her",
        },
        {
          number: "Plural",
          subject: "Kamal and Limon / they",
          object: "them",
          possessive: "their",
        },
      ],
    },
    {
      person: "3rd person (জড় প্রাণী)",
      rows: [
        {
          number: "Singular",
          subject: "The dog, It",
          object: "It",
          possessive: "Its",
        },
        {
          number: "Plural",
          subject: "The dogs, they",
          object: "them",
          possessive: "their",
        },
      ],
    },
  ];

  const technique2Table = [
    { left: "বস্তুর ক্ষেত্রে", right: "Which / that" },
    { left: "ব্যক্তির ক্ষেত্রে", right: "Who" },
    { left: "সময়ের ক্ষেত্রে", right: "When" },
    { left: "একবচনের জন্য", right: "This" },
    { left: "অধিকবচনের জন্য", right: "These" },
    { left: "ছেলের ক্ষেত্রে", right: "He, him, his" },
    { left: "মেয়ের ক্ষেত্রে", right: "She, her" },
    { left: "Plural হলে", right: "They" },
  ];

  return (
    <div className="w-[95%] lg:w-[85%] mx-auto select-none">
      <div className="text-center py-20 capitalize">
        <h1 className="text-green-400 text-3xl md:text-6xl  font-semibold">
          Pronoun Reference
        </h1>
        <h2 className="text-xl font-semibold ">Clear the unclear pronoun</h2>
        <p className="font-bold ">Question No: 08</p>
      </div>

      <div className="bg-white max-w-5xl mx-auto p-6 text-gray-800 text-base leading-relaxed">
        {/* Heading */}
        <h2 className="text-center font-bold border px-3 py-1 inline-block mb-4">
          কিছু বিষয় সম্পর্কে ধারণা থাকতে হবে
        </h2>

        {/* Bullet points */}
        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li>Pronoun, Number ও Person সম্পর্কে ধারণা থাকতে হবে।</li>
          <li>ইংরেজি বাক্যের অর্থ বুঝতে হবে।</li>
          <li>
            কোন কিছুর নামকে <span className="font-semibold">Noun</span> বলে।
            Noun এর পরিবর্তে যা ব্যবহার করা হয় তাই pronoun।
          </li>
        </ul>

        {/* Examples */}
        <div className="mb-6 space-y-4">
          <p>
            <span className="font-semibold">Example :</span>
          </p>

          <p>
            i) <span className="underline">Bina</span> lost her pen.
            <br />
            <span className="italic">Noun → Pronoun</span>
          </p>

          <div className="border p-3 inline-block">
            এখানে <span className="font-semibold">her</span> শব্দটি Bina Noun এর
            পরিবর্তে ব্যবহার হয়েছে।
          </div>

          <p>
            ii) Elina drank her <u>coffee</u> even though
            <span className="underline"> it </span> was cold.
            <br />
            <span className="italic">Noun → Pronoun</span>
          </p>

          <div className="border p-3 inline-block">
            এখানে <span className="font-semibold">it</span> শব্দটি coffee Noun
            এর পরিবর্তে ব্যবহার হয়েছে।
          </div>
        </div>

        {/* Table */}
        <p className="font-semibold mb-2">
          নিচে Noun এর number ও Person অনুযায়ী ব্যবহৃত Pronoun এর একটি তালিকা
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-collapse text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Person</th>
                <th className="border p-2">Number</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Object</th>
                <th className="border p-2">Possessive</th>
              </tr>
            </thead>
            <tbody>
              {pronounTable.map((group, i) =>
                group.rows.map((row, j) => (
                  <tr key={`${i}-${j}`}>
                    {j === 0 && (
                      <td
                        rowSpan={group.rows.length}
                        className="border p-2 font-semibold align-middle"
                      >
                        {group.person}
                      </td>
                    )}
                    <td className="border p-2">{row.number}</td>
                    <td className="border p-2">{row.subject}</td>
                    <td className="border p-2">{row.object}</td>
                    <td className="border p-2">{row.possessive}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Technique */}
        <p className="font-semibold mb-2">তিনটি Technique জানতে হবে</p>

        <div className="text-center mb-4">
          <span className="border px-4 py-1 font-semibold">
            Technique -1: Pronoun Reference
          </span>
        </div>

        <ul className="list-decimal ml-6 mb-4">
          <li>Direct Mistake</li>
          <li>Confusion</li>
        </ul>

        {/* Direct mistake explanation */}
        <p className="mb-2">
          <span className="font-semibold">Direct mistake :</span> এই ধরনের ভুলের
          ক্ষেত্রে সরাসরি Passage এ He এর জায়গায় she, She এর জায়গায় it, It এর
          জায়গায় They – এই ধরনের সরাসরি ভুল থাকবে।
        </p>

        <p className="font-semibold">Example :</p>

        <p className="mt-2">
          <span className="font-semibold">Incorrect :</span> A cook once roasted
          a duck for its master. He looked so delicious.
        </p>

        <p>
          <span className="font-semibold">Correct :</span> A cook once roasted a
          duck for <span className="underline">his</span> master.{" "}
          <span className="underline">It / The roast</span> looked so delicious.
        </p>
      </div>

      <div className="bg-white max-w-5xl mx-auto p-6 text-gray-800 text-sm leading-relaxed">
        {/* Confusion */}
        <p className="font-semibold mb-2">Confusion :</p>
        <p className="mb-2">
          এই ধরনের ভুলের ক্ষেত্রে একটি Pronoun এর পরিবর্তে এর আগের লাইনে একাধিক
          Noun থাকবে। তখন তোমাকে Clear করে বলতে হবে যে pronoun টি আসলে কোন Noun
          এর পরিবর্তে ব্যবহার হয়েছে।
        </p>

        <p className="font-semibold">Example :</p>

        <p className="mt-2">
          <span className="font-semibold">Incorrect :</span> There are 10 crore
          men and 8 crore women in Bangladesh.{" "}
          <span className="underline">They</span> are working hard to develop
          the nation. But we can't forget the contribution of the women also.
        </p>

        <p className="mt-2">
          <span className="font-semibold">Correct :</span> There are 10 crore
          men and 8 crore women in Bangladesh.{" "}
          <span className="underline">Men</span> are working hard to develop the
          nation. But we can't forget the contribution of the women also.
        </p>

        <p className="mt-1 italic">
          N.B: Confusion ভুল incorrect থেকে Correct করতে সরাসরি Noun এর ব্যবহার
          করতে হবে।
        </p>

        {/* Technique 2 */}
        <div className="text-center my-6">
          <span className="border px-4 py-1 font-semibold">
            Technique -2 : Gender & Number
          </span>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-collapse text-center">
            <tbody>
              {technique2Table.map((row, index) => (
                <tr key={index}>
                  <td className="border p-2 w-1/2">{row.left}</td>
                  <td className="border p-2 w-1/2">{row.right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Technique 3 */}
        <div className="text-center my-6">
          <span className="border px-4 py-1 font-semibold">
            Technique -3 : Subject chain
          </span>
        </div>

        <p className="mb-2">
          Pronoun ব্যবহৃত হলে সব সময় Noun এর পরিবর্তে আসে। যদি একটি Noun বাক্যে
          একবার থাকে তবে পরের লাইনে আবার pronoun ব্যবহার করতে পারি। আর এই Noun
          টি যখন subject হিসেবে ব্যবহৃত হয় তখন একটি subject chain তৈরি হয়।
        </p>

        <p className="font-semibold">Example :</p>

        <p className="mt-2">
          (i) Sourav is a student. He reads in class Seven. He has a sister
          named Trina.
        </p>

        <p className="italic mb-2">
          Subject হিসেবে Noun 'Sourav' প্রথমে এর পরে লাইনে Subject এর জায়গায়
          pronoun 'He' ব্যবহৃত হয়েছে।
        </p>

        {/* Incorrect */}
        <p className="font-semibold">Incorrect :</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Kamal is a brilliant student.</li>
          <li>It reads in class Ten.</li>
          <li>He has a cousin named Maria.</li>
          <li>It / She / Maria also read in class Ten.</li>
          <li>She always help his brother.</li>
          <li>He also takes care of her sister.</li>
        </ul>

        {/* Correct */}
        <p className="font-semibold">Correct :</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Kamal is a brilliant student.</li>
          <li>
            <span className="underline">He</span> reads in class Ten.
          </li>
          <li>
            <span className="underline">He</span> has a cousin named Maria.
          </li>
          <li>
            <span className="underline">Maria</span> also read in class Ten.
          </li>
          <li>
            <span className="underline">She</span> always helps{" "}
            <span className="underline">her</span> brother.
          </li>
          <li>
            <span className="underline">Kamal</span> also takes care of{" "}
            <span className="underline">his</span> sister.
          </li>
        </ul>

        {/* Extra Info */}
        <div className="text-center my-6">
          <span className="border px-4 py-1 font-semibold">
            Extra 5 টি Information
          </span>
        </div>

        <p className="mb-2">
          One, anyone, everyone, everybody, someone, somebody, none, nobody,
          each, either, neither ইত্যাদি Indefinite pronoun সর্বদা singular
          ব্যক্তি ধরা হয়। এজন্য pronoun singular হবে।
        </p>

        <p className="font-semibold">Example :</p>
        <ul className="list-decimal ml-6">
          <li>
            <span className="underline">Everyone</span> should do{" "}
            <span className="underline">his</span> duty.
          </li>
          <li>
            <span className="underline">One</span> of the boys said{" "}
            <span className="underline">he</span> would be an hour late.
          </li>
          <li>
            <span className="underline">One</span> of the girls said{" "}
            <span className="underline">she</span> would be an hour late.
          </li>
          <li>
            <span className="underline">Somebody</span> left{" "}
            <span className="underline">his</span> bag in the room.
          </li>
          <li>
            <span className="underline">Each</span> boy took{" "}
            <span className="underline">his</span> turn.
          </li>
          <li>
            <span className="underline">Each</span> girl took{" "}
            <span className="underline">her</span> turn.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 text-gray-900 text-sm leading-relaxed">
        <p className="mb-2">
          <span className="font-bold">vii)</span> Everyone in the club must pay{" "}
          <span className="font-bold">his</span> dues next week.
        </p>

        <p className="mb-2">
          আধুনিক grammarian বা Indefinite pronoun এর পরে he/she এবং his/her
          ব্যবহার করেন।
        </p>

        <p className="mb-2 font-semibold">Example:</p>
        <p className="mb-2">i) Everyone should do his/her duty.</p>

        <p className="mb-2">
          আবার, অনেক Grammarian-রা Indefinite pronoun এর পরে they, their ব্যবহার
          করেন।
        </p>

        <p className="mb-2 font-semibold">Example:</p>
        <p className="mb-2">i) Everyone in the time has their tickets ready.</p>
        <p className="mb-2">
          ii) No one in the class remembered to bring their books.
        </p>

        <p className="mb-2">
          ➤ কোনো pronoun অস্পষ্ট প্রকাশ করলে, তারপরে পূর্বোল্লিখিত noun লিখতে
          হয়।
        </p>

        <p className="mb-2 font-semibold">Example:</p>
        <p className="mb-1">
          i) <span className="font-semibold">Incorrect :</span> They are our
          best friends.
        </p>
        <p className="mb-2">
          <span className="font-semibold">Correct :</span> Books are our best
          friends.
        </p>

        <p className="mb-1">
          ii) <span className="font-semibold">Incorrect :</span> They go to
          school together.
        </p>
        <p className="mb-2">
          <span className="font-semibold">Correct :</span> Salam and Salma go to
          school together.
        </p>

        <p className="mb-2">
          ➤ Verb-এর পরে Subject form নয়, Verb-এর পরে object form বসে।
        </p>

        <p className="mb-2 font-semibold">Example:</p>
        <p className="mb-1">
          i) <span className="font-semibold">Incorrect :</span> ..... as will
          certainly happen if ourselves are disable.
        </p>
        <p className="mb-2">
          ii) <span className="font-semibold">Correct :</span> ..... as will
          certainly happen if we are disable.
        </p>

        <p className="mb-2">
          ➤ Demonstrative Pronoun “this, that, these, those” এই চার জায়গায়
          pronoun এর জন্য থাকবার সম্ভাবনা থাকে। তাই এই জায়গাগুলোতে পরিবর্তনের
          বিষয়ে মাথায় রাখতে হবে।
        </p>

        <p className="mb-2">
          এক্ষেত্রে অধিকাংশ ক্ষেত্রে “demonstrative pronoun + noun” বসে অথবা
          সঠিক demonstrative pronoun বসে।
        </p>

        <p className="mb-2 font-semibold">Example:</p>
        <p className="mb-1">
          i) <span className="font-semibold">Incorrect :</span> The sorrows and
          sufferings of the parents of those know no bounds.
        </p>
        <p className="mb-2">
          <span className="font-semibold">Correct :</span> The sorrows and
          sufferings of the parents of those autistic children know no bounds.
        </p>

        <p className="mb-1">
          ii) <span className="font-semibold">Incorrect :</span> These giver one
          the opportunity to see the unseen and know the unknown.
        </p>
        <p className="mb-2">
          <span className="font-semibold">Correct :</span> It/this gives one the
          opportunity to see the unseen and know the unknown.
        </p>

        <p className="mb-2">
          ➤ Subject অনুযায়ী তার reflexive থাকতে পারে। যেমন:-
        </p>

        <p className="mb-1">You – Yourself</p>
        <p className="mb-1">He – Himself</p>
        <p className="mb-1">She – Herself</p>
        <p className="mb-1">them – themselves</p>
        <p className="mb-2">It – itself</p>

        <p className="mb-2 font-semibold">Example:</p>
        <p className="mb-1">
          i) <span className="font-semibold">Incorrect :</span> So, if you want
          themselves to be in their league.
        </p>
        <p className="mb-2">
          ii) <span className="font-semibold">Correct :</span> So, if you want
          yourself to be in their league.
        </p>
      </div>
    </div>
  );
};

export default Pronoun;
