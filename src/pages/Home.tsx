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
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 px-2 md:px-20 items-center justify-center text-[10px] md:text-sm">
            <Link to={"/hsc"}>
              <li className="bg-gradient-to-r from-sky-500 to-sky-700 border-2 border-green-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 text-green-400 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-3xl text-xl category">
                HSC
              </li>
            </Link>
            <Link to={"/ssc"}>
              <li className="bg-red-500 text-center py-7 md:py-16 rounded-sm text-white hover:scale-100 transition font-bold md:text-3xl text-xl">
                SSC
              </li>
            </Link>
            <Link to={"/degree"}>
              <li className="bg-red-500 text-center  py-7 md:py-16 rounded-sm text-white hover:scale-100 transition font-bold md:text-3xl text-xl">
                Degree
              </li>
            </Link>
            <Link to={"/tense"}>
              <li className="bg-red-500 text-center  py-7 md:py-16 rounded-sm text-white hover:scale-100 transition font-bold  md:text-3xl text-xl">
                Tense
              </li>
            </Link>
            <Link to={"/voice"}>
              <li className="bg-red-500 text-center  py-7 md:py-16 rounded-sm text-white hover:scale-100 transition font-bold md:text-3xl text-xl">
                Voice
              </li>
            </Link>
            <Link to={"/strongVerb"}>
              <li className="bg-red-500 text-center py-7 md:py-16 rounded-sm text-white hover:scale-100 transition font-bold md:text-3xl text-xl">
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
