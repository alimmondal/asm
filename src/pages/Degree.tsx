import { Link } from "react-router-dom";

function Degree() {
  return (
    <div className="max-w-7xl h-full mx-auto ">
      <h1 className="py-24 text-center w-full text-4xl font-bold ">Degree</h1>
      <div className="mt- h-screen">
        <ul className=" flex items-center justify-center flex-wrap gap-3 px-2 md:px-20">
          <Link to={"/suggestion"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black">
              Suggestion
            </li>
          </Link>
          <Link to={"/partsOfSpeech"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black">
              Parts of Speech
            </li>
          </Link>
          <Link to={"/suffix"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black">
              Suffix & Prefix
            </li>
          </Link>
          <Link to={"/advertisement"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Advertisement
            </li>
          </Link>
          <Link to={"/poster"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Poster
            </li>
          </Link>
          <Link to={"/dCompleting"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Completing Sentence
            </li>
          </Link>
          <Link to={"/verbs"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Right Form of Verbs
            </li>
          </Link>
          <Link to={"/dialog"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Dialog
            </li>
          </Link>
          <Link to={"/notice"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Notice
            </li>
          </Link>
          <Link to={"/report"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Report
            </li>
          </Link>
          <Link to={"/modifier"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Modifier
            </li>
          </Link>
          <Link to={"/wh"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Wh-question
            </li>
          </Link>
          <Link to={"/punctuation"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Punctuation
            </li>
          </Link>
          <Link to={"/syn-ant"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Synonym & Antonym
            </li>
          </Link>
          <Link to={"/paragraph"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Paragraph
            </li>
          </Link>
          <Link to={"/essay"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Composition
            </li>
          </Link>
          <Link to={"/email"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Email
            </li>
          </Link>
          <Link to={"/letter"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Letter
            </li>
          </Link>
          <Link to={"/application"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Application
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Degree;
