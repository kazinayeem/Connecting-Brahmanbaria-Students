import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { placesData } from '../../data/brahmanbaria/places';
import { MapPin, Bookmark, Tag, Info, ArrowUpRight } from 'lucide-react';

export const PlacesShowcase = ({ places = placesData }) => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', labelBn: 'সকল স্থান', labelEn: 'All Places' },
    { key: 'historical', labelBn: 'ঐতিহাসিক ও পুরাকীর্তি', labelEn: 'Historical Heritage' },
    { key: 'cultural', labelBn: 'সাংস্কৃতিক স্মৃতি', labelEn: 'Cultural Landmarks' },
    { key: 'religious', labelBn: 'ধর্মীয় ঐতিহ্য', labelEn: 'Religious Sites' },
    { key: 'natural', labelBn: 'প্রাকৃতিক ও নদী বন্দর', labelEn: 'Riverside & Nature' },
  ];

  const filtered = selectedCategory === 'all'
    ? places
    : places.filter(p => p.category === selectedCategory || (selectedCategory === 'historical' && p.category === 'landmarks'));

  return (
    <div className="space-y-6">
      
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setSelectedCategory(c.key)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === c.key
                ? 'bg-brand-700 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'bn' ? c.labelBn : c.labelEn}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((place) => (
          <div
            key={place.id}
            className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-brand-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-slate-900">
              <img
                src={place.image}
                alt={lang === 'bn' ? place.nameBn : place.nameEn}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-black/60 backdrop-blur-md">
                  {lang === 'bn' ? place.categoryBn : place.categoryEn}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'bn' ? place.upazilaBn : place.upazilaEn}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors leading-snug">
                  {lang === 'bn' ? place.nameBn : place.nameEn}
                </h4>
                
                <p className="text-xs text-slate-500 mt-1 mb-3">
                  📍 {lang === 'bn' ? place.locationBn : place.locationEn}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {lang === 'bn' ? place.historyBn : place.historyEn}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <p className="text-[11px] text-brand-800 font-medium bg-brand-50/70 p-2 rounded-xl border border-brand-100">
                  ★ <strong>{lang === 'bn' ? 'গুরুত্ব:' : 'Why Important:'}</strong> {lang === 'bn' ? place.importanceBn : place.importanceEn}
                </p>
                <span className="text-[10px] text-slate-400 block italic">
                  {t('explore.verifiedSource')} {place.source}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
