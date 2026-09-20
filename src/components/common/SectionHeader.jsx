import React from 'react';

export const SectionHeader = ({ 
  badge, 
  title, 
  subtitle, 
  align = "center",
  light = false 
}) => {
  const alignmentClass = align === "left" 
    ? "text-left items-start" 
    : align === "right" 
      ? "text-right items-end" 
      : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignmentClass} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} mb-12`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 bg-emerald-100 text-emerald-800 border border-emerald-300/60 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Modern Accent Bar */}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-600 to-crimson-500 ${
        align === 'center' ? 'mx-auto' : ''
      }`} />
    </div>
  );
};
