import React from 'react';

export interface BrandIconProps {
  platform: 'facebook' | 'instagram' | 'whatsapp' | string;
  size?: number;
  className?: string;
}

export const BrandIcon: React.FC<BrandIconProps> = ({ platform, size = 38, className = '' }) => {
  const p = platform.toLowerCase();

  // Official WhatsApp Logo from public/icons/whatsapp.svg
  if (p.includes('whatsapp') || p.includes('wa')) {
    return (
      <span
        style={{ width: size, height: size }}
        className={`inline-flex items-center justify-center rounded-full overflow-hidden shadow-[0_3px_12px_rgba(37,211,102,0.35)] transition-all duration-300 ${className}`}
        title="WhatsApp"
      >
        <img
          src="/icons/whatsapp.svg"
          alt="WhatsApp"
          width={size}
          height={size}
          className="w-full h-full object-contain block"
          loading="eager"
        />
      </span>
    );
  }

  // Official Facebook Logo from public/icons/facebook.svg
  if (p.includes('fb') || p.includes('facebook')) {
    return (
      <span
        style={{ width: size, height: size }}
        className={`inline-flex items-center justify-center rounded-full overflow-hidden shadow-[0_3px_12px_rgba(24,119,242,0.35)] transition-all duration-300 ${className}`}
        title="Facebook"
      >
        <img
          src="/icons/facebook.svg"
          alt="Facebook"
          width={size}
          height={size}
          className="w-full h-full object-contain block"
          loading="eager"
        />
      </span>
    );
  }

  // Official Instagram Logo from public/icons/instagram.svg
  if (p.includes('insta') || p.includes('instagram')) {
    const radius = Math.round(size * 0.26);
    return (
      <span
        style={{
          width: size,
          height: size,
          borderRadius: `${radius}px`,
        }}
        className={`inline-flex items-center justify-center overflow-hidden shadow-[0_3px_12px_rgba(214,36,159,0.35)] transition-all duration-300 ${className}`}
        title="Instagram"
      >
        <img
          src="/icons/instagram.svg"
          alt="Instagram"
          width={size}
          height={size}
          className="w-full h-full object-contain block"
          loading="eager"
        />
      </span>
    );
  }

  return null;
};
