'use client';

import React from 'react';
import { CalendarCheck, MapPin, Phone } from 'lucide-react';

export default function Page() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // SVG blob clip paths for organic shapes
  const HeroBlob = () => (
    <svg width="0" height="0">
      <defs>
        <clipPath id="heroBlob" clipPathUnits="objectBoundingBox">
          <path d="M 0.2,0.06 C 0.36,-0.02 0.75,0.01 0.91,0.17 C 1.02,0.28 0.94,0.47 0.98,0.6 C 1.02,0.78 0.82,0.94 0.61,0.98 C 0.43,1.02 0.21,0.91 0.12,0.76 C 0.03,0.6 -0.01,0.32 0.08,0.18 C 0.11,0.13 0.14,0.09 0.2,0.06 Z" />
        </clipPath>
      </defs>
    </svg>
  );

  const MeetMaryBlob = () => (
    <svg width="0" height="0">
      <defs>
        <clipPath id="meetMaryBlob" clipPathUnits="objectBoundingBox">
          <path d="M 0.7, 0 Q 1, 0.05 1, 0.3 Q 1, 0.5 0.95, 0.65 Q 0.98, 0.8 0.8, 0.95 Q 0.6, 1  0.4, 0.98 Q 0.2, 0.95 0.05, 0.8 Q 0, 0.65 0, 0.35 Q 0, 0.15 0.15, 0.05 Q 0.35, 0 0.7, 0 Z" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <main className="w-full overflow-hidden bg-[#FFFDFC]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#F0E0E0] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3.5">
            <div className="h-12 w-12 overflow-hidden rounded-[42%_58%_48%_52%/48%_42%_58%_52%] border border-[#F0D2D6] bg-[#FDF0F0] shadow-[0_10px_28px_rgba(196,132,138,0.14)]">
              <img
                src="/mary-logo-full.jpeg"
                alt=""
                className="h-full w-full scale-125 object-cover opacity-90"
              />
            </div>
            <div>
              <span className="block font-serif text-xl font-bold leading-none text-[#1A1A1A]">
                Mary Jesse & Co.
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-[#C4848A]">
                From Zen to Corrected Skin
              </span>
            </div>
          </div>
          <div className="flex gap-12 items-center text-sm tracking-widest text-[#5A5A5A]">
            <a href="#services" className="hover:text-[#C4848A] transition">Services</a>
            <a href="#about" className="hover:text-[#C4848A] transition">About</a>
            <a href="#gallery" className="hover:text-[#C4848A] transition">Gallery</a>
            <a href="#contact" className="hover:text-[#C4848A] transition">Contact</a>
          </div>
          <a
            href="https://maryjesse.glossgenius.com/booking-flow"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2.5 bg-[#C4848A] text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#B07080] transition"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="relative w-full overflow-hidden bg-[#FFFDFC]">
        {/* Decorative blobs */}
        <div className="absolute right-[8%] top-20 h-[460px] w-[460px] rounded-full bg-[#F9E4E4] opacity-45 blur-3xl"></div>
        <div className="absolute bottom-12 left-[32%] h-80 w-80 rounded-full bg-[#F7D8DC] opacity-25 blur-3xl"></div>
        <div className="pointer-events-none absolute left-[5%] top-24 font-serif text-[220px] font-bold leading-none text-[#F4C4D0]/20">
          MJ
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-[1440px] grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
          {/* Left column */}
          <div className="max-w-2xl lg:pr-4">
            <div className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-6">
              Esthetician · Scalp Specialist · Arvada, CO
            </div>
            <h1 className="font-serif text-[68px] leading-[1.05] font-bold text-[#1A1A1A] mb-8 lg:text-[82px]">
              Skin, scalp, and<br />self-care —<br />personalized for you.
            </h1>
            <p className="text-base leading-8 text-[#5A5A5A] max-w-md mb-10">
              Boutique facials, Japanese Head Spa treatments, brows, lashes, and skincare in Arvada, CO. Every service is built around your skin, your scalp, and your goals — never rushed, never one-size-fits-all.
            </p>
            <a
              href="https://maryjesse.glossgenius.com/booking-flow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#C4848A] text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#B07080] transition"
            >
              Book Your First Appointment
            </a>
          </div>

          {/* Right column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <HeroBlob />
            <div className="absolute -left-4 top-16 hidden h-[560px] w-[360px] rounded-[48%_52%_42%_58%/48%_42%_58%_52%] bg-[#FDF0F0] lg:block"></div>
            <div
              className="relative w-full max-w-[560px] aspect-[3/4] overflow-hidden bg-[#F7D8DC] shadow-[0_34px_90px_rgba(196,132,138,0.22)]"
              style={{
                clipPath: 'url(#heroBlob)',
              }}
            >
              <img
                src="/mary-hero-polished.jpeg"
                alt="Mary Jesse"
                className="h-full w-full object-cover object-[52%_center]"
              />
            </div>
            <div className="absolute bottom-8 left-0 hidden bg-white/85 px-5 py-4 shadow-[0_18px_45px_rgba(44,24,16,0.08)] backdrop-blur md:block">
              <p className="font-serif text-2xl font-bold leading-none text-[#1A1A1A]">Mary Jesse & Co.</p>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.24em] text-[#C4848A]">From Zen to Corrected Skin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Services */}
      <section id="services" className="w-full bg-[#FDF0F0] py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-20 items-center">
            {/* Left column */}
            <div className="flex flex-col">
              <div className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-4">
                Our Services
              </div>
              <h2 className="font-serif text-[60px] leading-[1.05] font-bold text-[#1A1A1A] mb-6">
                Treatments built around you.
              </h2>
              <p className="text-base leading-8 text-[#5A5A5A] mb-10">
                Every service is chosen for how it actually makes your skin feel — calmer, clearer, healthier. No upselling, no rushing, just care that's tailored to you.
              </p>
              <a
                href="https://maryjesse.glossgenius.com/booking-flow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border-2 border-[#C4848A] text-[#C4848A] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#FDF0F0] transition w-fit"
              >
                View All Services & Book
              </a>
            </div>

            {/* Right column - Service cards */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Facials', desc: 'Custom facials tailored to your skin type and concerns — from acne and aging to sensitivity and dryness.', price: 'Starting from $85' },
                { name: 'Japanese Scalp Treatment', desc: 'A relaxing Head Spa ritual that deep-cleanses the scalp, boosts circulation, and supports healthy hair growth.', price: 'Starting from $95' },
                { name: 'Brows & Lashes', desc: 'Shaping, tinting, and lash lift services to frame and define your features.', price: 'Starting from $35' },
                { name: 'Waxing', desc: 'Gentle, professional waxing for all areas, done with care and precision.', price: 'Starting from $15' },
                { name: 'Skincare', desc: 'Professional-grade product recommendations and one-on-one skin coaching for results that last.', price: 'Custom pricing' },
                { name: 'Wellness', desc: 'Holistic beauty and wellness services designed to help you slow down and feel your best.', price: 'Custom pricing' },
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 min-h-[200px] flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-[#C4848A] text-lg font-bold mt-1">●</span>
                    <h3 className="font-serif text-lg font-bold text-[#1A1A1A] flex-1">{service.name}</h3>
                  </div>
                  <p className="text-[14px] leading-6 text-[#5A5A5A] flex-1 mb-3">{service.desc}</p>
                  <p className="text-xs text-[#C4848A] font-medium">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: HeadSpa Feature */}
      <section className="w-full bg-white">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 min-h-[660px]">
          {/* Left - Image */}
          <div className="h-full overflow-hidden">
            <img
              src="/IMG_6267.jpeg"
              alt="HeadSpa Treatment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="bg-white flex flex-col justify-center px-16 py-20">
            <div className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-6">
              Signature Service
            </div>
            <h2 className="font-serif text-5xl font-bold text-[#1A1A1A] mb-8">
              Deep calm, visible renewal.
            </h2>
            <p className="text-base leading-8 text-[#5A5A5A] mb-10">
              Our Japanese Head Spa treatment — a facial for your scalp — is designed to support healthy hair growth, deep-cleanse the scalp, boost circulation, and melt away tension. Experience the ultimate in relaxation paired with real, lasting scalp health.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Supports healthy hair growth',
                'Improves scalp concerns and deep cleanses',
                'Boosts circulation and scalp health',
                'Delivers deep relaxation and stress relief',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#5A5A5A]">
                  <span className="text-[#C4848A] text-lg font-bold mt-0.5 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://maryjesse.glossgenius.com/booking-flow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#C4848A] text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#B07080] transition w-fit"
            >
              Book HeadSpa Today
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Results */}
      <section className="w-full bg-[#FDF0F0] py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-16 px-6 lg:px-10 items-center">
          {/* Left */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-4">
              Client Results
            </div>
            <h2 className="font-serif text-5xl font-bold text-[#1A1A1A] mb-8">
              Corrected skin results, without the clinical coldness.
            </h2>
            <p className="text-base leading-8 text-[#5A5A5A] mb-8">
              Treatments and product guidance are chosen for texture, clarity, hydration, and the confidence that comes from a plan that finally makes sense.
            </p>
            <a href="#" className="text-[#C4848A] font-medium underline underline-offset-4 hover:opacity-75 transition">
              Learn more about our approach →
            </a>
            <ul className="mt-8 space-y-3">
              {[
                'Texture, clarity & hydration-focused',
                'Personalized plans, never one-size-fits-all',
                'Honest product guidance that actually makes sense',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[#5A5A5A]">
                  <span className="text-[#C4848A] font-semibold flex-shrink-0 mt-px">–</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Asymmetric grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: '/facial.jpeg', alt: 'Facial serum treatment with blue gloves', label: 'In Treatment' },
              { src: '/headspa.jpeg', alt: 'Client during HeadSpa scalp treatment', label: 'HeadSpa Ritual' },
              { src: '/led.jpeg', alt: 'LED blue-light therapy treatment', label: 'Light Therapy' },
              { src: '/scalp.jpeg', alt: 'NuDermo scalp analysis', label: 'Scalp Analysis' },
            ].map((result) => (
              <div key={result.src} className="bg-white p-2 shadow-[0_20px_50px_rgba(196,132,138,0.10)]">
                <img src={result.src} alt={result.alt} className="w-full aspect-[3/4] object-cover rounded-xl saturate-[0.94]" />
                <p className="text-xs uppercase tracking-widest text-[#5A5A5A] mt-2 italic font-serif">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Meet Mary */}
      <section id="about" className="relative w-full bg-white py-32">
        <div className="pointer-events-none absolute right-[8%] top-8 font-serif text-[170px] font-bold leading-none text-[#F4C4D0]/15">
          MJ
        </div>
        <div className="relative mx-auto grid max-w-[1440px] grid-cols-2 gap-20 px-6 lg:px-10 items-center">
          {/* Left - Image */}
          <div className="relative flex justify-start">
            <MeetMaryBlob />
            <div
              className="w-[460px] h-[620px] bg-gray-200 overflow-hidden shadow-[0_28px_70px_rgba(44,24,16,0.10)]"
              style={{
                clipPath: 'url(#meetMaryBlob)',
              }}
            >
              <img
                src="/mary-meet-playful.jpeg"
                alt="Mary Jesse"
                className="h-full w-full object-cover object-[58%_center]"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-4">
              Meet Mary
            </div>
            <h2 className="font-serif text-5xl font-bold text-[#1A1A1A] mb-8">
              Beauty that feels like a friend, not a clinic.
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-base leading-8 text-[#5A5A5A]">
                Mary Jesse &amp; Co. is a boutique esthetics studio in Arvada offering customized facials and luxury Japanese HeadSpa treatments focused on total skin and scalp health.
              </p>
              <p className="text-base leading-8 text-[#5A5A5A]">
                Mary is a licensed esthetician serving the Denver Metro area, specializing in acne, aging, sensitive, and stressed skin. Every service is personalized — because skin is skin, and she treats it all.
              </p>
              <p className="text-base leading-8 text-[#5A5A5A]">
                At Mary Jesse &amp; Co., clients enter as a guest and leave as a friend.
              </p>
            </div>

            <p className="font-serif italic text-2xl text-[#C4848A] mb-8">
              "Beauty is an inside feeling — it's about feeling your absolute best."
            </p>

            <a href="#" className="text-[#C4848A] font-medium underline underline-offset-4 hover:opacity-75 transition">
              Discover our skin-coaching philosophy →
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Pull Quote */}
      <section className="w-full bg-[#FDF0F0] py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-serif italic text-5xl leading-tight text-[#1A1A1A] mb-6">
            "Beauty is an inside feeling — it's about feeling your absolute best."
          </p>
          <p className="text-xs uppercase tracking-widest text-[#C4848A] font-medium">
            — Mary Jesse
          </p>
        </div>
      </section>

      {/* Section 7: Popular Treatments */}
      <section className="w-full bg-white py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-20 px-6 lg:px-10">
          {/* Left */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-4">
              Popular Treatments
            </div>
            <h2 className="font-serif text-5xl font-bold text-[#1A1A1A] mb-6">
              Choose your kind of glow.
            </h2>
            <p className="text-base leading-8 text-[#5A5A5A]">
              Browse a few of the signature treatments clients book most — or reach out and we'll find the right fit together.
            </p>
            <img
              src="/IMG_4927.jpeg"
              alt="Ultrasonic skin scrubber facial treatment"
              className="w-full h-80 object-cover rounded-2xl mt-8"
            />
          </div>

          {/* Right - Treatment list */}
          <div className="space-y-0">
            {[
              'Oxygen Facial',
              'Hydration Boost',
              'Anti-Aging Protocol',
              'Acne Solution',
              'Glow & Go',
              'Signature Facial',
              'Express Treatment',
              'Bridal Package',
            ].map((treatment, idx) => (
              <a
                key={idx}
                href="https://maryjesse.glossgenius.com/booking-flow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-4 px-4 border-b border-[#F0E0E0] hover:bg-[#FDF0F0] group transition"
              >
                <span className="text-base text-[#1A1A1A] font-medium">{treatment}</span>
                <span className="text-[#C4848A] group-hover:translate-x-1 transition">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="w-full bg-[#FDF0F0] py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-4">
            Client Love
          </div>
          <div className="flex items-end gap-6 mb-16">
            <h2 className="font-serif text-[60px] leading-[1.05] font-bold text-[#1A1A1A]">
              The afterglow, in their words.
            </h2>
            <p className="text-sm text-[#5A5A5A] mb-3 pb-1">185 Google reviews ★★★★★</p>
          </div>

          {/* Top 3 reviews */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {[
              { text: "Mary does such a fabulous job taking care of my skin! I recently started going to her and can already notice an improvement!", author: 'Annie Shanahan' },
              { text: "I so look forward to my appointments with Mary Jesse! It's all about relaxation and hair and skin health!", author: 'Aubree' },
              { text: "I absolutely love my Japanese Hair Treatment! Mary Jesse is great and has so much knowledge to share about how to care for your hair. 5 plus stars. Everyone should treat themselves to this wonderful experience.", author: 'Gabrielle' },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C4848A] text-lg">★</span>
                  ))}
                </div>
                <p className="text-base italic leading-8 text-[#5A5A5A] mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-xs uppercase tracking-widest text-[#C4848A] font-medium">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>

          {/* Additional 2 reviews */}
          <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { text: "I feel so good after my session with Mary. She's such a wonderful lady.", author: 'Irma Thrashed' },
              { text: "Mary is attentive and great at what she does! Always an amazing facial.", author: 'Rachelle' },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C4848A] text-base">★</span>
                  ))}
                </div>
                <p className="text-sm italic leading-7 text-[#5A5A5A] mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-xs uppercase tracking-widest text-[#C4848A] font-medium">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Gallery */}
      <section id="gallery" className="w-full bg-white py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-4">
              The Studio
            </div>
            <h2 className="font-serif text-5xl font-bold text-[#1A1A1A] mb-6">
              A studio with a softer tempo.
            </h2>
            <p className="text-base leading-8 text-[#5A5A5A] max-w-md">
              Warm light, quiet morning, and treatment spaces that make the appointment feel like a decision.
            </p>
          </div>

          {/* Studio video */}
          <div className="relative flex justify-center items-center rounded-2xl overflow-hidden bg-[#FDF0F0] py-4">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster="/studio.jpeg"
              className="rounded-2xl object-contain w-auto"
              style={{ maxHeight: '600px' }}
            >
              <source src="/studio.mp4" type="video/mp4" />
            </video>
            {/* Accessibility play/pause toggle */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm shadow-md hover:bg-white/90 transition"
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#4B1F2A]">
                  <rect x="5" y="3" width="5" height="18" rx="1" />
                  <rect x="14" y="3" width="5" height="18" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#4B1F2A]">
                  <path d="M6 4.75a.75.75 0 0 1 1.14-.643l13 7.25a.75.75 0 0 1 0 1.286l-13 7.25A.75.75 0 0 1 6 19.25V4.75Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Section 10: CTA / Contact */}
      <section id="contact" className="w-full bg-[#FDF0F0] py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 lg:px-10 md:grid-cols-2 items-center">
          {/* Left */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-4">
              Get Started
            </div>
            <h2 className="font-serif text-5xl font-bold text-[#1A1A1A] mb-8">
              Ready when you are.
            </h2>
            <p className="text-base leading-8 text-[#5A5A5A] mb-10">
              Book a personalized consultation with Mary today and let's build a plan for skin you actually feel confident in.
            </p>
            <a
              href="https://maryjesse.glossgenius.com/booking-flow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#C4848A] text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#B07080] transition"
            >
              Book Your Appointment
            </a>
          </div>

          {/* Right - Contact info */}
          <div className="flex h-full flex-col justify-center space-y-6">
            <a href="tel:3035965857" className="flex items-center gap-4 text-base text-[#1A1A1A] font-medium hover:text-[#C4848A] transition">
              <Phone className="h-5 w-5 flex-shrink-0 text-[#C4848A]" strokeWidth={1.8} />
              <span>303.596.5857</span>
            </a>
            <a href="mailto:MaryJesseandCo@gmail.com" className="flex items-center gap-4 text-base text-[#1A1A1A] font-medium hover:text-[#C4848A] transition">
              <span className="h-5 w-5 flex-shrink-0 text-[#C4848A] text-sm font-bold">@</span>
              <span>MaryJesseandCo@gmail.com</span>
            </a>
            <a href="https://maryjesse.glossgenius.com/booking-flow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-base text-[#C4848A] font-medium hover:underline">
              <CalendarCheck className="h-5 w-5 flex-shrink-0 text-[#C4848A]" strokeWidth={1.8} />
              <span>Book online at GlossGenius</span>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 flex-shrink-0 text-[#C4848A] mt-0.5" strokeWidth={1.8} />
              <span className="text-base text-[#1A1A1A] font-medium">7430 W 88th Ave Studio #207<br />Arvada, CO 80021</span>
            </div>
            <div className="pt-2 border-t border-[#F0D2D6]">
              <p className="text-xs uppercase tracking-widest text-[#C4848A] font-medium mb-3">Hours</p>
              <div className="text-sm text-[#5A5A5A] space-y-1 leading-6">
                <p><span className="text-[#1A1A1A] font-medium w-28 inline-block">Mon</span>Closed</p>
                <p><span className="text-[#1A1A1A] font-medium w-28 inline-block">Tue – Fri</span>10 AM – 6 PM</p>
                <p><span className="text-[#1A1A1A] font-medium w-28 inline-block">Sat</span>10 AM – 3 PM</p>
                <p><span className="text-[#1A1A1A] font-medium w-28 inline-block">Sun</span>Closed</p>
              </div>
            </div>
            <p className="text-xs text-[#8A7070] leading-5 max-w-sm pt-2">
              Please note that cancellations within 24 hours may result in a 50% service fee, and no-shows may result in a 100% service fee. To cancel or reschedule, please notify Mary Jesse &amp; Co. at 303.596.5857.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#FFF9F5]" style={{ borderTop: '1px solid #E8C7D0' }}>
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Brand column */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-[#4B1F2A] mb-1">Mary Jesse &amp; Co.</h3>
              <p className="text-xs uppercase tracking-[0.22em] text-[#C98296] mb-1">From Zen to Corrected Skin</p>
              <p className="text-xs text-[#7A5060] mb-6">Esthetician · Hairstylist · Scalp Specialist</p>
              <div className="space-y-2 text-sm text-[#4B1F2A] mb-8">
                <p><a href="tel:3035965857" className="hover:text-[#C98296] transition">303.596.5857</a></p>
                <p><a href="mailto:MaryJesseandCo@gmail.com" className="hover:text-[#C98296] transition">MaryJesseandCo@gmail.com</a></p>
                <p>7430 W 88th Ave Studio #207, Arvada, CO 80021</p>
              </div>
              <a
                href="https://maryjesse.glossgenius.com/booking-flow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-2.5 bg-[#C98296] text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#B07080] transition"
              >
                Book Now
              </a>
            </div>

            {/* Navigate */}
            <div className="space-y-3 text-xs">
              <p className="uppercase tracking-widest text-[#C98296] font-medium mb-4">Navigate</p>
              <a href="#services" className="block text-[#4B1F2A] hover:text-[#C98296] transition">Services</a>
              <a href="#about" className="block text-[#4B1F2A] hover:text-[#C98296] transition">About</a>
              <a href="#gallery" className="block text-[#4B1F2A] hover:text-[#C98296] transition">Gallery</a>
              <a href="#contact" className="block text-[#4B1F2A] hover:text-[#C98296] transition">Contact</a>
            </div>

            {/* Social */}
            <div className="space-y-3 text-xs">
              <p className="uppercase tracking-widest text-[#C98296] font-medium mb-4">Follow Along</p>
              <a href="https://www.instagram.com/maryjesseco" target="_blank" rel="noopener noreferrer" className="block text-[#4B1F2A] hover:text-[#C98296] transition">Instagram</a>
              <a href="http://facebook.com/mary.jesse.169" target="_blank" rel="noopener noreferrer" className="block text-[#4B1F2A] hover:text-[#C98296] transition">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8C7D0] py-6 text-center">
          <p className="text-xs text-[#9A7080]">© 2025 Mary Jesse &amp; Co. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
