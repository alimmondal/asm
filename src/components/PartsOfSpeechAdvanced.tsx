import { Link } from "react-router-dom";

export const PartsOfSpeechAdvanced = () => {
  // src/data/nounData.ts

  const tableData = [
    {
      countable:
        "Singular এবং plural উভয় Form-ই হতে পারে। যেমন: singular—man এবং plural—men",
      uncountable: "শুধুই singular form হতে পারে। যেমন: education",
    },
    {
      countable:
        "বাক্যে এর সঙ্গে singular বা plural verb ব্যবহার হয়। যেমন: The boy is playing. The boys are playing.",
      uncountable:
        "এর সঙ্গে শুধুই singular verb ব্যবহার হয়। যেমন: Education is important for every man.",
    },

    {
      countable:
        "এটা singular হলে এর আগে a, an, অথবা one ব্যবহার হতে পারে। যেমন: It is a book.",
      uncountable:
        "এর আগে a, an, বা one ব্যবহার হয় না। যেমন: He has a kindness ✘",
    },
    {
      countable:
        "এটা plural হলে many বা few ইত্যাদি ব্যবহার হতে পারে। যেমন: He has many books.",
      uncountable:
        "এর আগে much বা little modifier ব্যবহার হতে পারে। যেমন: He has much wealth.",
    },
    {
      countable:
        "plural হলে এর আগে some ব্যবহার হতে পারে। যেমন: She has some ornaments.",
      uncountable: "The child has some chocolate.",
    },
    {
      countable:
        "plural হলে এর আগে a number of ব্যবহার হতে পারে। যেমন: He has a number of books.",
      uncountable:
        "এর আগে amount of ব্যবহার হতে পারে। যেমন: She has an amount of bread.",
    },
  ];

  return (
    <div className="h-full lg:w-[60%] mx-auto px-3">
      <div className="py-20 ">
        <h2 className="text-center">Parts Of Speech for Advanced</h2>
        <p className="text-center"> A Quick Glance</p>
      </div>

      <div className="h-full">
        <div className="">
          ইংরেজি Parts of speech সম্বন্ধে খুব প্রয়োজনীয় কথা হচ্ছে এই যে
          ছাত্র-ছাত্রীদের জন্য এগুলোর বিস্তারিত জ্ঞান ইংরেজি শেখার জন্য প্রয়োজন
          হয় না। বরং Parts of speech সম্বন্ধে বিস্তারিত জ্ঞান ইংরেজি ভাষা শেখার
          ব্যাপারে বাধাস্বরূপ হয়ে দাঁড়ায়। আবার Parts of speech সম্বন্ধে অজ্ঞ
          থাকলেও সে অজ্ঞতা ইংরেজি ভাষা শেখার পথে বাধাস্বরূপ হয়ে দাঁড়ায়। অতএব
          যেটুকু না শিখলেই নয় সেটুকু শেখা প্রয়োজন। এ ব্যাপারটা মাথায় রেখেই এ
          Chapter-এর Subheading দিয়েছি "A Quick Glance". আলোচনার মধ্যে কমপক্ষে
          কতটুকু শিখলে ছাত্রদের জন্য যথেষ্ট তার ইংগিত দেয়া হবে।
          <br />
          <br />
          ইংরেজিতে Parts of speech নিম্নোক্ত প্রকার : <br />
          (1) Noun, (2) Adjective, (3) Adverb, (4) Verb (5) Article, (6)
          Demonstrative, (7) Pronoun, (8) Preposition, (9) Conjunction, (10)
          Interjection. <br />
          (Source: R. Quirk & S. Greenbaum, A University Grammar of English)
        </div>
        <br />
        <div className="">
          {/* Noun */}
          <div className="">
            <h2 className="text-pink-600">i. Noun </h2>
            Noun এর সংজ্ঞা: ইন্দ্রিয় গ্রাহ্য (concrete) বা ভাবগত (abstract) কোন
            কিছুকে noun বলে। <br />
            ইন্দ্রিয়গ্রাহ্য বলতে বুঝায় মানুষের পঞ্চইন্দ্রিয়ের আওতাভুক্ত। যেমন:{" "}
            <br /> ইট, পাথর, কাঠ, শব্দ, স্বাদ, গন্ধ, বাতাস এগুলোর এক একটা আমাদের
            কোন না কোন ইন্দ্রিয়ের আওতাভুক্ত। <br />
            ভাবগত বা ধারণাগত বলতে বুঝায় আমাদের পঞ্চইন্দ্রিয়ের আওতার বাইরে। যেমন:
            <br />
            সততা, কৈশোর, সৌন্দর্য, পাপ, পুণ্য, মেধা, এগুলো আমাদের পঞ্চইন্দ্রিয়ের
            আওতাভুক্ত নয়।
            <br />
            <br />
            ঐতিহ্যিক (traditional) ইংরেজি Grammar-এ noun-কে পাঁচ ভাগে ভাগ করা
            হয়েছে : <br />
            1. Proper Noun 2. Common Noun 3. Collective Noun, 4. Material Noun,
            5. Abstract Noun <br />
            <br />
            (1) Proper noun (ব্যক্তি, জীব, জায়গা, বা ঘটনার নাম) <br />
            যেমন: <br />
            Selim (একজন মানুষের নাম), Tom (কোন একটা কুকুরের নাম) Dhaka (জায়গার
            নাম), Romantic Movement (ঘটনার নাম)রাজী
            <br />
            <br />
            (2) Common noun: এক জাতীয় প্রাণী বা বস্তুর নাম। <br />
            যেমন: <br />
            man (যে কোন মানুষ, কিন্তু কোন মানুষের নাম হলে সেটা Proper noun হবে,
            যেমন: Selim), dog (যে কোন কুকুর কিন্তু কোন কুকুরের নাম Tom হলে সেটা
            তখন Proper noun হবে), water (যে কোন স্থানের পানি, কিন্তু কোন বিশেষ
            পানি বুঝালে Proper noun হবে, যেমন- Padma)
            <br />
            <br />
            (3) Collective noun:একজাতীয় প্রাণী বা বস্তুর গ্রুপ বুঝায়। <br />
            যেমন: <br />
            army, (সৈন্যদের একত্রিত অবস্থান), <br />
            Crowd (মানুষের একত্রিত অবস্থান) Flock of sheep (ভেড়ার একত্রিত
            অবস্থান)।
            <br />
            এজাতীয় noun-কে noun of multitude-ও বলা হয়, তবে Collective noun-কে
            singular এবং noun of multitude-কে plural হিসেবে গণ্য করা হয়। <br />
            (4) Material noun: matters বা বস্তু থেকে এটার নামকরণ করা হয়েছে,
            Material noun বলতে যে পদার্থ দ্বারা কোন বস্তু তৈরি হয়। <br /> যেমন:
            <br />
            gold একটা material noun, কিন্তু সোনার তৈরি necklace হচ্ছে common
            noun. তেমন water একটা material noun, কিন্তু padma হচ্ছে proper noun
            <br />
            <br />
            উপরোক্ত ৪ প্রকার noun হচ্ছে Concrete noun-এর আওতাভুক্ত,
            ইন্দ্রিয়গ্রাহ্য।
            <br />
            <br />
            আর: <br />
            (5) Abstract Noun হচ্ছে ধারণাগত বা ভাবগত, যাকে নির্বস্তুক বলা যায়।
            যে বস্তু/ Noun শুধু অনুভুতি দ্বারা বুঝা যায়/যে বস্তুকে টাচ করা বা
            ধরা যায় না, দেখা যায় না।
            <br />
            যেমন: <br />
            honesty, education, policy, meditation, beauty, ugliness, ইত্যাদি। এ
            জাতীয় কোন কিছু ইন্দ্রিয়গ্রাহ্য নয়।
          </div>
          <br />

          {/* Parts of Speech-এর Number */}
          <div className="">
            <h2 className="text-pink-600">Parts of Speech-এর Number </h2>
            <br />
            Noun একবচন বা বহুবচন হতে পারে কি পারে না সেই দৃষ্টিকোণ থেকে তাকে
            দুইভাগে ভাগ করা হয়: <br />
            1. countable Noun এবং 2. uncountable Noun
            <br />
            <br />
            Countable Noun: <br />
            Countable-এর অর্থ গণনাযোগ্য, যে Noun গুলো গণনা করা যায় তাকে
            Countable Noun বলা হয়। countable nouns-কে count nouns এবংCount
            nouns-গুলোর একবচন বা বহুবচন দুটোই হতে পারে।
            <br />
            <br />
            Uncountable Noun: <br />
            uncountable-এর অর্থ অগণ্য। যে Noun গুলো গণনা করা যায় না তাকে
            Uncountable Noun বলা হয়। uncountable nouns-কে noncount nouns বা mass
            nouns-ও বলা হয়। Noncount nouns-এর শুধু একবচন হতে পারে। অর্থাৎ বাক্যে
            ব্যবহৃত হ'লে যখন একবচন (singular) হিসেবে ব্যবহৃত হয় তখন verb-ও একবচন
            হয়, এবং বহুবচন (plural) হিসেবে ব্যবহৃত হ'লে verb ও plural হয়।
            <br />
            <br />
            তবে ব্যাপারটা এমন নয় যে countable এবং uncountable nouns-এর মধ্যে
            জলরোধক (watertight) কোন ব্যবধান আছে। অর্থাৎ কোন কোন nouns এক অর্থে
            countable হতে পারে, এবং অন্য অর্থে uncountable হতে পারে। তবে কোন কোন
            noun আছে যা কখনও singular হিসেবে ব্যবহৃত হয় না। আবার কোন কোন noun
            আছে যা কখনও plural হিসেবে ব্যবহৃত হয় না। কোন কোন noun আছে যা দেখতে
            plural <br />
            অর্থাৎ form হচ্ছে plural, কিন্তু ব্যবহৃত হয় singular হিসেবে। ইত্যাদি
            বিচিত্র ধরনের noun হতে পারে। <br />
            যেমন:
            <br />
            Water - পানি - Waters - বিভিন্ন জলাশয় <br />
            Sand - বালু - Sands - বালুময় স্থানসমূহ <br />
            Iron - লোহা - Irons - ইস্ত্রীসমূহ <br />
            Character- চরিত্র- Characters - নাটক বা সিনেমায় অভিনয়কারী ব্যক্তি{" "}
            <br />
            <br />
            উপরোক্ত noun-গুলো uncountable অর্থাৎ singular form-এ ব্যবহৃত হলে এক
            অর্থ, এবং plural form-এ বা countable form-এ ব্যবহৃত হলে অন্য অর্থ
            হয়।
            <br />
            <br />
            আবার: <br />
            Honesty, cooperation, education, information, kindness ইত্যাদি
            noun-গুলোর কখনও plural form ব্যবহৃত হয় না, অর্থাৎ সব সময়ই
            uncountable.
            <br />
            <br />
            নীচে উল্লিখিত noun-গুলো দেখতে plural অর্থাৎ countable, কিন্তু সব সময়
            uncountable. অর্থাৎ singular হিসেবে ব্যবহৃত হয়: <br />
            News, economics, politics, linguistics, phonetics, mumps, measles
            molasses ইত্যাদি
            <br />
            <br />
            বিপরীত ভাবে, নিম্নোক্ত noun-গুলোর form হচ্ছে plural, এবং সবসময়
            plural হিসেবেই ব্যবহৃত হয়, কখনও singular হিসেবে নয়: <br />
            Riches (সম্পদ অর্থে); remains (অবশিষ্টাং অর্থে); manners (ভাল
            ব্যবহার অর্থে); thanks (ধন্যবাদ অর্থে); particulars (খুঁটিনাটি
            বর্ণনা অর্থে), ইত্যাদি।
            {/* Countable এবং Uncountable Noun-এর পার্থক্য */}
            <div className="">
              <div className=" space-y-10">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
                    Countable এবং Uncountable Noun-এর পার্থক্য
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto border border-gray-300">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Countable Nouns
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Uncountable Nouns
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">
                              {row.countable}
                            </td>
                            <td className="border px-4 py-2">
                              {row.uncountable}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
              <br />
              <br />
              <h3 className="">
                সাধারণত: countable হিসেবে ব্যবহৃত হয় এমন কিছু noun নিচে উল্লেখ
                করা হলো:{" "}
              </h3>
              1. ব্যক্তি: a man, a student, a teacher ইত্যাদি; <br />
              2. জীবজন্তু: a dog, a horse, a tiger, a mouse, ইত্যাদি। <br />
              3. গাছপালা: a tree, a bush, a cactus ইত্যাদি। <br />
              4. কীটপতঙ্গ: an ant, a butterfly, a fly ইত্যাদি। <br />
              5. কোন কিছুর অংশ: an ankle, a bone, a nose, a wing, ইত্যাদি।{" "}
              <br />
              6. নির্দিষ্ট আকৃতি আছে এমন কিছু: a building, a door, a mountain,
              an umbrella ইত্যাদি। <br />
              7. পরিমাপের ইউনিট: a foot, a meter, a piece, a gram, a pound
              ইত্যাদি। <br />
              ৪. শ্রেণী বিন্যাস: a family, a city, a word, a phrase ইত্যাদি।{" "}
              <br />
              9. কিছু abstract (নির্বস্তুক) শব্দ: a hindrance, a nuisance, a
              plan, a taboo ইত্যাদি। <br /> <br />
              <h3 className="">
                সাধারণত: Uncountable হিসেবে ব্যবহৃত এমন কিছু noun নীচে উল্লেখ
                করা হলো:
              </h3>{" "}
              1. খাদ্য জাতীয় জিনিসের নাম: <br />
              Bread, cake, chocolate, spinach, spaghetti, butter, cheese,
              ইত্যাদি। <br />
              2. বস্তু এবং ধাতু: <br />
              Copper, cotton, grass, iron, steel, wood, ইত্যাদি। <br />
              3. প্রাকৃতিক অবস্থা: <br />
              Lightness, darkness, brightness, luminescence, ইত্যাদি। <br />
              4. তরল পদার্থ, গ্যাস, এবং ক্ষুদ্র কণিকা দ্বারা তৈরি জিনিস: <br />
              (a) তরল পদার্থ: coffee, milk, oil, tea ইত্যাদি। <br />
              (b) গ্যাস: air, oxygen, carbon dioxide, ইত্যাদি। <br />
              (c) ক্ষুদ্র কণিকা দ্বারা তৈরি বস্তু: barley, rice, sugar, ইত্যাদি।{" "}
              <br />
              5. ভাষার নাম: Bangla, Arabic, English, French, ইত্যাদি। <br />
              6. -ing যুক্ত অধিকাংশ শব্দ: <br />
              Parking, studying, trying, waiting, ইত্যাদি। <br />
              -ness, -ance, -ence, ity যুক্ত শব্দ: <br />
              brightness, selfishness, ignorance, adolescence, serenity,
              ইত্যাদি।
            </div>
          </div>

          <br />

          <br />
          <Link className="text-blue-500 underline" to={"/number"}>
            Click here to learn more of Number
          </Link>
          <br />
          {/* Noun-equivalents  */}
          <div className="">
            <h3 className="text-pink-600">
              Noun-equivalents(Noun-এর সমমান সম্পন্ন পদসমূহ)
            </h3>
            বাক্যে কিছু কিছু পদের শব্দ বা phrase পদমর্যাদার দিক দিয়ে noun-এর
            সমপর্যায়ের হতে পারে, এবং বাক্যে একটা noun বা noun phrase যে যে
            function করে, ঐ সমস্ত পদের শব্দ বা phrase-গুলোও সেই function করতে
            পারে। <br />
            সেগুলো হচ্ছে: <br />
            (1) Gerund: (verb+ing) <br />
            যেমন: <br />
            Swimming, playing, ইত্যাদি। <br />
            অবশ্য মনে রাখতে হবে gerund আবার কখন ও কখনও adjective-এর function
            করতে পারে। <br />
            যেমন: drinking water এই phrase-এ "drinking" একটা adjective-এর কাজ
            করছে। এরূপ ক্ষেত্র ছাড়া gerund সাধারণত: noun-এর কাজই করে থাকে।{" "}
            <br />
            <br />
            (2) Infinitive phrase: (to + verb) <br />
            Infinitive যদি উদ্দেশ্যমূলক না হয় তবে তা noun-এর মত কাজ করে। <br />
            যেমন: <br />
            (a) To do this work requires great skill. <br />
            zullised <br />
            (b) I want to have a good accommodation here. <br />
            Sentence (a) তে "To do this work" subject হিসেবে কাজ করছে, এবং (b)
            তে "to have a good accommodation" object হিসেবে কাজ করছে। <br />
            (3) Adjective-এর আগে "the" ব্যবহৃত হলে তা noun-এর মত কাজ করে। <br />
            যেমন: <br />
            "The poor", "the rich" <br />
            এবং past participle-এর আগে "the" বসালেও তা noun-এর মত কাজ করে। যেমন:
            <br />
            "the learned" "the down-trodden" ইত্যাদি। <br />
            (a) The poor are the sufferers. <br />
            (b) We feel sympathy for the down-trodden.
          </div>
          <br />
          {/* Noun-এর Possessive বা Genitive form */}
          <div className="">
            <h3 className="text-pink-600">
              Noun-এর Possessive বা Genitive form
            </h3>
            Possessive বলতে noun বা pronoun-এর একটা form যেটা কোন noun বা
            pronoun-এর কিছু আছে, বা কোন কিছু তার দখলে আছে এরূপ বুঝায়। আমরা এখানে
            noun-এর possessive form আলোচনা করছি। Possessive দুভাবে গঠন করা যায়:{" "}
            <br />
            (1) কোন noun এর পরে' বসিয়ে। <br />
            যেমন: The ship's name. <br />
            (2) Possession-কে prepositional phrase এর-head word বানিয়ে। <br />
            যেমন: The name of the ship. <br />
            Parts of Speech: A Quick Glance 37 <br />
            'S যুক্ত করে possessive গঠন করা যায় কিভাবে <br />
            ফাই <br />
            (1) কোন singular noun-এর শেষে 's যোগ করে। <br />
            যেমন: Bird's beak (পাখির ঠোঁট) Matin's shirt (মতিনের শার্ট) <br />
            Cow's milk (গরুর দুধ); America's foreign policy (আমেরিকার বৈদেশিক
            নীতি); goat's cheese (ছাগদুগ্ধের পনির)। <br />
            (2) সময়ের পরিমাপের ক্ষেত্রে; today's news (আজকের খবর); yesterday's
            incident (গতকালের ঘটনা)। <br />
            (3) Complex noun phrase-এর ক্ষেত্রে: The director of company's
            assessment (কোম্পানির পরিচালকের মূল্যায়ন) the Prince of Albania's
            daughter (আলবানিয়ার রাজকুমারের কন্যা), the chief of Army's statement
            (সেনা প্রধানের বক্তব্য)। <br />
            (4) কিছু কিছু English idiom-এর ক্ষেত্রে an arm's length; for
            economy's sake; our money's worth. <br />
            (5) যে সমস্ত plural-এর শেষে "n" থাকে: children's education; men's
            wear, women's rights. <br />
            (6) 's-possessive দ্বারা বিশেষিত কোন noun উহ্য থাকতে পারে যদি
            প্রসঙ্গ থেকে তা বোঝা যায়: <br />
            (a) My car is faster than Sejan's. (Sejan's car) <br />
            (b) His memory is as good as Rafiq's. (Rafiq's memory) <br />
            উপরের (a) বাক্যে Sejan's-এর পরে car, এবং (b) বাক্যে Rafiq's-এর পরে
            memory-এর উল্লেখ নিষ্প্রয়োজন, কারণ তা context থেকেই বোঝা যাচ্ছে।{" "}
            <br />
            Note যে সমস্ত নাম মানুষ, জীবজন্তু, বা দেশের নাম নয় সেগুলোর 's
            possessive না ব্যবহার করাই উত্তম, এবং "of" possessive দ্বারা প্রকাশ
            করাই উচিত: <br />
            The name of the street. (The street's name নয়) <br />
            The back of the room. (The room's back নয়) <br />
            <br />
            (7) কখনও কখনও দুই বা ততোধিক ব্যক্তি কোন প্রতিষ্ঠান বা সম্পদের মালিক
            হয়। সে ক্ষেত্রে শেষোক্ত নামের পরে 's বসে: <br />
            Haq and Molla's firm; <br />
            Midha and Sheikh's apartment. <br />
            শুধু '(apostrophe) ব্যবহৃত হয়: <br />
            (1) Plural noun এর ক্ষেত্রে; plural "s" এর উপর: <br />
            boys' school; girls' college; citizens' rights. <br />
            <br />
            (2) যে সমস্ত নামের শেষে s থাকে; <br />
            Socrates' ideas; Keats' poetry, Euripides' plays. <br />
            Note: এ জাতীয় নামের শেষে 's ও দেয়া যায়। যেমন: Keats's poetry
            Dickens's novels, ইত্যাদি। <br />
            "Of" ব্যবহার করেও possessive করা যায়: <br />
            Possession-এর নামটা আগে বসিয়ে তার পর "of” এবং possessor-এর নাম বসাতে
            হয়। তখন 's দরকার হয় না। <br />
            যেমন: Keats's poetry এটা the poetry of Keats এভাবেও লেখা যায়। কোন
            কোন ক্ষেত্রে, বিশেষ করে জড় পদার্থের ক্ষেত্রে of-possessive ব্যবহার
            অধিকতর কাম্য। <br />
            যেমন: <br />
            (a) the title of the book <br />
            (b) the interior of the room <br />
            উদাহরণ (a)'র বেলায় The book's title, এবং (b)'র বেলায় The room's
            interior, এভাবেও লেখা যায়, তবে of দিয়ে লেখা বেশি কাম্য। <br />
            তবে কতকগুলো ক্ষেত্রে 's possessive লেখাই যায় না। যেমন: the hub of
            the wheel-এর পরিবর্তে the wheel's hub, লেখা যাবে না। <br />
            বাক্যে Noun-এর ব্যবহার, বা কি কি কাজ করে: <br />
            1. Subject হিসেবে: <br />
            Zaman came yesterday. <br />
            2. Object: <br />
            (a) Direct object: She is eating an apple. <br />
            (b) Indirect object: I gave my friend a gift. <br />
            3. Complement: <br />
            (a) Subjective complement: <br />
            He is a doctor. <br />
            (b) Objective complement: <br />
            We made him chairman. <br />
            4. Adverbial: They went home. <br />
            5. Appositive <br />
            Mr Mahfuz, headmaster of the school, is present. <br />
            6 Modifier of another noun: <br />
            I like a cotton shirt. <br />
            It is a silver bracelet, lalelais draud
          </div>
          <br />
          {/* Noun Phrase */}
          <div className="">
            <h3 className="text-pink-600">Noun Phrase </h3>
            Noun সম্বন্ধে জরুরী জ্ঞাতব্য বিষয়: <br />
            Parts of speech সম্বন্ধে পূর্বেই বলা হয়েছে যে ইংরেজি ভাষা শেখার জন্য
            parts of speech-এর বিস্তৃত বিষয় মনে রাখার কোন প্রয়োজন নেই। এ
            প্রসঙ্গে বলা প্রয়োজন-স্কুল পর্যায়ে সম্মানিত শিক্ষক মহোদয়গণ parts of
            speech-এর বিস্তৃত বিষয় শেখানোর চেষ্টা করেন যদিও ভালো উদ্দেশ্য নিয়ে,
            কিন্তু তার ফলাফল হয় খারাপ। অর্থাৎ তাঁদের এই প্রচেষ্টা ছাত্রদের মধ্যে
            demotivation (নিরুদ্যম) সৃষ্টি করে। noun পাঁচ প্রকার, pronoun অতো
            প্রকার, adjective ততো প্রকার ইত্যাদি মনে রাখার জন্য ছাত্রদের ওপর চাপ
            সৃষ্টি করলে তাদের মধ্যে ভাষা শেখার প্রতি একটা বিতৃষ্ণা জন্মায়, এবং
            এর ফলে তারা শেখার প্রচেষ্টাকে শিথিল করে ফেলে, অথবা ইচ্ছাটাকে একেবারে
            ঝেড়ে ফেলে দিয়ে ভবিতব্যের ওপর নিজকে সম্পূর্ণভাবে সমর্পিত করে।
            <br />
            <br />
            ইংরেজি ভাষা শেখার জন্য noun সম্বন্ধে যেটুকু মনে রাখলেই যথেষ্ট তা
            হচ্ছে: <br />
            (1) Concrete বা abstract কিছুকেই noun বলে। <br />
            (2) Noun-এর singular plural form, অর্থাৎ countable এবং uncountable.{" "}
            <br />
            3) Noun-এর possessive বা genitive form. <br />
            4) Noun phrase এর structure. <br />
            5) Sentence-এ noun-এর function.
            <br />
            <br />
            EXERCISES <br />
            Exercise-1 <br />
            Identify the concrete and abstract nouns: <br />
            (a) book, (b) artist, (c) honesty, (d) beauty, (e) school, (f)
            college, (g) education, (h) air, (i) administration, (j) gold, (k)
            manhood, (1) parent, (m) help, (n) friendship, (o) truth, (p){" "}
            sunshine.
            <br />
            <br />
            Exercise-2 <br />
            Change the concrete nouns into abstract nouns, and vice versa:{" "}
            <br />
            (a) citizen, (b) student, (c) boy, (d) girlhood, (e) brother, (f)
            teacher, (g) secretary, (h) work, (i) state, (j) servant.ol
          </div>
          <br />
          {/*  ii. Pronouns */}
          <div className="">
            <h3 className="text-pink-700">ii. Pronouns </h3>
            কোন noun-এর পরিবর্তে যা ব্যবহৃত হয় তাকে pronoun বলে। Pro-এই
            prefix-এর বাংলা করা যেতে পারে: "পক্ষে"। <br />
            <br />
            Pronoun অনেক প্রকার হতে পারে: <br />
            (1) Personal, (2) reflexive, (3) reciprocal, (4) possessive, (5)
            relative, (6) interrogative, (7) demonstrative, (8) universal, (9)
            assertive, (10) non-assertive, (11) negative, (12) general, (13)
            numerative. <br />
            <br />
            43 Personal Pronoun <br />
            কাছাকাছি clause-এর মধ্যে কোন noun phrase-কে replace করে। eg. Selim
            said to Zahid that he would wait for him. <br />
            <br />
            Reflexive Pronoun <br />
            একই clause এর মধ্যে কোন noun phrase কে replace করে। eg. Selim hurt
            himself. <br />
            <br />
            Reciprocal Pronoun কোন noun phrase-এর সঙ্গে অন্য noun phrase-এর
            পারস্পরিকতা বুঝাতে ব্যবহৃত হয়। eg. Selim and Rashed like each other.{" "}
            <br />
            <br />
            Possessive Pronoun <br />
            Pronoun যেটা কোন noun-এর কোন কিছু possession বুঝায়। eg. Rana has cut
            his finger. <br />
            <br />
            Relative Pronoun <br />
            যে শব্দ কোন noun phrase-কে refer করে যখন কোন relative clause সূচনা
            করে তাকে relative pronoun বলে। <br />
            I want to meet Raquib, who is my friend. <br />
            <br />
            Interrogative Pronoun <br />
            যে শব্দ কোন noun-কে refer করে প্রশ্ন সৃষ্টি করে। eg. Who did it?
            (এখানে অবশ্য "who" এর antecedent noun উল্লিখিত নেই, কিন্তু context
            এর মধ্যে উপস্থিত আছে, এরূপ বুঝায়।) <br />
            <br />
            Demonstrative Pronoun <br />
            Demonstratives নামক পৃথক section-এ আলোচিত হয়েছে।
            <br />
            Universal Pronoun <br />
            একই শব্দ একাধিক noun-কে refer করে। eg. each, every, everybody etc.
            "All the boys got a book each." <br />
            <br />
            Assertive Pronoun <br />
            যে pronoun কোন জোর দিয়ে বলার জন্য ব্যবহৃত হয়। eg. He saw something.{" "}
            <br />
            <br />
            Non-assertive <br />
            Assertive-এর বিপরীতার্থক অর্থাৎ দুর্বলভাবে প্রকাশ করে এমন pronoun
            neither, nor, few, least ইত্যাদি। <br />
            <br />
            Negative Pronoun <br />
            না-বাচক কোন pronoun. যেমন- I saw nothing. <br />
            <br />
            General Pronoun <br />
            many, few much, little ইত্যাদি যেগুলো শব্দ যে কোন
            ব্যক্তি/ব্যক্তিবর্গ বা বস্তু/বস্তুমূহকে বুঝাতে পারে। <br />
            <br />
            Numerative Pronoun সংখ্যা ব্যক্ত করে। যেমন- two, three, ইত্যাদি।
          </div>
          {/* iii. Adjective */}
          <div className="">
            <h3 className="text-pink-600">
              iii. Adjective <br />
            </h3>
            <div className="">
              সংজ্ঞা: Cambridge Advanced Learner's Dictionary নিম্নোক্ত
              definition দিয়েছে adjective-এর: "a word that describes a noun or a
              pronoun." অর্থাৎ adjective কোন noun বা pronoun-কে বর্ণনা করে।{" "}
              <br />
              <br /> পুরাতনপন্থী ইংরেজি Grammar-এ adjective-কে কয়েক ভাগে ভাগ করা
              হয়েছে। যেমন: <br />
              (1) Adjective of quality (বর্ণনাধর্মী বিশেষণ) or Descriptive
              adjective. <br />
              যেমন: <br />
              She is a meritorious girl. <br />
              The man is very clever. ইত্যাদি। <br />
              (2) Adjective of quantity (পরিমাণবাচক বিশেষণ) or, Quantitative
              adjective. যেমন: He wants little money. <br />
              I have got enough money. <br />
              <br />
              (3) Adjective of number (সংখ্যাবাচক বিশেষণ) or, Numeral adjective.{" "}
              <br />
              যেমন: <br /> I've got ten thousand books. <br />
              He has only ten books. <br />
              <br />
              একে আবার ভাগ করা হয় নিম্নোক্ত কয়েক ভাগে: <br />
              (a) Cardinal eg. one, (b) Ordinal eg. first (c) Multiplicative,
              eg. single ইত্যাদি। <br />
              <br />
              (4) Pronominal adjective (সর্বনামজাতীয় বিশেষণ) <br />
              যেমন: That is my book. <br />
              This is your book. <br />
              <br />
              এ ধরনের adjective-কে আবার কয়েক ভাগে ভাগ করা যায়। <br />
              যেমন: (a) Demonstrative, eg. this, that, those, etc. (b)
              Interrogative, e.g. What dress do you like? Which pen is yours?{" "}
              <br />
              (c) Distributive, eg. Each boy must have a dictionary. <br />
              (d) Possessive, eg. Whose pen is this? This is my pen, etc. <br />
              <br />
              (5) Proper adjective (নামোদ্ভূত বিশেষণ): <br />
              কোন ব্যক্তি বা দেশের নাম থেকে এরূপ বিশেষণের সৃষ্টি হয়। <br />
              যেমন: America - American <br />
              India - Indian <br />
              Dickens Dickensian ইত্যাদি। <br />
              <br />
              (6) Relative adjective (সম্পর্কজ্ঞাপক বিশেষণ) <br />
              যেমন: Which book is yours? <br />
              <br />
              (7) Exclamatory adjective (আবেগ প্রকাশক বিশেষণ) <br />
              যেমন: What greatness! <br />
              <br />
              (8)Emphasizing adjective (গুরুত্ব আরোপকারী বিশেষণ) <br />
              যেমন: This is the very thing I want. <br />
              (9) Compound adjective (যৌগিক বিশেষণ) <br />
              যেমন: A four-years course. <br />
              <br />
              এতসব "প্রকারের" ভার একটা শিক্ষার্থীর পক্ষে বহন করা অত্যন্ত কষ্টকর
              নয় কি? অবস্থাদৃষ্টে মনে হয় পুরাতনপন্থী ব্যাকরণবিদগণ তাঁদের অর্জিত
              পাণ্ডিত্য মানুষের কল্যাণে বিতরণ করার জন্য অত্যন্ত উদ্বিগ্ন। কিন্তু
              তাতে ভাষা শিক্ষার্থী বা ভাষা ব্যবহারকারীদের ভাষা শেখার পথে বাধার
              সৃষ্টি হচ্ছে কিনা অথবা তাদের উপর এই সব "প্রকার"-এর পাণ্ডিত্যের
              বোঝা চাপিয়ে তাদের শেখার মেরুদণ্ড জখম করে দেয়া হচ্ছে কিনা তা একবার
              ভেবে দেখা দরকার। <br />
              <br />
              Adjective Phrase-এর গঠন <br />
              ব্যাপক অর্থে যে কোন একটা শব্দকেও phrase বলা হয়। সংকীর্ণ অর্থে
              একাধিক শব্দের গুচ্ছকে phrase বলে। সেই অর্থে adjective phrase-এর
              গঠন কয়েক রকমের হতে পারে। যেমন: <br />
              <br />
              1. Adverb + ADJECTIVE <br />
              (a) extremely silly <br />
              He's extremely silly. <br />
              (b) terribly pleased <br />
              I'm terribly pleased that you've won the match. <br />
              <br />
              2. Adjective + to infinitive <br />
              (a) difficult to find. <br />
              eg. The house was difficult to find. <br />
              (b) hard to please. <br />
              eg. Some people are hard to please. <br />
              <br />
              3. Adjective + preposition + noun/pronoun <br />
              (a) good for health <br />
              eg. Milk is good for health. <br />
              (b) anxious for results <br />
              eg. He's anxious for results. <br />
              <br />
              * কোন কোন প্রকারের শব্দ adjective পদবাচ্য হতে পারে: <br />
              1. Pure adjective, <br /> যেমন: kind, honest, good etc. <br />
              2. -ing participles and -ed participles <br />
              যেমন: <br /> amusing, interesting, confusing, frightened, worried.{" "}
              <br />
              eg. The sight was amusing. <br />
              He told an interesting story. <br />
              Your explanation is confusing. <br />
              He was frightened by the prospect. <br />
              She was worried about her son's health. <br />
              <br />
              3. Gerund, <br /> যেমন: drinking water, walking stick, <br />
              eg. It is pure drinking water. <br />
              The old man uses a walking stick. <br />
              <br />
              4. Articles: <br /> a, an, the. <br />
              eg. This is a book. That's an egg. Here is the boy.
              <br />
              5. Nouns: <br /> He's wearing a cotton shirt. <br />
              It's a brick wall. <br />
              <br />
              6. Prepositional phrase: <br /> I like a walk in the moonlight.{" "}
              <br />
              7. Genitives: This is Rashed's book. <br />
              8. Adverb: The statement above is wrong. <br />
              <br />
              বাক্যে adjective-এর ব্যবহার প্রধানত: তিন ধরনের হতে পারে। <br />
              যথা: (i) attributive, (2) predicative, (3) postpositive. <br />
              <br />
              Attributive Use <br />
              Adjective যখন কোন noun-এর পূর্বে বসে তাকে modify করে, সেক্ষেত্রে
              তার attributive use হয়। eg. He is an intelligent man. এখানে man এই
              noun-এর আগে intelligent, এই adjective বসে তাকে modify করছে। সুতরাং
              intelligent-এর attributive use হয়েছে। <br />
              <br />
              Predicative Use <br />
              Adjective-এর predicative use হয় যখন কোন adjective কোন বাক্যে
              subject complement বা object complement হিসেবে কাজ করে। Subject
              একটা word বা phrase হতে পারে, অথবা একটা finite বা non-finite
              clause-ও হতে পারে। Object-এর ব্যাপারেও একই কথা প্রযোজ্য। <br />
              <br />
              (a) একটা word/phrase যদি subject হয় তার complement হিসেবে: <br />
              He is meritorious. <br />
              His sister is pretty. <br />
              "meritorious" "he"-এর complement, এবং "pretty" হচ্ছে 'His
              sister"-এর complement সুতরাং "meritorious" এবং "pretty" হচ্ছে
              subject complement. <br />
              <br />
              (b) একটা clause যদি subject হয়, তার complement হিসেবে: <br />
              What you say is absurd. <br />
              এখানে "absurd" হচ্ছে "What you say" এই clause (যা এই বাক্যে
              subject)-এর complement. <br />
              <br />
              Drawing up a good plan is not easy <br />
              এখানে "easy" adjective-টা "Drawing up a good plan" এই non-finite
              clause (যা এই বাক্যে subject)-এর complement হিসেবে কাজ করছে।
              সুতরাং "absurd" এবং "easy" হচ্ছে subject complement. <br />
              <br />
              (c) একটি word/phrase যদি object হয় তার complement হিসেবে: <br />
              His wealth could not make him content. <br />
              এই বাক্যে "him" একটা word এবং object, আর "content" এই adjective-টা
              "him" এর complement হিসেবে কাজ করছে। সুতরাং "content" হচ্ছে object
              complement. <br />
              Your good results in the exams made your parents happy.
              <br />
              এই বাক্যে "happy", এই adjective-টা "your parents" এই phrase (যেটা
              এই বাক্যে object) টাকে modify করছে। সুতরাং "happy" হচ্ছে objective
              complement. <br />
              <br />
              (d) একটা clause-ও একটা বাক্যের object হতে পারে। তার complement
              হিসেবে কোন adjective ব্যবহৃত হতে পারে। <br />
              The speaker held whoever were present before him spellbound.{" "}
              <br />
              এই বাক্যে "spellbound", এই adjective-টা "whoever were present
              before him" এই clause (যা এই বাক্যে object)-এর complement হিসেবে
              কাজ করছে। সুতরাং "spellbound"-এর predicative use হয়েছে। <br />
              <br />
              Postpositive Use <br />
              Adjective, বিশেষত একাধিক adjective যখন noun-এর পরে বসে তাকে modify
              করে। যেমন: He entered a room, dark and ominous. <br />
              Position of Adjectives <br />
              Adjective একটা noun-এর আগে বসতে পারে, পরে বসতে পারে, এবং
              sentence-এর শেষে বসতে পারে। যেমন: He is a very kind man. <br />
              A man, tall and stout, suddenly appeared. <br />
              He is pious. <br />
              "Kind" বসেছে "man" এর আগে, "tall and stout" বসেছে man-এর পরে, এবং
              pious বসেছে বাক্যের শেষে। <br />
            </div>
            {/* Degrees of Comparison of Adjectives */}
            <div className="">
              Degrees of Comparison of Adjectives <br />
              <br /> পুরাতনপন্থী ইংরেজি Grammar-গুলোতে তিন প্রকার degree দেওয়া
              আছে। যেমন: (i) Positive degree, (ii) Comparative degree, এবং (iii)
              Superlative degree. <br />
              <br />
              কিন্তু আধুনিক Grammar-এ 'Positive' শব্দটা নেই। তার পরিবর্তে এসেছে
              "Absolute" degree. তাই আমাদের আলোচনায় নিচে উল্লিখিত তিন প্রকার
              Degrees of Adjective-এর আলোচনা করবো। তবে positive degree কথাটা
              alternative হিসেবে রেখে দেয়া হলো: <br />
              1) Absolute degree (positive degree) <br />
              2) Comparative degree <br />
              3) Superlative degree. <br />
              <br />
              [Source: A University Grammar of English] <br />
              <br />
              Absolute Degree/ Positive <br />
              Adjective-এর যখন কোন তুলনা দেখানো হয় না, তখন সেটা হয় adjective-এর
              absulute/positive degree. যেমন: He is very kind. They are happy.
              ইত্যাদি। <br />
              <br />
              Comparative degree: কোন গুণের উপর ভিত্তি করে যখন কোন দুই ব্যক্তি,
              বস্তু, বা ধারণার মধ্যে তুলনা করা হয় তখন তাকে comparative degree of
              adjective বলা হয়। এই তুলনায় দু'টিকে সমান সমান, অথবা কম বা বেশি
              দেখানো হয়। যেমন: <br />
              Zayed is as wise as his brother. <br />
              এ ধরনের তুলনায় কোন একটি গুণ দুজনের মধ্যে সমপরিমাণে আছে এরূপ বুঝায়।
              এই তুলনাকে আধুনিক Grammar-এ "Equal comparison" বলা হয়েছে।
              পুরাতনপন্থী Grammar-এ এ ধরনের বাক্যকে positive degree বলা হয়েছে।
              আধুনিকদের দৃষ্টিতে সেটা ভুল। আবার, <br />
              He is wiser than his brother. <br />
              She is less beautiful than her sister. <br />
              উপরের প্রথম বাক্যে বলা হয়েছে জ্ঞানের দিক দিয়ে সে তার ভাই-এর চেয়ে
              বেশি। দ্বিতীয় বাক্যে বলা হয়েছে "She" তার বোনের চাইতে কম সুন্দরী।{" "}
              <br />
              <br />
              Superlative Degree <br />
              একটা গুণকে ভিত্তি করে যখন একজনের সঙ্গে অনেকের তুলনা দেখানো হয় তখন
              adjective-এর superlative degree হয়। <br />
              যেমন: He is the wisest man in the village. <br />
              এই বাক্যে জ্ঞানের দিক দিয়ে 'He'-এর সঙ্গে গ্রামের অন্যান্য সবার
              তুলনায় বলা হয়েছে যে, সে সবার চেয়ে জ্ঞানী। <br />
              Structures of Adjective Words in Different <br />
              Degrees of Comparison <br />
              Absolute/positive, comparative and superlative forms of adjectives{" "}
              <br />
              <br />
              Absolute degree/positive degree-এর (adjective-এর মূল form) শেষে er
              যোগ করে comparative degree করা হয়, এবং est যোগ করে superlative
              degree করা হয়। তবে মূল শব্দের বানানে কোন কোন ক্ষেত্রে কিছু
              পরিবর্তন আসতে পারে। যেমন: <br />
              <br />
              (a) কিছু কিছু শব্দের শেষে er বা est যোগ দিলেই comparative ও
              superlative form গঠিত হয়, তাতে মূল adjective-এর বানান প্রভাবিত হয়
              না। <br />
              যেমন: <br />
              noble, nice, wise, brave, gentle ইত্যাদি এ জাতীর শব্দ। <br />
              <br />
              (d) কোন কোন adjective-এর শেষে y থাকলে, তার শেষে er যোগ করলে y
              পরিবর্তে। বসে। যেমন: <br />
              <br />
              Absolute/Positive Comparative Superlative <br />
              heavy-heavier-heaviest <br />
              happy-happier-happiest <br />
              এবং <br />
              lazy, dry, pretty, busy ইত্যাদি এ জাতীর শব্দ <br />
              <br />
              (e) দুই syllable বিশিষ্ট অধিকাংশ শব্দের এবং তিন বা ততোধিক syllable
              বিশিষ্ট শবে নিজস্ব comparative বা superlative form হয় না। তাদের
              আগে বেশি বোঝাট more এবং কম বোঝাতে less ব্যবহৃত হয় comparative
              degree-তে, all most এবং least ব্যবহৃত হয় superlative degree-তে।
              যেমন: <br />
              <br />
              Absolute/Positive Comparative Superlative <br />
              dangerous-more/ lessdangerous- most/ least dangerous <br />
              conscious-more/ less conscious - most/ least conscious <br />
              ইত্যাদি। <br />
              <br />
              (f) কোন কোন শব্দের comparative এবং superlative form উপরের কোন
              নিয়মের আওতায় পড়ে না। এরা আলাদা ধরনের। যেমন: <br />
              Absolute/Positive Comparative Superlative <br />
              Good - better - best <br />
              bad-worse-worst <br />
              <br />
              Far- farther farth (অধিক দূর) further (অধিকন্তু, আরো) - farthest{" "}
              <br />
              Little - less - least <br />
              Much/many - more - most <br />
              <br />
              (g) কোন কোন adjective-এর বানান এরকম যে তাদের শেষে "or" আছে।
              এগুলোকে Latin comparatives বলে। যেমন: <br />
              Major, junior, senior, interior, posterior, ulterior, superior,
              inferior. অন্যান্য adjective-এর comparatives-এর than বসে, কিন্তু
              Latin comparatives-এর বেলায় to ব্যবহৃত হয়। <br />
              <br />
              Structures of Comparative and Superlative Degrees in Sentences
              Absolute/Positive Degree <br />
              <br />
              Absolute/Positive degree-এর বাক্যে আলাদা ধরনের কোন structure
              ব্যবহৃত হয় না। বিশেষ শব্দের সঙ্গে বিশেষ preposition প্রয়োজনে
              ব্যবহৃত হতে পারে। <br />
              যেমন: He is kind. <br />
              He is kind to animals. <br />
              <br />
              Exercise 2 <br />
              2. Change the following words into adjectives: <br />
              (a) deception (b) truth (c) honesty (d) success (e) skill (f)
              quietness (g) nature (h) distance (i) nearness (j) height (k)
              piety (l) sin (m) action (n) idleness (o) laziness (p) rest (q)
              beauty (r) ugliness (s) softness (t) hardness. <br />
              <br />
              Exercise 3 <br />
              3. Find out adjective phrases from the list: <br />
              (a) as well (c) full of (e) because of (g) sure of (i) conscious
              of (k) on the other hand (m) hurtful to (o) excellent in (q)
              condemned to (s) doubtful about (b) distant from ka Milana (d)
              badly off (f) aware of (h) with the help of (j) eager to (1) made
              to order (n) informed of (p) relative to (r) generous to (t)
              emotional about
              <br />
              Exercise 4 <br />
              4. Find out the adjective words/phrases and say whether their use
              is attributive or predicative or postpositive: <br />
              The little dark baby screwed up its face. That was his son. He
              thought of the half-caste children in Apia. They had an unhealthy
              look, sallow and pale, and they were odiously precocious. He had
              seen them on the boat going to school in New Zealand, and a school
              had to be chosen which took children with native blood in them;
              they were huddled together, brazen and yet timid, with traits
              which set them apart strangely from white people. They 55 spoke
              the native language among themselves. And when they grew up the
              men accepted smaller salaries because of their native blood; girls
              might marry a white man, but boys had no chance; they must marry a
              half-caste like themselves or a native. (W.S. Maugham) <br />
              <br />
              Exercise 5 <br />
              5. Make an equal comparison between A and B in respect of the
              following adjectives: (a) bad (b) cheap (c) hot (d) important (e)
              far (f) expensive (g) regular (h) clean (i) intelligent (j)
              difficult <br />
              <br />
              Exercise 6 <br />
              6. Make sentences showing that A has more of the qualities
              described by the following adjectives, than B: Vlasnod <br />
              (a) short (b) long (c) heavy (d) punctual (e) hard-working (f)
              economical (g) humble (h) sophisticated (i) interesting (j) strong{" "}
              <br />
              <br />
              Exercise 7 <br />
              7. Make sentences showing that A has less of the qualities
              described by the following adjectives, than B: <br />
              (a) happy (b) interested (c) grateful (d) harmful (e) hopeful (f)
              ignorant (g) <br /> necessary (h) faithful (i) dependable (j)
              prejudiced <br />
              <br />
              8. Make sentences showing that A possesses, more than many others,
              the qualities described by the following adjectives: <br />
              (a) qualified (b) capable (c) brilliant(d) probable (e) satisfied
              (f) sensitive (g) serious (h) useful (i) worthy (j) wicked. <br />
              <br />
              Answers: <br />
              Exercise 1 <br />
              1. Adjectives: (b), (c), (d), (h), (i), (1), (m), (n), (p), (q),
              (r), (s), (t) <br />
              <br />
              Exercise 2 <br />
              Word (changed into)Adjective <br />
              Deception -Deceptive <br />
              Truth- truthful /true <br />
              Honest- Honesty <br />
              Success -Successful <br />
              quiet- Quietness <br />
              NatureDistant - Distance <br />
              near - Nearness <br />
              high- Height <br />
              pious-Piety <br />
              Sin-sinful <br />
              Action-active <br />
              idle-Idleness <br />
              lazy - Laziness <br />
              Rest- Restful <br />
              Beauty - beautiful <br />
              soft-Softness <br />
              hard-Hardness <br />
              Skill- skilled/ skilful <br />
              Natural <br />
              <br />
              Exercise 3 <br />
              3. Adjective phrases: <br />
              (b), (c), (d), (f), (g), (i), (j), (1), (m), (n), (o), (p), (q),
              (r), (s), (t). <br />
              <br />
              Exercise 4 <br />
              Line Adjective Use <br />
              <br />
              1- little dark - attributive <br />
              2. half-caste - “ <br />
              3. Unhealthy - postpositive <br />
              4. sallow and pale <br />
              Exercise 5 <br />
              5. <br />
              (a) A is as bad as B. <br />
              (b) A is as not so cheap as B. <br />
              (c) A is as hot as B. <br />
              (d)(d) A is as important as B. <br />
              A (3) <br />
              (e) A is not so far as B. <br />
              A (5) <br />
              Or,(9)A is as far as B. <br />
              (f) A is as expensive as B. <br />
              (g) A is as regular as B. <br />
              8 nath Hurtint azol zi A <br />
              (if) (h) A is as clean as B. <br />
              (i) A is as intelligent as B. <br />
              Boudholdahosgeb taal ai A (i) <br />
              (j) A is as difficult as B. <br />
              <br />
              Note: A এবং B কোন ব্যক্তি বা বস্তু বা ধারণার প্রতীক হিসেবে ব্যবহৃত
              হয়েছে। পরবর্তী exercise-গুলোতেই সেভাবেই বিবেচিত হবে। <br />
              <br />
              যেমন: A = Zayed, Shafiq ইত্যাদি যে কোন ব্যক্তি বা গাছ, পাথর, নদী,
              বা ধারণা যেমন সততা, দয়া ইত্যাদি হতে পারে। B = A'-র মতই। <br />
              <br />
              Exercise 6 <br />
              6. (a) A is shorter than B. <br />
              (b) A is longer than B. <br />
              (c) A is heavier than B. <br />
              (d) A is more punctual than B. <br />
              (e) A is more hard-working than B. <br />
              (f) A is more economical than B. <br />
              A is humbler than B. <br />
              (h) A is more sophisticated than B. <br />
              (i) A is more interesting than B. <br />
              (j) A is stronger than B. <br />
              Exercise 7 <br />
              7. (a) A is less happy than B. <br />
              Or,I as bod 26 zi A (a) <br />
              B is happier than A. <br />
              (b) A'is less interested than B. <br />
              (c) A is less grateful than B. <br />
              (d) A is less harmful than B. <br />
              (e) A is less hopeful than B. <br />
              (f) A is less ignorant than B. <br />
              (g) A is less necessary than B. <br />
              (h) A is less faithful than B. <br />
              (i) A is less dependable than B. <br />
              (j) A is less prejudiced than B. <br />
              <br />
              Exercise 8 <br />
              .(a) A is the most qualified of all the candidates. <br />
              <br />
              Note: the candidates-এর ক্ষেত্র অনুসারে অন্য কোন noun বসতে পারে।
              যেমন: politicians, economists ইত্যাদি। <br />
              <br />
              (b) A is the most capable of all... (এর স্থলে ব্যক্তিবর্গ বসতে
              পারে) <br />
              (c) A is the most brilliant in the class. <br />
              (d) A is the most probable cause of his death. <br />
              (e) A is the most satisfied of all.... (ব্যক্তি) <br />
              (f) A is the most sensitive of the sisters. <br />
              (g) A is the most serious of the problems. <br />
              (h) A is the most useful of the things. <br />
              (i) A is the worthiest of the officers. <br />
              (j) A is the most wicked of the group. <br />
              <br />
              Note: Degrees of comparison-এর পারস্পরিক পরিবর্তনের Exercise সমূহ
              transformation অধ্যায়ে দেয়া হয়েছে। শিক্ষার্থীদের ঐ অধ্যায় পড়তে এবং
              exercise-গুলোর অনুশীলন করতে পরামর্শ দেয়া হচ্ছে। <br />
              <br />
              আরো পরামর্শ দেয়া হচ্ছে adjective সম্বন্ধে বিস্তারিত জানতে হলে, বা
              reference-এর প্রয়োজন হলে R. Quirk et al লিখিত A Comprehensive
              Grammar of the English Language, অথবা A University Grammar of
              English অথবা G. Leech et al প্রণীত A Communicative Grammar of
              English ইত্যাদি standard বইগুলো consult করার জন্য।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
