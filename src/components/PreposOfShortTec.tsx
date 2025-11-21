export const PreposOfShortTec = () => {
  interface Row {
  prep: string;
  meaning: string;
  example: string;
}

const data: Row[] = [
  { prep: "On", meaning: "উপর লেগে থাকা", example: "The book is on the table." },
  { prep: "Over", meaning: "সামান্য উপরে দিয়ে", example: "The fan is over my head." },
  { prep: "Above", meaning: "অনেক উপরে", example: "The star is above our head." },
  { prep: "Up", meaning: "খাড়া উপরে দিকে", example: "Put up your hand." },
  { prep: "Down", meaning: "Up এর বিপরীত ", example: "Please do it up and down." },
  { prep: "At", meaning: "কাছে অবস্থান ", example: "I am at office." },
  { prep: "Through", meaning: "ভেতর দিয়ে", example: "We went through the desert." },
  { prep: "In", meaning: "ভেতরে স্থিতি বুঝাতে", example: "My mom is in the kitchen." },
  { prep: "Into", meaning: "ভেতরে দিকে গতি", example: "Go into the room." },
  { prep: "Out of", meaning: "into এর বিপরীত ", example: "He went out of the room sometime before." },
  { prep: "Under", meaning: "খাড়া নিচে", example: "The pen is under the chair." },
  { prep: "Below", meaning: "তীর্জকভাবে নিচে", example: "The river is below the town." },
  { prep: "Out", meaning: "in এর বিপরীত ", example: "Get out." },
  
  
  { prep: "Of", meaning: "র বা এর", example: "The English teaching method of Ram is very easy." },
  { prep: "To", meaning: "কোন দিকে গতি", example: "Rana is going to school." },
  { prep: "From", meaning: "To এর বিপরীত ", example: "He came from Chandpur." },
  { prep: "By", meaning: "দিয়ে/পাশ দিয়ে", example: "The car passed by me." },
  { prep: "With", meaning: "সহ/সাথে ", example: "We did not take any cook with us." },
  { prep: "Between", meaning: "মধ্যে (২ এর মধ্যে)", example: "He divided the money between the two children." },
  { prep: "Among", meaning: "মধ্যে (অনেকের মধ্যে)", example: "He was happy to be among us." },
  { prep: "About", meaning: "সম্পর্কে", example: "The old man told him about his last journey on the sea." },
  { prep: "After", meaning: "পরে", example: "After going to college, we completed our homework." },
  { prep: "Before", meaning: "আগে", example: "Rana came here before me." },
  { prep: "Towards", meaning: "দিকে/বরাবর ", example: "We are going towards College." },
  { prep: "Along", meaning: "লাগোয়া/বরাবর", example: "Go along the road." },
  { prep: "Across", meaning: "এপার হতে ওপারে", example: "Poverty is increasing across the country." },
  { prep: "Within", meaning: "নির্দিষট মধ্যে/ভিতরে", example: "I will come back within 20 minutes." },
  { prep: "Against", meaning: "বিরুদ্ধ", example: "We fought against Pakistan in liberation war." },
  { prep: "Beside", meaning: "পাশে", example: "She sat beside me." },
  { prep: "Behind", meaning: "পেছনে", example: "The boy is behind the bed." },
  { prep: "Beyond", meaning: "ছাড়িয়ে/অতিক্রম করে", example: "The price of the dress is beyond my budget." },
  { prep: "Since", meaning: "থেকে", example: "It has been raining since morning." }

];
  return (
    <div>
      <div className="py-10">
        <h2 className="text-pink-700 text-center">ShortTec</h2>
      </div>
      <div className="text-center">
        <h2 className="text-green-500 py-8">Short techniq one:</h2>
        <img src="/preposition1.png" alt="" />
      </div>
      <div className="">
        <h3 className="text-green-500 py-5">❇️Follow the chart:</h3>
        <img src="/preposition2.jpg" alt="" />
      </div>
       <div className="overflow-x-auto p-4">
        <h3 className="">উপরের চার্ট টির ব্যাখ্যা</h3>
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Preposition</th>
            <th className="border px-4 py-2">Bangla Meaning</th>
            <th className="border px-4 py-2">Example</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border px-4 py-2 font-semibold">{row.prep}</td>
              <td className="border px-4 py-2">{row.meaning}</td>
              <td className="border px-4 py-2">{row.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  );
};
