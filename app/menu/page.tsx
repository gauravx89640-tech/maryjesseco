'use client';

import { useReveal } from '@/components/use-reveal';
import {
  BOOK_URL,
  SIGNATURE_INCLUDES,
  SIGNATURE_PRICE,
  HEADSPA,
  HEADSPA_INCLUDES,
  HEADSPA_90MIN_EXTRAS,
  TIERS,
  TEEN_FACIAL_PRICE,
  BROWS,
  LED_THERAPY,
  REFLEXOLOGY,
} from '@/lib/site-data';

/**
 * Menu colour system — one block per category, all drawn from Mary's
 * mauve / tan / cream palette so the page reads as a single family.
 * Two dark anchors carry the hero services; everything else is a tint.
 * Change a value here to restyle a whole category.
 */
const C = {
  foundationDark: '#3E3833', // Signature Facial — "black" block
  foundationPanel: '#EFE9DE', // its includes panel (soft sand)
  crownDark: '#6E4A50', // Japanese Head Spa — mauve, same treatment
  crownPanel: '#F3E7E4', // its includes panel (pale rose)
  tierRamp: ['#FAF6EF', '#EFE9DE', '#E5DFD3', '#DAD3C4'], // add-ons: cream → taupe
  teen: '#F3E7E4', // pale rose
  brows: '#EFE9DE', // soft sand
  led: '#DAD3C4', // warm taupe
  reflexology: '#E4D2D0', // dusty rose tint
  closer: '#4A403B', // charcoal brown — bookends the black Foundation
};

/** Shared row for the simple priced categories. */
function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-[#3E3833]/12 py-4">
      <span className="text-[14px] text-[#3E3833]">{label}</span>
      <span className="font-serif text-[19px] font-light text-[#3E3833]">{price}</span>
    </div>
  );
}

/** Shared wrapper so every category block gets identical treatment. */
function CategoryBlock({
  eyebrow,
  heading,
  bg,
  children,
}: {
  eyebrow: string;
  heading: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div className="reveal mt-6 px-8 py-11 lg:px-12" style={{ backgroundColor: bg }}>
      <span className="mb-3 block text-[11px] uppercase tracking-[0.24em] text-[#6E4A50]">{eyebrow}</span>
      <h2 className="font-serif text-[27px] font-light text-[#3E3833] lg:text-[30px]">{heading}</h2>
      <div className="mt-7">{children}</div>
    </div>
  );
}

