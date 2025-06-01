import Banner from "../components/home/Banner";
import Accordian from "../components/home/Accordions";
import GrammarItem from "../components/home/GrammarItem";
import useAuth from "../hooks/useAuth";
import Welcome from "../components/Welcome";
import Glob from "../components/home/Glob";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const auth = useAuth();
  // console.log(auth);
  if (auth?.loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="">
      {auth?.user ? (
        <div>
          <Banner />
          {/* <Video /> */}
          <div className="py-10">

            <Glob />
          </div>
          <div className="md:max-w-[65%]  mx-auto">
            <GrammarItem />
            <Accordian />
          </div>
        </div>
      ) : (
        <>
          <Welcome />
        </>
      )}
    </div>
  );
};

export default Home;
