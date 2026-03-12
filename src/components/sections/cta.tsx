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
      </div>
    </motion.section>
  )
}
