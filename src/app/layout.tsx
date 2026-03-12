import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Keizer & De Kroon — Excellent in schilderwerken',
    template: '%s | Keizer & De Kroon',
  },
  description:
    'Vernieuwend en duurzaam vakmanschap, met focus op schilderwerk in het hogere segment in Amsterdam en omgeving.',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.keizerendekroon.nl',
    siteName: 'Keizer & De Kroon',
    title: 'Keizer & De Kroon — Excellent in schilderwerken',
    description:
      'Vernieuwend en duurzaam vakmanschap, met focus op schilderwerk in het hogere segment in Amsterdam en omgeving.',
    images: [
      {
        url: '/static/square_logo.png',
        width: 1200,
        height: 1200,
        alt: 'Keizer & De Kroon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keizer & De Kroon — Excellent in schilderwerken',
    description:
      'Vernieuwend en duurzaam vakmanschap, met focus op schilderwerk in het hogere segment in Amsterdam en omgeving.',
  },
  metadataBase: new URL('https://www.keizerendekroon.nl'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
