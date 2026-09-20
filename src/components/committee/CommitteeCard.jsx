import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Phone, MapPin, GraduationCap, Award } from 'lucide-react';

export const CommitteeCard = ({ member }) => {
  const { lang } = useLanguage();

  return (
    <div className="group rounded-3xl p-6 bg-white border border-slate-200/80 hover:border-brand-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden">
      
      {/* Decorative top accent line */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-600 via-emerald-400 to-crimson-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

      {/* Avatar Container */}
      <div className="relative mt-2 mb-5">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-emerald-50 ring-offset-2 ring-offset-white shadow-md group-hover:scale-105 transition-transform duration-300">
          <img
            src={member.photo}
            alt={lang === 'bn' ? member.nameBn : member.nameEn}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Upazila Badge on Avatar */}
        <span className="absolute -bottom-2 inset-x-0 mx-auto w-max px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white shadow-sm flex items-center gap-1">
          <MapPin className="w-2.5 h-2.5 text-brand-400" />
          <span>{lang === 'bn' ? member.upazilaBn : member.upazilaEn}</span>
        </span>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
        {lang === 'bn' ? member.nameBn : member.nameEn}
      </h3>

      {/* Position Badge */}
      <div className="mt-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-800 border border-brand-200/80">
          <Award className="w-3.5 h-3.5 text-brand-600" />
          <span>{lang === 'bn' ? member.roleBn : member.roleEn}</span>
        </span>
      </div>

      {/* Department & Batch */}
      <div className="space-y-1 text-xs text-slate-500 mb-5">
        <p className="font-medium text-slate-700">
          {lang === 'bn' ? member.deptBn : member.deptEn}
        </p>
        <p className="flex items-center justify-center gap-1 text-slate-400">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{member.batch}</span>
        </p>
      </div>

      {/* Contact Links */}
      <div className="mt-auto pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-3 text-slate-400">
        <a
          href={`mailto:${member.email}`}
          className="p-2 rounded-lg hover:bg-emerald-50 hover:text-brand-600 transition-colors"
          title="Send email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href={`tel:${member.phone}`}
          className="p-2 rounded-lg hover:bg-emerald-50 hover:text-brand-600 transition-colors"
          title="Call member"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
