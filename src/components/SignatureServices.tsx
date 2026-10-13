import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig, ServiceItem } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

interface SignatureServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const SignatureServices: React.FC<SignatureServicesProps> = ({ onSelectService }) => {
  const { eyebrow, heading, description, currencySymbol, items, note } = siteConfig.services;
  const [expandedId, setExpandedId] = useState<string | null>(items[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="services" className="relative py-24 md:py-36 bg-[#0c0c0c] text-[#F4F0E8] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D6B477]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#242220]">
          <div className="max-w-2xl">
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

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((service: ServiceItem, index: number) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between bg-[#141414] border transition-all duration-300 overflow-hidden ${
                  service.featured
                    ? 'border-[#D6B477]/50 shadow-[0_10px_40px_rgba(214,180,119,0.08)]'
                    : 'border-[#242220] hover:border-[#D6B477]/30'
                }`}
              >
                {/* Image & Header Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#181818] group">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center filter grayscale-[15%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[#101010]/85 backdrop-blur-md border border-[#D6B477]/40 px-3 py-1 text-[10px] tracking-wider uppercase text-[#D6B477] font-medium">
                      <Sparkles size={10} />
                      <span>{service.badge}</span>
                    </div>
                  )}

                  {/* Duration Pill */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-[#101010]/85 backdrop-blur-md border border-[#282624] px-2.5 py-1 text-[10px] tracking-wider text-[#C5C1B8]">
                    <Clock size={11} className="text-[#D6B477]" />
                    <span>{service.duration}</span>
                  </div>

                  {/* Title & Price overlay */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                    <div>
                      <h3 className="font-cinzel text-xl sm:text-2xl text-[#F4F0E8] uppercase tracking-wide">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#D6B477] tracking-wider font-sans mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-cinzel text-2xl sm:text-3xl font-semibold text-[#D6B477]">
                        {currencySymbol}{service.priceINR.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[#C5C1B8] font-sans font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Accordion / Expandable Ritual Steps */}
                  <div className="border-t border-[#242220] pt-4 mb-6">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="flex items-center justify-between w-full text-left text-xs uppercase tracking-widest text-[#8E8A85] hover:text-[#D6B477] transition-colors py-1 focus:outline-none"
                    >
                      <span>Service Steps ({service.ritualSteps.length})</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 space-y-2 text-xs text-[#8E8A85] font-sans list-none overflow-hidden"
                        >
                          {service.ritualSteps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-[#D6B477] font-mono text-[10px] mt-0.5">0{idx + 1}.</span>
                              <span className="text-[#C5C1B8]">{step}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Booking Trigger */}
                  <div className="pt-2">
                    <MagneticButton
                      onClick={() => onSelectService(service.id)}
                      variant={service.featured ? "primary" : "secondary"}
                      className="w-full py-3.5 text-xs tracking-widestExtra"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>{siteConfig.services.ctaLabel}</span>
                        <ArrowRight size={14} />
                      </span>
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note strip */}
        <div className="mt-12 p-6 bg-[#141414] border border-[#242220] flex items-center justify-center text-center">
          <p className="text-xs text-[#8E8A85] font-sans tracking-wide">
            <span className="text-[#D6B477] font-medium mr-1.5">Note:</span>
            {note}
          </p>
        </div>
      </div>
    </section>
  );
};
