import PluralForms from "../../components/PluralForms";

const Number = () => {
  return (
    <div>
      <h2 className="text-center text-green-500 py-20">Number/বচন</h2>
      <div className="px-3 lg:w-1/2 mx-auto pb-10">
        <h3 className="text-pink-600">
          Noun-এর বহুবচনে রূপান্তর (Pluralisation)
        </h3>
        অধিকাংশ noun-এর শেষে s যোগ করলে plural হয়। তবে pluralisation-এর ব্যাপারে
        নিচে কিছু গুরুত্বপূর্ণ আলোচনা করা হলো: <br />
        Singular অবস্থায় বিশেষ বানান হলে plural-এ বিশেষ রূপ ধারণ করে এরূপ কিছু
        শব্দ নিচে দেয়া হলো:
        <br />
        <br />
        1. শব্দের শেষে s, ch, sh, tch, x, থাকলে plural-এ es যোগ হয়: <br />
        Singular <br />
        Plural <br />
        bus buses bunch bunches bush bushes patch fox patches foxes <br />
        2. শব্দের শেষে-f, বা-fe থাকলে plural-এ-ves হয়, কোন কোন noun-এর ক্ষেত্রে:
        <br />
        Singular Plural
        <br />
        calf half hoof knife life <br />
        <br />
        calves halves hooves knives F.3 lives ইত্যাদি। <br />
        Singular *nebula index analysis hypothesis synopsis * criterion
        bacterium memorandum bacillus fungus stimulus syllabus * radius terminus
        Foreign plural <br />
        nebulae apices indices analyses hypotheses synopses thesis theses
        criteria bacteria memoranda bacilli fungi stimuli syllabi radii termini{" "}
        <br />
        English plural <br />
        nebulas apex apexes indexes memorandums funguses syllabuses <br />
        <PluralForms />
        6. শেষে consonant + "o" থাকলে -es যোগ করে plural করা হয়, কোন কোন সময়:{" "}
        <br />
        Singular Plural
        <br />
        veto - vetoes <br />
        hero - heroes <br />
        potato - potatoes <br />
        tomato - tomatoes
        <br />
        <br />
        7. "-" হাইফেন যুক্ত noun এর মূল শব্দ যোগে plural হয়: <br />
        Singular <br />
        father-in-law mother-in-law brother-in-law passer-by <br />
        Plural <br />
        fathers-in-law mothers-in-law brothers-in-law passers-by <br />
        36 <br />
        Noun-equivalents (Noun-এর সমমান সম্পন্ন পদসমূহ) <br />
        বাক্যে কিছু কিছু পদের শব্দ বা phrase পদমর্যাদার দিক দিয়ে noun-এর
        সমপর্যায়ের হতে পারে, এবং বাক্যে একটা noun বা noun phrase যে যে function
        করে, ঐ সমস্ত পদের শব্দ বা phrase-গুলোও সেই function করতে পারে। সেগুলো
        হচ্ছে: <br />
        (1) Gerund: (verb+ing) <br />
        ziaylana <br />
        যেমন: Swimming, playing, ইত্যাদি। অবশ্য মনে রাখতে হবে gerund আবার কখন ও
        কখনও adjective-এর function করতে পারে। যেমন: drinking water এই phrase-এ
        "drinking" একটা adjective-এর কাজ করছে। এরূপ ক্ষেত্র ছাড়া gerund সাধারণত:
        noun-এর কাজই করে থাকে। <br />
        (2) Infinitive phrase: (to + verb) <br />
        Infinitive যদি উদ্দেশ্যমূলক না হয় তবে তা noun-এর মত কাজ করে। <br />
        (a) To do this work requires great skill. <br />
        zullised <br />
        (b) I want to have a good accommodation here. <br />
        Sentence (a) তে "To do this work" subject হিসেবে কাজ করছে, এবং (b) তে
        "to have a good accommodation" object হিসেবে কাজ করছে। <br />
        (3) Adjective-এর আগে "the" ব্যবহৃত হলে তা noun-এর মত কাজ করে। <br />*
        যেমন: "The poor", "the rich" এবং past participle-এর আগে "the" বসালেও তা
        noun-এর মত কাজ করে। যেমন "the learned" "the down-trodden" ইত্যাদি।{" "}
        <br />
        (a) The poor are the sufferers. <br />
        (b) We feel sympathy for the down-trodden. <br />
      </div>
    </div>
  );
};

export default Number;
