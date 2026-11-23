import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { PROFILE_DATA } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Karya', href: '#karya' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Kontak', href: '#kontak' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#090A0D]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <BrandLogo />

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi utama">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded px-1 py-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Tombol Aksi Utama */}
        <div className="hidden md:flex items-center">
          <a
            href={PROFILE_DATA.contacts.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F3F4F6] text-[#090A0D] text-sm font-medium hover:bg-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <span>Hubungi Telegram</span>
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          className="md:hidden p-2 rounded-lg text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#161920] transition-colors duration-200"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" strokeWidth={1.5} />
          ) : (
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-[#101216] border-b border-white/[0.08] px-6 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PROFILE_DATA.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#3B82F6] text-white text-sm font-medium hover:bg-[#2563EB] transition-colors duration-200"
            >
              <span>Hubungi Telegram</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
