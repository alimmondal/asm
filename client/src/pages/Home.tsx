import Banner from "../components/home/Banner";
import Accordian from "../components/home/Accordions";
import GrammarItem from "../components/home/GrammarItem";
import useAuth from "../hooks/useAuth";
import Welcome from "../components/Welcome";

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
          <Welcome />
        </>
      )}
    </div>
  );
};

export default Home;
