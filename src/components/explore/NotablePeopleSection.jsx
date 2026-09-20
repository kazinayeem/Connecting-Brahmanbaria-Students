import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { notablePeopleData } from '../../data/brahmanbaria/notablePeople';
import { Award, Music, BookOpen, Flag, Shield, MapPin } from 'lucide-react';

export const NotablePeopleSection = () => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', labelBn: 'সকল ব্যক্তিত্ব', labelEn: 'All Icons' },
    { key: 'music', labelBn: 'সঙ্গীত সাধক', labelEn: 'Music Maestros' },
    { key: 'literature', labelBn: 'সাহিত্য ও কবিতা', labelEn: 'Literature & Poetry' },
    { key: 'liberation_war', labelBn: 'মুক্তিযুদ্ধ ও বীরত্ব', labelEn: 'Liberation War Heroes' },
    { key: 'public_service', labelBn: 'ভাষা আন্দোলন ও জনসেবা', labelEn: 'Language Movement' },
  ];

  const filteredPeople = activeCategory === 'all'
    ? notablePeopleData
    : notablePeopleData.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-6">
      
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActiveCategory(c.key)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === c.key
                ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {lang === 'bn' ? c.labelBn : c.labelEn}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPeople.map((person) => (
          <div
            key={person.id}
            className="group rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header with Avatar */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 ring-2 ring-emerald-100 dark:ring-slate-700 shrink-0 shadow-inner">
                  <img
                    src={person.photo}
                    alt={lang === 'bn' ? person.nameBn : person.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-bold text-brand-800 dark:text-emerald-300 bg-brand-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md mb-1 border border-brand-200 dark:border-emerald-800/60">
                    {lang === 'bn' ? person.categoryBn : person.categoryEn}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                    {lang === 'bn' ? person.nameBn : person.nameEn}
                  </h4>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono block">
                    {person.lifespan}
                  </span>
                </div>
              </div>

              {/* Connection */}
              <div className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700 mb-3">
                <MapPin className="w-3.5 h-3.5 text-crimson-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <span className="font-medium leading-tight">
                  {lang === 'bn' ? person.connectionBn : person.connectionEn}
                </span>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'bn' ? person.bioBn : person.bioEn}
              </p>
            </div>

            {/* Source */}
            <div className="pt-3 mt-4 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500 italic">
              {t('explore.verifiedSource')} {person.source}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
