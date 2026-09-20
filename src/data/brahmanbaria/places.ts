export interface PlaceItem {
  id: string;
  nameBn: string;
  nameEn: string;
  upazila: string;
  upazilaBn: string;
  upazilaEn: string;
  category: 'historical' | 'religious' | 'natural' | 'memorial' | 'heritage';
  locationBn: string;
  locationEn: string;
  descriptionBn: string;
  descriptionEn: string;
  howToReachBn: string;
  howToReachEn: string;
  image: string;
  gallery: string[];
  source: string;
  sourceUrl?: string;
}

export const placesData: PlaceItem[] = [
  {
    id: "natghar-temple",
    nameBn: "নাটঘর মন্দির",
    nameEn: "Natghar Temple",
    upazila: "Nabinagar",
    upazilaBn: "নবীনগর",
    upazilaEn: "Nabinagar",
    category: "religious",
    locationBn: "নাটঘর গ্রাম, নবীনগর উপজেলা",
    locationEn: "Natghar village, Nabinagar Upazila",
    descriptionBn: "নবীনগর উপজেলার নাটঘর গ্রামে অবস্থিত একটি সুপরিচিত ঐতিহ্যবাহী সনাতন ধর্মীয় মন্দির।",
    descriptionEn: "A well-known traditional Hindu temple situated in Natghar village, Nabinagar.",
    howToReachBn: "নবীনগর উপজেলা সদর থেকে রিকশাযোগে নাটঘর গ্রামে পৌঁছানো যায়।",
    howToReachEn: "Can be reached from Nabinagar by rickshaw.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
    ],
    source: "ব্রাহ্মণবাড়িয়া জেলা প্রশাসন (সরকারি পর্যটন তথ্য)",
    sourceUrl: "https://brahmanbaria.gov.bd/bn/site/view/tourist_spot"
  },
  {
    id: "lakshmipur-shaheed-samadhisthal",
    nameBn: "লক্ষীপুর শহীদ সমাধিস্থল",
    nameEn: "Lakshmipur Shaheed Samadhisthal",
    upazila: "Kasba",
    upazilaBn: "কসবা",
    upazilaEn: "Kasba",
    category: "memorial",
    locationBn: "লক্ষীপুর গ্রাম, গোপীনাথপুর ইউনিয়ন, কসবা (উপজেলা সদর থেকে প্রায় ৩ কি.মি. উত্তর-পূর্বে)",
    locationEn: "Lakshmipur village, Gopinathpur Union, Kasba (Approximately 3 km northeast of Kasba Upazila headquarters)",
    descriptionBn: "কসবা উপজেলার গোপীনাথপুর ইউনিয়নের লক্ষীপুর গ্রামে অবস্থিত ১৯৭১ সালের মহান মুক্তিযুদ্ধের শহীদ মুক্তিযোদ্ধাদের স্মৃতিবিজড়িত সমাধিস্থল।",
    descriptionEn: "A historic memorial and resting ground honoring the martyrs of the 1971 Liberation War located in Lakshmipur village, Gopinathpur Union, Kasba.",
    howToReachBn: "কসবা উপজেলা সদর থেকে প্রায় ৩ কি.মি. উত্তর-পূর্বে সড়কপথে লক্ষীপুর গ্রামে যাওয়া যায়।",
    howToReachEn: "Located approximately 3 km northeast of Kasba Upazila headquarters, accessible by local road transport.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    source: "ব্রাহ্মণবাড়িয়া জেলা প্রশাসন (সরকারি পর্যটন তথ্য)",
    sourceUrl: "https://brahmanbaria.gov.bd/bn/site/view/tourist_spot"
  },
  {
    id: "kella-shahid-mazar",
    nameBn: "কেল্লা শহীদ মাজার",
    nameEn: "Kella Shahid Mazar",
    upazila: "Akhaura",
    upazilaBn: "আখাউড়া",
    upazilaEn: "Akhaura",
    category: "religious",
    locationBn: "খড়মপুর, আখাউড়া",
    locationEn: "Kharmapur, Akhaura",
    descriptionBn: "আখাউড়ার খড়মপুরে অবস্থিত একটি সুপরিচিত ও ঐতিহাসিক ধর্মীয় মাজার শরীফ।",
    descriptionEn: "A renowned historical religious shrine situated in Kharmapur, Akhaura.",
    howToReachBn: "কাউতলী / ব্রাহ্মণবাড়িয়া শহর থেকে স্থানীয় সিএনজি (CNG) যোগে সরাসরি যাওয়া যায়।",
    howToReachEn: "Local CNG from Kautali / Brahmanbaria city.",
    image: "https://images.unsplash.com/photo-1590076215667-873d328eb9f4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590076215667-873d328eb9f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    ],
    source: "ব্রাহ্মণবাড়িয়া জেলা প্রশাসন (সরকারি পর্যটন তথ্য)",
    sourceUrl: "https://brahmanbaria.gov.bd/bn/site/view/tourist_spot"
  },
  {
    id: "kollapathar-shaheed-samadhisthal",
    nameBn: "কোল্লাপাথর শহীদ সমাধিস্থল",
    nameEn: "Kollapathar Shaheed Samadhisthal",
    upazila: "Kasba",
    upazilaBn: "কসবা",
    upazilaEn: "Kasba",
    category: "memorial",
    locationBn: "কোল্লাপাথর গ্রাম, বায়েক ইউনিয়ন, কসবা",
    locationEn: "Kollapathar village, Bakail Union, Kasba",
    descriptionBn: "কসবা উপজেলার বায়েক ইউনিয়নের কোল্লাপাথর গ্রামে অবস্থিত ১৯৭১ সালের মহান মুক্তিযুদ্ধে শাহাদাতবরণকারী ৫২ জন বীর মুক্তিযোদ্ধার পবিত্র স্মৃতিসৌধ ও সমাধিস্থল।",
    descriptionEn: "Sacred memorial site in Bakail Union, Kasba containing the memorials and resting places for 52 freedom fighters of the 1971 Liberation War.",
    howToReachBn: "ব্রাহ্মণবাড়িয়া জেলা শহর থেকে সিএনজি (CNG) যোগে পৌঁছানো যায়।",
    howToReachEn: "Can be reached from Brahmanbaria city by CNG.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    source: "ব্রাহ্মণবাড়িয়া জেলা প্রশাসন (সরকারি পর্যটন তথ্য)",
    sourceUrl: "https://brahmanbaria.gov.bd/bn/site/view/tourist_spot"
  },
  {
    id: "nasirnagar-medini-haor",
    nameBn: "নাসিরনগর মেদিনী হাওড় অঞ্চল",
    nameEn: "Nasirnagar Medini Haor Area",
    upazila: "Nasirnagar",
    upazilaBn: "নাসিরনগর",
    upazilaEn: "Nasirnagar",
    category: "natural",
    locationBn: "নাসিরনগর উপজেলা",
    locationEn: "Nasirnagar Upazila",
    descriptionBn: "নাসিরনগর উপজেলার মেদিনী হাওড় অঞ্চল, যা উন্মুক্ত জলরাশি ও মনোরম প্রাকৃতিক জলাভূমির জন্য পরিচিত।",
    descriptionEn: "The scenic Medini Haor wetland area in Nasirnagar Upazila.",
    howToReachBn: "নাসিরনগর উপজেলা সদর থেকে স্থানীয় সড়ক বা নৌপথে যাতায়াত করা যায়।",
    howToReachEn: "Accessible from Nasirnagar Upazila via local transport routes.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
    ],
    source: "ব্রাহ্মণবাড়িয়া জেলা প্রশাসন (সরকারি পর্যটন তথ্য)",
    sourceUrl: "https://brahmanbaria.gov.bd/bn/site/view/tourist_spot"
  },
  {
    id: "joykumar-zamindar-bari",
    nameBn: "জয়কুমার জমিদার বাড়ী",
    nameEn: "Joykumar Zamindar Bari",
    upazila: "Nasirnagar",
    upazilaBn: "নাসিরনগর",
    upazilaEn: "Nasirnagar",
    category: "heritage",
    locationBn: "বুড়িশ্বর গ্রামের উত্তর পাশ, বুড়িশ্বর ইউনিয়ন, নাসিরনগর",
    locationEn: "Northern side of Burishwar village, Burishwar Union, Nasirnagar",
    descriptionBn: "বুড়িশ্বর গ্রামের উত্তর পাশে অবস্থিত প্রাচীন ঐতিহাসিক জমিদার বাড়ি ও ঐতিহ্যবাহী স্থাপত্য।",
    descriptionEn: "A historic zamindar residence situated on the northern side of Burishwar village.",
    howToReachBn: "বুড়িশ্বর থেকে পায়ে হেঁটে প্রায় ১০ মিনিট; বুড়িশ্বর ইউনিয়নের বিভিন্ন এলাকা থেকে যানবাহন যোগেও যাতায়াত সম্ভব। এছাড়াও গঙ্গানগর থেকে নৌকাযোগেও যাওয়া যায়।",
    howToReachEn: "Around 10 minutes on foot from Burishwar; vehicle access is also possible from areas of Burishwar Union. The provided source notes boat access from Ganganagar.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    source: "ব্রাহ্মণবাড়িয়া জেলা প্রশাসন (সরকারি পর্যটন তথ্য)",
    sourceUrl: "https://brahmanbaria.gov.bd/bn/site/view/tourist_spot"
  },
  {
    id: "kachua-mazar",
    nameBn: "কচুয়া মাজার",
    nameEn: "Kachua Mazar",
    upazila: "Nasirnagar",
    upazilaBn: "নাসিরনগর",
    upazilaEn: "Nasirnagar",
    category: "religious",
    locationBn: "চাতলপাড় ইউনিয়ন, নাসিরনগর",
    locationEn: "Chatlapar Union, Nasirnagar",
    descriptionBn: "নাসিরনগর উপজেলার চাতলপাড় ইউনিয়নে অবস্থিত একটি ঐতিহ্যবাহী ধর্মীয় মাজার।",
    descriptionEn: "A traditional religious shrine (mazar) situated in Chatlapar Union, Nasirnagar.",
    howToReachBn: "চাতলপাড় ইউনিয়ন থেকে স্থানীয় সড়ক ও নৌপথের মাধ্যমে পৌঁছানো যায়।",
    howToReachEn: "Accessible from Chatlapar Union area via local boat and road routes.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    ],
    source: "ব্রাহ্মণবাড়িয়া জেলা প্রশাসন (সরকারি পর্যটন তথ্য)",
    sourceUrl: "https://brahmanbaria.gov.bd/bn/site/view/tourist_spot"
  },
  {
    id: "bidyakut-satidaha-temple",
    nameBn: "বিদ্যাকুট সতীদাহ মন্দির",
    nameEn: "Bidyakut Satidaha Temple",
    upazila: "Nabinagar",
    upazilaBn: "নবীনগর",
    upazilaEn: "Nabinagar",
    category: "historical",
    locationBn: "বিদ্যাকুট গ্রাম, নবীনগর উপজেলা",
    locationEn: "Bidyakut village, Nabinagar Upazila",
    descriptionBn: "নবীনগর উপজেলার বিদ্যাকুট গ্রামে অবস্থিত একটি ঐতিহাসিক সতীদাহ স্মৃতি মন্দির।",
    descriptionEn: "A historic Satidaha memorial temple situated in Bidyakut village, Nabinagar Upazila.",
    howToReachBn: "নবীনগর উপজেলা সদর থেকে রিকশাযোগে বিদ্যাকুট গ্রামে পৌঁছানো যায়।",
    howToReachEn: "Can be reached from Nabinagar by rickshaw.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
    ],
    source: "ব্রাহ্মণবাড়িয়া জেলা প্রশাসন (সরকারি পর্যটন তথ্য)",
    sourceUrl: "https://brahmanbaria.gov.bd/bn/site/view/tourist_spot"
  },
  {
    id: "ulchapara-mosque",
    nameBn: "উলচাপাড়া মসজিদ",
    nameEn: "Ulchapara Mosque",
    upazila: "Brahmanbaria Sadar",
    upazilaBn: "ব্রাহ্মণবাড়িয়া সদর",
    upazilaEn: "Brahmanbaria Sadar",
    category: "religious",
    locationBn: "উলচাপাড়া গ্রাম, ব্রাহ্মণবাড়িয়া সদর",
    locationEn: "Ulchapara village, Brahmanbaria Sadar",
    descriptionBn: "ব্রাহ্মণবাড়িয়া সদর উপজেলার উলচাপাড়া গ্রামে অবস্থিত একটি প্রাচীন ও ঐতিহ্যবাহী মসজিদ।",
    descriptionEn: "An ancient traditional mosque situated in Ulchapara village, Brahmanbaria Sadar.",
    howToReachBn: "ব্রাহ্মণবাড়িয়া শহর থেকে সিএনজি (CNG) যোগে উলচাপাড়া গ্রামে পৌঁছানো যায়।",
    howToReachEn: "Can be reached from Brahmanbaria city by CNG.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
    ],
    source: "ব্রাহ্মণবাড়িয়া জেলা প্রশাসন (সরকারি পর্যটন তথ্য)",
    sourceUrl: "https://brahmanbaria.gov.bd/bn/site/view/tourist_spot"
  }
];
