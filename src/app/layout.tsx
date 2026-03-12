import type { Metadata } from 'next'
import { Gothic_A1 } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const gothicA1 = Gothic_A1({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-gothic-a1',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'BetterBooking.ai — AI-Powered Airbnb Pricing',
    template: '%s | BetterBooking.ai',
  },
  description:
    'BetterBooking.ai uses AI to help you get better prices on Airbnb. ' +
    'Free Chrome extension. Average savings: $300 on long stays.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://betterbooking.ai',
    siteName: 'BetterBooking.ai',
    title: 'BetterBooking.ai — AI-Powered Airbnb Pricing',
    description:
      'BetterBooking.ai uses AI to help you get better prices on Airbnb. Free Chrome extension.',
    images: [
      {
        url: '/logos/betterbooking-pink.png',
        width: 1200,
        height: 630,
        alt: 'BetterBooking.ai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BetterBooking.ai — AI-Powered Airbnb Pricing',
    description:
      'Free Chrome extension that uses AI to help you get better prices on Airbnb.',
  },
  metadataBase: new URL('https://betterbooking.ai'),
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={gothicA1.variable}>
      <body className="antialiased">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
