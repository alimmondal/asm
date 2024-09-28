import React from "react";
import { Link } from "react-router-dom";

function Hsc() {
  return (
    <div className="max-w-7xl h-screen mx-auto flex flex-col items-center justify-center">
      <h1 className="pb-24">HSC</h1>
      <div className="">
        <ul className="h-full flex flex-wrap gap-3 px-1">
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Article</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Prepostion</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Phrase & Words</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Completing Sentence</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Right Form of Verbs</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Narration</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">
              Transformation/ Changing Sentence
            </li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Pronoun</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Modifier</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Connectors</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Punctuation</li>
          </Link>
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2">Completing Sentence</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Hsc;
