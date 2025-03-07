const GraphChart = () => {
  return (
    <div className="px-5 h-full md:w-[65%] mx-auto">
      <div className="">
        <h1 className="text-center font-semibold text-md py-20 text-green-400">
          Graph Chart
        </h1>
      </div>
      <div className="">
        <div className="">
          <h3 className="">Model-1</h3>

          <p className="text-green-500">
            [##] ডাটা এবং পারচেন্টেজ দেওয়া থাকলেঃ
          </p>
          <p className="pb-10">
            The [graph/ pie] chart shows [shows er por theke full stop
            porjontu]. In the [ graph/pie chart] the data shown are of [farming,
            business, govt. job and intellectual work]. The graph chart/ pie
            chart shows that..........[DESCRIPTION] . Analyzing the graph/pie we
            find that the highest percentage is [name] which is [%] and the
            lowest percentage is [name] which is [%]. Finally we can say that
            the information given in the [graph/pie chart] are highly
            significant for us.
          </p>
        </div>

        <div className="">
          <h3 className="">Model-2</h3>
          <p className="text-green-500">[##] সাল এবং পারচেন্টেজ দেওয়া থাকলেঃ</p>

          <p className="pb-10">
            The graph/ pie chart shows [shows er por theke full stop porjontu].
            The most striking feature of the graph/ pie chart is the increase/
            decrease of [NAME] users during this period. The graph chart/ pie
            chart shows that..........[DESCRIPTION] . Analyzing the graph/pie we
            find that the highest percentage is [%] in [DATE] and the least
            percentage is [%] in [DATE]. Finally we can say that the information
            given in the [graph/pie chart] are highly significant for us.
          </p>
        </div>

        <div className="">
          <h2 className="">Example-1</h2>
          <p className="">
            <strong>Question-1:</strong> Look at the following pie-chart. It
            shows the sources of air pollution in Dhaka city. Now, describe the
            pie-chart in your own words. Highlight and Summarize the information
            given in the pie chart.
          </p>
          <img src="/pieChart.png" alt="" className="w-96 " />
        </div>
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
