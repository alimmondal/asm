import Banner from "../components/home/Banner";
import Accordian from "../components/home/Accordions";
import { Link } from "react-router-dom";

const Home = () => {
  // const data = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="max-w-7xl  mx-auto pt-9">
        <h1 className="py-4 mt-5 text-center w-full text-4xl font-bold ">
          Category
        </h1>

        <div className="my-5">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 px-2 md:px-20 items-center justify-center">
            <Link to={"/hsc"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700 border-2 border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-3xl text-xl category hover:dark:shadow-md">
                HSC
              </li>
            </Link>
            <Link to={"/ssc"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700 border-2 border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-3xl text-xl category">
                SSC
              </li>
            </Link>
            <Link to={"/degree"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700 border-2 border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-3xl text-xl category">
                Degree
              </li>
            </Link>
            <Link to={"/tense"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700 border-2 border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-3xl text-xl category">
                Tense
              </li>
            </Link>
            <Link to={"/voice"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700 border-2 border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-3xl text-xl category">
                Voice
              </li>
            </Link>
            <Link to={"/strongVerb"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700 border-2 border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-3xl text-xl category">
                Strong Verb
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto">
        <Accordian />
      </div>
    </div>
  );
};

export default Home;
