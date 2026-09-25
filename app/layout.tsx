import type { Metadata } from 'next';
import './globals.css';
import { site } from '../constants/site';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: 'A.K. Gautam Traders | Building Material Supplier in Jhansi', template: '%s | A.K. Gautam Traders' },
  description: site.description,
  keywords: ['A.K. Gautam','A.K. Gautam Traders','A.K. Gautam Traders Jhansi','building material supplier Jhansi','UltraTech Cement supplier Jhansi','best cement supplier Jhansi','cement supplier','steel supplier','sand supplier','crushed stone','bricks','blocks'],
  alternates: { canonical: '/' },
  openGraph: { title: 'A.K. Gautam Traders | Building Material Supplier in Jhansi', description: site.description, type: 'website', locale: 'en_IN', siteName: site.name },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
