import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { foodsData } from '../../data/brahmanbaria/foods';
import { productsData } from '../../data/brahmanbaria/products';
import { Utensils, Package, Award, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export const FoodProductsShowcase = () => {
  const { lang, t } = useLanguage();
  const [activeType, setActiveType] = useState('foods'); // 'foods' | 'products'

  return (
    <div className="space-y-8">
      
      {/* Type Toggle Pills */}
      <div className="flex items-center justify-center">
        <div className="inline-flex p-1 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setActiveType('foods')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeType === 'foods'
                ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-sm'
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>{lang === 'bn' ? 'বিখ্যাত খাবার ও মিষ্টি' : 'Famous Foods & Sweets'}</span>
          </button>
          
          <button
            type="button"
            onClick={() => setActiveType('products')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeType === 'products'
                ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-sm'
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>{lang === 'bn' ? 'বিখ্যাত পণ্য ও ঐতিহ্য' : 'Famous Products & Crafts'}</span>
          </button>
        </div>
      </div>

      {activeType === 'foods' ? (
        /* Foods Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodsData.map((food) => (
            <div
              key={food.id}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={food.image}
                  alt={lang === 'bn' ? food.nameBn : food.nameEn}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                {food.isGiTagged && (
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase text-white bg-gradient-to-r from-amber-500 to-orange-600 shadow-md flex items-center gap-1 border border-white/20">
                      <Award className="w-3.5 h-3.5 fill-white" />
                      <span>GI Certified 2024</span>
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'bn' ? food.popularInBn : food.popularInEn}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                    {lang === 'bn' ? food.nameBn : food.nameEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                    {lang === 'bn' ? food.descBn : food.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200">
                    <strong>{lang === 'bn' ? 'কোথায় পাওয়া যায়:' : 'Where to Experience:'}</strong>{' '}
                    {lang === 'bn' ? food.tryInfoBn : food.tryInfoEn}
                  </div>

                  <span className="text-[10px] text-slate-400 dark:text-slate-500 block italic">
                    {t('explore.verifiedSource')} {food.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Products Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((prod) => (
            <div
              key={prod.id}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={prod.image}
                  alt={lang === 'bn' ? prod.nameBn : prod.nameEn}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20">
                    {lang === 'bn' ? prod.categoryBn : prod.categoryEn}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'bn' ? prod.upazilaBn : prod.upazilaEn}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                    {lang === 'bn' ? prod.nameBn : prod.nameEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                    {lang === 'bn' ? prod.descBn : prod.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-300">
                    <strong>{lang === 'bn' ? 'কেন বিখ্যাত:' : 'Why Renowned:'}</strong>{' '}
                    {lang === 'bn' ? prod.whyKnownBn : prod.whyKnownEn}
                  </div>

                  <span className="text-[10px] text-slate-400 dark:text-slate-500 block italic">
                    {t('explore.verifiedSource')} {prod.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
