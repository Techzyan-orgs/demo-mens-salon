import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';
import { BrandIcon } from './BrandIcon';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 isolate transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#101010]/95 backdrop-blur-md border-b border-[#282624]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-gradient-to-b from-[#101010]/90 via-[#101010]/60 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label={`${siteConfig.brand.name} Home`}
          >
            <div className="w-8 h-8 shrink-0 rounded-full border border-[#D6B477]/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-[#D6B477] bg-[#101010]">
              <span className="font-cinzel text-xs font-semibold text-[#D6B477] tracking-widest pl-0.5">
                {siteConfig.brand.monogram}
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.14em] text-white whitespace-nowrap antialiased group-hover:text-[#D6B477] transition-colors"
                style={{
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  textRendering: 'optimizeLegibility',
                }}
              >
                {siteConfig.brand.name}
              </span>
              <span
                className="text-[8.5px] sm:text-[9px] tracking-widest text-[#D6B477] uppercase font-mono whitespace-nowrap hidden sm:inline"
                style={{
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  textRendering: 'optimizeLegibility',
                }}
              >
                {siteConfig.brand.locationShort}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links: Uniform spacing and strict single-line bounds */}
          <nav className="hidden lg:flex items-center justify-center gap-3.5 xl:gap-5 2xl:gap-7 text-[11px] xl:text-xs uppercase tracking-[0.1em] xl:tracking-[0.16em] font-sans font-medium whitespace-nowrap">
            {siteConfig.navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#C5C1B8] hover:text-[#D6B477] transition-colors duration-200 relative py-1 group focus:outline-none focus:text-[#D6B477] whitespace-nowrap inline-flex items-center"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D6B477] transition-all duration-300 group-hover:w-full pointer-events-none" />
              </a>
            ))}
          </nav>

          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block shrink-0">
              <MagneticButton
                onClick={onOpenBooking}
                variant="primary"
                className="py-2.5 px-4 xl:px-5 text-[10px] xl:text-[11px] tracking-widest whitespace-nowrap"
              >
                {siteConfig.navigation.ctaLabel}
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F4F0E8] hover:text-[#D6B477] focus:outline-none focus:ring-1 focus:ring-[#D6B477] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0d0d0d] pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col space-y-6 pt-4">
              <span className="text-[10px] tracking-ultra text-[#D6B477] uppercase border-b border-[#242220] pb-2">
                SALON DIRECTORY
              </span>
              {siteConfig.navigation.links.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center justify-between w-full text-left font-cinzel text-xl text-[#F4F0E8] hover:text-[#D6B477] transition-colors py-2 border-b border-[#1f1d1b]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={18} className="text-[#8E8A85]" />
                  </button>
                </motion.div>
              ))}

              <div className="pt-4">
                <MagneticButton
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  variant="primary"
                  className="w-full py-4 text-center text-xs tracking-widest"
                >
                  {siteConfig.navigation.ctaLabel}
                </MagneticButton>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="border-t border-[#242220] pt-6 mt-8 space-y-3 text-xs text-[#8E8A85]">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#D6B477]" />
                <span>{siteConfig.visit.addressLine1}, {siteConfig.visit.cityPin}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#D6B477]" />
                <span>{siteConfig.visit.hours[0].days}: {siteConfig.visit.hours[0].time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#D6B477]" />
                <a href={`tel:${siteConfig.visit.phone}`} className="hover:text-[#D6B477] transition-colors">
                  {siteConfig.visit.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {siteConfig.footer.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel || social.name}
                    className="transition-transform duration-200 hover:scale-110 active:scale-95 inline-flex"
                  >
                    <BrandIcon platform={social.icon || social.name} size={30} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
