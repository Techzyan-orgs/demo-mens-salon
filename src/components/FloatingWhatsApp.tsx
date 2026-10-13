import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';
import { BrandIcon } from './BrandIcon';

export const FloatingWhatsApp: React.FC = () => {
  const { phoneNumberDigits, defaultMessage, floatingTooltip } = siteConfig.whatsapp;
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumberDigits}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Concierge WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center"
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="mr-3 hidden sm:block bg-[#161616] text-[#F4F0E8] border border-[#25D366]/40 px-3.5 py-2 shadow-2xl text-xs font-sans whitespace-nowrap pointer-events-none rounded-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[#F4F0E8] font-medium">{floatingTooltip}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="rounded-full shadow-[0_6px_25px_rgba(37,211,102,0.45)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#101010] inline-flex items-center justify-center p-0.5"
        aria-label="Direct Concierge WhatsApp"
      >
        <BrandIcon platform="whatsapp" size={52} />
      </motion.a>
    </aside>
  );
};
