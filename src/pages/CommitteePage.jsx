import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { committeeData } from '../data/committeeData';
import { CommitteeCard } from '../components/committee/CommitteeCard';
import { Users, Info, ShieldAlert, Award } from 'lucide-react';

export const CommitteePage = () => {
  const { t, lang } = useLanguage();
  const [selectedRole, setSelectedRole] = useState('all');

  const filteredCommittee = selectedRole === 'all'
    ? committeeData
    : committeeData.filter(m => m.roleKey === selectedRole);

  const roleFilters = [
    { key: 'all', labelBn: 'সকল পদবী', labelEn: 'All Positions' },
    { key: 'president', labelBn: 'সভাপতি', labelEn: 'President' },
    { key: 'vicePresident', labelBn: 'সহ-সভাপতি', labelEn: 'Vice President' },
    { key: 'generalSecretary', labelBn: 'সাধারণ সম্পাদক', labelEn: 'General Secretary' },
    { key: 'organizingSecretary', labelBn: 'সাংগঠনিক সম্পাদক', labelEn: 'Organizing Secretary' },
    { key: 'financeSecretary', labelBn: 'অর্থ সম্পাদক', labelEn: 'Finance Secretary' },
  ];

  return (
    <div className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeader
          badge={t('committee.badge')}
          title={t('committee.title')}
          subtitle={t('committee.subtitle')}
        />

        {/* Notice Info Box: Sample Data Alert */}
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 flex items-start gap-3 max-w-2xl mx-auto text-xs text-emerald-900 dark:text-emerald-300">
          <Info className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold mb-0.5">
              {lang === 'bn' ? 'কমিটি সংক্রান্ত তথ্য:' : 'Executive Committee Notice:'}
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              {lang === 'bn'
                ? 'এখানে দেওয়া তথ্যগুলো ডেমো বা নমুনা হিসেবে রয়েছে। অফিশিয়াল কমিটি চূড়ান্ত হলে আসল তথ্য যুক্ত করা হবে।'
                : 'The details displayed here are representative samples. Official committee member details will be updated soon.'}
            </p>
          </div>
        </div>

        {/* Role Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {roleFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setSelectedRole(filter.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                selectedRole === filter.key
                  ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {lang === 'bn' ? filter.labelBn : filter.labelEn}
            </button>
          ))}
        </div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCommittee.map((member) => (
            <CommitteeCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </div>
  );
};
