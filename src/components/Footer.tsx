import React, { useState } from 'react';
import { ArrowUp, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { BrandIcon } from './BrandIcon';

export const Footer: React.FC = () => {
  const {
    summary,
    quickLinksTitle,
    legalTitle,
    socialTitle,
    newsletterTitle,
    newsletterDesc,
    newsletterPlaceholder,
    newsletterButton,
    copyright,
    curatedBy,
    fictionalNotice,
    socialLinks,
    backToTopLabel
  } = siteConfig.footer;

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090909] text-[#F4F0E8] border-t border-[#222] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Grid: Brand & Gazette Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#202020]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#D6B477] flex items-center justify-center">
                <span className="font-cinzel text-xs text-[#D6B477] font-semibold">
                  {siteConfig.brand.monogram}
                </span>
              </div>
              <span className="font-cinzel text-lg tracking-[0.25em] text-[#F4F0E8] uppercase">
                {siteConfig.brand.name}
              </span>
            </div>
            <p className="text-xs text-[#8E8A85] font-sans leading-relaxed max-w-sm">
              {summary}
            </p>
            <div className="pt-2 text-[10px] tracking-ultra text-[#D6B477] uppercase font-mono">
              {siteConfig.brand.locationShort} • {siteConfig.brand.establishedYear}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] tracking-ultra text-[#D6B477] uppercase block">
              {quickLinksTitle}
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#8E8A85]">
              {siteConfig.navigation.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D6B477] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gazette Newsletter Signup */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] tracking-ultra text-[#D6B477] uppercase block">
              {newsletterTitle}
            </span>
            <p className="text-xs text-[#8E8A85] font-sans">
              {newsletterDesc}
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder={newsletterPlaceholder}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#141414] border border-[#282624] text-xs text-[#F4F0E8] px-3.5 py-2.5 focus:outline-none focus:border-[#D6B477] flex-1 placeholder-[#555]"
                />
                <button
                  type="submit"
                  className="bg-[#D6B477] text-[#101010] hover:bg-[#E8CE9E] text-xs font-sans uppercase tracking-widest px-4 py-2.5 transition-colors font-medium shrink-0 cursor-pointer"
                >
                  {newsletterButton}
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs text-[#78d689] bg-[#142017] p-3 border border-[#234027]">
                <CheckCircle size={14} />
                <span>Invitation dispatch recorded. Welcome to the Guild.</span>
              </div>
            )}
          </div>
        </div>

        {/* Social Links & Back to Top Strip */}
        <div className="py-8 border-b border-[#202020] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs text-[#8E8A85]">
            <span className="text-[10px] tracking-ultra text-[#8E8A85] uppercase">
              {socialTitle || legalTitle}:
            </span>
            <div className="flex items-center gap-3.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel || `Follow Stoic Men's Salon on ${social.name}`}
                  title={social.name}
                  className="transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D6B477] rounded-full inline-flex"
                >
                  <BrandIcon platform={social.icon || social.name} size={36} />
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#D6B477] hover:text-[#E8CE9E] transition-colors group cursor-pointer focus:outline-none"
          >
            <span>{backToTopLabel}</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Legal & Fictional Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#555] font-sans text-center md:text-left">
          <div>
            <p>{copyright}</p>
            <p className="text-[10px] text-[#444] mt-0.5">{curatedBy}</p>
          </div>
          <div className="max-w-md text-[10px] text-[#444] italic">
            {fictionalNotice}
          </div>
        </div>
      </div>
    </footer>
  );
};
