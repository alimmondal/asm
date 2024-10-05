function Voice() {
  return (
    <div className="h-full md:w-[85%] mx-auto px-5">
      <div className="py-10">
        <h1>Voice</h1>
      </div>
      <div className="">
        <h3 className="underline">From Active to Passive</h3>
        <p>
          <strong>Rule: </strong> Obj কে Sub বানাতে হবে + (helping verb) + V
          <sub>3</sub> + by + sub কে obj বানাতে হবে
        </p>
        <p>
          (i) মুল Verb যদি V<sub>1</sub> থাকে তাহলে Passive voice এর helping
          verb হয় = am/is/are যেমনঃ <br />
          Q. She makes tea.
          <br />= Tea is made by her.
        </p>
        <p>
          (ii) মুল Verb যদি V<sub>2</sub> থাকে তাহলে Passive voice এর helping
          verb হয় = Was/ were যেমনঃ
          <br />
          Q. She made tea.
          <br />= Tea was made by her.
        </p>

        <p>
          (iii) যদি am/is/are, was/ were, shall be/ will be থাকে তাহলে এগুলোর
          সাথে Passive voice এর helping verb হয় = being যেমনঃ <br />
          Q. She was making tea.
          <br />= Tea was being made by her.
        </p>
        <p>
          (vi) যদি can/ could/ may/ might/ shall/ should/ will/ would/ must/
          ought to/ have to/ has to/ had to/ am going to/ is going to/ are going
          to থাকে তাহলে এগুলোর সাথে Passive voice এর helping verb হয় = be যেমনঃ{" "}
          <br />
          Q. She can make tea.
          <br />= Tea can be made by her.
        </p>
      </div>

      {/* PASSIVE TO ACTIVE */}
      <div className="mt-5 mb-10">
        <h3 className="underline">From Passive to Active</h3>
        <p>
          <strong>Rule: </strong> Obj কে Sub বানাতে হবে + (helping verb)? উঠে
          যাবে/ পরিবর্তন হবে + V<sub>?</sub> + sub কে obj বানাতে হবে
        </p>
        <p>** By উঠিয়ে দিতে হবে।</p>
        <p>
          (i) Helping verb যদি am/is/are থাকে উঠিয়ে V<sub>1</sub>(s/es) হবে।
          যেমনঃ <br />
          Q. Tea is made by her. <br />
          = She makes tea.
          <br />
          কিন্তু Helping verb এর সাথে not থাকলে Helping verb উঠিয়ে do not/does
          not + V<sub>1</sub> হবে। যেমনঃ <br />
          Q. Tea is not made by her. <br />= She does not make tea.
        </p>
        <p>
          (ii) Helping verb যদি was/ were থাকে উঠিয়ে V<sub>2</sub> হবে। যেমনঃ
          <br />
          Q. Tea was made by her. <br />
          = She made tea.
          <br />
          কিন্তু Helping verb এর সাথে not থাকলে Helping verb উঠিয়ে did not + V
          <sub>1</sub> হবে। যেমনঃ <br />
          Q. Tea was not made by her. <br />= She did not make tea.
        </p>
        (iii) am being, is being, are being, was being,were being, shall be
        being, will be being, থাকলে being উঠিয়ে V<sub>1</sub> এর সাথে ing হবে।
        যেমনঃ <br />
        Q. Tea was being made by her. <br />= She was making tea.
        <p>
          (vi) যদি can/ could/ may/ might/ shall/ should/ will/ would/ must/
          ought to/ have to/ has to/ had to/ am going to/ is going to/ are going
          to এগুলোর সাথে be থাকে তাহলে be উঠিয়ে V<sub>1</sub>
          হয় যেমনঃ <br />
          Q. Tea can be made by her.
          <br />= She can make tea.
        </p>
      </div>
    </div>
  );
}

export default Voice;
