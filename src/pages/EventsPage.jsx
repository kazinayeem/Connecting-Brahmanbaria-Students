import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { eventsData } from '../data/eventsData';
import { EventCard } from '../components/events/EventCard';
import { EventModal } from '../components/events/EventModal';
import { Calendar, CheckCircle2, Sparkles, Info } from 'lucide-react';

export const EventsPage = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const displayedEvents = eventsData.filter(e => e.status === activeTab);

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <SectionHeader
          badge={t('events.badge')}
          title={t('events.title')}
          subtitle={t('events.subtitle')}
        />

        {/* Sample notice banner */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3 max-w-2xl mx-auto text-xs text-slate-600 shadow-xs">
          <Info className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
          <p>
            {lang === 'bn' 
              ? 'প্রদর্শিত ইভেন্টগুলো নমুনা হিসেবে প্রস্তুত করা হয়েছে। বিএসএ-ডিআইইউ-এর আনুষ্ঠানিক যেকোনো আয়োজনের তারিখ নোটিশ বোর্ডে প্রকাশ করা হবে।'
              : 'The events listed below are simulated sample schedules for demonstration. Official schedules will be posted under the Notice Board.'}
          </p>
        </div>

        {/* Upcoming vs Past Tabs */}
        <div className="flex items-center justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-slate-200/80 border border-slate-300">
            <button
              type="button"
              onClick={() => setActiveTab('upcoming')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t('events.upcomingTab')} ({eventsData.filter(e => e.status === 'upcoming').length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('past')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'past'
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t('events.pastTab')} ({eventsData.filter(e => e.status === 'past').length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((evt) => (
            <EventCard
              key={evt.id}
              event={evt}
              onRegister={handleRegister}
            />
          ))}
        </div>

      </div>

      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        event={selectedEvent}
      />
    </div>
  );
};
