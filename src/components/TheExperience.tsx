import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Coffee, Sparkles, Scissors, Clock, Compass } from 'lucide-react';
import { siteConfig, ExperiencePillar } from '../data/siteConfig';

export const TheExperience: React.FC = () => {
  const { eyebrow, heading, description, pillars, bannerImage, quote } = siteConfig.experience;

  const getIcon = (name: ExperiencePillar['iconName']) => {
    switch (name) {
      case 'Shield': return <Shield size={22} className="text-[#D6B477]" />;
      case 'Coffee': return <Coffee size={22} className="text-[#D6B477]" />;
      case 'Sparkles': return <Sparkles size={22} className="text-[#D6B477]" />;
      case 'Scissors': return <Scissors size={22} className="text-[#D6B477]" />;
      case 'Clock': return <Clock size={22} className="text-[#D6B477]" />;
      default: return <Compass size={22} className="text-[#D6B477]" />;
    }
  };

  return (
    <section id="experience" className="relative py-24 md:py-36 bg-[#101010] text-[#F4F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
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

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar: ExperiencePillar, idx: number) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#141414] border border-[#242220] hover:border-[#D6B477]/40 p-8 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-[#1a1a1a] rounded-full border border-[#2a2825] group-hover:border-[#D6B477]/40 transition-colors">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="font-mono text-xs text-[#8E8A85] group-hover:text-[#D6B477] transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg text-[#F4F0E8] uppercase tracking-wide mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#8E8A85] font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222] flex items-center justify-between">
                <span className="text-[9px] tracking-ultra uppercase text-[#D6B477]">
                  SALON STANDARD
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D6B477]/30 group-hover:bg-[#D6B477] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Editorial Atmosphere Cinematic Banner */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] overflow-hidden border border-[#282624] shadow-2xl">
          <img
            src={bannerImage}
            alt="Stoic Men's Salon Atmosphere"
            className="w-full h-full object-cover filter brightness-75 contrast-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-[#101010]/60" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <div className="max-w-2xl bg-[#101010]/80 backdrop-blur-md border border-[#D6B477]/30 p-6 sm:p-8">
              <span className="font-serif italic text-lg sm:text-2xl text-[#E8CE9E] block">
                &ldquo;{quote}&rdquo;
              </span>
              <span className="text-[10px] tracking-ultra text-[#8E8A85] uppercase font-sans mt-3 block">
                — {siteConfig.brand.name} PHILOSOPHY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
