import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#101010]">
      {/* Background Image with Cinematic Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.12, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 0.72 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={siteConfig.hero.backgroundImage}
            alt={siteConfig.brand.name}
            className="w-full h-full object-cover object-center filter contrast-[105%] brightness-[82%]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Deep shadows, edge vignettes, gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/60 to-[#101010]/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#101010]/40 to-[#101010]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-transparent to-[#101010]/80" />
      </div>

      {/* Decorative Golden Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D6B477]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Empty Top Space for fixed nav */}
      <div className="h-28 md:h-36" />

      {/* Main Editorial Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-8">
        <div className="max-w-4xl">
          {/* Eyebrow / Provenance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6 border border-[#D6B477]/30 bg-[#141414]/70 backdrop-blur-md px-4 py-1.5 rounded-full"
          >
            <Sparkles size={12} className="text-[#D6B477]" />
            <span className="font-sans text-[10px] md:text-xs tracking-ultra uppercase text-[#D6B477] font-medium">
              {siteConfig.hero.eyebrow}
            </span>
          </motion.div>

          {/* Oversized Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F4F0E8] leading-[1.05] uppercase"
          >
            {siteConfig.hero.headlinePart1}{' '}
            <span className="gold-gradient-text italic font-serif font-light lowercase">
              {siteConfig.hero.headlineAccent}
            </span>
          </motion.h1>

          {/* Minimalist Subtext / Manifesto */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-[#C5C1B8] font-sans font-light leading-relaxed max-w-2xl"
          >
            {siteConfig.hero.description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <MagneticButton
              onClick={onOpenBooking}
              variant="primary"
              className="py-4 px-9 text-xs tracking-widestExtra"
            >
              {siteConfig.hero.primaryCta}
            </MagneticButton>

            <MagneticButton
              href="#craft"
              variant="secondary"
              className="py-4 px-9 text-xs tracking-widestExtra"
            >
              {siteConfig.hero.secondaryCta}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Highlights / Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-16 md:mt-24 pt-8 border-t border-[#282624]/80 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {siteConfig.hero.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-cinzel text-xl md:text-2xl font-semibold text-[#D6B477]">
                {stat.value}
              </span>
              <span className="text-[11px] font-sans tracking-wider uppercase text-[#8E8A85] mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 pb-8 flex flex-col items-center justify-center text-[#8E8A85] pointer-events-auto"
      >
        <a
          href="#craft"
          className="flex flex-col items-center gap-2 group focus:outline-none"
          aria-label={siteConfig.hero.scrollText}
        >
          <span className="text-[9px] tracking-ultra uppercase text-[#8E8A85] group-hover:text-[#D6B477] transition-colors">
            {siteConfig.hero.scrollText}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-[#D6B477]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
