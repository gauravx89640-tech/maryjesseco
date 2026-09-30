import type { Metadata } from 'next'

const title = 'Contact & Hours | Mary Jesse Skin + Scalp Studio — Arvada, CO'
const description =
  'Book online or contact Mary Jesse Skin + Scalp Studio at 7430 W 88th Ave Studio #207, Arvada, CO 80021. Call 303.596.5857. Open Tue–Sat.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title, description, url: '/contact' },
  twitter: { title, description },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
