import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { siteConfig, GalleryItem } from '../data/siteConfig';

export const StyleGallery: React.FC = () => {
  const { eyebrow, heading, description, categories, items } = siteConfig.gallery;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#0c0c0c] text-[#F4F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#242220]">
          <div>
            <span className="text-xs font-sans tracking-ultra uppercase text-[#D6B477] font-medium mb-3 block">
              {eyebrow}
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#F4F0E8] uppercase leading-[1.1]">
              {heading}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#8E8A85] font-sans max-w-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 font-sans cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-[#D6B477] text-[#101010] font-semibold shadow-[0_2px_15px_rgba(214,180,119,0.2)]'
                    : 'bg-[#161616] text-[#8E8A85] hover:text-[#F4F0E8] border border-[#242220] hover:border-[#D6B477]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item: GalleryItem, idx: number) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden bg-[#161616] border border-[#242220] hover:border-[#D6B477]/50 transition-colors duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-wider uppercase bg-[#101010]/85 backdrop-blur-md border border-[#282624] text-[#D6B477] px-2.5 py-1">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* View Icon Hover Reveal */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#101010]/80 backdrop-blur-md border border-[#D6B477]/50 text-[#D6B477] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Eye size={16} />
                  </div>

                  {/* Bottom Text Reveal on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-cinzel text-lg text-[#F4F0E8] uppercase tracking-wide group-hover:text-[#D6B477] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8E8A85] font-sans mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Immersive Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9990] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 text-[#C5C1B8] hover:text-[#D6B477] p-2 bg-[#161616]/80 rounded-full border border-[#282624] transition-colors"
              aria-label="Close image modal"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-[#C5C1B8] hover:text-[#D6B477] p-3 bg-[#161616]/80 rounded-full border border-[#282624] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-[#C5C1B8] hover:text-[#D6B477] p-3 bg-[#161616]/80 rounded-full border border-[#282624] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Content Container */}
            <div
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain border border-[#282624] shadow-2xl"
              />

              {/* Lightbox Caption & Details */}
              <div className="mt-4 text-center max-w-xl">
                <span className="text-[10px] tracking-ultra uppercase text-[#D6B477] block">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <h4 className="font-cinzel text-xl text-[#F4F0E8] uppercase tracking-wide mt-1">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-xs text-[#8E8A85] font-sans mt-2">
                  {filteredItems[lightboxIndex].caption}
                </p>
                <p className="text-[11px] text-[#C5C1B8] font-sans italic mt-1">
                  {filteredItems[lightboxIndex].details}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
