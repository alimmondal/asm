function Punctuation() {
  return (
    <div className="h-full md:w-[85%] mx-auto px-3">
      <h1 className="py-20 text-2xl md:text-6xl text-center">
        Punctuation <br />
        <span className="text-center"> &</span> <br />
        Capitalization
      </h1>
      {/* punctuate */}
      <div className="dark:text-gray-300">
        <h3> Punctuation:</h3>
        {/* 1. Assertive, imperative and optative sentence */}
        <div className="mb-6">
          <p className="text-base">
            <span className="animateText font-bold">Rule: 1.</span> Assertive,
            imperative এবং optative sentence এর শেষে Full Stop (.) বসে।
            <br />
            Example: My you be happy.
          </p>
        </div>

        {/* 2. Interrogative sentence */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">
            2. Interrogative বাক্যের শেষে প্রশ্নবোধক (?) চিহ্ন বসে।
          </h2>
          <p className="text-base">Examples:</p>
          <ul className="list-disc ml-6">
            <li>Do you want to pass?</li>
            <li>What is he?</li>
          </ul>
        </div>

        {/* 3. Exclamatory sentence */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">
            3. Exclamatory বাক্যের শেষে এবং Interjection এর পরে Note of
            exclamation (!) বসে।
          </h2>
          <p className="text-base">Examples:</p>
          <ul className="list-disc ml-6">
            <li>Alas! I am undone.</li>
            <li>How fine it is!</li>
          </ul>
          <p className="text-base">
            Interjection এর Examples: Alas, Hurrah, Oh, Hush, Hi, etc.
          </p>
        </div>

        {/* 4. Say/Said, tell/told, replied, etc */}
        <div className="mb-6">
          <p className="text-base">
            4. Say/said, tell/told, reply(ied), ask(ed), pray(ed)/ wish(ed),
            exclaim(ed) with joy, order(ed), request(ed) এর পরে that/ If/
            whether না থাকলে এগুলোর পরে Comma (,) বসে।
            <br />
            কিন্তু এগুলোর পরে object থাকলে obj এর পরে কোমা (,) বসে। আবার এগুলোর
            পরে কমা বসলে পরের বাক্যের উপরে ইনভারটেড ("-") কমা বসে। ইনভারটেড
            ("-") কমা শেষে হলে বাক্যানুসারে (.)/ (?)/ (!) এর যেকোন একটি বসে।
            <br />
            যেমনঃ The man said to me, "Are you hungry"? ।<br />
            কিন্তু এগুলোর পরে that/ If/ whether/to থাকলে এর পরের বাক্যের শেষে
            ফুলস্টপ বসে <br />
            Examples:The man asked me if I was hungry.
          </p>
        </div>

        {/* 5. As, since, though, etc */}
        <div className="mb-6">
          <p className="text-base">
            5. As, since, though, although, if, when এর পরে যদি বাক্য থাকে তবে
            Comma (,) বসে। Example:
          </p>
          <p className="text-base">Though he was ill, he attended the class.</p>
        </div>

        {/* 6. So, yes, sir, sorry, hello */}
        <div className="mb-6">
          <p className="text-base">
            6. So, yes, sir, sorry, Hi, hello এগুলির পরে সাধারণত কমা (,) বসে।
            Example: Yes, I've understood. <br />
            কিন্তু সম্বোধনসুচক শব্দ যদি বাক্যের শুরুতে থাকে তবে এর পরে কোমা বসে,
            যদি বাক্যের শেষে থাকে তবে এর আগে কোমা বসে, যদি বাক্যের মাঝখানে থাকে
            তবে এর আগে এবং পরে কোমা বসে। যেমনঃ
            <ul className="list-disc ml-6">
              <li>Jerry, have you seen your mother?</li>
              <li> ave you seen your mother, Jerry?</li>
              <li> ave you seen your mother, Jerry?</li>
            </ul>
          </p>
        </div>

        {/* 7. Contractions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            7. Contractions (সংক্ষেপ) এর Apostrophe (')
          </h2>
          <p className="text-base">
            কোনো শব্দের বাদ অংশের স্থলে Apostrophe (') বসে। Example: I've (=I
            have) gone there.
          </p>
        </div>

        {/* 8. Possessive case */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">8. Possessive case</h2>
          <p className="text-base">
            Possessive case এর শেষে Apostrophe (') বসে। অর্থাৎ কোন নামার সঙ্গে S
            যুক্ত থাকলে সেই নাম S এর মাঝখানে উপরে কোমা বসে। <br />
            Example: Rahim's book.
          </p>
        </div>
      </div>
      {/* capitalisation */}
      <div className="my-8">
        <h1 className="text-2xl font-bold ">Capitalization</h1>

        {/* 1. Start of sentence */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            1. Sentence এর প্রথম শব্দ Capital Letter দিয়ে শুরু করতে হয়।
          </h2>
        </div>

        {/* 2. Proper Noun */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            2. Proper Noun এর প্রথম অক্ষর বড় হাতের হয়।
          </h2>
        </div>

        {/* 3. Days, months, names, etc. */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            3. দিনের নাম, মাসের নাম, উপাধি বা তাদের Abbreviation, উপাধি এবং
            উপাধির নাম, শিক্ষা প্রতিষ্ঠানের নামের প্রথম অক্ষর, ধর্মীয়
            প্রতিষ্ঠান বা ধর্মের নাম, জাতি এবং ধর্মীয় সম্প্রদায়ের নাম এবং
            ঐতিহাসিক ঘটনার প্রথম অক্ষর Capital Letter হয়। <br />
            Examples:
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Proper Noun:</strong> I met Raton yesterday.
            </li>
            <li>
              <strong>দিনের নাম:</strong> I came home on Monday.
            </li>
            <li>
              <strong>উপাধি বা পদবি:</strong> M.A./B.A.
            </li>
            <li>
              <strong>মাসের নাম:</strong> February.
            </li>
            <li>
              <strong>শিক্ষা প্রতিষ্ঠানের নাম:</strong> Dhanmondi Girls School.
            </li>
            <li>
              <strong>পবিত্র গ্রন্থের নাম:</strong> The Quran is a holy book.
            </li>
          </ul>
        </div>

        {/* 4. Pronoun and Interjection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            4. Pronoun "I" (আমি) এবং Interjection সর্বদা বড় হাতের হয়।
            <br />
            Example:
          </h2>
          <ul className="list-disc ml-6">
            <li>Oh, Good bless me.</li>
            <li>Interjection includes: O, Oh, Alas, Hurra.</li>
          </ul>
        </div>
      </div>

      {/* practice */}
      <div className="py-10">
        Exercise For Practice <br />
        Use capitals and punctuation marks where necessary in the following
        text.
        <br />
        <br />
        Exercise: 01 <br />
        arent you going to have any said i no i never eat asparagus i know there
        are people who dont like them the fact is that you ruin your palate by
        all the meat you eat she said. <br />
        <br />
        Answer: “Aren’t you going to have any?” said I. “No, I never eat
        asparagus.” “I know there are people who don’t like them. The fact is
        that you ruin your palate by all the meat you eat,” she said. <br />
        <br />
        Exercise: 02 <br />
        the teacher said to the girl do you think that honesty is the best
        policy yes sir i think so said the girl then learn to be honest from
        your childhood thank you sir said the girl may allah to bless you said
        the teacher <br />
        <br />
        Answer: The teacher said to the girl, “Do you think that honesty is the
        best policy?” “Yes, sir, think so,” said the girl. “Then learn to be
        honest from your childhood.” “Thank you sir,” said the girl. “May Allah
        bless you,” said the teacher. <br />
        <br />
        Exercise: 03 <br />
        Use capitals and punctuation marks where necessary in the following
        text. [Barishal Board-2020] <br />
        <br />
        do not worry about a few mistakes said the teacher you can learn a lot
        through your mistakes do we learn from our mistakes asked the boy.{" "}
        <br />
        <br />
        Answer: “Do not worry about a few mistakes,” said the teacher, “you can
        learn a lot through your mistakes.” “Do we learn from our mistakes?”
        asked the boy. <br />
        <br />
        Exercise: 04 <br />
        how is your father bilkis said mr rahman he is very well thank you
        bilkis replied i am glad to hear that he is in good health said mr
        Rahman <br />
        <br />
        Answer: “How is your father, Bilkis?” said Mr. Rahman. “He is very well.
        Thank you.” Bilkis replied. “I am glad to hear that he is in good
        health,” said Mr. Rahman. <br />
        <br />
        Exercise: 05 <br />
        hello old lady what are you doing said the princess i am spinning a yarn
        around the spindle replied the old woman. <br />
        <br />
        Answer: “Hello, old lady, what are you doing?” said the Princess. “I am
        spinning a yarn around the spindle,” replied the old woman. <br />
        <br />
        Exercise: 06 <br />
        would you please tell me one reason of air pollution yes the smoke from
        our household activities vehicles factories etc is mainly causing air
        pollution <br />
        <br />
        Answer: “Would you please tell me one reason of air pollution?” “Yes,
        the smoke from our household activities, vehicles, factories etc. is
        mainly causing air pollution. <br />
        <br />
        Exercise: 07 <br />
        have you heard the name of alexander asked mr ahmed no sir razu replied
        how strange it is said he will you tell me about alexander please well
        he was the great king of macedonia <br />
        <br />
        Answer: “Have you heard the name of Alexander?” asked Mr. Ahmed. “No
        sir.” Razu replied. “How strange it is!” said he. “Will you tell me
        about Alexander, please?” “Well, he was the great king of Macedonia.”{" "}
        <br />
        <br />
        Exercise: 08 <br />
        go to bed now mother said you can complete your assignment in the
        morning no mom ill finish it now <br />
        <br />
        Answer: “Go to bed now,” Mother said. “You can complete your assignment
        in the morning. “No, Mom! I’ll finish it now.” <br />
        <br />
        Exercise: 09 <br />
        why ard you late always try to attend the class regularly yes sir the
        student said to the teacher <br />
        <br />
        Answer: “Why are you late? Always try to attend the class regularly.”
        “Yes sir,” the student said to the teacher. <br />
        <br />
        Exercise: 10 <br />
        zaman can you tell me what i am teaching the teacher asked im sorry sir
        i can’t follow replied zaman you can’t because you are not attentive the
        teacher said <br />
        <br />
        Answer: “Zaman, can you tell me what I am teaching?” the teacher asked.
        “I’m sorry sir. I can’t follow,” replied Zaman. “You can’t because you
        are not attentive,” the teacher said. <br />
        <br />
        Exercise: 11 <br />
        don’t you have any relative here to stay with no sir so i need a
        transfer certificate to be admitted there <br />
        <br />
        Answer: “Don’t you have any relative here to stay with?” “No, sir. So, I
        need a transfer certificate to be admitted there.” <br />
        <br />
        Exercise: 12 <br />
        do you know me yes i know you from my childhood whats your name my name
        is sumon thank you a lot said mr jamal <br />
        <br />
        Answer: “Do you know me?” “Yes, I know you from my childhood.” “What’s
        your name?” “My name is Sumon.” “Thank you a lot.” said Mr. Jamal.{" "}
        <br />
        <br />
        Exercise: 13 <br />
        stop you are eating all our bread shouted the two rats I M not doing My
        best but I have told you. that its difficult said the monkey give us
        that little Piece said the rats this is My Piece havent I laboured a lot
        for you replied the Monkey how foolish we are believing you said the two
        rats <br />
        <br />
        Answer: “Stop! You are eating all our bread,” shouted the two rats. “I’m
        doing my best, but I have told you that it’s difficult,” said the
        monkey. “Give us that little piece.” said the rats. “This is my piece.
        Haven’t I laboured a lot for you?” replied the Monkey..”How foolish we
        are believing you!” said the two rats. <br />
        <br />
        Exercise: 14 <br />
        whats your programme after the examination asked ratul nabil said i
        havent yet decided can you suggest any lets go on a picnic said ratul
        what an excellent idea <br />
        <br />
        Answer: “What’s your programme after the examination?” asked Ratul.
        Nabil said, “I haven’t yet decided, Can you suggest any?” “Let’s go on a
        picnic,” said Ratul. “What an excellent idea!” <br />
        <br />
        Exercise: 15 <br />
        in a certain school a student, once found a one hundred taka note in the
        play ground he took it to his teacher what shall i do with it asked the
        teacher <br />
        <br />
        Answer: In a certain school a student once found a one hundred taka note
        in the play ground. He took it to his teacher. “What shall I do with
        it?” asked the teacher. <br />
        <br />
        Exercise: 16 <br />
        the teacher said to me dont you like to practise english its an
        important subject and you should be more careful about it <br />
        <br />
        Answer: The teacher said to me, “Don’t you like to practise English?
        It’s an important subject and you should be more careful about it.”{" "}
        <br />
        <br />
        Exercise: 17 <br />
        how daring you are to wake me up the lion roared i shall kill you for
        that please let me go the mouse cried i did not mean to wake you up{" "}
        <br />
        <br />
        Answer: “How daring you are to wake me up?” the lion roared. “I shall
        kill you for that.” “Please, let me go”, the mouse cried.” I did not
        mean to wake you up.” <br />
        <br />
        Exercise: 18 <br />
        my sons listen to me said rahman an old farmer a great treasure lies
        hidden in the land there i am going to leave it for you the sons asked
        how shall we find it <br />
        <br />
        Answer: “My sons, listen to me,” said Rahman, an old farmer. “A great
        treasure lies hidden in the land there. I am going to leave it for you.”
        The sons asked, “How shall we find it?” <br />
        <br />
        Exercise: 19 <br />
        why don’t you attend classes regularly the teacher said to the boy you
        cannot expect good résult unless you attend classes be regular in class.{" "}
        <br />
        <br />
        Answer : Why don’t you attend classes regularly?” the teacher said to
        the boy. “You can’t expect good result unless you attend classes. Be
        regular in class.” <br />
        <br />
        Exercise: 20 <br />
        oh my lord please dont kill the child said the first woman to the king
        solomon let her have it king solomon said to them now everything is
        clear to me pointing the first woman he said to the servant give her the
        child she is the mother of the baby. <br />
        <br />
        Answer: “Oh my lord! Please don’t kill the child,” said the first woman
        to the king Solomon. “Let her have it,” King Solomon said to them. “Now
        everything is clear to me.” Pointing the first woman he said to the
        servant, “Give her the child. She is the mother of the baby.” <br />
        <br />
        Exercise: 21 <br />
        thomas alva edison a great scientist was born in 1847 in ohio america as
        a little boy he was very inquisitive he always wanted to know how things
        were done very early in life he showed that he was full of curiosity a
        quality which is so important to inventors. <br />
        <br />
        Answer: Thomas Alva Edison, a great scientist was born in 1847 in Ohio,
        America. As a little boy he was very inquisitive. He always wanted to
        know how things were done. Very early in life he showed that he was full
        of curiosity, a quality which is so important to inventors. <br />
        <br />
        Exercise: 22 <br />
        why are you putting up the food in your pocket why don’t you eat asked
        the noble man i am doing the right thing replied sheikh saadi <br />
        <br />
        Answer: “Why are you putting up the food in your pocket? Why don’t you
        eat?” asked the noble man. “I am doing the right thing”, replied Sheikh
        Saadi. <br />
        <br />
        Exercise: 23 <br />
        the lion roared how dare you wake me up ill kill you the mouse cried
        please let me go i didn’t mean to wake you up <br />
        <br />
        Answer: The lion roared, “How dare you wake me up? I’ll kill you.” The
        mouse cried, ” Please, let me go. I didn’t mean to wake you up.” <br />
        <br />
        Exercise: 24 <br />
        who are jolly those who have. sound health are jolly sound mind lies in
        sound body minds become jolly when our life is filled with pleasure.{" "}
        <br />
        <br />
        Answer: Who are jolly? Those who have sound health are jolly. Sound mind
        lies in sound body. Minds become jolly when our life is filled with
        pleasure. <br />
        <br />
        Exercise: 25 <br />
        my dear mother your letter is just to hand it seems to me that you are
        anxious for me why you need not think about me <br />
        <br />
        Answer: My dear mother, your letter is just to hand. It seems to me that
        you are anxious for me. Why? You need not think about me. <br />
        <br />
        Exercise: 26 <br />
        give me a few grains of corns i am dying of hunger said the grasshopper
        but what did you do in the summer didn’t you store any grain the ant
        remarked to i was too busy in singing. <br />
        <br />
        Answer: “Give me a few grains of corns. I am dying of hunger,” said the
        grasshopper. “But what did you do in the summer? Didn’t you store any
        grain?” the ant remarked to. “I was too busy in singing.” <br />
        <br />
        Exercise: 27 <br />
        are you ill he said coldly no i said then why are you sitting when all
        others are working go out at once and give them a hand <br />
        <br />
        Answer: “Are you ill?” he said coldly. “No”, I said. “Then why are you
        sitting when all others are working? Go out at once and give them a
        hand. <br />
        <br />
        Exercise: 28 <br />i was born in a village near tangail a small river
        flows beside the village the villagers bathe in the river and catch fish
        how happy they are what they want is peace <br />
        <br />
        Answer: I was born in a village near Tangail. A small river flows beside
        the village. The villagers bathe in the river and catch fish. How happy
        they are! What they want is peace. <br />
        <br />
        Exercise: 29 <br />
        did people use stamps in those days asked rafiq yes answered mr jamal
        the first stamps were used in 1840 are they easy to get now asked rafiq
        they are very difficult to get his uncle replied <br />
        <br />
        Answer: “Did people use stamps in those days?” asked Rafiq. “Yes,”
        answered Mr. Jamal. “The first stamps were used in 1840.” “Are they easy
        to get now?” asked Rafiq. “They are very difficult to get,” his uncle
        replied. <br />
        <br />
        Exercise: 30 <br />
        after supper when I began to set out lucy trembled in fear and said
        alfred dear are you quite sure that the letter really came from your
        chief I laughed told her not to be afraid and hurried out of the room
        and walked down the street. <br />
        <br />
        Answer: After supper when I began to set out, Lucy trembled in fear and
        said, “Alfred dear, are you quite sure that the letter really came from
        your chief”?” I laughed, told her not to be afraid and hurried out of
        the room and walked down the street. <br />
        <br />
        Exercise: 31 <br />
        the man said to me where are you going i am going to school said i did
        you go to school yesterday no i replied why didn’t you go i was very
        busy said i <br />
        <br />
        Answer: The man said to me, “Where are you going?” “I am going to
        school.” said I. “Did you go to school yesterday?” “No,” I replied. “Why
        didn’t you go?” “I was very busy.” said I. <br />
        <br />
        Exercise: 32 <br />
        the teacher said to the boy where are you going now i am going to school
        said the boy did you go to school yesterday no the boy replied why did
        you not go i was suffering from fever said the boy <br />
        <br />
        Answer: The teacher said to the boy, “Where are you going now?” “I am
        going to school,” said the boy. “Did you go to school yesterday?” “No,”
        the boy replied. “Why did you not go?” “I was suffering from fever,”
        said the boy. <br />
        <br />
        Exercise: 33 <br />
        robert bruce the king of scotland was defeated at a war and failed to
        regain his country’s freedom several times naturally he was in a very
        dejected mood sitting in his hide out he lost himself in deep thought.{" "}
        <br />
        <br />
        Answer: Robert Bruce, the king of Scotland, was defeated at a war and
        failed to regain his country’s freedom several times. Naturally he was
        in a very dejected mood. Sitting in his hide out, he lost himself in
        deep thought. <br />
        <br />
        Exercise: 34 <br />
        the king said what harm did I do then that you should seek to take my
        life with your own hand you killed my father and my two brothers the
        young man replied. <br />
        <br />
        Answer: The King said, “What harm did I do then that you should seek to
        take my life with your own hand?” “You killed my father and my two
        brothers,” the young man replied. <br />
        <br />
        Exercise: 35 <br />
        why are you going to barisal said father i want to buy some important
        books said saad do you need money yes father don’t go alone as time is
        not going well. <br />
        <br />
        Answer: “Why are you going to Barisal?” said father. “I want to buy some
        important books,” said Saad. “Do you need money?” “Yes, father.” “Don’t
        go alone as time is not going well.” <br />
        <br />
        Exercise: 36 <br />
        once my mother said to me who came to you my friend Rafiq mom she asked
        what did he want i said his mother is ill he needs some money i have
        given him five hundred taka my mother said wonderful. <br />
        <br />
        Answer: Once my mother said to me, “Who came to you?” “My mother friend
        Rafiq, Mom.” She said, “What did he want?” I said, “His mother is ill.
        He needs some money. I have given him five hundred taka.” My mother
        said, “Wonderful!” <br />
        <br />
        Exercise: 37 <br />
        bangladesh is a small country with a population of about sixteen crores
        she can hardly make headway so we should work hard to keep pace with the
        rest of the world <br />
        <br />
        Answer: Bangladesh is a small country. With a population of about
        sixteen crores, she can hardly make headway. So, we should work hard to
        keep pace with the rest of the world. <br />
        <br />
        Exercise: 38 <br />
        is there anybody here who has ever crossed a river by a boat i have
        teacher i clearly remember what happened in that journey said Jamal.{" "}
        <br />
        <br />
        Answer: “Is there any anybody here who has ever crossed a river by a
        boat?” “I have, teacher. I clearly remember what happened in that
        Journey,” said Jamal.
      </div>
    </div>
  );
}

export default Punctuation;
