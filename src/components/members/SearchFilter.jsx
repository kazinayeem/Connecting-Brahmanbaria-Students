import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { departmentsList, batchesList } from '../../data/membersData';
import { upazilasData } from '../../data/upazilasData';
import { Search, Filter, RotateCcw } from 'lucide-react';

export const SearchFilter = ({
  searchQuery,
  setSearchQuery,
  selectedDept,
  setSelectedDept,
  selectedBatch,
  setSelectedBatch,
  selectedUpazila,
  setSelectedUpazila,
  onReset
}) => {
  const { lang, t } = useLanguage();

  const isFiltered = searchQuery || selectedDept !== 'all' || selectedBatch !== 'all' || selectedUpazila !== 'all';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-soft border border-slate-200/90 dark:border-slate-800 mb-8 space-y-4">
      
      {/* Top row: Search input & Reset */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('members.searchPlaceholder')}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
          />
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-crimson-600 dark:hover:text-crimson-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ফিল্টার মুছুন' : 'Reset'}</span>
          </button>
        )}
      </div>

      {/* Bottom row: Filter Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
        
        {/* Department Filter */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            {t('members.department')}
          </label>
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="all">{t('members.allDepartments')}</option>
            {departmentsList.map(dept => (
              <option key={dept.id} value={dept.id}>
                {lang === 'bn' ? dept.nameBn : dept.nameEn}
              </option>
            ))}
          </select>
        </div>

        {/* Batch Filter */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            {t('members.batch')}
          </label>
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="all">{t('members.allBatches')}</option>
            {batchesList.map(batch => (
              <option key={batch} value={batch}>{batch}</option>
            ))}
          </select>
        </div>

        {/* Upazila Filter */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            {t('members.upazila')}
          </label>
          <select
            value={selectedUpazila}
            onChange={(e) => setSelectedUpazila(e.target.value)}
            className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="all">{t('members.allUpazilas')}</option>
            {upazilasData.map(upz => (
              <option key={upz.id} value={upz.nameBn}>
                {lang === 'bn' ? upz.nameBn : upz.nameEn}
              </option>
            ))}
          </select>
        </div>

      </div>

    </div>
  );
};
