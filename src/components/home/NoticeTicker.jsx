import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { noticesData } from '../../data/noticesData';
import { Bell, ArrowRight, AlertCircle } from 'lucide-react';

export const NoticeTicker = () => {
  const { lang, isBb, isBn, isEn, isBanglaScript } = useLanguage();
  const latestNotice = noticesData[0]; // e.g. Urgent blood or registration notice

  if (!latestNotice) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white border-y border-emerald-700/50 shadow-sm py-2.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-crimson-600 text-white font-bold text-[10px] tracking-wider uppercase shrink-0 animate-pulse">
            <AlertCircle className="w-3 h-3" />
            {isBb ? 'জরুরি খবর' : isBn ? 'জরুরি নোটিশ' : 'Notice'}
          </span>
          <span className="text-emerald-100 truncate font-medium">
            {isBanglaScript ? latestNotice.titleBn : latestNotice.titleEn}
          </span>
        </div>

        <Link
          to="/notices"
          className="inline-flex items-center gap-1 font-semibold text-emerald-200 hover:text-white hover:underline shrink-0 text-xs transition-colors"
        >
          <span>{isBb ? 'হগলতি নোটিশ দেহেন' : isBn ? 'সব নোটিশ দেখুন' : 'View All Notices'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

      </div>
    </div>
  );
};
