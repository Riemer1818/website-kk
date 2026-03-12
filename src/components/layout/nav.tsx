'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, CHROME_STORE_URL } from '@/lib/constants'
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
        {/* Logo + brand name */}
        <Link href="/" aria-label="BetterBooking.ai — home" className="flex items-center gap-3">
          <Image
            src="/logos/handshake.svg"
            alt=""
            width={48}
            height={48}
            priority
            className="size-12"
          />
          <span className="font-bold text-white text-lg leading-tight hidden sm:block">
            BetterBooking.ai
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#fc0a7e] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}

          <a
            href={CHROME_STORE_URL}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1b1b1b] transition-colors duration-200 hover:bg-[#fc0a7e] hover:text-white shadow-sm"
            target={CHROME_STORE_URL !== '#' ? '_blank' : undefined}
            rel={CHROME_STORE_URL !== '#' ? 'noopener noreferrer' : undefined}
          >
            Add to Chrome
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
            {NAV_LINKS.map((link) => (
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
              href={CHROME_STORE_URL}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1b1b1b] hover:bg-[#fc0a7e] hover:text-white transition-colors duration-200"
              target={CHROME_STORE_URL !== '#' ? '_blank' : undefined}
              rel={CHROME_STORE_URL !== '#' ? 'noopener noreferrer' : undefined}
            >
              Add to Chrome — It&apos;s Free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