export default function MenuPage() {
  useReveal();

  return (
    <main className="w-full overflow-hidden bg-[#FAF6EF] text-[#3E3833]">
      {/* Page header */}
      <section className="w-full bg-[#DAD3C4] py-24 lg:py-28">
        <div className="reveal mx-auto max-w-[1500px] px-6 lg:px-12">
          <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-[#A97D82]">The Facial Menu</span>
          <h1 className="max-w-3xl font-serif text-[44px] font-light leading-[1.08] text-[#3E3833] lg:text-[68px]">
            choose your experience.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#5E564D]">
            Start with The Signature — your fully customized facial — then choose the add-on that matches your skin
            goals. Build the experience that&apos;s right for you.
          </p>
        </div>
      </section>

      <section className="w-full py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          {/* ── 1. THE FOUNDATION — Signature Facial (now first) ───────────── */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
            <div
              className="flex flex-col justify-center px-10 py-14 lg:px-14"
              style={{ backgroundColor: C.foundationDark }}
            >
              <span className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#C9BFAE]">The Foundation</span>
              <div className="flex items-baseline gap-4">
                <h2 className="font-serif text-[36px] font-light text-[#EFE9DE]">the signature</h2>
                <span className="font-serif text-[22px] font-light text-[#C9BFAE]">{SIGNATURE_PRICE}</span>
              </div>
              <p className="mt-3 font-serif text-[15px] italic text-[#C9BFAE]">
                &ldquo;Healthy skin starts with a strong foundation.&rdquo;
              </p>
              <p className="mt-5 max-w-sm text-[14px] leading-8 text-[#C9BFAE]">
                Your customized facial experience designed to cleanse, nourish, and restore your skin.
              </p>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-fit bg-[#A97D82] px-8 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#FAF6EF] hover:bg-[#946A6F] transition"
              >
                Book The Signature
              </a>
            </div>
            <div className="px-10 py-14 lg:px-14" style={{ backgroundColor: C.foundationPanel }}>
              <p className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#A97D82]">Every Signature Includes</p>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SIGNATURE_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] leading-7 text-[#5E564D]">
                    <span className="mt-px text-[#A97D82]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── 2. Add-on tiers — cream → taupe ramp ───────────────────────── */}
          <p className="reveal mb-6 mt-10 text-center font-serif text-[22px] font-light italic text-[#A97D82]">
            then choose your add-on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier, idx) => (
              <div
                key={tier.num}
                className="reveal flex flex-col p-9"
                style={{ backgroundColor: C.tierRamp[idx % C.tierRamp.length], transitionDelay: `${idx * 90}ms` }}
              >
                <div className="mb-5 flex items-baseline justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#6E4A50]">
                    Choose You #{tier.num.replace('0', '')}
                  </span>
                  <span className="font-serif text-[28px] font-light text-[#3E3833]/25">{tier.num}</span>
                </div>
                <h3 className="font-serif text-[25px] font-light leading-tight text-[#3E3833]">{tier.name}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#6E4A50]">{tier.add}</p>
                <p className="mt-3 font-serif text-[20px] font-light text-[#3E3833]">
                  {tier.price}
                  {tier.packagePrice && (
                    <span className="ml-2 font-sans text-[11px] text-[#5E564D]">· {tier.packagePrice}</span>
                  )}
                </p>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-[#5E564D]">{tier.desc}</p>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#6E4A50]"
                >
                  Book <span className="transition group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* ── 3. Teen Facial ────────────────────────────────────────────── */}
          <div
            className="reveal mt-6 flex flex-col items-start justify-between gap-4 px-8 py-10 sm:flex-row sm:items-center lg:px-12"
            style={{ backgroundColor: C.teen }}
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6E4A50]">For Younger Skin</span>
              <h3 className="mt-2 font-serif text-[24px] font-light text-[#3E3833]">teen facial</h3>
              <p className="mt-2 max-w-md text-[13px] leading-6 text-[#5E564D]">
                A gentle, age-appropriate facial for teens just starting their skincare journey.
              </p>
            </div>
            <span className="font-serif text-[27px] font-light text-[#3E3833]">{TEEN_FACIAL_PRICE}</span>
          </div>

          {/* ── 4. THE CROWN — Japanese Head Spa (moved below the facials) ─── */}
          <div className="reveal mt-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col justify-center px-10 py-14 lg:px-14" style={{ backgroundColor: C.crownDark }}>
              <span className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#D9BEC0]">👑 The Crown</span>
              <h2 className="font-serif text-[36px] font-light text-[#F3E7E4]">japanese head spa.</h2>
              <p className="mt-3 font-serif text-[15px] italic text-[#E4D2D0]">
                &ldquo;Because your crown deserves the same care as your skin.&rdquo;
              </p>
              <p className="mt-5 max-w-md text-[14px] leading-8 text-[#F3E7E4]">
                A facial for your scalp—designed to deeply cleanse, nourish, and restore the foundation of healthy hair
                while melting away stress and tension.
              </p>
              <p className="mt-3 max-w-md text-[13px] leading-7 text-[#D9BEC0]">
                Your customized scalp wellness experience designed to deeply cleanse, nourish, and restore your scalp
                while creating healthier, more beautiful hair.
              </p>

              <div className="mt-8 space-y-4">
                {HEADSPA.map((item) => (
                  <div key={item.name} className="border-t border-[#F3E7E4]/20 pt-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="text-[13px] uppercase tracking-[0.14em] text-[#F3E7E4]">👑 {item.name}</p>
                        <p className="mt-1 text-[13px] text-[#D9BEC0]">{item.duration}</p>
                      </div>
                      <span className="font-serif text-[26px] font-light text-[#F3E7E4]">{item.price}</span>
                    </div>
                    {item.note && <p className="mt-2 text-[12px] leading-6 text-[#D9BEC0]">{item.note}</p>}
                  </div>
                ))}
              </div>

              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 w-fit bg-[#F3E7E4] px-8 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#3E3833] hover:bg-white transition"
              >
                Book Head Spa Today
              </a>
            </div>

            <div className="px-10 py-14 lg:px-14" style={{ backgroundColor: C.crownPanel }}>
              <p className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#6E4A50]">Every Head Spa Includes</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {HEADSPA_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] leading-7 text-[#5E564D]">
                    <span className="mt-px text-[#A97D82]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-5 mt-9 text-[11px] uppercase tracking-[0.2em] text-[#6E4A50]">
                The 90 Min Experience Also Includes
              </p>
              <ul className="space-y-3">
                {HEADSPA_90MIN_EXTRAS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] leading-7 text-[#5E564D]">
                    <span className="mt-px text-[#A97D82]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── 5. Brows & Waxing ─────────────────────────────────────────── */}
          <CategoryBlock eyebrow="Brows & Waxing" heading="shape & define." bg={C.brows}>
            <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
              {BROWS.map((item) => (
                <PriceRow key={item.name} label={item.name} price={item.price} />
              ))}
            </div>
          </CategoryBlock>

          {/* ── 6. LED Therapy ────────────────────────────────────────────── */}
          <CategoryBlock eyebrow="LED Therapy" heading="light, targeted, restorative." bg={C.led}>
            <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
              {LED_THERAPY.map((item) => (
                <PriceRow key={item.duration} label={item.duration} price={item.price} />
              ))}
            </div>
          </CategoryBlock>

          {/* ── 7. Foot Reflexology ───────────────────────────────────────── */}
          <CategoryBlock eyebrow="Foot Reflexology" heading="slow down, unwind." bg={C.reflexology}>
            <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-3">
              {REFLEXOLOGY.map((item) => (
                <PriceRow key={item.duration} label={item.duration} price={item.price} />
              ))}
            </div>
          </CategoryBlock>

          {/* ── 8. Custom Service — quiet catch-all ───────────────────────── */}
          <div className="reveal mt-6 border border-[#C0B7A6] px-9 py-11 text-center">
            <h2 className="font-serif text-[24px] font-light text-[#3E3833]">something else in mind?</h2>
            <p className="mx-auto mt-4 max-w-lg text-[14px] leading-7 text-[#5E564D]">
              Book our Custom Service and tell Mary what you&apos;re looking for in the notes — hand reflexology,
              cupping, targeted spot treatment, or anything else. She&apos;ll take it from there.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border border-[#A97D82] px-8 py-3 text-[11px] uppercase tracking-[0.16em] text-[#A97D82] hover:bg-[#EFE9DE] transition"
            >
              Book a Custom Service
            </a>
          </div>

          {/* ── 9. Guidance closer ────────────────────────────────────────── */}
          <div className="reveal mt-6 px-8 py-16 text-center" style={{ backgroundColor: C.closer }}>
            <p className="font-serif text-[28px] font-light italic leading-snug text-[#EFE9DE] lg:text-[34px]">
              Not sure which experience is right for you?
            </p>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-8 text-[#C9BFAE]">
              That&apos;s my job. We&apos;ll evaluate your skin together and choose the best path forward.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[#A97D82] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#FAF6EF] hover:bg-[#946A6F] transition"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
