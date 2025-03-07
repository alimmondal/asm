const GraphChart = () => {
  return (
    <div className="px-5 h-full md:w-[65%] mx-auto">
      <div className="">
        <h1 className="text-center font-semibold text-md py-20 text-green-400">
          Graph Chart
        </h1>
      </div>
      <div className="">
        <p className="">
          Question: Look at the following pie-chart. It shows the pollution of
          Dhaka city by different sources in Bangladesh. Now, describe the
          pie-chart in your own words.{" "}
        </p>
        <img src="/pieChart.png" alt="" />
      </div>
      <div className="text-center py-4 sticky bottom-0 left-0 right-0">
        <a
          href="/suffix-prefix.pdf"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </a>
      </div>
      <div className="text-center">
        <p className="">
          Note: পিডিএফ ফাইল ডাউনলড করলে মোবাইলের File manager/ My File-এ জমা হয়।
          গেলারিতে পাওয়া যাবে না।
        </p>
      </div>
    </div>
  );
};

export default GraphChart;
