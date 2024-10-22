function Phrase() {
  return (
    <div className="h-full md:w-[85%]  mx-auto">
      <div className="my-20">
        <h1 className="text-center">Idiom & Phrase</h1>
      </div>
      <div className="">
        <img src="/phrase1.jpg" alt="" className="w-full h-full" />
        <img src="/phrase2.jpg" alt="" className="w-full h-full" />
        <img src="/phrase3.jpg" alt="" className="w-full h-full" />
      </div>
      {/* EXAmple */}
      <div className="mt-10">
        <div className="overflow-x-auto">
          {/* Table for the top section */}
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">there</th>
                <th className="border border-gray-300 px-4 py-2">
                  What does.... look like?
                </th>
                <th className="border border-gray-300 px-4 py-2">As soon as</th>
                <th className="border border-gray-300 px-4 py-2">was born</th>
                <th className="border border-gray-300 px-4 py-2">let alone</th>
                <th className="border border-gray-300 px-4 py-2">
                  would rather
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  What's it like?
                </th>
                <th className="border border-gray-300 px-4 py-2">it</th>
                <th className="border border-gray-300 px-4 py-2">have to</th>
                <th className="border border-gray-300 px-4 py-2">had better</th>
              </tr>
            </thead>
          </table>

          {/* List of questions with alphabetic serial numbers */}
          <ul className="list-none pl-6 mt-4">
            <li className="before:content-['(a)'] before:mr-2">
              Time is very valuable. We _____ utilize time properly.
            </li>
            <li className="before:content-['(b)'] before:mr-2 mt-2">
              I _____ take a taxi than walk home. It is already too late.
            </li>
            <li className="before:content-['(c)'] before:mr-2 mt-2">
              Long ago _____ lived a mighty king Kubla Khan. He built an amazing
              palace in deep dark forest.
            </li>
            <li className="before:content-['(d)'] before:mr-2 mt-2">
              _____ watching a horror film at midnight? You are really scared.
            </li>
            <li className="before:content-['(e)'] before:mr-2 mt-2">
              It is winter. You _____ buy a coat.
            </li>
            <li className="before:content-['(f)'] before:mr-2 mt-2">
              _____ the balcony _____? It looks very beautiful but it is really
              small.
            </li>
            <li className="before:content-['(g)'] before:mr-2 mt-2">
              Bangladesh _____ as an independent state on 16 December 1971 after
              nine months bloody war against the occupation Pakistan Army.
            </li>
            <li className="before:content-['(h)'] before:mr-2 mt-2">
              _____ was in China that the art of Bonsai originated perhaps more
              than 1000 years ago.
            </li>
            <li className="before:content-['(i)'] before:mr-2 mt-2">
              I cannot ride a bicycle _____ a motor cycle. I have no money to
              buy any of them.
            </li>
            <li className="before:content-['(j)'] before:mr-2 mt-2">
              _____ the rain stopped, I started for home.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Phrase;
