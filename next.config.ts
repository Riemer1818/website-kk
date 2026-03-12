import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  images: {
    // Image optimization is not supported with static export
    unoptimized: true,
  },
}

export default config
