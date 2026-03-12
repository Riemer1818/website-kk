import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'
import { SUPPORT_EMAIL } from '@/lib/constants'

const footerLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Features', href: '/#features' },
  { label: 'Support', href: '/support' },
  { label: 'Privacy', href: '/privacy' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/betterbooking.ai',
    Icon: Instagram,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/betterbookingai',
    Icon: Twitter,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/betterbookingai',
    Icon: Facebook,
  },
]

export function Footer() {
  return (
    <footer className="bg-[#1b1b1b] border-t border-white/8">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Link href="/" aria-label="BetterBooking.ai — home" className="flex items-center gap-3">
              <Image
                src="/logos/handshake.svg"
                alt=""
                width={48}
                height={48}
                className="size-12"
              />
              <span className="font-bold text-white text-lg">BetterBooking.ai</span>
            </Link>
            <p className="text-sm text-white/50 max-w-[260px] leading-relaxed">
              Use AI to pay less for your Airbnb.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200 p-2.5"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} BetterBooking.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-xs text-white/50 hover:text-white/80 transition-colors duration-200"
            >
              {SUPPORT_EMAIL}
            </a>
            <span className="text-white/25" aria-hidden>·</span>
            <Link
              href="/privacy"
              className="text-xs text-white/50 hover:text-white/80 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-white/25" aria-hidden>·</span>
            <Link
              href="/support"
              className="text-xs text-white/50 hover:text-white/80 transition-colors duration-200"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
