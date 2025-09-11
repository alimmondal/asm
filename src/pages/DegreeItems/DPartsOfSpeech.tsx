import data from "../../synAnt.json";
const DPartsOfSpeech = () => {
  return (
    <div className="px-5 md:w-[65%] mx-auto">
      {/* Short technic */}

      <div className="text-center">
        <h1 className="py-20 text-green-400">Changing Words</h1>
      </div>

      <div className="my-10 text-lg md:text-xl">
        <div className="">
          <h3 className="text-rose-500 my-5">Parts of Speech চিনিবার উপায়</h3>
          Adjective চিনিবার উপায়ঃ <br />
          শব্দের শেষে - ous, Full, ive, le, el, able, ible, il, al, cal, ile,
          ent, ant, ain, ane, ure, ic, ish ty, ry, sy, wy, py, ky, dy থাকলে
          Adjective হয় । <br />
          Example:
          <br />
          Famous, Creative, beautiful simple, Capable, responsible Casual, evil,
          servile, Absent, Brilliant, vain, economie, boyish, angry, faulty,
          witty, তবে ty থাকলে বেশির ভাগ ক্ষেত্রে Noun হয়।
          <br />
          <br />
          Noun চিনিবার উপায়ঃ <br />
          শব্দের শেষে - Hood, Our, er, or, tion, sion, Ment, ship, nce, ance,
          ty, th, ht, ness, ist, val ism, asm থাকলে Noun হয়।
          <br />
          Example:
          <br />
          Favour, Owner, visitor, condition, confusion, encouragement, hardship,
          independence, importance, beauty, length, height, awareness, realist
          arrival, removal, Modernism.
          <br />
          <br />
          Verb-চিনিবার উপায়ঃ <br />
          শব্দের শেষে - ine, ise, ize, de থাকলে, শব্দের শুরুতে - em থাকলে ,
          শব্দের শুরুতে/ শেষে - en থাকলে, শুরুতে - be থাকলে , শেষে - ume, ute,
          atc থাকলে , শেষে - ss, fy থাকলে Verbহয়। Example -<br />
          Examine, realise, embed, tighten, enlarge, beware, contribute,
          educate, consume, possess, beautify,
          <br />
          <br />
          Adverb - চিনিবার উপায়ঃ <br />
          কোন Adjective এর শেষে ly থাকলে শব্দটি সাধারণত Adverb হয়ে থাকে। <br />
          যেমন- immediately
          <br />
          কিন্তু
          <br />
          কোন Noun/ verb - এর শেষে ly থাকলে ঐ শব্দটি Adjective হবে।
          <br />
          যেমন: Lovely, lively, friendly, bodily, manly, brotherly.
          <br />
          <br />
          বিঃ দ্রঃ সুতরাং Parts of Speech চিনিবার প্রধান উপায় হল "সজ্ঞা" জানা
          এবং প্রদত্ত শব্দটির অর্থ জানা।
        </div>
        <br />
        <br />
        <div className="">
          <h2 className="">Parts of Speech পরিবর্তনের নিয়মাবলী</h2>
          <br />
          Adjective থেকে Noun এবং Noun থেকে Adjective:
          <br />
          (1) Adjective এর শেষে ent/ant-থাকলে "t"- এর পরিবর্তে ce/cy যোগ করতে
          হয়। <br />
          যেমনঃ - <br />
          Absent - Absence
          <br />
          Current - Currency.
          <br />
          অনুরুপভাবেঃ Cy/Ce উঠিয়ে দিয়ে-- যোগ করলে Adjective হবে।
          <br />
          যেমন- <br />
          Importance - Important
          <br />
          Absent - Absence
          <br />
          <br />
          (2) Adject এর শেষে ate/ et থাকলে-t- et এর পরিবর্তে cy যোগ করতে হয়
          <br />
          যেমন- Secret-Secrecy.
          <br />
          <br />
          (3) Adjective এর শেষে ar/ or থাকলে (ity যোগ করলে Noun হয় -
          Popular-Popularity. অনুরুপ - ity তুলে দিলে Adjective হবে।
          <br />
          যেমন-যেমন- Cruelty - cruel
          <br />
          <br />
          (4) Adjective এর শেষে el, al, le, il, ile থাকলে ty বা ity যোগ করে Noun
          গঠন করা হয় এক্ষেত্রে Adjective এর শেষের 'e' এর পরিবর্তে i হবে।
          <br />
          যেমন- <br />
          Noble -Nobility
          <br />
          অনুরুপভাবে ty উঠিয়ে দিলে Noun হবে <br />
          Nobility- Noble
          <br />
          <br />
          (5) Adjective এর শেষে ous থাকলে ous এর পরিবর্তে ity যোগ করলে Noun হয়-
          <br />
          যেমন-
          <br />
          Audacious- Audacity, <br />
          Anxious-Anxiety,
          <br />
          অনুরুপ ity উযিয়ে দিলে Adjective হবে।
          <br />
          <br />
          (6) কতকগুলো Adjective এর শেষে ness যোগ করলে Noun হয়। <br />
          যেমন-
          <br />
          Aware-awareness
          <br />
          অনুরুপ Noun এর শেষের ness উঠিয়ে দিলে Adjective হয়।
          <br />
          যেমন-
          <br />
          Freshness-Fresh
          <br />
          <br />
          Verb থেকে Noun এবং Noun থেকে Verb
          <br />
          (1) Verb এর শেষে ate/te /t থাকলে ion যোগ করলে Noun হয়। তবে এক্ষেত্রে e
          থাকলে উঠে যায়। যেমন-
          <br />
          Cultivate - Cultivation <br />
          Afflict - affliction <br />
          অনুরুপ ion উঠালে verb হবে।
          <br />
          <br />
          (2) Verb এর শেষের de এর স্থলে sion যোগ করলে Noun হয়
          <br />
          যেমন-
          <br />
          Decide-decision. <br />
          কিন্তু- শুধু d থাকলে তার পরিবর্তে tion যোগ করতে হয়। <br />
          যেমন - <br />
          Attend - attention
          <br />
          কিন্তু- eed থাকলে তার পরিবর্তে ess যোগ করতে হয়।
          <br />
          যেমন-
          <br />
          Succeed - success
          <br />
          <br />
          (3) Verb এর শেষে ume থাকলে উঠিয়ে ption যোগ করলে Noun হয়। <br />
          যেমন- <br />
          assume -assumption, <br />
          অনুরুপ - উল্টাটা করলেই Verbহবে।
          <br />
          <br />
          (4) Verb এর শেষে fy থাকলে fy এর পরিবর্তে action যুক্ত করতে হয়।
          <br />
          যেমন- rectify - rectification
          <br />
          অনুরুপ action উঠিয়ে fy যোগ করলে Verb হবে।
          <br />
          <br />
          (5) isc বা ize থাকলে উঠিয়ে ation যোগ করলে Noun হবে।
          <br />
          যেমন- Civilise - Civilisation.
          <br />
          অনুরুপ - উল্টাটা করলেই Verb হবে।
          <br />
          <br />
          (6) Verb এর শেষে। থাকলে তার পরিবর্তে ission যোগ করতে হয়।
          <br />
          যেমন- Commit - Commission.
          <br />
          অনুরুপ - উল্টাটা করলেই Verbহবে।
          <br />
          <br />
          (7) Verb এর শেষে Y থাকলে তার পরিবর্তে বসে i এবং তার পরে age যুক্ত করতে
          হয়।
          <br />
          যেমন- Carry- Carriage
          <br />
          অনুরুপ - উল্টাটা করলেই Verbহবে।
          <br />
          (8) Verb এর শেষে tain থাকলে তার পরিবর্তে tenance বসে
          <br />
          যেমন- <br />
          maintain - maintenance.
          <br />
          অনুরুপ - উল্টাটা করলেই Verbহবে।
          <br />
          <br />
          Verb গঠনের নিয়মঃ
          <br />
          (1) Noun শব্দের শুরুতে En, Em, Be, যোগ করে Verb গঠন করা হয়।
          <br />
          যেমন: <br />
          Cloud - Becloud
          <br />
          Bank - Embank <br />
          Able-Enable.
          <br />
          <br />
          (2) শব্দের শেষে cn, fy, ise / ize যোগ করে Verb গঠ করা হয়।
          <br />
          যেমন-
          <br />
          Black - Blacken <br />
          Beauty - Beautify
          <br />
          Civil - Civilize
        </div>
        <br />
        <br />
        -0-
        <br /> <br /> <br />
        <div className="">
          <h2> Noun, verb এবং adjective, Adverb দ্বারা বাক্য ঠনের নিয়মাবলী</h2>
          Noun দ্বারাঃ <br />
          (1) His/her ………. is good/bad.
          <br />
          (ii) He/she had ……………. .<br />
          <br />
          Adjective দ্বারাঃ <br />
          (i) He is ……… man/woman.
          <br />
          (ii) It is a/an ………… thing/matter.
          <br />
          <br />
          Adverb দ্বারাঃ <br />
          (i) He did it ………… <br />
          (ii) Rina used it …………… .<br />
          <br />
          Verb দ্বারাঃ
          <br />
          (i) He/ She V2 it.
          <br />
          (ii) He she V2 me/ here/ there.
        </div>
      </div>

      <div className=" overflow-x-auto py-10">
        <h2 className="">Exercise</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-1 px-1 text-center">Noun</th>
              <th className="py-1 px-1 text-center">Verb</th>
              <th className="py-1 px-1 text-center">Adjective</th>
              <th className="py-1 px-1 text-center">Adverb</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {data?.partsOfSpeech?.map((item, index) => (
              <tr key={index} className=" hover:bg-gray-100">
                <td className="py-1 px-1 text-center text-lg md:text-xl">
                  {item.noun}
                </td>
                <td className="py-1 px-1 text-center text-lg md:text-xl">
                  {item.verb}
                </td>
                <td className="py-1 px-1 text-center text-lg md:text-xl">
                  {item.adjective}
                </td>
                <td className="py-1 px-1 text-center text-lg md:text-xl">
                  {item.adverb}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DPartsOfSpeech;
