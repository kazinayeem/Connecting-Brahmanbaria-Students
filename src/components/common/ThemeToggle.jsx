import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ className = "" }) => {
  const { toggleTheme, isDark } = useTheme();
  const { lang } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const isBn = lang === 'bn';

  const label = isDark
    ? (isBn ? 'লাইট মোড চালু করুন' : 'Switch to Light mode')
    : (isBn ? 'ডার্ক মোড চালু করুন' : 'Switch to Dark mode');

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.9, rotate: 15 }}
      transition={{ duration: 0.18 }}
      className={`relative p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 ${className}`}
      aria-label={label}
      title={label}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={prefersReducedMotion ? {} : { rotate: -45, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? {} : { rotate: 45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <Sun className="w-4 h-4 text-amber-400" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={prefersReducedMotion ? {} : { rotate: 45, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? {} : { rotate: -45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <Moon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
