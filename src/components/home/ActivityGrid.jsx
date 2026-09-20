import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../common/SectionHeader';
import {
  BookOpen, Briefcase, Music, Trophy, HeartHandshake,
  Users, CheckCircle, ArrowRight
} from 'lucide-react';
import {
  fadeUp, staggerContainer, staggerItem,
  VIEWPORT, EASE_OUT_EXPO,
} from '../../lib/motion';

const iconMap = {
  academic: BookOpen,
  career: Briefcase,
  cultural: Music,
  sports: Trophy,
  social: HeartHandshake,
  networking: Users,
};

const colorMap = {
  academic: "from-emerald-500 to-teal-700 text-emerald-700 bg-emerald-50 border-emerald-200",
  career: "from-blue-500 to-indigo-700 text-blue-700 bg-blue-50 border-blue-200",
  cultural: "from-purple-500 to-rose-700 text-purple-700 bg-purple-50 border-purple-200",
  sports: "from-amber-500 to-orange-700 text-amber-700 bg-amber-50 border-amber-200",
  social: "from-crimson-500 to-rose-700 text-crimson-700 bg-rose-50 border-rose-200",
  networking: "from-cyan-500 to-blue-700 text-cyan-700 bg-cyan-50 border-cyan-200",
};

export const ActivityGrid = () => {
  const { t, lang, isBb, isBn, isEn } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const pillars = t('activities.pillars') || [];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={prefersReducedMotion ? {} : fadeUp}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <SectionHeader
            badge={t('activities.badge')}
            title={t('activities.title')}
            subtitle={t('activities.subtitle')}
          />
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Array.isArray(pillars) && pillars.map((pillar) => {
            const Icon = iconMap[pillar.id] || BookOpen;
            const style = colorMap[pillar.id] || "from-emerald-500 to-teal-700 text-emerald-700 bg-emerald-50 border-emerald-200";

            return (
              <motion.div
                key={pillar.id}
                variants={prefersReducedMotion ? {} : staggerItem}
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="group rounded-3xl p-7 bg-slate-50/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-emerald-500/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${style.split(' ')[0]} ${style.split(' ')[1]} text-white flex items-center justify-center shadow-md`}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.12, rotate: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                      BSA Pillar
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-emerald-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 border-t border-slate-200/60 dark:border-slate-800 pt-4 mb-6">
                    {pillar.features && pillar.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link */}
                <Link
                  to="/activities"
                  className="inline-flex items-center justify-between w-full pt-3 text-xs font-bold text-brand-700 dark:text-emerald-400 group-hover:text-brand-800 dark:group-hover:text-emerald-300 border-t border-slate-200/60 dark:border-slate-800"
                >
                  <span>{isBb ? 'কামকাজের বিস্তারিত' : isBn ? 'কার্যক্রমের বিস্তারিত' : 'Learn more about this pillar'}</span>
                  <motion.span
                    className="inline-flex"
                    whileHover={prefersReducedMotion ? {} : { x: 3 }}
                    transition={{ duration: 0.15 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
