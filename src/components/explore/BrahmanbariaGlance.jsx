import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  MapPin, Compass, Waves, Landmark, Users, 
  Sparkles, ShieldCheck, BookOpen 
} from 'lucide-react';

export const BrahmanbariaGlance = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="rounded-3xl bg-gradient-to-br from-brand-950 via-slate-900 to-brand-950 text-white p-6 sm:p-10 shadow-xl border border-emerald-800/40 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-900/60 border border-emerald-600/40 text-emerald-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('explore.glance.title')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {lang === 'bn' ? 'ব্রাহ্মণবাড়িয়া জেলা পরিচিতি' : 'District Profile: Brahmanbaria'}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>23.957° N, 91.111° E</span>
          </div>
        </div>

        {/* 4 Key Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">
              {lang === 'bn' ? 'প্রশাসনিক বিভাগ' : 'Division'}
            </span>
            <span className="text-lg sm:text-xl font-black text-white mt-1 block">
              {lang === 'bn' ? 'চট্টগ্রাম বিভাগ' : 'Chattogram'}
            </span>
            <span className="text-[11px] text-emerald-400 mt-0.5 block">
              {lang === 'bn' ? 'পূর্বাঞ্চলীয় জেলা' : 'Eastern District'}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">
              {lang === 'bn' ? 'উপজেলা সংখ্যা' : 'Upazilas'}
            </span>
            <span className="text-lg sm:text-xl font-black text-emerald-400 mt-1 block">
              9 {lang === 'bn' ? 'টি উপজেলা' : 'Upazilas'}
            </span>
            <span className="text-[11px] text-slate-300 mt-0.5 block">
              ১০০টি ইউনিয়ন • ৫টি পৌরসভা
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">
              {lang === 'bn' ? 'মোট আয়তন' : 'Total Area'}
            </span>
            <span className="text-lg sm:text-xl font-black text-white mt-1 block">
              1,927.11 {lang === 'bn' ? 'বর্গ কিমি' : 'sq km'}
            </span>
            <span className="text-[11px] text-teal-300 mt-0.5 block">
              {lang === 'bn' ? 'বিবিএস সরকারি পরিসংখ্যান' : 'BBS Verified Census'}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">
              {lang === 'bn' ? 'প্রধান নদীসমূহ' : 'Major Rivers'}
            </span>
            <span className="text-base sm:text-lg font-black text-crimson-300 mt-1 block truncate">
              {lang === 'bn' ? 'তিতাস ও মেঘনা' : 'Titas & Meghna'}
            </span>
            <span className="text-[11px] text-slate-300 mt-0.5 block truncate">
              শালদা, হাওড়া, বলভদ্র
            </span>
          </div>
        </div>

        {/* Identity & Heritage Banner */}
        <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 text-xs sm:text-sm text-slate-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Landmark className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-bold mb-0.5">
                {lang === 'bn' ? 'সাংস্কৃতিক ও ঐতিহাসিক স্বকীয়তা:' : 'Cultural & Historical Identity:'}
              </strong>
              <p className="text-slate-300 text-xs leading-relaxed">
                {lang === 'bn'
                  ? 'উপমহাদেশীয় শাস্ত্রীয় সঙ্গীতের মাইহার ঘরানার পুরোধা ওস্তাদ আলাউদ্দিন খাঁ-র সাধনাক্ষেত্র, অদ্বৈত মল্লবর্মণের অমর সৃষ্টি তিতাস নদীর রূপ, বীরশ্রেষ্ঠ মোস্তফা কামালের অন্তিম ভূমি এবং ২০২৪ সালে জিআই সনদপ্রাপ্ত বিখ্যাত মিষ্টি ছানামুখীর জেলা।'
                  : 'Birthplace of the Maihar classical musical gharana pioneered by Ustad Alauddin Khan, backdrop of Advaita Mallabarman\'s epic novel "A River Called Titas", final resting place of Bir Sreshtho Mostafa Kamal, and home to the GI-certified delicacy Chhanamukhi.'}
              </p>
            </div>
          </div>

          <div className="shrink-0 text-[11px] text-slate-400 bg-black/40 px-3 py-1.5 rounded-lg border border-slate-700/60 font-mono">
            Source: BBS & District Administration
          </div>
        </div>

      </div>
    </div>
  );
};
