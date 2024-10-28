import Banner from "../components/home/Banner";
import Accordian from "../components/home/Accordions";
import Video from "../components/home/Video";

const Home = () => {
  // const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Video />

      <div className="max-w-7xl w-full mx-auto">
        <Accordian />
      </div>
    </div>
  );
};

export default Home;
