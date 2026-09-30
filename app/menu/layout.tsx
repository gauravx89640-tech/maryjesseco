import type { Metadata } from 'next'

const title = 'Menu & Prices | Mary Jesse Skin + Scalp Studio — Facials & Japanese Head Spa in Arvada, CO'
const description =
  'Signature Facial from $85, elevations, Japanese Head Spa (The Crown, from $150), Japanese Foot Spa, LED therapy and more at Mary Jesse Skin + Scalp Studio in Arvada, CO.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/menu' },
  openGraph: { title, description, url: '/menu' },
  twitter: { title, description },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
