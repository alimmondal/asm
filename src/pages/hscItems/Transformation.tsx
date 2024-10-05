const Transformation = () => {
  return (
    <div className="h-full md:w-[85%] mx-auto px-3">
      <div className="my-10">
        <h1 className="text-center md:text-start">Transformation</h1>
      </div>

      {/* AFFIRMATIVE-NEGATIVE */}
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

      {/* COMPLEX TO SIMPLE VISE-VERSA */}
      <div className="mt-10">
        <h3>Complex to Simple & Simple to Complex:</h3>

        <p>
          (i) Since/as/when as/soon as দ্বারা শুরু/যুক্ত বাক্যের Simple sub:
          Since/as/when + sub উঠিয়ে মূল V₁ এর সঙ্গে ing যুক্ত করলে Simple হবে।
        </p>

        <p>Since I forget, I want out</p>
        <p>Forgetting him, I want out</p>

        <p>
          অনুরূপঃ ing যুক্ত বাক্যের শুরুতে As+Sub+ এবং V পরের বাক্য অনুষঙ্গ করলে
          Complex হবে।
        </p>

        <p>Closing the door, I called her.</p>
        <p>As I closed the door, I called her.</p>

        <p>
          (ii) কিন্ত As/Since/when বাক্যরে am/is/are/was/were এর পরিবর্তে being
          এবং have/has/had এর পরিবর্তে having বসালে Simple হবে।
        </p>
        <p>As the water was salty, we could not drink.</p>
        <p>The water being salty, we could not drink.</p>

        <p>
          অপূর্ণক্রিয়ার উক্তিতে করলে Complex হবে অংশে বসাতে As এবং Being বসলে
          am/is/are না having এবং এর স্থলে have/has/had বসবে।
        </p>
        <p>
          কিন্ত When দ্বারা বাক্যের দিনের কোন ঘটনা বুঝালে When+ Sub + V উঠিয়ে
          At, বয়স বুঝালে At the age of এবং ঘটনা বুঝালে In বসে।
        </p>
        <p>When it is spring, the cuckoo sings.</p>
        <p>In spring the cuckoo sings.</p>

        <p>
          অনুবাদকালে / In / at the age of উঠালে When + it/sub + V বসালে Complex
          হয়।
        </p>
        <p>যেমনঃ At the age of four, he left home</p>
        <p>When he was four, he left home.</p>

        <p>
          (3) That/what দ্বারা লুকানো বাক্য বুঝে That/what helping verb (যদি
          থাকে) উঠিয়ে পরের মূল V1 এর সঙ্গে ing যুক্ত করতে হয়।
        </p>
        <p>যেমনঃ I saw man who was walking.</p>
        <p>I saw a man walking.</p>

        <p>অপূর্ণক্রিয়ার উক্তিতে করলে Complex হয়।</p>
        <p>I lived a house belonging to me.</p>
        <p>I lived a house which belonged to me.</p>

        <p>
          অধিক ing যুক্ত verb এর পরিবর্তে বসাতে হয় কামকে That/Which/What এবং
          বাক্য থাকলে Who বসিয়ে ing যুক্ত verb ঠিক Tense অনুযায়ী সাজাতে হয়।
        </p>

        <p>
          (4) So......that দ্বারা যুক্ত বাক্যে So এর স্থলে too বসে এবং That-not
          পর্যন্ত উঠিয়ে To বসালে Simple হয়।
        </p>
        <p>যেমনঃ He is so weak that he cannot talk.</p>
        <p>He is too weak to talk.</p>

        <p>অপূর্ণক্রিয়ার উক্তিতে করলে Complex হয়।</p>
        <p>He walks too slowly to reach in time.</p>
        <p>He walks so slowly that he cannot reach there in time.</p>

        <p>
          (5) so that দ্বারা যুক্ত বাক্যগুলো থেকে Can/Could/may/might পর্যন্ত
          উঠিয়ে to বসালে Simple হয়।
        </p>
        <p>We eat so that we may live.</p>
        <p>We eat to live.</p>

        <p>
          অপূর্ণক্রিয়ার উক্তি করলে Complex হয়। অর্থাৎ to স্থলে so that+ sub+
          may/ might/ can/ could বসালে Complex হয়।
        </p>

        <h3>(6)</h3>
        <p>
          If দ্বারা শুরু বাক্যে Negative হলে without এবং If দ্বারা বাক্য হয়
          বোঝক হলে by বসিয়ে পরের V₁ এর সঙ্গে ing যুক্ত করলে Simple হয়।
        </p>

        <p>(i) If you study well, you will pass.</p>
        <p>By studying well, you will pass.</p>

        <p>(ii) If you do not study, you will not pass.</p>
        <p>Without studying well, you will not pass.</p>

        <h3>(7)</h3>
        <p>
          Though / although এর পরিবর্তে In spite of/ Despite of বসিয়ে পরের মূল
          V₁ এর সঙ্গে ing যুক্ত করলে Simple হয়।
        </p>

        <p>(i) Though he is poor, he is honest.</p>
        <p>In spite of being poor, he is honest.</p>

        <p>(ii) Though he read well, he could not pass.</p>
        <p>In spite of reading well, he could not pass.</p>

        <p>অপূর্ণক্রিয়ার উক্তি করলে Complex হয়।</p>
      </div>

      {/* COMPOUND TO SIMPLE || VISE-VERSA */}
      <div className="mt-5">
        <h3>Compound to simple & Simple to Compound:</h3>

        <p>
          (i) And দ্বারা যুক্ত বাক্যের And উঠিয়ে প্রথম বাক্যাংশের Sub: উঠিয়ে
          মূল V₁ এর সঙ্গে ing যুক্ত করলে Simple হয়। যদি প্রথম বাক্যে be verb
          থাকে তবে এর পরিবর্তে being এবং have verb থাকলে having বসালে Simple
          হয়।
        </p>

        <p>He closed the window and went out,</p>
        <p>Closing the window, he went out.</p>

        <p>
          <strong>N.B. যদি বাক্যের Sub ভিন্ন হয় তবে Sub উঠবে না।</strong>
        </p>
        <p>* The tea was hot and we could not drink.</p>
        <p>* The tea being hot, we could not drink.</p>

        <p>অপূর্ণক্রিয়ার:</p>
        <p>
          ing/being/having দ্বারা শুরু বাক্যের মাধ্যমে এবং বসিয়ে sub+V তে পরের
          বাক্য অনুষঙ্গ সাজাতে হয়।
        </p>
        <p>* The sun having set, they left home.</p>
        <p>= By the sun had set and they left home.</p>

        <p>
          কিন্তু And দ্বারা যুক্ত বাক্যের ক্ষেত্রে sub না থাকলে And উঠিয়ে
          বাক্যাংশ শুরুতে by বসালে হয় এবং by এর পরের V₁ এর সঙ্গে ing যুক্ত করতে
          হয়।
        </p>

        <p>* Work hard and you will succeed.</p>
        <p>* By working hard, you will succeed.</p>

        <p>অপূর্ণক্রিয়ার - উক্তিতে করলে Compound হয়।</p>
        <p>
          (2) But / yet যারা যুক্ত বাক্যের যুক্ত In spite of / Despite of বন্ধন
          পরের মূল V1 এর সাথে ing যুক্ত করলে Simple হয়। কিন্তু প্রথম বাক্যে
          verb to be থাকলে এর পরিবর্তে being যুক্ত করে have verb এর পরিবর্তে
          having বসাতে হয়।
        </p>

        <p>
          * He is rich but he is simple minded.
          <br /> In spite of being rich, he is simple minded.
          <br /> অনুবর্তীভাবে In spite of / Despite of যুক্তির পরের Possessive
          থাকলে Subjective বসাতে হবে এবং ing যুক্ত Verb কে পরে বাক্যাংশ অনুসারে
          verb ঠিক করতে হবে। কিন্তু being থাকলে be verb এবং having থাকলে have
          verb সরালে Compound হয়।
        </p>

        <p>
          (3) Or দ্বারা যুক্ত বাক্যের or যুক্ত বাক্যের জন্য without / by বন্ধন
          পরের মূল V1 এর সাথে ing যুক্ত করলে Compound হয়।
        </p>

        <p>
          * Work hard or you will not shine.
          <br /> - Without working hard, you will not shine.
        </p>

        <p>
          N.B. পরের বাক্যাংশ Negative হলে without এবং ইতিবাচক হলে by বসাতে হয়।
          <br /> অনুবর্তীভাবে by / without যুক্ত V1 করতে হলে এবং মূল verb এর
          মাধ্যামে or বসাতে হয়।
        </p>
      </div>

      {/* Complex to Compound & Compound to complex: */}
      <div className="">
        <h3>Complex to Compound & Compound to complex:</h3>

        <p>
          (1) Since /as / when / as soon as যখন শুরু / যুক্ত বাক্যের যাথারূপ And
          এর সাথে Since / as / when যুক্ত দিলে Compound হয়।
        </p>

        <p>
          * When I was eight, I was there.
          <br /> - I was eight and I was there.
        </p>

        <p>অনুবর্তীভাবে And যুক্ত থাকলে As বসালে Complex হয়।</p>

        <p>(2) Though / Although যুক্ত থাকলে but বসালে Compound হয়।</p>

        <p>
          * Although he was sick, he was walking.
          <br /> - He was sick but he was walking.
        </p>

        <p>
          অনুবর্তীভাবে যাথারূপ থেকে but / yet যুক্তির জন্য Though / Although
          বসালে Complex হয়।
        </p>

        <p>
          (3) If দ্বারা শুরু বাক্য না হলে মূল verb এর পূর্ব পর্যন্ত যুক্ত
          বাক্যাংশ or বসাতে হয়। If দ্বারা শুরু বাক্য যাথারূপ হলে বাক্যাংশ And
          বসালে Compound হয়।
        </p>

        <p>
          (i) If you work hard, you will pass.
          <br /> - Work hard and you will pass.
        </p>

        <p>
          (ii) If you do not do, you will die.
          <br /> - Do or you will die.
        </p>

        <p>
          অনুবর্তীভাবে And দ্বারা যুক্ত বাক্যের sub না থাকলে If বসালে And থাকবে
          Complex হয়। আবার or যুক্ত বাক্যের জন্য If+ sub+ do not বসালে Complex
          হয়।
        </p>
      </div>
    </div>
  );
};

export default Transformation;
