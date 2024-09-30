import { Link } from "react-router-dom";

function Hsc() {
  return (
    <div className="max-w-7xl h-full mx-auto ">
      <h1 className="py-24 text-center w-full h-32 bg-slate-400">HSC</h1>
      <div className="mt-32 h-screen">
        <div className="">
          <h1 className="text-center">Grammar Section</h1>
        </div>
        <ul className=" flex flex-wrap gap-3 p-20">
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2 text-white">Article</li>
          </Link>
          <Link to={"/preposition"}>
            <li className="bg-red-500 px-3 py-2">Preposition</li>
          </Link>
          <Link to={"/phrase"}>
            <li className="bg-red-500 px-3 py-2">Phrase & Words</li>
          </Link>
          <Link to={"/completing"}>
            <li className="bg-red-500 px-3 py-2">Completing Sentence</li>
          </Link>
          <Link to={"/verbs"}>
            <li className="bg-red-500 px-3 py-2">Right Form of Verbs</li>
          </Link>
          <Link to={"/narration"}>
            <li className="bg-red-500 px-3 py-2">Narration</li>
          </Link>
          <Link to={"/transformation"}>
            <li className="bg-red-500 px-3 py-2">Transformation</li>
          </Link>
          <Link to={"/pronoun"}>
            <li className="bg-red-500 px-3 py-2">Pronoun</li>
          </Link>
          <Link to={"/modifier"}>
            <li className="bg-red-500 px-3 py-2">Modifier</li>
          </Link>
          <Link to={"/connectors"}>
            <li className="bg-red-500 px-3 py-2">Connectors</li>
          </Link>
          <Link to={"/punctuation"}>
            <li className="bg-red-500 px-3 py-2">Punctuation</li>
          </Link>
          <Link to={"/syn-ant"}>
            <li className="bg-red-500 px-3 py-2">Synonym & Antonym</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Hsc;
