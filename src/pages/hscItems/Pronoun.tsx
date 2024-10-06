const Pronoun = () => {
  return (
    <div className="flex items-center justify-center h-screen bannerBg text-7xl">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Question No: 08</h1>
        <h2 className="text-xl font-semibold mb-2">
          Clear the unclear pronoun
        </h2>
        <h3 className="text-lg font-semibold">Pronoun</h3>
        <p className="mb-4">
          **Noun এর পরিবর্তে যে সকল শব্দ ব্যবহার হয় তাকে pronoun বলে।
          <br />
          **Pronoun আটকে প্রকার হতে পারে
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Personal: he, she, i, we, they, you.</li>
          <li>Impersonal: each, every, any, one.</li>
          <li>Reflexive: himself, herself, themself.</li>
          <li>Reciprocal: each other, one another.</li>
          <li>Possessive: his, her, our, my, their.</li>
          <li>Relative: who, what, which, whom.</li>
          <li>Interrogative: what, whom, whose, where.</li>
          <li>Demonstrative: this, that, those, these.</li>
        </ul>

        <table className="table-auto border-collapse border border-gray-500 w-full mb-4">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Subjective</th>
              <th className="border border-gray-500 px-4 py-2">Objective</th>
              <th className="border border-gray-500 px-4 py-2">Possessive</th>
              <th className="border border-gray-500 px-4 py-2">
                Possessive Adj
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-4 py-2">I</td>
              <td className="border border-gray-500 px-4 py-2">me</td>
              <td className="border border-gray-500 px-4 py-2">my</td>
              <td className="border border-gray-500 px-4 py-2">myself</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">We</td>
              <td className="border border-gray-500 px-4 py-2">us</td>
              <td className="border border-gray-500 px-4 py-2">our</td>
              <td className="border border-gray-500 px-4 py-2">ourselves</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">You</td>
              <td className="border border-gray-500 px-4 py-2">you</td>
              <td className="border border-gray-500 px-4 py-2">your</td>
              <td className="border border-gray-500 px-4 py-2">yourselves</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">They</td>
              <td className="border border-gray-500 px-4 py-2">them</td>
              <td className="border border-gray-500 px-4 py-2">their</td>
              <td className="border border-gray-500 px-4 py-2">themselves</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">She</td>
              <td className="border border-gray-500 px-4 py-2">her</td>
              <td className="border border-gray-500 px-4 py-2">her</td>
              <td className="border border-gray-500 px-4 py-2">herself</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">He</td>
              <td className="border border-gray-500 px-4 py-2">him</td>
              <td className="border border-gray-500 px-4 py-2">his</td>
              <td className="border border-gray-500 px-4 py-2">himself</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">It</td>
              <td className="border border-gray-500 px-4 py-2">it</td>
              <td className="border border-gray-500 px-4 py-2">its</td>
              <td className="border border-gray-500 px-4 py-2">itself</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">One</td>
              <td className="border border-gray-500 px-4 py-2">one</td>
              <td className="border border-gray-500 px-4 py-2">one's</td>
              <td className="border border-gray-500 px-4 py-2">oneself</td>
            </tr>
          </tbody>
        </table>

        <div className="mb-4">
          <h4 className="font-semibold">
            1. Verb এর আগে Subject বলে এবং verb এর পরে object বলে।
          </h4>
          <ul className="list-disc list-inside">
            <li>I have a pen.</li>
            <li>Let me and he go home.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">
            2. He/ him/ his দ্বারা পুলক বাচক কুবাযা কিন্তু she/ her/ her দ্বারা
            মহিলাকে বুঝায়।
          </h4>
          <p>
            **Salam and Salma are siblings; Salam is in className five who was
            her sister, Salma, reads in className three.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">
            3. বাকের Subject অনুলারে possessive করে।
          </h4>
          <p>**Salma answered that she knew his mother's name.</p>
        </div>
      </div>
    </div>
  );
};

export default Pronoun;
