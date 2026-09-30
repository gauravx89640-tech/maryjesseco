import type { Metadata } from 'next'

const title = 'About Mary | Mary Jesse Skin + Scalp Studio — Licensed Esthetician in Arvada, CO'
const description =
  'Meet Mary, a licensed esthetician in Arvada, CO specializing in acne, aging, sensitive and stressed skin, and luxury Japanese Head Spa scalp treatments.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: { title, description, url: '/about' },
  twitter: { title, description },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
