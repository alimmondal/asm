import Banner from "../components/home/Banner";
import Accordian from "../components/home/Accordions";
import GrammarItem from "../components/home/GrammarItem";
// import Video from "../components/home/Video";

const Home = () => {
  // const data = useLoaderData();
  return (
    <div>
      <Banner />
      {/* <Video /> */}
      <div className="md:max-w-[65%]  mx-auto">
        <GrammarItem />
        <Accordian />
      </div>
    </div>
  );
};

export default Home;
