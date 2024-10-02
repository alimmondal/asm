import { Link } from "react-router-dom";

function Hsc() {
  return (
    <div className="max-w-7xl h-full mx-auto ">
      <h1 className="py-24 text-center w-full text-4xl font-bold ">HSC</h1>
      <div className="mt- h-screen">
        {/* <div className="">
          <h1 className="text-center">Grammar Section</h1>
        </div> */}
        <ul className=" flex flex-wrap gap-3 px-2 md:px-20">
          <Link to={"/article"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white hover:bg-black">
              Article
            </li>
          </Link>
          <Link to={"/preposition"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Preposition
            </li>
          </Link>
          <Link to={"/phrase"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Phrase
            </li>
          </Link>
          <Link to={"/completing"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Completing Sentence
            </li>
          </Link>
          <Link to={"/verbs"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Right Form of Verbs
            </li>
          </Link>
          <Link to={"/narration"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Narration
            </li>
          </Link>
          <Link to={"/transformation"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Transformation
            </li>
          </Link>
          <Link to={"/pronoun"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Pronoun
            </li>
          </Link>
          <Link to={"/modifier"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Modifier
            </li>
          </Link>
          <Link to={"/connectors"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Connectors
            </li>
          </Link>
          <Link to={"/punctuation"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Punctuation
            </li>
          </Link>
          <Link to={"/syn-ant"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Synonym & Antonym
            </li>
          </Link>
          <Link to={"/paragraph"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Paragraph
            </li>
          </Link>
          <Link to={"/composition"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Composition
            </li>
          </Link>
          <Link to={"/email"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Email
            </li>
          </Link>
          <Link to={"/letter"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Letter
            </li>
          </Link>
          <Link to={"/application"}>
            <li className="bg-red-500 px-3 py-2 rounded-sm text-white">
              Application
            </li>
          </Link>
        </ul>

        {/* <div className="">
          <h1 className="text-center">Writing Section</h1>
        </div>

        <ul className="flex flex-wrap gap-3 p-20"></ul> */}
      </div>
    </div>
  );
}

export default Hsc;
