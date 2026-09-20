import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = ({ variant = "default" }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center p-0.5 rounded-full border transition-all ${
      variant === "mobile" 
        ? "bg-slate-100 border-slate-300 w-full justify-center" 
        : "bg-emerald-950/40 border-emerald-700/50 backdrop-blur-md shadow-inner"
    }`}>
      <div className="flex items-center pl-2 pr-1 text-emerald-300">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => setLang('bn')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          lang === 'bn'
            ? variant === "mobile"
              ? "bg-brand-700 text-white shadow-sm"
              : "bg-brand-500 text-white shadow-md font-bold"
            : variant === "mobile"
              ? "text-slate-600 hover:text-slate-900"
              : "text-emerald-200 hover:text-white"
        }`}
        aria-label="বাংলা ভাষায় পরিবর্তন করুন"
      >
        বাংলা
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          lang === 'en'
            ? variant === "mobile"
              ? "bg-brand-700 text-white shadow-sm"
              : "bg-brand-500 text-white shadow-md font-bold"
            : variant === "mobile"
              ? "text-slate-600 hover:text-slate-900"
              : "text-emerald-200 hover:text-white"
        }`}
        aria-label="Switch to English"
      >
        English
      </button>
    </div>
  );
};
