import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cultureData } from '../../data/brahmanbaria/culture';
import { Sparkles, CheckCircle2, Music } from 'lucide-react';

export const CultureHeritageSection = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cultureData.map((item) => (
        <div
          key={item.id}
          className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden bg-slate-900">
            <img
              src={item.image}
              alt={lang === 'bn' ? item.titleBn : item.titleEn}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-black/60 backdrop-blur-md">
                {lang === 'bn' ? item.categoryBn : item.categoryEn}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {lang === 'bn' ? item.titleBn : item.titleEn}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                {lang === 'bn' ? item.descBn : item.descEn}
              </p>

              {/* Features List */}
              <ul className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 mt-4">
                {(lang === 'bn' ? item.featuresBn : item.featuresEn).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500 italic">
              {t('explore.verifiedSource')} {item.source}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};
