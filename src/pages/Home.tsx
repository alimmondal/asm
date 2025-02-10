import Banner from "../components/home/Banner";
import Accordian from "../components/home/Accordions";
import GrammarItem from "../components/home/GrammarItem";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
// import { redirect } from "react-router-dom";
// import Video from "../components/home/Video";

const Home = () => {
  const auth = useAuth();
  // console.log(auth);
  return (
    <div className="">
      {auth?.user ? (
        <div>
          <Banner />
          {/* <Video /> */}
          <div className="md:max-w-[65%]  mx-auto">
            <GrammarItem />
            <Accordian />
          </div>
        </div>
      ) : (
        <>
          <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-rose-50">
            <div className="heading2 text-xl">সুস্বাগতম !</div>
            <div className="relative">
              <div className="">
                <img src="/a.jpg" alt="" className="w-[500px]" />
              </div>
              <h1 className="absolute top-10 left-3 heading2 text-gray-700">
                Hy! <br /> I'm <br />
                <span className="text-6xl md:text-8xl ">Alim</span>
              </h1>
            </div>
            {/* <p className="text-center dark:text-gray-400">going to login</p> */}
            <Link to={"/login"}>
              <Button
                className="w-full"
                type="button"
                gradientDuoTone="purpleToPink"
              >
                Login/ Sign in
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
