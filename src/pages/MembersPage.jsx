import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { SearchFilter } from '../components/members/SearchFilter';
import { MemberCard } from '../components/members/MemberCard';
import { membersData } from '../data/membersData';
import { Users, Info, Sparkles } from 'lucide-react';

export const MembersPage = () => {
  const { t, lang, isBb, isBn, isEn } = useLanguage();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedBatch, setSelectedBatch] = useState('all');
  const [selectedUpazila, setSelectedUpazila] = useState('all');

  const filteredMembers = useMemo(() => {
    return membersData.filter(member => {
      // Search query (matches nameBn, nameEn, or studentId)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        member.nameBn.toLowerCase().includes(q) ||
        member.nameEn.toLowerCase().includes(q) ||
        (member.studentId && member.studentId.toLowerCase().includes(q)) ||
        member.upazilaBn.toLowerCase().includes(q) ||
        member.upazilaEn.toLowerCase().includes(q);

      // Department filter
      const matchesDept = selectedDept === 'all' || member.deptId === selectedDept;

      // Batch filter
      const matchesBatch = selectedBatch === 'all' || member.batch === selectedBatch;

      // Upazila filter
      const matchesUpazila = selectedUpazila === 'all' || 
        member.upazilaBn === selectedUpazila || 
        member.upazilaEn === selectedUpazila;

      return matchesSearch && matchesDept && matchesBatch && matchesUpazila;
    });
  }, [searchQuery, selectedDept, selectedBatch, selectedUpazila]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedDept('all');
    setSelectedBatch('all');
    setSelectedUpazila('all');
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <SectionHeader
          badge={t('members.badge')}
          title={t('members.title')}
          subtitle={t('members.subtitle')}
        />

        {/* Sample notice banner */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex items-start gap-3 max-w-2xl mx-auto text-xs text-slate-600 dark:text-slate-300 shadow-xs">
          <Info className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
          <p>
            {isBb
              ? 'এইহানে ছাওয়াল-মাইয়াগো কিছু নমুনা তথ্য দেওয়া হইছে। নতুন ছাওয়াল-মাইয়ারা "যোগ দেন" পাতা থেইকা সহজেই নাম লেখাইতে পারবেন।'
              : isBn 
                ? 'এখানে শিক্ষার্থীদের কিছু নমুনা তথ্য দেওয়া হয়েছে। নতুন শিক্ষার্থীরা "যোগ দিন" পাতা থেকে সহজেই রেজিস্ট্রেশন করতে পারেন।'
                : 'The student profiles shown below are demonstration samples. New students can register via the "Join Us" page.'}
          </p>
        </div>

        {/* Search & Filters Component */}
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedDept={selectedDept}
          setSelectedDept={setSelectedDept}
          selectedBatch={selectedBatch}
          setSelectedBatch={setSelectedBatch}
          selectedUpazila={selectedUpazila}
          setSelectedUpazila={setSelectedUpazila}
          onReset={handleReset}
        />

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span>
              {t('members.totalMembers')}: <strong className="text-slate-900 dark:text-white">{filteredMembers.length}</strong>
            </span>
          </div>
          {(searchQuery || selectedDept !== 'all' || selectedBatch !== 'all' || selectedUpazila !== 'all') && (
            <span className="text-brand-700 dark:text-emerald-300 bg-brand-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg">
              {isBb ? 'ফিল্টার চালু আছে' : isBn ? 'ফিল্টার সক্রিয়' : 'Filters Active'}
            </span>
          )}
        </div>

        {/* Members Cards Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-soft max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              {isBb ? 'কুনো ছাওয়াল-মাইয়া পাওয়া যায় নাই' : isBn ? 'কোনো শিক্ষার্থী পাওয়া যায়নি' : 'No Students Found'}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t('members.noResults')}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 rounded-xl text-xs font-bold text-brand-700 dark:text-emerald-300 bg-brand-50 dark:bg-emerald-950/60 hover:bg-brand-100 dark:hover:bg-emerald-900/60 transition-colors"
              >
                {isBb ? 'ফিল্টার রিসেট করেন' : isBn ? 'ফিল্টার রিসেট করুন' : 'Reset Filters'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
