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
    <section className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge={t('upazilas.badge')}
          title={t('upazilas.title')}
          subtitle={t('upazilas.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 9 Upazilas Interactive Selector Grid */}
          <div className="lg:col-span-7">
            <div className="p-2 sm:p-4 rounded-2xl bg-white shadow-soft border border-slate-200">
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 text-xs text-slate-500 font-medium mb-3">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-600" />
                  {t('upazilas.clickPrompt')}
                </span>
                <span className="font-bold text-brand-700">9 Upazilas</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {upazilasData.map((item) => {
                  const isSelected = selectedUpazila.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedUpazila(item)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gradient-to-br from-brand-800 to-emerald-950 text-white border-brand-700 shadow-md transform scale-[1.02]'
                          : 'bg-slate-50 hover:bg-emerald-50/70 border-slate-200 text-slate-800 hover:border-brand-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-crimson-400' : 'bg-brand-500'}`}></span>
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-emerald-800/80 text-emerald-200' : 'bg-slate-200 text-slate-600'
                          }`}>
                            {item.studentCount}+
                          </span>
                        </div>
                        <h4 className="font-bold text-sm leading-snug">
                          {lang === 'bn' ? item.nameBn : item.nameEn}
                        </h4>
                      </div>
                      <span className={`text-[11px] mt-1.5 line-clamp-1 ${isSelected ? 'text-emerald-200' : 'text-slate-500'}`}>
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
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-soft-lg relative overflow-hidden">
              
              {/* Decorative river wave backdrop */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-100 to-transparent rounded-bl-full pointer-events-none opacity-60"></div>

              <div className="relative space-y-5">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-100 text-brand-800">
                    <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                    <span>{selectedUpazila.badge}</span>
                  </span>

                  <div className="flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                    <Users className="w-3.5 h-3.5 text-brand-600" />
                    <span>{selectedUpazila.studentCount}+ {lang === 'bn' ? 'শিক্ষার্থী' : 'Students'}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {lang === 'bn' ? selectedUpazila.nameBn : selectedUpazila.nameEn}
                  </h3>
                  <p className="text-sm font-semibold text-brand-700 mt-1">
                    {lang === 'bn' ? selectedUpazila.titleBn : selectedUpazila.titleEn}
                  </p>
                </div>

                {/* River connection */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Waves className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>
                    <strong>{lang === 'bn' ? 'নদী সংযোগ:' : 'River Basin:'}</strong> {lang === 'bn' ? selectedUpazila.riverBn : selectedUpazila.riverEn}
                  </span>
                </div>

                {/* Highlights / Heritage */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === 'bn' ? 'ঐতিহ্য ও পরিচয়' : 'Heritage & Distinction'}
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-200/50">
                    {lang === 'bn' ? selectedUpazila.highlightBn : selectedUpazila.highlightEn}
                  </p>
                </div>

                {/* Connection at DIU */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === 'bn' ? 'ডিআইইউতে শিক্ষার্থী উপস্থিতি' : 'Presence at DIU Campus'}
                  </h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
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
