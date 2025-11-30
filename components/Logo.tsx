
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="globeGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(50)">
          <stop offset="0%" stopColor="#0E4857" />
          <stop offset="100%" stopColor="#081C2A" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background Globe */}
      <circle cx="50" cy="50" r="48" fill="url(#globeGradient)" stroke="#0D9488" strokeWidth="1" />
      
      {/* Tech Rings */}
      <circle cx="50" cy="50" r="42" stroke="#2DD4BF" strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M50 10 A40 40 0 0 1 90 50" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
      <path d="M50 90 A40 40 0 0 1 10 50" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />

      {/* Center MB Text */}
      <text x="50" y="60" fontSize="32" fontWeight="800" fill="#99F6E4" textAnchor="middle" fontFamily="sans-serif" filter="url(#glow)">MB</text>

      {/* Currency Symbols */}
      <g className="currency-symbols" fill="#2DD4BF" fontSize="14" fontWeight="bold" textAnchor="middle">
        <text x="50" y="18" transform="rotate(0, 50, 18)">$</text>
        <text x="80" y="35" transform="rotate(0, 80, 35)">€</text>
        <text x="80" y="75" transform="rotate(0, 80, 75)" fill="#FBBF24">£</text>
        <text x="50" y="92" transform="rotate(0, 50, 92)">¥</text>
        <text x="20" y="75" transform="rotate(0, 20, 75)">₹</text>
        <text x="20" y="35" transform="rotate(0, 20, 35)" fill="#FBBF24">₽</text>
      </g>
    </svg>
  );
};
