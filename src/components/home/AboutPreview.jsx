import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../common/SectionHeader';
import {
  Compass, Eye, Target, BookOpen,
  ArrowRight, CheckCircle2, Sparkles, Users
} from 'lucide-react';
import {
  fadeUp, staggerContainer, staggerItem, scaleIn,
  VIEWPORT, EASE_OUT_EXPO,
} from '../../lib/motion';

export const AboutPreview = () => {
  const { t, lang, isBb, isBn, isEn } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const cards = [
    {
      icon: BookOpen,
      title: t('about.storyTitle'),
      desc: t('about.storyDesc'),
      color: "from-emerald-500 to-teal-700"
    },
    {
      icon: Target,
      title: t('about.purposeTitle'),
      desc: t('about.purposeDesc'),
      color: "from-blue-500 to-indigo-700"
    },
    {
      icon: Eye,
      title: t('about.visionTitle'),
      desc: t('about.visionDesc'),
      color: "from-purple-500 to-indigo-700"
    },
    {
      icon: Compass,
      title: t('about.missionTitle'),
      desc: t('about.missionDesc'),
      color: "from-rose-500 to-crimson-700"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={prefersReducedMotion ? {} : fadeUp}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <SectionHeader
            badge={t('about.badge')}
            title={t('about.title')}
            subtitle={t('about.subtitle')}
          />
        </motion.div>

        {/* 4 Pillars Grid (Story, Purpose, Vision, Mission) */}
        <motion.div
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={prefersReducedMotion ? {} : staggerItem}
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="group relative rounded-2xl p-6 bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-brand-500/50 dark:hover:border-emerald-500/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-md mb-5`}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.12, rotate: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-brand-700 dark:group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center text-xs font-semibold text-brand-700 dark:text-emerald-400 group-hover:text-brand-800 dark:group-hover:text-emerald-300">
                  <span>{isBb ? 'আরও দেহেন' : isBn ? 'বিস্তারিত দেখুন' : 'Read details'}</span>
                  <motion.span
                    className="ml-1"
                    whileHover={prefersReducedMotion ? {} : { x: 3 }}
                    transition={{ duration: 0.15 }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner linking to full About Page */}
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUp}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 rounded-2xl bg-gradient-to-r from-brand-900 to-emerald-950 p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>{isBb ? 'আমাগো পরিবারে হগলতেরে খোশ আমদেদ' : isBn ? 'আমাদের পরিবারে সবাইকে স্বাগতম' : 'Everyone is Welcomed in Our Student Family'}</span>
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              {isBb
                ? 'বাউনবাইরা থেইকা ডিআইইউ-তে আসা প্রত্যেক নতুন ছাওয়াল-মাইয়ার পাশে ছায়ার মতো খাড়ায় বিএসএ-ডিআইইউ।'
                : isBn
                  ? 'ব্রাহ্মণবাড়িয়া থেকে ডিআইইউ-তে আসা প্রতিটি নতুন শিক্ষার্থীর পাশে ছায়ার মতো থাকে বিএসএ-ডিআইইউ।'
                  : 'BSA-DIU stands by every Brahmanbaria student at DIU, offering warm academic and social guidance from day one.'}
            </p>
          </div>

          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
          >
            <Link
              to="/about"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-900 font-bold hover:bg-emerald-50 shadow-md transition-colors text-sm"
            >
              <span>{isBb ? 'আমাগো আদ্যোপান্ত জানুন' : isBn ? 'আমাদের সম্পূর্ণ পরিচিতি' : 'Full About Page'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
