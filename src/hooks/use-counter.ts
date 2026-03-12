'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export function useCounter(target: number, _suffix = '') {
  const ref = useRef<HTMLElement>(null)
  const shouldReduce = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!inView) return

    if (shouldReduce) {
      setDisplayed(target)
      return
    }

    const controls = animate(0, target, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setDisplayed(Math.round(v)),
    })

    return () => controls.stop()
  }, [inView, target, shouldReduce])

  return { ref, displayed }
}
