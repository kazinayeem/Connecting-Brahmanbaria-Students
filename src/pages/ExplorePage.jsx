import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';

// Datasets
import { 
  upazilasFullData, areasData, placesData, 
  foodsData, productsData, riversData, 
  notablePeopleData, cultureData, factsData 
} from '../data/brahmanbaria';

// Explore Components
import { BrahmanbariaGlance } from '../components/explore/BrahmanbariaGlance';
import { DidYouKnowWidget } from '../components/explore/DidYouKnowWidget';
import { StudentHomeFinder } from '../components/explore/StudentHomeFinder';
import { OmniSearchFilter } from '../components/explore/OmniSearchFilter';
import { UpazilaCards } from '../components/explore/UpazilaCards';
import { PlacesShowcase } from '../components/explore/PlacesShowcase';
import { FoodProductsShowcase } from '../components/explore/FoodProductsShowcase';
import { RiversSection } from '../components/explore/RiversSection';
import { NotablePeopleSection } from '../components/explore/NotablePeopleSection';
import { CultureHeritageSection } from '../components/explore/CultureHeritageSection';
import { BrahmanbariaToDiuPipeline } from '../components/explore/BrahmanbariaToDiuPipeline';

import { MapPin, Search, Compass, Info, CheckCircle2 } from 'lucide-react';

