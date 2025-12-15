import Banner from "../components/home/Banner";
import GrammarItem from "../components/home/GrammarItem";
import useAuth from "../hooks/useAuth";
import Welcome from "../components/Welcome";
import Glob from "../components/home/Glob";
import LoadingSpinner from "../components/LoadingSpinner";
import Composition from "../components/Composition";

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
            <Composition />
            {/* <Accordian /> */}
          </div>
          <div className="bg-white">
            <section className="relative flex items-center justify-center py-24">
              {/* Video container */}
              <div className="relative w-[600px] h-[600px] overflow-hidden ">
                {/* Background Video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_c76dfeb683.webm"
                    type="video/webm"
                  />
                </video>

                {/* Overlay (optional for readability) */}
                {/* <div className="absolute inset-0 bg-black/30" /> */}

                {/* Centered Text */}
                <div className="relative z-10 flex h-full items-center justify-center text-center">
                  <h1 className="text-white text-4xl font-bold leading-tight">
                    Trade Smarter <br /> with Exness
                  </h1>
                </div>
              </div>
            </section>
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
