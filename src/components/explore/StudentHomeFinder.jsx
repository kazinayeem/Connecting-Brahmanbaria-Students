import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { upazilasFullData } from '../../data/brahmanbaria/upazilas';
import { membersData } from '../../data/membersData';
import { 
  MapPin, Utensils, Sparkles, Navigation, 
  Users, CheckCircle2, Waves, Award, ExternalLink, Bookmark 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudentHomeFinder = () => {
  const { lang, t } = useLanguage();
  const [selectedId, setSelectedId] = useState('sadar');

  const upazila = upazilasFullData.find(u => u.id === selectedId) || upazilasFullData[0];

  // Filter student members from this upazila from membersData
  const localMembers = membersData.filter(m => 
    m.upazilaBn === upazila.nameBn || m.upazilaEn === upazila.nameEn
  );

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-crimson-50 text-crimson-700 border border-crimson-200">
          <Navigation className="w-3.5 h-3.5 text-crimson-600" />
          <span>Student Identity Feature</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          {t('explore.homeFinderTitle')}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          {t('explore.homeFinderSubtitle')}
        </p>
      </div>

      {/* 9 Upazila Selectable Buttons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
        {upazilasFullData.map((u) => {
          const isSelected = u.id === selectedId;
          return (
            <button
              key={u.id}
              type="button"
              onClick={() => setSelectedId(u.id)}
              className={`p-2.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                isSelected
                  ? 'bg-brand-800 text-white border-brand-900 shadow-md transform scale-105'
                  : 'bg-slate-50 hover:bg-emerald-50 border-slate-200 text-slate-700 hover:border-brand-300'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-crimson-400' : 'bg-brand-500'}`}></span>
              <span className="text-xs font-bold line-clamp-1">
                {lang === 'bn' ? u.nameBn : u.nameEn}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Upazila Personalized Dossier Box */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 space-y-8 animate-fadeIn">
        
        {/* Top Header of the Selected Upazila */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/70 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-brand-100 text-brand-800">
                {lang === 'bn' ? 'নির্বাচিত নিজ এলাকা' : 'Selected Homeland'}
              </span>
              <span className="text-xs text-slate-500">
                {upazila.areaKm2} sq km
              </span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900">
              {lang === 'bn' ? upazila.nameBn : upazila.nameEn}
            </h4>
            <p className="text-xs font-semibold text-brand-700">
              {lang === 'bn' ? upazila.titleBn : upazila.titleEn}
            </p>
          </div>

          {/* Student Members Badge */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-brand-700 flex items-center justify-center font-black">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">
                {localMembers.length > 0 ? `${localMembers.length}+ DIU Members` : 'Student Network'}
              </span>
              <span className="text-[11px] text-slate-500">
                {lang === 'bn' ? 'অ্যাসোসিয়েশন সদস্য' : 'Active BSA-DIU Students'}
              </span>
            </div>
          </div>
        </div>

        {/* Short Introduction */}
        <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200/60 shadow-2xs">
          {lang === 'bn' ? upazila.shortIntroBn : upazila.shortIntroEn}
        </p>

        {/* 4 Pillars Information Grid for this Upazila */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          
          {/* 1. Popular Areas */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5">
            <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-600" />
              <span>{lang === 'bn' ? 'জনপ্রিয় এলাকা ও বাজার' : 'Popular Towns & Bazars'}</span>
            </h5>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {(lang === 'bn' ? upazila.popularAreasBn : upazila.popularAreasEn).map((area, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-lg">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Famous Delicacies & Food */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5">
            <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Utensils className="w-4 h-4 text-crimson-600" />
              <span>{lang === 'bn' ? 'বিখ্যাত খাবার ও মিষ্টি' : 'Famous Foods & Sweets'}</span>
            </h5>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {(lang === 'bn' ? upazila.famousFoodBn : upazila.famousFoodEn).map((food, idx) => (
                <span key={idx} className="bg-rose-50 text-crimson-800 font-semibold px-2.5 py-1 rounded-lg border border-rose-100">
                  {food}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Famous Places */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5">
            <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'bn' ? 'দর্শনীয় ও পরিচিত স্থান' : 'Key Places & Landmarks'}</span>
            </h5>
            <ul className="space-y-1 text-slate-600 pt-1">
              {(lang === 'bn' ? upazila.famousPlacesBn : upazila.famousPlacesEn).map((place, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>{place}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Cultural Identity */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5">
            <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>{lang === 'bn' ? 'সাংস্কৃতিক স্বকীয়তা' : 'Cultural Identity & Heritage'}</span>
            </h5>
            <p className="text-slate-600 leading-relaxed pt-1">
              {lang === 'bn' ? upazila.culturalIdentityBn : upazila.culturalIdentityEn}
            </p>
          </div>

        </div>

        {/* Association Members from this Upazila preview */}
        {localMembers.length > 0 && (
          <div className="pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-slate-700">
                {lang === 'bn' ? `ডিআইইউতে ${upazila.nameBn} এর কয়েকজন শিক্ষার্থী:` : `Sample DIU peers from ${upazila.nameEn}:`}
              </span>
              <Link to="/members" className="text-brand-700 font-bold hover:underline">
                {lang === 'bn' ? 'সকল শিক্ষার্থী দেখুন ›' : 'View all members ›'}
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {localMembers.map((m) => (
                <div key={m.id} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-xs">
                  <img src={m.photo} alt={m.nameEn} className="w-6 h-6 rounded-full object-cover" />
                  <span className="font-semibold text-slate-800">{lang === 'bn' ? m.nameBn : m.nameEn}</span>
                  <span className="text-[10px] text-slate-400">({m.deptId})</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Source citation */}
        <div className="text-[11px] text-slate-400 border-t border-slate-200/60 pt-3">
          <strong>{t('explore.verifiedSource')}</strong> {lang === 'bn' ? upazila.source : upazila.sourceEn}
        </div>

      </div>

    </section>
  );
};
