import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  MapPin, Heart, Sparkles, GraduationCap, 
  Users, ArrowDown, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const BrahmanbariaToDiuPipeline = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="rounded-3xl bg-gradient-to-br from-brand-950 via-slate-900 to-brand-950 text-white p-8 sm:p-12 shadow-xl border border-emerald-800/40 relative overflow-hidden">
      
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-crimson-600/90 text-white shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Community Unity Pipeline</span>
        </div>
        
        <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
          {t('explore.pipeline.title')}
        </h3>

        <p className="text-base sm:text-lg text-emerald-300 font-semibold italic">
          "{t('explore.pipeline.subtitle')}"
        </p>
      </div>

      {/* Visual Pipeline Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        
        {/* Step 1: 9 Upazilas */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center space-y-3 relative group hover:border-emerald-500/50 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-700 text-white flex items-center justify-center mx-auto shadow-md">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-emerald-400 block font-bold uppercase">Stage 01</span>
          <h5 className="font-bold text-base text-white">{t('explore.pipeline.step1')}</h5>
          <p className="text-xs text-slate-400">
            {lang === 'bn' 
              ? 'সদর, সরাইল, কসবা, আশুগঞ্জ, নবীনগর, আখাউড়া, বাঞ্ছারামপুর, নাসিরনগর, বিজয়নগর'
              : 'Sadar, Sarail, Kasba, Ashuganj, Nabinagar, Akhaura, Bancharampur, Nasirnagar, Bijoynagar'}
          </p>
        </div>

        {/* Step 2: Shared Identity */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center space-y-3 relative group hover:border-emerald-500/50 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white flex items-center justify-center mx-auto shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-blue-400 block font-bold uppercase">Stage 02</span>
          <h5 className="font-bold text-base text-white">{t('explore.pipeline.step2')}</h5>
          <p className="text-xs text-slate-400">
            {lang === 'bn' 
              ? 'তিতাসের সুর, মেঘনার প্রবাহ, সমৃদ্ধ লোকসংস্কৃতি ও আত্মীয়তার গভীর শিকড়'
              : 'Titas melodies, Meghna currents, shared cultural pride, and ancestral ties'}
          </p>
        </div>

        {/* Step 3: DIU Campus */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center space-y-3 relative group hover:border-emerald-500/50 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-rose-700 text-white flex items-center justify-center mx-auto shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-rose-400 block font-bold uppercase">Stage 03</span>
          <h5 className="font-bold text-base text-white">{t('explore.pipeline.step3')}</h5>
          <p className="text-xs text-slate-400">
            {lang === 'bn' 
              ? 'উচ্চশিক্ষার স্বপ্ন নিয়ে ড্যাফোডিল স্মার্ট সিটি (আশুলিয়া) ও ঢাকা ক্যাম্পাসে সম্মিলন'
              : 'Pursuing higher education across faculties at Daffodil Smart City (Ashulia)'}
          </p>
        </div>

        {/* Step 4: BSA-DIU Family */}
        <div className="p-6 rounded-2xl bg-white/10 border-2 border-emerald-500/60 backdrop-blur-sm text-center space-y-3 relative group shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-crimson-600 to-rose-700 text-white flex items-center justify-center mx-auto shadow-md">
            <Users className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-crimson-300 block font-bold uppercase">Stage 04</span>
          <h5 className="font-bold text-base text-white">BSA • DIU</h5>
          <p className="text-xs text-emerald-200 font-medium">
            {lang === 'bn' 
              ? 'বন্ধুত্ব, সহযোগিতা, স্টাডি সার্কেল ও ভ্রাতৃত্বের এক চিরন্তন শিক্ষার্থী পরিবার'
              : 'United in friendship, mutual mentoring, and lifelong camaraderie'}
          </p>
        </div>

      </div>

      {/* Bottom CTA to join */}
      <div className="mt-10 pt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/join"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 text-white font-bold text-sm shadow-md transition-all"
        >
          <span>{lang === 'bn' ? 'আমাদের সাথে যোগ দিন' : 'Join Our Community Family'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/members"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
        >
          <span>{lang === 'bn' ? 'ব্রাহ্মণবাড়িয়ার সহপাঠীদের খুঁজুন' : 'Find Your DIU Batchmates'}</span>
        </Link>
      </div>

    </div>
  );
};
