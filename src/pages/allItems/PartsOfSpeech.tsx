// import data from "../../synAnt.json";
function PartsOfSpeech() {
  return (
    <div className="w-full ">
      <div className="text-center py-20">
        <h1 className="">Parts of Speech</h1>
        <p className="">A brief discussion on Parts of Speech</p>
      </div>

      <div className="pt-10 px-5 md:w-[50%] mx-auto">
        <h3 className="text-green-500">Parts of Speech</h3>
        <div className="text-lg md:text-xl">
          {/* definition */}
          <div className="">
            Parts মানে হলো অংশ/শব্দ(word) আর Speech মানে হলো
            বক্তব্য/বাক্য(sentence) । বাক্যের মধ্যে ব্যবহৃত প্রত্যেকটি শব্দকে
            Parts of Speech বলে। (Parts means part and speech means sentence.
            The word which is used in a sentence is called Parts of Speech.){" "}
            <br />
            আমরা জানি speech বা বক্তব্য হয় Sentence বা বাক্যের মাধ্যমে। আবার
            Sentence গঠিত হয় Word এর সাহায্যে। (We know that speech is through
            sentences or sentences. Sentences are formed with the help of words.
            Word এর এই শ্রেনীবিন্যাসকেই বলা হয় Parts of Speech. This
            classification of Word is called Parts of Speech). <br />
            Parts of speech আট প্রকার (There are eight types of parts of speech)
            : <br />
            1. Noun ( বিশেষ্য ) <br />
            2. Pronoun <br />
            3. Verb ( ক্রিয়া/ কাজ ) <br />
            4. Adjective ( বিশেষণ )<br />
            5. Adverb ( ক্রিয়া বিশেষণ ) <br />
            6. Preposition ( সমন্ধসূচক অব্যয় ) <br />
            7. Conjunction ( সংযোজক অব্যয় ) <br />
            8. Interjection ( আবেগসূচক অব্যয় )
          </div>
          <br />
          {/* noun */}
          <div className="">
            <span className="dark:text-green-400 font-bold">Noun:</span>
            <br />
            Noun অর্থ নাম। সেজন্য যে কোন নামবাচক পদকে Noun বলে। <br />
            (Noun means name. That is why any noun is called noun.) <br />
            Noun মূলত দুই প্রকার ( There are basically two types of nouns ):{" "}
            <br />
            1. Concrete Noun : <br />
            যার বাহ্যিক অস্তিত্ব এবং শারীরিক গঠন আছে। (Concrete Noun: Which has
            external existence and physical structure.)
            <br />
            যেমন : <br />
            Table, Chair, Rahim, Karim, Dhaka, London ইত্যাদি
            <br />
            2. Abstract Noun : <br />
            এটা মূলত ব্যাক্তি বা বস্তুর অবস্থা, গুণ, প্রকৃতি সম্পর্কিত নামগুলো
            বুঝায়। এদের বাহ্যিক অস্তিত্ব নেই। <br />
            ( Abstract Noun: It basically means the names related to the
            condition, quality, nature of a person or thing. They have no
            external existence.)
            <br />
            যেমন : <br /> Forgiveness, Honesty, Happiness, Friendship, Beauty,
            Love ইত্যাদি...
            <br />
            এছাড়া, <br /> প্রত্যেক প্রকার Noun এর আবার দু'টি ভাগ আছে ( In
            addition, each type of noun has two parts): <br />
            Countable Noun : যে Noun গণনা করা যায়।
            <br />
            1. Singular / Plural দুইটাই হতে পারে. <br />
            2. শেষে s/es যুক্ত হয়। (S/es is added at the end. )<br />
            যেমন : <br />
            Boy - Boys, Mango - Mangos For example: boy - age, mango - mangos{" "}
            <br />
            Uncountable Noun : যে Noun গণনা করা যায় না <br />
            (Uncountable Noun: Noun that cannot be counted): <br />
            1. always Singular. <br />
            2. এদের সাথে s/es বসে না (S/Es does not sit with them. ) ।<br />
            যেমন : <br />
            Fun, News, Information, Wind etc. . <br />
            <br />
          </div>
          {/* Pronoun */}
          <div className="">
            <span className="dark:text-green-400 font-bold">Pronoun:</span>
            <br />
            Pronoun: Pro শব্দের অর্থ পরিবর্তে আর Noun শব্দের অর্থ নাম। অর্থাৎ,
            Noun/নামের পরিবর্তে যে Word ব্যবহার করা হয় সেটাই Pronoun. (The word
            pro means instead and the word noun means name. That is, the word
            used instead of noun/name is the pronoun.) <br />
            যেমন :Such as: I, you, she, they, who, what, this, that, myself,
            themselves etc. I, you, she, they, who, what, this, that, myself,
            themselves etc.
          </div>
          <br />
          <br />
          {/* Adjective */}
          <p className="">
            Adjective <br />
            Adjective: যে word দ্বারা Noun/Pronoun এর দোষ, গুণ, অবস্থা, সংখ্যা,
            পরিমান ইত্যাদি নির্দেশ করে, তাকে Adjective বলে। The word that
            indicates the fault, quality, condition, number, quantity, etc. of
            Noun / Pronoun, is called Adjective. <br />
            Examples: <br />
            দোষ বা গুণ : Bad, lazy, clever, honest etc. <br />
            অবস্থা : Poor, rich, noble, weak, old, Asian, Bangladeshi etc.{" "}
            <br />
            পরিমাণ : Much, little, a few, Enough etc. <br />
            সংখ্যা : First, one, two, Single, double etc.
          </p>
          <br />
          {/* Verb */}
          <p className="">
            Verb <br />
            Verb: যে word দ্বারা কোনো কিছু করা বা হওয়া বা থাকা কে বুঝায়, তাকে
            Verb বলে (The word that means to do or to be or to be something is
            called verb.) । <br />
            যেমন : <br />
            Sing, Think, Laugh, Cry, Jump etc. <br />
            Verb দুই প্রকার: <br />
            (i) Finite - সমাপিকা ক্রিয়া <br />
            (ii) Non-Finite - অসমাপিকা ক্রিয়া
            <br />
            Finit Verb আবার দুই প্রকার:
            <br />
            (i) Principle verb (প্রধান ক্রিয়া) <br />
            (ii) Auxiliary verb (সাহায্যকারী ক্রিয়া) <br />
            Principle Verb : <br />
            যে verb অন্য কোন Verb এর সাহায্য ছাড়া স্বাধীনভাবে সম্পূর্ণ অর্থ
            প্রকাশ করতে পারে, তাকে Principle Verb বলে (The verb that can express
            the complete meaning independently without the help of any other
            verb is called Principle Verb.) । <br />
            Principal Verb আবার দুই প্রকার: <br />
            1. Transitive Verb : সকর্মক ক্রিয়া <br />
            Transitive verb বৈশিষ্ট্য : যে Verb, object ছাড়া অর্থ প্রকাশ করতে
            পারে না (Properties: Verbs cannot express meaning without objects.)
            ।
            <br />
            2. Intransitive Verb - অকর্মক ক্রিয়া: <br />
            Intransitive Verb বৈশিষ্ট্য : যে Verb, object ছাড়াই অর্থ প্রকাশ করতে
            পারে (Properties: Verbs can express meaning without objects.)।{" "}
            <br />
            Examples: <br />
            <div className="overflow-x-auto">
              <table className="min-w-[800px] table-auto dark:border-slate-400">
                <tr>
                  <th>Transitive Verb</th>
                  <th>Intransitive Verb</th>
                </tr>
                <tr>
                  <td>Ring the bell.</td>
                  <td>The bell Ringed.</td>
                </tr>
                <tr>
                  <td>The driver stopped the bus.</td>
                  <td>The bus stopped. </td>
                </tr>
                <tr>
                  <td>the boys flew kites in the sky.</td>
                  <td>Birds flew in the sky.</td>
                </tr>
              </table>
            </div>
            Auxiliary Verb : যে verb ক্রিয়ার কাল বা ভাব প্রকাশ করতে Principle
            Verb কে সাহায্য করে, তাকে Auxiliary verb বলে। এজন্য একে Helping Verb
            ও বলা হয়। The verb that helps the principle verb to express the
            tense or expression of the verb is called the auxiliary verb. That's
            why it's called a helping verb.
            <br />
            List of Auxiliary Verbs :<br />
            1. Be Verb : am, is, are, was, were, be, being, been. <br />
            2. Do Verb : do, does, did <br />
            3. Have Verb : have, has, had, hast
            <br />
            4.Modals : <br />
            can, could, shall, should, will, would, may, might, must, need,
            dare, had better, would rather. <br />
            5. to যুক্ত Modals : <br />
            ought to, have to, be to, used to, be going to, be about to..
            <br />
            Non-Finite Verb: <br />
            Non-Finit Verb আবার তিন প্রকার: <br />
            1. Gerund
            <br />
            2. Participle <br />
            3. Infinitive
            <br />
            Gerund:
            <br /> Gerund = ( verb + ing ) = Noun এর মত আচরণ করবে। <br />
            Gerund = ( verb + ing ) = will behave like noun. <br />
            যেমন : 1. Writing letter is pleasant.
            <br />
            2. Running water is pure. <br />
            3. Swimming is a good exercise.
            <br />
            4. He likes gardening. 4. He likes gardening. <br />
            5. He is absorbed in dreaming. <br />
            6. Seeing is believing.
            <br />
            Technique : Gerund দ্বারা স্থির অবস্থা বোঝায়। <br />
            Technique: Gerund refers to the state of station.
            <br />
            Participle: <br />
            Participle = ( verb + ing ) = Adjective/ Adverb এর মত আচরণ করবে।{" "}
            <br />
            যেমন:
            <br />
            1. I saw him passing the shop.
            <br />
            2. Dancing the girl went away. <br />
            3. He smell the curry burning. <br />
            4. He will go to swimming. <br />
            5. He kept me waiting. 5. He kept me waiting. <br />
            6. I saw the baby sleeping there. <br />
            Technique : Participle দ্বারা চলমান অবস্থা বোঝায়। Technique:
            Participle refers to the state of moving. <br />
            Infinitive:
            <br />
            Infinitive = ( to + verb ) = অর্থাৎ to যুক্ত verb. Infinitive = ( to
            + V-1 ) = অর্থাৎ to যুক্ত verb. <br />
            যেমন : <br />
            1. I'm glad to receive your letter. <br />
            2. We eat food to live. <br />
            3. This is the home to let.
            <br />
            4. To err is human.
            <br />
            5. This car is to hair. <br />
            6. To speak the truth, he's honest.
          </p>
          <br />
          {/* adverb */}
          <p className="">
            Adverb <br />
            Adverb: যে Word Adjective, Verb বা কোনো Adverb কে modify বা qualify
            করে, তাকে Adverb বলে। Adverbs that modify or qualify adverbs without
            word noun / pronoun are called adverbs. <br />
            যেমন: <br />
            1. He started early.
            <br />
            2. He runs very fast. <br />
            3. I know better. <br />
            Short Techniq: Adverbs can also be found by asking questions by how,
            when, where, why.
            <br />
            “Adverb - Time (সময়), Place (স্থান), Manner (ধরণ), Number (সংখ্যা),
            Degree (মাত্রা), Reason (কারণ), Purpose (উদ্দেশ্য), Condition (শর্ত)
            ইত্যাদি প্রকাশ করবে।” <br />
            Adverb - will express time, place, manner, number, degree, reason,
            purpose, condition, etc. ” <br />
            যেমন:
            <br /> Time : now, then, soon, early etc. <br />
            Place : here,there, far, near etc. <br />
            Manner : slowly, quickly, surely, probably etc. <br />
            Number : once, twice, thrice, again, always etc. <br />
            Degree : very, much, partly, wholly etc. D<br />
            Reason : as, so, because etc. <br />
            Condition : if, unless etc. Condition : if, unless etc. <br />
            Technic : How, When, Where, Why দ্বারা প্রশ্ন করলেও Adverb পাওয়া
            যায়। <br />
          </p>
          <br />
          <br />
          Preposition
          <br />
          Preposition: Pre শব্দের অর্থ পূর্বে আর Position শব্দের অর্থ অবস্থান।
          The word Pre means before and the word Position means position.
          অর্থাৎ, যে Word Noun/Pronoun এর পূর্বে বসে পূর্ববর্তী Word এর সাথে
          সম্পর্ক স্থাপন করে, তাকে Preposition বলে। That is, the word that sits
          before the word noun / pronoun and establishes the relation to the
          previous word, it is called preposition. <br />
          যেমন : to, of, in, at, on, into, below, under, beside, around, over,
          above, across, through etc..
          <br />
          <br />
          Conjunction
          <br />
          Conjunction: Con শব্দের অর্থ একত্রে আর Junction শব্দের অর্থ সংযুক্ত
          করা। The word con means together and the word junction means to
          connect. অর্থাৎ, যে Word একাধিক শব্দ বা বাক্যকে সংযুক্ত করার জন্য
          ব্যবহার করা হয়, তাকে Conjunction বলে। <br />
          That is, the word that is used to connect more than one word or
          sentence is called conjunction. <br />
          Example: <br />
          1. Do or Die. <br />
          2. Jack is good but Rose is not bad. <br />
          3. Jack and Rose are good Friends. <br />
          4. Syndrela is beautiful but Thor is powerful.
          <br />
          <br />
          Interjection
          <br />
          Interjection: যে শব্দ মনের আকস্মিক আবেগ প্রকাশ করে, তাকে interjection
          বলে। <br />
          The sound that expresses the sudden emotion of the mind is called
          interjection. যেমন : Hurrah, Hello, Alas, Fie, oh, Eww, Oops... <br />
          More Examples: - <br />
          Hurrah! We won the game! (Emotion of joy)
          <br />- Alas! I failed the exam! (Emotion of sorrow) <br />
          - Wow! What a beautiful car! (Emotion of surprise) <br />- Oh! I
          forgot to bring my purse! (Emotion of sorrow)
          <br />- Ouch! It hurts! - Ouch! It hurts! (Emotion of pain) (Emotion
          of pain)
          <br />
          -Eww! It tastes so bad! (Emotion of disliking)
          <br />
          - Yahoo! I got a job! - Yahoo! I got a job! (Emotion of joy) <br />
          -Huh! I don't care! -Huh! I don't care! (Emotion of scorn)
        </div>
      </div>

      {/* Short technic */}
      {/* <div className="h-full w-[85%] mx-auto pt-10">
        <h1 className="text-rose-500 text-center"> Short technique </h1>

        <div className="my-5">
          Parts of Speech চিনিবার উপায়
          <br />
          <br />
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
          Noun চনিবার উপায়ঃ <br />
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
          <br />
          <br />
          Parts of Speech পরিবর্তনের নিয়মাবলী
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
          <br />
          <br />
          -0-
          <br />
          Noun, verb এবং adjective, Adverb দ্বারা বাক্য ঠনের নিয়মাবলী
          <br />
          <br />
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

        <img src="img/parts1.jpg" alt="" />
        <img src="img/parts2.jpg" alt="" />
        <img src="img/parts3.jpg" alt="" />
      </div> */}
    </div>
  );
}

export default PartsOfSpeech;
