const Narration = () => {
  return (
    <div className="max-w-7xl">
      <div style={{ width: "80%", margin: "0 auto", overflowX: "auto" }}>
        <h1>Narration</h1>

        <div className="rule-section">
          <h2>Rule-1</h2>
          <p>
            সাধারণত Reporting Verb যদি V2 থাকে তাহলে Reported Speech এর Verb/
            helping verb পরিবর্তন হয় বাঁ Past Tense হয়। যেমন:
          </p>

          <p>Am, is, are - থাকলে - Was, Were হয়</p>
          <p>Was, were - থাকলে - had been হয়,</p>
          <p>Have, has - থাকলে - had হয়,</p>
          <p>Shall, will - থাকলে - would হয়,</p>
          <p>Shall - থাকলে - Should হয়,</p>
          <p>Can - থাকলে - could হয়,</p>
          <p>may - থাকলে - might হয়,</p>
          <p>Do not, does not - থাকলে - did not হয়,</p>

          <p>
            <strong>Note:</strong> উপরের সাহায্যকারি Verb গুলোর পরে মুল Verb
            থাকলে সেই Verb এর কোন পরিবর্তন হয় না । যদি উপরের সাহায্যকারি Verb
            গুলো না থাকে তাহলে মুল Verb এর পরিবর্তন হয়। যেমন:
          </p>
          <p>V1 - থাকলে V2 হয়,</p>
          <p>V2 - থাকলে V2 হয় অথবা had + V3 হয়,</p>
          <p>
            <strong>Note:</strong> দ্বিতীয় বাক্যের (Reported Speech) ing যুক্ত
            Verb এবং to এর পরে Verb এর কোন পরিবর্তন হয় না।
          </p>
        </div>

        {/* Rule-2  */}
        <div className="rule-section">
          <h2>Rule-2</h2>
          <p>
            দ্বিতীয় বাক্যের (অর্থাৎ Reporting Speech এর) Subject/ Pronoun এর
            পরিবর্তন হয়। Subject যদি I, We, you হয় তবে পরিবর্তন হবে। I/We প্রথম
            বাক্যের Subject অনুসারে পরিবর্তন হবে। You প্রথম বাক্যের
            Object-অনুসারে পরিবর্তন হয়। যেমন:
            <br />
            Q. He said to me, "I have done my duty". <br />= He said to me{" "}
            <strong>that</strong> he
            <strong>had</strong> done<strong>his</strong> duty".
          </p>
          <p>
            Subject/ Pronoun এর পরিবর্তন বুঝার জন্য নিচের টেবিলটি মনে রাখতে হবেঃ
          </p>
        </div>

        {/* pronoun table  */}
        <div className="tableSection">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Object</th>
                <th>Possessive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>me</td>
                <td>my</td>
              </tr>
              <tr>
                <td>We</td>
                <td>us</td>
                <td>our</td>
              </tr>
              <tr>
                <td>You</td>
                <td>you</td>
                <td>your</td>
              </tr>
              <tr>
                <td>He</td>
                <td>him</td>
                <td>his</td>
              </tr>
              <tr>
                <td>She</td>
                <td>her</td>
                <td>her</td>
              </tr>
              <tr>
                <td>They</td>
                <td>them</td>
                <td>their</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* sentence Rules - Part  */}
        <div className="">
          <p>Narration Rules - Part 2</p>

          <div className="rule-section">
            <h2>বাক্য পরিবর্তন:</h2>
            <h2>Assertive Sentence:</h2>
            <p>
              চিনার উপায়ঃ <br />
              ** দ্বিতীয় বাক্যটি Subject দ্বারা শুরু হয় এবং <br />
              ** বাক্যের শেষে full stop থাকে।
            </p>
            <p>পরিবর্তনের নিয়ম:</p>
            <p>
              ** সাধারণত প্রথম বাক্যের (Reporting Verb এর) Say বা Said এর
              পরিবর্তন হয় না তবে Said to এর পরিবর্তে tell বা told করা যায়।{" "}
              <br />
              ** আর দ্বিতীয় বাক্যের Subject এবং Verb এর নিয়ম অনুযায়ী পরিবর্তন
              হবে। <br />
              ** দুটি বাক্যের মাঝখানে that বসে।
            </p>
          </div>

          <div className="rule-section">
            <h2>Interrogative Sentence:</h2>
            <p>
              চিনার উপায়ঃ
              <br />
              ** দ্বিতীয় বাক্যটি Wh/ helping verb দ্বারা শুরু হয় এবং <br />
              ** বাক্যের শেষে প্রশ্নবোধক চিহ্ন থাকে (?)।
            </p>
            <h3>পরিবর্তনের নিয়ম:</h3>
            <p>
              (i) প্রথম বাক্যের say, said to, said, said to এর পরিবর্তে
              ask/asked হবে।
            </p>
            <p>
              (ii) দ্বিতীয় বাক্যটি Wh দ্বারা শুরু হলে দুই বাকের মাঝখানে কিছু
              বসে না। <br />
              ** কিন্তু দ্বিতীয় বাক্যটি helping verb দ্বারা শুরু হলে দুই বাকের
              মাঝখানে if বসে
            </p>
            <p>
              (iii) দ্বিতীয় বাক্যটির Verb/ helping verb আগের নিয়মে পরিবর্তন
              হবে। তবে সাহায্যকারি verb পরিবর্তন করে Subject এর পর বসাতে হয়।
            </p>
            <p>
              Q. He said to me, "How are you?" <br />= He asked me how I was.
            </p>
            <p>
              (iv) দ্বিতীয় বাক্যের Helping verb যদি Do/does হয় তবে তা তুলে
              দিয়ে মুল verb এর V2 হবে। <br />
              ** কিন্তু দ্বিতীয় বাক্যের Helping verb যদি did হয় তবে তা তুলে
              দিয়ে মুল verb এর V2 রাখা যাবে অথবা had+ V3 করা যাবে।
            </p>
            <p>
              Q. He said, "Which book does he want?" <br />
              He asked which book he wanted.
            </p>
          </div>

          {/* Imperative sentence  */}
          <div className="rule-section">
            <h2>Imperative Sentence:</h2>
            <p>
              চিনার উপায়ঃ <br />
              দ্বিতীয় বাক্যে Verb দ্বারা শুরু হয় এবং আদেশ/অনুরোধ/উপদেশ বোঝায়।
            </p>
            <h3>পরিবর্তনের নিয়ম:</h3>
            <p>
              (i) say, say to, said, said to এর পরিবর্তে ask/ asked/ tell/ told
              হবে। <br />
              ** দ্বিতীয় বাক্যটি to দ্বারা শুরু হবে। <br />
              Q. He said to me, "Go home directly". <br />= He asked me to Go
              home directly.
            </p>
            <p>
              (ii) কিন্তু দ্বিতীয় বাক্যটি Let us/ Let's দ্বারা শুরু হলে say,
              say to, said, said to এর পরিবর্তে propose(d)/ suggest(ed) হবে এবং
              Let us/ Let's উঠিয়ে Let us এর পরের V1 এর সাথে ing যোগ করতে হয়{" "}
              <br />
              Q. He said, "Let us/ Let's rectify ourselves". <br />= He proposed
              rectifying themselves.
            </p>
            <p>
              (ii) কিন্তু দ্বিতীয় বাক্যটি Let me/ him/ them/ her দ্বারা শুরু
              হলে say, say to, said, said to এর পরিবর্তে tell/told/wish(ed)/
              request(ed)/order(ed) হবে এবং <br />
              ** Let এর পরের Object কে Subject বানিয়ে এর পরে might/might be
              allowed to যোগ করতে হয় <br />
              ** মাঝখানে that বসে। <br />
              Q. He said, "Let me play in field". <br />
              = He told that I might play in the field. <br />= He wished that I
              might be allowed to play in the field.
            </p>
          </div>

          {/* Exclamatory Sentence  */}
          <div className="rule-section">
            <h2>Exclamatory Sentence:</h2>
            <p>
              চিনার উপায়ঃ <br />
              ** Alas, hurrah দ্বারা শুরু হয়ে এদের পরে exclaimation চিহ্ন থাকে
              এবং বাকের শেষে ফুল স্টপ থাকে। <br />
              ** কিন্তু what, how দ্বারা শুরু হলে বাক্যের শেষে Exclaimation (!)
              চিহ্ন থাকে।
            </p>
            <h3>পরিবর্তনের নিয়ম:</h3>
            <p>
              (i) প্রথম বাক্যের Say/ Said to এর পরিবর্তে Exclaimed with joy বা
              Exclaimed with sorrow হবে।
            </p>
            <p>(ii) বাক্যের মাঝখানে that হবে।</p>
            <p>
              (iii) Alas, hurrah দ্বারা শুরু হলে এগুলো উঠিয়ে subject/verb আগের
              নিয়মে পরিবর্তন হবে।
            </p>

            <p>
              Q. "Alas! I am undone", he said.
              <br />= He exclaimed with sorrow that he was undone.
            </p>
            <p>
              (iii) what how দ্বারা শুরু হলে এগুলো উঠিয়ে বাক্যটিকে Assertive
              বাক্য বানাতে হবে।
            </p>
            <p>
              Q. He said to me, "How nice your handwriting is!"
              <br />= He exclaimed with joy that my handwriting was very nice.
            </p>
          </div>

          {/* <!-- Optative sentence --> */}
          <div className="rule-section">
            <h2>Optative Sentence:</h2>
            <p>
              চিনার উপায়ঃ <br />
              দ্বিতীয় বাক্যে May দ্বারা শুরু হয় এবং বাকের শেষে ফুল স্টপ থাকে।
            </p>
            <h3>পরিবর্তনের নিয়ম:</h3>
            <p>
              (i) প্রথম বাক্যের say to/said to এর পরিবর্তে Pray(ed)/ wish(ed)
              হবে।
              <p>
                (ii) দ্বিতীয় বাক্যের May কে might করতে হবে এবং subject এর এর
                পরে বসাতে হবে
              </p>
            </p>
            <p>(iii) মাঝখানে that হবে।</p>
            <p>
              Q. The teacher said, "May Allah help you." = The teacher prayed
              that Allah might help me.
            </p>
          </div>
        </div>

        {/* <!-- table of wish --> */}
        <div className="tableSection">
          <table>
            <tr>
              <th>Direct এ থাকলে</th>
              <th>Indirect এ হবে</th>
            </tr>
            <tr>
              <td>Good Morning/ Good Evening/ Happy Christmas:</td>
              <td>
                reporter + wished + good evening/good night/ good morning/ a
                happy Christmas
              </td>
            </tr>
            <tr>
              <td>I said to him, "Good morning."</td>
              <td>I wished him good morning.</td>
            </tr>
            <tr>
              <td>Thank you/ Curse the fog/ congratulations/ welcome:</td>
              <td>
                reporter + thanked/ cursed/ congratulated/ welcomed + listener
              </td>
            </tr>
            <tr>
              <td>He said to me "Thank you".</td>
              <td>He thanked me.</td>
            </tr>
            <tr>
              <td>Good night/ bye:</td>
              <td>reporter + bade + good night/bye</td>
            </tr>
            <tr>
              <td>I said to him, "Good night."</td>
              <td>I bade him good night.</td>
            </tr>
          </table>
        </div>

        {/* <!-- table sentence rules --> */}
        <div className="tableSection" style={{ overflowX: "scroll" }}>
          <h2>Table: Different Sentence Types and Conversions</h2>

          <table>
            <thead>
              <tr>
                <th>বাক্যে</th>
                <th>Said to</th>
                <th>সংযোজন</th>
                <th>Subject/ Verb</th>
                <th>উদাহরণ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Assertive</td>
                <td>Tell/told</td>
                <td>that</td>
                <td>Subject/Verb আগের নিয়মে পরিবর্তন হবে</td>
                <td>
                  He said to me, "I am ill". <br />
                  He told me that he was ill.
                </td>
              </tr>
              <tr>
                <td>Interrogative</td>
                <td>ask(ed)</td>
                <td>wh/if, whether</td>
                <td>Subject/Verb আগের নিয়মে পরিবর্তন হবে</td>
                <td>
                  He said, "How are you?" <br />
                  He asked how he was.
                </td>
              </tr>
              <tr>
                <td>Imperative</td>
                <td>Tell/told</td>
                <td>to</td>
                <td>Subject/Verb আগের নিয়মে পরিবর্তন হবে</td>
                <td>
                  He said, "Go home" <br />
                  He told to go home.
                </td>
              </tr>
              <tr>
                <td>Optative</td>
                <td>pray(ed)</td>
                <td>that</td>
                <td>Subject/Verb আগের নিয়মে পরিবর্তন হবে</td>
                <td>
                  He said to me, "May you be happy". <br />
                  He prayed that I might be happy.
                </td>
              </tr>
              <tr>
                <td>Exclamatory</td>
                <td>Exclaimed with joy/sorrow</td>
                <td>that</td>
                <td>Subject/Verb আগের নিয়মে পরিবর্তন হবে</td>
                <td>
                  He said, "Alas! I am undone". <br />
                  He exclaimed with sorrow that he was undone.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Passage Naration rules --> */}
        <div className="tableSection" style={{ overflow: "scroll" }}>
          <h2>Rules of Passage Narration</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  কোন বক্তার পর পর একাধিক উক্তি (Speech) থাকলে ২য় বা তৎপরবর্তী
                  উক্তিগুলির ক্ষেত্রে added, further added, also said, again
                  said ইত্যাদি ব্যবহার করতে হয়। কিন্তু ২টি interrogative পর পর
                  থাকলে দ্বিতীয়টির ক্ষেত্রে again/also asked হয়।
                </td>
                <td>
                  <strong>Direct:</strong> He said, "I can chop wood today. I
                  shall come again tomorrow."
                  <br />
                  <strong>Indirect:</strong> He said that he could chop some
                  wood that day. He added that he would come again the next day.
                </td>
              </tr>
              <tr>
                <td>
                  Reported Speech – এ "Yes" or "No” থাকলে Indirect করার সময়
                  যথাক্রমে replied in the affirmative that এবং replied in the
                  negative that ব্যবহার করতে হয়।
                </td>
                <td>
                  <strong>Direct:</strong> Jhumu said to Mitu, "Are you going to
                  Chittagong tomorrow?"
                  <br />
                  "No, I have changed my decision." said Mitu.
                  <br />
                  <strong>Indirect:</strong> Jhumu asked Mitu if she was going
                  to Chittagong the next day. Mitu replied in the negative that
                  she had changed her decision.
                </td>
              </tr>
              <tr>
                <td>
                  Direct Speech-এ" Sir" থাকলে Indirect Speech – এ "Sir" এর
                  পরিবর্তে respectfully ব্যবহার করতে হয়।
                </td>
                <td>
                  <strong>Direct:</strong> "Yes, sir," she replied, "I have done
                  my duty."
                  <br />
                  <strong>Indirect:</strong> She replied respectfully in the
                  affirmative that she had done her duty.
                </td>
              </tr>
              <tr>
                <td>
                  Direct Speech-এ by Allah, by Jove Allah/Jove/Good ইত্যাদি
                  ব্যাবহার করতে হয়। by God, by my life ইত্যাদি থাকলে Swearing by
                  by God,
                </td>
                <td>
                  <strong>Direct:</strong> "By Allah," he replied, "I will not
                  leave this house."
                  <br />
                  <strong>Indirect:</strong> Swearing by Allah, he replied that
                  he would not leave that house.
                </td>
              </tr>
              <tr>
                <td>
                  Direct Speech-এ Assertive Sentence –এর শেষে প্রশ্নবোধক চিহ্ন
                  থাকলে Indirect করার সময় Reporting Verb এর পূর্বে Being
                  surprised লিখতে হয় এবং Reporting Verb টিকে ask/asked দিয়ে
                  পরিবর্তন করতে হয়।
                </td>
                <td>
                  <strong>Direct:</strong> She said to me "You have remembered
                  how she looked all these years?"
                  <br />
                  <strong>Indirect:</strong> Being surprised, she asked me if I
                  had remembered how she had looked all those years.
                </td>
              </tr>
              <tr>
                <td>Direct: Good Morning/ Good Evening/ Happy Christmas:</td>
                <td>
                  <strong>Direct:</strong> I said to him, "Good morning."
                  <br />
                  <strong>Indirect:</strong> I wished him good morning.
                  <br />
                  <strong>Direct:</strong> He said to me "Thank you".
                  <br />
                  <strong>Indirect:</strong> He thanked me.
                  <br />
                  <strong>Direct:</strong> I said to him, "Good night."
                  <br />
                  <strong>Indirect:</strong> I bade him good night.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Excercise --> */}
        <div className="section">
          <h1>Exercise</h1>
          <h2>Assertive Sentences:</h2>
          <p>
            1. Jack said to his father, “He is sent for playing with friends.”
          </p>
          <p>2. Father said, “You are sent to learn, to read and write”.</p>
          <p>3. Jack said, “But I won’t read and write.”</p>
          <p>4. Father insisted his son, “You will read and write.”</p>
          <p>5. “I like both democracy and socialism”, answered Lucy.</p>
          <p>6. “People usually advocate either of the two,” he said.</p>
          <p>7. He said to me, “I came to Dhaka this morning.”</p>
          <p>
            8. He said to me, “I sent you a telegram before starting from home.”
          </p>
          <p>
            9. She cleverly said to me, “I know my mother’s name but I won’t
            tell you that.”
          </p>
          <p>10. “I’m not in hilarious spirits,” Monika said.</p>
          <p>11. She sighed, “It’s Pintu.”</p>
          <p>
            12. “You have done everything in the world for him,” he said to her.
          </p>
          <p>
            13. He said to her, “You must know by now that he is quite
            hopeless.”
          </p>
          <p>
            14. He said to his sons, “A great treasure lies hidden in the
            state.”
          </p>
          <p>
            15. The old man said to them, “I am about to tell you, but you must
            dig for it.”
          </p>
          <p>
            16. Shyamal said to Jamal, “I went to your house yesterday, but did
            not find you.”
          </p>
          <p>17. “I went to the station”, said Karim.</p>
          <p>18. “I had to receive my maternal uncle.” he said.</p>
          <p>
            19. I said, “I went to my friend’s house to borrow an essential
            book; but he was not at home.”
          </p>
          <p>20. I said, “I had to wait for him.”</p>

          <h2>Interrogative Sentences:</h2>
          <p>1. She said to him, “How can she let you go away again?”</p>
          <p>2. “How are you?” Dabir asked Manika.</p>
          <p>3. “Is it Pintu again?” Dabir said.</p>
          <p>4. “Why don’t you chuck him?” Dabir said to her.</p>
          <p>5. “Where is it hidden?” said the sons.</p>
          <p>6. Shamim said to Karim, “How are you?”</p>
          <p>7. He said to Karim, “Where did you go?”</p>
          <p>
            8. My father looked at me in anger and said to me, “Where have you
            been so long?”
          </p>
          <p>9. He asked me, “Why are you wasting your time?”</p>
          <p>
            10. After a moment, he said to me, “Will you not appear in the final
            examination?”
          </p>
          <p>
            11. “Nasica, have you done your English lesson today?” asked the
            teacher.
          </p>
          <p>
            12. “Are you brothers?” asked the mistress of the house, turning to
            the dervishes.
          </p>
          <p>13. He asked them, “Have you not read the warning on the door?”</p>
          <p>14. Della asked Madam, “Will you buy my hair?”</p>
          <p>
            15. He said to the peasant, “Can you tell me the way to the nearest
            inn?”
          </p>
          <p>
            16. He said to the peasant, “Do you want one in which you can spend
            the night?”
          </p>
          <p>
            17. “You have remembered how she looked, all these years?” said the
            writer to Jerry.
          </p>
          <p>18. “Have you seen her, Jerry, lately?”</p>
          <p>
            19. I wanted to cry out and said to him, “Why are you not with her?”
          </p>
          <p>
            20. Once I asked a sweet little girl, “What is your mother’s name?”
          </p>

          <h2>Imperative Sentences:</h2>
          <p>
            The teacher said to me, "Be attentive and listen to my lecture."
          </p>
          <p>He said, "Let us go for a walk in the open field."</p>
          <p>"Leave me alone", said I.</p>
          <p>
            "Hold you tongue!" he said to the dervishes, glaring fiercely in
            their faces.
          </p>
          <p>
            She told me, "Take your hat off and let’s have a sight at the looks
            of it."
          </p>
          <p>
            "Twenty dollars," said Madame, lifting the mass with a practiced
            hand.
          </p>
          <p>"Follow my example," she said as we shook hands.</p>
          <p>She said to me, "Never eat more than one thing for luncheon."</p>
          <p>
            The teacher said to the boy, "Learn to be honest from your boyhood."
          </p>
          <p>"Let us go for a walk in the open field," said he.</p>
          <p>"Ten cents and hour?" I said.</p>

          <h2>Optative Sentences:</h2>
          <p>Father said to me, "May God bless you."</p>
          <p>We said, "May our president live long."</p>
          <p>Mother said to his son, "May you live long."</p>
          <p>Father said to his son, "May you pass the examination."</p>
          <p>The teacher said to the student, "May you come round soon."</p>
          <p>The President said, "May Bangladesh live long."</p>
          <p>The dervish said to me, "May you shine in life."</p>
          <p>The women said to his son, "May you be happy."</p>
          <p>"May Allah help you," she said.</p>

          <h2>Exclamatory Sentences:</h2>
          <p>You said to me, "How nice your handwriting is!"</p>
          <p>I said to her, "What a nice girl you are!"</p>
          <p>"What terrible cousins poor Samira had!" said Mr. Rahim.</p>
          <p>He said to me, "May you have wealth."</p>
          <p>We said, "What cheering report it is."</p>
          <p>He said, "Alas! I am undone."</p>
          <p>They said, "How sweet the mango is!"</p>
          <p>I said to him "What a brave man you are!"</p>
          <p>He said, "What a pity!"</p>
          <p>I said to my friend, "What a nice fellow your father is!"</p>
          <p>Navid said to Suman, "What a nice gift I have for you!"</p>
          <p>The man said to boy, "Bravo! You have done very well!"</p>
          <p>The traveler said, "How wicked the boys are!"</p>
          <p>I said, "Had I the wings of a bird."</p>

          <h2>Direct and Indirect Speech:</h2>

          <h1>Textual Exercise</h1>

          <h2>Change the Following Sentences into Indirect Speech:</h2>
          <p>
            1. "Anwar, you're going to enjoy Nurpur High School" said Mr. Alam.
          </p>
          <p>
            2. "Do you want to use that piece of land over there?" Mr. Ahmed
            said to the students.
          </p>
          <p>
            3. Mr. Ahmed said to the students, "What do you know about
            gardening?"
          </p>
          <p>
            4. Mr. Ahmed said to the students, "Do you know that gardening is
            very hard work?"
          </p>
          <p>
            5. Mr. Ahmed says, "Some of my className 8 students want to make a
            school garden."
          </p>
          <p>
            6. "Did you enjoy your visit to the smithy, Anwar?" said his father.
          </p>
          <p>7. "Do you like these, Sarah?" asked Mrs. Amin.</p>
          <p>8. "Rina, look at the pond!" said Luna.</p>
          <p>
            9. Rina said to Luna, "Water hyacinths look lovely but everyone
            doesn't like them."
          </p>
          <p>10. "Come with me and I'll show you" said Rina's mother.</p>
          <p>11. Rina's mother said, "Why are you looking into the water?"</p>
          <p>
            12. "Some plants are useful" said Luna, "covered with water
            hyacinths."
          </p>
          <p>
            13. Luna said to Rina, "The water's nearly covered with water
            hyacinths."
          </p>
          <p>
            14. Luna said to Rina, "My father thinks they're worse than
            useless."
          </p>
          <p>
            15. Rina's mother said, "Water hyacinths can be made into
            fertilizer."
          </p>
          <p>
            16. "Come and look at the vegetables in my garden, Luna", said Mrs.
            Rehana Salam.
          </p>
          <p>
            17. Mrs. Rehana said to Rina and Luna, "Sit down and look at some of
            these pictures."
          </p>
          <p>
            18. "Did Aesop read the stories from books?" Klishan asked Mrs.
            Amin.
          </p>
          <p>
            19. "Anwar said to Mrs. Amin, "What kind of stories did Aesop tell?"
          </p>
          <p>20. "Do you know what fables are?" Mrs. Amin said to Anwar.</p>
          <p>
            21. "Do you want to use that piece of land?" Mr. Ahmed said to his
            students.
          </p>
          <p>22. Mr. Salam said, "Thank you, Mrs. Amin Ahmed."</p>
          <p>
            23. "Rina and Luna, come and look at the vegetables in my garden,
            Luna."
          </p>
          <p>24. Rupal said, "Ah! How happy I am now."</p>
          <p>
            25. Anwar said, "I am going to write some names down in my
            notebook."
          </p>
          <p>26. Anwar said to his father, "Don't worry."</p>
          <p>27. Frankel said to himself, "I must check it."</p>
          <p>
            28. Mrs. Amin said to her students, "Can any of you give me another
            example of honesty?"
          </p>
          <p>
            29. "Why do you work so hard when there is plenty of food to eat?"
            Mr. Grasshopper said to Mr. Ant.
          </p>
          <p>
            30. "Can we help Mr. Grasshopper, dear?" Mr. Ant said to his wife.
          </p>
          <p>
            31. "You are sure about the future, Mr. Ant" said Mr. Grasshopper.
          </p>
          <p>
            32. Frankel said to Hans, "A little learning is a dangerous thing."
          </p>
          <p>33. "We have worked for one hour and a half," said Anwar.</p>
          <p>
            34. Mrs. Salam said, "Don't forget about the water hyacinth, Luna."
          </p>
          <p>35. Mrs. Salam said, "What a sunny day it is!"</p>
          <p>36. Mr. Grasshopper said, "These mangoes don't taste sweet."</p>
          <p>37. Mrs. Salam said, "Come along, Rina."</p>
          <p>
            38. Anwar thought to himself, "I will discuss my feelings with my
            mother sometime."
          </p>
          <p>
            39. "What are all those people looking at, Anwar?" asked Kashem.
          </p>
          <p>40. Anwar said to Kashem, "Let's go and see."</p>
          <p>
            41. "Hello, Anwar," said Mrs. Salam, "Why have you been running?"
          </p>
          <p>42. "Shall we go and help her, Mrs. Salam?" Anwar said.</p>
          <p>43. Mrs. Salam said, "Yes, you will go and help her."</p>
          <p>44. "Have you ever been to Dhaka, Kashem?" Anwar said.</p>
          <p>45. "Don't worry," Rina's mother said to her.</p>
          <p>46. "Look at your grandmother," Rina's mother said to her.</p>
          <p>47. Rina's grandmother said, "People can fall over at any age."</p>
          <p>
            48. Mrs. Rehana Salam said to Rina, "If we went early, we could help
            them."
          </p>
          <p>49. "Have we bought enough things now?" asked Rina.</p>
        </div>
      </div>
    </div>
  );
};
export default Narration;
