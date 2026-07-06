'use client';

import React from 'react';
import Link from 'next/link';

export const BOOK_URL = 'https://maryjesse.glossgenius.com/booking-flow';

const LINKS = [
  { href: '/menu', label: 'The Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#E5DFD3] bg-[#FAF6EF]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-12">
        <Link href="/" className="font-serif text-2xl font-medium tracking-[0.06em] text-[#3E3833]">
          mary jesse &amp; co.
        </Link>
        <div className="hidden gap-10 items-center text-[11px] uppercase tracking-[0.2em] text-[#6E655C] md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#A97D82] transition">
              {l.label}
            </Link>
          ))}
        </div>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden bg-[#A97D82] px-6 py-2.5 text-[11px] uppercase tracking-[0.16em] text-[#FAF6EF] hover:bg-[#946A6F] transition md:inline-block"
        >
          Book Now
        </a>
        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className={`h-px w-6 bg-[#3E3833] transition ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`}></span>
          <span className={`h-px w-6 bg-[#3E3833] transition ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-px w-6 bg-[#3E3833] transition ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}></span>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-[#E5DFD3] bg-[#FAF6EF] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-[13px] uppercase tracking-[0.2em] text-[#6E655C]">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="hover:text-[#A97D82] transition">
                {l.label}
              </Link>
            ))}
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit bg-[#A97D82] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-[#FAF6EF] hover:bg-[#946A6F] transition"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
