import type { Metadata } from 'next'

const title = 'Gallery | Mary Jesse Skin + Scalp Studio — Esthetics Studio in Arvada, CO'
const description =
  'Step inside Mary Jesse Skin + Scalp Studio in Arvada, CO: the treatment room, Japanese Head Spa, facials, and the products Mary uses.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/gallery' },
  openGraph: { title, description, url: '/gallery' },
  twitter: { title, description },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
