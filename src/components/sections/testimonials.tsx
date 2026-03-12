'use client'

import { Star } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { REVEAL_VARIANTS, STAGGER_VARIANTS, REVEAL_TRANSITION, VIEWPORT_CONFIG } from '@/lib/animations'

export function TestimonialsSection() {
  const shouldReduce = useReducedMotion()
  const stagger = shouldReduce ? {} : { ...STAGGER_VARIANTS, visible: { transition: { staggerChildren: 0.1 } } }
  const reveal = shouldReduce ? {} : REVEAL_VARIANTS

  return (
    <motion.section
      className="bg-[#f9f9f9] py-24 md:py-32"
      aria-labelledby="testimonials-heading"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          variants={reveal}
          transition={REVEAL_TRANSITION}
        >
          <p className="mb-3 text-xs font-medium uppercase text-[#6b6b6b]">
            Travelers Love It
          </p>
          <h2
            id="testimonials-heading"
            className="font-extrabold text-[#111] leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            What people are saying
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          className="flex flex-col md:flex-row gap-6 justify-center"
          role="list"
          aria-label="Customer testimonials"
        >
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.author}
              role="listitem"
              variants={reveal}
              transition={REVEAL_TRANSITION}
              className="relative max-w-[600px] mx-auto w-full bg-white rounded-2xl shadow-sm border border-black/6 p-10"
            >
              {/* Quote mark */}
              <div
                className="absolute -top-5 left-10 flex size-10 items-center justify-center rounded-full gradient-brand shadow-md"
                aria-hidden
              >
                <span className="text-white font-serif text-xl leading-none select-none">&ldquo;</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#ff656a] fill-[#ff656a]"
                    aria-hidden
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote>
                <p className="text-xl font-semibold text-[#111] leading-snug mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div
                    className="size-10 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    aria-hidden
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111]">{t.author}</p>
                    <p className="text-xs text-[#6b6b6b]">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
