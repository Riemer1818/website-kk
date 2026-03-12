// framer-motion (motion/react) animation presets for BetterBooking.ai
// All animations use only transform + opacity (compositor-friendly)

import type { Variants, Transition } from 'framer-motion'

export const REVEAL_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export const REVEAL_FAST_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const REVEAL_SCALE_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
}

export const STAGGER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const REVEAL_TRANSITION: Transition = {
  duration: 0.9,
  ease: 'easeOut',
}

export const VIEWPORT_CONFIG = {
  once: true,
  margin: '-10% 0px',
} as const

export const HERO_ENTRANCE_DELAY = 0.3
