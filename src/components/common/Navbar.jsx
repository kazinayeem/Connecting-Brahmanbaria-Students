import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { 
  Menu, X, Home, Info, Users, GraduationCap, Calendar, 
  Activity, Bell, Image, MapPin, UserPlus, Mail, ChevronRight, Compass, Sparkles, Landmark 
} from 'lucide-react';

export const Navbar = () => {
  const { t, lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key and body scroll lock for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
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

  const navLinks = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/explore', label: t('nav.explore'), icon: Compass, featured: true },
    { path: '/history', label: t('nav.history'), icon: Landmark },
    { path: '/about', label: t('nav.about'), icon: Info },
    { path: '/committee', label: t('nav.committee'), icon: Users },
    { path: '/members', label: t('nav.members'), icon: GraduationCap },
    { path: '/activities', label: t('nav.activities'), icon: Activity },
    { path: '/events', label: t('nav.events'), icon: Calendar },
    { path: '/notices', label: t('nav.notices'), icon: Bell },
    { path: '/gallery', label: t('nav.gallery'), icon: Image },
    { path: '/upazilas', label: t('nav.upazilas'), icon: MapPin },
    { path: '/contact', label: t('nav.contact'), icon: Mail },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-950/95 backdrop-blur-md shadow-lg border-b border-brand-800/40 py-2 sm:py-2.5' 
        : 'bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 text-white py-2.5 sm:py-3.5 border-b border-brand-800/30'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-md ring-2 ring-emerald-400/40 group-hover:ring-emerald-300 transition-all transform group-hover:scale-105">
              <img src="/logo.svg" alt="BSA-DIU Logo" className="w-full h-full object-cover" width="44" height="44" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  BSA • DIU
                </span>
                <span className="hidden xs:inline-block px-1.5 py-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider bg-crimson-600/90 text-white rounded">
                  Community
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-emerald-300/90 font-medium line-clamp-1 max-w-[130px] xs:max-w-[200px] sm:max-w-none">
                {lang === 'bn' ? 'ব্রাহ্মণবাড়িয়া স্টুডেন্টস অ্যাসোসিয়েশন' : 'Brahmanbaria Students Association'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.slice(0, 8).map((link) => {
              const active = isActive(link.path);
              if (link.featured) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-2.5 py-1.5 rounded-lg text-xs 2xl:text-sm font-bold transition-all duration-150 flex items-center gap-1.5 ${
                      active
                        ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-300'
                        : 'bg-emerald-900/90 text-amber-300 hover:bg-emerald-800 hover:text-amber-200 border border-amber-500/40 shadow-xs'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>{link.label}</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2.5 py-1.5 rounded-lg text-xs 2xl:text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'bg-emerald-800/80 text-white shadow-sm border border-emerald-600/50'
                      : 'text-emerald-100 hover:text-white hover:bg-emerald-800/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Dropdown / More links for Desktop */}
            <div className="relative group">
              <button
                type="button"
                className={`px-2.5 py-1.5 rounded-lg text-xs 2xl:text-sm font-semibold flex items-center gap-1 transition-all ${
                  isActive('/notices') || isActive('/gallery') || isActive('/upazilas') || isActive('/contact')
                    ? 'bg-emerald-800/80 text-white border border-emerald-600/50'
                    : 'text-emerald-100 hover:text-white hover:bg-emerald-800/40'
                }`}
              >
                <span>{lang === 'bn' ? 'আরও' : 'More'}</span>
                <ChevronRight className="w-3.5 h-3.5 rotate-90" />
              </button>
              
              <div className="absolute right-0 mt-1 w-52 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-xl border border-emerald-800/60 py-2 hidden group-hover:block transition-all animate-fadeIn">
                <Link
                  to="/notices"
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold ${
                    isActive('/notices') ? 'text-emerald-400 bg-emerald-950/60' : 'text-slate-200 hover:text-white hover:bg-emerald-900/50'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5 text-emerald-400" />
                  {t('nav.notices')}
                </Link>
                <Link
                  to="/gallery"
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold ${
                    isActive('/gallery') ? 'text-emerald-400 bg-emerald-950/60' : 'text-slate-200 hover:text-white hover:bg-emerald-900/50'
                  }`}
                >
                  <Image className="w-3.5 h-3.5 text-emerald-400" />
                  {t('nav.gallery')}
                </Link>
                <Link
                  to="/upazilas"
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold ${
                    isActive('/upazilas') ? 'text-emerald-400 bg-emerald-950/60' : 'text-slate-200 hover:text-white hover:bg-emerald-900/50'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {t('nav.upazilas')}
                </Link>
                <Link
                  to="/contact"
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold ${
                    isActive('/contact') ? 'text-emerald-400 bg-emerald-950/60' : 'text-slate-200 hover:text-white hover:bg-emerald-900/50'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </nav>

          {/* Action CTAs: Language Switcher, Theme Toggle & Join Us */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />
            <LanguageSwitcher />

            <Link
              to="/join"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-crimson-600 to-rose-700 hover:from-crimson-500 hover:to-rose-600 shadow-md shadow-crimson-900/30 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>{t('nav.join')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button & Mobile Controls */}
          <div className="flex items-center gap-1.5 xs:gap-2 xl:hidden">
            <div className="sm:hidden flex items-center gap-1">
              <ThemeToggle />
              <LanguageSwitcher variant="mobile-inline" />
            </div>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-800/50 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[53px] sm:top-[61px] bg-slate-950/60 backdrop-blur-xs z-40 xl:hidden animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-50 xl:hidden bg-slate-900/98 backdrop-blur-xl border-b border-emerald-800/50 px-4 pt-3 pb-6 animate-slideDown transition-all max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="mb-4 pt-1 pb-2 border-b border-slate-800 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-semibold">{lang === 'bn' ? 'ভাষা ও থিম' : 'Language & Theme'}:</span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LanguageSwitcher variant="mobile" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px] ${
                      link.featured
                        ? 'bg-gradient-to-r from-emerald-900 to-emerald-950 text-amber-300 font-bold border border-amber-500/40'
                        : active
                          ? 'bg-emerald-800/70 text-emerald-200 font-bold border-l-4 border-emerald-400 pl-3'
                          : 'text-slate-200 hover:bg-slate-800/70 hover:text-white active:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${link.featured ? 'text-amber-400' : active ? 'text-emerald-400' : 'text-slate-400'}`} />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-3">
              <Link
                to="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-crimson-600 to-rose-700 shadow-lg text-center min-h-[48px]"
              >
                <UserPlus className="w-4 h-4" />
                <span>{t('nav.join')}</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
