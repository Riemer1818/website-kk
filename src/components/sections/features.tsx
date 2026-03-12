'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FEATURES } from '@/lib/constants'
import { REVEAL_VARIANTS, STAGGER_VARIANTS, REVEAL_TRANSITION, VIEWPORT_CONFIG } from '@/lib/animations'
import type { FeatureItem } from '@/types'

function FeatureRow({ feature, index }: { feature: FeatureItem; index: number }) {
  const shouldReduce = useReducedMotion()
  const stagger = shouldReduce ? {} : STAGGER_VARIANTS
  const reveal = shouldReduce ? {} : REVEAL_VARIANTS

  return (
    <motion.div
      className={cn(
        'flex flex-col items-center gap-12 lg:gap-20',
        feature.imageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row',
      )}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
    >
      {/* Text block */}
      <motion.div
        className="flex-1 max-w-[440px]"
        variants={reveal}
        transition={REVEAL_TRANSITION}
      >
        {feature.badge && (
          <span className="inline-block mb-3 sm:mb-4 rounded-full bg-[#ff656a]/10 px-3 py-1 text-xs font-semibold text-[#ff656a]">
            {feature.badge}
          </span>
        )}
        <h2
          className="mb-4 sm:mb-5 font-extrabold text-[#3a2313] leading-tight text-2xl sm:text-3xl lg:text-4xl"
        >
          {feature.title}
        </h2>
        <div className="text-[#6b6b6b] leading-relaxed text-sm sm:text-base md:text-lg">
          {feature.body.split('\n').map((line, idx) => {
            if (line.startsWith('• ')) {
              return (
                <div key={idx} className="flex items-start gap-3 mb-3">
                  <span className="text-[#ff656a] mt-1 text-xl">•</span>
                  <span>{line.substring(2)}</span>
                </div>
              )
            }
            return <p key={idx} className="mb-3">{line}</p>
          })}
        </div>
      </motion.div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-[480px]">
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            width={480}
            height={340}
            loading="eager"
            className="rounded-xl shadow-xl object-cover w-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-white py-16 sm:py-24 md:py-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Section header */}

        {/* Feature rows */}
        <div className="flex flex-col gap-24 md:gap-32">
          {FEATURES.map((feature, i) => (
            <FeatureRow key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
