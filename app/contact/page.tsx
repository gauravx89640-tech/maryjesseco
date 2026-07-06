'use client';

import React from 'react';
import { CalendarCheck, MapPin, Phone } from 'lucide-react';
import { useReveal } from '@/components/use-reveal';
import { BOOK_URL } from '@/lib/site-data';

// Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

export default function ContactPage() {
  useReveal();
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', 'New inquiry from Mary Jesse & Co. website');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full border border-[#C0B7A6] bg-[#FAF6EF] px-4 py-3 text-[14px] text-[#3E3833] placeholder:text-[#9C9184] focus:border-[#A97D82] focus:outline-none transition';

  return (
    <main className="w-full overflow-hidden bg-[#FAF6EF] text-[#3E3833]">
      {/* Header */}
      <section className="w-full bg-[#DAD3C4] py-24 lg:py-28">
        <div className="reveal mx-auto max-w-[1500px] px-6 lg:px-12">
          <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-[#A97D82]">Get Started</span>
          <h1 className="max-w-3xl font-serif text-[44px] font-light leading-[1.08] text-[#3E3833] lg:text-[68px]">
            ready when you are.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#5E564D]">
            Book online any time, or send a note below and Mary will get back to you. We&apos;d love to help you build a plan for skin you actually feel confident in.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="w-full py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-12">
          {/* Contact form */}
          <div className="reveal">
            <h2 className="font-serif text-[28px] font-light text-[#3E3833]">send a message</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input type="text" name="name" required placeholder="Your name" className={inputClass} />
                <input type="tel" name="phone" placeholder="Phone (optional)" className={inputClass} />
              </div>
              <input type="email" name="email" required placeholder="Email address" className={inputClass} />
              <textarea name="message" required rows={5} placeholder="How can Mary help?" className={inputClass} />
              {/* Honeypot spam field */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#A97D82] px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-[#FAF6EF] hover:bg-[#946A6F] transition disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-[14px] text-[#4A403B]">Thank you — your message has been sent. Mary will be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="text-[14px] text-[#8A3B3B]">Something went wrong. Please call 303.596.5857 or email MaryJesseandCo@gmail.com.</p>
              )}
            </form>
          </div>

          {/* Details */}
          <div className="reveal flex flex-col space-y-6" style={{ transitionDelay: '120ms' }}>
            <a href="tel:3035965857" className="flex items-center gap-4 text-[15px] text-[#3E3833] hover:text-[#A97D82] transition">
              <Phone className="h-5 w-5 flex-shrink-0 text-[#A97D82]" strokeWidth={1.6} />
              <span>303.596.5857</span>
            </a>
            <a href="mailto:MaryJesseandCo@gmail.com" className="flex items-center gap-4 text-[15px] text-[#3E3833] hover:text-[#A97D82] transition">
              <span className="h-5 w-5 flex-shrink-0 text-[15px] font-bold text-[#A97D82]">@</span>
              <span>MaryJesseandCo@gmail.com</span>
            </a>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[15px] text-[#A97D82] hover:underline">
              <CalendarCheck className="h-5 w-5 flex-shrink-0 text-[#A97D82]" strokeWidth={1.6} />
              <span>Book online at GlossGenius</span>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#A97D82]" strokeWidth={1.6} />
              <span className="text-[15px] text-[#3E3833]">7430 W 88th Ave Studio #207<br />Arvada, CO 80021</span>
            </div>
            <div className="border-t border-[#C0B7A6] pt-5">
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#A97D82]">Hours</p>
              <div className="space-y-1 text-[14px] leading-6 text-[#5E564D]">
                <p><span className="inline-block w-28 text-[#3E3833]">Mon</span>Closed</p>
                <p><span className="inline-block w-28 text-[#3E3833]">Tue – Fri</span>10 AM – 6 PM</p>
                <p><span className="inline-block w-28 text-[#3E3833]">Sat</span>10 AM – 3 PM</p>
                <p><span className="inline-block w-28 text-[#3E3833]">Sun</span>Closed</p>
              </div>
            </div>
            <p className="max-w-sm pt-2 text-[12px] leading-5 text-[#7A7266]">
              Please note that cancellations within 24 hours may result in a 50% service fee, and no-shows may result in a 100% service fee. To cancel or reschedule, please notify Mary Jesse &amp; Co. at 303.596.5857.
            </p>
          </div>
        </div>
      </section>

      {/* Find us: matched photo + map */}
      <section className="w-full bg-[#EFE9DE] py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <p className="reveal mb-4 text-[11px] uppercase tracking-[0.2em] text-[#A97D82]">Find Us · Located inside Image Studios, Arvada</p>
          <div className="reveal grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="h-[420px] overflow-hidden">
              <img src="/studiofront.jpg" alt="Image Studios building in Arvada" className="h-full w-full object-cover" />
            </div>
            <div className="h-[420px] overflow-hidden border border-[#C0B7A6]">
              <iframe
                title="Mary Jesse & Co. location map"
                src="https://www.google.com/maps?q=7430+W+88th+Ave+Studio+207,+Arvada,+CO+80021&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
