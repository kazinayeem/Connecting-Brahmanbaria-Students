export interface FunCultureItem {
  id: number;
  image: string;
  topicBn: string;
  topicEn: string;
  captionBn: string;
  captionEn: string;
  source: string;
  credit: string;
}

export const funCultureData: FunCultureItem[] = [
  {
    id: 1,
    topicBn: "শহর ব্রাহ্মণবাড়িয়া",
    topicEn: "Brahmanbaria City",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    captionBn: "শহরের প্রাণকেন্দ্র টিএ রোড ও ঐতিহ্যবাহী মেড্ডা—দিনের চঞ্চল ব্যস্ততা আর রাতের মৃদু আলোয় এক জীবন্ত শহর।",
    captionEn: "The bustling pulse of TA Road and historic Medda — lively commerce by day and warm community evenings.",
    source: "ব্রাহ্মণবাড়িয়া পৌরসভা ও স্থানীয় নগর আর্কাইভ",
    credit: "Urban Community Archive / CC-BY"
  },
  {
    id: 2,
    topicBn: "আমাদের প্রাণবন্ত মানুষ ও সমাজ",
    topicEn: "Warm Community & People",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    captionBn: "আন্তরিক আতিথেয়তা আর খোলামেলা হৃদয়ের মানুষ—প্রথম পরিচয়েই পরম আপন করে নেওয়ার এক অনন্য লোকজ স্বভাব।",
    captionEn: "Warm hospitality and big-hearted locals who make newcomers feel like lifelong family in minutes.",
    source: "বাংলাদেশ জাতীয় তথ্য বাতায়ন ও স্থানীয় সংগ্রাহক",
    credit: "Community Heritage Archive"
  },
  {
    id: 3,
    topicBn: "ঐতিহ্যবাহী স্থানীয় বাজার ও হাট",
    topicEn: "Local Market Atmosphere",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80",
    captionBn: "ভোরের তাজা তিতাসের মাছ, শাকসবজি আর ক্রেতা-বিক্রেতাদের হাসিমুখের দরদামের চিরচেনা সুর।",
    captionEn: "Bustling morning bazaars with fresh river catch, seasonal harvests, and cheerful banter.",
    source: "জেলা কৃষি সম্প্রসারণ অধিদপ্তর ও স্থানীয় বাজার তথ্যকোষ",
    credit: "Local Market Documentation Project"
  },
  {
    id: 4,
    topicBn: "শহরের প্রাণোচ্ছল অলিগলি",
    topicEn: "Local Street Scene",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    captionBn: "রিকশার টুংটাং সুর আর রঙিন ব্যানার শোভিত রাজপথ—প্রতিটি গলিতেই জড়িয়ে আছে এক একটি স্মৃতি।",
    captionEn: "Rhythm of rickshaw bells, colorful street corners, and familiar neighborhood paths.",
    source: "ব্রাহ্মণবাড়িয়া সাংস্কৃতিক তথ্য কোষ",
    credit: "Bengal Street Lens Collection"
  },
  {
    id: 5,
    topicBn: "সঙ্গীত ও সুরের ঐতিহ্যবাহী উৎসব",
    topicEn: "Cultural Event & Classical Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    captionBn: "সুরসম্রাট ওস্তাদ আলাউদ্দিন খাঁ-র স্মৃতিবিজড়িত এই ভূমিতে সঙ্গীত কেবল বিনোদন নয়, আত্মার গভীর সাধনা।",
    captionEn: "In the sacred soil of Ustad Alauddin Khan, musical rhythm and classical ragas are a spiritual pursuit.",
    source: "জেলা শিল্পকলা একাডেমি ব্রাহ্মণবাড়িয়া",
    credit: "Shilpakala Academy Archive"
  },
  {
    id: 6,
    topicBn: "চায়ের আড্ডায় গল্পের ফোয়ারা",
    topicEn: "Local Gathering & Tea Adda",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80",
    captionBn: "ধোঁয়া ওঠা এক কাপ লাল চা কিংবা দুধ চা—আর শুরু হয় বিশ্ববিদ্যালয়, ক্রিকেট আর রাজনীতি নিয়ে অন্তহীন আড্ডা।",
    captionEn: "Steaming cups of tea spark animated debates where everyday wit and laughter solve the world's problems.",
    source: "বাংলাদেশ টি কালচার ও লোকজ আড্ডা সংগ্রহ",
    credit: "Adda & Tea Traditions Documentation"
  },
  {
    id: 7,
    topicBn: "গ্রামীণ সমাজ ও ঐতিহ্যবাহী মিলনমেলা",
    topicEn: "Traditional Community Scene",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    captionBn: "নবান্নের পিঠা উৎসব আর পারিবারিক দাওয়াতে একসাথে বসে খাওয়া—ঐক্যের এক অপরূপ ঐতিহ্য।",
    captionEn: "Generations gathering together during harvest festivals to share traditional pithas and lifelong bonds.",
    source: "লোক ও কারুশিল্প ফাউন্ডেশন ও জেলা তথ্যকোষ",
    credit: "Folk Heritage Documentation"
  },
  {
    id: 8,
    topicBn: "হাওড় ও সবুজ দিগন্ত",
    topicEn: "Brahmanbaria Scenic Landscape",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    captionBn: "নাসিরনগরের মেদিনী হাওড় ও দিগন্তজোড়া জলরাশির উপর শরতের নীল আকাশ আর শাপলার সমারোহ।",
    captionEn: "Expansive water horizons of Medini Haor in Nasirnagar mirroring autumn skies and water lilies.",
    source: "বাংলাদেশ নদী ও পরিবেশ সংরক্ষণ তথ্য",
    credit: "Wetland Landscape Archive"
  },
  {
    id: 9,
    topicBn: "তিতাস নদীর শান্ত বিকেল",
    topicEn: "Titas River Serenity",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    captionBn: "অদ্বৈত মল্লবর্মণের অমর সাহিত্য 'তিতাস একটি নদীর নাম'—যেই নদীর বুকে সন্ধ্যার রক্তিম আভা ছুঁয়ে যায় হৃদয়।",
    captionEn: "The literary legend 'Titas Ekti Nadir Naam' brought to life as dusk paints the calm flowing waters.",
    source: "বাংলাদেশ পর্যটন বোর্ড ও সাহিত্য স্মারক কোষ",
    credit: "Titas Riverfront Heritage Collection"
  },
  {
    id: 10,
    topicBn: "ঐতিহ্যবাহী নৌকা বাইচ উৎসব",
    topicEn: "Nouka Baich (Traditional Boat Race)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    captionBn: "বর্ষায় তিতাস ও মেঘনার বুকে শতদাঁড়ের ক্ষিপ্র তাল আর নদীতীরে হাজারো দর্শকের হর্ষধ্বনি।",
    captionEn: "Dozens of colorful long racing boats cutting through the river as thousands cheer from the embankments.",
    source: "জেলা ক্রীড়া সংস্থা ব্রাহ্মণবাড়িয়া ও জাতীয় ক্রীড়া পরিষদ",
    credit: "Traditional Sports Archive"
  },
  {
    id: 11,
    topicBn: "বন্ধুত্বপূর্ণ খুনসুটি ও আড্ডা",
    topicEn: "Youthful Banter & Campus Camaraderie",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    captionBn: "ক্লাস শেষে ক্যাম্পাসের আড্ডায় ব্রাহ্মণবাড়িয়ার শিক্ষার্থীরা—যুক্তি, হাসি আর একাত্মতার প্রাণবন্ত মুহূর্ত।",
    captionEn: "DIU students from Brahmanbaria sharing jokes, study stories, and instant warmth between classes.",
    source: "ব্রাহ্মণবাড়িয়া স্টুডেন্টস অ্যাসোসিয়েশন, ডিআইইউ আর্কাইভ",
    credit: "BSA-DIU Student Media Cell"
  },
  {
    id: 12,
    topicBn: "লোকমুখে প্রচলিত “ব্রাহ্মণবাড়িয়ার ঝগড়া” – চায়ের কাপে কথার ঝড়",
    topicEn: "The Famous 'Jhogra' Folklore — A Storm in a Teacup",
    image: "/images/brahmanbaria_tea_debate.jpg",
    captionBn: "সোশ্যাল মিডিয়ার মজার মিম আর লোকমুখের মশকরা—চায়ের দোকানে হাত নেড়ে নাটুকে তর্কবিতর্ক হলেও দিনশেষে কিন্তু সবাই একসাথে বসে প্রাণখোলা হাসিমুখে রসমালাই খায়!",
    captionEn: "The legendary internet lore! Expressive hand gestures and theatrical debates over milk tea that always end in shared sweets, smiles, and unbreakable brotherhood.",
    source: "লোকসংস্কৃতি ও সামাজিক লোকরীতি পর্যালোচনা",
    credit: "BSA-DIU Folk Humor & Folklore Illustration"
  }
];
