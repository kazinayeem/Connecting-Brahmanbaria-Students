import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { galleryCategories, galleryData } from '../../data/galleryData';
import { Modal } from '../common/Modal';
import { Maximize2, MapPin, Calendar, Image as ImageIcon } from 'lucide-react';

export const GalleryGrid = ({ limit }) => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  const displayPhotos = limit ? filteredPhotos.slice(0, limit) : filteredPhotos;

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 min-h-[40px] flex items-center justify-center ${
              activeCategory === cat.id
                ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {lang === 'bn' ? cat.nameBn : cat.nameEn}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {displayPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-300 h-56 xs:h-64 sm:h-72 border border-transparent dark:border-slate-800"
          >
            <img
              src={photo.image}
              alt={lang === 'bn' ? photo.titleBn : photo.titleEn}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              loading="lazy"
              width="600"
              height="400"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            {/* Zoom Icon Button */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Caption & Location Info */}
            <div className="absolute bottom-0 inset-x-0 p-5 space-y-1.5 text-white">
              <h4 className="text-sm sm:text-base font-bold leading-snug">
                {lang === 'bn' ? photo.titleBn : photo.titleEn}
              </h4>
              <div className="flex items-center gap-3 text-xs text-emerald-300/90">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{lang === 'bn' ? photo.locationBn : photo.locationEn}</span>
                </span>
                <span>•</span>
                <span>{photo.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        title={selectedPhoto ? (lang === 'bn' ? selectedPhoto.titleBn : selectedPhoto.titleEn) : ''}
        maxWidth="max-w-3xl"
      >
        {selectedPhoto && (
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden bg-slate-950 max-h-[70vh] flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={lang === 'bn' ? selectedPhoto.titleBn : selectedPhoto.titleEn}
                className="w-full h-auto max-h-[65vh] object-contain rounded-xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-crimson-600" />
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {lang === 'bn' ? selectedPhoto.locationBn : selectedPhoto.locationEn}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>{selectedPhoto.date} • BSA-DIU Archive</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
