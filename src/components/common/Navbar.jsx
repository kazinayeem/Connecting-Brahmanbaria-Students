import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { 
  Menu, X, Home, Info, Users, GraduationCap, Calendar, 
  Activity, Bell, Image, MapPin, Mail, ChevronDown, 
  Compass, Landmark, Plus
} from 'lucide-react';

export const Navbar = () => {
  const { t, lang } = useLanguage();
  const isBn = lang === 'bn';
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll detection for compact sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape key and scroll-lock for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // 1. Primary navigation links (visible directly on desktop)
  const primaryLinks = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/about', label: t('nav.about'), icon: Info },
    { path: '/committee', label: t('nav.committee'), icon: Users },
    { path: '/members', label: t('nav.members'), icon: GraduationCap },
    { path: '/activities', label: t('nav.activities'), icon: Activity },
    { path: '/events', label: t('nav.events'), icon: Calendar },
    { path: '/notices', label: t('nav.notices'), icon: Bell },
  ];

  // 2. Secondary links placed inside "আরও ▾" (More) dropdown
  const secondaryLinks = [
    { path: '/explore', label: isBn ? 'ব্রাহ্মণবাড়িয়াকে জানি' : 'Explore Brahmanbaria', icon: Compass },
    { path: '/history', label: isBn ? 'ব্রাহ্মণবাড়িয়ার ইতিহাস' : 'History of Brahmanbaria', icon: Landmark },
    { path: '/gallery', label: t('nav.gallery'), icon: Image },
    { path: '/upazilas', label: t('nav.upazilas'), icon: MapPin },
    { path: '/contact', label: t('nav.contact'), icon: Mail },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isMoreActive = secondaryLinks.some((link) => isActive(link.path));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-b border-slate-200 dark:border-slate-800/80 py-2 sm:py-2.5'
          : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-200/70 dark:border-slate-800/60 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Identity (Left) */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
            aria-label="BSA DIU Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-xs ring-1.5 ring-emerald-500/40 group-hover:ring-emerald-500 transition-all transform group-hover:scale-105 shrink-0 bg-emerald-950">
              <img
                src="/logo.svg"
                alt="BSA-DIU Logo"
                className="w-full h-full object-cover"
                width="40"
                height="40"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  BSA • DIU
                </span>
                <span className="hidden xs:inline-block px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded border border-emerald-200 dark:border-emerald-800/50">
                  Community
                </span>
              </div>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400/90 font-medium line-clamp-1 max-w-[140px] xs:max-w-[200px] sm:max-w-none">
                {isBn ? 'ব্রাহ্মণবাড়িয়া শিক্ষার্থী পরিবার' : 'Brahmanbaria Student Community'}
              </span>
            </div>
          </Link>

          {/* Main Desktop Navigation (Center) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {primaryLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2.5 py-1.5 rounded-lg text-xs xl:text-[13px] transition-all duration-150 ${
                    active
                      ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/50 after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-3.5 after:h-0.5 after:bg-emerald-600 dark:after:bg-emerald-400 after:rounded-full'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60 font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* "আরও ▾" (More) Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`relative px-2.5 py-1.5 rounded-lg text-xs xl:text-[13px] flex items-center gap-1 transition-all duration-150 ${
                  isMoreActive
                    ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/50 after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-3.5 after:h-0.5 after:bg-emerald-600 dark:after:bg-emerald-400 after:rounded-full'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60 font-medium'
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>{isBn ? 'আরও' : 'More'}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${dropdownOpen ? 'rotate-180 text-emerald-600 dark:text-emerald-400' : ''}`} />
              </button>

              {/* Desktop Dropdown Popover */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-56 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 z-50 animate-fadeIn">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 mb-1">
                    {isBn ? 'অন্যান্য পেজ' : 'Additional Pages'}
                  </div>
                  {secondaryLinks.map((sublink) => {
                    const active = isActive(sublink.path);
                    const SubIcon = sublink.icon;
                    return (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2 text-xs transition-colors ${
                          active
                            ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60'
                            : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <SubIcon className={`w-3.5 h-3.5 ${active ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`} />
                        <span>{sublink.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Actions: Theme, Language, Join CTA */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <LanguageSwitcher />

            {/* Compact Join CTA */}
            <Link
              to="/join"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-crimson-600 hover:bg-crimson-700 active:bg-crimson-800 shadow-xs hover:shadow-sm transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t('nav.join')}</span>
            </Link>
          </div>

          {/* Mobile Right Controls: [Theme Icon] [Hamburger Button] */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 focus:outline-none min-h-[38px] min-w-[38px] flex items-center justify-center transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[53px] sm:top-[61px] bg-slate-950/50 backdrop-blur-xs z-40 lg:hidden animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 lg:hidden bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 animate-slideDown transition-all max-h-[85vh] overflow-y-auto shadow-xl">
            
            {/* Mobile Top Controls Bar: Language & Join CTA */}
            <div className="mb-4 pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
              <LanguageSwitcher />

              <Link
                to="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1 py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-crimson-600 hover:bg-crimson-700 shadow-xs"
              >
                <Plus className="w-3 h-3" />
                <span>{t('nav.join')}</span>
              </Link>
            </div>

            {/* Mobile Primary Navigation Links */}
            <div className="space-y-1">
              <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {isBn ? 'প্রধান মেন্যু' : 'Main Menu'}
              </div>
              {primaryLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors min-h-[42px] ${
                      active
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold border-l-4 border-emerald-600 dark:border-emerald-400 pl-2.5'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${active ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Secondary / "আরও" Navigation Links */}
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1">
              <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {isBn ? 'আরও পেজসমূহ' : 'More Pages'}
              </div>
              <div className="grid grid-cols-1 gap-1">
                {secondaryLinks.map((sublink) => {
                  const SubIcon = sublink.icon;
                  const active = isActive(sublink.path);
                  return (
                    <Link
                      key={sublink.path}
                      to={sublink.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                        active
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <SubIcon className={`w-3.5 h-3.5 ${active ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`} />
                      <span>{sublink.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </>
      )}
    </header>
  );
};
