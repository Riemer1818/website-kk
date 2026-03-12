'use client'

import { useRef } from 'react'
import { Play } from 'lucide-react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { REVEAL_VARIANTS, STAGGER_VARIANTS, REVEAL_TRANSITION, VIEWPORT_CONFIG } from '@/lib/animations'

const VIDEO_SRC = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL ?? null

function VideoContent({ src }: { src: string }) {
  const isEmbed = src.includes('youtube.com') || src.includes('loom.com')

  if (isEmbed) {
    return (
      <iframe
        src={src}
        title="BetterBooking.ai Demo"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full rounded-2xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    )
  }

  return (
    <video
      src={src}
      controls
      preload="metadata"
      className="absolute inset-0 w-full h-full rounded-2xl object-cover"
    >
      <track kind="captions" srcLang="en" label="English captions" />
      Your browser does not support the video tag.
    </video>
  )
}

function VideoPlaceholder() {
  const pingRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(pingRef, { once: false })

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 gradient-brand rounded-2xl">
      <div className="relative" ref={pingRef}>
        <div
          className={cn(
            'absolute inset-0 rounded-full bg-white/20',
            isInView && 'animate-ping',
          )}
          aria-hidden
        />
        <div className="relative flex size-20 items-center justify-center rounded-full bg-white/25 border border-white/30">
          <Play className="text-white ml-1" size={32} fill="currentColor" aria-hidden />
        </div>
      </div>
      <p className="text-white/70 text-sm font-medium">Demo Video Coming Soon</p>
    </div>
  )
}

export function AboutVideoSection() {
  const shouldReduce = useReducedMotion()
  const stagger = shouldReduce ? {} : STAGGER_VARIANTS
  const reveal = shouldReduce ? {} : REVEAL_VARIANTS

  return (
    <motion.section
      id="demo"
      className="bg-white py-24 md:py-32"
      aria-labelledby="demo-heading"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
    >
      <div className="mx-auto max-w-[1000px] px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          variants={reveal}
          transition={REVEAL_TRANSITION}
        >
          <p className="mb-3 text-xs font-medium uppercase text-[#6b6b6b]">
            In Action
          </p>
          <h2
            id="demo-heading"
            className="font-extrabold text-[#111] leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            See It In Action
          </h2>
          <p className="mt-4 text-[#6b6b6b] text-lg max-w-[520px] mx-auto leading-relaxed">
            Watch how our smart assistant steps in to get you a lower Airbnb price automatically.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-black/8"
        >
          {VIDEO_SRC ? <VideoContent src={VIDEO_SRC} /> : <VideoPlaceholder />}
        </motion.div>
      </div>
    </motion.section>
  )
}
