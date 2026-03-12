'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useCounter } from '@/hooks/use-counter'
import { STATS } from '@/lib/constants'
import { REVEAL_VARIANTS, STAGGER_VARIANTS, REVEAL_TRANSITION, VIEWPORT_CONFIG } from '@/lib/animations'

function StatItem({ stat }: { stat: (typeof STATS)[0] }) {
  const isNumeric = stat.numericValue !== undefined
  const { ref, displayed } = useCounter(stat.numericValue ?? 0)
  const isRating = stat.label === 'Average Rating'
  const shouldReduce = useReducedMotion()
  const reveal = shouldReduce ? {} : REVEAL_VARIANTS

  return (
    <motion.div
      className="flex flex-col items-center text-center px-6"
      variants={reveal}
      transition={REVEAL_TRANSITION}
    >
      {isRating ? (
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-extrabold text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontVariantNumeric: 'tabular-nums' }}
            data-stat
          >
            {stat.value}
          </span>
          <div className="flex gap-1 mt-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-[#ff656a] fill-[#ff656a]"
                aria-hidden
              />
            ))}
          </div>
        </div>
      ) : isNumeric ? (
        <span
          ref={ref as React.RefObject<HTMLSpanElement>}
          className="font-extrabold text-white leading-none"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontVariantNumeric: 'tabular-nums' }}
          data-stat
          aria-label={stat.value}
        >
          {displayed}{stat.suffix ?? ''}
        </span>
      ) : (
        <span
          className="font-extrabold text-white leading-none"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontVariantNumeric: 'tabular-nums' }}
          data-stat
        >
          {stat.value}
        </span>
      )}

      <p className="mt-3 text-xs font-medium uppercase text-white/50">
        {stat.label}
      </p>
    </motion.div>
  )
}

export function StatsSection() {
  const shouldReduce = useReducedMotion()
  const stagger = shouldReduce ? {} : STAGGER_VARIANTS

  return (
    <motion.section
      className="bg-[#1b1b1b] py-20 md:py-24"
      aria-label="Statistics"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/8">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
