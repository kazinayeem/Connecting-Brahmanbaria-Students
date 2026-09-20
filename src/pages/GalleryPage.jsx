import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { Image as ImageIcon, Info } from 'lucide-react';

export const GalleryPage = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <SectionHeader
          badge={t('gallery.badge')}
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
        />

        {/* Placeholder disclaimer notice */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex items-start gap-3 max-w-2xl mx-auto text-xs text-slate-600 dark:text-slate-300 shadow-xs">
          <Info className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
          <p>
            {lang === 'bn'
              ? 'এখানে ডেমো ছবি দেওয়া হয়েছে। অ্যাসোসিয়েশনের আসল ইভেন্টের ছবিগুলো শিগগিরই যুক্ত করা হবে।'
              : 'Demonstration photo placeholders are currently displayed. Official event photos from BSA-DIU gatherings will be updated soon.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid />

      </div>
    </div>
  );
};
