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
          Free Chrome Extension
        </motion.p>

        {/* Heading */}
        <motion.h2
          id="cta-heading"
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="font-extrabold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
        >
          Ready to Book Smarter?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="text-white/75 text-lg leading-relaxed mb-10 max-w-[500px] mx-auto"
        >
          Join 100,000+ travelers using AI to get better Airbnb prices.
          Install in seconds, free forever.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={CHROME_STORE_URL}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1b1b1b] shadow-lg transition-[color,background-color,transform] duration-200 hover:bg-[#fc0a7e] hover:text-white hover:scale-[1.02]"
            target={CHROME_STORE_URL !== '#' ? '_blank' : undefined}
            rel={CHROME_STORE_URL !== '#' ? 'noopener noreferrer' : undefined}
          >
            Add to Chrome — It&apos;s Free
          </a>

          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white ring-1 ring-inset ring-white/30 transition-[box-shadow] duration-200 hover:ring-white/90"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
