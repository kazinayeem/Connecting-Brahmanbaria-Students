export interface LocalWordItem {
  id: string;
  word: string;
  pronunciation?: string;
  standardBn: string;
  meaningEn: string;
  exampleBb: string;
  exampleBn: string;
  exampleEn: string;
  area: string;
  category: 'daily' | 'pronoun' | 'verb' | 'adverb' | 'relationship' | 'expression';
  source: string;
}

export interface LocalProverbItem {
  id: string;
  proverbBb: string;
  proverbBn: string;
  meaningBn: string;
  meaningEn: string;
  context: string;
}

export const localVocabularyList: LocalWordItem[] = [
  {
    id: "word-1",
    word: "আমাগো / মোগো",
    pronunciation: "Amago / Mogo",
    standardBn: "আমাদের",
    meaningEn: "Our / Ours",
    exampleBb: "এইডা আমাগো বাউনবাইরার পোলাপানের নিজস্ব পরিবার।",
    exampleBn: "এটি আমাদের ব্রাহ্মণবাড়িয়ার শিক্ষার্থীদের নিজস্ব পরিবার।",
    exampleEn: "This is our own family of Brahmanbaria students.",
    area: "সমগ্র ব্রাহ্মণবাড়িয়া",
    category: "pronoun",
    source: "ব্রাহ্মণবাড়িয়ার আঞ্চলিক ভাষার অভিধান ও লোকমুখের ভাষা"
  },
  {
    id: "word-2",
    word: "তোমাগো / তোমগো",
    pronunciation: "Tomago / Tomgo",
    standardBn: "তোমাদের",
    meaningEn: "Your / Yours (plural/informal)",
    exampleBb: "তোমাগো ক্লাসের পড়া নিয়া কুনো প্যাঁচ লাগলে জানাইও।",
    exampleBn: "তোমাদের ক্লাসের পড়া নিয়ে কোনো সমস্যা হলে জানিও।",
    exampleEn: "Let us know if you face any difficulty with your class studies.",
    area: "সদর, সরাইল, আশুগঞ্জ",
    category: "pronoun",
    source: "স্থানীয় কথ্যরীতি"
  },
  {
    id: "word-3",
    word: "আপনেরে / তোমারে",
    pronunciation: "Apanere",
    standardBn: "আপনাকে",
    meaningEn: "To you (formal)",
    exampleBb: "আমাগো সংগঠনে আপনেরে স্বাগতম জানাই।",
    exampleBn: "আমাদের সংগঠনে আপনাকে স্বাগতম জানাই।",
    exampleEn: "We welcome you to our association.",
    area: "সমগ্র জেলা",
    category: "pronoun",
    source: "দৈনন্দিন কথ্যরীতি"
  },
  {
    id: "word-4",
    word: "কই থেইকা",
    pronunciation: "Koi theika",
    standardBn: "কোথা থেকে",
    meaningEn: "From where",
    exampleBb: "আপনে বাউনবাইরার কুন উপজেলা থেইকা আইছেন?",
    exampleBn: "আপনি ব্রাহ্মণবাড়িয়ার কোন উপজেলা থেকে এসেছেন?",
    exampleEn: "Which upazila of Brahmanbaria have you come from?",
    area: "নবীনগর, বাঞ্ছারামপুর, কসবা",
    category: "adverb",
    source: "লোকসংস্কৃতি ও আঞ্চলিক ভাষা সমীক্ষা"
  },
  {
    id: "word-5",
    word: "দেহেন",
    pronunciation: "Dehen",
    standardBn: "দেখুন",
    meaningEn: "Look / View / See",
    exampleBb: "কমিটির বিস্তারিত তালিকা এইহানে দেহেন।",
    exampleBn: "কমিটির বিস্তারিত তালিকা এখানে দেখুন।",
    exampleEn: "See the detailed committee list here.",
    area: "সমগ্র ব্রাহ্মণবাড়িয়া",
    category: "verb",
    source: "আঞ্চলিক কথ্য ভাষা"
  },
  {
    id: "word-6",
    word: "এইহানে / ওইহানে",
    pronunciation: "Eihane / Oihane",
    standardBn: "এখানে / সেখানে",
    meaningEn: "Here / There",
    exampleBb: "এইহানে সব দরকারী নোটিশ আর আপডেট পাইবেন।",
    exampleBn: "এখানে সব দরকারি নোটিশ ও আপডেট পাবেন।",
    exampleEn: "You will find all necessary notices and updates here.",
    area: "আখাউড়া, কসবা, সদর",
    category: "adverb",
    source: "তিতাস অববাহিকার লোকভাষা"
  },
  {
    id: "word-7",
    word: "কামকাজ",
    pronunciation: "Kam-kaj",
    standardBn: "কাজকর্ম বা কার্যক্রম",
    meaningEn: "Activities / Work",
    exampleBb: "সারা বছর আমাগো অনেকগুলা শিক্ষামূলক কামকাজ চলে।",
    exampleBn: "সারা বছর আমাদের অনেকগুলো শিক্ষামূলক কার্যক্রম চলে।",
    exampleEn: "We run numerous educational activities throughout the year.",
    area: "সমগ্র ব্রাহ্মণবাড়িয়া",
    category: "daily",
    source: "দৈনন্দিন স্থানীয় প্রয়োগ"
  },
  {
    id: "word-8",
    word: "অহন",
    pronunciation: "Ohon",
    standardBn: "এখন",
    meaningEn: "Now",
    exampleBb: "অহনই আমাগো লগে যুক্ত হউন।",
    exampleBn: "এখনই আমাদের সাথে যুক্ত হোন।",
    exampleEn: "Join us right now.",
    area: "নাসিরনগর, সরাইল, বিজয়নগর",
    category: "adverb",
    source: "আঞ্চলিক শব্দভাণ্ডার"
  },
  {
    id: "word-9",
    word: "কেমনে",
    pronunciation: "Kemne",
    standardBn: "কীভাবে / কেমন করে",
    meaningEn: "How / In what manner",
    exampleBb: "ডিআইইউতে আইসা কেমনে মানাইয়া নিবেন হেইডা নিয়া ভাইবেন না।",
    exampleBn: "ডিআইইউতে এসে কীভাবে মানিয়ে নেবেন তা নিয়ে ভাববেন না।",
    exampleEn: "Do not worry about how to adapt after arriving at DIU.",
    area: "সমগ্র ব্রাহ্মণবাড়িয়া",
    category: "adverb",
    source: "দৈনন্দিন সাধারণ কথ্যরীতি"
  },
  {
    id: "word-10",
    word: "আইজকা / কাইলকা",
    pronunciation: "Aijka / Kailka",
    standardBn: "আজকে / কালকে",
    meaningEn: "Today / Tomorrow",
    exampleBb: "আইজকা বিকাল ৪টায় আমাগো স্টাডি সার্কেল বসতাছে।",
    exampleBn: "আজকে বিকেল ৪টায় আমাদের স্টাডি সার্কেল বসছে।",
    exampleEn: "Our study circle meets today at 4 PM.",
    area: "সমগ্র জেলা",
    category: "daily",
    source: "আঞ্চলিক প্রমিত অভিধান"
  },
  {
    id: "word-11",
    word: "বেহাইন বেলা / রাইতের বেলা",
    pronunciation: "Behain bela / Raiter bela",
    standardBn: "সকালবেলা / রাত্রিবেলা",
    meaningEn: "Morning time / Night time",
    exampleBb: "বেহাইন বেলা তিতাসের বাতাস মন জুড়াইয়া দেয়।",
    exampleBn: "সকালবেলা তিতাস নদীর বাতাস মন জুড়িয়ে দেয়।",
    exampleEn: "The morning breeze of the Titas river refreshes the soul.",
    area: "তিতাস ও মেঘনা তীরবর্তী এলাকা",
    category: "daily",
    source: "তিতাস পাড়ের লোকসংস্কৃতি"
  },
  {
    id: "word-12",
    word: "মাগল / পোলাপান",
    pronunciation: "Polapan",
    standardBn: "ছেলেমেয়েরা / তরুণ বন্ধুরা",
    meaningEn: "Youths / Young students / Children",
    exampleBb: "বাউনবাইরার পোলাপান সব ডিপার্টমেন্টেই সেরা রেজাল্ট করতাছে।",
    exampleBn: "ব্রাহ্মণবাড়িয়ার শিক্ষার্থীরা সব ডিপার্টমেন্টেই সেরা ফলাফল করছে।",
    exampleEn: "Brahmanbaria students are excelling academically across all departments.",
    area: "সমগ্র ব্রাহ্মণবাড়িয়া",
    category: "relationship",
    source: "ক্যাম্পাস ও লোকমুখের ভাষা"
  }
];

