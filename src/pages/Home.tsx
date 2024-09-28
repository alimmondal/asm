import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Accordian from "../components/home/Accordions";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      {/* <Products data={data} /> */}
      <Accordian />
    </div>
  );
};

export default Home;
