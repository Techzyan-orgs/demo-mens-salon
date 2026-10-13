import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const TheCraft: React.FC = () => {
  const craft = siteConfig.craft;

  return (
    <section id="craft" className="relative py-24 md:py-36 bg-[#101010] text-[#F4F0E8] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D6B477]/5 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <span className="text-xs font-sans tracking-ultra uppercase text-[#D6B477] font-medium mb-3 block">
            {craft.eyebrow}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#F4F0E8] uppercase leading-[1.1]">
            {craft.heading}
          </h2>
          <div className="w-16 h-[1px] bg-[#D6B477] mt-6" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Asymmetrical Imagery Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 w-full overflow-hidden border border-[#282624] shadow-2xl">
              <motion.div
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="aspect-[4/5] overflow-hidden bg-[#181818]"
              >
                <img
                  src={craft.imagePrimary}
                  alt={siteConfig.brand.name}
                  className="w-full h-full object-cover object-center filter contrast-105"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Standards */}
          <div className="lg:col-span-6 lg:pl-6 flex flex-col justify-center">
            {/* Italic Philosophy Highlight */}
            <p className="font-serif italic text-2xl sm:text-3xl text-[#E8CE9E] leading-relaxed mb-8">
              &ldquo;{craft.italicHighlight}&rdquo;
            </p>

            {/* Paragraphs */}
            <div className="space-y-6 text-[#C5C1B8] font-sans font-light text-sm sm:text-base leading-relaxed">
              {craft.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Three Salon Standards */}
            <div className="mt-10 pt-8 border-t border-[#282624] space-y-6">
              {craft.standards.map((standard) => (
                <div key={standard.title} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border border-[#D6B477]/60 flex items-center justify-center shrink-0 mt-0.5 text-[#D6B477]">
                    <Check size={12} />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-sm text-[#F4F0E8] uppercase tracking-wider">
                      {standard.title}
                    </h3>
                    <p className="text-xs text-[#8E8A85] font-sans mt-1 leading-relaxed">
                      {standard.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Founding Creed Pull Quote */}
            <div className="mt-12 bg-[#161616] border-l-2 border-[#D6B477] p-6">
              <p className="font-serif italic text-base text-[#F4F0E8]">
                &ldquo;{craft.quote}&rdquo;
              </p>
              <span className="block text-[10px] tracking-ultra text-[#8E8A85] uppercase font-sans mt-2">
                — {craft.quoteAuthor}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
