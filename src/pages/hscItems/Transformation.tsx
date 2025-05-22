const Transformation = () => {
  return (
    <div className="h-full md:w-[55%] mx-auto px-3">
      <div className="my-20">
        <h1 className="text-center text-green-500">Transformation</h1>
      </div>

      <div className="">
        Transformation of Sentences: <br />
        Sentences এর নিম্নলিখিত রূপান্তরকে Transformation-এর অন্তর্ভুক্ত করা হয়:
        <br />
        (a) Affirmative to Negative/ Negative to Affirmative, <br />
        (b) Assertive, Interrogative, Imperative, Exclamatory পারস্পরিক রুপান্তর
        <br />
        (c) Active, Passive-এর পারস্পরিক রূপান্তর <br />
        (d) Simple, Complex, Compound- এর পারারিক রুপান্তর <br />
        (e) Positive, Comparative, Superlative-এর পারস্পরিক জাগান্তর।
      </div>

      {/* TABLE: AFFIRMATIVE-NEGATIVE */}
      <div className="w-full overflow-x-auto my-10">
        <h3 className="text-center md:text-start text-green-500">
          [A] Affirmative to Negative/ Negative to Affirmative
        </h3>
        <table className="md:w-full min-w-[800px] table-auto dark:border-slate-400">
          <tr>
            <th>Affirmative (Aff.)</th>
            <th>Negative (Neg.)</th>
            <th>Example</th>
          </tr>
          <tr>
            <td>Only / Alone</td>
            <td>None but</td>
            <td>
              A: Only the brave deserve the fair.
              <br />
              N: None but the br/ave deserve the fair.
            </td>
          </tr>
          <tr>
            <td>Only/Alone</td>
            <td>Nothing but</td>
            <td>
              A: Only the Moon was visible.
              <br />
              N: Nothing but the moon was visible.
            </td>
          </tr>
          <tr>
            <td>Only/Alone</td>
            <td>Not more than/Not less than</td>
            <td>
              A: He is only thirteen.
              <br />
              N: He is not more than thirteen.
            </td>
          </tr>
          <tr>
            <td>Must/ have to/ has to</td>
            <td>Cannot but + V1</td>
            <td>
              A: Man must submit to destiny.
              <br />
              N: Man cannot but submit to destiny.
            </td>
          </tr>
          <tr>
            <td>Must/ have to/ has to</td>
            <td>Cannot + (V1+ing)</td>
            <td>
              A: He must go there.
              <br />
              N: I can not help going there.
            </td>
          </tr>
          <tr>
            <td>Could/should</td>
            <td>Could not help + (V1+ing)</td>
            <td>
              A: I had to go there.
              <br />
              N: I could not help going there.
            </td>
          </tr>
          <tr>
            <td>Both.....and/ And</td>
            <td>Not only.....but also</td>
            <td>
              A: Both Jony and Jihad can do the work.
              <br />
              N: Not only Jony but also Jihad can do the work.
            </td>
          </tr>
          <tr>
            <td>Every</td>
            <td>There is no......but</td>
            <td>
              A: There is no mother but loves her child.
              <br />
              N: There is no mother but loves her child.
            </td>
          </tr>
          <tr>
            <td>Every/All/A-</td>
            <td>No/Nobody/No one...+ Opposite Verb</td>
            <td>
              A: All love flowers.
              <br />
              N: Nobody hates flowers.
            </td>
          </tr>
          <tr>
            <td>Every/ All</td>
            <td>No......... + Opposite Adj.</td>
            <td>
              A: All men are mortal.
              <br />
              N: No man is immortal.
            </td>
          </tr>
          <tr>
            <td>Every/ All</td>
            <td>Opposite Adj.</td>
            <td>
              A: All Bangladeshis are hospitable.
              <br />
              N: No Bangladeshis is inhospitable.
            </td>
          </tr>
          <tr>
            <td>Always</td>
            <td>Never + Opposite word</td>
            <td>
              A: They always remember us.
              <br />
              N: They never forget us.
            </td>
          </tr>
          <tr>
            <td>চিরসত্য</td>
            <td>Not + Opposite Word</td>
            <td>
              A: Man is mortal.
              <br />
              N: Man is not immortal.
            </td>
          </tr>
          <tr>
            <td>As soon as</td>
            <td>No sooner had.... than</td>
            <td>
              A: As soon as the thief saw the police, he ran away.
              <br />
              N: No sooner had the police than he ran away.
            </td>
          </tr>
          <tr>
            <td>Superlative</td>
            <td>Positive</td>
            <td>
              A: He is the best boy in the class.
              <br />
              N: He is the boy who is not active.
            </td>
          </tr>
          <tr>
            <td>too....to</td>
            <td>So....that</td>
            <td>
              A: He is too weak to walk.
              <br />
              N: He is so weak that he cannot walk.
            </td>
          </tr>
          <tr>
            <td>as + Adj-1 + as </td>
            <td>Not less + Adjective-1 + than</td>
            <td>
              A: Ice is as white as snow.
              <br />
              N: Ice is not less white than snow.
            </td>
          </tr>
          <tr>
            <td>Very much </td>
            <td>Neg + at all</td>

            <td>
              A: He likes me very much. <br />
              N: He doesn't dislike me at all.
            </td>
          </tr>
        </table>
      </div>

      {/* antonyms */}
      <div className="">
        <h3 className="">কিছু বিপরীতার্থক শব্দের নমুনা:</h3>

        <div className="flex gap-10">
          <p className="">
            good- bad <br />
            friend - foe <br />
            moral - immoral <br />
            mortal - Immortal <br />
            regular - Irregular <br />
            active - Inactive <br />
            always - never <br />
            honour - dishonour. <br />
            present - absent <br />
            healthy - unhealthy <br />
            rich - poor <br />
            love - hate <br />
            wise - unwise <br />
            remember - forget <br />
            pleasant - unpleasant <br />
            grateful - ungrateful <br />
            dishonest - dishonest <br />
            agreed- disagreed <br />
          </p>
          <p className="">
            honesty - dishonesty <br />
            sincere - Insincere <br />
            doubtful - undoubtful <br />
            wise - unwise/foolish <br />
            pleased - displeased <br />
            happy - unhappy <br />
            possible - impossible <br />
            litetate - Biterate <br />
            hard - easy <br />
            punctual-late <br />
            ordinary-extraordinary <br />
            responsible- Irresponsible <br />
            willing - unwilling <br />
            obey - disobey <br />
            obedient - disobedient <br />
            solvent - insolvent <br />
            real - unreal <br />
            right - wrong <br />
          </p>
        </div>
      </div>

      {/* INTERROGATIVE, IMPERATIVE, EXCLAMATORY */}
      <div className="mt-5 text-lg md:text-xl">
        <h3 className="text-green-500">Assertive থেকে Interrogative-এ রূপান্তর</h3>
        <div className="">
          1. বাক্যের মধ্যে Auxiliary verb থাকলে Auxiliary verb বাক্যের শুরুতে
          বসবে। বাক্যটি Affirmative হলে তা Negative হবে, আর Negative এ থাকলে তা
          Affirmative হবে। (যেমন: is থাকলে Isn't হবে এবং is not বা isn't থাকলে
          'ls' হবে। <br />
          উদাহরণ: <br />
          i. Aff: Kamal was a good boy. <br />
          Inter: Wasn't Kamal a good boy? <br />
          ii . Aff: They are not playing. <br />
          Inter: Are they playing? <br />
          <br />
          2. বাক্যের মধ্যে Auxiliary verb না থাকলে, বাক্যের শুরুতে
          Don't/Doesn't/Didn't বসিয়ে Interrogative করা হয়। Auxiliary verb বলতে
          সাধারণত 'to be', 'to have', modal verb গুলোকে বোঝায়। আর Assertive
          sentence-টি Negative হলে প্রশ্নবোধক Sentence টিতে do/does/did হয়। <br />
          উদাহরণ: <br />
          Ass: Liza sings very well. <br />
          Inter: Doesn't Liza sing very well? <br />
          Ass: Liza sang very well. <br />
          Inter: Didn't Liza sing well? <br />
          <br />
          3. Everybody. Everyone, All থাকলে এদের পরিবর্তে আয় অনুসারে Who does
          not/did not বসিয়ে Interrogative করতে হয়। <br />
          উদাহরণ: <br />
          i. Ass: Everybody knows him.
          <br />
          Inter: Who does not know him?
          <br />
          ii. Ass All loved her.
          <br />
          Inter: Who did not love her?
          <br />
          <br />
          4. বাক্যে Nobody, None, No one থাকলে এদের পরিবর্তে 'Who' বসবে।
          <br />
          উদাহরণ:
          <br />
          Ass: Nobody believes a liar.
          <br />
          Inter: Who believes a liar?
        </div>


        <br />

        <div className="">
          <h3 className="text-green-500">

            Assertive থেকে Imperative (command/request/order/advice) -এ রূপান্তর
          </h3>
          1. Assertive sentence-এর subject যদি second person (you) হয় তবে মূল verb
          দ্বারা বাক্যটি শুরু হবে। এক্ষেত্রে মূল verb-এর পূর্বের অংশ বাদ যাবে। তবে
          Assertive sentence টি 'না-বোধক' হলে 'Do not + verb' দ্বারা বাক্যটি শুরু
          হবে।
          <br />
          উদাহরণ:
          <br />
          i. Ass: You should not run in the sun.
          <br />
          Imp: Do not run in the sun.
          <br />
          ii. Aff: Obey your parents.
          <br />
          2. Assertive sentence টিতে যদি 'request' কথাটি থাকে তবে Imperative করার
          সময় 'please/kindly + verb' দ্বারা বাক্যটি শুরু হবে।
          <br />
          উদাহরণ:
          <br />
          1. Ass: I request you to do it.
          <br />
          Imp: Please do it.
          <br />
          ii. Ass: You are requested to help him.
          <br />
          Imp: Please help him.
          <br />
          <br />
          3. Assertive sentence-এর subject যদি 1st person কিংবা 3rd person হয়, তবে
          Imperative বাক্যটি Let দ্বারা শুরু হবে। <br />
          Rule: Let + objective pronoun (me/ us/ him/her/ them) + Verb + Others.
          উদাহরণ:
          <br />
          Ass: I must go now.
          <br />
          Imp: Let me go now.
          <br />
          Ass: He should do the sum.
          <br />
          Imp: Let him do the sum.
          <br />
          <br />
          4. Never যুক্ত assertive sentence-কে imperative করার
          <br />
          নিয়মে: প্রদত্ত never + প্রদত্ত মূল verb-এর base form + verb-এর পরের অংশ।
          <br />
          উদাহরণ:
          <br />
          Ass: Never do this.
          <br />
          Imp: You should never do this.
          <br />
          <br />
          5. First person বা third person যুক্ত Assertive sentence- এ not থাকলে
          Imperative করার <br />
          নিয়ম: Let + প্রদত্ত subject এর objective from + প্রদত্ত verb থেকে শেষ
          পর্যন্ত।
          <br />
          উদাহরণ:
          <br />
          Ass: We do not hate the poor.
          <br />
          Imp: Let us not hate the poor.
          <br />
          Ass: Nilu does not run in the sun.
          <br />
          Imp: Let not Nilu run in the sun.
        </div>


        <br />
        <div className="">
          <h3 className="text-green-500">Assertive থেকে Exclamatory -তে রূপান্তর-</h3>
          1. বাক্যে 'I wish' থাকলে 'I wish'-এর পরিবর্তে 'If' বসিয়ে Exclamatory করা
          যায়।
          <br />
          উদাহরণ:
          <br />
          Ass: I wish I were a bird.
          <br />
          Exc: If I were a bird!
          <br />
          Ass:I wish I could do it.
          <br />
          Exc: If I could do it!
          <br />
          <br />
          2. বাক্যের মধ্যে very/ great থাকলে, এদের পরিবর্তে What a/an অথবা How
          বসিয়ে শুরু করতে হয়। এক্ষেত্রে যদি বাক্যের মধ্যে 'a'/an থাকে তবেই What
          a/an হবে। আর বাক্যের মধ্যে 'a/ an' না থাকলে 'How' হবে। উদাহরণ
          <br />
          Rule: What + a/an + Verb এর পরের অংশ + Subject + Verb + ! (Exclamatory
          Sign) Rule: How + Verb এর পরের অংশ + Subject + Verb + ! (Exclamatory
          Sign)
          <br />
          Ass:The picture is very nice.
          <br />
          Exc: How nice the picture is!
          <br />
          Ass: You are a great fool.
          <br />
          Exc: What a fool you are!
          <br />
          <br />
          3. <br />
          i. Hurrah যুক্ত অর্থ্যাৎ যে exclamatory sentence দ্বারা খুশি প্রকাশ করে
          সেক্ষেত্রে Hurrah-এর পরিবর্তে it is a matter of joy + that + sentence-এর
          বাকি অংশ।
          <br />
          উদাহরণ:
          <br />
          Exc: Hurrah! We have done well.
          <br />
          Ass: It is a matter of joy that we have done well.
          <br />
          <br />
          ii. Alas বা দুঃখবোধক Exclamatory sentence-এর ক্ষেত্রে also-এর পরিবর্তে
          it is a matter of sorrow + that বসে + বাক্যের বাকি অংশ বসে।
          <br />
          উদাহরণ:
          <br />
          Exc: Alas! I am finished.
          <br />
          Ass: It is a matter of sorrow that I am finished.
        </div>


      </div>

      {/* SIMPLE COMPOUND COMPLEX VISE-VERSA */}
      <div className="mt-10 text-lg md:text-xl">
        <h2 className="">SIMPLE, COMPOUND, COMPLEX, VISE-VERSA </h2>
        {/* Complex to Compound & Compound to complex: */}
        <div className="">
          <h3 className="text-green-500">Complex to Compound & Compound to complex:</h3>
          <p className="">
            <strong>Rule:(1) </strong>Since/as/ when / as soon as/ because
            দ্বারা শুরু / যুক্ত বাক্যের মাঝখানে And বসিয়ে Since /as/ when উঠিয়ে
            দিলে Compound হবে। <br />
            যেমনঃ <br />
            Q. When I was eight, I was there. <br />
            = I was eight and I was there. <br />
            <strong>অনুরুপভাবেঃ</strong> <br />
            And উঠিয়ে শুরুতে As বসালে Complex হবে। <br />
            যেমনঃ <br />
            Q. I was sick and I could not attend the meeting. <br />
            = As I was
            sick, I could not attend the meeting.
          </p>
          <br />
          <p className="">
            <strong>Rule:(2) </strong> Though/ Although উঠিয়ে মাঝখানে but বসালে
            Compound হবে। <br />
            যেমনঃ <br />
            Q. Although he was sick, he was walking. <br />
            = He was sick but he was walking. <br />
            <strong>অনুরুপভাবেঃ</strong> <br />
            মাঝখানে থেকে but / yet উঠিয়ে শুরুতে Though / Although বসালে Complex
            হবে।
            <br />
            যেমনঃ <br />
            Q. He was honest but was punished. <br />
            = Though He was honest, he was punished. <br />
          </p>
          <br />
          <p className="">
            <strong>Rule:(3) </strong> If দ্বারা শুরু বাক্য না বোধক হলে মূল if +
            Subject উঠিয়ে মাঝখানে or বসাতে হবে। <br />
            যেমনঃ <br />
            Q. If you work hard, you will pass. <br />
            = Work hard and you will pass. <br />
            কিন্তু- <br />
            if দ্বারা শুরু বাক্য হ্যাঁবোধক হলে if - থেকে - not পর্যন্ত উঠিয়ে
            মাঝখানে and বসালে Compound হবে। <br />
            যেমনঃ <br />
            Q. If you do not do, you will die. <br />
            = Do or you will die. <br />
            <strong>অনুরুপভাবেঃ</strong> <br />
            And দ্বারা যুক্ত বাক্যের শুরুতে subject না থাকলে If + Sub (you)
            বসিয়ে And উঠালে Complex হবে। আবার or উঠিয়ে বাক্যের শুরুতে If + sub
            (you) + do not বসালে Complex হবে। <br />
            যেমনঃ <br />
            Q. Work hard and you will pass. <br />
            = If you work hard, you will pass. <br />
            Q. Do or you will die.
            <br />= If you do not do it, you will die.
          </p>

          <br />
        </div>

        {/* Compound to simple & Simple to Compound: */}
        <div className="">
          <h3 className="text-green-500">Compound to simple & Simple to Compound:</h3>
          <p className="">
            <strong>Rule:(1) </strong>And দ্বারা যুক্ত বাক্যের And উঠিয়ে প্রথম
            বাক্যাংশের Subject উঠিয়ে মূল V₁ এর সঙ্গে ing যুক্ত করতে হবে। যদি
            প্রথম বাক্যে be verb থাকে তবে এর পরিবর্তে being এবং have verb থাকলে
            having বসালে Simple হবে। <br />
            যেমনঃ <br />
            Q. He closed the window and went out, <br />
            = Closing the window, he went out. <br />
            <strong>NOTE: </strong> <br />
            দুটি বাক্যের Subject যদি ভিন্ন হয় তবে Subject উঠবেনা। <br />
            যেমনঃ <br />
            Q. The tea was hot and we could not drink. <br />
            = The tea being hot, we could not drink. <br />
            <strong>অনুরুপভাবেঃ</strong> <br />
            ing/ being/ having দ্বারা শুরু বাক্যের মাঝখানে and বসিয়ে Subject + V
            কে পরের বাক্যের Tense অনুসারে সাজাতে হবে। <br />
            যেমনঃ <br />
            Q. The sun having set, they left home. <br />
            = The sun had set and they left home. <br />
            <br />
            <span className="text-rose-600 font-bold">কিন্তু:-</span> <br />
            And দ্বারা যুক্ত বাক্যের শুরুতে sub না থাকলে And উঠিয়ে বাক্যের
            শুরুতে by বসাতে হবে এবং by এর পরের V₁ এর সঙ্গে ing যুক্ত করাতে হবে।{" "}
            <br />
            যেমনঃ <br />
            Q. Work hard and you will succeed. <br />
            =By working hard, you will succeed. <br />
            <strong>অনুরুপভাবে:</strong> <br />
            উল্টোটা করলে - by এবং ing ঊঠিয়ে কোমা এর স্থলে and বসালে Compound
            হবে। <br />
            যেমনঃ <br />
            Q. By working hard, you will succeed.
            <br />= Work hard and you will succeed.
          </p>

          <br />
          <p className="">
            <strong>Rule: (2) </strong>
            But/yet দ্বারা যুক্ত বাক্যের শুরুতে In spite of/ Despite of বসিয়ে
            পরের মূল V1 এর সঙ্গে ing যুক্ত করলে Simple হবে। কিন্তু প্রথম বাক্যে
            verb to be থাকলে এর পরিবর্তে being এবং have verb এর পরিবর্তে having
            বসাতে হবে।
            <br />
            যেমনঃ <br />
            Q. He is rich but he is simple minded. <br />
            = In spite of being rich, he is simple minded. <br />
            <strong> অনুরুপভাবেঃ</strong> <br />
            In spite of/ Despite of উঠিয়ে পরের Possessive থাকলে Subjective বসাতে
            হবে এবং ing যুক্ত Verb কে পরের বাক্যাংশ অনুসারে verb টিকে বসাতে হবে।
            কিন্তু being থাকলে be verb এবং having থাকলে have verb বসালে Compound
            হবে। <br />
            যেমনঃ <br />
            Q. In spite of being rich, he is simple minded.
            <br />= He is rich but he is simple minded.
          </p>
          <br />
          <p className="">
            <strong>Rule:(3) </strong>Or দ্বারা যুক্ত বাক্যের Or পরের বাক্যাংশটি
            Negative হলে or উঠিয়ে বাক্যের শুরুতে without বসিয়ে এর পরের মূল V₁ এর
            সঙ্গে ing যুক্ত করলে Compound হবে। <br />
            যেমনঃ <br />
            Q. Work hard or you will not shine. <br />
            = Without working hard, you will not shine. <br />
            <strong>কিন্তু:- </strong> <br />
            Or দ্বারা যুক্ত বাক্যের পরের বাক্যাংশটি হ্যাঁবোধক হলে by বসাতে হবে।
            <br />
            যেমনঃ <br />
            Q. Do it or you will die.
            <br />= By doing you will die.
            <br />
            <strong> অনুরুপভাবে: </strong> <br />
            by / without এবং V₁ এর ing উঠিয়ে V₁ করতে হবে এবং মাঝখানে comma উঠিয়ে
            or বসালে Compound হবে। <br />
            যেমনঃ <br />
            Q. Without working hard, it will not shine.
            <br />= Work hard or you will not shine.
          </p>
        </div>
        <br />

        {/* Complex to Simple & Simple to Complex: */}
        <div className="">
          <h3 className="text-green-500">Complex to Simple & Simple to complex:</h3>
          <div className="">
            <strong>Rule- (i): </strong> Since/ as/ when / as soon as দ্বারা
            শুরু বা যুক্ত বাক্যের Since/ as/ when + subject উঠিয়ে মূল V₁ এর
            সঙ্গে ing যুক্ত করলে Simple হবে।
            <br />
            যেমনঃ
            <br />
            Q. Since I forgot, I went out. <br />
            = Forgetting him, I went out.
            <br />
            <strong>অনুরুপভাবে:</strong> <br />
            ing যুক্ত Verb দ্বারা শুরু বাক্যের শুরুতে As/Since/When + Subject
            বসিয়ে + এবং V টিকে পরের বাক্যের tense অনুসারে বসালে Complex হবে।{" "}
            <br />
            যেমনঃ <br />
            Q. Closing the door, I called her. <br />= As I closed the door, I
            called her.
          </div>
          <br />
          <div className="">
            <strong>কিন্তু-</strong> <br />
            <strong>Rule - (2): </strong> As/Since/when বাক্যের
            am/is/are/was/were এর পরিবর্তে being এবং have/has/had এর পরিবর্তে
            having বসালে Simple হবে। <br />
            যেমনঃ
            <br />
            Q. As the water was salty, We could not drink. <br />
            = The water being salty, We could not drink.
            <br />
            <strong>অনুরুপভাবে:</strong> <br />
            উল্লোটা করলেই Complex হবে অর্থাৎ শুরুতে As/Since এবং Being স্থলে am/
            is/ are বা having এর স্থলে have/has/had বসে। <br />
            যেমনঃ <br />
            Q. The water being salty, We could not drink. <br />= As the water
            was salty, We could not drink.{" "}
          </div>
          <br />
          <div className="">
            <strong>কিন্তু-</strong>
            <br />
            <strong>Rule - (3): </strong> When দ্বারা বাক্যে দিনের কোন বেলাকে
            বুঝালে When + Sub + V উঠিয়ে At বসে , বয়স বুঝালে At the age of এবং
            ঋতু বুঝালে In বসে । <br />
            যেমনঃ <br />
            Q. When it is spring, the cuckoo sings. <br />
            = In spring the cuckoo sings.
            <br />
            <strong>অনুরুপভাবে:</strong> <br />
            at / In / at the age of উঠিয়ে When + it/ sub (আগের বাক্য অনুসারে) +
            V বসালে Complex হবে। <br />
            যেমনঃ <br />
            Q. At the age of four, he left home. <br />= When he was four, he
            left home.
          </div>
          <br />
          <div className="">
            <strong> Rule - (4): </strong>Who/ Which/ That/ what দ্বারা দুটি
            বাক্য যুক্ত হলে who/ which/ that/ what + helping Verb (যদি থাকে)
            উঠিয়ে পরের মুল V₁ এর সঙ্গে ing যুক্ত করতে হবে। <br />
            যেমনঃ <br />
            Q. I saw a man who was walking. <br />
            = I saw a man walking. <br />
            <strong>অনুরুপভাবে:</strong> <br />
            উল্টাটে করলে Complex হবে। <br />
            যেমনঃ <br />
            Q. I lived in a house belonging to me. <br />
            =I lived in a house which belonged to me. <br />
            অর্থাৎ- <br />
            ing যুক্ত verb এর পূর্বে বস্তুবাচক শব্দ থাকলে That/Which/What এবং
            ব্যক্তি থাকলে Who বসিয়ে ing যুক্ত verb টিকে Tense অনুসারে সাজাতে
            হবে।
          </div>
          <br />
          <div className="">
            <strong>Rule: (5) </strong> So ......... that দ্বারা যুক্ত বাক্যে So
            এর স্থলে too এবং That থেকা not পর্যন্ত উঠিয়ে To বসালে simple হবে।{" "}
            <br />
            যেমনঃ <br />
            Q. He is so weak that he cannot talk. <br />
            = He is too weak to talk. <br />
            <strong>অনুরুপভাবে:</strong> <br />
            উল্টাটা করলে Complex হবে। <br />
            যেমনঃ <br />
            Q. He walks too slowly to reach in time. <br />
            = He walks so slowly that he cannot reach there on time. <br />
            <strong>অর্থাৎ-</strong> <br />
            too এর স্থলে so এবং to উঠিয়ে to এর স্থলে That + Subject (আগের বাক্য
            অনুসারে) + cannot/ couldnot/ may not/ might not + Verb থেকে বাকি অংশ
            হবে।
          </div>
          <br />
          <div className="">
            <strong>Rule:(6) </strong>so that দ্বারা যুক্ত বাক্যের so থেকে
            Can/Could/may/might পর্যন্ত উঠিয়ে উক্ত স্থানে to বসালে Simple হবে।{" "}
            <br />
            যেমনঃ <br />
            Q. We eat so that we may live. <br />
            = We eat to live. <br />
            <strong>অনুরুপভাবেঃ </strong> <br />
            উল্টা করলে Complex হবে। অর্থাৎ to স্থলে so that + sub +
            may/might/can/could বসালে Complex হবে। <br />
            যেমনঃ <br />
            Q. We eat to live. <br />= We eat so that we may live.
          </div>
          <br />
          <div className="">
            Rule:(7) If দ্বারা শুরু বাক্যে Negative হলে if থেকে not পর্যন্ত
            উঠিয়ে without বসাতে হবে এবং without এর পরের V1 এর সাথে ing যুক্ত
            করলে Simple হবে। <br />
            যেমনঃ <br />
            Q. If you do not study, you will not pass. <br />
            = Without studying well, you will not pass. <br />
            <span className="text-rose-600 font-bold">এবং</span> <br />
            If দ্বারা বাক্য হ্যাঁ বোধক হলে if থেকে Subject পর্যন্ত উঠিয়ে by
            বসিয়ে পরের V-1 এর সাথে ing যুক্ত করলে Simple হবে। <br />
            যেমনঃ <br />
            Q. If you study well, you will pass. <br />
            = By studying well, you will pass. <br />
            <strong>অনুরুপভাবেঃ </strong> <br />
            উল্টা করলে Complex হবে। <br />
            যেমনঃ <br />
            Q. By studying well, you will pass. <br />
            = If you study well, you will pass. <br />
            Q. Without studying well, you will not pass.
            <br />= If you do not study, you will not pass.
          </div>
          <br />
          <div className="">
            <strong> Rule - (8): </strong> Though/although এর পরিবর্তে In spite
            of/ Despite of বসিয়ে পরের মূল V₁ এর সঙ্গে ing যুক্ত করলে Simple হবে।{" "}
            <br />
            যেমনঃ <br />
            Q. Though he is poor, he is honest. <br />
            = In spite of being poor, he is honest.
            <br />
            Q. Though he read well, he could not pass.
            <br />
            = In spite of reading well, he could not pass.
            <br />
            <span className="text-rose-600 font-bold">অনুরুপভাবে:-</span> <br />
            উল্টা করলে Complex হবে।
            <br />
            যেমনঃ
            <br />
            Q. In spite of being poor, he is honest.
            <br />
            = Though he is poor, he is honest.
            <br />
            Q. In spite of reading well, he could not pass.
            <br />= Though he read well, he could not pass.
          </div>
        </div>
      </div>

      {/* DEGREE */}
      <div className="mt-6 pt-6  text-gray-900">
        <div className="p-6 bg-gray-100">
          <h1 className="font-bold mb-4 text-green-500">Degree </h1>
          {/* Superlative to Positive */}
          <table className="table-auto w-full border-collapse border  border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">Rules</th>
                <th className="border border-gray-400 p-2">Examples</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr>
                <td
                  colSpan={2}
                  className="text-center border border-gray-400 p-2 md:text-center font-bold bg-gray-300"
                >
                  Superlative to Positive
                </td>
              </tr>

              <tr>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3 dark:text-gray-300">
                  সাধারণ নিয়মঃ <br />
                  <strong>(1). </strong> No other + Adj-এর
                  পরের অংশ + Verb + so/as + Adj-1 +
                  as + প্রদত্ত sentence এর Subject.
                </td>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Super:</strong> Hira is the best girl in our locality.
                  <br />
                  <strong>Postive:</strong> No other girl in our locality is as good
                  as Hira.
                </td>
              </tr>


              {/* Row 2 */}
              <tr>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>One of the এর নিয়মঃ- </strong>
                  <br />
                  <strong>(2). </strong>  Very few + Adjective-এর
                  পরের অংশ  + Verb + so/as + Adj-1 +
                  as + প্রদত্ত sentence এর Subject.
                </td>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Super:</strong> Habib is one of the cleverest boys.
                  <br />
                  <strong>Positive:</strong> Very few boys are so/as clever as
                  Habib.

                </td>
              </tr>

              <tr>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Note: </strong> উপরের: all other, most other, many other, few other, very
                  few... এর পর Noun/Pronoun-এর Plural form বসে। Superlative
                  Degree-এর পর of all/any বসলে তা উঠে যায়।
                </td>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Super:</strong> Romeo is the best of all boys.
                  <br />
                  <strong>Positive:</strong> No other boy is as good as Romeo.

                </td>
              </tr>

              {/* Comparative to Positive */}
              <tr>
                <td
                  colSpan={2}
                  className="border border-gray-400 p-1 md:p-3 text-center font-bold bg-gray-300"
                >
                  Comparative to Positive
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Than any other/all other এর নিয়মঃ</strong>
                  <br />
                  <strong>Rule: </strong> No other + any other/all other এর
                  পরের অংশ + Verb +
                  so/as + Adj-1 + as + প্রথম
                  Sentence-এর Subject।
                </td>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Comp:</strong> Boby is taller than any other girl in the
                  class.
                  <br />
                  <strong>Positive:</strong> No other girl in the class is as tall
                  as Boby.

                </td>
              </tr>
              <tr>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Than most other/than few other এর নিয়মঃ</strong>
                  <br />
                  <strong>Rule: </strong> Very few + than most other এর
                  পরের অংশ + Verb +
                  so/as + Adj-1 + as + প্রথম
                  Sentence-এর Subject।
                  <br />
                  <strong>Note: </strong> এখানে Helping Verb টি বহুবচন হয়।
                </td>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Comp:</strong> Boby is taller than most other girls in the
                  class.
                  <br />
                  <strong>Positive:</strong> Very few girls in the class are as tall
                  as Boby.
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Than এর নিয়মঃ </strong>
                  <br />
                  <strong>Rule: </strong> Than-এর
                  পরের অংশ + Verb + so/as +
                  Adj-1 + as + প্রথম Sentence-এর
                  Subject। <br />
                  <strong>Note: </strong> <strong>Note: </strong>প্রদত্ত বাক্যে Not না থাকলে Not নিতে হবে আর Not থাকলে বাদ দিতে হবে।
                </td>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Comp:</strong> Panna is taller than Hira.
                  <br />
                  <strong>Positive:</strong> Hira is not so/as tall as Panna.

                </td>
              </tr>



              {/* Row 6 */}
              <tr>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>No less/Not less... than এর নিয়মঃ</strong>
                  <br />
                  <strong>Rule: </strong> less than-এর
                  পরের অংশ + Verb + as/so + Adj-1 + as + than-যুক্ত Sentence এর subject.
                </td>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Comp:</strong> Sabrina is no less wise than Saguppta.
                  <br />
                  <strong>Positive:</strong> Sabrina is as wise as Saguppta.

                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="p-4 md:p-6 bg-gray-100 text-gray-900">
          <h1 className="text-xl font-bold mb-4 text-green-500">
            Superlative to Comparative
            &
            Positive to Comparative

          </h1>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-1 md:p-3">Rules</th>
                <th className="border border-gray-400 p-1 md:p-3">Examples</th>
              </tr>
            </thead>
            <tbody>
              {/* Superlative into Comparative */}
              <tr>
                <td
                  colSpan={2}
                  className="border border-gray-400 p-1 md:p-3 text-center font-bold bg-gray-300"
                >
                  Superlative into Comparative
                </td>
              </tr>

              {/* Row 1 */}
              <tr>
                <td className="border border-gray-400 p-1 md:p-3">
                  than any other এর নিয়মঃ <br />
                  <strong>Struct: </strong> Subject + Verb + adjective-এর-2 + than any other +
                  বাক্যের বাকি অংশ।
                </td>
                <td className="border border-gray-400 p-1 md:p-3">
                  <strong>Super:</strong> He is the wisest man in the village.
                  <br />
                  <strong>Comp:</strong> He is wiser than any other man in the
                  village.

                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>One of the থাকলে এর নিয়মঃ </strong> <br />
                  <strong>Struct: </strong> Subject + Verb + adjective-এর-2 + than any other +
                  বাক্যের বাকি অংশ।
                </td>
                <td colSpan={1} className="border border-gray-400 p-1 md:p-3">
                  <strong>Super:</strong> Hadiduzzaman is one of the best poets.
                  <br />
                  <strong>Comp:</strong> Hadiduzzaman is better than most other
                  poets.
                </td>
              </tr>

              {/* Positive into Comparative */}
              <tr>
                <td
                  colSpan={2}
                  className="border border-gray-400 p-1 md:p-3 text-center font-bold bg-gray-300"
                >
                  Positive into Comparative
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td className="border border-gray-400 p-1 md:p-3">
                  <strong>No other এর নিয়মঃ</strong> <br />
                  <ol className="list-decimal ml-4">
                    <li><strong>Rule: </strong> as/so...as এর
                      পরের অংশ + verb + adjective-2 + than any other + প্রদত্ত sentence এর Subject.</li>

                  </ol>
                </td>
                <td className="border border-gray-400 p-1 md:p-3">
                  <strong>Positive:</strong> No other tree on the mountain was
                  so high as it.
                  <br />
                  <strong>Comp:</strong> It was higher than any other tree on
                  the mountain.

                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td className="border border-gray-400 p-1 md:p-3">
                  <strong>Very few এর নিয়মঃ</strong> <br />
                  <strong>Rule: </strong>  as/so...as এর
                  পরের অংশ + verb (plural) + adjective-2 + than most other + প্রদত্ত sentence এর Subject.
                </td>
                <td className="border border-gray-400 p-1 md:p-3">
                  <strong>Positive:</strong> Very few subjects are so easy as
                  this.
                  <br />
                  <strong>Comp:</strong> This is easier than most other
                  subjects.
                </td>
              </tr>

              {/* Row 5 */}
              <tr>
                <td className="border border-gray-400 p-1 md:p-3">
                  <strong>শুধু As ...... as এর নিয়মঃ</strong> <br />
                  <strong>Rule: </strong> as/so...as এর
                  পরের অংশ + verb (plural) + adjective-2 + than  + প্রদত্ত sentence এর Subject. <br />
                  <strong>Note: </strong>প্রদত্ত বাক্যে not না থাকলে not নিতে হবে আর not থাকলে বাদ দিতে হবে।
                </td>
                <td className="border border-gray-400 p-1 md:p-3">
                  <strong>Positive:</strong> He is as wise as his brother.
                  <br />
                  <strong>Comp:</strong> His brother is not wiser than he.
                </td>
              </tr>


            </tbody>
          </table>
        </div>

        <div className="p-4 md:p-6 bg-gray-100 text-gray-900">
          <h1 className="text-xl font-bold mb-4 text-green-500">
            Comparative to Superlative & Positive to Superlative

          </h1>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-1 md:p-3">Rules</th>
                <th className="border border-gray-400 p-1 md:p-3">Examples</th>
              </tr>
            </thead>
            {/* Comparative into Superlative */}
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  className="border border-gray-400 p-2 text-center font-bold bg-gray-300"
                >
                  Comparative into Superlative
                </td>
              </tr>

              {/* Row 1 */}
              <tr>
                <td className="border border-gray-400 p-2">
                  Than any other/ than all other এর নিয়মঃ <br />
                  <strong>Rule: </strong> Subject + Verb + one of the + adjective-এর-3/ most + than any other ঊঠিয়ে
                  বাক্যের বাকি অংশ।
                </td>
                <td className="border border-gray-400 p-2">
                  <strong>Positive:</strong> He is better than any other boy in
                  the class.
                  <br />
                  <strong>Comp:</strong> He is the best boy in the class.
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="border border-gray-400 p-2">
                  Than most other/than few other নিয়ম: <br />

                  <strong>Rule: </strong> Subject + Verb + one of the + adjective-এর-3/ most + than most other ঊঠিয়ে
                  বাক্যের বাকি অংশ।
                </td>
                <td className="border border-gray-400 p-2">
                  <strong>Comp:</strong> Dhaka is bigger than most other cities
                  in South Asia.
                  <br />
                  <strong>Super:</strong> Dhaka is one of the biggest cities in
                  South Asia.
                </td>
              </tr>

              {/* Positive into Superlative */}
              <tr>
                <td
                  colSpan={2}
                  className="border border-gray-400 p-2 text-center font-bold bg-gray-300"
                >
                  Positive into Superlative
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td colSpan={1} className="border border-gray-400 p-2">
                  <strong> No other এর নিয়মঃ</strong>  <br />
                  <strong>Rule: </strong>as/so... as এর
                  পরের অংশ + verb + one of the + adj-3 + প্রদত্ত বাক্যের
                  subject।
                </td>
                <td colSpan={1} className="border border-gray-400 p-2">
                  <strong>Positive:</strong> No other girl in the class is as
                  tall as Sumi.
                  <br />
                  <strong>Super:</strong> Sumi is the tallest girl in the class.
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td className="border border-gray-400 p-2">

                  <strong>Very few এর নিয়মঃ </strong> <br />
                  <strong>Rule: </strong>as/so... as এর
                  পরের অংশ + Verb (Singular) + one of the + adj-3 + প্রদত্ত বাক্যের
                  subject।
                </td>
                <td className="border border-gray-400 p-2">
                  <strong>Positive:</strong> Very few boys in the locality are
                  as wise as Habib.
                  <br />
                  <strong>Super:</strong> Habib is one of the wisest boys in the
                  locality.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Excersise */}
      <div className="my-10 bg-gray-100 p-4 md:p-6">
        <h1 className="text-green-500">Exercise</h1>
        <h3 className="">Transform the Sentences into Simple or Compound:</h3>
        <div className="">
          1.Samira is sitting under a mango tree which is big. 2. She has a
          cousin whose name is Karim. 3. She is reading a book which is blue. 4.
          He is looking at some flowers which are beautiful. 5. Samira has a pen
          friend who is an Australian. 6. Lucy has sent Samira a picture which
          is full of tall buildings. 7. The cuckoo sings when it is the spring
          season. 8. It rains when it is the rainy season. 9. We went to the
          fair when it was evening. 10. He went to the library so that he could
          read. 11. She works hard so that she can prosper in life, 12. He
          waited till our arrival. 13. I helped a man who was blind. 14 They are
          fighters who are very brave. 15. I bought a pen which was costly. good
          health. 17. People build houses so that they may remain safe. 18. He
          sells milk which is pure 19. He found a bag which was dropped by a
          passer-by. 21. a man who is needy suffers from many wants. 22. He is a
          man who possesses good health. 23. I know where he was born New what
          his father's name was. 25. The girl shone in life because her indust.
          26. All love honesty. 27. The man suffered in life because he had
          idleness. 28. since he worked tha 3. he became rich. 29. He bought a
          pen which was costly. 30. I want a pen which is white. 31. I saw a man
          who was lame. 32. We saw a man who was sleeping on the street. 33. The
          man who is pious leads a peaceful life. 34. The man who is patriotic
          loves his country. 35. The man who is honest is free from greed. 36.
          Though he is brilliant, he cannot make good results. 37. Although he
          started late, he finished earlier. 38. The cock crows when it is.
          morning. 39. When he was four, he left home. 40. you do not speak
          English if we speak English well. 41. If we do not drink clean water,
          we can not keep fit. 42. If we eat a balanced diet, we can be healthy.
        </div>
        <br />
        <h3 className="">
          Transform the following Compound Sentences into Simple/ Complex.
        </h3>
        <p className="">
          1. She has a cousin and his name is Karim. 3. She is reading a book
          and it is blue. 3. He is looking at some flowers and they are
          beautiful. 4 Santira has a pen friend and she is an Australian. 5. He
          took the purse and ran away. 6. The sea water was very salty and they
          could not drink it. 7. Work hard and you will prosper. 8. The culprit
          ran away and escaped himself. 9. He is healthy but he doesn't work at
          all. 10. He had all the qualifications but he did not get a job. 11.
          He behaved rough but he was not punished. 12. The farmers worked day
          and night but they could not grow a good harvest. 13. Walk fast or you
          can not get the train. 14. I called him but he did not respond. 15. I
          forgot him and went outside the room. 16. It is Nie spring season and
          then the cuckoo sings. 17. We went to the fair and then it was evening
          18 He went to read in the library and so he went there. 19. She wants
          to prosper in fe and so the works hard. 20. He worked hard and so he
          became rich. 21. The girl studied more and so she stood first. 22. A
          man was sleeping on the street and we saw that. 23 He is brilliant but
          he cannot make good results. 24. He started late but he finished
          earlier. /25 4/19 morning and then cock crows. 26. He was four and
          then he left home. 27. Speak English or you can not speak English
          well. 28. We should drink clean water or we can not keep fit.
        </p>
        <br />
        <h3 className="">Turn the sentences into Superlative/Positive:</h3>
        <p className="">
          1. Beef was cheaper than any other dish on the menu. 2. Iron is more
          useful than any other metal. 3. He is nobler than any other person. 4.
          She was better than any other housewife. 5. "Hamlet" is more popular
          than most other dramas. 6. Akbar was greater than all other kings of
          India. 7. Mr. Zaman is wiser than any other man in the village. 8.
          Chittagong is bigger than any other sea part in Bangladesh. 9. It
          burns prettier than any other wood. 10. He is better than any other
          boy I have ever found. 11. "Arabian Nights" is better than most other
          story books. 12. He was cleverer than any other person in the company.
          13. Rubel ! younger than all other boys in the class. 14. She is worse
          than any other girl.
        </p>
        <br />
        <h3 className="">Turn the sentences into positive:</h3>
        <p className="">
          1. A lion is not braver than he. 2. He was not less wise than they. 3.
          You are older than I. 4 Prevention is better than cure. 5. A train
          runs faster than a bus. 6. Her teeth were brighter than a string of
          pearls. 7. She is less ugly than you said. 8. Imran Khan is greater
          than mos other cricketers. 9. He is not less intelligent than any
          other boy. 10. Her face was not les radiant than the full moon. 11. He
          was cleverer than any other person in the company. Iron is more useful
          than any other metal. 13. Tomatoes are cheaper than oranges. I Bhutan
          is smaller than most other countries in the world.
        </p>
        <br />
        <h3 className="">Turn the Sentences into comparative/Superlative:</h3>
        <p className="">
          1. No other food on the menu was so cheap as beef. 2. Very few metals
          are so precious as gold. 3. A bird can not fly as fast as a train. 4.
          Very few hotels are as fashionable as Sheraton. 5. Cure is not so good
          as prevention. 6. Very few boys are as good as Hasan. 7. No other
          story book is so popular as the Arabian Nights. 8. No other wood burns
          so pretty as the apple log. 9. No other city in Bangladesh is so big
          as phaka. 10. No other man in the village was so old as he. 11. You
          are not as tall as he. 12. No other girl in the class is so beautiful
          as she. 13. They were not as strong as we. 14. Very few bays in the
          class are so clever as you.
        </p>
        <br />
        <h3 className=""> Turn the sentences into Comparative/Positive:</h3>
        <p className="">
          {" "}
          1. She was the best house wife. 2. He is the best boy 3 tron is the
          most useful of all metals. 4. It burns the prettiest of any wood. 5.
          He is the noblest person. 6. Dhaka is the largest city in Bangladesh.
          7. This is one of the greatest pictures of the world.8. Chittagong is
          the biggest port in Bangladesh. 9. He is one of the wisest men in the
          village. 10. Milk is the most nutritious of all foods. 11. Bangladesh
          is one of the smallest countries in the world. 12. Swimming is the
          best exercise. 13. Everest is the highest of all peaks in the world.
          14. This is one of the most beautiful pictures in the exhibition, 15.
          He was the most humorous of all men in the company. 16. Akbar was one
          of the greatest kings of this sub- continent. 17. Australia is the
          largest of all islands in the world.
        </p>
        <br />
        <h3 className="">
          Transform the sentences into superlative/ Comperative
        </h3>
        <p className="">
          1. No other boy in the orphanage is so good as Jamal. 2. No other girl
          in the class is so fair as Ruma. 3. Very few restaurants are as
          expensive as Sonargaon. 4. No other city in Bangladesh is so big as
          Dhaka. 5. Very few pictures in the world are as great as this. 6. Very
          few metals are so precious as gold 7. Very low animals are as
          ferocious as a lion. 8. No other mosque is so large as this. 9. No
          other dramatists so great as Shakespeare. 10. No other woman was as
          clever as the lady guest. N. No other animal is so useful as the cow.
          12. No other food is so nutritious as milk. 13. Very few players in
          the team are as good as he.
        </p>
        <br />
        <h3 className="">
          Transform the following sentences into Interrogative
        </h3>
        <p className="">
          1. Sonargaon is a restaurant. 2. He liked the late spring. 6. She
          likes white gloves. 4. Prevention is better than cure. 5. Addiction to
          drinking is dangerous. 6. I have had my revenge at last. 7. They could
          not drink salty sea water. 8. They took a mighty pride in their
          possessions. 9. The smell of the melted butter tickled my Hasirlis 10.
          The flavour of the food becomes monotonous. 11. I shall never forget
          your advice. 12. I never went there. 13. Their glory can never fade.
          14. He is not a 16. He was not a fool. 17. He is a great fool. 15 Hes
          not present in the meeting. great scholar. 18. He went there of the
          own accord. 19. 1 have nothing to say. 20. There was nothing to do bat
          flop down 21 There is nothing wrong with me. 22. Everybody hankers
          after happiness. 23. Everybody loves a patriot. 24. Everybody fears
          death. 25. Everyone hates a criminal. 26. Nobody trusts a llar. 27. No
          one can depend on an unreliable man. 28. No one hits accurately
          everyone. 29. Nobody could ever count my love for you. 30. None has
          ever seen suchra ne sight
        </p>
        <br />
        <h3 className="">
          TRANSFORM THE FOLLOWING SENTENCES INTO AFFIRMATIVE:
        </h3>
        <p className="">
          1. None but Allah can help us. 2. None but the fool will say so 3.
          Never tell a lie. 4. He was never late. 5. You can not help going
          there. 6. He was not a dishonest boy. 7. I did not find many people
          there. 8. No sooner had I reached the college than the bell rang. 9.
          There is no mother but loves her child. 10. No one will any his
          courage. 11. The boy was not unlike his father 12 All can not but
          submit to destiny. foreign tour. 14. 1 shall never be ungrateful to
          you There is nobody but likes to go on a He 19 not dishonoured by
          anybody: 16. No sooner had he come than the meeting started. 17. We
          did not find the road bad. 18. A good boy never neglects his lesson.
          19. There rase without disagreed with him. 21. 1 can not but shed
          tears at the sight. a thorn. 20. I never 22. This did not please me.
          23. The old man was not kind. 24. He was not solvent 25. There is no
          cloud without a silver lining.
        </p>
        <br />
        <h3 className="">Transform the following sentences into assertive:</h3>

        <p className="">
          1. How sweetly the cuckoo sings! 2. What a nice flower the rose is! 3.
          What a big river the Padma is! 4. What a fool you are l 5. How
          talkative she was! 6. How pretty the girl is! 7. What a fine flower it
          is! 8. How exciting the first day in Cox's Bazar ts! 9. What a lovely
          place it is! 10. How beautiful the youngest sister wast 11. What a
          beautiful bird it is! 12. How fortunate the porter was ! 13. How time
          does fly! 14. How deep her love for her husband was! 15. What
          wonderful scenery it ist I could be a child again! 17. Had I been a
          merchant! 18. If I were a millionaire 1 If I were a philosopher like
          Socrates. 20. "Had I possessed a lot of wealth! 21. flow charining is
          the first meal in a strange town! 22. How charming still is Italy! 23,
          Nurrall we have won the match. 24. Hurrah, we are victorious. 25.
          Alas! I am undone. 26. Would that we could enter the house?
        </p>

        <br />
        <h3 className="">Transform the following sentences into negative:</h3>

        <p className="">
          {" "}
          1. The old man was alone alive. 2. Only the graduates should apply. 3.
          Only the brave deserve the fair. Only the moon was visible. 5. He
          lives alone in the house. Man must submit to destiny. 7. You must obey
          your teachers. 8. All men must dic. 9. As soon as the teacher entered
          the classroom, the students stood up. 10. As soon as he saw me, he ran
          away.. Every rose has thorns, 12. Every map hates a liar. 13.
          Everybody believes in his honesty. 14. Every mother loves her child.
          4. Everyone loves a truthful boy. 16. I shall always remember youThe
          man was old. 18 The man is poor. 19 Man is mortal. 20. missed the
          tram. 2. I was doubtful of his honesty. 23. I forgot his name. 24. He
          is present in the meeting. 25. Travelling is always pleasant. 26. The
          men were pleased to see. 27. They were right to think so. 28. The boy
          speaks English. 29. He is my friend. 30. Dhaka is an old city. 31. We
          should always tell the truth. 32. He is the best boy in the class. 33.
          The man is as ferocious as a lion. 34. He was too honest to take the
          money. 35. He is as dull as an ass. 36. She was too poor to buy a gift
          for her husband.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Transformation;
