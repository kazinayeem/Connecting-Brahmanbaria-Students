import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { pageTransition } from './lib/motion';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CommitteePage } from './pages/CommitteePage';
import { MembersPage } from './pages/MembersPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { EventsPage } from './pages/EventsPage';
import { NoticesPage } from './pages/NoticesPage';
import { GalleryPage } from './pages/GalleryPage';
import { UpazilasPage } from './pages/UpazilasPage';
import { ExplorePage } from './pages/ExplorePage';
import { HistoryPage } from './pages/HistoryPage';
import { LocalLanguagePage } from './pages/LocalLanguagePage';
import { JoinPage } from './pages/JoinPage';
import { ContactPage } from './pages/ContactPage';

// ─── Scroll-to-top on route change ────────────────────────────────────────────
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

// ─── Top scroll progress bar ──────────────────────────────────────────────────
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  );
};

// ─── Animated page wrapper ────────────────────────────────────────────────────
const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <ScrollProgressBar />
          <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
            <Navbar />
            <main className="flex-grow">
              <PageWrapper>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/explore" element={<ExplorePage />} />
                  <Route path="/explore-brahmanbaria" element={<ExplorePage />} />
                  <Route path="/history" element={<HistoryPage />} />
                  <Route path="/local-language" element={<LocalLanguagePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/committee" element={<CommitteePage />} />
                  <Route path="/members" element={<MembersPage />} />
                  <Route path="/activities" element={<ActivitiesPage />} />
                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/notices" element={<NoticesPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/upazilas" element={<UpazilasPage />} />
                  <Route path="/join" element={<JoinPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  {/* Fallback route */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </PageWrapper>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
