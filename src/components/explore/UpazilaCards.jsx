import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Modal } from '../common/Modal';
import { 
  MapPin, Utensils, Bookmark, Award, 
  ArrowRight, CheckCircle2, ShieldCheck, Compass 
} from 'lucide-react';

export const UpazilaCards = ({ upazilas }) => {
  const { lang, t } = useLanguage();
  const [selectedUpazila, setSelectedUpazila] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upazilas.map((u) => (
          <div
            key={u.id}
            className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Header */}
            <div className="relative h-52 overflow-hidden bg-slate-900">
              <img
                src={u.image}
                alt={lang === 'bn' ? u.nameBn : u.nameEn}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-black/60 backdrop-blur-md border border-white/20">
                  {u.areaKm2} sq km
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h4 className="text-xl font-black">
                  {lang === 'bn' ? u.nameBn : u.nameEn}
                </h4>
                <p className="text-xs text-emerald-300 font-medium">
                  {lang === 'bn' ? u.titleBn : u.titleEn}
                </p>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {lang === 'bn' ? u.shortIntroBn : u.shortIntroEn}
              </p>

              {/* Highlights pills */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <Utensils className="w-3.5 h-3.5 text-crimson-600 dark:text-rose-400 shrink-0" />
                  <span className="truncate">
                    <strong>{lang === 'bn' ? 'খাবার:' : 'Food:'}</strong> {(lang === 'bn' ? u.famousFoodBn : u.famousFoodEn).slice(0, 2).join(', ')}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <Bookmark className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                  <span className="truncate">
                    <strong>{lang === 'bn' ? 'স্থান:' : 'Places:'}</strong> {(lang === 'bn' ? u.famousPlacesBn : u.famousPlacesEn).slice(0, 2).join(', ')}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedUpazila(u)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-brand-700 dark:text-emerald-300 hover:text-white dark:hover:text-white bg-brand-50 dark:bg-emerald-950/60 hover:bg-brand-700 dark:hover:bg-brand-600 transition-colors"
                >
                  <span>{t('explore.exploreAreaBtn')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Upazila Detail Modal */}
      <Modal
        isOpen={!!selectedUpazila}
        onClose={() => setSelectedUpazila(null)}
        title={selectedUpazila ? (lang === 'bn' ? `${selectedUpazila.nameBn} — পূর্ণাঙ্গ পরিচিতি` : `${selectedUpazila.nameEn} — Full Overview`) : ''}
        maxWidth="max-w-3xl"
      >
        {selectedUpazila && (
          <div className="space-y-6 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
            
            {/* Hero Image in Modal */}
            <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-900">
              <img
                src={selectedUpazila.image}
                alt={selectedUpazila.nameEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-2xl font-black">{lang === 'bn' ? selectedUpazila.nameBn : selectedUpazila.nameEn}</h4>
                <p className="text-xs text-emerald-300">{lang === 'bn' ? selectedUpazila.titleBn : selectedUpazila.titleEn}</p>
              </div>
            </div>

            {/* Intro */}
            <p className="text-sm leading-relaxed p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              {lang === 'bn' ? selectedUpazila.shortIntroBn : selectedUpazila.shortIntroEn}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700 space-y-1.5">
                <h5 className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <span>{lang === 'bn' ? 'জনপ্রিয় এলাকা ও বাজার' : 'Popular Towns & Areas'}</span>
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {(lang === 'bn' ? selectedUpazila.popularAreasBn : selectedUpazila.popularAreasEn).join(' • ')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700 space-y-1.5">
                <h5 className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-crimson-600 dark:text-rose-400" />
                  <span>{lang === 'bn' ? 'বিখ্যাত খাবার ও পণ্য' : 'Famous Food & Products'}</span>
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {(lang === 'bn' ? selectedUpazila.famousFoodBn : selectedUpazila.famousFoodEn).join(' • ')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700 space-y-1.5">
                <h5 className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{lang === 'bn' ? 'দর্শনীয় ও পরিচিত স্থান' : 'Places of Interest'}</span>
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {(lang === 'bn' ? selectedUpazila.famousPlacesBn : selectedUpazila.famousPlacesEn).join(' • ')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700 space-y-1.5">
                <h5 className="font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>{lang === 'bn' ? 'সাংস্কৃতিক স্বকীয়তা' : 'Cultural Identity'}</span>
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lang === 'bn' ? selectedUpazila.culturalIdentityBn : selectedUpazila.culturalIdentityEn}
                </p>
              </div>
            </div>

            {/* Source */}
            <div className="text-[11px] text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-3">
              <strong>{t('explore.verifiedSource')}</strong> {lang === 'bn' ? selectedUpazila.source : selectedUpazila.sourceEn}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setSelectedUpazila(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
              >
                {t('notices.close')}
              </button>
            </div>

          </div>
        )}
      </Modal>
    </div>
  );
};
