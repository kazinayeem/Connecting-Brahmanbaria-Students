import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher = ({ variant = "default" }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div 
      className={`inline-flex items-center rounded-lg p-0.5 border text-xs font-bold transition-all ${
        variant === "mobile"
          ? "bg-slate-800 border-slate-700 text-slate-300"
          : "bg-emerald-950/50 border-emerald-700/50 backdrop-blur-xs text-emerald-200"
      }`}
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLang('bn')}
        className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
          lang === 'bn'
            ? 'bg-brand-600 text-white shadow-xs'
            : 'text-slate-300 hover:text-white'
        }`}
        aria-label="বাংলা নির্বাচন করুন"
      >
        বাংলা
      </button>

      <span className="text-slate-500/80 px-0.5 text-[10px] select-none">|</span>

      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
          lang === 'en'
            ? 'bg-brand-600 text-white shadow-xs'
            : 'text-slate-300 hover:text-white'
        }`}
        aria-label="Select English"
      >
        EN
      </button>
    </div>
  );
};
