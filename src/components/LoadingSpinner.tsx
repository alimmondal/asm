const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-88px)]">
      <p className="text-7xl font-bold">Welc</p>
      <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-red-500"></div>
      <p className="text-7xl font-bold">me....</p>
    </div>
  );
};

export default LoadingSpinner;
