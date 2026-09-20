import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { upazilasData } from '../data/upazilasData';
import { 
  MapPin, Users, Waves, Sparkles, Heart, 
  GraduationCap, BookOpen, Compass, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const UpazilasPage = () => {
  const { t, lang, isBb, isBn, isEn, isBanglaScript } = useLanguage();
  const [activeUpazila, setActiveUpazila] = useState(upazilasData[0]);

  const totalEstimatedStudents = upazilasData.reduce((acc, cur) => acc + cur.studentCount, 0);

  return (
    <div className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <SectionHeader
          badge={t('upazilas.badge')}
          title={t('upazilas.title')}
          subtitle={t('upazilas.subtitle')}
        />

        {/* Big Unity Philosophy Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-brand-950 via-slate-900 to-brand-950 text-white shadow-xl border border-emerald-800/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-900/80 text-emerald-300 border border-emerald-600/40">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isBb ? 'তিতাস-মেঘনা থেইকা ডিআইইউ ক্যাম্পাস' : isBn ? 'তিতাস-মেঘনা থেকে ডিআইইউ ক্যাম্পাস' : 'From Titas & Meghna to DIU Campus'}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              {isBb
                ? 'বাউনবাইরার ৯টা কোণ, কিন্তু ডিআইইউতে আমরা এক আত্মা'
                : isBn 
                  ? 'ব্রাহ্মণবাড়িয়ার ৯টি প্রান্ত, কিন্তু ডিআইইউতে আমরা এক আত্মা'
                  : '9 Distinct Upazilas, United as One Family at DIU'}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {t('upazilas.intro')}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-emerald-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{isBb ? '৯ উপজেলার হক্কলতের সরব উপস্থিতি' : isBn ? '৯টি উপজেলার সক্রিয় অংশগ্রহণ' : 'Representation across all 9 upazilas'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{isBb ? 'একজন আরেকজনরে সাহায্য আর বন্ধুত্বের বাঁধন' : isBn ? 'একে অপরকে সহযোগিতা ও বন্ধুত্বের বন্ধন' : 'Academic & social peer collaboration'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center space-y-2">
            <span className="text-4xl sm:text-5xl font-black text-emerald-400">
              {totalEstimatedStudents}+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {isBb ? 'ডিআইইউতে বাউনবাইরার ছাওয়াল-মাইয়া' : isBn ? 'ডিআইইউতে ব্রাহ্মণবাড়িয়ার শিক্ষার্থী' : 'Students from Brahmanbaria at DIU'}
            </span>
            <span className="text-[11px] text-slate-400">
              {isBb ? 'আশুলিয়া আর ধানমন্ডি ক্যাম্পাস মিলাইয়া' : isBn ? 'আশুলিয়া ও ধানমন্ডি ক্যাম্পাস মিলিয়ে' : 'Across Ashulia & Dhaka Campuses'}
            </span>
          </div>
        </div>

        {/* 9 Upazilas Full Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upazilasData.map((upz, idx) => (
            <div
              key={upz.id}
              className="rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-xl bg-brand-50 dark:bg-emerald-950/60 text-brand-700 dark:text-emerald-300 text-xs font-black flex items-center justify-center border border-brand-200 dark:border-emerald-800/60">
                    0{idx + 1}
                  </span>

                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full flex items-center gap-1">
                    <Users className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                    <span>{upz.studentCount}+ {isBanglaScript ? 'জন শিক্ষার্থী' : 'Students'}</span>
                  </span>
                </div>

                {/* Name */}
                <h4 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {isBanglaScript ? upz.nameBn : upz.nameEn}
                </h4>

                <p className="text-xs font-bold text-brand-700 dark:text-emerald-400 mt-1 mb-3">
                  {isBanglaScript ? upz.titleBn : upz.titleEn}
                </p>

                {/* River Basin */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-4">
                  <Waves className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span className="truncate">
                    <strong>{isBb ? 'গাঙ:' : isBn ? 'নদী:' : 'River:'}</strong> {isBanglaScript ? upz.riverBn : upz.riverEn}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-1 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    {isBb ? 'ঐতিহ্য আর স্বকীয়তা' : isBn ? 'ঐতিহ্য ও স্বকীয়তা' : 'Heritage & Culture'}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-emerald-50/40 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
                    {isBanglaScript ? upz.highlightBn : upz.highlightEn}
                  </p>
                </div>

                {/* Campus Presence */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    {isBb ? 'ক্যাম্পাসের কামকাজ' : isBn ? 'ক্যাম্পাস কার্যক্রম' : 'Campus Connection'}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isBanglaScript ? upz.descBn : upz.descEn}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-brand-700 dark:text-emerald-400">
                  #{upz.id}
                </span>
                <Link
                  to={`/members`}
                  className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-700 dark:hover:text-emerald-400 hover:underline"
                >
                  {isBb ? 'উপজেলার শিক্ষার্থীদের খুঁজেন ›' : isBn ? 'উপজেলার শিক্ষার্থীদের খুঁজুন ›' : 'Find students ›'}
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