export const ExplorePage = () => {
  const { lang, t } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Filter logic across all datasets for search query
  const q = searchQuery.toLowerCase().trim();

  const matchesText = (text) => text && text.toLowerCase().includes(q);

  const filteredUpazilas = useMemo(() => {
    if (!q) return upazilasFullData;
    return upazilasFullData.filter(u => 
      matchesText(u.nameBn) || matchesText(u.nameEn) || 
      matchesText(u.titleBn) || matchesText(u.titleEn) ||
      matchesText(u.shortIntroBn) || matchesText(u.shortIntroEn)
    );
  }, [q]);

  const filteredAreas = useMemo(() => {
    if (!q) return areasData;
    return areasData.filter(a => 
      matchesText(a.nameBn) || matchesText(a.nameEn) ||
      matchesText(a.upazilaBn) || matchesText(a.upazilaEn) ||
      matchesText(a.whyKnownBn) || matchesText(a.whyKnownEn)
    );
  }, [q]);

  const filteredPlaces = useMemo(() => {
    if (!q) return placesData;
    return placesData.filter(p => 
      matchesText(p.nameBn) || matchesText(p.nameEn) ||
      matchesText(p.upazilaBn) || matchesText(p.upazilaEn) ||
      matchesText(p.historyBn) || matchesText(p.historyEn)
    );
  }, [q]);

  const filteredFoods = useMemo(() => {
    if (!q) return foodsData;
    return foodsData.filter(f => 
      matchesText(f.nameBn) || matchesText(f.nameEn) ||
      matchesText(f.descBn) || matchesText(f.descEn)
    );
  }, [q]);

  const filteredProducts = useMemo(() => {
    if (!q) return productsData;
    return productsData.filter(pr => 
      matchesText(pr.nameBn) || matchesText(pr.nameEn) ||
      matchesText(pr.whyKnownBn) || matchesText(pr.whyKnownEn) ||
      matchesText(pr.descBn) || matchesText(pr.descEn)
    );
  }, [q]);

  const filteredRivers = useMemo(() => {
    if (!q) return riversData;
    return riversData.filter(r => 
      matchesText(r.nameBn) || matchesText(r.nameEn) ||
      matchesText(r.areasPassedBn) || matchesText(r.areasPassedEn) ||
      matchesText(r.importanceBn) || matchesText(r.importanceEn)
    );
  }, [q]);

  const filteredNotable = useMemo(() => {
    if (!q) return notablePeopleData;
    return notablePeopleData.filter(np => 
      matchesText(np.nameBn) || matchesText(np.nameEn) ||
      matchesText(np.connectionBn) || matchesText(np.connectionEn) ||
      matchesText(np.bioBn) || matchesText(np.bioEn)
    );
  }, [q]);

  const filteredCulture = useMemo(() => {
    if (!q) return cultureData;
    return cultureData.filter(c => 
      matchesText(c.titleBn) || matchesText(c.titleEn) ||
      matchesText(c.descBn) || matchesText(c.descEn)
    );
  }, [q]);

  const totalResults = 
    filteredUpazilas.length + filteredAreas.length + filteredPlaces.length + 
    filteredFoods.length + filteredProducts.length + filteredRivers.length + 
    filteredNotable.length + filteredCulture.length;

  const handleReset = () => {
    setSearchQuery('');
    setActiveTab('all');
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <SectionHeader
          badge={t('explore.badge')}
          title={t('explore.title')}
          subtitle={t('explore.subtitle')}
        />

        {/* 1. Did You Know? Rotating Trivia */}
        <DidYouKnowWidget />

        {/* 2. District at a Glance */}
        <BrahmanbariaGlance />

        {/* 3. Interactive Student Homeland Finder: "ব্রাহ্মণবাড়িয়ার কোন এলাকার?" */}
        <StudentHomeFinder />

        {/* 4. Omni-Search & Category Filters */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              {lang === 'bn' ? 'ব্রাহ্মণবাড়িয়া তথ্য ভান্ডার অনুসন্ধান' : 'Search Brahmanbaria Compendium'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {lang === 'bn' ? 'খাবার, স্থান, নদী, বিখ্যাত ব্যক্তিত্ব বা ঐতিহ্য সহজেই খুঁজুন' : 'Explore any topic, food, landmark, river, or icon'}
            </p>
          </div>

          <OmniSearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            totalResults={totalResults}
            onReset={handleReset}
          />

          {/* Conditional View Rendering Based on Active Tab or Search Results */}
          
          {/* Tab: All or Upazilas */}
          {(activeTab === 'all' || activeTab === 'upazilas') && filteredUpazilas.length > 0 && (
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand-600" />
                  <span>{lang === 'bn' ? 'ব্রাহ্মণবাড়িয়ার ৯টি উপজেলা' : 'The 9 Upazilas'}</span>
                </h4>
                <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg">
                  {filteredUpazilas.length} {lang === 'bn' ? 'উপজেলা' : 'Upazilas'}
                </span>
              </div>
              <UpazilaCards upazilas={filteredUpazilas} />
            </div>
          )}

          {/* Tab: All or Areas */}
          {(activeTab === 'all' || activeTab === 'areas') && filteredAreas.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-crimson-600" />
                  <span>{lang === 'bn' ? 'জনপ্রিয় এলাকা, শহর ও বাণিজ্যিক মোকাম' : 'Popular Areas, Towns & Trading Centers'}</span>
                </h4>
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {filteredAreas.length} {lang === 'bn' ? 'এলাকা' : 'Areas'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAreas.map((area) => (
                  <div key={area.id} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-lg">
                        {lang === 'bn' ? area.upazilaBn : area.upazilaEn}
                      </span>
                    </div>
                    <h5 className="text-lg font-bold text-slate-900">{lang === 'bn' ? area.nameBn : area.nameEn}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{lang === 'bn' ? area.whyKnownBn : area.whyKnownEn}</p>
                    <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                      <strong>{lang === 'bn' ? 'আশপাশের স্থান:' : 'Nearby Places:'}</strong> {lang === 'bn' ? area.nearbyPlacesBn : area.nearbyPlacesEn}
                    </div>
                    <div className="text-[10px] text-slate-400 italic pt-1">
                      {t('explore.verifiedSource')} {area.source}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab: All or Places */}
          {(activeTab === 'all' || activeTab === 'places') && filteredPlaces.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-600" />
                  <span>{lang === 'bn' ? 'ঐতিহাসিক ও দর্শনীয় স্থান' : 'Verified Places to Visit'}</span>
                </h4>
                <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg">
                  {filteredPlaces.length} {lang === 'bn' ? 'টি স্থান' : 'Places'}
                </span>
              </div>
              <PlacesShowcase places={filteredPlaces} />
            </div>
          )}

          {/* Tab: All or Foods or Products */}
          {(activeTab === 'all' || activeTab === 'foods' || activeTab === 'products') && (filteredFoods.length > 0 || filteredProducts.length > 0) && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-crimson-600" />
                  <span>{lang === 'bn' ? 'বিখ্যাত খাবার ও ঐতিহ্যবাহী পণ্য' : 'Famous Foods & Regional Products'}</span>
                </h4>
              </div>
              <FoodProductsShowcase />
            </div>
          )}

          {/* Tab: All or Rivers */}
          {(activeTab === 'all' || activeTab === 'rivers') && filteredRivers.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-cyan-600" />
                  <span>{lang === 'bn' ? 'ব্রাহ্মণবাড়িয়ার নদী ও জলপথ' : 'Rivers & Waterways'}</span>
                </h4>
                <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-lg">
                  {filteredRivers.length} {lang === 'bn' ? 'টি নদী' : 'Rivers'}
                </span>
              </div>
              <RiversSection />
            </div>
          )}

          {/* Tab: All or Notable */}
          {(activeTab === 'all' || activeTab === 'notable') && filteredNotable.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-600" />
                  <span>{lang === 'bn' ? 'ব্রাহ্মণবাড়িয়ার পরিচিত মানুষ ও ব্যক্তিত্ব' : 'Notable People from Brahmanbaria'}</span>
                </h4>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg">
                  {filteredNotable.length} {lang === 'bn' ? 'জন' : 'Icons'}
                </span>
              </div>
              <NotablePeopleSection />
            </div>
          )}

          {/* Tab: All or Culture */}
          {(activeTab === 'all' || activeTab === 'culture') && filteredCulture.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-purple-600" />
                  <span>{lang === 'bn' ? 'লোকসংস্কৃতি ও ঐতিহ্যের ধারা' : 'Culture & Folk Traditions'}</span>
                </h4>
              </div>
              <CultureHeritageSection />
            </div>
          )}

          {/* Empty search state */}
          {totalResults === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto space-y-3">
              <Search className="w-8 h-8 text-slate-400 mx-auto" />
              <h5 className="font-bold text-slate-800">{lang === 'bn' ? 'কোনো ফলাফল পাওয়া যায়নি' : 'No Results Found'}</h5>
              <p className="text-xs text-slate-500">
                {lang === 'bn' ? 'বানান যাচাই করে অথবা ভিন্ন শব্দ দিয়ে পুনরায় অনুসন্ধান করুন।' : 'Try adjusting your search terms or resetting filters.'}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 rounded-xl text-xs font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors"
              >
                {lang === 'bn' ? 'অনুসন্ধান রিসেট করুন' : 'Reset Search'}
              </button>
            </div>
          )}

        </div>

        {/* 5. Brahmanbaria → DIU Community Pipeline */}
        <BrahmanbariaToDiuPipeline />

      </div>
    </div>
  );
};
