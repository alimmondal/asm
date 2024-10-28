const Video = () => {
  return (
    <div>
      <div className="py-20 h-full">
        <div className="w-[95%] md:w-[50%] mx-auto">
          <iframe
            className="min-w-full"
            height="415"
            src="https://www.youtube.com/embed/3yrtsZDSZGQ?si=59M4i2zWcaDFGvNc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
