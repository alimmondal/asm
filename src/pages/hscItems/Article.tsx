function Article() {
  return (
    <div className="h-full lg:w-1/2 mx-auto">
      <div className="px-5 w-full flex items-center justify-center py-20">
        <div className="relative w-[600px] h-[200px] bg-black text-white flex items-center justify-center text-2xl md:text-6xl font-bold rounded-2xl overflow-hidden">
          <span className="text-white">Article</span>
          {/* <img src="/dialogTitle.png" alt="" /> */}
          <div className="effect"></div>
        </div>
      </div>
      <div className="h-full px-4">
        <div className=" pb-10">
          <p className="pb-5">
            <strong>Definition of Article: </strong> An article in English
            grammar is a word that precedes a noun to indicate whether the noun
            is specific or general.
            <br />
            There are three articles in English: one definite article, "the,"
            and two indefinite articles, "a" and "an."
          </p>

          <h3>
            The <strong>এর ব্যবহার</strong>:
          </h3>
          <p className="pt-5">
            <span className="animateText font-bold">Rule: 1. </span> <br />
            শুন্যস্থানের একটি বা দুটি শব্দের পরে of থাকলে শুন্যস্থানে the বসে ।
            অথবা দুটি Noun যদি of দ্বার যুক্ত হয় তবে প্রথমটির আগে ...the... বসে।
            <br />
            যেমনঃ <br />
            I like ____ rice of Dinajpur. <br />I like <strong>the</strong> rice
            of Dinajpur. <br />
            ব্যতিক্রমঃ a lot of, a number of, a great deal of .
          </p>
          <p className="pt-5">
            <span className="animateText font-bold">Rule: 2. </span> <br />
            একই শব্দ একাধিক বার ব্যবহার হলে পরের বার গুলোর আগের শুন্যস্থানে The
            বসে। <br />
            যেমনঃ <br />
            I have a pen. ____ pen is costly. <br />I have a pen.
            <strong>the</strong> pen is costly.
          </p>
          <p className="pt-5">
            <strong>3. </strong>
            শুন্যস্থানের পরের শব্দের শেষে <strong>s/es/est</strong> থাকলে বা
            শব্দটি বহু বচন হলে শুন্যস্থানে The বসে। <br />
            যেমনঃ <br />
            I bought all ____ books. <br />I bought all <strong>
              the
            </strong>{" "}
            books.
          </p>

          <p className="pt-5">
            <strong>4. </strong> শুন্যস্থানের আগে Both, All, on/ Preposition
            থাকলে শুন্যস্থানে The বসে। <br />
            যেমনঃ I've read all ____ book. <br />
            I've read all <strong>the</strong>
            book.
            <br />
            <br />
            Note: Preposition এর পরে একটি বস্তু বুঝালে (the) । অদৃশ্য কিছু
            বুঝালে (X) । বাকি ক্ষেত্রে (a/n) বসে। <br />
            যেমনঃ <br />
            Q. On __ day of examination, he looked very anxious. <br />
            👉 On the day of examination, he looked very anxious.
          </p>
          <p className="pt-5">
            <strong>5. </strong>
            শুন্যস্থানের পরে ক্রমিক নাম্বার/ সংখ্যা/ সংখ্যাবাচক শব্দ থাকলে,
            ধর্মীয় জিনিসের নাম, নদীর নাম, সাগরের নাম,পর্বত শ্রেণী নাম,ঋতুর নাম,
            তারিখ, চাঁদ, সূর্য, পৃথিবী, ঐতিহাসিক স্থান/ প্রতিষ্ঠান থাকলে
            শুন্যস্থানে The বসে। <br />
            যেমনঃ <br />
            _____ Padma is a big river. <br />
            <strong>The</strong> Padma is a big river.
          </p>
          <p className="pt-5">
            6. Subject/Object এর পরে Who, Which, Where, Whom থাকলে সেই
            Subject/Object এর আগে The বসে। যেমনঃ
          </p>
          {/* Use of Cross */}
          <h3 className="pt-5">
            <strong> X (ক্রস) এর ব্যবহার</strong>:
          </h3>

          <p className="pt-5">
            <strong>1. </strong> Proper noun, uncountable noun এবং Verb এর আগে X
            (ক্রস) বসে। <br />
            যেমনঃ <br />
            I live in ...... Tilakpur. <br />I live in ...<strong>x</strong>...
            Tilakpur. <br />
            ব্যতিক্রমঃ USA, UK, UNO, UNICEF, USSR- এগুলোর পূর্বে The বসে।
          </p>
          <p className="pt-5">
            <span className="animateText font-bold">Rule: 2. </span>
            শুন্যস্থানের পরে এবং পূর্বে Possessive case এবং Demonstrative
            Pronoun থাকলে শুন্যস্থানে X (ক্রস) বসে। <br />
            যেমনঃ <br />
            Q. I wanted his ...... books. <br />
            👉I wanted his ... <strong>x</strong>... books. <br />
            Q. I wanted this ...... book. <br />
            👉I wanted this ... <strong>x</strong>... books.
            <br />
            <br />
            Note: <br />
            Possessive case: My, his, her, our, their, your, its, Rohim's <br />
            Demonstrative Pronoun: This, these, that, those.
          </p>
          <p className="pt-5">
            <strong>3. </strong> A / An / The + (Adjective) + ....... + Noun
            এভাবে ব্যবহার হলে শুন্যস্থানে X (ক্রস) বসে।
            <br />
            যেমনঃ <br />
            He is an honest ...... man. <br />
            He is an honest ...<strong>x</strong>... man.
          </p>

          <h3 className="pt-5">
            <strong>A, An এর ব্যবহার:</strong>
          </h3>
          <p className="pt-5">
            <strong>1.</strong> শুন্যস্থানের পরের শব্দটি Vowel (a, e, i, o, u)
            দ্বারা শুরু হলে শুন্যস্থানে An বসে।
            <br />
            যেমনঃ Take <strong>an</strong> umbrella.
          </p>
          <p className="pt-5">
            <strong>2. কিন্তু</strong> Vowel (a, e, i, o, u) দ্বারা শুরু শব্দের
            উচ্চারণ যদি ইউ (u) বা ওয়া এর মত হয় তবে সেই শব্দের আগের/ পূর্বের
            শুন্যস্থানে (An না বসে) A বসে। <br />
            যেমনঃ <br />
            He reads in ____ university. <br />
            He reads in <strong> an </strong> university.
          </p>
          <p className="pt-5">
            <strong>3.</strong> শুন্যস্থানের পরের শব্দটি Consonant দ্বারা শুরু
            হলে শুন্যস্থানে A বসে। <br />
            যেমনঃ <br />
            I saw ____ cow. <br />I saw <strong>a</strong> cow.
          </p>
          <p className="pt-5">
            <strong>4. </strong>কিন্তু H দ্বারা শুরু শব্দে H এর উচ্চারণ যদি না
            হয় বরং H এর পরে থাকা Vowel এর উচ্চারণ যদি হয় তবে সেই H দ্বারা শুরু
            শব্দের আগে/পূর্বের শুন্যস্থানে (A না বসে) An বসে। <br />
            যেমনঃ <br />
            He is _____ honest man. <br />
            He is <strong>an</strong> honest man.
          </p>
          <p className="pt-5">
            <strong>5. </strong> Consonant দ্বারা শুরু সংক্ষিপ্ত শব্দের উচ্চারণ
            যদি Vowel এর মত হয় তবে সেই শব্দের আগে/পূর্বের শুন্যস্থানে An বসে।
            <br />
            যেমনঃ <br />
            He is ____ MBBS. <br />
            He is <strong>an</strong> MBBS. <br />
            He is _____ FRCP. <br />
            He is <strong>an</strong> FRCP. <br />
            <br />
            কিন্তু Vowel এর মত উচ্চারণ না হলে A বসে। <br />
            যেমনঃ <br />
            He is ____ BA. <br />
            He is <strong>a</strong> BA.
          </p>
        </div>
      </div>

      {/* Exercise */}
      <div className="py-10 px-5">
        <h3 className="">Practice</h3>
        <br />
        <br />
        1. Filling the blanks in the following text with articles (a/an/the) as
        necessary. Some of the blanks are not required an article. Put a cross
        (x) in those blanks. [Dhaka Board-2019]
        <br /> <br />
        (a)_____ parliament house of Bangladesh is (b)_____exquisitely designed
        building. In fact, it is (c)_____wonder of modern architecture and
        technology. It is one of (d)_____largest and most spectacular parliament
        buildings in (e)_____world. It is (f)_____ highly expensive building.
        (g)_____maintenance cost of the parliament house is about 50 million
        taka per year. An American architect (h) _____Louis I Khan designed this
        (i) _____building. Everyday many (j)_____visitor comes to visit the
        building. <br /> <br />
        2. The national flag represents (a)_____independence of (b)_____country.
        Ours is (c)_____independent country. Hence, we have a national flag
        symbolizing our independence. (d)_____ cloth of a national flag is made
        of (e)_____ cotton, silk or linen. Our flag is rectangular in shape
        maintaining (f)_____ ratio of its length and breadth 10: 6, There are
        different sizes of national flag. The background of our flag is green
        which symbolizes our life and energy. In the middle point of the flag
        there is (g)_____blood-red circle representing our hard struggle and
        blood-shed. (h) - red circle also represents the heroic blood-shed of
        (i)_____ martyrs. The national flag plays (j)_____vital role in the life
        of a nation. <br /> <br />
        3. Childhood or boyhood is (a)_____ man's formative period. During this
        period (b)_____ child receives training from its mother. (c)- mother's
        tender heart always looks to (d)_____welfare and well-being of
        (e)_____child. If during this period (f)_____mother tries to bring
        (g)_____child up carefully and according to her (h)_____ best ideas
        (i)_____child is sure to grow with its superiors, parents and teachers
        and love (j)_____ all irrespective of caste, creed and color. <br />{" "}
        <br />
        4. The industry is (a)_____key to success in our life.
        (b)_____industrious can prosper in life. (c)_____ man who does not
        undertake (d)_____ hard work can never go (e)_____long way in (f)_____
        world. Many (g)_____man is not aware of (h)_____ significance of
        (i)_____diligence for which. they cannot reap (j)_____benefit of
        success.hose blanks.
        <br /> <br />
        5. An honest man is true to his (a)_____ words. He does not deviate from
        (b)_____ path of honesty. He knows that true happiness consists of
        (c)_____ honesty. He does not fall victim to (d)_____greed. He does not
        hanker after (e)_____worldly property. (f)_____honest man abstains from
        corruption. He does not mix with (g)_____corrupted people. He is
        (h)_____man who tries to get pleasure from good deeds. (i)_____greed for
        wealth does not touch him. People should follow the path of
        (j)_____honest people of the society.
        <br />
        <br />
        6. What is patriotism? It is (a)_____ noble virtue. It inspires (b)_____
        man to dedicate his life to the freedom and development of his
        (c)_____country. (d)_____man without patriotism is no better than
        (e)_____ beast. A true patriot is honored by (f)_____ his countrymen. He
        thinks for (g)_____betterment of his country. On (h)_____contrary,
        (i)_____ unpatriotic man thinks only of his interest. Those who die for
        (j)_____country are true patriots.
        <br />
        <br />
        7. I have (a)_____uncle who has just retired from (b)_____army. He used
        to be (c)_____ABI agent, and everybody says he has been an honest man
        all his life. As a child, I loved him for his stories. He once told me
        that he met (d)_____one-eyed alien from (e)_____ space. (f)_____ alien
        did not need any oxygen. And it did not have (g)_____ nose. I now
        understand that it was (h)_____ hard story to believe. I am not sure he
        was telling me (i)_____truth. Maybe he is not so (j)_____honest, after
        all.
        <br />
        <br />
        8. Mr. Bright is (a)_____ European. As he is (b)_____Englishman, he
        knows (c)-- English well. He is (d) – honorable to everyone though he is
        (e)_____ one-eyed man. One day having (f)_____SOS, he went to
        (g)_____UŠA. His brother, Johnson living there joined (h)_____Army last
        year. He is (i)_____younger of the two brothers. When Mr. Bright met his
        brother, he could not but shed (j)_____tears [Barishal Board- 2019;
        Jashore Board-2015] Mr. Bright is (a)_____ European. As he is
        (b)_____Englishman, he knows (c)-- English well. He is (d) – honorable
        to everyone though he is (e)_____ one-eyed man. One day having
        (f)_____SOS, he went to (g)_____UŠA. His brother, Johnson living there
        joined (h)_____Army last year. He is (i)_____younger of the two
        brothers. When Mr. Bright met his brother, he could not but shed
        (j)_____tears
        <br />
        <br />
        HSC Articles 2018 All Board Questions With Answer <br />
        9. Bangladesh is (a)_____independent country. We won freedom on
        (b)_____December 16. 1971. This freedom was won as (c)_____result of
        great sacrifice. (d)_____great many people laid down their lives for
        (e)--freedom of the country. (f)_____ man who loves his country is
        (g)-patriot. (h) - real patriot loves his country more than his life.
        Being patriots, we all should try to make (i)_____effort for the welfare
        and (j)_____progress of our motherland.
        <br />
        <br />
        10. William Shakespeare was born on April 23, 1564 in (a)_____village of
        Stratford-on-Avon in (b)_____country of Warwickshire. His father John
        Shakespeare was (c)_____farmer's son who came (d)_____ Stratford about
        1531 and began to prosper as (e)_____ trader in corn, wheat, leather and
        agricultural products. His mother Mary Arden was (f)_____daughter of
        (g)_____prosperous farmer, descended from (h)_____old family of mixed
        Anglo-Saxon and Norman blood. It is generally believed that neither
        (i)_____poet's mother nor his father could read or write. In 1582,
        Shakespeare married Anne Hathaway, the daughter of (j)_____peasant
        family. She was eight years older than Shakespeare
        <br /> <br />
        9. Bangladesh is (a)_____independent country. We won freedom on
        (b)_____December 16. 1971. This freedom was won as (c)_____result of
        great sacrifice. (d)_____great many people laid down their lives for
        (e)--freedom of the country. (f)_____ man who loves his country is
        (g)-patriot. (h) - real patriot loves his country more than his life.
        Being patriots, we all should try to make (i)_____effort for the welfare
        and (j)_____progress of our motherland.
        <br /> <br />
        10. William Shakespeare was born on April 23, 1564 in (a)_____village of
        Stratford-on-Avon in (b)_____country of Warwickshire. His father John
        Shakespeare was (c)_____farmer's son who came (d)_____ Stratford about
        1531 and began to prosper as (e)_____ trader in corn, wheat, leather and
        agricultural products. His mother Mary Arden was (f)_____daughter of
        (g)_____prosperous farmer, descended from (h)_____old family of mixed
        Anglo-Saxon and Norman blood. It is generally believed that neither
        (i)_____poet's mother nor his father could read or write. In 1582,
        Shakespeare married Anne Hathaway, the daughter of (j)_____peasant
        family. She was eight years older than Shakespeare.
        <br />
        <br />
        11. Patriotism is (a)_____ noble virtue. It inspires (b)_____ man to
        dedicate his life to the freedom and development of his (c)_____country.
        (d)_____man without patriotism is no better than (e)_____ beast. A true
        patriot is honored by (f)_____ his countrymen. He thinks for
        (g)_____betterment of his country. On (h)_____contrary, (i)_____
        unpatriotic man thinks only of his own interest. Those who die for
        (j)_____country are true patriots.
        <br />
        <br />
        12. Truthfulness is (a)_____ greatest of all (b)_____ virtues which make
        (c)_____ man really great. If we do not cultivate the habit of speaking
        (d)_____ truth, we cannot command (e)_____ confidence of others.
        (f)_____ might succeed once or twice by telling (g)_____ lie but it
        never brings a good result. (h)_____lie never lies hidden. Today or
        tomorrow it comes to light. Then (i)_____ real character of ()_____ liar
        is revealed and nobody believes him.
        <br />
        <br />
        13. What (a)_____ surprise it was! Robin got (b)_____ first prize in
        (c)_____ competition. I was (d)_____really amazed at his success. Of
        course he was trained by (e)_____ expert coach for (f)_____ time. He
        always obeyed (g)_____instructions given by (h)_____ coach. Even he was
        not found outside (i)_____ camp during practice session. (j)_____boy
        like him is always appreciated by the people.
        <br /> <br />
        14. The process of learning may very well be compared to
        (a)_____undertaking of a journey. The learner or the student is
        (b)_____journey taker or traveller. Just as a traveller has to undergo
        all (c)_____ botherations of buying his ticket, booking his baggage,
        showing up his ticket, taking care of things, boarding a train or a bus
        and suffering every other item of (d)_____tedious journey to reach his
        (e)_____destination, so a learner has to mange his learning affair
        himself. It is (f)_____labourious process and no one can do (g)_____
        labour for him and no one else can undertake (h)_____journey for
        another. There is no trick or magic in it. It cannot be acquired at
        second hand. Just as a traveler, he can enquire here and there in case
        of doubt and difficulty. However, the journey is (i)_____passenger's own
        concern. In (j)_____same way, learning is entirely the concern of the
        student or the learner.
        <br />
        <br />
        15. In (a)_____last 25 years (b)_____world has lost one-third of its
        natural wealth, according to (c)-- international conservation
        organisation world wild fund. (d)_____earth's forest, wetlands, seas and
        coasts are in (e)_____worse state today than they were before. Forests
        are cut down. Moreover, they are being burnt indiscriminately resulting
        in (f)_____ increase in carbon dioxide and ultimately in (g)_____water
        level rising as a consequence of global warming. It is anticipated that
        (h)_____ overwhelming environmental (j) _____catastrophe.
        <br />
        <br />
        16. 'Rifle Roti Aurat' is (a)_____ first Bengali novel on (b)_____
        Liberation War of Bangladesh. This unique novel is written by Anwar
        Pasha, (c)_____professor of Bangla department at Dhaka University. He
        wrote this (d) _____ novel between April and June in 1971. The main
        characters in this novel is Sudipta Shaheen who shares his dream of
        (e)_____ new country. Professor Anwar Pasha was picked up from his Dhaka
        University residence two days before (f)_____victory. Sensing imminent
        defeat, the member of (g)_____ notorious killing squad Al-Badr picked up
        (h)_____ novelist Anwar Pasha and many other intellectuals and brutally
        killed them. According to. (i)_____Banglapedia, around 991 academics, 13
        journalists, 49 physicians, 42 lawyers, and 16 other intellectuals were
        killed during (j)_____Liberation War of Bangladesh
        <br />
        <br />
        17. Robi is (a)_____indigent boy. He comes of (b)_____needy family. But
        he is diligent and upright. He has (c)_____ unique vision for life. He
        believes that honesty is (d) _____ key to success. Moreover, he has
        (e)_____deep sense of patriotism. Being imbued with these ideals, he
        shapes (f)_____dream of his life. From (g)- dawn to dusk, he works hard.
        He never squanders time, wastes money and dissipates (h)_____energy. His
        only aim is to reach (i)_____apex of success. We need (j)_____ideal boy
        like Robi.
        <br />
        <br />
        18. Truthfulness is (a)_____ greatest of all (b)_____virtues which makes
        (c)_____person really great. If we do not cultivate (d)_____ habit of
        speaking (e)_____truth, we cannot command (f)_____ trust of others. The
        man whom nobody believes can never be famous in life. It may be that we
        may succeed once or twice by telling (g)_____lie but it never brings
        about (h)_____ good result. A lie never lies hidden. Today or tomorrow
        it comes to light. Then (i)_____ real character of (j)_____liar is
        revealed and nobody believes him.
        <br />
        <br />
        19. Michael Madhusudan Dutt was (a)_____ popular 19th century Bengali
        poet and dramatist. He was born in (b)_____ in Sagardari on the (c)_____
        bank of (d)_____ Kopotaksho river, (e)_____ village in Keshobpur
        Upazilla under Jessore district. From (f)_____early age, Dutt aspired to
        be (g)_____Englishman in form and manner. Though he was born in
        (h)_____sophisticated Hindu family, he took Christianity arousing
        (i)_____ anger of his family. He contributed much to (j)_____development
        of Bengali literature.
        <br /> <br />
        20. Every student wants to do better in (a)_____examination. But it is
        not (b)_____easy work. (c)_____ student has to do something for this.
        From (d)_____very beginning he must be serious. He should read
        (e)_____texts again and again. He must not memorize (f)_____ answer
        without knowing the meaning. He must not make notes from (g)_____common
        source. He should have a good (h)_____command over English. By doing all
        these things (i)_____student can hope to make a good (j)_____result
      </div>
    </div>
  );
}

export default Article;
