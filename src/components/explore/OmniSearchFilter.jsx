import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Search, RotateCcw, Filter } from 'lucide-react';

export const OmniSearchFilter = ({
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab,
  totalResults,
  onReset
}) => {
  const { lang, t } = useLanguage();

  const tabs = [
    { key: 'all', labelBn: 'সবকিছু', labelEn: 'All' },
    { key: 'upazilas', labelBn: '৯ উপজেলা', labelEn: '9 Upazilas' },
    { key: 'areas', labelBn: 'জনপ্রিয় এলাকা', labelEn: 'Popular Areas' },
    { key: 'places', labelBn: 'দর্শনীয় স্থান', labelEn: 'Places to Visit' },
    { key: 'foods', labelBn: 'বিখ্যাত খাবার', labelEn: 'Famous Foods' },
    { key: 'products', labelBn: 'বিখ্যাত পণ্য', labelEn: 'Products' },
    { key: 'rivers', labelBn: 'নদী ও জলপথ', labelEn: 'Rivers' },
    { key: 'culture', labelBn: 'সংস্কৃতি ও ঐতিহ্য', labelEn: 'Culture' },
    { key: 'notable', labelBn: 'পরিচিত ব্যক্তিত্ব', labelEn: 'Notable People' },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-soft border border-slate-200/90 space-y-5">
      
      {/* Search Input Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('explore.searchPlaceholder')}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
          />
        </div>

        {(searchQuery || activeTab !== 'all') && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl text-xs font-bold text-slate-600 hover:text-crimson-600 bg-slate-100 hover:bg-slate-200 transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'রিসেট' : 'Reset'}</span>
          </button>
        )}
      </div>

      {/* Responsive Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-brand-700 text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
            }`}
          >
            {lang === 'bn' ? tab.labelBn : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Results Count Line */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
        <span>
          {lang === 'bn' ? 'মোট অনুসন্ধানের ফলাফল:' : 'Matching items found:'}{' '}
          <strong className="text-slate-900">{totalResults}</strong>
        </span>
        {searchQuery && (
          <span className="text-brand-700 italic">
            "{searchQuery}"
          </span>
        )}
      </div>

    </div>
  );
};
