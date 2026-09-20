import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { riversData } from '../../data/brahmanbaria/rivers';
import { Waves, MapPin, Sparkles, BookOpen } from 'lucide-react';

export const RiversSection = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {riversData.map((river) => (
          <div
            key={river.id}
            className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col sm:flex-row group"
          >
            {/* Image */}
            <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden bg-slate-900 shrink-0">
              <img
                src={river.image}
                alt={lang === 'bn' ? river.nameBn : river.nameEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-cyan-400" />
                <span>{river.lengthKm}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {lang === 'bn' ? river.nameBn : river.nameEn}
                </h4>

                <div className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-crimson-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'bn' ? 'প্রবাহিত অঞ্চল:' : 'Course:'}</strong>{' '}
                    {lang === 'bn' ? river.areasPassedBn : river.areasPassedEn}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lang === 'bn' ? river.importanceBn : river.importanceEn}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500 italic">
                {t('explore.verifiedSource')} {river.source}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
