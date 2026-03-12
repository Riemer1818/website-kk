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
      className="relative min-h-[100dvh] gradient-hero flex items-center justify-center overflow-x-clip"
      aria-label="Hero"
    >

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-20 w-full mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Logo - left side */}
          <div className="flex flex-col items-center lg:items-start justify-start gap-3 sm:gap-4">
            <Image
              src="/header_logo.png"
              alt="Keizer & De Kroon"
              width={500}
              height={100}
              priority
              loading="eager"
              className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] h-auto"
            />
            <p className="text-base sm:text-xl md:text-2xl text-white font-semibold tracking-wide text-center lg:text-left">
              Excellent in schilderwerken
            </p>
          </div>

          {/* Photo - right side, responsive positioning */}
          <div className="relative w-full lg:absolute lg:-right-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45vw] lg:max-w-[600px]">
            <Image
              src="/showcase-photo.JPEG"
              alt="Keizer & De Kroon schilderwerk"
              width={600}
              height={450}
              priority
              loading="eager"
              className="w-full h-auto rounded-lg lg:rounded-l-2xl shadow-2xl"
            />
          </div>
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
