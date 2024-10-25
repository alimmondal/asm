const SynAnt = () => {
  const data = [
    {
      english: "Important (Adjective)",
      bangla: "অত্যাবশ্যক",
      synonyms: "Significant, Crucial",
      antonyms: "Insignificant, Unimportant",
    },
    {
      english: "Safe (Adjective)",
      bangla: "নিরাপদ",
      synonyms: "Secure, Protected",
      antonyms: "Unsafe, Risky",
    },
    {
      english: "Clean (Adjective)",
      bangla: "পরিষ্কার",
      synonyms: "Pure, Spotless",
      antonyms: "Dirty, Unclean",
    },
    {
      english: "Use (Verb)",
      bangla: "ব্যবহার করা",
      synonyms: "Utilize, Employ",
      antonyms: "Misuse, Waste",
    },
    {
      english: "Available (Adjective)",
      bangla: "উপলব্ধ",
      synonyms: "Accessible, Obtainable",
      antonyms: "Unavailable, Scarce",
    },
    {
      english: "While (Conjunction)",
      bangla: "যখন",
      synonyms: "During, Whilst",
      antonyms: "After, Later",
    },
    {
      english: "Prevent (Verb)",
      bangla: "রোধ করা",
      synonyms: "Stop, Halt",
      antonyms: "Allow, Permit",
    },
    {
      english: "Spread (Verb)",
      bangla: "প্রসারিত করা",
      synonyms: "Disseminate, Diffuse",
      antonyms: "Contain, Restrain",
    },
    {
      english: "Strengthen (Verb)",
      bangla: "মজবুত করা",
      synonyms: "Fortify, Reinforce",
      antonyms: "Weaken, Undermine",
    },
    {
      english: "Infectious (Adjective)",
      bangla: "সংক্রামক",
      synonyms: "Contagious, Transmittable",
      antonyms: "Noninfectious, Harmless",
    },
    {
      english: "Outer (Adjective)",
      bangla: "বাহ্যিক",
      synonyms: "External, Exterior",
      antonyms: "Inner, Internal",
    },
    {
      english: "Proletarian (Adjective)",
      bangla: "শ্রমিক",
      synonyms: "Worker, Laborer",
      antonyms: "Bourgeois, Capitalist",
    },
    {
      english: "Launch (Verb)",
      bangla: "শুরু করা",
      synonyms: "Start, Initiate",
      antonyms: "Halt, Terminate",
    },
    {
      english: "Prepare (Verb)",
      bangla: "প্রস্তুত করা",
      synonyms: "Ready, Arrange",
      antonyms: "Neglect, Ignore",
    },
    {
      english: "Begin (Verb)",
      bangla: "শুরু করা",
      synonyms: "Commence, Start",
      antonyms: "End, Conclude",
    },
    {
      english: "Faultless (Adjective)",
      bangla: "অবিচল",
      synonyms: "Flawless, Impeccable",
      antonyms: "Imperfect, Defective",
    },
    {
      english: "Nausea (Noun)",
      bangla: "বমি",
      synonyms: "Sickness, Queasiness",
      antonyms: "Appetite, Craving",
    },
    {
      english: "Discomfort (Noun)",
      bangla: "অস্বস্তি",
      synonyms: "Unease, Distress",
      antonyms: "Comfort, Ease",
    },
    {
      english: "Maintain (Verb)",
      bangla: "রক্ষা করা",
      synonyms: "Sustain, Preserve",
      antonyms: "Neglect, Abandon",
    },
    {
      english: "Later (Adverb)",
      bangla: "পরে",
      synonyms: "Subsequently, Afterward",
      antonyms: "Earlier, Before",
    },
    {
      english: "Different (Adjective)",
      bangla: "ভিন্ন",
      synonyms: "Diverse, Distinct",
      antonyms: "Similar, Alike",
    },
    {
      english: "Seek (Verb)",
      bangla: "অনুসন্ধান করা",
      synonyms: "Search, Pursue",
      antonyms: "Abandon, Renounce",
    },
    {
      english: "Eager (Adjective)",
      bangla: "উদ্যমী",
      synonyms: "Enthusiastic, Zealous",
      antonyms: "Indifferent, Apathetic",
    },
    {
      english: "Observation (Noun)",
      bangla: "পর্যবেক্ষণ",
      synonyms: "Examination, Monitoring",
      antonyms: "Neglect, Oversight",
    },
    {
      english: "Mere (Adjective)",
      bangla: "শুধুমাত্র",
      synonyms: "Bare, Simple",
      antonyms: "Significant, Substantial",
    },
    {
      english: "Alert (Adjective/Noun/Verb)",
      bangla: "সতর্ক",
      synonyms: "Attentive, Watchful",
      antonyms: "Unaware, Inattentive",
    },
    {
      english: "Latent (Adjective)",
      bangla: "নিষ্ক্রিয়, গোপন",
      synonyms: "Dormant, Hidden",
      antonyms: "Evident, Manifest",
    },
    {
      english: "Instructor (Noun)",
      bangla: "শিক্ষক",
      synonyms: "Teacher, Educator",
      antonyms: "Student, Learner",
    },
    {
      english: "Guide (Noun/Verb)",
      bangla: "মেন্টর",
      synonyms: "Mentor, Leader",
      antonyms: "Follower, Misleader",
    },
    {
      english: "Way (Noun)",
      bangla: "পথ",
      synonyms: "Route, Path",
      antonyms: "Obstacle, Hurdle",
    },
    {
      english: "Dynamic (Adjective/Noun)",
      bangla: "গতিশীল",
      synonyms: "Energetic, Vigorous",
      antonyms: "Static, Inactive",
    },
    {
      english: "Plan (Noun/Verb)",
      bangla: "পরিকল্পনা",
      synonyms: "Strategy, Scheme",
      antonyms: "Disorganization, Confusion",
    },
    {
      english: "Aim (Noun/Verb)",
      bangla: "লক্ষ্য",
      synonyms: "Goal, Objective",
      antonyms: "Distraction, Aimlessness",
    },
    {
      english: "Direction (Noun)",
      bangla: "দিশা",
      synonyms: "Guidance, Orientation",
      antonyms: "Misdirection, Confusion",
    },
    {
      english: "Profession (Noun)",
      bangla: "পেশা",
      synonyms: "Occupation, Vocation",
      antonyms: "Hobby, Pastime",
    },
    {
      english: "Suit (Noun/Verb)",
      bangla: "মিল",
      synonyms: "Match, Fit",
      antonyms: "Contradict, Disagree",
    },
    {
      english: "Aptitude (Noun)",
      bangla: "প্রবণতা",
      synonyms: "Talent, Skill",
      antonyms: "Ineptitude, Incapability",
    },
    {
      english: "Vary (Verb)",
      bangla: "বিভিন্ন",
      synonyms: "Differ, Change",
      antonyms: "Remain, Stay",
    },
    {
      english: "Educate (Verb)",
      bangla: "শিক্ষা",
      synonyms: "Instruct, Teach",
      antonyms: "Misinform, Misguide",
    },
    {
      english: "Citizen (Noun)",
      bangla: "নাগরিক",
      synonyms: "Resident, Inhabitant",
      antonyms: "Alien, Foreigner",
    },
    {
      english: "Ideal (Adjective/Noun)",
      bangla: "আদর্শ",
      synonyms: "Perfect, Exemplary",
      antonyms: "Imperfect, Flawed",
    },
    {
      english: "Master (Noun/Verb)",
      bangla: "মাস্টার",
      synonyms: "Expert, Dominant",
      antonyms: "Novice, Beginner",
    },
    {
      english: "Make (Verb)",
      bangla: "তৈরি করা",
      synonyms: "Create, Construct",
      antonyms: "Destroy, Demolish",
    },
    {
      english: "Method (Noun)",
      bangla: "পদ্ধতি",
      synonyms: "Technique, Procedure",
      antonyms: "Disorder, Chaos",
    },
    {
      english: "Convincing (Adjective)",
      bangla: "বিশ্বাসযোগ্য",
      synonyms: "Persuasive, Compelling",
      antonyms: "Unconvincing, Unpersuasive",
    },
    {
      english: "Praise (Noun/Verb)",
      bangla: "প্রশংসা",
      synonyms: "Applause, Admiration",
      antonyms: "Criticism, Blame",
    },
    {
      english: "Mistake (Noun/Verb)",
      bangla: "ভুল",
      synonyms: "Error, Blunder",
      antonyms: "Correctness, Accuracy",
    },
    {
      english: "Angry (Adjective)",
      bangla: "রাগ",
      synonyms: "Furious, Irritated",
      antonyms: "Calm, Content",
    },
    {
      english: "Simple (Adjective)",
      bangla: "সরল",
      synonyms: "Basic, Plain",
      antonyms: "Complicated, Complex",
    },
    {
      english: "Moral (Adjective/Noun)",
      bangla: "নৈতিক",
      synonyms: "Ethical, Virtuous",
      antonyms: "Immoral, Unethical",
    },
    {
      english: "Virtue (Noun)",
      bangla: "গুণ",
      synonyms: "Goodness, Morality",
      antonyms: "Vice, Sin",
    },
    {
      english: "A Lot (Phrase)",
      bangla: "অনেক",
      synonyms: "Many, Numerous",
      antonyms: "Few, Little",
    },
    {
      english: "Courteous (Adjective)",
      bangla: "ভদ্র",
      synonyms: "Polite, Respectful",
      antonyms: "Rude, Impolite",
    },
    {
      english: "Discourtesy (Noun)",
      bangla: "অভদ্রতা",
      synonyms: "Rudeness, Impoliteness",
      antonyms: "Courtesy, Politeness",
    },
    {
      english: "Win (Verb/Noun)",
      bangla: "জয়",
      synonyms: "Triumph, Succeed",
      antonyms: "Lose, Fail",
    },
    {
      english: "Enemy (Noun)",
      bangla: "শত্রু",
      synonyms: "Foe, Adversary",
      antonyms: "Friend, Ally",
    },
    {
      english: "Ensure (Verb)",
      bangla: "নিশ্চিত করা",
      synonyms: "Guarantee, Secure",
      antonyms: "Endanger, Risk",
    },
    {
      english: "Anger (Noun/Verb)",
      bangla: "ক্রোধ",
      synonyms: "Wrath, Fury",
      antonyms: "Calmness, Patience",
    },
    {
      english: "Remove (Verb)",
      bangla: "অপসারণ করা",
      synonyms: "Eliminate, Withdraw",
      antonyms: "Add, Insert",
    },
    {
      english: "Cordiality (Noun)",
      bangla: "সৌজন্য",
      synonyms: "Warmth, Friendliness",
      antonyms: "Hostility, Coldness",
    },
    {
      english: "Graceful (Adjective)",
      bangla: "মাধুর্যপূর্ণ",
      synonyms: "Elegant, Charming",
      antonyms: "Clumsy, Awkward",
    },
    {
      english: "Stylishly (Adverb)",
      bangla: "ফ্যাশনেবলভাবে",
      synonyms: "Fashionably, Trendily",
      antonyms: "Unfashionably, Plainly",
    },
    {
      english: "Appreciate (Verb)",
      bangla: "মূল্যায়ন করা",
      synonyms: "Value, Admire",
      antonyms: "Disregard, Underestimate",
    },
    {
      english: "Notice (Verb/Noun)",
      bangla: "নোটিশ",
      synonyms: "Observe, Perceive",
      antonyms: "Overlook, Ignore",
    },
    {
      english: "Ambition (Noun)",
      bangla: "মহৎ আকাঙ্ক্ষা",
      synonyms: "Aspiration, Goal",
      antonyms: "Contentment, Apathy",
    },
    {
      english: "Require (Verb)",
      bangla: "প্রয়োজন",
      synonyms: "Need, Demand",
      antonyms: "Surplus, Excess",
    },
    {
      english: "Proficiency (Noun)",
      bangla: "দক্ষতা",
      synonyms: "Skill, Competence",
      antonyms: "Ineptitude, Incompetence",
    },
    {
      english: "Wonder (Verb/Noun)",
      bangla: "আশ্চর্য",
      synonyms: "Amazement, Astonishment",
      antonyms: "Predictability, Expectation",
    },
    {
      english: "Tested (Adjective)",
      bangla: "পরীক্ষিত",
      synonyms: "Verified, Proven",
      antonyms: "Untested, Unverified",
    },
    {
      english: "Equally (Adverb)",
      bangla: "সমানভাবে",
      synonyms: "Alike, Similarly",
      antonyms: "Unequally, Differently",
    },
    {
      english: "Disappointing (Adjective)",
      bangla: "নিরাশাজনক",
      synonyms: "Unsatisfactory, Frustrating",
      antonyms: "Satisfying, Fulfilling",
    },
    {
      english: "Presumably (Adverb)",
      bangla: "ধারণা করা হয়",
      synonyms: "Supposedly, Probably",
      antonyms: "Definitely, Certainly",
    },
    {
      english: "Qualify (Verb)",
      bangla: "যোগ্যতা অর্জন করা",
      synonyms: "Meet the criteria, Enable",
      antonyms: "Disqualify, Invalidate",
    },
    {
      english: "Obviously (Adverb)",
      bangla: "স্পষ্টত",
      synonyms: "Clearly, Evidently",
      antonyms: "Ambiguously, Obscurely",
    },
    {
      english: "Wrong (Adj/Adverb)",
      bangla: "ভুল",
      synonyms: "Incorrect, False",
      antonyms: "Correct, Right",
    },
    {
      english: "Unique (Adjective)",
      bangla: "অনন্য",
      synonyms: "Distinctive, Singular",
      antonyms: "Common, Typical",
    },
    {
      english: "Mighty (Adjective)",
      bangla: "শক্তিশালী",
      synonyms: "Powerful, Strong",
      antonyms: "Weak, Powerless",
    },
    {
      english: "Humanity (Noun)",
      bangla: "মানবতা",
      synonyms: "Mankind, Compassion",
      antonyms: "Inhumanity, Cruelty",
    },
    {
      english: "Reliable (Adjective)",
      bangla: "বিশ্বাসযোগ্য",
      synonyms: "Dependable, Trustworthy",
      antonyms: "Unreliable, Untrustworthy",
    },
    {
      english: "Valuable (Adjective)",
      bangla: "মূল্যবান",
      synonyms: "Precious, Priceless",
      antonyms: "Worthless, Invaluable",
    },
    {
      english: "Ritual (Noun/Adjective)",
      bangla: "আচার",
      synonyms: "Ceremony, Rite",
      antonyms: "Informal, Casual",
    },
    {
      english: "Worthless (Adjective)",
      bangla: "অমূল্য",
      synonyms: "Valueless, Insignificant",
      antonyms: "Valuable, Worthy",
    },
    {
      english: "Loneliness (Noun)",
      bangla: "একাকীত্ব",
      synonyms: "Isolation, Solitude",
      antonyms: "Companionship, Togetherness",
    },
    {
      english: "Ailment (Noun)",
      bangla: "রোগ",
      synonyms: "Illness, Disease",
      antonyms: "Health, Well-being",
    },
    {
      english: "Happiness (Noun)",
      bangla: "আনন্দ",
      synonyms: "Joy, Contentment",
      antonyms: "Sadness, Unhappiness",
    },
    {
      english: "Friend (Noun)",
      bangla: "বন্ধু",
      synonyms: "Companion, Pal",
      antonyms: "Enemy, Foe",
    },
    {
      english: "Need (Noun/Verb)",
      bangla: "প্রয়োজন",
      synonyms: "Requirement, Necessity",
      antonyms: "Surplus, Excess",
    },
    {
      english: "Sympathy (Noun)",
      bangla: "সহানুভূতি",
      synonyms: "Compassion, Empathy",
      antonyms: "Apathy, Indifference",
    },
    {
      english: "Prove (Verb)",
      bangla: "প্রমাণ করা",
      synonyms: "Confirm, Verify",
      antonyms: "Disprove, Refute",
    },
    {
      english: "False (Adjective)",
      bangla: "মিথ্যা",
      synonyms: "Untrue, Incorrect",
      antonyms: "True, Accurate",
    },
    {
      english: "Harm (Noun/Verb)",
      bangla: "ক্ষতি",
      synonyms: "Injury, Damage",
      antonyms: "Benefit, Protection",
    },
    {
      english: "Laugh (Verb/Noun)",
      bangla: "হাসা",
      synonyms: "Chuckle, Giggle",
      antonyms: "Cry, Sob",
    },
    {
      english: "Pleasure (Noun/Verb)",
      bangla: "আনন্দ",
      synonyms: "Enjoyment, Delight",
      antonyms: "Displeasure, Discontentment",
    },
    {
      english: "Bring (Verb)",
      bangla: "নিয়ে আসা",
      synonyms: "Carry, Fetch",
      antonyms: "Take, Remove",
    },
    {
      english: "Idea (Noun)",
      bangla: "ধারণা",
      synonyms: "Concept, Notion",
      antonyms: "Reality, Fact",
    },
    {
      english: "Popular (Adjective)",
      bangla: "জনপ্রিয়",
      synonyms: "Well-liked, Famous",
      antonyms: "Unpopular, Unknown",
    },
    {
      english: "Form (Noun/Verb)",
      bangla: "রূপ",
      synonyms: "Shape, Structure",
      antonyms: "Formless, Shapeless",
    },
    {
      english: "Entertainment (Noun)",
      bangla: "বিনোদন",
      synonyms: "Amusement, Recreation",
      antonyms: "Boredom, Tedium",
    },
    {
      english: "Organize (Verb)",
      bangla: "আয়োজিত করা",
      synonyms: "Arrange, Coordinate",
      antonyms: "Disorganize, Scatter",
    },
    {
      english: "Sponsor (Verb/Noun)",
      bangla: "পৃষ্ঠপোষক",
      synonyms: "Supporter, Patron",
      antonyms: "Opponent, Critic",
    },
    {
      english: "Multinational (Adjective)",
      bangla: "বহুজাতিক",
      synonyms: "International, Global",
      antonyms: "Local, Domestic",
    },
    {
      english: "Pay (Verb/Noun)",
      bangla: "পেমেন্ট",
      synonyms: "Remunerate, Compensate",
      antonyms: "Receive, Collect",
    },
    {
      english: "Watch (Verb/Noun)",
      bangla: "দেখা",
      synonyms: "Observe, Monitor",
      antonyms: "Ignore, Neglect",
    },
    {
      english: "Maximum (Noun/Adj.)",
      bangla: "সর্বাধিক",
      synonyms: "Highest, Greatest",
      antonyms: "Minimum, Least",
    },
    {
      english: "Recognition (Noun)",
      bangla: "স্বীকৃতি",
      synonyms: "Acknowledgment, Notice",
      antonyms: "Ignorance, Neglect",
    },
    {
      english: "People (Noun)",
      bangla: "মানুষ",
      synonyms: "Humans, Population",
      antonyms: "Animals, Non-human",
    },
    {
      english: "Conservative (Adjective/Noun)",
      bangla: "সংحিত",
      synonyms: "Traditional, Conventional",
      antonyms: "Progressive, Liberal",
    },
    {
      english: "Early (Adjective/Adverb)",
      bangla: "প্রারম্ভিক",
      synonyms: "Timely, Premature",
      antonyms: "Late, Delayed",
    },
    {
      english: "Believe (Verb)",
      bangla: "বিশ্বাস করা",
      synonyms: "Trust, Have faith",
      antonyms: "Doubt, Disbelieve",
    },
    {
      english: "World (Noun)",
      bangla: "বিশ্ব",
      synonyms: "Globe, Earth",
      antonyms: "Local, Limited",
    },
    {
      english: "All (Adj./Adverb/P/N)",
      bangla: "সব",
      synonyms: "Every, Everything",
      antonyms: "None, Nothing",
    },
    {
      english: "Poverty (Noun)",
      bangla: "দারিদ্র্য",
      synonyms: "Destitution, Hardship",
      antonyms: "Wealth, Affluence",
    },
    {
      english: "Sufferings (Noun)",
      bangla: "কষ্ট",
      synonyms: "Pain, Misery",
      antonyms: "Joy, Happiness",
    },
    {
      english: "Overcome (Verb)",
      bangla: "জয় করা",
      synonyms: "Conquer, Defeat",
      antonyms: "Surrender, Succumb",
    },
    {
      english: "Same (Adjective)",
      bangla: "একই",
      synonyms: "Identical, Similar",
      antonyms: "Different, Diverse",
    },
    {
      english: "Perplexing (Adjective)",
      bangla: "বিভ্রান্তিকর",
      synonyms: "Confusing, Baffling",
      antonyms: "Clear, Understandable",
    },
    {
      english: "Upsetting (Adj.)",
      bangla: "মর্মাহত",
      synonyms: "Disturbing, Distressing",
      antonyms: "Soothing, Comforting",
    },
    {
      english: "Imperialism (Noun)",
      bangla: "সাম্রাজ্যবাদ",
      synonyms: "Colonialism, Domination",
      antonyms: "Independence, Freedom",
    },
    {
      english: "Evil (Noun/Adjective)",
      bangla: "অশুভ",
      synonyms: "Wicked, Malevolent",
      antonyms: "Good, Virtuous",
    },
    {
      english: "Sooner (Adverb)",
      bangla: "শীঘ্র",
      synonyms: "Early, Before",
      antonyms: "Later, After",
    },
    {
      english: "Chucked (Verb)",
      bangla: "ছুঁড়ে ফেলা",
      synonyms: "Discarded, Thrown",
      antonyms: "Retained, Kept",
    },
    {
      english: "Better (Adj./Adverb)",
      bangla: "ভাল",
      synonyms: "Superior, Improved",
      antonyms: "Worse, Inferior",
    },
    {
      english: "Theoretically (Adverb)",
      bangla: "তাত্ত্বিকভাবে",
      synonyms: "Hypothetically, Speculatively",
      antonyms: "Practically, Actually",
    },
    {
      english: "Secretly (Adverb)",
      bangla: "গোপনে",
      synonyms: "Confidentially, Stealthily",
      antonyms: "Openly, Publicly",
    },
    {
      english: "Oppressor (Noun)",
      bangla: "নিপীড়ক",
      synonyms: "Tyrant, Persecutor",
      antonyms: "Liberator, Protector",
    },
    {
      english: "Success (Noun)",
      bangla: "সাফল্য",
      synonyms: "Achievement, Prosperity",
      antonyms: "Failure, Defeat",
    },
    {
      english: "Job (Noun)",
      bangla: "কাজ",
      synonyms: "Work, Occupation",
      antonyms: "Leisure, Rest",
    },
    {
      english: "Great (Adjective)",
      bangla: "মহান",
      synonyms: "Grand, Magnificent",
      antonyms: "Small, Insignificant",
    },
    {
      english: "Because (Conjunction)",
      bangla: "কারণ",
      synonyms: "Since, Due to",
      antonyms: "Regardless, Irrespective",
    },
    {
      english: "Know (Verb)",
      bangla: "জানা",
      synonyms: "Understand, Familiarize",
      antonyms: "Ignore, Unawareness",
    },
    {
      english: "Follow (Verb)",
      bangla: "অনুসরণ করা",
      synonyms: "Obey, Pursue",
      antonyms: "Rebel, Disobey",
    },
    {
      english: "Rule (Noun/Verb)",
      bangla: "নিয়ম",
      synonyms: "Regulation, Guideline",
      antonyms: "Anarchy, Disorder",
    },
    {
      english: "Never (Adverb)",
      bangla: "কখনও নয়",
      synonyms: "Not ever, No time",
      antonyms: "Always, Continuously",
    },
    {
      english: "Victory (Noun)",
      bangla: "জয়",
      synonyms: "Triumph, Conquest",
      antonyms: "Defeat, Loss",
    },
    {
      english: "Desirable (Adjective)",
      bangla: "আকর্ষণীয়",
      synonyms: "Attractive, Appealing",
      antonyms: "Undesirable, Unappealing",
    },
    {
      english: "Liberation (Noun)",
      bangla: "মুক্তি",
      synonyms: "Freedom, Release",
      antonyms: "Captivity, Confinement",
    },
    {
      english: "Brutal (Adjective)",
      bangla: "নির্মম",
      synonyms: "Cruel, Savage",
      antonyms: "Gentle, Kind",
    },
    {
      english: "Massacre (Noun/Verb)",
      bangla: "হত্যাকাণ্ড",
      synonyms: "Slaughter, Carnage",
      antonyms: "Salvation, Rescue",
    },
    {
      english: "Human (Adjective/Noun)",
      bangla: "মানব",
      synonyms: "Homo sapiens, Mankind",
      antonyms: "Non-human, Animal",
    },
    {
      english: "Located (Verb)",
      bangla: "অবস্থিত",
      synonyms: "Situated, Positioned",
      antonyms: "Removed, Displaced",
    },
    {
      english: "Called (Verb)",
      bangla: "ডাকা",
      synonyms: "Named, Referred",
      antonyms: "Unnamed, Anonymous",
    },
    {
      english: "Surrounded (Verb)",
      bangla: "ঘেরাও করা",
      synonyms: "Encircled, Encompassed",
      antonyms: "Isolated, Alone",
    },
    {
      english: "Started (Verb)",
      bangla: "শুরু করা",
      synonyms: "Began, Commenced",
      antonyms: "Ended, Finished",
    },
    {
      english: "Killed (Verb)",
      bangla: "হত্যা করা",
      synonyms: "Murdered, Slaughtered",
      antonyms: "Saved, Preserved",
    },
    {
      english: "Largest (Adjective)",
      bangla: "সর্ববৃহৎ",
      synonyms: "Biggest, Greatest",
      antonyms: "Smallest, Tiniest",
    },
    {
      english: "Fertile (Adjective)",
      bangla: "উর্বর",
      synonyms: "Productive, Rich",
      antonyms: "Barren, Infertile",
    },
    {
      english: "Industrious (Adjective)",
      bangla: "পরিশ্রমী",
      synonyms: "Hardworking, Diligent",
      antonyms: "Lazy, Idle",
    },
    {
      english: "Ceaselessly (Adverb)",
      bangla: "নিরবচ্ছিন্নভাবে",
      synonyms: "Continuously, Uninterruptedly",
      antonyms: "Sporadically, Intermittently",
    },
    {
      english: "Lazy (Adjective)",
      bangla: "অলস",
      synonyms: "Idle, Slothful",
      antonyms: "Energetic, Active",
    },
    {
      english: "Love (Noun/Verb)",
      bangla: "ভালবাসা",
      synonyms: "Affection, Adoration",
      antonyms: "Hate, Detest",
    },
    {
      english: "Strong (Adjective)",
      bangla: "শক্তিশালী",
      synonyms: "Powerful, Mighty",
      antonyms: "Weak, Feeble",
    },
    {
      english: "Moving (Adjective/Verb)",
      bangla: "গতি",
      synonyms: "Moving, Mobile",
      antonyms: "Stationary, Still",
    },
    {
      english: "Respect (Noun/Verb)",
      bangla: "সম্মান",
      synonyms: "Admiration, Esteem",
      antonyms: "Disrespect, Disregard",
    },
    {
      english: "Devotion (Noun)",
      bangla: "নিবেদন",
      synonyms: "Dedication, Loyalty",
      antonyms: "Indifference, Apathy",
    },
    {
      english: "Consist (Verb)",
      bangla: "গঠিত হওয়া",
      synonyms: "Comprise, Compose",
      antonyms: "Exclude, Omit",
    },
    {
      english: "Narrow (Adjective/Verb)",
      bangla: "সঙ্কীর্ণ",
      synonyms: "Thin, Slim",
      antonyms: "Wide, Broad",
    },
    {
      english: "Include (Verb)",
      bangla: "অন্তর্ভুক্ত করা",
      synonyms: "Incorporate, Contain",
      antonyms: "Exclude, Omit",
    },
    {
      english: "Aquatic (Adjective)",
      bangla: "জলজ",
      synonyms: "Water-based, Marine",
      antonyms: "Terrestrial, Land-based",
    },
    {
      english: "Successful (Adjective)",
      bangla: "সফল",
      synonyms: "Achieving, Prosperous",
      antonyms: "Unsuccessful, Failing",
    },
    {
      english: "Broad (Adjective)",
      bangla: "প্রশস্ত",
      synonyms: "Wide, Extensive",
      antonyms: "Narrow, Limited",
    },
    {
      english: "Habitat (Noun)",
      bangla: "বাসস্থান",
      synonyms: "Environment, Dwelling",
      antonyms: "Barren, Uninhabited",
    },
    {
      english: "Inconspicuous (Adjective)",
      bangla: "অদৃশ্য",
      synonyms: "Unnoticeable, Invisible",
      antonyms: "Noticeable, Visible",
    },
    {
      english: "Certain (Adjective)",
      bangla: "নিশ্চিত",
      synonyms: "Definite, Assured",
      antonyms: "Uncertain, Doubtful",
    },
    {
      english: "Employed (Adjective)",
      bangla: "নিয়োজিত",
      synonyms: "Hired, Occupied",
      antonyms: "Unemployed, Idle",
    },
    {
      english: "Attractive (Adjective)",
      bangla: "আকর্ষণীয়",
      synonyms: "Appealing, Alluring",
      antonyms: "Unattractive, Repelling",
    },
    {
      english: "Dark (Adjective/Noun)",
      bangla: "অন্ধকার",
      synonyms: "Gloomy, Obscure",
      antonyms: "Bright, Light",
    },
    {
      english: "Shiny (Adjective)",
      bangla: "চমকদার",
      synonyms: "Gleaming, Polished",
      antonyms: "Dull, Matte",
    },
    {
      english: "Beauty (Noun)",
      bangla: "সৌন্দর্য",
      synonyms: "Attractiveness, Elegance",
      antonyms: "Ugliness, Plainness",
    },
    {
      english: "Ambition (Noun)",
      bangla: "মহৎকামনা",
      synonyms: "Aspiration, Goal",
      antonyms: "Contentment, Apathy",
    },
    {
      english: "Popular (Adjective)",
      bangla: "জনপ্রিয়",
      synonyms: "Well-liked, Famous",
      antonyms: "Unpopular, Unknown",
    },
    {
      english: "Effects (Noun)",
      bangla: "প্রভাব",
      synonyms: "Impact, Consequence",
      antonyms: "Cause, Source",
    },
    {
      english: "Touch (Verb/Noun)",
      bangla: "স্পর্শ",
      synonyms: "Contact, Feel",
      antonyms: "Distance, Avoidance",
    },
    {
      english: "Means (Noun)",
      bangla: "পদ্ধতি",
      synonyms: "Method, Way",
      antonyms: "End, Conclusion",
    },
    {
      english: "Connected (Adjective)",
      bangla: "সংযুক্ত",
      synonyms: "Linked, Related",
      antonyms: "Disconnected, Unrelated",
    },
    {
      english: "Unknown (Adjective)",
      bangla: "অজানা",
      synonyms: "Unidentified, Mystery",
      antonyms: "Familiar, Recognizable",
    },
    {
      english: "Easy (Adjective)",
      bangla: "সহজ",
      synonyms: "Simple, Effortless",
      antonyms: "Difficult, Challenging",
    },
    {
      english: "Harass (Verb)",
      bangla: "হেনস্থা করা",
      synonyms: "Annoy, Disturb",
      antonyms: "Comfort, Soothe",
    },
    {
      english: "Teenager (Noun)",
      bangla: "কিশোর",
      synonyms: "Adolescent, Youth",
      antonyms: "Adult, Elder",
    },
    {
      english: "Spend (Verb)",
      bangla: "ব্যয় করা",
      synonyms: "Consume, Expend",
      antonyms: "Save, Conserve",
    },
    {
      english: "Curse (Noun/Verb)",
      bangla: "অভিশাপ",
      synonyms: "Hex, Malediction",
      antonyms: "Blessing, Benediction",
    },
    {
      english: "Retards (Verb)",
      bangla: "বিরত করা",
      synonyms: "Delays, Hinders",
      antonyms: "Accelerates, Promotes",
    },
    {
      english: "Darkness (Noun)",
      bangla: "অন্ধকার",
      synonyms: "Obscurity, Shadow",
      antonyms: "Light, Brightness",
    },
    {
      english: "Unaware (Adjective)",
      bangla: "অজ্ঞ",
      synonyms: "Ignorant, Uninformed",
      antonyms: "Knowledgeable, Aware",
    },
    {
      english: "Most (Adjective/Noun)",
      bangla: "অধিকাংশ",
      synonyms: "Majority, Almost all",
      antonyms: "Few, Least",
    },
    {
      english: "Because (Conjunction)",
      bangla: "কারণ",
      synonyms: "Since, Due to",
      antonyms: "Regardless, Irrespective",
    },
    {
      english: "Practical (Adjective)",
      bangla: "ব্যবহারিক",
      synonyms: "Functional, Usable",
      antonyms: "Theoretical, Impractical",
    },
    {
      english: "Measures (Noun)",
      bangla: "মাপ",
      synonyms: "Steps, Actions",
      antonyms: "Neglect, Inaction",
    },
    {
      english: "Enlightened (Adjective)",
      bangla: "জ্ঞানী",
      synonyms: "Informed, Knowledgeable",
      antonyms: "Uninformed, Ignorant",
    },
    {
      english: "Honesty (Noun)",
      bangla: "সত্যতা",
      synonyms: "Integrity, Truthfulness",
      antonyms: "Dishonesty, Deceit",
    },
    {
      english: "Injustice (Noun)",
      bangla: "অন্যায়",
      synonyms: "Unfairness, Oppression",
      antonyms: "Justice, Fairness",
    },
    {
      english: "Immoral (Adjective)",
      bangla: "অনৈতিক",
      synonyms: "Unethical, Depraved",
      antonyms: "Moral, Virtuous",
    },
    {
      english: "Uncomfortable (Adjective)",
      bangla: "অস্বস্তিকর",
      synonyms: "Restless, Anxious",
      antonyms: "Comfortable, Relaxed",
    },
    {
      english: "Responsible (Adjective)",
      bangla: "দায়িত্বশীল",
      synonyms: "Accountable, Answerable",
      antonyms: "Irresponsible, Negligent",
    },
    {
      english: "Perform (Verb)",
      bangla: "সম্পাদন করা",
      synonyms: "Execute, Accomplish",
      antonyms: "Neglect, Fail",
    },
    {
      english: "Insincerity (Noun)",
      bangla: "অসত্যতা",
      synonyms: "Dishonesty, Deception",
      antonyms: "Sincerity, Honesty",
    },
    {
      english: "Better (Adjective/Adverb)",
      bangla: "ভালো",
      synonyms: "Superior, Improved",
      antonyms: "Worse, Inferior",
    },
    {
      english: "Falsehood (Noun)",
      bangla: "মিথ্যা",
      synonyms: "Deceit, Untruth",
      antonyms: "Truth, Authenticity",
    },
    {
      english: "Never (Adverb)",
      bangla: "কখনোই নয়",
      synonyms: "Not ever, No time",
      antonyms: "Always, Continuously",
    },
    {
      english: "Weaker (Adjective)",
      bangla: "দুর্বল",
      synonyms: "Frailer, Less robust",
      antonyms: "Stronger, More potent",
    },
    {
      english: "Discourage (Verb)",
      bangla: "হতাশ করা",
      synonyms: "Deter, Dishearten",
      antonyms: "Encourage, Motivate",
    },
    {
      english: "Frustrating (Adjective/Verb)",
      bangla: "হতাশাজনক",
      synonyms: "Disheartening, Annoying",
      antonyms: "Satisfying, Gratifying",
    },
    {
      english: "Interest (Noun/Verb)",
      bangla: "আগ্রহ",
      synonyms: "Curiosity, Attraction",
      antonyms: "Disinterest, Apathy",
    },
    {
      english: "Ability (Noun)",
      bangla: "ক্ষমতা",
      synonyms: "Competence, Skill",
      antonyms: "Inability, Incapacity",
    },
    {
      english: "Dream (Noun/Verb)",
      bangla: "স্বপ্ন",
      synonyms: "Vision, Fantasy",
      antonyms: "Reality, Fact",
    },
    {
      english: "Best (Adjective/Noun)",
      bangla: "সেরা",
      synonyms: "Finest, Optimal",
      antonyms: "Worst, Inferior",
    },
    {
      english: "Achieve (Verb)",
      bangla: "অর্জন করা",
      synonyms: "Accomplish, Attain",
      antonyms: "Fail, Miss",
    },
    {
      english: "Nation (Noun)",
      bangla: "জাতি",
      synonyms: "Country, People",
      antonyms: "Individual, Person",
    },
    {
      english: "Dependent (Adjective)",
      bangla: "নির্ভরশীল",
      synonyms: "Reliant, Subordinate",
      antonyms: "Independent, Self-reliant",
    },
    {
      english: "Dominate (Verb)",
      bangla: "প্রভুত্ব করা",
      synonyms: "Control, Rule",
      antonyms: "Submit, Surrender",
    },
    {
      english: "Importance (Noun)",
      bangla: "গুরুত্ব",
      synonyms: "Significance, Relevance",
      antonyms: "Insignificance, Irrelevance",
    },
    {
      english: "Mark (Noun/Verb)",
      bangla: "চিহ্ন",
      synonyms: "Symbol, Sign",
      antonyms: "Blur, Obscure",
    },
    {
      english: "Declare (Verb)",
      bangla: "ঘোষণা করা",
      synonyms: "Announce, Proclaim",
      antonyms: "Conceal, Suppress",
    },
    {
      english: "Begin (Verb)",
      bangla: "শুরু করা",
      synonyms: "Commence, Start",
      antonyms: "Conclude, End",
    },
    {
      english: "Battle (Noun/Verb)",
      bangla: "যুদ্ধ",
      synonyms: "Conflict, Combat",
      antonyms: "Peace, Truce",
    },
    {
      english: "Freedom (Noun)",
      bangla: "স্বাধীনতা",
      synonyms: "Liberty, Autonomy",
      antonyms: "Captivity, Oppression",
    },
  ];

  return (
    <div className="px-5 md:w-[85%] mx-auto">
      <div className="py-20 text-center">
        <h1 className="">
          Synonyms <br /> & <br /> Antonyms
        </h1>
      </div>

      <div className="pt-5 pb-10">
        <h3 className="">HSC Synonyms and Antonyms with Answer</h3>
        1. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        <br />
        Sports are a popular form of entertainment. Many international sporting
        events are organized from time to time. Most of the events are sponsored
        by multinational manufacturing companies and business firms. They pay
        for the sports events in exchange for the right to advertise their
        products during those events. These events are telecast worldwide by
        satellite and people all over the world watch them live. As a result,
        the sponsors’ products receive maximum media coverage giving companies
        international recognition. This is the only commercial aspect of
        international sport but there are other aspects too.
        <br />
        (a) popular (antonym) (b) form (synonym) (c) entertainment (synonym) (d)
        organize (synonym) (e) sponsor (synonym) (f) multinational (antonym) (g)
        pay (antonym) (h) watch (synonym) (i) maximum (antonym) (j) recognition
        (antonym) <br />
        <br />
        Answer: <br />
        (a) unpopular (b) kind/ type (c) recreation/ amusement (d) arrange (e)
        patronize (f) national/ domestic (g) receive/ take (h) see/ witness/
        enjoy (i) minimum (j) denial/ refusal
        <br />
        <br />
        2. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        The process of globalization obviously requires a common language for
        international communication. For many different reasons, English has
        achieved the prestige of being that language. As a result, it has
        crossed national borders to reach people who speak other languages. It
        is no longer the unique possession of British or American people, but a
        language that belongs to the world’s people. In fact, bilingual and
        multilingual users of English far outnumber its monolingual native
        speakers. This phenomenon has led to a bewildering variety of English
        around the world. As more and more people speak English, more and more
        varieties have emerged which are strongly influenced by the
        pronunciation, grammar and idioms of the respective mother-tongues.
        World English has now moved away from the control of the native
        speakers. However, the question of British or American English is not so
        important now. Today’s slogan is mutual intelligibility among users of
        the language. <br />
        (a) obviously (synonym) (b) prestige (synonym) (c) national (synonym)
        (d) unique (antonym) (e) native (antonym) (f) variety (synonym) (g)
        emerge (antonym) (h) control (antonym) (i) important (synonym) (j)
        intelligibility (antonym) <br />
        <br />
        Answer: <br />
        (a) certainly/ definitely/ surely/ undoubtedly/ apparently (b) honour/
        status (c) local/ domestic (d) common/ ordinary (e) foreign (f)
        diversity (g) disappear (h) freedom (i) significant (j)
        unintelligibility
        <br />
        <br />
        3. Read the passage and then write the antonym or synonym of the words
        as directed below. Sincerity is the root of success of all works. One
        can go a long way if he does a job with sincerity. The great men are
        sincere because they know that sincerity is the key to success. Those
        who do not follow the rules of sincerity can never go a long way.
        Sincerity is the secret of victory. If any work is not done with
        sincerity, one will never receive desirable output from it. So we should
        be sincere in every walk of life. <br />
        (a) success (antonym) (b) job (synonym) (c) great (antonym) (d) because
        (synonym) (e) know (synonym) (f) follow (antonym) (g) rule (synonym) (h)
        never (antonym) (i) victory (synonym) (j) desirable (antonym) <br />
        <br />
        Answer: <br />
        (a) failure (b) work/ service (c) ordinary/ common (d) since/ as (e)
        realize/ understand (f) disobey/ ignore (g) law/ regulation/ order (h)
        ever/ always (i) win/ triumph (j) undesirable
        <br />
        <br />
        4. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        There are many people who have a conservative outlook. Quite early in
        life they learn to believe that everything in this world was
        predetermined and all that happens to them was ordained by God. From
        this belief, the poor generally accept their poverty and all their
        sorrows and sufferings without trying much to overcome them. They also
        have the same sort of attitude towards illness and disease. <br />
        (a) people (synonym) (b) conservative (antonym) (c) early (antonym) (d)
        believe (synonym) (e) world (synonym) (f) all (antonym) (g) poverty
        (antonym) (h) sufferings (synonym) (i) overcome (synonym) (j) same
        (antonym)
        <br />
        <br />
        Answer: <br />
        (a) persons/ public (b) liberal (c) late (d) trust/ consider/ accept/
        think (e) globe/ earth (f) nothing/ none/ no (g) wealth/ affluence (h)
        affliction/ miseries/ distress (i) conquer/ succeed/ surpass (j)
        different
        <br />
        <br />
        5. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        During the nine month long Liberation War the Pakistani army carried out
        the most brutal massacre in human history. There were thousands of
        killing fields all around Bangladesh. One of the largest killing fields
        is located at Dumuria in Khulna. The area is called Chuknagar. Hundreds
        and thousands of fleeing people arrived at Chuknagar to cross the
        border. On 20 May 1971 Pakistani soldiers surrounded the area. They
        started to fire at the fleeing people. About eight to ten thousand
        people were killed at Chuknagar.
        <br />
        (a) liberation (synonym) (b) brutal (antonym) (c) massacre (synonym) (d)
        human (antonym) (e) located (antonym) (f) called (synonym) (g)
        surrounded (synonym) (h) started (antonym) (i) killed (synonym) (j)
        largest (antonym)
        <br />
        <br />
        Answer: <br />
        (a) freedom/ independence (b) humane/ kind/ gentle/ polite (c) genocide/
        holocaust (d) inhuman/ unkind (e) dislocated (f) named (g) encircled (h)
        finished/ stopped (i) assassinated/ murdered (j) smallest
        <br />
        <br />
        6. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        Bangladesh is an agro-based country. The soil of Bengal is purer than
        gold. Most of her land is fertile. The farmers of this country are
        industrious. They work ceaselessly from dawn to dusk. They are not lazy.
        They love their motherland. They have a strong attachment to their
        motherland. Their diligence and perseverance keep the wheel of economy
        moving. We must respect them. We are grateful to them. We must follow
        their devotion to duty and country. <br />
        (a) fertile (synonym) (b) industrious (antonym) (c) ceaselessly
        (synonym) (d) lazy (synonym) (e) love (antonym) (f) strong (synonym) (g)
        moving (antonym) (h) respect (synonym) (i) grateful (antonym) (j)
        devotion (synonym) <br />
        <br />
        Answer: <br />
        (a) alluvial/ productive (b) lazy/ idle (c) continuously (d) idle (e)
        hate (f) deep/ profound (g) unmoving/ fixed/ stagnant (h) honour (i)
        ungrateful (j) dedication/ loyalty
        <br />
        <br />
        7. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        All this was perplexing and upsetting. For at the time I had already
        made up my mind that imperialism was an evil thing and the sooner I
        chucked up my job and got out of it the better. Theoretically and
        secretly, of course I was all for the strugglers and against their
        oppressors. <br />
        (a) perplexing (antonym) (b) upsetting (antonym) (c) imperialism
        (synonym) (d) evil (antonym) (e) sooner (antonym) (f) chucked (synonym)
        (g) better (antonym) (h) Theoretically (synonym) (i) secretly (synonym)
        (j) oppressor (synonym)
        <br />
        <br />
        Answer: <br />
        (a) easy/ clear (b) comforting (c) colonialism (d) decent (e) later (f)
        discarded/ abandoned/ quitted (g) worse (h) hypothetically/ apparently
        (i) privately (j) tyrant/ autocrat
        <br />
        <br />
        8. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        Books are the unique medium through which we contact mighty minds of
        ages. Books tell us about their feelings what they said and what they
        did. Books are one of the greatest friends to us. They introduce us the
        best humanity, They are reliable records of the history. A book is a
        valuable living voice. We can know about the thoughts and rituals of
        pastmen through books. We should read good books and avoid worthless
        ones. A good book is a friend of loneliness and a nurse in ailment. We
        can find real happiness by reading good books. <br />
        (a) unique (antonym) (b) mighty (antonym) (c) humanity (synonym) (d)
        reliable (antonym) (e) valuable (antonym) (f) ritual (synonym) (g)
        worthless (synonym) (h) loneliness (synonym) (i) ailment (synonym) (j)
        happiness (antonym).
        <br />
        <br />
        Answer: <br />
        (a) common/ general/ simple (b) weak/ feeble/ frail/ powerless (c)
        morality/ benevolence/ generosity/ kindness (d) unreliable/ doubtful/
        untrustworthy (e) valueless/ worthless/ useless/ insignificent (f)
        ceremony/ convention/ tradition/ custom (g) valueless/ futile/
        meaningless/ useless (h) aloneness/ solitude/ solitariness/ desolation/
        isolation (i) disease/ malady/ illness/ sickness/ disorder (j)
        unhappiness/ sorrows/ miseries/ grief
        <br />
        <br />
        9. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        Books are men’s best friends in life. You may have many good friends but
        you do not find them when you need them. They may not always come to you
        with sympathy. Some may prove true or some may prove false and do you
        much harm. But books are always ready to be your side. Some books will
        make you laugh, some others will give you much pleasure. Again some
        books will bring new knowledge and ideas. They are ever friends
        throughout your life. <br />
        (a) friend (antonym) (b) need (antonym) (c) sympathy (synonym) (d) prove
        (synonym) (e) false (antonym) (f) harm (antonym) (g) laugh (antonym) (h)
        pleasure (synonym) (i) bring (synonym) (j) idea (synonym) <br />
        <br />
        Answer: <br />
        (a) foe/ enemy/ rival (b) avoid/ shun/ avert/ repel (c) kindness/
        empathy/ compassion (d) verify/ show/ test/ testify/ appear/ seem (e)
        true/ actual/ genuine/ real (f) help/ assist/ benefit (g) cry/ weep (h)
        delight/ joy/ enjoyment/ amusement (i) fetch/ get/ carry/ bear (j) view/
        concept/ design/ thought/ notion
        <br />
        <br />
        10. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        After the flight of Yuri Gagarin, the first human being to travel to
        outer space in 1961, the Soviet Union decided to send a woman in space.
        Proletarian Valentina Tereshkova was selected for this project from
        among more than four hundred applicants. Since the successful launch of
        the spacecraft Vostok-5 on 14 June 1963, Tereshkova began preparing for
        her own flight. On 16 June 1963, she was dressed in space-suits and
        taken to the space shuttle launch pad by a bus. After completing her
        communication and life support checks, she was sealed inside Vostok-6.
        Finishing a two-hour countdown, Vostok-6 launched faultlessly. Although
        Tereshkova experienced nausea and physical discomfort for much of the
        flight, she orbited the earth 48 times and spent almost three days in
        space. She also maintained a flight log and took photographs of the
        horizon, which were later used to identify aerosol layers within the
        atmosphere. <br />
        (a) outer (antonym) (b) proletarian (synonym) (c) launch (synonym) (d)
        prepare (synonym) (e) began (antonym) (f) faultless (antonym) (g) nausea
        (synonym) (h) discomfort (antonym) (i) maintain (synonym) (j) later
        (antonym) <br />
        <br />
        Answer: <br />
        (a) inner/ inside (b) common/ ordinary/ poor (c) propulsion/ fling/ take
        off (d) ready (e) finished/ completed (f) flawed/ faulty/ defective (g)
        sickness/ vomiting/ dizziness (h) comfort (i) keep/ follow (j) earlier
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-1 px-1 text-left">english</th>
              <th className="py-1 px-1 text-left">bangla</th>
              <th className="py-1 px-1 text-left">Synonyms</th>
              <th className="py-1 px-1 text-left">Antonyms</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data.map((item, index) => (
              <tr key={index} className=" hover:bg-gray-100">
                <td className="py-1 px-1 text-center">{item.english}</td>
                <td className="py-1 px-1 text-center">{item.bangla}</td>
                <td className="py-1 px-1 text-center">{item.synonyms}</td>
                <td className="py-1 px-1 text-center">{item.antonyms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SynAnt;
