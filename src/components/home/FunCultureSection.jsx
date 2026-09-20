import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { funCultureData } from '../../data/brahmanbaria/funCulture';
import { 
  Sparkles, ChevronLeft, ChevronRight, X, 
  Smile, Coffee, Info, ExternalLink, MessageCircleHeart 
} from 'lucide-react';

export const FunCultureSection = () => {
  const { lang, isBb, isBn, isEn, isBanglaScript } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openLightbox = (item) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const nextLightboxItem = () => {
    if (!selectedItem) return;
    const currentIndex = funCultureData.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % funCultureData.length;
    setSelectedItem(funCultureData[nextIndex]);
  };

  const prevLightboxItem = () => {
    if (!selectedItem) return;
    const currentIndex = funCultureData.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + funCultureData.length) % funCultureData.length;
    setSelectedItem(funCultureData[prevIndex]);
  };

  // Keyboard navigation and body scroll lock for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxItem();
      if (e.key === 'ArrowLeft') prevLightboxItem();
    };

    if (selectedItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      
      {/* Background Ambience Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 dark:bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700/60 shadow-2xs">
              <Coffee className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>{isBb ? 'আমাগো আড্ডা আর রঙ্গ-রসিকতা' : isBn ? 'লোকজ আড্ডা ও রসিকতা' : 'Local Folklore & Warm Humor'}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {isBb
                ? 'বাউনবাইরার কিচ্ছু মজার পরিচয়'
                : isBn 
                  ? 'ব্রাহ্মণবাড়িয়ার কিছু মজার পরিচিতি' 
                  : 'Fun Facts & Folklore of Brahmanbaria'}
            </h2>

            {/* Contextual description - strictly framed as humor/folklore */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {isBb
                ? 'আমাগো বাউনবাইরার মানুষ যেমন মেহমানদার, দিলখোলা আর আড্ডাবাজ—তেমনি বাউনবাইরার হুজ্জত-ঝগড়া লইয়াও কত মজার কিচ্ছা প্রচলিত!'
                : isBn
                  ? 'আমাদের জেলার মানুষ যেমন অতিথিপরায়ণ, প্রাণবন্ত ও আড্ডাপ্রিয়—তেমনি “ব্রাহ্মণবাড়িয়ার ঝগড়া” নিয়েও আছে নানা মজার গল্প ও লোকমুখে প্রচলিত কথা।'
                  : 'Known for warm hospitality, lively conversations and a strong sense of community, Brahmanbaria also has a humorous local reputation for its legendary "jhogra" stories.'}
            </p>
          </div>

          {/* Desktop Scroll Nav Buttons */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-brand-700 dark:hover:text-emerald-400 hover:bg-brand-50 dark:hover:bg-slate-700 hover:border-brand-300 flex items-center justify-center transition-all shadow-2xs active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-brand-700 dark:hover:text-emerald-400 hover:bg-brand-50 dark:hover:bg-slate-700 hover:border-brand-300 flex items-center justify-center transition-all shadow-2xs active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Gallery */}
        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 pb-4 pt-1 snap-x snap-mandatory scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {funCultureData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="w-[80vw] max-w-[280px] xs:max-w-xs sm:w-80 shrink-0 snap-start group cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-brand-400 dark:hover:border-emerald-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.4s ease-out ${idx * 0.04}s both`
                }}
              >
                {/* Image Frame */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={isBanglaScript ? item.topicBn : item.topicEn}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Topic Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20">
                      {isBanglaScript ? item.topicBn : item.topicEn}
                    </span>
                  </div>

                  {/* Special indicator for the humorous illustration */}
                  {item.id === 12 && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black text-amber-900 bg-amber-400 shadow-xs flex items-center gap-1">
                        <Smile className="w-3 h-3" />
                        <span>{isBb ? 'রঙ্গ-রসিকতা' : isBn ? 'রসিকতা' : 'Folklore'}</span>
                      </span>
                    </div>
                  )}

                  {/* Hover Caption Overlay Indicator */}
                  <div className="absolute bottom-3 right-3 text-xs text-emerald-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-black/60 px-2 py-1 rounded-lg backdrop-blur-xs">
                    <span>{isBb ? 'বড় কইরা দেহেন' : isBn ? 'বড় দেখুন' : 'Expand'}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {isBanglaScript ? item.topicBn : item.topicEn}
                  </h4>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {isBanglaScript ? item.captionBn : item.captionEn}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                    <span className="truncate">{item.credit}</span>
                    <span className="text-brand-600 dark:text-emerald-400 font-semibold shrink-0 ml-1">
                      {isBb ? 'ক্লিক কইরা দেহেন' : isBn ? 'ক্লিক করুন' : 'View'}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Fun Quote Highlight Card */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-50 via-emerald-50 to-amber-50 dark:from-slate-900 dark:via-emerald-950/40 dark:to-slate-900 border border-amber-200/80 dark:border-emerald-800/60 p-6 sm:p-8 text-center space-y-3 shadow-2xs">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-amber-600 border border-amber-200 dark:border-amber-700/60 shadow-2xs mx-auto">
            <MessageCircleHeart className="w-5 h-5 text-crimson-600 dark:text-rose-400" />
          </div>
          <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            “{isBb
              ? 'বাউনবাইরার মানুষ—একবার আড্ডা জমলে আর কুনো কতা নাই!'
              : isBn 
                ? 'ব্রাহ্মণবাড়িয়ার মানুষ—আড্ডা জমলে গল্পের শেষ নেই!' 
                : 'People from Brahmanbaria — once the adda starts, the stories never end!'}”
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium">
            {isBb
              ? 'চায়ের দোকান থেইকা বিশ্ববিদ্যালয়ের ক্যাম্পাস—সবখানেই আমাগো টান অটুট।'
              : isBn 
                ? 'চায়ের স্টল থেকে শুরু করে বিশ্ববিদ্যালয়ের ক্যাম্পাস—সবখানেই আমাদের বন্ধন অটুট।' 
                : 'From village tea stalls to DIU campus lawns, our student bond remains vibrant and unbreakable.'}
          </p>
        </div>

      </div>

      {/* Lightbox / Modal for Larger Image & Caption */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors backdrop-blur-xs"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows inside Lightbox */}
            <button
              type="button"
              onClick={prevLightboxItem}
              aria-label="Previous"
              className="absolute left-3 top-1/3 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors backdrop-blur-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextLightboxItem}
              aria-label="Next"
              className="absolute right-3 top-1/3 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors backdrop-blur-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="relative h-64 sm:h-80 w-full bg-slate-900">
              <img
                src={selectedItem.image}
                alt={isBanglaScript ? selectedItem.topicBn : selectedItem.topicEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500 text-slate-950 mb-1.5 inline-block">
                  {isBanglaScript ? selectedItem.topicBn : selectedItem.topicEn}
                </span>
                <h3 className="text-xl sm:text-2xl font-black leading-tight">
                  {isBanglaScript ? selectedItem.topicBn : selectedItem.topicEn}
                </h3>
              </div>
            </div>

            {/* Lightbox Details */}
            <div className="p-6 sm:p-7 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {isBanglaScript ? selectedItem.captionBn : selectedItem.captionEn}
                </p>
              </div>

              {/* Humorous note for Item #12 */}
              {selectedItem.id === 12 && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-900 dark:text-amber-300">
                    <Smile className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>{isBb ? 'রঙ্গ-রসিকতার পেছনের আসল কথা:' : isBn ? 'লোকজ রসিকতার পেছনের কথা:' : 'The Spirit Behind the Folklore:'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isBb
                      ? 'বাউনবাইরার মানুষ যেমন দিলদরিয়া ও আবেগপ্রবণ, তেমনি একের বিপদে আরেকজন সবার আগে বুক চিতাইয়া খাড়ায়। এইডাই বাউনবাইরার ভাই-বেরাদরির আসল ভালোবাসা।'
                      : isBn
                        ? 'ব্রাহ্মণবাড়িয়ার মানুষ যেমন অনুভূতিপ্রবণ ও আবেগপ্রবণ, তেমনি তীব্র ভ্রাতৃত্ববোধ ও যেকোনো প্রয়োজনে একে অপরের পাশে সবার আগে দাঁড়ানোর জন্য সুপরিচিত। এটি এক অমায়িক সামাজিক সৌহার্দ্যের বহিঃপ্রকাশ।'
                        : 'Known for being deeply emotional and expressive, people of Brahmanbaria are equally famous for unwavering loyalty and standing by each other in every need.'}
                  </p>
                </div>
              )}

              {/* Source & Credits */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <div>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{isBanglaScript ? 'তথ্যউৎস: ' : 'Source: '}</span>
                  <span>{selectedItem.source}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{isBanglaScript ? 'ফটোগ্রাফি/ইলাস্ট্রেশন: ' : 'Credit: '}</span>
                  <span>{selectedItem.credit}</span>
                </div>
              </div>

              {/* Counter Indicator */}
              <div className="text-center text-[11px] text-slate-400 dark:text-slate-500 pt-1">
                {selectedItem.id} / {funCultureData.length}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
