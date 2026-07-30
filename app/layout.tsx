import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'

const _cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
})
const _jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500'],
})

// [CONFIRM: final domain] — placeholder until the custom domain is connected.
// Canonical/OG URLs must NOT ship on the Pages preview domain at go-live.
const SITE_URL = 'https://maryjesseco.pages.dev';
const BUSINESS_NAME = 'Mary Jesse Skin + Scalp Studio';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BUSINESS_NAME} | Esthetics & Japanese Head Spa in Arvada, CO`,
  description:
    'Boutique esthetics studio in Arvada, CO. Customized facials, Japanese Head Spa scalp treatments, brows, and skincare with licensed esthetician Mary Jesse.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | Esthetics & Japanese Head Spa in Arvada, CO`,
    description:
      'Boutique esthetics studio in Arvada, CO. Customized facials, Japanese Head Spa scalp treatments, brows, and skincare with licensed esthetician Mary Jesse.',
    url: '/',
    locale: 'en_US',
    images: [{ url: '/studio-neon.jpeg', width: 1200, height: 630, alt: `${BUSINESS_NAME} treatment room` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | Esthetics & Japanese Head Spa in Arvada, CO`,
    description:
      'Boutique esthetics studio in Arvada, CO. Customized facials, Japanese Head Spa scalp treatments, brows, and skincare.',
    images: ['/studio-neon.jpeg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// Real NAP data only (Project Facts). No geo coordinates or aggregateRating here —
// both would require values we don't have confirmed.
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: BUSINESS_NAME,
  description:
    'Boutique esthetics studio offering customized facials, Japanese Head Spa scalp treatments, brows, and skincare in Arvada, Colorado.',
  url: SITE_URL,
  telephone: '303.596.5857',
  email: 'MaryJesseandCo@gmail.com',
  image: `${SITE_URL}/studio-neon.jpeg`,
  priceRange: '$15–$200',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7430 W 88th Ave Studio #207',
    addressLocality: 'Arvada',
    addressRegion: 'CO',
    postalCode: '80021',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/maryjesseco',
    'http://facebook.com/mary.jesse.169',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${_cormorant.variable} ${_jost.variable}`}>
      <body className="font-sans antialiased bg-[#FAF6EF] text-[#3E3833]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SiteNav />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
