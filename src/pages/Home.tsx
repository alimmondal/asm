import Banner from "../components/home/Banner";
import Accordian from "../components/home/Accordions";
import { Link } from "react-router-dom";

const Home = () => {
  // const data = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="max-w-content  mx-auto ">
        <h1 className="py-4 text-center w-full text-4xl font-bold ">
          Category
        </h1>
        <div className="my-5">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 px-2 md:px-20 ">
            <Link to={"/hsc"}>
              <li className=" bg-red-500 px-5 py-2 rounded-sm text-white text-center transition hover:scale-100  ">
                HSC
              </li>
            </Link>
            <Link to={"/ssc"}>
              <li className="bg-red-500 px-10 py-2 rounded-sm text-white">
                SSC
              </li>
            </Link>
            <Link to={"/degree"}>
              <li className="bg-red-500 px-10 py-2 rounded-sm text-white">
                Degree
              </li>
            </Link>
            <Link to={"/tense"}>
              <li className="bg-red-500 px-10 py-2 rounded-sm text-white">
                Tense
              </li>
            </Link>
            <Link to={"/strongVerb"}>
              <li className="bg-red-500 px-10 py-2 rounded-sm text-white">
                Strong Verb
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Accordian />
    </div>
  );
};

export default Home;
