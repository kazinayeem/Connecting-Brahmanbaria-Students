import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { 
  BookOpen, Target, Eye, Compass, ShieldCheck, 
  HeartHandshake, Users, Award, Sparkles, CheckCircle2 
} from 'lucide-react';

export const AboutPage = () => {
  const { t, lang } = useLanguage();

  const values = t('about.values') || [];

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <SectionHeader
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-8 sm:p-12 shadow-soft border border-slate-200">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-100 text-brand-800">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t('about.storyTitle')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {lang === 'bn' 
                ? 'ক্যাম্পাসে আমাদের পথচলা ও শিক্ষার্থীদের মেলবন্ধন' 
                : 'Our Student Journey & Brotherhood at DIU'}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t('about.storyDesc')}
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>{lang === 'bn' ? 'সম্পূর্ণ অরাজনৈতিক' : 'Strictly Non-Political'}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>{lang === 'bn' ? 'শিক্ষার্থীবান্ধব প্ল্যাটফর্ম' : 'Student-Centric Welfare'}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>{lang === 'bn' ? '৯ উপজেলার সমঅধিকার' : 'All 9 Upazilas Represented'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-4 ring-emerald-50">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="DIU campus students"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                {lang === 'bn' ? 'ড্যাফোডিল স্মার্ট সিটি, আশুলিয়া ক্যাম্পাস' : 'Daffodil Smart City, Ashulia Campus'}
              </div>
            </div>
          </div>
        </div>

        {/* Purpose, Vision, Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Purpose */}
          <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-soft flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white flex items-center justify-center shadow-md">
                <Target className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {t('about.purposeTitle')}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t('about.purposeDesc')}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-soft flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-rose-700 text-white flex items-center justify-center shadow-md">
                <Eye className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {t('about.visionTitle')}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t('about.visionDesc')}
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-soft flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-800 text-white flex items-center justify-center shadow-md">
                <Compass className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {t('about.missionTitle')}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t('about.missionDesc')}
              </p>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="bg-gradient-to-br from-slate-900 to-brand-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-800/40">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-950 text-emerald-300 border border-emerald-700/60 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('about.valuesBadge')}</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              {lang === 'bn' ? 'আমাদের মূল্যবোধ ও দর্শন' : 'Our Guiding Philosophy & Pillars'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.isArray(values) && values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                <span className="w-8 h-8 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center mb-3">
                  0{idx + 1}
                </span>
                <h5 className="font-bold text-base text-emerald-300">
                  {val.title}
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
