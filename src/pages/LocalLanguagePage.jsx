import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { localVocabularyList, localProverbsList } from '../data/brahmanbaria/localLanguage';
import { 
  MessageSquare, Volume2, Search, BookOpen, 
  MapPin, Sparkles, Send, CheckCircle2, Bookmark, HeartHandshake
} from 'lucide-react';

export const LocalLanguagePage = () => {
  const { lang, t } = useLanguage();
  const isBb = lang === 'bb';
  const isBn = lang === 'bn';
  const isEn = lang === 'en';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [submittedWord, setSubmittedWord] = useState(false);
  const [newWord, setNewWord] = useState({ word: '', meaning: '', example: '', area: '' });

  const categories = [
    { id: 'all', labelBb: 'সব শব্দ', labelBn: 'সব শব্দ', labelEn: 'All Words' },
    { id: 'daily', labelBb: 'দৈনন্দিন কতা', labelBn: 'দৈনন্দিন শব্দ', labelEn: 'Daily Life' },
    { id: 'pronoun', labelBb: 'সর্বনাম / সম্বোধন', labelBn: 'সর্বনাম', labelEn: 'Pronouns' },
    { id: 'verb', labelBb: 'ক্রিয়াপদ / কামকাজ', labelBn: 'ক্রিয়াপদ', labelEn: 'Verbs' },
    { id: 'relationship', labelBb: 'খাতির ও সম্পর্ক', labelBn: 'সম্পর্ক', labelEn: 'Relationships' },
  ];

  const filteredWords = localVocabularyList.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = 
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.standardBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaningEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.exampleBb.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleContributionSubmit = (e) => {
    e.preventDefault();
    if (!newWord.word) return;
    setSubmittedWord(true);
    setTimeout(() => {
      setSubmittedWord(false);
      setNewWord({ word: '', meaning: '', example: '', area: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-slate-900 to-brand-900 text-white pt-16 pb-20 md:pt-24 md:pb-24 border-b border-emerald-900/40">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>
              {isBb ? 'আমাগো কথা, আমাগো ভাষা' : isBn ? 'ব্রাহ্মণবাড়িয়ার আঞ্চলিক ভাষা' : 'Brahmanbaria Regional Dialect'}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            {isBb 
              ? 'আমাগো বাউনবাইরার মুখের ভাষা ও কতা' 
              : isBn 
                ? 'ব্রাহ্মণবাড়িয়ার নিজস্ব আঞ্চলিক ভাষা ও কথ্যরীতি' 
                : 'The Living Regional Dialect of Brahmanbaria'}
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-3xl mx-auto font-normal">
            {isBb
              ? 'তিতাস নদীর পাড়ের সুর যেমন মিষ্টি, আমাগো মানুষের মুখের ভাষাও তেমনি দরদী ও আপন। এইহানে বাউনবাইরার প্রচলিত শব্দ, উচ্চারণ, এলাকার কতা আর লোকমুখে প্রচলিত প্রবাদ একলগে তুলে ধরা হইছে।'
              : isBn
                ? 'তিতাস অববাহিকার মানুষের মুখের ভাষা অত্যন্ত আন্তরিক, প্রাণবন্ত ও ভাবগম্ভীর। এখানে ব্রাহ্মণবাড়িয়ার দৈনন্দিন কথ্যরীতি, অনন্য শব্দভাণ্ডার ও লোকপ্রবাদ সংকলিত হলো।'
                : 'A curated linguistic dossier celebrating the warmth, cadence, and unique expressions of the spoken language of Brahmanbaria.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-emerald-300/80">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {isBb ? 'স্বাভাবিক কথ্য ভাষা' : 'Authentic Spoken Dialect'}
            </span>
            <span className="flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-emerald-400" />
              {isBb ? 'কোনো জোরজবরদস্তি নাই' : 'Natural & Non-Exaggerated'}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* Search & Category Filter */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isBb ? 'শব্দভাণ্ডার ও কথ্যরীতির তালিকা' : isBn ? 'আঞ্চলিক শব্দভাণ্ডার' : 'Regional Vocabulary'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {isBb ? 'যে শব্দ বা অর্থ খুঁজতে চান, লিখে খুঁজুন' : 'Search for specific local words, meanings or examples'}
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isBb ? "শব্দ কিম্বা অর্থ খুঁজেন..." : isBn ? "শব্দ বা অর্থ খুঁজুন..." : "Search word or meaning..."}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-slate-100"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {isBb ? cat.labelBb : isBn ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Vocabulary Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredWords.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-emerald-800 dark:text-emerald-400">
                      {item.word}
                    </h3>
                    {item.pronunciation && (
                      <span className="text-[11px] text-slate-400 font-mono">
                        [{item.pronunciation}]
                      </span>
                    )}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.category}
                  </span>
                </div>

                {/* Meanings */}
                <div className="space-y-1 text-xs">
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 font-semibold">{isBb ? 'প্রমিত বাংলা:' : 'Standard:'}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-100">{item.standardBn}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 font-semibold">English:</span>
                    <span className="text-slate-600 dark:text-slate-300">{item.meaningEn}</span>
                  </div>
                </div>

                {/* Example sentence */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                  <span className="font-bold text-slate-500 dark:text-slate-400 block text-[10px] uppercase">
                    {isBb ? 'কথ্য উদাহরণ:' : 'Usage Example:'}
                  </span>
                  <p className="text-emerald-950 dark:text-emerald-200 font-medium italic">
                    "{item.exampleBb}"
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                    ({isEn ? item.exampleEn : item.exampleBn})
                  </p>
                </div>

                {/* Footnote: Area & Source */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    <span>{item.area}</span>
                  </span>
                  <span>{item.source}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredWords.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-500">
                {isBb ? 'এইহানে কিছু পাওয়া যায় নাই।' : 'কোনো শব্দ খুঁজে পাওয়া যায়নি।'}
              </p>
            </div>
          )}
        </section>

        {/* Local Proverbs Section */}
        <section className="p-6 sm:p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBb ? 'আমাগো প্রবাদ ও কতা' : 'Proverbs & Sayings'}</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {isBb ? 'লোকমুখে প্রচলিত কথামালা' : 'ঐতিহ্যবাহী লোকপ্রবাদ'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {localProverbsList.map((prov) => (
              <div
                key={prov.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs space-y-2.5"
              >
                <div className="text-base font-bold text-emerald-800 dark:text-emerald-300">
                  “{prov.proverbBb}”
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  {prov.meaningBn}
                </div>
                <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {prov.context}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contribution Section */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-emerald-600" />
                <span>{isBb ? 'আপনের এলাকার কতা যোগ করেন' : 'নতুন আঞ্চলিক শব্দ যোগ করুন'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {isBb 
                  ? 'বাউনবাইরার কুনো শব্দ বা প্রবাদ থাকলে আমাগো জানান, আমরা যাচাই কইরা যুক্ত করমু।'
                  : 'Contribute verified local words, phrases or proverbs from your upazila.'}
              </p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
              Community Contribution
            </span>
          </div>

          {submittedWord ? (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                {isBb ? 'ধন্যবাদ ভাই! আপনের কতা আমরা পাইছি, যাচাই কইরা যুক্ত করমু।' : 'ধন্যবাদ! আপনার প্রস্তাবনা গৃহীত হয়েছে।'}
              </span>
            </div>
          ) : (
            <form onSubmit={handleContributionSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isBb ? 'আঞ্চলিক শব্দ / প্রবাদ *' : 'শব্দ বা প্রবাদ *'}
                </label>
                <input
                  type="text"
                  required
                  value={newWord.word}
                  onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
                  placeholder={isBb ? "যেমন: বেহাইন বেলা" : "যেমন: বেহাইন বেলা"}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-slate-800 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isBb ? 'প্রমিত অর্থ *' : 'প্রমিত অর্থ *'}
                </label>
                <input
                  type="text"
                  required
                  value={newWord.meaning}
                  onChange={(e) => setNewWord({ ...newWord, meaning: e.target.value })}
                  placeholder={isBb ? "যেমন: সকালবেলা" : "যেমন: সকালবেলা"}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-slate-800 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isBb ? 'কুন উপজেলায় বেশি কয়? (উপজেলা)' : 'প্রচলিত উপজেলা'}
                </label>
                <input
                  type="text"
                  value={newWord.area}
                  onChange={(e) => setNewWord({ ...newWord, area: e.target.value })}
                  placeholder={isBb ? "যেমন: সরাইল / নবীনগর" : "যেমন: সরাইল / নবীনগর"}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-slate-800 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isBb ? 'বাক্যে ব্যবহারের উদাহরণ' : 'বাক্যে প্রয়োগ'}
                </label>
                <input
                  type="text"
                  value={newWord.example}
                  onChange={(e) => setNewWord({ ...newWord, example: e.target.value })}
                  placeholder={isBb ? "যেমন: বেহাইন বেলা নদীর হাওয়া সুন্দর" : "যেমন: বেহাইন বেলা নদীর হাওয়া সুন্দর"}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-slate-800 dark:text-slate-100"
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-xs sm:text-sm font-bold shadow-sm flex items-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isBb ? 'শব্দডা জমা দেন' : 'শব্দটি জমা দিন'}</span>
                </button>
              </div>
            </form>
          )}
        </section>

      </div>

    </div>
  );
};
