const Transformation = () => {
  return (
    <div className="h-full md:w-[85%] mx-auto px-3">
      <div className="my-10">
        <h1 className="text-center md:text-start">Transformation</h1>
      </div>
      <div className="">
        Transformation of Sentences: <br />
        Sentences এর নিম্নলিখিত রূপান্তরকে Transformation-এর অন্তর্ভুক্ত করা হয়।
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
        <h3 className="text-center md:text-start">
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
            <td>There is</td>
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
        </table>
      </div>
      {/* antonyms */}
      <div className="">
        কিছু বিপরীতার্থক শব্দের নমুনা:
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
      <div className="mt-5">
        <h3 className="">Assertive থেকে Interrogative-এ রূপান্তর</h3>
        1. বাক্যের মধ্যে Auxiliary verb থাকলে Auxiliary verb বাক্যের শুরুতে
        বসবে। বাক্যটি Affirmative হলে তা Negative হবে, আর Negative এ থাকলে তা
        Affirmative হবে। (যেমন: is থাকলে Isn't হবে এবং is not বা isn't থাকলে
        'ls' হবে। উদাহরণ:
        <br />
        i. Aff: Kamal was a good boy. <br />
        Inter: Wasn't Kamal a good boy?
        <br />
        ii . Aff: They are not playing.
        <br />
        Inter: Are they playing?
        <br />
        <br />
        2. বাক্যের মধ্যে Auxiliary verb না থাকলে, বাক্যের শুরুতে
        Don't/Doesn't/Didn't বসিয়ে Interrogative করা হয়। Auxiliary verb বলতে
        সাধারণত 'to be', 'to have', modal verb গুলোকে বোঝায়। আর Assertive
        sentence-টি Negative হলে প্রশ্নবোধক Sentence টিতে do/does/did হয়।
        <br />
        উদাহরণ:
        <br />
        Ass: Liza sings very well.
        <br />
        Inter: Doesn't Liza sing very well?
        <br />
        Ass: Liza sang very well.
        <br />
        Inter: Didn't Liza sing well?
        <br />
        <br />
        3. Everybody. Everyone, All থাকলে এদের পরিবর্তে আয় অনুসারে Who does
        not/did not বসিয়ে Interrogative করতে হয়।
        <br />
        উদাহরণ:
        <br />
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
        <br />
        <br />
        <h3 className="">
          {" "}
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
        <br />
        <br />
        <br />
        <h3 className="">Assertive থেকে Exclamatory -তে রূপান্তর-</h3>
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
        <br />
      </div>

      {/* SIMPLE COMPOUND COMPLEX VISE-VERSA */}
      <div className="mt-10">
        <h3>Complex to Simple & Simple to Complex:</h3>
        Complex to Simple & Simple to complex:
        <br />
        <br />
        Rule: (i) Since/ as/ when / as soon as দ্বারা শুরু বা যুক্ত বাক্যের
        Since/ as/ when + subject উঠিয়ে মূল V₁ এর সঙ্গে ing যুক্ত করলে Simple
        হবে।
        <br />
        যেমনঃ
        <br />
        Q. Since I forget, I want out
        <br />
        = Forgetting him, I want out
        <br />
        <br />
        <br />
        অনুরুপঃ ing যুক্ত বাক্যের শুরুতে As + Subject বসিয়ে + এবং V টিকে পরের
        বাক্যের tense অনুসারে বসালে Complex হবে। যেমনঃ
        <br />
        Q. Closing the door, I called her.
        <br />
        = As I closed the door, I called her.
        <br />
        <br />
        <br />
        Rule:(2) কিন্তু As/Since/when বাক্যের am/is/are/was/were এর পরিবর্তে
        being এবং have/has/had এর পরিবর্তে having বসালে Simple হবে। যেমনঃ
        <br />
        Q. As the water was salty, We could not drink. = The water being salty,
        We could not drink.
        <br />
        <br />
        অনুরুপভাবেঃ উল্লোটা করলেই Complex হবে অর্থাৎ শুরুতে As এবং Being স্থলে
        am/ is/ are বা having এর স্থলে have/has/had বসে। যেমনঃ
        <br />
        Q. The water being salty, We could not drink.
        <br />
        = As the water was salty, We could not drink.
        <br />
        <br />
        <br />
        Rule: কিন্তু When দ্বারা বাক্যে দিনের কোন বেলাকে বুঝালে When + Sub + V
        উঠিয়ে At বসে , বয়স বুঝালে At the age of এবং ঋতু বুঝালে In বসে । যেমনঃ{" "}
        <br />
        Q. When it is spring, the cuckoo sings,
        <br />
        = In spring the cuckoo sings.
        <br />
        <br />
        <br />
        অনুরূপঃ at / In / at the age of উঠিয়ে When + it/ sub + V বসালে Complex
        হবে।
        <br />
        যেমনঃ <br />
        Q. At the age of four, he left home.
        <br />
        = When he was four, he left home.
        <br />
        <br />
        <br />
        Rule:(3) That/what দ্বারা দুটি বাক্য যুক্ত হলে That/what helping verb
        (যদি থাকে) উঠিয়ে পরের মুল V₁ এর সঙ্গে ing যুক্ত করতে হবে।
        <br />
        যেমনঃ <br />
        Q. I saw a man who was walking.
        <br />
        = I saw a man walking.
        <br />
        অনুরুপভাবেঃ উল্টাটে করলে Complex হবে।
        <br />
        যেমনঃ
        <br />
        Q. I lived in a house belonging to me.
        <br />
        =I lived in a house which belonged to me.
        <br />
        অর্থাৎ ing যুক্ত verb এর পূর্বে বস্তুবাচক শব্দ থাকলে That/Which/What এবং
        ব্যক্তি থাকলে Who বসিয়ে ing যুক্ত verb টিকে Tense অনুসারে সাজাতে হবে।
        <br />
        <br />
        Rule: (4) So......... that দ্বারা যুক্ত বাক্যে So এর স্থলে too এবং
        That-not পর্যন্ত উঠিয়ে To বসালে simple হবে।
        <br />
        যেমনঃ
        <br />
        Q. He is so weak that he cannot talk.
        <br />
        = He is too weak to talk.
        <br />
        <br />
        অনুরুপভাবে: উল্টাটা করলে Complex হবে।
        <br />
        যেমনঃ
        <br />
        Q. He walks too slowly to reach in time.
        <br />
        = He walks so slowly that he cannot reach there in time.
        <br />
        <br />
        <br />
        Rule:(5) so that দ্বারা যুক্ত বাক্যের so থেকে Can/Could/may/might
        পর্যন্ত উঠিয়ে উক্ত স্থানে to বসালে Simple হবে।
        <br />
        যেমনঃ
        <br />
        Q. We eat so that we may live.
        <br />
        = We eat to live,
        <br />
        অনুরুপভাবে: উল্টা করলে Complex হবে। অর্থাৎ to স্থলে so that + sub +
        may/might/can/could বসালে Complex হবে।
        <br />
        যেমনঃ
        <br />
        Q. We eat to live.
        <br />
        = We eat so that we may live.
        <br />
        <br />
        Rule:(6) If দ্বারা শুরু বাক্যে Negative হলে without এবং If দ্বারা বাক্য
        হ্যাঁ বোধক হলে by বসিয়ে পরের V-1 এর সাথে ing যুক্ত করলে Simple হবে।
        যেমনঃ
        <br />
        Q. If you study well, you will pass.
        <br />
        = By studying well, you will pass.
        <br />
        Q. If you do not study, you will not pass.
        <br />
        = Without studying well, you will not pass
        <br />.
        <br />
        <br />
        অনুরুপভাবে উল্টা করলে Complex হবে।
        <br />
        যেমনঃ
        <br />
        Q. By studying well, you will pass.
        <br />
        = If you study well, you will pass.
        <br />
        Q. Without studying well, you will not pass.
        <br />
        = If you do not study, you will not pass.
        <br />
        <br />
        Rule:(7) Though/although এর পরিবর্তে In spite of/ Despite of বসিয়ে পরের
        মূল V₁ এর সঙ্গে ing যুক্ত করলে Simple হবে।
        <br />
        যেমনঃ
        <br />
        Q. Though he is poor, he is honest.
        <br />
        = In spite of being poor, he is honest.
        <br />
        Q. Though he read well, he could not pass.
        <br />
        = In spite of reading well, he could not pass.
        <br />
        <br />
        অনুরুপভাবে উল্টা করলে Complex হবে।
        <br />
        যেমনঃ
        <br />
        Q. In spite of being poor, he is honest.
        <br />
        = Though he is poor, he is honest.
        <br />
        Q. In spite of reading well, he could not pass.
        <br />
        = Though he read well, he could not pass.
        <br />
        <br />
        <h3>Compound to simple & Simple to Compound:</h3>
        Rule:(i) And দ্বারা যুক্ত বাক্যের And উঠিয়ে প্রথম বাক্যাংশের Subject
        উঠিয়ে মূল V₁ এর সঙ্গে ing যুক্ত করতে হবে। যদি প্রথম বাক্যে be verb থাকে
        তবে এর পরিবর্তে being এবং have verb থাকলে having বসালে Simple হবে।
        <br />
        * He closed the window and went out,
        <br />
        Closing the window, he went out.
        <br />
        <br />
        N.B.দুটি বাক্যের Subject যদি ভিন্ন হয় তবে Subject উঠবেনা।
        <br />
        যেমনঃ
        <br />
        Q. The tea was hot and we could not drink.
        <br />
        = The tea being hot, we could not drink.
        <br />
        অনুরুপভাবেঃ ing/being/having দ্বারা শুরু বাক্যের মাঝখানে and বসিয়ে sub +
        V কে পরের বাক্য অনুসারে সাজাতে হবে।
        <br />
        যেমনঃ
        <br />
        Q. The sun having set, they left home.
        <br />
        = The sun had set and they left home.
        <br />
        <br />
        কিন্তু And দ্বারা যুক্ত বাক্যের শুরুতে sub না থাকলে And উঠিয়ে বাক্যের
        শুরুতে by বসাতে হবে এবং by এর পরের V₁ এর সঙ্গে ing যুক্ত করাতে হবে।
        <br />
        যেমনঃ
        <br />
        Q. Work hard and you will succeed.
        <br />
        =By working hard, you will succeed.
        <br />
        <br />
        অনুরুপভাবে উল্টোটা করলে Compound হবে।
        <br />
        যেমনঃ
        <br />
        Q. By working hard, you will succeed.
        <br />
        = Work hard and you will succeed.
        <br />
        <br />
        <br />
        Rule: (2) But/yet দ্বারা যুক্ত বাক্যের শুরুতে In spite of/ Despite of
        বসিয়ে পরের মূল V1 এর সঙ্গে ing যুক্ত করলে Simple হবে। কিন্তু প্রথম
        বাক্যে verb to be থাকলে এর পরিবর্তে being এবং have verb এর পরিবর্তে
        having বসাতে হবে।
        <br />
        যেমনঃ
        <br />
        Q. He is rich but he is simple minded.
        <br />
        = In spite of being rich, he is simple minded.
        <br />
        অনুরুপভাবেঃ In spite of/ Despite of উঠিয়ে পরের Possessive থাকলে
        Subjective বসাতে হবে এবং ing যুক্ত Verb কে পরের বাক্যাংশ অনুসারে verb
        টিকে বসাতে হবে। কিন্তু being থাকলে be verb এবং having থাকলে have verb
        বসালে Compound হবে।
        <br />
        যেমনঃ
        <br />
        Q. In spite of being rich, he is simple minded.
        <br />
        = He is rich but he is simple minded.
        <br />
        <br />
        Rule:(3) Or দ্বারা যুক্ত বাক্যের or উঠিয়ে বাক্যের শুরুতে without / by
        বসিয়ে পরের মূল V₁ এর সঙ্গে ing যুক্ত করলে Compound হবে।
        <br />
        যেমনঃ
        <br />
        Q. Work hard or you will not shine.
        <br />
        = Without working hard, it will not shine.
        <br />
        <br />
        N.B. পরের বাক্যাংশটি Negative হলে without এবং হ্যাঁবোধক হলে by বসাতে
        হবে।
        <br />
        <br />
        অনুরুপভাবেঃ by / without উঠিয়ে V₁ করতে হবে এবং মাঝখানে comma উঠিয়ে or
        বসাতে হবে।
        <br />
        যেমনঃ
        <br />
        Q. Without working hard, it will not shine.
        <br />
        = Work hard or you will not shine.
        <br />
        <br />
        <h3 className="">Complex to Compound & Compound to complex:</h3>
        <br />
        Rule:(1) Since/as/ when / as soon as দ্বারা শুরু / যুক্ত বাক্যের মাঝখানে
        And বসিয়ে Since /as/ when উঠিয়ে দিলে Compound হবে।
        <br />
        যেমনঃ
        <br />
        Q. When I was eight, I was there.
        <br />
        = I was eight and I was there.
        <br />
        <br />
        অনুরুপভাবেঃ And উঠিয়ে শুরুতে As বসালে Complex হবে।
        <br />
        যেমনঃ
        <br />
        Rule:(2) Though/ Although উঠিয়ে মাঝখানে but বসালে Compound হবে। যেমনঃ
        <br />
        Q. Although he was sick, he was walking.
        <br />
        He was sick but he was walking.
        <br />
        অনুরুপভাবেঃ মাঝখানে থেকে but / yet উঠিয়ে শুরুতে Though / Although বসালে
        Complex হবে।
        <br />
        যেমনঃ
        <br />
        Rule:(3) If দ্বারা শুরু বাক্য না বোধক হলে মূল verb এর পূর্ব পর্যন্ত
        উঠিয়ে মাঝখানে or বসাতে হবে। if দ্বারা শুরু বাক্য হ্যাঁবোধক হলে মাঝখানে
        and বসালে Compound হবে।
        <br />
        যেমনঃ
        <br />
        Q. If you work hard, you will pass.
        <br />
        = Work hard and you will pass.
        <br />
        Q. If you do not do, you will die.
        <br />
        = Do or you will die.
        <br />
        <br />
        অনুরুপভাবেঃ And দ্বারা যুক্ত বাক্যের শুরুতে subject না থাকলে If you
        বসিয়ে And উঠালে Complex হবে। আবার or উঠিয়ে বাক্যের শুরুতে If + sub + do
        not বসালে Complex হবে।
        <br />
        যেমনঃ
        <br />
        Q. Work hard and you will pass.
        <br />
        = If you work hard, you will pass.
        <br />
        Q. Do or you will die.
        <br />
        = If you do not do it, you will die.
        <br />
      </div>

      {/* DEGREE */}

      <div className="mt-6 pt-6 bg-gray-100 text-gray-900">
        <h1 className="text-xl font-bold mb-4">Degree Rules and Examples</h1>
        <table className="table-auto w-full border-collapse border border-gray-400">
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
                className="border border-gray-400 p-2 md:text-center font-bold bg-gray-300"
              >
                Superlative to Positive
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 p-2">
                <strong>1. Structure: </strong> No other + Superlative Degree-এর
                পরের অংশ + Verb + so/as + Superlative degree er Positive form +
                as + প্রদত্ত sentence এর Subject.
              </td>
              <td className="border border-gray-400 p-2">
                <strong>Super:</strong> Hira is the best girl in our locality.
                <br />
                <strong>Super:</strong> No other girl in our locality is as good
                as Hira.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">
                Note:উপরের: all other, most other, many other, few other, very
                few... এর পর Noun/Pronoun-এর Plural form বসে। Superlative
                Degree-এর পর of all/any বসলে তা উঠে যায়।
              </td>
              <td className="border border-gray-400 p-2">
                <strong>Super:</strong> Romeo is the best of all boys.
                <br />
                <strong>Super:</strong> No other boy is as good as Romeo.
                <br />
                <strong>Super:</strong> It burns the prettiest of any wood.
                <br />
                <strong>Positive:</strong> No other wood burns as pretty as it.
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="border border-gray-400 p-2">
                2. One of the যুক্ত Superlative Degree-এর Positive Degree-তে
                প্রকাশ করার নিয়মঃ-
                <br />
                Structure: Very few + Superlative degree-এর plural form +
                verb-এর plural form + so/as + Positive form + as + প্রথম
                Sentence-এর Subject.
              </td>
              <td className="border border-gray-400 p-2">
                <strong>Super:</strong> Habib is one of the cleverest boys.
                <br />
                <strong>Positive:</strong> Very few boys are so/as clever as
                Habib.
                <br />
                <strong>Super:</strong> Murad was one of the most industrious
                young men.
                <br />
                <strong>Positive:</strong> Very few young men were so/as
                industrious as Murad.
              </td>
            </tr>

            {/* Comparative to Positive */}
            <tr>
              <td
                colSpan={2}
                className="border border-gray-400 p-2 text-center font-bold bg-gray-300"
              >
                Comparative to Positive
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td className="border border-gray-400 p-2">
                Than any other/all other যুগ Comparative Degree-কে Positive
                Degree-তে রূপান্তর করা হয়।
                <br />
                Structure: No other + any other/all other + plural + Verb +
                so/as + Comparative Degree-এর Positive form + as + প্রথম
                Sentence-এর Subject।
              </td>
              <td className="border border-gray-400 p-2">
                <strong>Comp:</strong> Boby is taller than any other girl in the
                class.
                <br />
                <strong>Positive:</strong> No other girl in the class is as tall
                as Boby.
                <br />
                <strong>Comp:</strong> Tanvir is more intelligent than any other
                boy.
                <br />
                <strong>Positive:</strong> No other boy is so/as intelligent as
                Tanvir.
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td className="border border-gray-400 p-2">
                Than most other/than few other যুগ Comparative Degree-কে
                Positive Degree-তে রূপান্তর করা হয়।
                <br />
                Structure: Than-যুক্ত Comparative Degree-কে Positive Degree-তে
                রূপান্তর করা হয়: Than-এর পরে বসা + Verb + না + so/as +
                Comparative Degree-এর Positive form + as + প্রথম Sentence-এর
                Subject।
              </td>
              <td className="border border-gray-400 p-2">
                <strong>Comp:</strong> Panna is taller than Hira.
                <br />
                <strong>Positive:</strong> Hira is not so/as tall as Panna.
                <br />
                <strong>Comp:</strong> Shawn is not cleverer than Romeo.
                <br />
                <strong>Positive:</strong> Romeo is so/as clever as Shawn.
              </td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td className="border border-gray-400 p-2">
                Than most other/than few other যুগ Comparative Degree-কে
                Positive Degree-তে রূপান্তর করা হয়।
                <br />
                Structure: Very few + most other/ few other-এর পরে বসা + verb-এর
                plural form + so + as + Comparative-এর Positive form + as +
                প্রথম Sentence-এর Subject।
              </td>
              <td className="border border-gray-400 p-2">
                <strong>Comp:</strong> Javed is stronger than most other boys.
                <br />
                <strong>Positive:</strong> Few boys are as strong as Javed.
                <br />
                <strong>Comp:</strong> Romeo is more handsome than few other
                students.
                <br />
                <strong>Positive:</strong> Very few students are so/as handsome
                as Tito.
              </td>
            </tr>

            {/* Row 6 */}
            <tr>
              <td className="border border-gray-400 p-2">
                No less/Not less... than যুগ Comparative Degree-কে Positive
                Degree-তে রূপান্তর করা হয়।
                <br />
                Structure: No less বা Not less-এর পরে বসা + Adjective-এর
                Positive form-এর পরে বসা + than-যুক্ত Sentence এর subject.
              </td>
              <td className="border border-gray-400 p-2">
                <strong>Comp:</strong> Sabrina is no less wise than Saguppta.
                <br />
                <strong>Positive:</strong> Sabrina is as wise as Saguppta.
                <br />
                <strong>Comp:</strong> Sachden was no less active than Asad.
                <br />
                <strong>Positive:</strong> He is not so/as strong as his friend.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="p-6 bg-gray-100 text-gray-900">
          <h1 className="text-xl font-bold mb-4">
            Superlative to Comparative and Positive to Comparative
            Transformation
          </h1>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">Rules</th>
                <th className="border border-gray-400 p-2">Examples</th>
              </tr>
            </thead>
            <tbody>
              {/* Superlative into Comparative */}
              <tr>
                <td
                  colSpan={2}
                  className="border border-gray-400 p-2 text-center font-bold bg-gray-300"
                >
                  Superlative into Comparative
                </td>
              </tr>

              {/* Row 1 */}
              <tr>
                <td className="border border-gray-400 p-2">
                  Superlative Degree-কে Comparative Degree-তে রূপান্তর করার
                  নিয়ম: <br />
                  Structure: Subject + Verb + adjective-এর + than any other/
                  অন্য বাক্য।
                </td>
                <td className="border border-gray-400 p-2">
                  <strong>Super:</strong> He is the wisest man in the village.
                  <br />
                  <strong>Comp:</strong> He is wiser than any other man in the
                  village.
                  <br />
                  <strong>Super:</strong> Asad is the wisest of any boy.
                  <br />
                  <strong>Comp:</strong> Asad is wiser than any other boy.
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="border border-gray-400 p-2">
                  One of the যুগ Superlative Degree-কে Comparative Degree-তে
                  রূপান্তর করা হয়।
                </td>
                <td className="border border-gray-400 p-2">
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
                  className="border border-gray-400 p-2 text-center font-bold bg-gray-300"
                >
                  Positive into Comparative
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td className="border border-gray-400 p-2">
                  No other যুগ Positive Degree-কে Comparative Degree-তে রূপান্তর
                  করা হয়। <br />
                  Structure:
                  <ol className="list-decimal ml-4">
                    <li>প্রথম Sentence-এর Subject টিকে Comparative-এ বসা।</li>
                    <li>
                      Verb-এর পরে Positive Degree-এর Comparative form বসা।
                    </li>
                    <li>No other-এর পরে Verb-এর বাক্য সাজানো।</li>
                  </ol>
                </td>
                <td className="border border-gray-400 p-2">
                  <strong>Positive:</strong> No other tree on the mountain was
                  so high as it.
                  <br />
                  <strong>Comp:</strong> It was higher than any other tree on
                  the mountain.
                  <br />
                  <strong>Positive:</strong> No other boy in the class is so
                  good as Rashed.
                  <br />
                  <strong>Comp:</strong> Rashed is better than any other boy in
                  the class.
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td className="border border-gray-400 p-2">
                  Very few যুগ Positive Degree-কে Comparative Degree-তে রূপান্তর
                  করা হয়। <br />
                  Structure: Very few + subject + verb plural + adjective-এর
                  than any other subject.
                </td>
                <td className="border border-gray-400 p-2">
                  <strong>Positive:</strong> Very few subjects are so easy as
                  this.
                  <br />
                  <strong>Comp:</strong> This is easier than most other
                  subjects.
                </td>
              </tr>

              {/* Row 5 */}
              <tr>
                <td className="border border-gray-400 p-2">
                  As ...... as যুগ Positive Degree-কে Comparative Degree-তে
                  রূপান্তর।
                </td>
                <td className="border border-gray-400 p-2">
                  <strong>Positive:</strong> He is as wise as his brother.
                  <br />
                  <strong>Comp:</strong> His brother is not wiser than he.
                </td>
              </tr>

              {/* More examples on Positive to Comparative */}
              <tr>
                <td
                  colSpan={2}
                  className="border border-gray-400 p-2 text-center font-bold bg-gray-300"
                >
                  More Examples on Positive to Comparative
                </td>
              </tr>

              {/* Row 6 */}
              <tr>
                <td className="border border-gray-400 p-2">
                  a. He is as ferocious as a tiger.
                  <br />
                  b. He is as intimate to me, as to you.
                  <br />
                  c. There is no mystery so great as misery.
                  <br />
                  d. He is at least as competent as any other man.
                </td>
                <td className="border border-gray-400 p-2">
                  a. A tiger is not more ferocious than he.
                  <br />
                  b. He is not more intimate to you, than to me.
                  <br />
                  c. Misery is greater than any other mystery./ Misery is the
                  greatest of all my mysteries.
                  <br />
                  d. He is not less competent than any other man./ No other man
                  is more competent than he.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-gray-100 text-gray-900">
          <h1 className="text-xl font-bold mb-4">
            Comparative into Superlative and Positive into Superlative
            Transformation
          </h1>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">Rules</th>
                <th className="border border-gray-400 p-2">Examples</th>
              </tr>
            </thead>
            <tbody>
              {/* Comparative into Superlative */}
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
                  সাধারণ নিয়মটি নিয়ম: <br />
                  Structure: Subject + verb + adjective + other-এর পরবর্তী বসা।
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
                  Than most other/than few other যুগ Comparative Degree-কে
                  Superlative Degree-তে রূপান্তর করার নিয়ম: <br />
                  (i) প্রথম Sentence-এর Subject + Verb বসা। <br />
                  (ii) Comparative Degree-এর Superlative form বসা। <br />
                  (iii) most other/few other-এর বাক্য পূর্ণ করা।
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
                <td className="border border-gray-400 p-2">
                  No other যুগ Positive Degree-কে Superlative Degree-তে রূপান্তর
                  করা হয়: <br />
                  Structure: subject + verb + the + adj + বাক্যের subject.
                </td>
                <td className="border border-gray-400 p-2">
                  <strong>Positive:</strong> No other girl in the class is as
                  tall as Sumi.
                  <br />
                  <strong>Super:</strong> Sumi is the tallest girl in the class.
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td className="border border-gray-400 p-2">
                  Very few যুগ Positive Degree-কে Superlative Degree-তে রূপান্তর
                  করা হয়: <br />
                  Structure: লেগে subject + verb + one of the + adj + বাক্যের
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
    </div>
  );
};

export default Transformation;
