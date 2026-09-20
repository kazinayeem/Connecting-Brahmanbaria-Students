import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher = ({ className = "" }) => {
  const { lang, setLang } = useLanguage();

  const options = [
    { key: 'bb', label: 'BB', tooltip: 'বাউনবাইরা (ব্রাহ্মণবাড়িয়ার আঞ্চলিক ভাষা)', aria: 'বাউনবাইরা ভাষা নির্বাচন করুন' },
    { key: 'bn', label: 'BN', tooltip: 'প্রমিত বাংলা (Standard Bangla)', aria: 'প্রমিত বাংলা নির্বাচন করুন' },
    { key: 'en', label: 'EN', tooltip: 'English', aria: 'Select English' },
  ];

  return (
    <div 
      className={`inline-flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/70 text-xs font-semibold select-none transition-colors duration-200 ${className}`}
      role="group"
      aria-label="ভাষা পরিবর্তন (Language selection)"
    >
      {options.map((opt, idx) => {
        const isSelected = lang === opt.key;
        return (
          <React.Fragment key={opt.key}>
            <button
              type="button"
              onClick={() => setLang(opt.key)}
              aria-label={opt.aria}
              aria-pressed={isSelected}
              title={opt.tooltip}
              className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 ${
                isSelected
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs font-extrabold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {opt.label}
            </button>
            {idx < options.length - 1 && (
              <span className="text-slate-300 dark:text-slate-600 text-[10px] select-none" aria-hidden="true">|</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
