import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { NoticeCard } from '../components/notices/NoticeCard';
import { Modal } from '../components/common/Modal';
import { noticesData } from '../data/noticesData';
import { Bell, Filter, Calendar, Tag, Info } from 'lucide-react';

export const NoticesPage = () => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedNotice, setSelectedNotice] = useState(null);

  const categories = [
    { key: 'all', labelBn: 'সব নোটিশ', labelEn: 'All Notices' },
    { key: 'important', labelBn: 'জরুরি', labelEn: 'Important' },
    { key: 'membership', labelBn: 'সদস্যপদ', labelEn: 'Membership' },
    { key: 'academic', labelBn: 'একাডেমিক', labelEn: 'Academic' },
    { key: 'event', labelBn: 'ইভেন্ট', labelEn: 'Event' },
    { key: 'general', labelBn: 'সাধারণ', labelEn: 'General' },
  ];

  const filteredNotices = activeCategory === 'all'
    ? noticesData
    : noticesData.filter(n => n.category === activeCategory);

  return (
    <div className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <SectionHeader
          badge={t('notices.badge')}
          title={t('notices.title')}
          subtitle={t('notices.subtitle')}
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat.key
                  ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {lang === 'bn' ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Notices Grid */}
        {filteredNotices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                onSelect={(n) => setSelectedNotice(n)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-soft max-w-md mx-auto space-y-3">
            <Bell className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="text-base font-bold text-slate-800 dark:text-white">
              {t('notices.noNotices')}
            </h4>
          </div>
        )}

      </div>

      {/* Notice Detail Modal */}
      <Modal
        isOpen={!!selectedNotice}
        onClose={() => setSelectedNotice(null)}
        title={selectedNotice ? (lang === 'bn' ? selectedNotice.titleBn : selectedNotice.titleEn) : ''}
      >
        {selectedNotice && (
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold text-brand-700 dark:text-emerald-400">
                {lang === 'bn' ? selectedNotice.categoryBn : selectedNotice.categoryEn}
              </span>
              <span>
                {t('notices.publishedOn')} {lang === 'bn' ? selectedNotice.dateBn : selectedNotice.dateEn}
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
              {lang === 'bn' ? selectedNotice.descBn : selectedNotice.descEn}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
              {lang === 'bn' ? selectedNotice.contentBn : selectedNotice.contentEn}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
              >
                {t('notices.close')}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
