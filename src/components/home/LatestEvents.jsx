import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../common/SectionHeader';
import { eventsData } from '../../data/eventsData';
import { EventCard } from '../events/EventCard';
import { EventModal } from '../events/EventModal';
import { ArrowRight, Calendar } from 'lucide-react';

export const LatestEvents = () => {
  const { t, lang } = useLanguage();
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
        
        <SectionHeader
          badge={t('events.badge')}
          title={t('events.title')}
          subtitle={t('events.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((evt) => (
            <EventCard
              key={evt.id}
              event={evt}
              onRegister={handleRegister}
            />
          ))}
        </div>

        {/* View All Events Button */}
        <div className="mt-12 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold hover:bg-slate-50 hover:border-brand-500 shadow-sm transition-all text-sm group"
          >
            <Calendar className="w-4 h-4 text-brand-600" />
            <span>{lang === 'bn' ? 'সকল ইভেন্ট ও পুরনো স্মৃতি দেখুন' : 'Browse All Events & Memories'}</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        event={selectedEvent}
      />
    </section>
  );
};
