import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  )
}
