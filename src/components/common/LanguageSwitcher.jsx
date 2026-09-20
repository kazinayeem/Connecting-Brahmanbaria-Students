import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher = ({ className = "" }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div 
      className={`inline-flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs font-semibold select-none transition-colors duration-200 ${className}`}
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLang('bn')}
        className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all duration-150 ${
          lang === 'bn'
            ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
            : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
        aria-label="বাংলা নির্বাচন করুন"
      >
        বাংলা
      </button>

      <span className="text-slate-300 dark:text-slate-600 px-0.5 text-[10px]" aria-hidden="true">|</span>

      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all duration-150 ${
          lang === 'en'
            ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs'
            : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
        aria-label="Select English"
      >
        EN
      </button>
    </div>
  );
};
