import data from "../../../data.json";
interface VocabularyItem {
  word: string;
  phonetic: string;
  banglaPronunciation: string;
  BengaliMeaning: string;
  examples: string;
  link: string;
}
function Test() {
  const typedData: VocabularyItem[] = data as VocabularyItem[];
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
                  <th className="py-2 px-2 border-b">banglaPronunciation</th>
                  <th className="py-2 px-2 border-b">Meaning</th>
                  <th className="py-2 px-2 border-b">Examples</th>
                </tr>
              </thead>
              <tbody>
                {typedData.map((item: any, index: any) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-1 border-b">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        href={item.link}
                      >
                        {`${index + 1}. ${item.word}`}
                      </a>
                    </td>
                    <td className="py-2 px-1 border-b">{item.phonetic}</td>
                    <td className="py-2 px-1 border-b">
                      {item.banglaPronunciation}
                    </td>
                    <td className="py-2 px-1 border-b">
                      {item.BengaliMeaning}
                    </td>
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
