import data from "../../../data.json";
function Test() {
  return (
    <div className="">
      <div className="">
        <div className="container mx-auto p-4">
          <div className="overflow-x-auto">
            <table className="md:w-full min-w-[800px] table-auto  border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-2 border-b">Words</th>
                  <th className="py-2 px-2 border-b">Phonemic transcription</th>
                  <th className="py-2 px-2 border-b">Bangla</th>
                  <th className="py-2 px-2 border-b">Meaning</th>
                  <th className="py-2 px-2 border-b">Examples</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: any) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-1 border-b">{item.word}</td>
                    <td className="py-2 px-1 border-b">{item.phonetic}</td>
                    <td className="py-2 px-1 border-b">
                      {item.banglaPronunciation}
                    </td>
                    <td className="py-2 px-1 border-b">{item.meaning}</td>
                    <td className="py-2 px-1 border-b">{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
