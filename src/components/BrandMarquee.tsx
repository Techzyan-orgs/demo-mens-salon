import React from 'react';
import { siteConfig } from '../data/siteConfig';

export const BrandMarquee: React.FC = () => {
  const items = siteConfig.marquee.items;
  // Duplicate for seamless looping
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-[#141414] border-y border-[#282624] py-4 select-none">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#101010] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#101010] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8 items-center">
        {duplicatedItems.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center space-x-8">
            <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] text-[#C5C1B8] uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6B477]/80 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
};
