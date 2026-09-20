import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../common/SectionHeader';
import { upazilasData } from '../../data/upazilasData';
import { MapPin, Users, Waves, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export const UpazilaHighlight = () => {
  const { t, lang } = useLanguage();
  const [selectedUpazila, setSelectedUpazila] = useState(upazilasData[0]);

  return (
    <section className="py-20 bg-slate-100/70 dark:bg-slate-900/60 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge={t('upazilas.badge')}
          title={t('upazilas.title')}
          subtitle={t('upazilas.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 9 Upazilas Interactive Selector Grid */}
          <div className="lg:col-span-7">
            <div className="p-2 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-soft border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400" />
                  {t('upazilas.clickPrompt')}
                </span>
                <span className="font-bold text-brand-700 dark:text-emerald-400">9 Upazilas</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {upazilasData.map((item) => {
                  const isSelected = selectedUpazila.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedUpazila(item)}
                      className={`text-left p-2.5 sm:p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between min-h-[68px] sm:min-h-[72px] ${
                        isSelected
                          ? 'bg-gradient-to-br from-brand-800 to-emerald-950 text-white border-brand-700 shadow-md transform scale-[1.02]'
                          : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/70 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-brand-300 dark:hover:border-emerald-500/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-crimson-400' : 'bg-brand-500'}`}></span>
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-emerald-800/80 text-emerald-200' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                          }`}>
                            {item.studentCount}+
                          </span>
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm leading-snug">
                          {lang === 'bn' ? item.nameBn : item.nameEn}
                        </h4>
                      </div>
                      <span className={`text-[10px] sm:text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-emerald-200' : 'text-slate-500 dark:text-slate-400'}`}>
                        {lang === 'bn' ? item.riverBn : item.riverEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Selected Upazila Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-4 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-lg relative overflow-hidden">
              
              {/* Decorative river wave backdrop */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-100 dark:from-emerald-950/40 to-transparent rounded-bl-full pointer-events-none opacity-60"></div>

              <div className="relative space-y-5">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-100 dark:bg-emerald-950/70 text-brand-800 dark:text-emerald-300 border border-brand-200 dark:border-emerald-800/80">
                    <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400" />
                    <span>{selectedUpazila.badge}</span>
                  </span>

                  <div className="flex items-center gap-1 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    <Users className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400" />
                    <span>{selectedUpazila.studentCount}+ {lang === 'bn' ? 'শিক্ষার্থী' : 'Students'}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {lang === 'bn' ? selectedUpazila.nameBn : selectedUpazila.nameEn}
                  </h3>
                  <p className="text-sm font-semibold text-brand-700 dark:text-emerald-400 mt-1">
                    {lang === 'bn' ? selectedUpazila.titleBn : selectedUpazila.titleEn}
                  </p>
                </div>

                {/* River connection */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/70 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  <Waves className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>
                    <strong>{lang === 'bn' ? 'নদী সংযোগ:' : 'River Basin:'}</strong> {lang === 'bn' ? selectedUpazila.riverBn : selectedUpazila.riverEn}
                  </span>
                </div>

                {/* Highlights / Heritage */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === 'bn' ? 'ঐতিহ্য ও পরিচয়' : 'Heritage & Distinction'}
                  </h5>
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed bg-emerald-50/50 dark:bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-200/50 dark:border-emerald-800/40">
                    {lang === 'bn' ? selectedUpazila.highlightBn : selectedUpazila.highlightEn}
                  </p>
                </div>

                {/* Connection at DIU */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === 'bn' ? 'ডিআইইউতে শিক্ষার্থী উপস্থিতি' : 'Presence at DIU Campus'}
                  </h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {lang === 'bn' ? selectedUpazila.descBn : selectedUpazila.descEn}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    to="/upazilas"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 shadow-md transition-colors"
                  >
                    <span>{lang === 'bn' ? '৯ উপজেলার বিস্তারিত দেখুন' : 'Explore All 9 Upazilas'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
