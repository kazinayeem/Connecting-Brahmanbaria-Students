import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Hero } from '../components/home/Hero';
import { NoticeTicker } from '../components/home/NoticeTicker';
import { AboutPreview } from '../components/home/AboutPreview';
import { ActivityGrid } from '../components/home/ActivityGrid';
import { UpazilaHighlight } from '../components/home/UpazilaHighlight';
import { FunCultureSection } from '../components/home/FunCultureSection';
import { LatestEvents } from '../components/home/LatestEvents';
import { HomeFaqSection } from '../components/home/HomeFaqSection';
import { SectionHeader } from '../components/common/SectionHeader';
import { NoticeCard } from '../components/notices/NoticeCard';
import { Modal } from '../components/common/Modal';
import { noticesData } from '../data/noticesData';
import { galleryData } from '../data/galleryData';
import {
  ArrowRight, UserPlus, Bell, Image as ImageIcon,
  Sparkles, CheckCircle2, ShieldCheck, Heart, Compass
} from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT, VIEWPORT_LOOSE, EASE_OUT_EXPO } from '../lib/motion';

export const HomePage = () => {
  const { lang, t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [selectedNotice, setSelectedNotice] = useState(null);

  const recentNotices = noticesData.slice(0, 3);
  const galleryTeaser = galleryData.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* Urgent Notice Ticker */}
      <NoticeTicker />

      {/* Hero Section */}
      <Hero />

      {/* About Highlights */}
      <AboutPreview />

      {/* Core Activities Grid */}
      <ActivityGrid />

      {/* Brahmanbaria Connection - 9 Upazilas */}
      <UpazilaHighlight />

      {/* Explore Brahmanbaria Teaser Banner */}
      <section className="py-12 bg-gradient-to-r from-brand-950 via-slate-900 to-brand-950 text-white relative overflow-hidden border-y border-emerald-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-emerald-950/40 p-8 sm:p-10 rounded-3xl border border-emerald-700/50 backdrop-blur-md"
          >
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span>{t('explore.badge')}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {t('explore.title')}
              </h3>
              <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
                {t('explore.subtitle')}
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-300">
                <span className="bg-white/10 px-3 py-1 rounded-full">🏛️ {lang === 'bn' ? 'ঐতিহাসিক স্থান' : 'Historic Places'}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">🍬 {lang === 'bn' ? 'জিআই সনদপ্রাপ্ত ছানামুখী' : 'GI-Certified Chhanamukhi'}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">🎵 {lang === 'bn' ? 'ওস্তাদ আলাউদ্দিন খাঁ' : 'Ustad Alauddin Khan'}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">🌊 {lang === 'bn' ? 'তিতাস ও মেঘনা নদী' : 'Titas & Meghna'}</span>
              </div>
            </div>

            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
            >
              <Link
                to="/explore"
                className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all"
              >
                <Compass className="w-5 h-5 text-slate-950" />
                <span>{lang === 'bn' ? 'ব্রাহ্মণবাড়িয়া ঘুরে দেখুন' : 'Explore Compendium'}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fun & Local Culture Section */}
      <FunCultureSection />

      {/* Upcoming Events Section */}
      <LatestEvents />

      {/* Notice Board Preview Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 bg-crimson-100 dark:bg-rose-950/70 text-crimson-800 dark:text-rose-300 border border-crimson-300 dark:border-rose-800/60">
                <Bell className="w-3.5 h-3.5" />
                <span>{t('notices.badge')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {t('notices.title')}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                {t('notices.subtitle')}
              </p>
            </div>

            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                to="/notices"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 dark:text-emerald-400 hover:text-brand-900 dark:hover:text-emerald-300 bg-brand-50 dark:bg-emerald-950/60 hover:bg-brand-100 dark:hover:bg-emerald-900/80 px-4 py-2.5 rounded-xl border border-brand-200 dark:border-emerald-800/80 transition-colors shrink-0"
              >
                <span>{lang === 'bn' ? 'সকল নোটিশ দেখুন' : 'All Announcements'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {recentNotices.map((notice) => (
              <motion.div
                key={notice.id}
                variants={prefersReducedMotion ? {} : staggerItem}
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
              >
                <NoticeCard
                  notice={notice}
                  onSelect={(n) => setSelectedNotice(n)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Teaser */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 bg-emerald-950 text-emerald-300 border border-emerald-700/60">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{t('gallery.badge')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {t('gallery.title')}
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                {t('gallery.subtitle')}
              </p>
            </div>

            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                to="/gallery"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white bg-emerald-900/60 hover:bg-emerald-800/80 px-4 py-2.5 rounded-xl border border-emerald-700 transition-colors shrink-0"
              >
                <span>{lang === 'bn' ? 'পূর্ণাঙ্গ গ্যালারি দেখুন' : 'View Full Gallery'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {galleryTeaser.map((item) => (
              <motion.div
                key={item.id}
                variants={prefersReducedMotion ? {} : staggerItem}
                className="group relative rounded-2xl overflow-hidden bg-slate-800 h-64 border border-slate-700/60"
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
              >
                <motion.img
                  src={item.image}
                  alt={lang === 'bn' ? item.titleBn : item.titleEn}
                  className="w-full h-full object-cover"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.06 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">
                    {item.date}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                    {lang === 'bn' ? item.titleBn : item.titleEn}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Home FAQ Section */}
      <HomeFaqSection />

      {/* Join Community CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-800 via-emerald-900 to-brand-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-600/90 text-white text-xs font-bold shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ডিআইইউ শিক্ষার্থীদের জন্য উন্মুক্ত' : 'Open for all Brahmanbaria students at DIU'}</span>
          </motion.div>

          <motion.h2
            variants={prefersReducedMotion ? {} : fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
          >
            {lang === 'bn'
              ? 'আপনি কি ব্রাহ্মণবাড়িয়ার সন্তান ও ডিআইইউ শিক্ষার্থী?'
              : 'Are You from Brahmanbaria & Studying at DIU?'}
          </motion.h2>

          <motion.p
            variants={prefersReducedMotion ? {} : fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto font-normal"
          >
            {lang === 'bn'
              ? 'আমাদের শিক্ষার্থী পরিবারে আজই নিবন্ধন করে যুক্ত হোন স্টাডি গ্রুপ, ক্যারিয়ার ওয়ার্কশপ ও বাৎসরিক মিলনমেলায়।'
              : 'Join our student brotherhood today to access peer study circles, career workshops, blood donation network, and joyous reunions.'}
          </motion.p>

          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              variants={prefersReducedMotion ? {} : staggerItem}
              whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
            >
              <Link
                to="/join"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-crimson-600 to-rose-700 hover:from-crimson-500 hover:to-rose-600 shadow-xl shadow-crimson-950/40 transition-colors"
              >
                <UserPlus className="w-5 h-5" />
                <span>{t('nav.join')}</span>
              </Link>
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? {} : staggerItem}
              whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors"
              >
                <span>{t('nav.contact')}</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Notice Detail Modal */}
      <Modal
        isOpen={!!selectedNotice}
        onClose={() => setSelectedNotice(null)}
        title={selectedNotice ? (lang === 'bn' ? selectedNotice.titleBn : selectedNotice.titleEn) : ''}
      >
        {selectedNotice && (
          <div className="space-y-4 text-slate-700 dark:text-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold text-brand-700 dark:text-emerald-400">
                {lang === 'bn' ? selectedNotice.categoryBn : selectedNotice.categoryEn}
              </span>
              <span>
                {t('notices.publishedOn')} {lang === 'bn' ? selectedNotice.dateBn : selectedNotice.dateEn}
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
              {lang === 'bn' ? selectedNotice.descBn : selectedNotice.descEn}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-sm leading-relaxed text-slate-700 dark:text-slate-200 whitespace-pre-line">
              {lang === 'bn' ? selectedNotice.contentBn : selectedNotice.contentEn}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors"
              >
                {t('notices.close')}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
