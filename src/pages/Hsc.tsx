import { Link } from "react-router-dom";

function Hsc() {
  return (
    <div className="w-full h-full">
      <div className="hscBg relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-center w-full text-2xl md:text-7xl font-bold text-white z-10">
          HSC
        </h1>
      </div>

      <div className="my-20 md:my-48 max-w-7xl h-full mx-auto ">
        <ul className="flex items-center justify-center flex-wrap gap-3 px-2 md:px-20">
          <Link to={"/HSuggestion"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Suggestion
            </li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white transition hover:bg-black dark:border dark:border-slate-400">
              Article
            </li>
          </Link>
          <Link to={"/preposition"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Preposition
            </li>
          </Link>
          <Link to={"/phrase"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Phrase
            </li>
          </Link>
          <Link to={"/completing"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Completing Sentence
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
          <Link to={"/pronoun"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Pronoun
            </li>
          </Link>
          <Link to={"/modifier"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Modifier
            </li>
          </Link>
          <Link to={"/connectors"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Connectors
            </li>
          </Link>
          <Link to={"/punctuation"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Punctuation
            </li>
          </Link>
          <Link to={"/syn-ant"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Synonym & Antonym
            </li>
          </Link>
          <Link to={"/paragraph"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Paragraph
            </li>
          </Link>
          <Link to={"/essay"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Composition
            </li>
          </Link>
          <Link to={"/email"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Email
            </li>
          </Link>
          <Link to={"/letter"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Letter
            </li>
          </Link>
          <Link to={"/application"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Application
            </li>
          </Link>
          <Link to={"/HQuestion"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Board Question
            </li>
          </Link>
          <Link to={"/modelTest"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Test Papers
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Hsc;
