import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Users, MapPin, Sparkles, ArrowRight, UserPlus, 
  GraduationCap, BookOpen, ShieldCheck, HeartHandshake 
} from 'lucide-react';

export const Hero = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-slate-900 to-brand-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-crimson-600/15 rounded-full blur-3xl pointer-events-none translate-y-1/3"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Community Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner backdrop-blur-md animate-fadeIn">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-white">
              {lang === 'bn' ? (
                <>
                  <span className="text-white">ব্রাহ্মণবাড়িয়ার শিক্ষার্থীদের </span>
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                    ঐক্য, বন্ধন
                  </span>
                  <span className="text-white"> ও </span>
                  <span className="bg-gradient-to-r from-rose-400 to-crimson-400 bg-clip-text text-transparent">
                    অগ্রযাত্রা
                  </span>
                </>
              ) : (
                <>
                  <span>Connecting Brahmanbaria Students at </span>
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                    Daffodil International
                  </span>{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-crimson-400 bg-clip-text text-transparent">
                    University
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t('hero.subtitle')}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/join"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-crimson-600 via-rose-600 to-crimson-700 hover:from-crimson-500 hover:to-rose-500 shadow-lg shadow-crimson-900/40 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <UserPlus className="w-5 h-5" />
                <span>{t('hero.btnJoin')}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 hover:border-emerald-500 transition-all duration-200 text-base backdrop-blur-sm"
              >
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <span>{t('hero.btnAbout')}</span>
              </Link>
            </div>

            {/* Micro Highlights Pill */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-emerald-300/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'bn' ? 'অরাজনৈতিক ও ছাত্রকল্যাণমুখী' : 'Non-political Student Network'}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'bn' ? '৯ উপজেলার ভ্রাতৃত্ব' : '9 Upazilas Brotherhood'}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'bn' ? 'ডিআইইউ ক্যাম্পাস কমিউনিটি' : 'DIU Campus Hub'}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-slate-800/80 backdrop-blur-xl group">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                  alt="DIU University Students Collaborating"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-6 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-600/90 text-white text-xs font-bold backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Daffodil Smart City, Ashulia</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    {lang === 'bn' ? 'ক্যাম্পাসে আমাদের এক পরিবার' : 'Our Unified Family on Campus'}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {lang === 'bn' ? 'জ্ঞানার্জন, বন্ধুত্ব ও মানবিক কাজের মেলবন্ধন।' : 'Where learning, friendship, and shared aspirations converge.'}
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: 9 Upazilas */}
              <div className="absolute -top-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/40 shadow-xl hidden xs:flex items-center gap-3 animate-float">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-emerald-800 flex items-center justify-center text-white shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-black text-white block">9 Upazilas</span>
                  <span className="text-[11px] text-emerald-300 font-medium">
                    {lang === 'bn' ? 'ব্রাহ্মণবাড়িয়ার প্রতিটি কোণ' : 'United Representation'}
                  </span>
                </div>
              </div>

              {/* Floating Stat Card 2: 500+ Students */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-crimson-500/40 shadow-xl hidden xs:flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-crimson-600 to-rose-700 flex items-center justify-center text-white shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-black text-white block">500+</span>
                  <span className="text-[11px] text-crimson-200 font-medium">
                    {lang === 'bn' ? 'ডিআইইউ শিক্ষার্থী' : 'Connected Students'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Real-time Quick Counters Banner */}
        <div className="mt-16 pt-10 border-t border-emerald-900/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-700/50 transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-emerald-400 block tracking-tight">
              500+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1 block">
              {t('hero.statStudents')}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-700/50 transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-white block tracking-tight">
              9
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1 block">
              {t('hero.statUpazilas')}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-700/50 transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-teal-300 block tracking-tight">
              15+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1 block">
              {t('hero.statDepartments')}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-700/50 transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-crimson-400 block tracking-tight">
              50+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1 block">
              {t('hero.statEvents')}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
