export const Shortcut = () => {
  return (
    <div className="h-full lg:w-1/2 mx-auto px-5">
      <div className="py-10">
        <h1 className="text-center">Short Technique</h1>
      </div>
      <div className="">
        <div className="bg-white text-black font-sans px-6 py-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center underline mb-6">
            Punctuation
          </h1>

          {/* Bengali intro */}
          <p className="text-[15px] mb-4 leading-relaxed">
            এই topic টি পরীক্ষায় আসে Question No. 12 তে। Punctuation & use of
            capitals ব্যবহারে করতে হবে সাধারণত ১০ টা, মার্কস=৫। এই topic এ ৫ out of
            ৫ পাবার জন্য নিম্নলিখিত ৩-টি{" "}
            <span className="font-semibold">Technique</span> ভালোভাবে করতে হবে।
            এই বিশেষ বছরগুলির Board Question practice এর কোন প্রয়োজন নেই।
          </p>

          {/* Table Section */}
          <div className="border border-black w-full mb-6">
            <div className="bg-white text-[15px] border-b border-black p-2 font-semibold">
              ❖ Punctuation marks সাধারণত ১২ ধরনের। যেমনঃ
            </div>
            <table className="w-full border-collapse text-[15px]">
              <tbody>
                <tr className="border border-black">
                  <td className="border border-black px-2 py-1 text-center w-1/12">
                    1
                  </td>
                  <td className="border border-black px-2 py-1">
                    Fullstop (.)
                  </td>
                  <td className="border border-black px-2 py-1 text-center w-1/12">
                    7
                  </td>
                  <td className="border border-black px-2 py-1">
                    Apostrophe (’)
                  </td>
                </tr>
                <tr className="border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    2
                  </td>
                  <td className="border border-black px-2 py-1">Comma (,)</td>
                  <td className="border border-black px-2 py-1 text-center">
                    8
                  </td>
                  <td className="border border-black px-2 py-1">Dash (–)</td>
                </tr>
                <tr className="border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    3
                  </td>
                  <td className="border border-black px-2 py-1">
                    Semicolon (;)
                  </td>
                  <td className="border border-black px-2 py-1 text-center">
                    9
                  </td>
                  <td className="border border-black px-2 py-1">Hyphen (-)</td>
                </tr>
                <tr className="border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    4
                  </td>
                  <td className="border border-black px-2 py-1">Colon (:)</td>
                  <td className="border border-black px-2 py-1 text-center">
                    10
                  </td>
                  <td className="border border-black px-2 py-1">
                    Parenthesis/Bracket ()
                  </td>
                </tr>
                <tr className="border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    5
                  </td>
                  <td className="border border-black px-2 py-1">
                    Question Mark (?)
                  </td>
                  <td className="border border-black px-2 py-1 text-center">
                    11
                  </td>
                  <td className="border border-black px-2 py-1">
                    Asterisk (*)
                  </td>
                </tr>
                <tr className="border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    6
                  </td>
                  <td className="border border-black px-2 py-1">
                    Exclamation Mark (!)
                  </td>
                  <td className="border border-black px-2 py-1 text-center">
                    12
                  </td>
                  <td className="border border-black px-2 py-1">
                    Question mark/Inverted comma (“ ”)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Technique Section */}
          <div className="text-center font-semibold mb-2">
            মাত্র তিনটি Rule এর মাধ্যমে Punctuation Complete
          </div>

          <div className="border border-black p-3 mb-6">
            <h2 className="font-bold text-center underline mb-3">
              Ruole - 1
            </h2>
            <div className="">
              <img src="/Punctuation.jpg" alt="" className="w-full h-full" />
            </div>

            {/* Notes */}
            <ul className="text-[15px] list-disc pl-6 space-y-1 text-left">
              <li>উচ্চ শব্দ + Comma + Small Letter = Excuse me, sir.</li>
              <li>
                উচ্চ শব্দ + Fullstop + Capital Letter = Very well. There’s the
                axe.
              </li>
              <li>Really + (!) হয়। = Really! You are good.</li>
              <li>
                (I) সর্বদা Capital Letter হয়। = Then, I will start reading
                newspaper.
              </li>
              <li>সবসময় নাম বড় হাতের Letter দিয়ে শুরু হয়। = Hi, Zakir.</li>
              <li>
                May I coming / How is your father + comma হয়। = May I come in,
                sir?
              </li>
              <li>= How is your father, Rana?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
