import { init } from "ityped";
import { useEffect, useRef } from "react";
const Banner = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        // showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["ASM English Academy"],
      });
    }
  }, []);

  return (
    <div className="hero h-[600px] bannerBg">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="text-xl md:text-5xl">Welcome to</h1>
          <h1 className="mb-5 text-2xl md:text-5xl font-bold heading2">
            <span ref={textRef}></span>
          </h1>
          <button className="btn btn-primary">Let's Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
