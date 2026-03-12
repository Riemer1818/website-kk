'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { motion, useReducedMotion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { REVEAL_VARIANTS, STAGGER_VARIANTS, REVEAL_TRANSITION, VIEWPORT_CONFIG } from '@/lib/animations'

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type FormData = z.infer<typeof schema>

export function NewsletterSection() {
  const shouldReduce = useReducedMotion()
  const stagger = shouldReduce ? {} : { ...STAGGER_VARIANTS, visible: { transition: { staggerChildren: 0.1 } } }
  const reveal = shouldReduce ? {} : REVEAL_VARIANTS

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      // TODO: wire up to actual email provider (Mailchimp, Loops, etc.)
      await new Promise((res) => setTimeout(res, 800))
      toast.success('You\'re in! Check your inbox.', {
        description: 'Welcome to the BetterBooking.ai community.',
      })
      reset()
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      className="bg-[#1b1b1b] py-24 md:py-28"
      aria-labelledby="newsletter-heading"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
    >
      <div className="mx-auto max-w-[600px] px-6 text-center">
        {/* Heading */}
        <motion.p
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="mb-4 text-xs font-medium uppercase text-white/50"
        >
          Stay in the Loop
        </motion.p>
        <motion.h2
          id="newsletter-heading"
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
        >
          Get Smarter Travel Tips
        </motion.h2>
        <motion.p
          variants={reveal}
          transition={REVEAL_TRANSITION}
          className="text-white/55 mb-10 leading-relaxed"
        >
          AI-found deals, destination guides, and honest Airbnb reviews —
          delivered straight to your inbox.
        </motion.p>

        {/* Form */}
        <motion.form
          variants={reveal}
          transition={REVEAL_TRANSITION}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label="Newsletter signup"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                placeholder="Enter your email…"
                disabled={loading}
                {...register('email')}
                className="h-12 rounded-full border-white/15 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#fc0a7e] focus-visible:border-transparent"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'newsletter-error' : undefined}
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="h-12 rounded-full bg-[#ff656a] px-7 font-semibold text-white hover:bg-[#fc0a7e] transition-colors duration-200 flex-shrink-0"
            >
              {loading ? 'Subscribing…' : 'Subscribe'}
            </Button>
          </div>

          {/* Inline error */}
          {errors.email && (
            <p
              id="newsletter-error"
              role="alert"
              className="mt-3 text-sm text-[#ff8a8e]"
            >
              {errors.email.message}
            </p>
          )}

          <p className="mt-4 text-xs text-white/30">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.form>
      </div>
    </motion.section>
  )
}
