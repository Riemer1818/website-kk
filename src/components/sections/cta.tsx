'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CHROME_STORE_URL, SUPPORT_EMAIL } from '@/lib/constants'
import { REVEAL_VARIANTS, STAGGER_VARIANTS, REVEAL_TRANSITION, VIEWPORT_CONFIG } from '@/lib/animations'

export function CtaSection() {
  const shouldReduce = useReducedMotion()
  const stagger = shouldReduce ? {} : { ...STAGGER_VARIANTS, visible: { transition: { staggerChildren: 0.12 } } }
  const reveal = shouldReduce ? {} : REVEAL_VARIANTS

  return (
    <motion.section
      className="gradient-brand py-28 md:py-36"
      aria-labelledby="cta-heading"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
    >
      <div className="mx-auto max-w-[800px] px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="mb-5 text-xs font-medium uppercase text-white/60"
        >
        </motion.p>

        {/* Heading */}
        <motion.h2
          id="cta-heading"
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="font-extrabold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
        >
          Geinteresseerd in hoogwaardig schilderwerk voor karaktervol vastgoed?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="text-white/75 text-lg leading-relaxed mb-10 max-w-[500px] mx-auto"
        >
          Neem vandaag nog contact op voor een vrijblijvend gesprek.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1b1b1b] shadow-lg transition-[color,background-color,transform] duration-200 hover:bg-[#c44b2a] hover:text-white hover:scale-[1.02]"
          >
            Vraag Offerte Aan
          </a>

          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white ring-1 ring-inset ring-white/30 transition-[box-shadow] duration-200 hover:ring-white/90"
          >
            Neem Contact Op
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
