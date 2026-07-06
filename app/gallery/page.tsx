'use client';

import Link from 'next/link';
import { useReveal } from '@/components/use-reveal';
import { BOOK_URL, GALLERY_CLIPS } from '@/lib/site-data';

const PHOTOS = [
  { src: '/facial-treatment.jpg', label: 'In Treatment' },
  { src: '/headspa.jpeg', label: 'Head Spa Ritual' },
  { src: '/led.jpeg', label: 'Light Therapy' },
  { src: '/scalp.jpeg', label: 'Scalp Analysis' },
  { src: '/facial.jpeg', label: 'Custom Facial' },
  { src: '/IMG_6267.jpeg', label: 'The Details' },
];

export default function GalleryPage() {
  useReveal();

  return (
    <main className="w-full overflow-hidden bg-[#FAF6EF] text-[#3E3833]">
      {/* Header */}
      <section className="w-full bg-[#DAD3C4] py-24 lg:py-28">
        <div className="reveal mx-auto max-w-[1500px] px-6 lg:px-12">
          <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-[#A97D82]">The Studio</span>
          <h1 className="max-w-3xl font-serif text-[44px] font-light leading-[1.08] text-[#3E3833] lg:text-[68px]">
            a studio with a softer tempo.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#5E564D]">
            Warm light, quiet mornings, and treatment spaces that make every appointment feel like a ritual. Step inside Mary Jesse &amp; Co.
          </p>
        </div>
      </section>

      {/* Video reel */}
      <section className="w-full py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY_CLIPS.map((clip, idx) => (
              <div
                key={clip.src}
                className="reveal group relative aspect-[9/16] overflow-hidden bg-[#DAD3C4]"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {clip.type === 'video' ? (
                  <video autoPlay muted loop playsInline preload="metadata" className="group-hover-zoom h-full w-full object-cover">
                    <source src={clip.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={clip.src} alt={clip.label} className="group-hover-zoom h-full w-full object-cover" />
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3E3833]/70 to-transparent p-4 pt-10">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#FAF6EF]">{clip.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neon banner */}
      <section className="w-full">
        <div className="reveal group relative h-[340px] w-full overflow-hidden md:h-[520px]">
          <img
            src="/studio-neon.jpeg"
            alt="Mary Jesse & Co. treatment room with neon sign"
            className="group-hover-zoom absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3E3833]/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="font-serif text-[26px] font-light italic text-[#FAF6EF] md:text-[34px]">where self-care feels like home.</p>
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="w-full py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="reveal mb-12 max-w-md">
            <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-[#A97D82]">In the Room</span>
            <h2 className="font-serif text-[32px] font-light leading-[1.12] text-[#3E3833] lg:text-[42px]">the work, up close.</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {PHOTOS.map((photo, idx) => (
              <div
                key={photo.src}
                className="reveal group relative aspect-[3/4] overflow-hidden bg-[#DAD3C4]"
                style={{ transitionDelay: `${(idx % 3) * 90}ms` }}
              >
                <img src={photo.src} alt={photo.label} className="group-hover-zoom h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3E3833]/65 to-transparent p-4 pt-10">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#FAF6EF]">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#DAD3C4] py-24">
        <div className="reveal mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-serif text-[32px] font-light leading-[1.15] text-[#3E3833] lg:text-[44px]">
            come experience it yourself.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A97D82] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#FAF6EF] hover:bg-[#946A6F] transition"
            >
              Book Your Appointment
            </a>
            <Link
              href="/contact"
              className="inline-block border border-[#8A7F72] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#3E3833] hover:bg-[#CFC7B6] transition"
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
