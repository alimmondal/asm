import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-rose-50">
      <div className="heading2 ">
        <p className="text-xl">
          <span className="text-lg">তোমাকে</span>
          <br />
          সুস্বাগতম !
        </p>
      </div>
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
        <Button className="w-full" type="button" gradientDuoTone="purpleToPink">
          Login/ Sign in
        </Button>
      </Link>
    </div>
  );
};

export default Welcome;
