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
            <br />
            <br />
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
              Infinitive যদি উদ্দেশ্যমূলক না হয় তবে তা noun-এর মত কাজ করে।{" "}
              <br />
              যেমন: <br />
              (a) To do this work requires great skill. <br />
              zullised <br />
              (b) I want to have a good accommodation here. <br />
              Sentence (a) তে "To do this work" subject হিসেবে কাজ করছে, এবং (b)
              তে "to have a good accommodation" object হিসেবে কাজ করছে। <br />
              (3) Adjective-এর আগে "the" ব্যবহৃত হলে তা noun-এর মত কাজ করে।{" "}
              <br />
              যেমন: <br />
              "The poor", "the rich" <br />
              এবং past participle-এর আগে "the" বসালেও তা noun-এর মত কাজ করে।
              যেমন:
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
              pronoun-এর কিছু আছে, বা কোন কিছু তার দখলে আছে এরূপ বুঝায়। আমরা
              এখানে noun-এর possessive form আলোচনা করছি। Possessive দুভাবে গঠন
              করা যায়: <br />
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
              daughter (আলবানিয়ার রাজকুমারের কন্যা), the chief of Army's
              statement (সেনা প্রধানের বক্তব্য)। <br />
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
              possessive না ব্যবহার করাই উত্তম, এবং "of" possessive দ্বারা
              প্রকাশ করাই উচিত: <br />
              The name of the street. (The street's name নয়) <br />
              The back of the room. (The room's back নয়) <br />
              <br />
              (7) কখনও কখনও দুই বা ততোধিক ব্যক্তি কোন প্রতিষ্ঠান বা সম্পদের
              মালিক হয়। সে ক্ষেত্রে শেষোক্ত নামের পরে 's বসে: <br />
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
              Possession-এর নামটা আগে বসিয়ে তার পর "of” এবং possessor-এর নাম
              বসাতে হয়। তখন 's দরকার হয় না। <br />
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
              Parts of speech সম্বন্ধে পূর্বেই বলা হয়েছে যে ইংরেজি ভাষা শেখার
              জন্য parts of speech-এর বিস্তৃত বিষয় মনে রাখার কোন প্রয়োজন নেই। এ
              প্রসঙ্গে বলা প্রয়োজন-স্কুল পর্যায়ে সম্মানিত শিক্ষক মহোদয়গণ parts
              of speech-এর বিস্তৃত বিষয় শেখানোর চেষ্টা করেন যদিও ভালো উদ্দেশ্য
              নিয়ে, কিন্তু তার ফলাফল হয় খারাপ। অর্থাৎ তাঁদের এই প্রচেষ্টা
              ছাত্রদের মধ্যে demotivation (নিরুদ্যম) সৃষ্টি করে। noun পাঁচ
              প্রকার, pronoun অতো প্রকার, adjective ততো প্রকার ইত্যাদি মনে রাখার
              জন্য ছাত্রদের ওপর চাপ সৃষ্টি করলে তাদের মধ্যে ভাষা শেখার প্রতি
              একটা বিতৃষ্ণা জন্মায়, এবং এর ফলে তারা শেখার প্রচেষ্টাকে শিথিল করে
              ফেলে, অথবা ইচ্ছাটাকে একেবারে ঝেড়ে ফেলে দিয়ে ভবিতব্যের ওপর নিজকে
              সম্পূর্ণভাবে সমর্পিত করে loin tasd (shequo) bnet) <br />
              ইংরেজি ভাষা শেখার জন্য noun সম্বন্ধে যেটুকু মনে রাখলেই যথেষ্ট তা
              হচ্ছে: <br />
              (1) Concrete বা abstract কিছুকেই noun বলে। <br />
              (2) Noun-এর singular plural form, অর্থাৎ countable এবং
              uncountable. <br />
              3) Noun-এর possessive বা genitive form. <br />
              4) Noun phrase এর structure. <br />
              5) Sentence-এ noun-এর function. <br />
              EXERCISES <br />
              Exercise-1 <br />
              Identify the conc ete and abstract nouns: <br />
              (a) book, (b) artist, (c) honesty, (d) beauty, (e) school, (f)
              college, (g) education, (h) air, (i) administration, (j) gold, (k)
              manhood, (1) parent, (m) help, (n) friendship, (o) truth, (p){" "}
              <br />
              sunshine. <br />
              Exercise-2 <br />
              Change the concrete nouns into abstract nouns, and vice versa:{" "}
              <br />
              (a) citizen, (b) student, (c) boy, (d) girlhood, (e) brother, (f)
              teacher, (g) secretary, (h) work, (i) state, (j) servant.ol
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
