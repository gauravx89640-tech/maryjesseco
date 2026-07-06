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

export const metadata: Metadata = {
  title: 'Mary Jesse & Co. | Skin + Scalp Studio in Arvada, CO',
  description: 'Experience expert esthetics, Japanese HeadSpa, and personalized skincare at Mary Jesse & Co. in Arvada, Colorado.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${_cormorant.variable} ${_jost.variable}`}>
      <body className="font-sans antialiased bg-[#FAF6EF] text-[#3E3833]">
        <SiteNav />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
