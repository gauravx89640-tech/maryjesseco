'use client';

import Link from 'next/link';
import { useReveal } from '@/components/use-reveal';
import { BOOK_URL } from '@/lib/site-data';

export default function AboutPage() {
  useReveal();

  return (
    <main className="w-full overflow-hidden bg-[#FAF6EF] text-[#3E3833]">
      {/* Hero split — headshot + intro */}
      <section className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="reveal order-2 flex flex-col justify-center bg-[#DAD3C4] px-10 py-20 lg:order-1 lg:px-16 lg:py-28">
          <span className="mb-5 text-[11px] uppercase tracking-[0.24em] text-[#A97D82]">Meet Mary</span>
          <h1 className="font-serif text-[40px] font-light leading-[1.1] text-[#3E3833] lg:text-[58px]">
            beauty that feels like<br />a friend, not a clinic.
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-8 text-[#5E564D]">
            Mary Jesse &amp; Co. is a boutique esthetics studio in Arvada offering customized facials and luxury Japanese Head Spa treatments focused on total skin and scalp health.
          </p>
        </div>
        <div className="relative order-1 min-h-[460px] overflow-hidden bg-[#1a1817] lg:order-2">
          <img
            src="/portrait2.jpg"
            alt="Mary Jesse, licensed esthetician"
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          />
        </div>
      </section>

      {/* Story */}
      <section className="w-full bg-[#FAF6EF] py-24">
        <div className="reveal mx-auto max-w-3xl px-6 text-center lg:px-10">
          <div className="space-y-6 text-[16px] leading-9 text-[#5E564D]">
            <p>
              Mary is a licensed esthetician serving the Denver Metro area, specializing in acne, aging, sensitive, and stressed skin. Every service is personalized — because skin is skin, and she treats it all.
            </p>
            <p>
              Her approach is results-minded but never clinical. There&apos;s no upselling and no rushing — just thoughtful, one-on-one care designed around how your skin actually feels: calmer, clearer, healthier.
            </p>
            <p className="font-serif text-[24px] font-light italic text-[#3E3833]">
              &ldquo;At Mary Jesse &amp; Co., clients enter as a guest and leave as a friend.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* At-work portrait + specialties */}
      <section className="w-full bg-[#EFE9DE]">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-stretch lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal order-2 flex flex-col justify-center px-10 py-20 lg:order-1 lg:px-16">
            <span className="mb-5 text-[11px] uppercase tracking-[0.24em] text-[#A97D82]">Her Craft</span>
            <h2 className="font-serif text-[32px] font-light leading-[1.12] text-[#3E3833] lg:text-[42px]">
              personalized, every time.
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                'Customized facials for acne, aging, sensitive & stressed skin',
                'Japanese Head Spa — a facial for your scalp',
                'Dermaplaning, micro infusion, peels & microneedling',
                'Brows, lashes, and professional skincare coaching',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] leading-8 text-[#5E564D]">
                  <span className="mt-px text-[#A97D82]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/menu"
              className="mt-9 w-fit bg-[#A97D82] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#FAF6EF] hover:bg-[#946A6F] transition"
            >
              View the Menu
            </Link>
          </div>
          <div className="group relative order-1 min-h-[520px] overflow-hidden bg-[#C9BFAE] lg:order-2">
            <img
              src="/portrait1.jpg"
              alt="Mary Jesse in her studio"
              className="group-hover-zoom absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden bg-[#6E4A50] py-24">
        <div className="reveal mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-serif text-[32px] font-light leading-[1.15] text-[#F3E7E4] lg:text-[44px]">
            let&apos;s find what works for you.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-8 text-[#E4D2D0]">
            Book a personalized consultation and we&apos;ll build a plan for skin you actually feel confident in.
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block bg-[#F3E7E4] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#3E3833] hover:bg-white transition"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
