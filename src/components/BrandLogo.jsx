import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function BrandLogo({ size = 'md' }) {
  const [imgError, setImgError] = useState(false);

  const boxSize = size === 'sm' ? 'w-8 h-8' : 'w-9 h-9';

  return (
    <a
      href="#top"
      className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg"
    >
      <div
        className={`${boxSize} rounded-lg bg-[#161920] border border-white/[0.1] flex items-center justify-center overflow-hidden transition-colors duration-200 group-hover:border-[#3B82F6]/60`}
      >
        {!imgError ? (
          <img
            src={PROFILE_DATA.logoPath}
            alt={`Logo ${PROFILE_DATA.brandName}`}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-1"
          />
        ) : (
          <svg
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
          >
            <rect width="36" height="36" rx="8" fill="#161920" />
            <path
              d="M10 11V25M10 18H17M17 11V25"
              stroke="#F3F4F6"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 11V25M26.5 11.5L21.5 18L26.5 24.5"
              stroke="#3B82F6"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <div className="flex flex-col">
        <span className="text-[15px] font-medium tracking-tight text-[#F3F4F6] leading-none">
          {PROFILE_DATA.brandName}
        </span>
        <span className="text-[11px] font-mono text-[#6B7280] mt-1 leading-none">
          {PROFILE_DATA.handle}
        </span>
      </div>
    </a>
  );
}
