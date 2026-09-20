import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { 
  MapPin, Mail, Phone, Send, CheckCircle2, 
  HelpCircle, ChevronDown, ChevronUp, Globe, Sparkles 
} from 'lucide-react';

export const ContactPage = () => {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = t('contact.faqs') || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <SectionHeader
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        {/* Contact Info & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Info Card */}
            <div className="rounded-3xl p-4 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-soft space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {lang === 'bn' ? 'ক্যাম্পাস ও যোগাযোগের মাধ্যম' : 'Campus Connect Details'}
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-emerald-950/60 text-brand-700 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-brand-200 dark:border-emerald-800/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">{t('contact.campusLocation')}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                      {t('contact.campusDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-emerald-950/60 text-brand-700 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-brand-200 dark:border-emerald-800/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">{t('contact.email')}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      bsa.diu.community@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-emerald-950/60 text-brand-700 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-brand-200 dark:border-emerald-800/60">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">{t('contact.phone')}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      +880 1700-000000 (Student Helpline)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  {t('contact.socialTitle')}
                </h5>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 border border-blue-200 dark:border-blue-800/60 text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <span>Facebook Group</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/40 border border-rose-200 dark:border-rose-800/60 text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Note box */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-300 space-y-1">
              <p className="font-bold">
                {lang === 'bn' ? 'জরুরি প্রয়োজনে রক্তদান সহায়তা:' : 'Emergency Assistance:'}
              </p>
              <p className="text-amber-800 dark:text-amber-200">
                {lang === 'bn'
                  ? 'জরুরি রক্তের প্রয়োজনে ফেসবুক গ্রুপে পোস্ট দিন অথবা আমাদের কমিটির যেকোনো সদস্যকে সরাসরি কল করুন।'
                  : 'For emergency blood donor calls, please reach out to our executive committee hotline or our social channels.'}
              </p>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-slate-800 shadow-soft">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
              {t('contact.formTitle')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              {lang === 'bn' ? 'আপনার বার্তা সরাসরি আমাদের সমন্বয়কদের কাছে পৌঁছে যাবে।' : 'Leave your inquiry or suggestion and we will get back to you promptly.'}
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-brand-600 dark:text-brand-400 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950 dark:text-emerald-300">
                  {t('contact.sentSuccess')}
                </h4>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Arif Ahmed"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {t('contact.emailLabel')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arif@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('contact.subject')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Academic Query / Membership inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your thoughts..."
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-700 dark:bg-brand-600 hover:bg-brand-800 dark:hover:bg-brand-500 shadow-md transition-colors min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('contact.sendBtn')}</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-8 lg:p-12 border border-slate-200/90 dark:border-slate-800 shadow-soft">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h4 className="text-2xl font-black text-slate-900 dark:text-white">
              {t('contact.faqTitle')}
            </h4>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {Array.isArray(faqs) && faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-sm sm:text-base"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3 bg-slate-50/50 dark:bg-slate-800/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
