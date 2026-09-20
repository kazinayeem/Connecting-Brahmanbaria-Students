import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ className = "" }) => {
  const { toggleTheme, isDark } = useTheme();
  const { lang } = useLanguage();
  const isBn = lang === 'bn';

  const label = isDark 
    ? (isBn ? 'লাইট মোড চালু করুন' : 'Switch to Light mode')
    : (isBn ? 'ডার্ক মোড চালু করুন' : 'Switch to Dark mode');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 ${className}`}
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-600 dark:text-slate-300 transition-transform duration-200" />
      )}
    </button>
  );
};
