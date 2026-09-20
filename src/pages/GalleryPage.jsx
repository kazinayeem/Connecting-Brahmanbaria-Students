import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { Image as ImageIcon, Info } from 'lucide-react';

export const GalleryPage = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <SectionHeader
          badge={t('gallery.badge')}
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
        />

        {/* Placeholder disclaimer notice */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3 max-w-2xl mx-auto text-xs text-slate-600 shadow-xs">
          <Info className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
          <p>
            {lang === 'bn'
              ? 'বর্তমানে ডেমো/প্লেসহোল্ডার আলোকচিত্র ব্যবহার করা হয়েছে। অ্যাসোসিয়েশনের অফিশিয়াল ইভেন্টের মূল ছবি শিগগিরই সংযুক্ত করা হবে।'
              : 'Demonstration photo placeholders are currently displayed. Official event photos from BSA-DIU gatherings will be curated and updated.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid />

      </div>
    </div>
  );
};
