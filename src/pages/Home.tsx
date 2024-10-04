import Banner from "../components/home/Banner";
import Accordian from "../components/home/Accordions";
import { Link } from "react-router-dom";

const Home = () => {
  // const data = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="max-w-7xl  mx-auto ">
        <h1 className="py-4 text-center w-full text-4xl font-bold ">
          Category
        </h1>
        <div className="my-5">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 px-2 md:px-20 items-center justify-center text-[10px] md:text-sm">
            <Link to={"/hsc"}>
              <li className=" bg-red-500 text-center py-7 md:py-16 rounded-sm text-white">
                HSC
              </li>
            </Link>
            <Link to={"/ssc"}>
              <li className="bg-red-500 text-center  py-7 md:py-16 rounded-sm text-white">
                SSC
              </li>
            </Link>
            <Link to={"/degree"}>
              <li className="bg-red-500 text-center  py-7 md:py-16 rounded-sm text-white">
                Degree
              </li>
            </Link>
            <Link to={"/tense"}>
              <li className="bg-red-500 text-center  py-7 md:py-16 rounded-sm text-white">
                Tense
              </li>
            </Link>
            <Link to={"/voice"}>
              <li className="bg-red-500 text-center  py-7 md:py-16 rounded-sm text-white">
                Voice
              </li>
            </Link>
            <Link to={"/strongVerb"}>
              <li className="bg-red-500 text-center py-7 md:py-16 rounded-sm text-white">
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
