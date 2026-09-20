import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  timelineEvents, 
  whySpecialCards, 
  famousHistoricalFigures, 
  historicalPlaces, 
  historyFacts, 
  sourcesList 
} from '../data/historyData';
import { 
  Calendar, Landmark, BookOpen, Music, GraduationCap, 
  ShieldCheck, Sparkles, MapPin, ExternalLink, ChevronRight, 
  Info, Compass, Award, BookmarkCheck, ArrowRight, Search
} from 'lucide-react';

export const HistoryPage = () => {
  const { lang } = useLanguage();
  const isBn = lang === 'bn';

  // Category filter for timeline
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', labelBn: 'সব পর্ব', labelEn: 'All Milestones' },
    { id: 'ancient', labelBn: 'প্রাচীন ও মধ্যযুগ', labelEn: 'Ancient & Medieval' },
    { id: 'colonial', labelBn: 'প্রশাসনিক বিবর্তন', labelEn: 'Colonial & Civic' },
    { id: 'freedom', labelBn: 'আন্দোলন ও মুক্তিযুদ্ধ', labelEn: 'Movements & 1971' },
    { id: 'district', labelBn: 'জেলা প্রতিষ্ঠা', labelEn: 'District Era' },
  ];

  const filteredTimeline = timelineEvents.filter((event) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ancient') return event.category === 'ancient' || event.category === 'medieval';
    if (selectedCategory === 'colonial') return event.category === 'colonial' || event.category === 'civic' || event.category === 'culture';
    if (selectedCategory === 'freedom') return event.category === 'freedom' || event.category === 'language' || event.category === 'liberation';
    if (selectedCategory === 'district') return event.category === 'district';
    return true;
  });

  // Icon resolver for why special cards
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'BookOpen': return BookOpen;
      case 'Music': return Music;
      case 'Sparkles': return Sparkles;
      case 'Landmark': return Landmark;
      case 'ShieldCheck': return ShieldCheck;
      default: return Sparkles;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-slate-900 to-brand-900 text-white pt-16 pb-20 md:pt-24 md:pb-28 border-b border-emerald-900/40">
        {/* Subtle background ambient patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
                <Landmark className="w-4 h-4 text-emerald-400" />
                <span>History & Heritage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-300/90 text-xs font-normal">
                  {isBn ? 'ঐতিহাসিক সময়রেখা' : 'Timeline Archive'}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {isBn ? 'ব্রাহ্মণবাড়িয়ার ইতিহাস' : 'History of Brahmanbaria'}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                {isBn 
                  ? 'ইতিহাস, ঐতিহ্য, শিক্ষা ও সংস্কৃতিতে সমৃদ্ধ আমাদের প্রিয় ব্রাহ্মণবাড়িয়া।' 
                  : 'Discover the history, heritage, education and culture of Brahmanbaria.'}
              </p>

              {/* Quick Jump Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#timeline"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isBn ? 'সময়রেখা দেখুন' : 'Explore Timeline'}</span>
                </a>
                <a
                  href="#why-special"
                  className="px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all"
                >
                  {isBn ? 'কেন আলাদা?' : 'Why It’s Special'}
                </a>
                <a
                  href="#historical-figures"
                  className="px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all"
                >
                  {isBn ? 'ঐতিহাসিক ব্যক্তিত্ব' : 'Notable Figures'}
                </a>
              </div>

              {/* Verified Source Indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-emerald-300/80">
                <BookmarkCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isBn 
                    ? 'উৎস: ব্রাহ্মণবাড়িয়া জেলা প্রশাসন ও জাতীয় তথ্যকোষ' 
                    : 'Source: Brahmanbaria District Administration & National Archives'}
                </span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
                    alt="Heritage of Brahmanbaria"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent" />
                </div>

                {/* Overlay Caption Box */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/90 text-slate-950 text-[11px] font-bold uppercase tracking-wider mb-2">
                    {isBn ? 'ঐতিহাসিক স্মারক' : 'Living Heritage'}
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {isBn ? 'প্রাচীন সমতট থেকে বর্তমানের সমৃদ্ধ ব্রাহ্মণবাড়িয়া' : 'From Ancient Samatata to Modern Brahmanbaria'}
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {isBn 
                      ? 'তিতাস নদীর কূলে শত বছরের শিক্ষা, সংস্কৃতি ও বীরত্বগাথার অবিচ্ছিন্ন ইতিহাস।' 
                      : 'Centuries of rich literary, cultural and liberation heritage along the Titas river.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-12 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 mb-5 shadow-sm">
            <Info className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
            {isBn ? 'ইতিহাসের সংক্ষিপ্ত প্রেক্ষাপট' : 'Historical Introduction'}
          </h2>

          <div className="relative">
            {/* Quotation styling */}
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              {isBn 
                ? '“ব্রাহ্মণবাড়িয়ার ইতিহাস অনেক পুরোনো। প্রাচীন বাংলার সমতট অঞ্চলের সঙ্গে এই এলাকার ইতিহাসের সম্পর্ক রয়েছে। সময়ের সাথে এই অঞ্চল বিভিন্ন শাসন ও প্রশাসনিক কাঠামোর মধ্য দিয়ে বর্তমান ব্রাহ্মণবাড়িয়া জেলায় পরিণত হয়েছে।”'
                : '“The history of Brahmanbaria is ancient and profound. Connected with the early Samatata realm of Bengal, the region transitioned through varied administrative and political evolutions to culminate in modern-day Brahmanbaria District.”'}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {isBn ? 'প্রাচীন জনপদ: সমতট' : 'Ancient Janapada: Samatata'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {isBn ? 'মধ্যযুগীয় কেন্দ্র: সরাইল পরগনা' : 'Medieval Seat: Sarail Pargana'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-crimson-500" />
              {isBn ? 'জেলা প্রতিষ্ঠা: ১৯৮৪' : 'District Established: 1984'}
            </span>
          </div>

        </div>
      </section>

      {/* 3. HISTORICAL TIMELINE SECTION */}
      <section id="timeline" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>{isBn ? 'কালানুক্রমিক ইতিহাস' : 'Chronological Timeline'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {isBn ? 'ঐতিহাসিক সময়রেখা' : 'Historical Milestones'}
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              {isBn 
                ? 'প্রাচীন সমতট থেকে বর্তমান ব্রাহ্মণবাড়িয়া জেলা—ধারাবাহিক ১২টি প্রধান ঐতিহাসিক মাইলফলক।' 
                : 'A chronological journey through 12 verified milestones shaping Brahmanbaria through the centuries.'}
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {isBn ? cat.labelBn : cat.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            
            {/* Center Vertical Spine (Desktop) / Left Vertical Spine (Mobile) */}
            <div 
              className="absolute top-4 bottom-4 left-4 sm:left-6 md:left-1/2 w-0.5 sm:w-1 bg-gradient-to-b from-emerald-500 via-amber-500 to-crimson-600 md:-translate-x-1/2 rounded-full shadow-xs" 
              aria-hidden="true"
            />

            {/* Events List */}
            <div className="space-y-8 sm:space-y-12">
              {filteredTimeline.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="relative flex flex-col md:flex-row items-start group"
                  >
                    
                    {/* Node Dot / Marker */}
                    <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 md:top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-600 dark:border-emerald-500 shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500 transition-transform">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400 group-hover:bg-amber-500" />
                      </div>
                    </div>

                    {/* Timeline Card Wrapper */}
                    <div className={`w-full pl-12 sm:pl-16 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-10 md:text-right' : 'md:ml-auto md:pl-10 md:text-left'
                    }`}>
                      
                      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 relative group-hover:border-emerald-500/50">
                        
                        {/* Year Badge & Tag */}
                        <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                            {isBn ? item.period : item.periodEn}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {isBn ? item.badgeBn : item.badgeEn}
                          </span>
                        </div>

                        {/* Event Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {isBn ? item.titleBn : item.titleEn}
                        </h3>

                        {/* Summary */}
                        <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
                          {isBn ? item.summaryBn : item.summaryEn}
                        </p>

                        {/* Detailed Description */}
                        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {isBn ? item.descBn : item.descEn}
                        </p>

                        {/* Special Discrepancy Alert for 1868 / 1869 if applicable */}
                        {item.id === 'year-1868-1869' && (
                          <div className="mt-3.5 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 text-left">
                            <div className="flex items-start gap-2">
                              <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                              <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                                <span className="font-bold">
                                  {isBn ? 'তথ্যের ভিন্নতা নোট: ' : 'Source Note: '}
                                </span>
                                {isBn 
                                  ? 'বিভিন্ন সরকারি ও নির্ভরযোগ্য নথিতে ১৮৬৮ সালে পৌরসভা গঠনের উদ্যোগ ও ১৮৬৯ সালে আনুষ্ঠানিক যাত্রা শুরুর তথ্য রয়েছে। ঐতিহাসিক সত্যতায় দুটি বর্ষই গুরুত্বপূর্ণ।'
                                  : 'Archival records reference both 1868 (organizational charter) and 1869 (gazetted commencement). Both benchmarks are historically acknowledged.'}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Special Highlight for 1971 Liberation War */}
                        {item.id === 'year-1971' && (
                          <div className="mt-3.5 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800/60 text-left">
                            <div className="flex items-start gap-2">
                              <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                              <div className="text-xs text-rose-950 dark:text-rose-200 font-semibold leading-relaxed">
                                {isBn 
                                  ? 'বীরশ্রেষ্ঠ মোস্তফা কামাল আখাউড়ার দরুইন যুদ্ধে শহীদ হন।'
                                  : 'Bir Sreshtho Mohammad Mostafa Kamal embraced martyrdom at the Battle of Daruin in Akhaura.'}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Special Highlight for 1984 District Status */}
                        {item.id === 'year-1984' && (
                          <div className="mt-3.5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 text-left">
                            <div className="flex items-start gap-2">
                              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <div className="text-xs text-emerald-950 dark:text-emerald-200 font-bold leading-relaxed">
                                {isBn 
                                  ? '১৫ ফেব্রুয়ারি ১৯৮৪ সালে বর্তমান ব্রাহ্মণবাড়িয়া জেলা প্রতিষ্ঠিত হয়।'
                                  : 'On 15 February 1984, the present-day Brahmanbaria District was formally established.'}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Verified Source Tag */}
                        <div className={`mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/70 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          <BookmarkCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{item.source}</span>
                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHY BRAHMANBARIA IS SPECIAL SECTION */}
      <section id="why-special" className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBn ? 'আমাদের অনন্য পরিচয়' : 'Our Unique Identity'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {isBn ? 'কেন আমাদের ব্রাহ্মণবাড়িয়া আলাদা?' : 'Why Is Brahmanbaria Special?'}
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              {isBn 
                ? 'শিক্ষা, সুরের সাধনা, সাহিত্য, সমৃদ্ধ সংস্কৃতি ও মুক্তিসংগ্রামের উজ্জ্বল ঐতিহ্যে ব্রাহ্মণবাড়িয়া স্বমহিমায় ভাস্বর।'
                : 'Distinguished by a rich legacy of education, classical music, literature, vibrant folk traditions, and historic valour.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whySpecialCards.map((card) => {
              const Icon = getIcon(card.iconName);
              return (
                <div
                  key={card.id}
                  className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {isBn ? card.titleBn : card.titleEn}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {isBn ? card.descBn : card.descEn}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FAMOUS HISTORICAL FIGURES SECTION */}
      <section id="historical-figures" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>{isBn ? 'স্মরণীয় ব্যক্তিত্ব' : 'Luminaries & Leaders'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {isBn ? 'ইতিহাসের সঙ্গে জড়িয়ে থাকা মানুষ' : 'Famous Historical Figures'}
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              {isBn 
                ? 'ভাষা আন্দোলন, মুক্তিযুদ্ধ, সুরের সাধনা ও সাহিত্যে ব্রাহ্মণবাড়িয়ার গৌরবময় সন্তানগণ।' 
                : 'Verified personalities whose lives and achievements remain inextricably woven into the heritage of Brahmanbaria.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {famousHistoricalFigures.map((person) => (
              <div
                key={person.id}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:border-emerald-500/40"
              >
                {/* Photo & Category Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <img
                    src={person.photo}
                    alt={isBn ? person.nameBn : person.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs text-emerald-300 border border-emerald-500/30">
                      {isBn ? person.fieldBn : person.fieldEn}
                    </span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-3 inset-x-3 text-white">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {isBn ? person.nameBn : person.nameEn}
                    </h3>
                    <p className="text-xs text-emerald-300 font-medium">
                      {isBn ? person.roleBn : person.roleEn}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Connection */}
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span className="font-medium">
                      {isBn ? person.connectionBn : person.connectionEn}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {isBn ? person.descBn : person.descEn}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{isBn ? 'স্বীকৃত ঐতিহাসিক সূত্র' : 'Verified Source'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {isBn ? 'গৌরবময় অবদান' : 'Iconic Legacy'}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. HISTORICAL PLACES SECTION ("ইতিহাসের সাক্ষী") */}
      <section id="historical-places" className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Landmark className="w-3.5 h-3.5" />
                <span>{isBn ? 'ঐতিহাসিক নিদর্শন' : 'Living Heritage Sites'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {isBn ? 'ইতিহাসের সাক্ষী' : 'Witnesses of History'}
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                {isBn 
                  ? 'ব্রাহ্মণবাড়িয়ার বহু শতাব্দীর গৌরব ও স্মৃতি ধারণ করে দাঁড়িয়ে থাকা ঐতিহাসিক স্থানসমূহ।' 
                  : 'Iconic historical landmarks reflecting centuries of heritage and memorial architecture.'}
              </p>
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-emerald-700 text-white font-bold text-sm hover:bg-slate-800 dark:hover:bg-emerald-600 transition-colors self-start md:self-auto shrink-0 shadow-sm"
            >
              <Compass className="w-4 h-4 text-emerald-400 dark:text-white" />
              <span>{isBn ? 'সব স্থান দেখুন' : 'Explore All Places'}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {historicalPlaces.map((place) => (
              <div
                key={place.id}
                className="bg-slate-50 dark:bg-slate-800/70 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:border-emerald-500/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <img
                    src={place.image}
                    alt={isBn ? place.nameBn : place.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300">
                      <MapPin className="w-3 h-3" />
                      {isBn ? place.locationBn : place.locationEn}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                      {isBn ? place.nameBn : place.nameEn}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {isBn ? place.descBn : place.descEn}
                  </p>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {isBn ? 'জেলা প্রশাসন পর্যটন তালিকা' : 'Official Tourism List'}
                    </span>
                    <Link
                      to="/explore"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      <span>{isBn ? 'বিস্তারিত দেখুন' : 'Explore'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. HISTORY FACTS ("Did You Know?" / "আপনি কি জানেন?") */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBn ? 'সংক্ষিপ্ত তথ্য' : 'Verified Trivia'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {isBn ? 'আপনি কি জানেন?' : 'Did You Know?'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {isBn 
                ? 'ব্রাহ্মণবাড়িয়ার ইতিহাস সম্পর্কে কিছু চমকপ্রদ ও নির্ভরযোগ্য ঐতিহাসিক তথ্য।' 
                : 'Notable verified historical facts about Brahmanbaria and its heritage.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {historyFacts.map((fact, index) => (
              <div
                key={fact.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 leading-snug">
                      {isBn ? fact.factBn : fact.factEn}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <BookmarkCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{isBn ? 'সূত্র: ' : 'Source: '}</span>
                      <span className="font-medium text-slate-600 dark:text-slate-300">
                        {isBn ? fact.sourceBn : fact.sourceEn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SOURCES SECTION ("তথ্যসূত্র") */}
      <section className="py-14 sm:py-18 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {isBn ? 'তথ্যসূত্র ও কৃতজ্ঞতা' : 'Sources & References'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {isBn 
                ? 'এই পৃষ্ঠার সকল ঐতিহাসিক তথ্য ও মাইলফলক নির্ভরযোগ্য সরকারি ও জাতীয় প্রকাশনা থেকে সংগৃহীত।'
                : 'All milestones and biographical facts on this page are gathered from verified governmental and national repositories.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sourcesList.map((src, idx) => (
              <a
                key={idx}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 hover:border-emerald-500/60 transition-all flex items-center justify-between group"
              >
                <div className="space-y-1 pr-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    {isBn ? src.typeBn : src.typeEn}
                  </span>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {isBn ? src.nameBn : src.nameEn}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 shrink-0 transition-colors" />
              </a>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {isBn 
              ? 'ব্রাহ্মণবাড়িয়া স্টুডেন্টস অ্যাসোসিয়েশন, ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি (BSA-DIU) শিক্ষার্থীদের জন্য ইতিহাস ও ঐতিহ্যের সংরক্ষণমূলক একটি শিক্ষামূলক উদ্যোগ।'
              : 'An educational heritage initiative curated by Brahmanbaria Students Association, Daffodil International University (BSA-DIU).'}
          </div>

        </div>
      </section>

    </div>
  );
};
