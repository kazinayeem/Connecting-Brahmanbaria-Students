import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ variant = "default" }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-bold transition-all duration-200 border ${
        isDark
          ? 'bg-slate-800 hover:bg-slate-700 text-amber-400 border-slate-700 shadow-xs'
          : 'bg-emerald-950/50 hover:bg-emerald-900/70 text-emerald-200 hover:text-white border-emerald-700/50 shadow-xs'
      }`}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-semibold text-slate-200">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-emerald-200" />
          <span className="text-[11px] font-semibold text-emerald-100">Dark</span>
        </>
      )}
    </button>
  );
};
