'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileOpen])

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        'pt-[env(safe-area-inset-top,0px)]',
        scrolled
          ? 'bg-[#1b1b1b]/95 border-b border-white/8 py-3'
          : 'bg-transparent py-5',
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between">
        {/* Square logo */}
        <Link href="/" aria-label={`${siteConfig.name} — home`} className="flex items-center">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={48}
            height={48}
            priority
            className="size-12"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#c44b2a] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}

          <a
            href={siteConfig.primaryCta.url}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1b1b1b] transition-colors duration-200 hover:bg-[#c44b2a] hover:text-white shadow-sm"
            target={siteConfig.primaryCta.external ? '_blank' : undefined}
            rel={siteConfig.primaryCta.external ? 'noopener noreferrer' : undefined}
          >
            {siteConfig.primaryCta.text}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-3 text-white/80 hover:text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden border-t border-white/10 bg-[#1b1b1b]/95"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium text-white/80 hover:text-white border-b border-white/8 last:border-0 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.primaryCta.url}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1b1b1b] hover:bg-[#c44b2a] hover:text-white transition-colors duration-200"
              target={siteConfig.primaryCta.external ? '_blank' : undefined}
              rel={siteConfig.primaryCta.external ? 'noopener noreferrer' : undefined}
            >
              {siteConfig.primaryCta.text}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
