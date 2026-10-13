import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ComparisonSlider: React.FC = () => {
  const {
    eyebrow,
    heading,
    description,
    beforeLabel,
    afterLabel,
    beforeImage,
    afterImage,
    title,
    treatmentDetails
  } = siteConfig.comparison;

  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="transformation" className="py-24 md:py-36 bg-[#101010] text-[#F4F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-sans tracking-ultra uppercase text-[#D6B477] font-medium mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#F4F0E8] uppercase leading-[1.1]">
            {heading}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#8E8A85] font-sans leading-relaxed">
            {description}
          </p>
          <div className="w-12 h-[1px] bg-[#D6B477] mx-auto mt-6" />
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            tabIndex={0}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Before and after hairstyle comparison slider"
            onKeyDown={handleKeyDown}
            onMouseDown={handleMouseDown}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden select-none cursor-ew-resize border border-[#282624] shadow-2xl focus:outline-none focus:ring-1 focus:ring-[#D6B477]"
          >
            {/* After Image (Background layer - right) */}
            <div className="absolute inset-0 w-full h-full bg-[#181818]">
              <img
                src={afterImage}
                alt="After transformation"
                className="w-full h-full object-cover object-center filter contrast-105"
                draggable={false}
              />
              {/* After Label Badge */}
              <div className="absolute bottom-6 right-6 z-10 bg-[#101010]/90 backdrop-blur-md border border-[#D6B477]/40 px-3.5 py-1.5 text-[10px] tracking-widest uppercase text-[#D6B477] font-medium shadow-lg">
                {afterLabel}
              </div>
            </div>

            {/* Before Image (Clipped layer - left) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src={beforeImage}
                alt="Before transformation"
                className="w-full h-full object-cover object-center filter contrast-105"
                draggable={false}
              />
              {/* Before Label Badge */}
              <div className="absolute bottom-6 left-6 z-10 bg-[#101010]/90 backdrop-blur-md border border-[#282624] px-3.5 py-1.5 text-[10px] tracking-widest uppercase text-[#8E8A85] font-medium shadow-lg">
                {beforeLabel}
              </div>
            </div>

            {/* Divider Line & Circular Drag Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-[#D6B477] shadow-[0_0_10px_rgba(214,180,119,0.7)]" />

              {/* Circular Gold Grip Handle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#161616] border-2 border-[#D6B477] flex items-center justify-center text-[#D6B477] shadow-[0_0_20px_rgba(0,0,0,0.8)] pointer-events-auto cursor-ew-resize"
              >
                <ChevronsLeftRight size={18} />
              </motion.div>
            </div>
          </div>

          {/* Context Footer for the Comparison */}
          <div className="mt-8 p-6 bg-[#141414] border border-[#282624] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={13} className="text-[#D6B477]" />
                <h3 className="font-cinzel text-sm sm:text-base text-[#F4F0E8] uppercase tracking-wider">
                  {title}
                </h3>
              </div>
              <p className="text-xs text-[#8E8A85] font-sans">
                {treatmentDetails}
              </p>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <span className="text-[10px] tracking-ultra uppercase text-[#D6B477] font-mono">
                INTERACTIVE DEMO
              </span>
              <p className="text-[11px] text-[#8E8A85] font-sans">
                Drag handle to inspect contour
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
