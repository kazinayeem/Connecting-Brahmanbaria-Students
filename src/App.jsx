import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

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
import { JoinPage } from './pages/JoinPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/explore-brahmanbaria" element={<ExplorePage />} />
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
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
