import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar, Clock, MapPin, Users, Ticket, CheckCircle2 } from 'lucide-react';

export const EventCard = ({ event, onRegister, onViewDetails }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-brand-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between">
      
      {/* Event Image & Badges */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <img
          src={event.image}
          alt={lang === 'bn' ? event.titleBn : event.titleEn}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-slate-900/80 backdrop-blur-md border border-white/20">
            {lang === 'bn' ? event.categoryBn : event.categoryEn}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          {event.status === 'upcoming' ? (
            <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-900 bg-emerald-300 shadow-sm flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse"></span>
              <span>{lang === 'bn' ? 'আসন্ন' : 'Upcoming'}</span>
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-700 bg-slate-200">
              {lang === 'bn' ? 'সম্পন্ন' : 'Past'}
            </span>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors leading-snug">
            {lang === 'bn' ? event.titleBn : event.titleEn}
          </h3>

          {/* Meta Info */}
          <div className="mt-4 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="font-semibold text-slate-800">
                {lang === 'bn' ? event.dateBn : event.dateEn}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{lang === 'bn' ? event.timeBn : event.timeEn}</span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-crimson-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{lang === 'bn' ? event.locationBn : event.locationEn}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-2">
            {lang === 'bn' ? event.descBn : event.descEn}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-500 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span>
              {event.registeredCount}/{event.totalSeats} {lang === 'bn' ? 'নিবন্ধিত' : 'Registered'}
            </span>
          </div>

          {event.registrationOpen ? (
            <button
              type="button"
              onClick={() => onRegister && onRegister(event)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 shadow-sm transition-all"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>{t('events.registerBtn')}</span>
            </button>
          ) : (
            <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg">
              {lang === 'bn' ? 'রেজিস্ট্রেশন সমাপ্ত' : 'Registration Closed'}
            </span>
          )}
        </div>

      </div>

    </div>
  );
};
