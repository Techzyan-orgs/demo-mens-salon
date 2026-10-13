import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { siteConfig, TestimonialItem } from '../data/siteConfig';

export const Testimonials: React.FC = () => {
  const { eyebrow, heading, items } = siteConfig.testimonials;

  return (
    <section className="py-24 bg-[#0d0d0d] text-[#F4F0E8] border-t border-[#242220] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-ultra uppercase text-[#D6B477] font-medium mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#F4F0E8] uppercase">
            {heading}
          </h2>
          <div className="w-12 h-[1px] bg-[#D6B477] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#141414] border border-[#242220] p-8 flex flex-col justify-between relative group hover:border-[#D6B477]/30 transition-colors"
            >
              <Quote size={28} className="text-[#D6B477]/30 mb-6 group-hover:text-[#D6B477]/60 transition-colors" />

              <p className="font-serif italic text-base sm:text-lg text-[#C5C1B8] leading-relaxed mb-8 flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-[#202020]">
                <h4 className="font-cinzel text-sm text-[#F4F0E8] uppercase tracking-wider">
                  {item.author}
                </h4>
                <p className="text-[11px] text-[#8E8A85] font-sans mt-0.5">
                  {item.role}
                </p>
                <span className="text-[10px] tracking-ultra uppercase text-[#D6B477] block mt-1">
                  {item.publication}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
