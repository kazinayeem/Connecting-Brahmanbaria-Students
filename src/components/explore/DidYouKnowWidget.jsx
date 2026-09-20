import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { factsData } from '../../data/brahmanbaria/facts';
import { Lightbulb, ChevronRight, Sparkles, BookOpen } from 'lucide-react';

export const DidYouKnowWidget = () => {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const fact = factsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % factsData.length);
  };

  if (!fact) return null;

  return (
    <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-amber-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3 flex-1">
        <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
          <Lightbulb className="w-5 h-5 animate-pulse" />
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full">
              {t('explore.didYouKnow')}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
              {currentIndex + 1}/{factsData.length}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug">
            {lang === 'bn' ? fact.factBn : fact.factEn}
          </p>

          <span className="text-[10px] text-slate-500 dark:text-slate-400 italic block">
            {t('explore.verifiedSource')} {fact.source}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-emerald-100/60 dark:hover:bg-slate-700 border border-emerald-300/80 dark:border-slate-700 transition-colors shrink-0 shadow-2xs"
      >
        <span>{t('explore.nextFact')}</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
