'use client';

import Link from 'next/link';
import { useReveal } from '@/components/use-reveal';
import { BOOK_URL, REVIEWS } from '@/lib/site-data';

export default function HomePage() {
  useReveal();

  return (
    <main className="w-full overflow-hidden bg-[#FAF6EF] text-[#3E3833]">
      {/* Hero — color-block split */}
      <section className="grid w-full grid-cols-1 lg:min-h-[calc(100vh-81px)] lg:grid-cols-[1.05fr_1fr]">
        <div className="reveal is-visible order-2 flex flex-col justify-center bg-[#DAD3C4] px-8 py-24 lg:order-1 lg:px-16 lg:py-32">
          <span className="mb-8 text-[11px] uppercase tracking-[0.28em] text-[#8A7F72]">
            Boutique Esthetics · Arvada, CO
          </span>
          <h1 className="font-serif text-[46px] font-light leading-[1.14] text-[#3E3833] lg:text-[64px]">
            personalized skin.<br />customized facials.<br />quiet luxury.
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-8 text-[#5E564D]">
            A boutique studio for facials, Japanese Head Spa treatments, brows, and lashes — every service built around your skin, your scalp, and your goals.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A97D82] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#FAF6EF] hover:bg-[#946A6F] transition"
            >
              Book Your First Appointment
            </a>
            <Link
              href="/menu"
              className="inline-block border border-[#8A7F72] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#3E3833] hover:bg-[#CFC7B6] transition"
            >
              View the Menu
            </Link>
          </div>
        </div>
        <div className="relative order-1 min-h-[520px] overflow-hidden bg-[#C9BFAE] lg:order-2 lg:min-h-0">
          <img
            src="/portrait3.jpg"
            alt="Mary Jesse"
            className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
          />
        </div>
      </section>

      {/* Menu teaser — rose band */}
      <section className="relative w-full overflow-hidden bg-[#6E4A50] py-24">
        <div className="reveal mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-[#D9BEC0]">The Facial Menu</span>
          <h2 className="font-serif text-[34px] font-light leading-[1.15] text-[#F3E7E4] lg:text-[44px]">
            choose your experience.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-8 text-[#E4D2D0]">
            Start with The Signature — your fully customized facial — then choose the add-on that matches your skin goals. Build the experience that&apos;s right for you.
          </p>
          <Link
            href="/menu"
            className="mt-9 inline-block bg-[#F3E7E4] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#3E3833] hover:bg-white transition"
          >
            Explore the Full Menu
          </Link>
        </div>
      </section>

      {/* Meet Mary snippet */}
      <section className="w-full bg-[#FAF6EF]">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-stretch lg:grid-cols-[1fr_1.1fr]">
          <div className="group relative order-2 min-h-[480px] overflow-hidden bg-[#C9BFAE] lg:order-1">
            <img
              src="/mary-meet-playful.jpeg"
              alt="Mary Jesse"
              className="group-hover-zoom absolute inset-0 h-full w-full object-cover object-[58%_center]"
            />
          </div>
          <div className="reveal order-1 flex flex-col justify-center px-10 py-20 lg:order-2 lg:px-16">
            <span className="mb-5 text-[11px] uppercase tracking-[0.24em] text-[#A97D82]">Meet Mary</span>
            <h2 className="font-serif text-[32px] font-light leading-[1.12] text-[#3E3833] lg:text-[42px]">
              beauty that feels like<br />a friend, not a clinic.
            </h2>
            <p className="mt-8 max-w-lg text-[14px] leading-8 text-[#6E655C]">
              Mary is a licensed esthetician serving the Denver Metro area, specializing in acne, aging, sensitive, and stressed skin. Every service is personalized — because skin is skin, and she treats it all. Clients enter as a guest and leave as a friend.
            </p>
            <Link
              href="/about"
              className="mt-8 w-fit border-b border-[#A97D82] pb-1 text-[11px] uppercase tracking-[0.16em] text-[#A97D82] hover:opacity-70 transition"
            >
              Meet Mary
            </Link>
          </div>
        </div>
      </section>

      {/* Pull quote — dark band */}
      <section className="relative w-full overflow-hidden bg-[#4A403B] py-28">
        <div className="reveal mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-serif text-[32px] font-light italic leading-[1.3] text-[#EFE9DE] lg:text-[44px]">
            &ldquo;Beauty is an inside feeling — it&apos;s about feeling your absolute best.&rdquo;
          </p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.24em] text-[#C9BFAE]">— Mary Jesse</p>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="w-full bg-[#EFE9DE] py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="reveal mb-12 flex flex-wrap items-end gap-x-6 gap-y-2">
            <span className="w-full text-[11px] uppercase tracking-[0.24em] text-[#A97D82]">Client Love</span>
            <h2 className="font-serif text-[34px] font-light leading-[1.05] text-[#3E3833] lg:text-[48px] lg:leading-none">
              the afterglow, in their words.
            </h2>
            <span className="pb-1 text-[13px] text-[#6E655C]">185 Google reviews ★★★★★</span>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#E5DFD3] md:grid-cols-3">
            {REVIEWS.slice(0, 3).map((review, idx) => (
              <div
                key={idx}
                className="reveal flex flex-col bg-[#FAF6EF] p-10"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="mb-5 text-[#A97D82]">★★★★★</div>
                <p className="flex-1 font-serif text-[19px] font-light italic leading-8 text-[#3E3833]">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-[#A97D82]">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio teaser banner */}
      <section className="w-full bg-[#FAF6EF]">
        <Link href="/gallery" className="group relative block h-[340px] w-full overflow-hidden md:h-[460px]">
          <img
            src="/studio-neon.jpeg"
            alt="Mary Jesse & Co. treatment room with neon sign"
            className="group-hover-zoom absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3E3833]/55 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="font-serif text-[26px] font-light italic text-[#FAF6EF] md:text-[34px]">step inside the studio</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#EFE9DE]/90">View the Gallery →</p>
          </div>
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-[#DAD3C4] py-28">
        <div className="reveal mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-[#A97D82]">Get Started</span>
          <h2 className="font-serif text-[36px] font-light leading-[1.1] text-[#3E3833] lg:text-[48px]">ready when you are.</h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-8 text-[#5E564D]">
            Book a personalized consultation with Mary today, or reach out with a question — we&apos;d love to help you build a plan for skin you actually feel confident in.
          </p>
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
              Contact &amp; Location
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
