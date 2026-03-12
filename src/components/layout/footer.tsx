import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

export function Footer() {
  const socialLinks = [
    siteConfig.social.instagram && {
      label: 'Instagram',
      href: siteConfig.social.instagram,
      Icon: Instagram,
    },
    siteConfig.social.twitter && {
      label: 'X (Twitter)',
      href: siteConfig.social.twitter,
      Icon: Twitter,
    },
    siteConfig.social.facebook && {
      label: 'Facebook',
      href: siteConfig.social.facebook,
      Icon: Facebook,
    },
  ].filter(Boolean) as Array<{ label: string; href: string; Icon: typeof Instagram }>

  return (
    <footer className="bg-white border-t border-black/8">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Link href="/" aria-label={`${siteConfig.name} — home`} className="flex items-center gap-3">
              <Image
                src={siteConfig.logo}
                alt=""
                width={48}
                height={48}
                className="size-12"
              />
              <span className="font-bold text-[#111] text-lg">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-[#6b6b6b] max-w-[260px] leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>


          {/* Social icons */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6b6b6b] hover:text-[#111] transition-colors duration-200 p-2.5"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-black/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#6b6b6b]">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          {siteConfig.email && (
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs text-[#6b6b6b] hover:text-[#111] transition-colors duration-200"
            >
              {siteConfig.email}
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
