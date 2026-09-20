import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { homeFaqData } from '../../data/homeFaqData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const HomeFaqSection = () => {
  const { lang } = useLanguage();
  // Open the first item by default; toggle on click
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section 
      className="py-16 sm:py-20 bg-slate-50/60 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800 transition-colors relative"
      aria-labelledby="home-faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-100 dark:bg-emerald-950/70 text-brand-800 dark:text-emerald-300 border border-brand-200 dark:border-emerald-800/80 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400" />
            <span>{lang === 'bn' ? 'প্রশ্ন ও উত্তর' : 'FAQ'}</span>
          </div>

          <h2 
            id="home-faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            {lang === 'bn' ? 'সাধারণ কিছু প্রশ্ন' : 'Frequently Asked Questions'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'bn' 
              ? 'আমাদের সংগঠন ও কার্যক্রম সম্পর্কে কিছু সাধারণ প্রশ্নের উত্তর।' 
              : 'Answers to some common questions about our association and activities.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {homeFaqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionText = lang === 'bn' ? faq.qBn : faq.qEn;
            const answerText = lang === 'bn' ? faq.aBn : faq.aEn;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-slate-900 border-brand-500/60 dark:border-emerald-500/50 shadow-soft ring-1 ring-brand-500/20 dark:ring-emerald-500/20'
                    : 'bg-white dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-answer-${faq.id}`}
                    id={`home-faq-question-${faq.id}`}
                    className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white transition-colors min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    <span className="text-sm sm:text-base leading-snug font-bold pr-2">
                      {questionText}
                    </span>

                    {/* Plus / Minus Icon Container */}
                    <div 
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? 'bg-brand-700 dark:bg-brand-600 text-white rotate-0 shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 transition-transform duration-200" />
                      ) : (
                        <Plus className="w-4 h-4 transition-transform duration-200" />
                      )}
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`home-faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`home-faq-question-${faq.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-fadeIn"
                  >
                    <p className="pt-2">{answerText}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
