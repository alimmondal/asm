const Sentence = () => {
  return (
    <div className="w-full ">
      <div className="text-center py-20">
        <h1 className="">Sentence</h1>
        <p className="">A brief discussion on Sentence</p>
      </div>

      <div className="pt-10 px-5 md:w-[50%] mx-auto">
        <div className="">
          <h3 className="text-green-500">Sentence</h3>
          <div className="rule-section">
            <h2>Assertive Sentence:</h2>
            <p>
              চিনার উপায়ঃ <br />
              ** দ্বিতীয় বাক্যটি Subject দ্বারা শুরু হয় এবং <br />
              ** বাক্যের শেষে full stop থাকে।
            </p>
          </div>
          <div className="">
            <h2>Interrogative Sentence:</h2>
            <p>
              চিনার উপায়ঃ
              <br />
              ** দ্বিতীয় বাক্যটি Wh/ helping verb দ্বারা শুরু হয় এবং <br />
              ** বাক্যের শেষে প্রশ্নবোধক চিহ্ন থাকে (?)।
            </p>
          </div>
          <div className="text-lg md:text-xl">
            <h2>Imperative Sentence:</h2>
            <p>
              চিনার উপায়ঃ <br />
              (দ্বিতীয় বাক্যে) Verb দ্বারা বাক্যে শুরু হয় এবং
              আদেশ/অনুরোধ/উপদেশ বোঝায়।
            </p>
          </div>
          <div className="">
            <h2>Exclamatory Sentence:</h2>
            <p>
              চিনার উপায়ঃ <br />
              ** Alas, hurrah দ্বারা শুরু হয়ে এদের পরে exclaimation চিহ্ন থাকে
              এবং বাকের শেষে ফুল স্টপ থাকে। <br />
              ** কিন্তু what, how দ্বারা শুরু হলে বাক্যের শেষে Exclaimation (!)
              চিহ্ন থাকে।
            </p>
          </div>
          <div className="">
            <h2>Optative Sentence:</h2>
            <p>
              চিনার উপায়ঃ <br />
              দ্বিতীয় বাক্যে May দ্বারা শুরু হয় এবং বাকের শেষে ফুল স্টপ থাকে।
            </p>
          </div>
        </div>
        <div className="py-5">
          <h2 className="">গঠন অনুসারে Sentence তিন প্রকার</h2>
          <div className="pt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Sentence;
