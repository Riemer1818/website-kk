'use client'

import { useRef } from 'react'

// Stub: sections use motion/react (whileInView) directly.
export function useScrollReveal<T extends HTMLElement>() {
  return useRef<T>(null)
}
