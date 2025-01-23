const Pronoun = () => {
  return (
    <div className="w-[95%] md:w-[85%] mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold ">Question No: 08</h1>
        <h2 className="text-xl font-semibold ">Clear the unclear pronoun</h2>
        <h3 className="text-lg font-semibold">Pronoun</h3>
      </div>

      <p className="">
        **Noun এর পরিবর্তে যে সকল শব্দ ব্যবহার হয় তাকে pronoun বলে।
        <br />
        **Pronoun আটকে প্রকার হতে পারে
      </p>
      <ul className="list-disc list-inside ">
        <li>Personal: he, she, i, we, they, you.</li>
        <li>Impersonal: each, every, any, one.</li>
        <li>Reflexive: himself, herself, themself.</li>
        <li>Reciprocal: each other, one another.</li>
        <li>Possessive: his, her, our, my, their.</li>
        <li>Relative: who, what, which, whom.</li>
        <li>Interrogative: what, whom, whose, where.</li>
        <li>Demonstrative: this, that, those, these.</li>
      </ul>

      <div className="w-full my-5 overflow-x-auto">
        <table className="md:w-full table-auto border-collapse border border-gray-500 min-w-[500px] overflow-x-auto">
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
      </div>

      {/* <div className="">
        <h4 className="font-semibold">
          1. Verb এর আগে Subject বলে এবং verb এর পরে object বলে।
        </h4>
        <ul className="list-disc list-inside">
          <li>I have a pen.</li>
          <li>Let me and he go home.</li>
        </ul>
      </div> */}
      {/* <img src="img/pro1.jpg" alt="" />
      <img src="img/pro2.jpg" alt="" /> */}
      <div className="">
        No: 08 Clear the unclear pronoun Pronoun
        <br /> **Noun এর পরিবর্তে যে সকল শব্দ ব্যবহার হয় তাকে pronoun বলে।
        **Pronoun অনেক প্রকার হতে পারেঃ
        <br /> 1. Verb এর আগে Subject বসে এবং verb এর পরে object বসে।
        <br /> যেমনঃ
        <br /> Q. My have a pen.
        <br /> Ans: <span className="font-bold">I </span> have a pen.
        <br /> Q. Let me and he go home.
        <br /> Ans: Let me and <span className="font-bold">him</span> go home.
        <br /> 2. He/ him/his দ্বারা পুরুষ ব্যক্তিকে বুঝায় কিন্তু she/her/ her
        দ্বারা মহিলাকে বুঝায়।
        <br />
        যেমনঃ
        <br /> Q. Salam and Salma are siblings; Salam is in class five who was
        her sister, Salma, reads in class three.
        <br /> 3. বাক্যের Subjerct অনুসারে possessive বসে।
        <br /> যেমনঃ
        <br /> Q. Salma answered that she knew his mother's name.
        <br /> Ans: Salma answered that she knew her mother's name.
        <br />
        Sifat Rabbani
        <br /> 4. বাক্যের প্রথমে Subject যদি one হয় তবে শেষের দিকে his/her এর
        স্থলে one's হয়।
        <br /> যেমনঃ <br /> Q. One should do his duty.
        <br /> Ans: One should do one's duty.
        <br /> কিন্তু one of এর পরে পুরুষ থাকলে পরে his হবে এবং স্ত্রীবাচক শব্দ
        থাকলে her হবে।
        <br /> যেমনঃ
        <br /> Q. One of the boys should do her duty.
        <br /> Ans: One of the boys should do his duty.
        <br /> 5. Anyone, everyone, everybody, someone, somebody, no one, none,
        nobody each, either, neither ইত্যাদি বাক্যের প্রথমে Subject হিসেবে
        ব্যবহার হলে, বাক্যের শেষের দিকে their/ our এর পরিবর্তে his/her বসে।
        <br /> যেমনঃ
        <br /> Q. Every one should do their duty.
        <br /> Ans: Every one should do his/her duty.
        <br /> কিন্তু উপরিউক্ত pronoun গুলো দ্বারা যদি পূর্বের আলোচিত কোন
        স্ত্রীবাচক শব্দকে বুঝায় তাহলে her এবং পুরুষকে ইঙ্গিত করলে his বসবে।
        <br /> 6. Myself, ourself, himself, ইত্যাদি পূর্বের আলোচিত পূং লিঙ্গ এবং
        স্ত্রী লিঙ্গ অনুসারে ব্যবহার হয়।
        <br /> যেমনঃ
        <br /> Q. The girl killed himself.
        <br /> Ans: The girl killed herself.
        <br /> 7. দুটি বাক্যের মাঝখানে who/who/which/that থাকে। এগুলোর পূর্বে
        যদি ব্যক্তিবাচক শব্দ থাকে তবে that/which এর পরিবর্তে who বসে। আবার
        এগুলোর পূর্বে যদি বস্তুবাচক শব্দ থাকে তবে who/whom এর পরিবর্তে
        which/that বসে।
        <br /> যেমনঃ
        <br /> Q. I know the boy which came here.
        <br /> Ans: I know the boy who came here.
        <br /> Q. He killed a bird who made noise.
        <br /> Ans: He killed a bird which made noise.
        <br /> অর্থাৎ who/ whom-that/which. কিন্তু who এর পূর্বে they থাকলে they
        এর পরিবর্তে those বসে।
        <br /> 8. Noun এর repetition (পুনরাবৃত্তি) রোধ করার জন্য pronoun ব্যবহার
        হয়।
        <br /> যেমনঃ
        <br /> Q. Bina lost her pen. তিন্তু পরবর্তী pronoun গুলো যদি অস্পষ্ট হয়
        তবে তাকে স্পষ্ট করতে হবে। অর্থাৎ pronoun গুলোর দ্বারা পূর্বের কোন
        ব্যক্তি/বস্তুকে বুঝাচ্ছে সেই ব্যক্তি/বস্তুকে ঐ pronoun এর স্থলে বসে এবং
        সেগুলো বচন অনুসারে বসবে। আর এজন্য একবচন/বহুবচন বুঝতে হবে।
        <br /> যেমনঃ
        <br /> Singular It This That He/She Him/Her His her Plural they these
        those they them their
        <br />
        **Salam and Salma are siblings. They go to school by rickshaw because it
        is five kms away from his home. They go to school by rickshaw because
        the school is away from their home.
        <br /> *Traveling is a part of education. These means going from one
        place to another.
        <br /> Traveling is a part of education. This means going from one place
        to another.
        <br /> 9. ইতর প্রানী বা কোন বস্তুর পরিবর্তে it বা its ব্যবহার হয়।
        <br /> যেমনঃ
        <br /> *The dog is faithful to his master. The dog is faithful to its
        master.
        <br /> কিন্তু ইতর প্রানী বা বস্তু বা স্থান যদি বহুবচন হয় তবে
        they/them/their ব্যবহার হয়।
        <br /> যেমনঃ
        <br /> *On a summer day, a lion and a boar were fighting. On his
        stopping it saw vultures waiting to feast on the one which will die
        first.
        <br /> On a summer day, a lion and a boar were fighting. On their
        stopping, they saw vulture waiting to feast on the one which will die
        first.
        <br /> 10. Verb এবং preposition এর পরে pronoun এর objective case বসে।
        <br /> যেমনঃ
        <br /> *Bina's aunt took great care of their. <br /> Ans: Bina's aunt
        took care of them.
        <br /> *His teacher loved he very much. <br /> Ans: His teacher loved
        him very much.
        <br /> 11. বাক্যের Subject একবচন হলে object এবং possessive case ও একবচন
        হবে। আবার subject বহুবচন হলে obj/possessive বহুবচন হবে।
        <br /> যেমনঃ
        <br /> *My parents tried my best to bring me up well in my childhood.{" "}
        <br /> Ans: My parents tried their best to bring me well in my
        childhood.
        <br /> 12. বাক্যের শুরুতে That থাকলে this/it হয় কিন্তু বাক্যের শেষে
        that/those/these হয়।
        <br /> যেমনঃ
        <br /> That was 19th February and it Sadia's birthday.
        <br /> This was 19th February and it was Sadia's birthday. অর্থাৎ অতীতের
        কিছু বুঝাতে those/that বসে আর বর্তমান ও ভবিষ্যৎ বুঝাতে this/it ব্যবহার
        হয়। 13. Noun এর পূর্বে pronoun এর possessive case বসে/ possessive case
        এর পরে noun বসে। যেমনঃ *Milton took him M.A degree at the age of 24 and
        went to him father's house in the village of Horton. Milton took his M.A
        degree at the age of 24 and went to his father's house in the village of
        Horton. By Al.
        <br />
      </div>

      {/* <div className="">
        <h4 className="font-semibold">
          2. He/ him/ his দ্বারা পুলক বাচক কুবাযা কিন্তু she/ her/ her দ্বারা
          মহিলাকে বুঝায়।
        </h4>
        <p>
          ** Salam and Salma are siblings; Salam is in className five who was
          her sister, Salma, reads in className three.
        </p>

        <h4 className="font-semibold">
          3. বাকের Subject অনুসারে possessive case বসে।
        </h4>
        <p>**Salma answered that she knew his mother's name.</p>

        <p>
          <strong>1.</strong> Salam and Salma are siblings. They go to school by
          rickshaw because it is five kms away from their home.
        </p>
        <p>
          <strong>➔</strong> They go to school by rickshaw because the school is
          away from their home.
        </p>

        <p>
          <strong>2.</strong> Traveling is a part of education. This means going
          from one place to another.
        </p>
        <p>
          <strong>➔</strong> Traveling is a part of education. This means going
          from one place to another.
        </p>

        <p>
          <strong>9.</strong> ইতর প্রাণী বা কোন বস্তুর পরিবর্তে ইট/ its ব্যবহার
          হয়। <br />
          Example:
        </p>
        <p>
          <strong>➔</strong> The dog is faithful to its master.
        </p>
        <p>
          <strong>➔</strong> The dog is faithful to its master.
        </p>

        <p>
          <strong>10.</strong> Verb এবং preposition এর পরে pronoun এর objective
          case বসে। Example:
        </p>
        <p>
          <strong>➔</strong> Bina's aunt took great care of their.
        </p>
        <p>
          <strong>➔</strong> Bina's aunt took care of them.
        </p>
        <p>
          <strong>➔</strong> His teacher loved he very much.
        </p>
        <p>
          <strong>➔</strong> His teacher loved him very much.
        </p>

        <p>
          <strong>11.</strong> বাক্যের Subject এবং object এবং possessive case
          উদাহরণ:
        </p>
        <p>
          <strong>➔</strong> My parents tried my best to bring me up well in my
          childhood.
        </p>
        <p>
          <strong>➔</strong> My parents tried their best to bring me up well in
          my childhood.
        </p>

        <p>
          <strong>12.</strong> বাক্যে that/this/it বসে:
        </p>
        <p>
          <strong>➔</strong> That was 19th February and it was Sadia's birthday.
        </p>
        <p>
          <strong>➔</strong> This was 19th February and it was Sadia's birthday.
        </p>

        <p>
          <strong>13.</strong> Noun এর পূর্বে pronoun এর possessive case বসে:
        </p>
        <p>
          <strong>➔</strong> Milton took him M.A degree at the age of 24 and
          went to him father's house in the village of Horton.
        </p>
        <p>
          <strong>➔</strong> Milton took his M.A degree at the age of 24 and
          went to his father's house in the village of Horton.
        </p>
      </div> */}
    </div>
  );
};

export default Pronoun;
