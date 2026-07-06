'use client';

import { useReveal } from '@/components/use-reveal';
import { BOOK_URL, SIGNATURE_INCLUDES, TIERS } from '@/lib/site-data';

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
            Start with The Signature — your fully customized facial — then choose the add-on that matches your skin goals. Build the experience that&apos;s right for you.
          </p>
        </div>
      </section>

      <section className="w-full py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          {/* The Signature */}
          <div className="reveal mb-8 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col justify-center bg-[#4A403B] px-10 py-14 lg:px-14">
              <span className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#C9BFAE]">The Foundation</span>
              <h2 className="font-serif text-[36px] font-light text-[#EFE9DE]">the signature</h2>
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
            <div className="bg-[#EFE9DE] px-10 py-14 lg:px-14">
              <p className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#A97D82]">Every Signature Includes</p>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SIGNATURE_INCLUDES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] leading-7 text-[#5E564D]">
                    <span className="mt-px text-[#A97D82]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="reveal mb-8 text-center font-serif text-[22px] font-light italic text-[#A97D82]">
            then choose your add-on.
          </p>

          {/* Tiers */}
          <div className="grid grid-cols-1 gap-px bg-[#E5DFD3] md:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="reveal flex flex-col bg-[#FAF6EF] p-9 transition-colors duration-500 hover:bg-[#EFE9DE]"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div className="mb-5 flex items-baseline justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A97D82]">Choose You #{tier.num.replace('0', '')}</span>
                  <span className="font-serif text-[28px] font-light text-[#C9BFAE]">{tier.num}</span>
                </div>
                <h3 className="font-serif text-[25px] font-light leading-tight text-[#3E3833]">{tier.name}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#A97D82]">{tier.add}</p>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-[#6E655C]">{tier.desc}</p>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#A97D82]"
                >
                  Book <span className="transition group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Guidance */}
          <div className="reveal mt-8 bg-[#6E4A50] px-8 py-16 text-center">
            <p className="font-serif text-[28px] font-light italic leading-snug text-[#F3E7E4] lg:text-[34px]">
              Not sure which experience is right for you?
            </p>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-8 text-[#E4D2D0]">
              That&apos;s my job. We&apos;ll evaluate your skin together and choose the best path forward.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[#F3E7E4] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#3E3833] hover:bg-white transition"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
