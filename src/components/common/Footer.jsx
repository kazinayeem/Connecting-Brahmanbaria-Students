import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { 
  MapPin, Mail, Phone, Heart, Globe, 
  ExternalLink, Sparkles, ShieldCheck, Compass 
} from 'lucide-react';

export const Footer = () => {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-brand-950 text-slate-300 border-t border-emerald-900/60 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (Span 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="BSA-DIU" className="w-12 h-12 rounded-full ring-2 ring-emerald-500/50" />
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  BSA • DIU
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  {lang === 'bn' ? 'ব্রাহ্মণবাড়িয়া স্টুডেন্টস অ্যাসোসিয়েশন' : 'Brahmanbaria Students Association'}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              {t('footer.desc')}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Facebook Page"
              >
                <span className="text-sm font-bold">fb</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">ig</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <span className="text-xs text-slate-500 pl-2">#bsadiu #brahmanbaria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800/60 pb-2 inline-block">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-amber-400 hover:text-amber-300 font-bold transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-400" /> {t('nav.explore')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/committee" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('nav.committee')}
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('nav.members')}
                </Link>
              </li>
              <li>
                <Link to="/upazilas" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('nav.upazilas')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities & Community */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800/60 pb-2 inline-block">
              {t('footer.activitiesCol')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/activities" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {lang === 'bn' ? 'একাডেমিক সহযোগিতা' : 'Academic Support'}
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {lang === 'bn' ? 'ক্যারিয়ার কর্মশালা' : 'Career Workshops'}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link to="/notices" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('nav.notices')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-crimson-400 hover:text-crimson-300 font-semibold transition-colors flex items-center gap-1.5">
                  <span className="text-crimson-500">★</span> {t('nav.join')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Campus Connect & Contacts */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800/60 pb-2 inline-block">
              {t('footer.contactCol')}
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  {lang === 'bn' 
                    ? 'ড্যাফোডিল স্মার্ট সিটি, বিরুলিয়া, আশুলিয়া, সাভার, ঢাকা'
                    : 'Daffodil Smart City, Birulia, Ashulia, Savar, Dhaka'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>bsa.diu.community@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+880 1700-000000 (Helpline)</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-800/70 px-3 py-1.5 rounded-lg text-xs text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'bn' ? 'অরাজনৈতিক ও অলাভজনক' : 'Non-Political & Non-Profit'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Box */}
        <div className="my-6 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 text-center">
          <p className="text-xs text-slate-400 leading-relaxed max-w-4xl mx-auto">
            {t('footer.disclaimer')}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 {lang === 'bn' ? 'ব্রাহ্মণবাড়িয়া স্টুডেন্টস অ্যাসোসিয়েশন, ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি' : 'Brahmanbaria Students Association, Daffodil International University'}. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>{lang === 'bn' ? 'ব্রাহ্মণবাড়িয়ার শিক্ষার্থীদের ভালোবাসায় নির্মিত' : 'Crafted with unity for Brahmanbaria students at DIU'}</span>
            <Heart className="w-3.5 h-3.5 text-crimson-500 inline fill-crimson-500 ml-1" />
          </div>
        </div>

        {/* Sponsorship Credit */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 text-center text-xs text-slate-400">
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 leading-relaxed">
            <span>Sponsored by</span>
            <a
              href="https://bornosoftnr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
            >
              Bornosoft
            </a>
            <span className="text-slate-600">•</span>
            <span>Built to support the Brahmanbaria student community.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
