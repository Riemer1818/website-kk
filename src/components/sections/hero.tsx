'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import {
  REVEAL_VARIANTS,
  STAGGER_VARIANTS,
  REVEAL_TRANSITION,
  HERO_ENTRANCE_DELAY,
} from '@/lib/animations'

export function HeroSection() {
  const shouldReduce = useReducedMotion()

  const stagger = shouldReduce
    ? {}
    : { ...STAGGER_VARIANTS, visible: { transition: { staggerChildren: 0.12, delayChildren: HERO_ENTRANCE_DELAY } } }

  const reveal = shouldReduce ? {} : REVEAL_VARIANTS

  return (
    <section
      className="relative min-h-[100dvh] gradient-hero flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle radial overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(149,93,241,0.15) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-32 md:py-40 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left: Content */}
          <motion.div
            className="flex-1 max-w-[580px]"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Header logo */}
            <motion.div
              variants={reveal}
              transition={REVEAL_TRANSITION}
              className="mb-6"
            >
              <Image
                src="/header_logo.png"
                alt="Keizer & De Kroon"
                width={800}
                height={160}
                priority
                className="h-32 w-auto"
              />
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={reveal}
              transition={REVEAL_TRANSITION}
              className="text-white font-extrabold leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              {siteConfig.hero.headline}
              <br />
              <span
                style={{
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                {siteConfig.hero.headlineAccent}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={reveal}
              transition={REVEAL_TRANSITION}
              className="text-white/75 font-light leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '480px' }}
              dangerouslySetInnerHTML={{ __html: siteConfig.hero.subheadline.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white/90 font-semibold">$1</strong>') }}
            />

            {/* CTAs */}
            <motion.div
              variants={reveal}
              transition={REVEAL_TRANSITION}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={siteConfig.primaryCta.url}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1b1b1b] shadow-lg transition-[color,background-color,transform] duration-200 hover:bg-[#c44b2a] hover:text-white hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white"
                target={siteConfig.primaryCta.external ? '_blank' : undefined}
                rel={siteConfig.primaryCta.external ? 'noopener noreferrer' : undefined}
              >
                {siteConfig.hero.ctaPrimary.text}
              </a>

              <a
                href={siteConfig.hero.ctaSecondary.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
              >
                {siteConfig.hero.ctaSecondary.text}
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Floating images */}
          <motion.div
            className="relative hidden lg:flex flex-1 justify-end items-center"
            style={{ minHeight: '500px' }}
            aria-hidden
            initial={shouldReduce ? false : { opacity: 0, y: 70 }}
            animate={shouldReduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: HERO_ENTRANCE_DELAY + 0.2 }}
          >
            <div className="absolute right-8 top-8 z-10">
              <Image
                src={siteConfig.hero.images[0].src}
                alt={siteConfig.hero.images[0].alt}
                width={320}
                height={220}
                className="rounded-2xl shadow-2xl object-cover"
                style={{ transform: `rotate(${siteConfig.hero.images[0].rotation}deg)` }}
                priority
              />
            </div>

            <div className="absolute right-0 bottom-0 z-20">
              <Image
                src={siteConfig.hero.images[1].src}
                alt={siteConfig.hero.images[1].alt}
                width={360}
                height={260}
                className="rounded-2xl shadow-2xl object-cover"
                style={{ transform: `rotate(${siteConfig.hero.images[1].rotation}deg)` }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-white/30" aria-hidden />
        <ChevronDown size={16} aria-hidden />
      </div>
    </section>
  )
}