export const localProverbsList: LocalProverbItem[] = [
  {
    id: "prov-1",
    proverbBb: "তিতাস পাড়ের মানুষ আমরা, দিলে ভরা টান।",
    proverbBn: "তিতাস পাড়ের মানুষ আমরা, হৃদয়ে গভীর ভালোবাসা।",
    meaningBn: "ব্রাহ্মণবাড়িয়ার মানুষের আন্তরিকতা ও গভীর আতিথেয়তার প্রকাশ।",
    meaningEn: "Reflects the innate warmth, brotherhood, and welcoming nature of people hailing from the Titas basin.",
    context: "কমিউনিটি একতা ও ভ্রাতৃত্ব"
  },
  {
    id: "prov-2",
    proverbBb: "এক লগে থাকলে বল, একা থাকলে দুব্বল।",
    proverbBn: "একসাথে থাকলে শক্তি, একা থাকলে দুর্বল।",
    meaningBn: "ঐক্য ও পারস্পরিক সহযোগিতার গুরুত্ব।",
    meaningEn: "Strength lies in togetherness and mutual support.",
    context: "সংগঠন ও সহযোগিতার মূলনীতি"
  },
  {
    id: "prov-3",
    proverbBb: "সুর আর কথার মেলা, বাউনবাইরার বেলা।",
    proverbBn: "সুর আর কবিতার মিলনমেলা, ব্রাহ্মণবাড়িয়ার ঐতিহ্য।",
    meaningBn: "ব্রাহ্মণবাড়িয়ার উচ্চাঙ্গ সঙ্গীত ও সাহিত্যচর্চার গৌরবগাথা।",
    meaningEn: "Celebrating Brahmanbaria's celebrated legacy of classical music and literature.",
    context: "সাংস্কৃতিক ঐতিহ্য"
  }
];
