import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default to বাংলা ('bn') as required
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('bsa_diu_lang');
    return saved === 'en' ? 'en' : 'bn';
  });

  useEffect(() => {
    localStorage.setItem('bsa_diu_lang', lang);
    document.documentElement.lang = lang;
    if (lang === 'bn') {
      document.body.classList.add('font-bangla');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-bangla');
    }
  }, [lang]);

  const toggleLang = (newLang) => {
    if (newLang) {
      setLang(newLang);
    } else {
      setLang(prev => (prev === 'bn' ? 'en' : 'bn'));
    }
  };

  // Helper function to fetch translation by dot-notation key e.g. t('nav.home')
  const t = (key) => {
    if (!key) return '';
    const keys = key.split('.');
    let current = translations[lang];
    for (let k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to bangla or english or key
        let fallback = translations['bn'];
        for (let fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
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
