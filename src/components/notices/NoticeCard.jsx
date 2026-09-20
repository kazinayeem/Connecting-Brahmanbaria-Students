import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar, Tag, ArrowRight, AlertCircle, FileText } from 'lucide-react';

const categoryColorMap = {
  important: "bg-crimson-100 text-crimson-800 border-crimson-300",
  membership: "bg-emerald-100 text-emerald-800 border-emerald-300",
  academic: "bg-blue-100 text-blue-800 border-blue-300",
  event: "bg-purple-100 text-purple-800 border-purple-300",
  general: "bg-slate-100 text-slate-800 border-slate-300",
};

export const NoticeCard = ({ notice, onSelect }) => {
  const { lang, t } = useLanguage();
  const catStyle = categoryColorMap[notice.category] || categoryColorMap.general;

  return (
    <div className="group rounded-2xl p-6 bg-white border border-slate-200/80 hover:border-brand-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between">
      
      <div>
        {/* Header: Category Badge & Date */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${catStyle}`}>
            {lang === 'bn' ? notice.categoryBn : notice.categoryEn}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? notice.dateBn : notice.dateEn}</span>
          </div>
        </div>

        {/* Notice Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2.5 leading-snug">
          {lang === 'bn' ? notice.titleBn : notice.titleEn}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {lang === 'bn' ? notice.descBn : notice.descEn}
        </p>
      </div>

      {/* Footer Action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(notice)}
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-900 group-hover:underline"
        >
          <span>{t('notices.viewDetails')}</span>
          <ArrowRight className="w-3.5 h-3.5 ml-0.5 transform group-hover:translate-x-1 transition-transform" />
        </button>

        <span className="text-[11px] font-mono text-slate-400">
          Ref: #{notice.id.toUpperCase()}
        </span>
      </div>

    </div>
  );
};
