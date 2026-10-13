import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#0c0c0c] text-[#F4F0E8] flex flex-col justify-between p-8 md:p-14 select-none"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center text-[10px] tracking-widestExtra uppercase text-[#8E8A85]">
            <span>{siteConfig.brand.locationShort}</span>
            <span>{siteConfig.brand.establishedYear}</span>
          </div>

          {/* Central Monogram & Brand Reveal */}
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Elegant SVG Monogram with subtle stroke animation */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-24 h-24 mb-6 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-[#D6B477]/25 animate-[spin_12s_linear_infinite]" />
              <div className="w-16 h-16 rounded-full border border-[#D6B477] flex items-center justify-center">
                <span className="font-cinzel text-xl tracking-[0.2em] text-[#D6B477] font-semibold pl-1">
                  {siteConfig.brand.monogram}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-cinzel text-lg md:text-2xl tracking-[0.35em] text-[#F4F0E8] uppercase text-center"
            >
              {siteConfig.brand.name}
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.7 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="font-sans text-[11px] tracking-ultra text-[#D6B477] uppercase text-center mt-2"
            >
              {siteConfig.brand.subheading}
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between text-[11px] font-sans tracking-widest uppercase text-[#8E8A85] mb-2">
              <span>PREPARING SALON</span>
              <span className="text-[#D6B477] font-mono">{progress}%</span>
            </div>
            <div className="h-[2px] w-full bg-[#202020] overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B39151] via-[#D6B477] to-[#E8CE9E]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
