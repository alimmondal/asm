const Banner = () => {
  return (
    <div className="hero h-[600px] bannerBg">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl ">Welcome to</h1>
          <p className="mb-5 text-5xl font-bold">ASM English Private Center</p>
          <button className="btn btn-primary">Let's Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
