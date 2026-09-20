import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { 
  BookOpen, Briefcase, Music, Trophy, HeartHandshake, 
  Users, CheckCircle2, Calendar, Sparkles, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  academic: BookOpen,
  career: Briefcase,
  cultural: Music,
  sports: Trophy,
  social: HeartHandshake,
  networking: Users,
};

const imageMap = {
  academic: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
  career: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
  cultural: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
  sports: "https://images.unsplash.com/photo-1531415074868-036b1c57e3ce?auto=format&fit=crop&w=800&q=80",
  social: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
  networking: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
};

export const ActivitiesPage = () => {
  const { t, lang } = useLanguage();
  const pillars = t('activities.pillars') || [];

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <SectionHeader
          badge={t('activities.badge')}
          title={t('activities.title')}
          subtitle={t('activities.subtitle')}
        />

        {/* Detailed Activities List */}
        <div className="space-y-12">
          {Array.isArray(pillars) && pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.id] || BookOpen;
            const img = imageMap[pillar.id];
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={pillar.id}
                className={`rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`space-y-5 ${isReversed ? 'lg:col-start-7 lg:col-span-6' : 'lg:col-span-6'}`}>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-50 text-brand-800 text-xs font-bold border border-brand-200">
                    <Icon className="w-4 h-4 text-brand-600" />
                    <span>Pillar {idx + 1}: {pillar.subtitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {lang === 'bn' ? 'মূল আকর্ষণসমূহ' : 'Key Highlights & Sessions'}
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pillar.features && pillar.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <Link
                      to="/events"
                      className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 hover:text-brand-900"
                    >
                      <span>{lang === 'bn' ? 'আসন্ন ইভেন্ট তালিকা দেখুন' : 'View upcoming events related to this'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Visual Image */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-md relative h-64 sm:h-80 group">
                    <img
                      src={img}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white text-xs font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg">
                      BSA-DIU Student Welfare Focus
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
