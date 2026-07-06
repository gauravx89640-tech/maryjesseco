import Link from 'next/link';
import { BOOK_URL } from './site-nav';

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#3E3833] text-[#EFE9DE]">
      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-serif text-[26px] font-light tracking-[0.04em]">mary jesse &amp; co.</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#C9BFAE]">From Zen to Corrected Skin</p>
            <p className="mt-1 text-[11px] text-[#9C9184]">Esthetician · Hairstylist · Scalp Specialist</p>
            <div className="mt-6 space-y-2 text-[14px] text-[#DAD3C4]">
              <p><a href="tel:3035965857" className="hover:text-[#F3E7E4] transition">303.596.5857</a></p>
              <p><a href="mailto:MaryJesseandCo@gmail.com" className="hover:text-[#F3E7E4] transition">MaryJesseandCo@gmail.com</a></p>
              <p>7430 W 88th Ave Studio #207, Arvada, CO 80021</p>
            </div>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[#A97D82] px-7 py-3 text-[11px] uppercase tracking-[0.16em] text-[#FAF6EF] hover:bg-[#946A6F] transition"
            >
              Book Now
            </a>
          </div>
          <div className="space-y-3 text-[12px]">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#9C9184]">Navigate</p>
            <Link href="/menu" className="block text-[#DAD3C4] hover:text-[#F3E7E4] transition">The Menu</Link>
            <Link href="/about" className="block text-[#DAD3C4] hover:text-[#F3E7E4] transition">About</Link>
            <Link href="/gallery" className="block text-[#DAD3C4] hover:text-[#F3E7E4] transition">Gallery</Link>
            <Link href="/contact" className="block text-[#DAD3C4] hover:text-[#F3E7E4] transition">Contact</Link>
          </div>
          <div className="space-y-3 text-[12px]">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#9C9184]">Follow Along</p>
            <a href="https://www.instagram.com/maryjesseco" target="_blank" rel="noopener noreferrer" className="block text-[#DAD3C4] hover:text-[#F3E7E4] transition">Instagram</a>
            <a href="http://facebook.com/mary.jesse.169" target="_blank" rel="noopener noreferrer" className="block text-[#DAD3C4] hover:text-[#F3E7E4] transition">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#4A403B] py-6 text-center">
        <p className="text-[11px] text-[#9C9184]">© {new Date().getFullYear()} Mary Jesse &amp; Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
