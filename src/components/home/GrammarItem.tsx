import { Link } from "react-router-dom";

function GrammarItem() {
  return (
    <div className="w-full h-full">
      <div className="">
        <h1 className="text-center w-full text-4xl font-bold uppercase text-green-400">
          Grammar
        </h1>
      </div>

      <div className="mt-10 mb-20 max-w-7xl h-full mx-auto ">
        <ul className="flex items-center justify-center flex-wrap gap-3 px-2 md:px-20">
          <Link to={"/sentence"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Sentence
            </li>
          </Link>
          <Link to={"/partsOfSpeech"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black">
              Parts of Speech
            </li>
          </Link>
          <Link to={"/tense"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white transition hover:bg-black dark:border dark:border-slate-400">
              Tense
            </li>
          </Link>
          <Link to={"/voice"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white transition hover:bg-black dark:border dark:border-slate-400">
              Voice
            </li>
          </Link>
          <Link to={"/strongVerb"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white transition hover:bg-black dark:border dark:border-slate-400">
              Strong Verb/ Weak Verb
            </li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white transition hover:bg-black dark:border dark:border-slate-400">
              Article
            </li>
          </Link>
          <Link to={"/tag"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Tag Question
            </li>
          </Link>

          <Link to={"/preposition"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Preposition
            </li>
          </Link>

          <Link to={"/verbs"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Right Form of Verbs
            </li>
          </Link>
          <Link to={"/narration"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Narration
            </li>
          </Link>
          <Link to={"/transformation"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Transformation
            </li>
          </Link>

          <Link to={"/punctuation"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Punctuation
            </li>
          </Link>

          <Link to={"/wh"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Wh-question
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default GrammarItem;
