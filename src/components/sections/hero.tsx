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

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 w-full mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Logo - left side */}
          <motion.div
            className="flex flex-col items-center justify-start gap-4"
            initial={shouldReduce ? false : { opacity: 0, x: -30 }}
            animate={shouldReduce ? false : { opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: HERO_ENTRANCE_DELAY }}
          >
            <Image
              src="/header_logo.png"
              alt="Keizer & De Kroon"
              width={500}
              height={100}
              priority
              className="w-full max-w-[500px] h-auto"
            />
            <p className="text-xl md:text-2xl text-white font-semibold tracking-wide">
              Excellent in schilderwerken
            </p>
          </motion.div>

          {/* Photo - right side, overflowing */}
          <motion.div
            className="relative lg:absolute lg:-right-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45vw] lg:max-w-[600px]"
            initial={shouldReduce ? false : { opacity: 0, x: 30 }}
            animate={shouldReduce ? false : { opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: HERO_ENTRANCE_DELAY + 0.2 }}
          >
            <Image
              src="/showcase-photo.JPEG"
              alt="Keizer & De Kroon schilderwerk"
              width={600}
              height={450}
              priority
              className="w-full h-auto rounded-l-2xl shadow-2xl"
            />
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
