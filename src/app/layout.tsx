import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ole Løvold AS - Fisk og Fiskeprodukter siden 1979',
  description: 'Familiebedrift med 45 års erfaring innen fisk og fiskeprodukter. Finn nærmeste fiskebil eller kontakt oss for bestilling.',
  keywords: 'fisk, fiskeprodukter, fersk fisk, fiskebil, Ole Løvold, Norge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  )
}
