import { Link } from "react-router-dom";

function Hsc() {
  return (
    <div
      className="
        w-full h-full
      "
    >
      <div
        className="
          flex
          w-full h-[300px]
          hscBg relative items-center justify-center
          md:h-[400px]
        "
      >
        <div
          className="
            bg-black
            opacity-50
            absolute inset-0
          "
        ></div>
        <h1
          className="
            z-10
            w-full
            text-center text-2xl font-bold text-white
            md:text-7xl
          "
        >
          HSC
        </h1>
      </div>

      <div
        className="
          max-w-7xl h-full
          my-20 mx-auto
          md:my-48
        "
      >
        <ul
          className="
            flex flex-wrap
            px-2
            items-center justify-center gap-3
            md:px-20
          "
        >
          <Link to={"/HSuggestion"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Suggestion
            </li>
          </Link>
          <Link to={"/modelTestFirstPaper"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                border-green-400
                hover:bg-black transition dark:hover:border
              "
            >
              MODEL TEST 1st-Part
            </li>
          </Link>
          <Link to={"/article"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                transition hover:bg-black dark:border dark:border-slate-400
              "
            >
              Article
            </li>
          </Link>
          <Link to={"/preposition"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Preposition
            </li>
          </Link>
          <Link to={"/phrase"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Phrase
            </li>
          </Link>
          <Link to={"/completing"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Completing Sentence
            </li>
          </Link>
          <Link to={"/verbs"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Right Form of Verbs
            </li>
          </Link>
          <Link to={"/narration"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Narration
            </li>
          </Link>
          <Link to={"/transformation"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Transformation
            </li>
          </Link>
          <Link to={"/pronoun"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Pronoun
            </li>
          </Link>
          <Link to={"/modifier"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Modifier
            </li>
          </Link>
          <Link to={"/connectors"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Connectors
            </li>
          </Link>
          <Link to={"/punctuation"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Punctuation
            </li>
          </Link>
          <Link to={"/syn-ant"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Synonym & Antonym
            </li>
          </Link>
          <Link to={"/paragraph"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Paragraph
            </li>
          </Link>
          <Link to={"/essay"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Composition
            </li>
          </Link>
          <Link to={"/email"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Email
            </li>
          </Link>
          <Link to={"/letter"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Letter
            </li>
          </Link>
          <Link to={"/application"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Application
            </li>
          </Link>
          <Link to={"/graph"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
              "
            >
              Graph Chart
            </li>
          </Link>
          <Link to={"/story"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
              "
            >
              Completing Story
            </li>
          </Link>
          {/* <Link to={"/HQuestion"}>
            <li
              className="
                px-3 py-2
                text-white
                bg-rose-500
                rounded-sm
                hover:bg-black transition dark:border dark:border-slate-400
              "
            >
              Board Question
            </li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
}

export default Hsc;
