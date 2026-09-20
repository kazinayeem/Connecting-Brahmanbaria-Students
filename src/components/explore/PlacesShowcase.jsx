import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { placesData } from '../../data/brahmanbaria/places';
import { 
  MapPin, Navigation, X, ExternalLink, 
  Eye, Compass, Landmark, Layers, Info 
} from 'lucide-react';

export const PlacesShowcase = ({ places = placesData }) => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedUpazila, setSelectedUpazila] = useState('all');
  const [activeModalPlace, setActiveModalPlace] = useState(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);

  const categories = [
    { key: 'all', labelBn: 'সকল', labelEn: 'All' },
    { key: 'historical', labelBn: 'ঐতিহাসিক', labelEn: 'Historical' },
    { key: 'religious', labelBn: 'ধর্মীয়', labelEn: 'Religious' },
    { key: 'natural', labelBn: 'প্রাকৃতিক', labelEn: 'Natural' },
    { key: 'memorial', labelBn: 'স্মৃতিসৌধ', labelEn: 'Memorial' },
    { key: 'heritage', labelBn: 'ঐতিহ্যবাহী', labelEn: 'Heritage' },
  ];

  // Upazila list derived from dataset
  const upazilaOptions = [
    { key: 'all', labelBn: 'সকল উপজেলা', labelEn: 'All Upazilas' },
    { key: 'Brahmanbaria Sadar', labelBn: 'ব্রাহ্মণবাড়িয়া সদর', labelEn: 'Brahmanbaria Sadar' },
    { key: 'Akhaura', labelBn: 'আখাউড়া', labelEn: 'Akhaura' },
    { key: 'Kasba', labelBn: 'কসবা', labelEn: 'Kasba' },
    { key: 'Nabinagar', labelBn: 'নবীনগর', labelEn: 'Nabinagar' },
    { key: 'Nasirnagar', labelBn: 'নাসিরনগর', labelEn: 'Nasirnagar' },
  ];

  const filtered = places.filter(place => {
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchesUpazila = selectedUpazila === 'all' || place.upazila === selectedUpazila || place.upazilaEn === selectedUpazila;
    return matchesCategory && matchesUpazila;
  });

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'historical': return lang === 'bn' ? 'ঐতিহাসিক' : 'Historical';
      case 'religious': return lang === 'bn' ? 'ধর্মীয়' : 'Religious';
      case 'natural': return lang === 'bn' ? 'প্রাকৃতিক' : 'Natural';
      case 'memorial': return lang === 'bn' ? 'স্মৃতিসৌধ' : 'Memorial';
      case 'heritage': return lang === 'bn' ? 'ঐতিহ্যবাহী' : 'Heritage';
      default: return cat;
    }
  };

  const openModal = (place) => {
    setActiveModalPlace(place);
    setActiveGalleryImage(place.image);
  };

  const closeModal = () => {
    setActiveModalPlace(null);
    setActiveGalleryImage(null);
  };

  // Keyboard navigation & body scroll lock for place modal
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (activeModalPlace) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalPlace]);

  return (
    <div className="space-y-8">
      
      {/* Filters Bar: Categories + Upazila Dropdown */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ক্যাটাগরি:' : 'Category:'}</span>
          </span>
          {categories.map((c) => {
            const isSelected = selectedCategory === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setSelectedCategory(c.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-sm ring-2 ring-brand-700/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {lang === 'bn' ? c.labelBn : c.labelEn}
              </button>
            );
          })}
        </div>

        {/* Upazila Filter Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="upazila-filter" className="text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>{lang === 'bn' ? 'উপজেলা:' : 'Upazila:'}</span>
          </label>
          <select
            id="upazila-filter"
            value={selectedUpazila}
            onChange={(e) => setSelectedUpazila(e.target.value)}
            className="bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {upazilaOptions.map(u => (
              <option key={u.key} value={u.key}>
                {lang === 'bn' ? u.labelBn : u.labelEn}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          {lang === 'bn' 
            ? `মোট ${filtered.length}টি স্থান প্রদর্শিত হচ্ছে`
            : `Showing ${filtered.length} verified places`}
        </span>
        {(selectedCategory !== 'all' || selectedUpazila !== 'all') && (
          <button
            type="button"
            onClick={() => { setSelectedCategory('all'); setSelectedUpazila('all'); }}
            className="text-brand-600 dark:text-emerald-400 hover:underline font-semibold"
          >
            {lang === 'bn' ? 'ফিল্টার মুছুন' : 'Reset filters'}
          </button>
        )}
      </div>

      {/* Grid of Tourist/Place Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 space-y-3">
          <Compass className="w-10 h-10 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {lang === 'bn' ? 'নির্বাচিত ফিল্টারে কোনো স্থান পাওয়া যায়নি।' : 'No places found matching the selected filters.'}
          </p>
          <button
            type="button"
            onClick={() => { setSelectedCategory('all'); setSelectedUpazila('all'); }}
            className="px-4 py-2 bg-brand-700 dark:bg-brand-600 text-white rounded-xl text-xs font-bold hover:bg-brand-800"
          >
            {lang === 'bn' ? 'সকল স্থান দেখুন' : 'Show all places'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((place) => (
            <div
              key={place.id}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-500 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with badges */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={place.image}
                  alt={lang === 'bn' ? place.nameBn : place.nameEn}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20">
                    {getCategoryLabel(place.category)}
                  </span>
                </div>

                {/* Upazila Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{lang === 'bn' ? place.upazilaBn : place.upazilaEn}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                      {place.nameBn}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {place.nameEn}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                    <span>{lang === 'bn' ? place.locationBn : place.locationEn}</span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {lang === 'bn' ? place.descriptionBn : place.descriptionEn}
                  </p>
                </div>

                {/* How to reach / Access information */}
                <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-900 dark:text-amber-300">
                    <Navigation className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{lang === 'bn' ? 'যাতায়াত ব্যবস্থা:' : 'How to reach:'}</span>
                  </div>
                  <p className="text-xs text-amber-950/90 dark:text-amber-200 leading-relaxed line-clamp-2">
                    {lang === 'bn' ? place.howToReachBn : place.howToReachEn}
                  </p>
                </div>

                {/* View Details Button */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 italic">
                    {lang === 'bn' ? 'উৎস: জেলা প্রশাসন' : 'Source: District Admin'}
                  </span>
                  <button
                    type="button"
                    onClick={() => openModal(place)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-700 dark:bg-brand-600 hover:bg-brand-800 dark:hover:bg-brand-500 text-white text-xs font-bold transition-colors shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details'}</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

      {/* Place Details Modal */}
      {activeModalPlace && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors backdrop-blur-xs min-h-[40px] min-w-[40px]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image Showcase */}
            <div className="relative h-52 xs:h-64 sm:h-72 w-full bg-slate-900">
              <img
                src={activeGalleryImage || activeModalPlace.image}
                alt={lang === 'bn' ? activeModalPlace.nameBn : activeModalPlace.nameEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-600/90 text-white backdrop-blur-xs">
                    {getCategoryLabel(activeModalPlace.category)}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/20 text-white backdrop-blur-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {lang === 'bn' ? activeModalPlace.upazilaBn : activeModalPlace.upazilaEn}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                  {activeModalPlace.nameBn}
                </h3>
                <p className="text-sm font-semibold text-slate-300">
                  {activeModalPlace.nameEn}
                </p>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {activeModalPlace.gallery && activeModalPlace.gallery.length > 1 && (
              <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
                {activeModalPlace.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveGalleryImage(imgUrl)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeGalleryImage === imgUrl ? 'border-brand-600 ring-2 ring-brand-500/40' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Modal Content Details */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Location */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                    {lang === 'bn' ? 'অবস্থান' : 'Location'}
                  </span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {lang === 'bn' ? activeModalPlace.locationBn : activeModalPlace.locationEn}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {lang === 'bn' ? `উপজেলা: ${activeModalPlace.upazilaBn}` : `Upazila: ${activeModalPlace.upazilaEn}`}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <span>{lang === 'bn' ? 'বিবরণ ও পরিচিতি' : 'Description & Identity'}</span>
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                  {lang === 'bn' ? activeModalPlace.descriptionBn : activeModalPlace.descriptionEn}
                </p>
              </div>

              {/* How to Reach Detailed */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>{lang === 'bn' ? 'কীভাবে যাবেন (যাতায়াত ব্যবস্থা)' : 'How to Reach / Access'}</span>
                </h4>
                <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
                  {lang === 'bn' ? activeModalPlace.howToReachBn : activeModalPlace.howToReachEn}
                </div>
              </div>

              {/* Source Link */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-slate-700 dark:text-slate-300">{lang === 'bn' ? 'তথ্যসূত্র: ' : 'Source: '}</span>
                  <span>{activeModalPlace.source}</span>
                </div>

                {activeModalPlace.sourceUrl && (
                  <a
                    href={activeModalPlace.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-700 dark:text-emerald-400 hover:text-brand-900 dark:hover:text-emerald-300 font-bold hover:underline shrink-0"
                  >
                    <span>{lang === 'bn' ? 'সরকারি তথ্য বাতায়ন দেখুন' : 'View Official Portal'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
