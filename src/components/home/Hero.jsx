import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {
  Users, MapPin, Sparkles, ArrowRight, UserPlus,
  GraduationCap, BookOpen, ShieldCheck, HeartHandshake
} from 'lucide-react';
import {
  heroBadge, heroHeading, heroSubtitle, heroButtons,
  heroImage, heroStats, staggerContainer, staggerItem,
  EASE_OUT_EXPO,
} from '../../lib/motion';

// ─── Animated stat counter ────────────────────────────────────────────────────
const StatCounter = ({ value, suffix = '', className }) => {
  return (
    <span className={className}>{value}{suffix}</span>
  );
};

export const Hero = () => {
  const { t, lang, isBb, isBn, isEn } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const mv = (variants) => prefersReducedMotion ? {} : variants;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-slate-900 to-brand-950 text-white pt-8 sm:pt-12 pb-14 sm:pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative ambient background glows */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.08, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-96 h-96 bg-crimson-600/15 rounded-full blur-3xl pointer-events-none translate-y-1/3"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">

            {/* Community Badge */}
            <motion.div
              {...mv(heroBadge)}
              initial={prefersReducedMotion ? false : 'hidden'}
              animate="visible"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{t('hero.badge')}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              {...mv(heroHeading)}
              initial={prefersReducedMotion ? false : 'hidden'}
              animate="visible"
              className="text-2xl xs:text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-white"
            >
              {isBb ? (
                <>
                  <span className="text-white">বাউনবাইরার ছাওয়াল-মাইয়াগো </span>
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                    এক লগে পথ চলা
                  </span>
                  <span className="text-white"> আর </span>
                  <span className="bg-gradient-to-r from-rose-400 to-crimson-400 bg-clip-text text-transparent">
                    ঐক্য
                  </span>
                </>
              ) : isBn ? (
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
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              {...mv(heroSubtitle)}
              initial={prefersReducedMotion ? false : 'hidden'}
              animate="visible"
              className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              {...mv(heroButtons)}
              initial={prefersReducedMotion ? false : 'hidden'}
              animate="visible"
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -1 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
              >
                <Link
                  to="/join"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-crimson-600 via-rose-600 to-crimson-700 hover:from-crimson-500 hover:to-rose-500 shadow-lg shadow-crimson-900/40 hover:shadow-xl transition-all duration-200 text-sm sm:text-base min-h-[48px]"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>{t('hero.btnJoin')}</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -1 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
              >
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 hover:border-emerald-500 transition-all duration-200 text-sm sm:text-base backdrop-blur-sm min-h-[48px]"
                >
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  <span>{t('hero.btnAbout')}</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Micro Highlights Pill */}
            <motion.div
              {...mv(heroButtons)}
              initial={prefersReducedMotion ? false : 'hidden'}
              animate="visible"
              className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-emerald-300/80"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{isBb ? 'অরাজনৈতিক ও ছাত্রকল্যাণমুখী' : isBn ? 'অরাজনৈতিক ও ছাত্রকল্যাণমুখী' : 'Non-political Student Network'}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>{isBb ? '৯ উপজেলার ভাই-বেরাদরি' : isBn ? '৯ উপজেলার ভ্রাতৃত্ব' : '9 Upazilas Brotherhood'}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>{isBb ? 'ডিআইইউ ক্যাম্পাস পরিবার' : isBn ? 'ডিআইইউ ক্যাম্পাস কমিউনিটি' : 'DIU Campus Hub'}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Visual Cards */}
          <motion.div
            {...mv(heroImage)}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="visible"
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-slate-800/80 backdrop-blur-xl group">
                <motion.img
                  src="https://daffodilvarsity.edu.bd/images/banner.png"
                  onError={(e) => { e.currentTarget.src = '/images/banner.png'; }}
                  alt="Daffodil International University Smart City Campus"
                  className="w-full h-72 xs:h-80 sm:h-96 object-cover object-center opacity-95"
                  loading="eager"
                  width="1200"
                  height="600"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                  transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 space-y-1.5 sm:space-y-2">
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-lg bg-brand-600/90 text-white text-[11px] sm:text-xs font-bold backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Daffodil Smart City, Ashulia</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    {isBb ? 'ক্যাম্পাসে আমরা এক পরিবার' : isBn ? 'ক্যাম্পাসে আমাদের এক পরিবার' : 'Our Unified Family on Campus'}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300">
                    {isBb ? 'পড়ালেহা, বন্ধুত্ব আর বিপদে-আপদে পাশে থাহনের মেলবন্ধন।' : isBn ? 'জ্ঞানার্জন, বন্ধুত্ব ও মানবিক কাজের মেলবন্ধন।' : 'Where learning, friendship, and shared aspirations converge.'}
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: 9 Upazilas */}
              <motion.div
                className="absolute -top-4 sm:-top-6 -left-2 sm:-left-6 p-3 sm:p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/40 shadow-xl hidden xs:flex items-center gap-2.5 sm:gap-3"
                animate={prefersReducedMotion ? {} : {
                  y: [0, -5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-600 to-emerald-800 flex items-center justify-center text-white shadow-md">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-base sm:text-xl font-black text-white block">9 Upazilas</span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-300 font-medium">
                    {isBb ? 'বাউনবাইরার প্রতিটি কোণ' : isBn ? 'ব্রাহ্মণবাড়িয়ার প্রতিটি কোণ' : 'United Representation'}
                  </span>
                </div>
              </motion.div>

              {/* Floating Stat Card 2: 500+ Students */}
              <motion.div
                className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 p-3 sm:p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-crimson-500/40 shadow-xl hidden xs:flex items-center gap-2.5 sm:gap-3"
                animate={prefersReducedMotion ? {} : {
                  y: [0, -5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-crimson-600 to-rose-700 flex items-center justify-center text-white shadow-md">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-base sm:text-xl font-black text-white block">500+</span>
                  <span className="text-[10px] sm:text-[11px] text-crimson-200 font-medium">
                    {isBb ? 'ডিআইইউ শিক্ষার্থী' : isBn ? 'ডিআইইউ শিক্ষার্থী' : 'Connected Students'}
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Real-time Quick Counters Banner */}
        <motion.div
          {...mv(heroStats)}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="visible"
          className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-emerald-900/60 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center"
        >
          {[
            { value: '500+', label: t('hero.statStudents'), color: 'text-emerald-400' },
            { value: '9', label: t('hero.statUpazilas'), color: 'text-white' },
            { value: '15+', label: t('hero.statDepartments'), color: 'text-teal-300' },
            { value: '50+', label: t('hero.statEvents'), color: 'text-crimson-400' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={prefersReducedMotion ? {} : { y: -3, borderColor: 'rgba(16,185,129,0.5)' }}
              transition={{ duration: 0.2 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-700/50 transition-colors"
            >
              <span className={`text-2xl sm:text-4xl font-black ${stat.color} block tracking-tight`}>
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
