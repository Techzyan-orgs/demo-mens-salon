import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  strength?: number;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
  strength = 0.25,
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMagneticEnabled = Boolean(siteConfig.features?.enableMagneticButtons);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isMagneticEnabled || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    if (isMagneticEnabled) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const baseStyles = "relative inline-flex items-center justify-center font-sans uppercase tracking-[0.2em] text-xs font-semibold px-8 py-4 transition-all duration-300 overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D6B477] focus:ring-offset-2 focus:ring-offset-[#101010]";
  
  const variantStyles = {
    primary: "bg-[#D6B477] text-[#101010] hover:bg-[#E8CE9E] shadow-[0_4px_20px_rgba(214,180,119,0.25)] border border-[#D6B477]",
    secondary: "bg-[#181818] text-[#F4F0E8] border border-[#2a2825] hover:border-[#D6B477] hover:bg-[#202020]",
    outline: "border border-[#D6B477] text-[#D6B477] hover:bg-[#D6B477] hover:text-[#101010]",
    ghost: "text-[#C5C1B8] hover:text-[#D6B477] px-4 py-2"
  };

  if (href) {
    return (
      <motion.a
        ref={buttonRef}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={isMagneticEnabled ? { x: position.x, y: position.y } : undefined}
        transition={isMagneticEnabled ? { type: "spring", stiffness: 150, damping: 15, mass: 0.1 } : undefined}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        aria-label={ariaLabel}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        {variant === 'primary' && (
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out pointer-events-none" />
        )}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={isMagneticEnabled ? { x: position.x, y: position.y } : undefined}
      transition={isMagneticEnabled ? { type: "spring", stiffness: 150, damping: 15, mass: 0.1 } : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out pointer-events-none" />
      )}
    </motion.button>
  );
};
