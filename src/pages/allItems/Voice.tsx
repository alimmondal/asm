function Voice() {
  return (
    <div className="h-full md:w-[65%] mx-auto px-5">
      <div className="py-20">
        <h1 className="text-center text-green-400">Voice</h1>
      </div>
      <div className="text-lg md:text-xl">

        <h3 className="underline text-green-500">From Active to Passive</h3>
        <p className="text-blue-500 dark:text-gray-300 font-extrabold">
          <span className="text-rose-500">Rule: </span> Obj কে Sub বানাতে হবে +
          (helping verb) + V<sub>3</sub> + by + sub কে obj বানাতে হবে।
        </p>
        <p className="py-2">
          (1) মুল Verb যদি V<sub>1</sub> থাকে তাহলে Passive voice এর helping
          verb হয় = am/is/are <br />
          যেমনঃ <br />
          Q. She makes tea.
          <br />= Tea is made by her.
        </p>
        <p className="py-2">
          (2) সাহায্যকারী Verb যদি do not/ does not থাকে তাহলে এগুলোর
          পরিবর্তে Passive voice এর helping verb হবে = am not/ is not/ are not <br />
          যেমনঃ <br />
          Q. She does not make tea.
          <br />= Tea is not made by her.
        </p>
        <p className="py-2">
          (3) মুল Verb যদি V<sub>2</sub> থাকে তাহলে Passive voice এর helping
          verb হয় = Was/ were <br />
          যেমনঃ
          <br />
          Q. She made tea.
          <br />= Tea was made by her.
        </p>
        <p className="py-2">
          (2) সাহায্যকারী Verb যদি did not থাকে তাহলে এগুলোর
          পরিবর্তে Passive voice এর helping verb হবে = was not/ were not <br />
          যেমনঃ <br />
          Q. She did not make tea.
          <br />= Tea was not made by her.
        </p>

        <p className="py-2">
          (4) যদি am/is/are, was/ were, shall be/ will be থাকে তাহলে এগুলোর
          সাথে Passive voice এর helping verb হয় = being <br />
          যেমনঃ <br />
          Q. She was making tea.
          <br />= Tea was being made by her.
        </p>
        <p className="py-2">
          (5) যদি can/ could/ may/ might/ shall/ should/ will/ would/ must/
          ought to/ have to/ has to/ had to/ am going to/ is going to/ are going
          to থাকে তাহলে এগুলোর সাথে Passive voice এর helping verb হয় = be,{" "}
          <br />
          যেমনঃ <br />
          Q. She can make tea.
          <br />= Tea can be made by her.
        </p>
      </div>

      {/* PASSIVE TO ACTIVE */}
      <div className="mt-5 mb-10 text-lg md:text-xl">
        <h3 className="underline text-green-400">From Passive to Active</h3>
        <p className="text-blue-500 dark:text-gray-300">
          <p className="font-extrabold">
            <span className="text-rose-500">Rule: </span> Obj কে Sub + (helping
            verb)? উঠে যাবে + V<sub>?</sub> এর Form পরিবর্তন হতে পারে + Sub কে
            obj বানাতে হবে।
          </p>
        </p>
        <p>** By/ In/ at/ with উঠিয়ে দিতে হবে।</p>
        <p>
          (i) Helping verb যদি am/is/are থাকে উঠিয়ে V<sub>1</sub>(s/es) হবে।
          যেমনঃ <br />
          Q. Tea is made by her. <br />
          = She makes tea.
          <br />
          কিন্তু Helping verb এর সাথে not থাকলে Helping verb উঠিয়ে do not/does
          not + V<sub>1</sub> হবে। <br />
          যেমনঃ <br />
          Q. Tea is not made by her. <br />
          = She does not make tea.
        </p>
        <p>
          (ii) Helping verb যদি was/ were থাকে উঠিয়ে V<sub>2</sub> হবে। <br />
          যেমনঃ
          <br />
          Q. Tea was made by her. <br />
          = She made tea.
          <br />
          কিন্তু Helping verb এর সাথে not থাকলে Helping verb উঠিয়ে did not + V
          <sub>1</sub> হবে। <br />
          যেমনঃ <br />
          Q. Tea was not made by her. <br />
          = She did not make tea.
        </p>
        (iii) am being, is being, are being, was being,were being, shall be
        being, will be being, থাকলে being উঠিয়ে V<sub>1</sub> এর সাথে ing হবে।
        <br />
        যেমনঃ <br />
        Q. Tea was being made by her.
        <br />= She was making tea.
        <p>
          (vi) যদি can/ could/ may/ might/ shall/ should/ will/ would/ must/
          ought to/ have to/ has to/ had to/ am going to/ is going to/ are going
          to এগুলোর সাথে be থাকে তাহলে be উঠিয়ে V<sub>1</sub>
          হয় <br />
          যেমনঃ <br />
          Q. Tea can be made by her.
          <br />= She can make tea.
        </p>
      </div>

      {/* Exercise */}

      <div className="pt-4 text-lg md:text-xl">
        <h3 className="font-bold text-green-400">
          Change the following sentences into passive
        </h3>
        <ol className="list-decimal list-inside ">
          <li>Blacksmiths make spades.</li>
          <li>Mr. Ahmed teaches us English.</li>
          <li>Who can see you in the picture?</li>
          <li>The teacher was telling a story to the students.</li>
          <li>Did Aesop read stories from books?</li>
          <li>A mouse was eating his blanket.</li>
          <li>Did someone famous write it?</li>
          <li>Bahadur looked after the garden.</li>
          <li>Grasshopper wrote music.</li>
          <li>Who can give me another example?</li>
          <li>They heat and mix many chemicals.</li>
          <li>Mr. Anis Ahmed told Rina to take some flowers and vegetables.</li>
          <li>Luna hurt herself.</li>
          <li>We can't help him very much.</li>
          <li>Mr. Grasshopper enjoyed his leisure.</li>
          <li>Rina told her a story.</li>
          <li>We have made our own school garden.</li>
          <li>You can make paper from it.</li>
          <li>He is buying some seeds.</li>
          <li>I must discuss it with the headmaster.</li>
          <li>They will need some tools.</li>
          <li>The school can give them some money.</li>
          <li>I will tell my students the good news.</li>
          <li>The headmaster has given us enough money.</li>
          <li>Anyone can make a basket or a rake.</li>
          <li>Have you seen them before?</li>
          <li>Look at the pictures.</li>
          <li>Who can see you?</li>
          <li>Listen to the story again.</li>
          <li>I know a poem about a smithy.</li>
          <li>Did you like it?</li>
          <li>Anwar's father asked him a question.</li>
          <li>People use spades to dig the soil.</li>
          <li>The chickens are being fed.</li>
          <li>Anwar was collecting some old leaves.</li>
          <li>The two girls followed Mrs. Salam.</li>
          <li>She showed the girls some pictures.</li>
          <li>We have started gardening at school.</li>
          <li>Did you like Aesop's fable?</li>
          <li>We built a house for ourselves.</li>
          <li>We can use bamboo and an old tin to make it.</li>
          <li>Some cows and goats have eaten them.</li>
          <li>You have told me the truth.</li>
          <li>I will forget it.</li>
          <li>Anwar was reading a book in his bedroom.</li>

          <li>She let me go.</li>
          <li>Nobody looked at him.</li>
          <li>You can look after other people.</li>
          <li>I will just write a short note for Rina.</li>
          <li>Mrs. Salam was reading a magazine.</li>
          <li>Did you take her to the hospital?</li>
          <li>She hurt herself quite badly.</li>
          <li>Would Luna like to use your baskets?</li>
          <li>You looked after Rina's grandmother very well.</li>
          <li>She lost her bag on the way.</li>
          <li>Her children told her about the lost bag.</li>
          <li>Rupal made a nice little hut for himself.</li>
          <li>He discovered something strange.</li>
          <li>Who made this hole?</li>
          <li>I will bring my cat here.</li>
          <li>Rupal could find peace and quiet in the jungle.</li>
          <li>What did Rupal do?</li>
          <li>I will read it to you.</li>
          <li>Can we put a Shakespeare play?</li>
          <li>Kalim is going to break the door.</li>
          <li>Open the door.</li>
          <li>Don't look at that tree.</li>
          <li>Open the window.</li>
          <li>Empty the glass at once.</li>
          <li>Don't tell my name.</li>
          <li>Bring a lantern.</li>
          <li>I will never do it in my life.</li>
          <li>You must show your ugly face to the villagers.</li>
          <li>We must take her to the hospital.</li>
          <li>Mr. Ahmed used a ghost to frighten people.</li>
          <li>Did he keep it clean and tidy?</li>
          <li>Did he admire Frankel?</li>
          <li>Frankel understood Hans very well.</li>
          <li>Frankel must do something.</li>
        </ol>

        <h3 className="font-bold mt-4">
          Change the following sentences into active
        </h3>
        <ol className="list-decimal list-inside mt-2">
          <li>
            Water hyacinths have been used to make all these beautiful things.
          </li>
          <li>The piece of land was chosen for three reasons.</li>
          <li>A magazine was being read by Mrs. Salam.</li>
          <li>All our lovely young plants have been eaten.</li>
          <li>This song was written by Mr. Grasshopper.</li>
          <li>The soil must be made fertile by us.</li>
          <li>The eggplants weren’t eaten by animals.</li>
          <li>She was being introduced to Mrs. Green.</li>
          <li>The students were showed his list by Mr. Ahmed.</li>
          <li>Four actors and three actresses will be needed by us.</li>
          <li>Has a play been written by Mr. Ahmed?</li>
          <li>He was caught by the ghost?</li>
          <li>He should be taught a good lesson.</li>
          <li>He must be stopped.</li>
          <li>A flood was experienced by Hans.</li>
          <li>What will be eaten tonight by you?</li>
          <li>Let your things be taken off.</li>
          <li>Let the torches be focused.</li>
          <li>He was recognized by everyone.</li>
          <li>Has a play ever been seen by you?</li>
          <li>The students were taught a lot by Mr. Ahmed's play.</li>
          <li>Frankel's spell can be used by me for housework.</li>
        </ol>
      </div>
    </div>
  );
}

export default Voice;
