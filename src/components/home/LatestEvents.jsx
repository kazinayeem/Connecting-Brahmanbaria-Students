import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../common/SectionHeader';
import { eventsData } from '../../data/eventsData';
import { EventCard } from '../events/EventCard';
import { EventModal } from '../events/EventModal';
import { ArrowRight, Calendar } from 'lucide-react';
import {
  fadeUp, staggerContainer, staggerItem,
  VIEWPORT, EASE_OUT_EXPO,
} from '../../lib/motion';

export const LatestEvents = () => {
  const { t, lang, isBb, isBn, isEn } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const upcomingEvents = eventsData.filter(e => e.status === 'upcoming').slice(0, 3);

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={prefersReducedMotion ? {} : fadeUp}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <SectionHeader
            badge={t('events.badge')}
            title={t('events.title')}
            subtitle={t('events.subtitle')}
          />
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {upcomingEvents.map((evt) => (
            <motion.div
              key={evt.id}
              variants={prefersReducedMotion ? {} : staggerItem}
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
            >
              <EventCard
                event={evt}
                onRegister={handleRegister}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Events Button */}
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUp}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
            className="inline-block"
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold hover:bg-slate-50 hover:border-brand-500 shadow-sm transition-all text-sm group"
            >
              <Calendar className="w-4 h-4 text-brand-600" />
              <span>{isBb ? 'হগলতি ইভেন্ট আর আগের স্মৃতি দেহেন' : isBn ? 'সকল ইভেন্ট ও পুরনো স্মৃতি দেখুন' : 'Browse All Events & Memories'}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

      </div>

      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        event={selectedEvent}
      />
    </section>
  );
};
