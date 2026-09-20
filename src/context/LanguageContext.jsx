import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const DEFAULT_LANGUAGE = 'bb';

export const LanguageProvider = ({ children }) => {
  // CRITICAL: Default MUST be 'bb' (ব্রাহ্মণবাড়িয়ার আঞ্চলিক ভাষা)
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('language') || localStorage.getItem('bsa_diu_lang');
      if (saved === 'bb' || saved === 'bn' || saved === 'en') {
        return saved;
      }
      return DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  });

  const setLang = (newLang) => {
    if (newLang === 'bb' || newLang === 'bn' || newLang === 'en') {
      setLangState(newLang);
      try {
        localStorage.setItem('language', newLang);
        localStorage.setItem('bsa_diu_lang', newLang);
      } catch {
        // Ignore localStorage errors
      }
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem('language', lang);
      localStorage.setItem('bsa_diu_lang', lang);
    } catch {
      // Ignore localStorage errors
    }

    // Set document lang & title
    document.documentElement.lang = lang === 'en' ? 'en' : 'bn';
    if (lang === 'en') {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-bangla');
    } else {
      document.body.classList.add('font-bangla');
      document.body.classList.remove('font-sans');
    }

    // SEO / Document title update
    if (lang === 'bb') {
      document.title = "বাউনবাইরা স্টুডেন্টস অ্যাসোসিয়েশন | ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি (BSA-DIU)";
    } else if (lang === 'bn') {
      document.title = "ব্রাহ্মণবাড়িয়া স্টুডেন্টস অ্যাসোসিয়েশন | ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি (BSA-DIU)";
    } else {
      document.title = "Brahmanbaria Students Association | Daffodil International University (BSA-DIU)";
    }
  }, [lang]);

  const toggleLang = (target) => {
    if (target) {
      setLang(target);
    } else {
      setLang(prev => {
        if (prev === 'bb') return 'bn';
        if (prev === 'bn') return 'en';
        return 'bb';
      });
    }
  };

  // Helper function to fetch translation by dot-notation key e.g. t('nav.home')
  const t = (key) => {
    if (!key) return '';
    const keys = key.split('.');

    // Try current lang
    let current = translations[lang];
    let found = true;
    for (let k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        found = false;
        break;
      }
    }
    if (found && current !== undefined) return current;

    // Fallback: bb -> bn -> en
    const fallbacks = [translations['bb'], translations['bn'], translations['en']];
    for (let fb of fallbacks) {
      if (!fb) continue;
      let curr = fb;
      let ok = true;
      for (let k of keys) {
        if (curr && curr[k] !== undefined) {
          curr = curr[k];
        } else {
          ok = false;
          break;
        }
      }
      if (ok && curr !== undefined) return curr;
    }

    return key;
  };

  // Helper for localized object properties e.g. l(item, 'title') -> item.titleBb || item.titleBn || item.titleEn
  const l = (item, prefix) => {
    if (!item || !prefix) return '';
    const capitalized = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    const bbKey = `${prefix}Bb`;
    const bnKey = `${prefix}Bn`;
    const enKey = `${prefix}En`;

    if (lang === 'bb') {
      return item[bbKey] || item[bnKey] || item[enKey] || item[prefix] || '';
    }
    if (lang === 'bn') {
      return item[bnKey] || item[bbKey] || item[enKey] || item[prefix] || '';
    }
    return item[enKey] || item[bnKey] || item[bbKey] || item[prefix] || '';
  };

  return (
    <LanguageContext.Provider value={{
      lang,
      setLang,
      toggleLang,
      t,
      l,
      isBb: lang === 'bb',
      isBn: lang === 'bn',
      isEn: lang === 'en',
      isBanglaScript: lang === 'bb' || lang === 'bn'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
