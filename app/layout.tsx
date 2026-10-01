import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '../constants/site';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://akgautam.vercel.app';

const seoTitle =
  'A.K. Gautam Traders | Building Material Supplier in Jhansi';

const seoDescription =
  'A.K. Gautam Traders supplies cement, steel, sand, bricks and construction materials in Jhansi for homes, builders and commercial projects.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: seoTitle,
    template: '%s | A.K. Gautam Traders',
  },

  description: seoDescription,

  keywords: [
    'A.K. Gautam Traders',
    'A.K. Gautam Traders Jhansi',
    'building material supplier Jhansi',
    'construction material supplier Jhansi',
    'UltraTech Cement supplier Jhansi',
    'cement supplier Jhansi',
    'steel supplier Jhansi',
    'TMT steel Jhansi',
    'sand supplier Jhansi',
    'crushed stone supplier Jhansi',
    'bricks supplier Jhansi',
    'blocks supplier Jhansi',
  ],

  alternates: {
    canonical: '/',
  },

  verification: {
    google: 'uBYJHR41QrGiVQ1VR-iXbrfdO_dIfCRmfxrDdmcrdKQ',

    other: {
      'msvalidate.01': '31D786D61FBD2BDFED13823755947300',
    },
  },

  openGraph: {
    title: seoTitle,
    description: seoDescription,
    type: 'website',
    locale: 'en_IN',
    siteName: site.name,
    url: siteUrl,

    images: [
      {
        url: '/images/hero-group.png',
        width: 1672,
        height: 941,
        alt: 'A.K. Gautam Traders team and office in Jhansi',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: seoTitle,
    description: seoDescription,
    images: ['/images/hero-group.png'],
  },

  icons: {
    icon: '/images/siteicon.png',
    shortcut: '/images/siteicon.png',
    apple: '/images/siteicon.png',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',

  name: site.name,
  description: seoDescription,

  telephone: '+91 9454794715',
  email: site.email,

  url: siteUrl,
  image: `${siteUrl}/images/hero-group.png`,

  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Suti Mill, Near The Ghanaram Royal Garden, Sankar Road',
    addressLocality: 'Jhansi',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },

  areaServed: {
    '@type': 'City',
    name: 'Jhansi',
  },

  sameAs: [
    `https://instagram.com/${site.instagram}`,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}
