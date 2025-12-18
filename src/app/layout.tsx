import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Ole Løvold AS - Fersk fisk og fiskeprodukter fra Averøy',
    template: '%s | Ole Løvold AS',
  },
  description: 'Landsledende på fisk og fiskemat siden 1979. Fersk fisk fra Averøy levert til hele Norge. Fiskebil i Sunnmøre, Østlandet, Trøndelag, Nordmøre og Romsdal.',
  keywords: ['fersk fisk', 'fiskeprodukter', 'fiskemat', 'fiskebil', 'Ole Løvold', 'Averøy', 'laksefilet', 'torskefilet', 'kveiteskiver', 'fisk Møre og Romsdal'],
  authors: [{ name: 'Ole Løvold AS' }],
  creator: 'Ole Løvold AS',
  publisher: 'Ole Løvold AS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.olelovold.no'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ole Løvold AS - Fersk fisk og fiskeprodukter fra Averøy',
    description: 'Landsledende på fisk og fiskemat siden 1979. Fersk fisk fra Averøy levert til hele Norge.',
    url: 'https://www.olelovold.no',
    siteName: 'Ole Løvold AS',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/anlegg.jpg',
        width: 1200,
        height: 800,
        alt: 'Ole Løvold AS anlegget på Averøy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ole Løvold AS - Fersk fisk fra Averøy',
    description: 'Landsledende på fisk og fiskemat siden 1979.',
    images: ['/images/anlegg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'din-google-verification-kode', // Legg til senere
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
