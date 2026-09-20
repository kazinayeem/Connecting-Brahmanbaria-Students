import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { GraduationCap, MapPin, Hash, Droplet } from 'lucide-react';

export const MemberCard = ({ member }) => {
  const { lang } = useLanguage();

  return (
    <div className="group rounded-2xl p-5 bg-white border border-slate-200/80 hover:border-brand-400 hover:shadow-soft transition-all duration-200 flex items-start gap-4">
      
      {/* Profile Photo */}
      <div className="relative shrink-0">
        <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-emerald-100 shadow-inner">
          <img
            src={member.photo}
            alt={lang === 'bn' ? member.nameBn : member.nameEn}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        {member.blood && (
          <span className="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 rounded-full text-[9px] font-black bg-crimson-600 text-white shadow-xs flex items-center gap-0.5">
            <Droplet className="w-2.5 h-2.5 fill-white" />
            <span>{member.blood}</span>
          </span>
        )}
      </div>

      {/* Member Info */}
      <div className="flex-1 min-w-0 space-y-1">
        
        {/* Name */}
        <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition-colors truncate">
          {lang === 'bn' ? member.nameBn : member.nameEn}
        </h4>

        {/* Department */}
        <p className="text-xs font-semibold text-brand-700 truncate">
          {lang === 'bn' ? member.deptBn : member.deptEn}
        </p>

        {/* Meta tags: Batch & Student ID */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-500">
          <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
            <GraduationCap className="w-3 h-3 text-slate-400" />
            <span>{member.batch}</span>
          </span>

          {member.studentId && (
            <span className="inline-flex items-center gap-0.5 bg-slate-100 px-2 py-0.5 rounded-md font-mono text-slate-600">
              <Hash className="w-2.5 h-2.5 text-slate-400" />
              <span>{member.studentId}</span>
            </span>
          )}
        </div>

        {/* Home Upazila */}
        <div className="pt-1 flex items-center gap-1 text-[11px] text-slate-500">
          <MapPin className="w-3 h-3 text-crimson-500 shrink-0" />
          <span className="truncate">{lang === 'bn' ? member.upazilaBn : member.upazilaEn}</span>
        </div>

      </div>

    </div>
  );
};
