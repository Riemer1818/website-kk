import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { AboutVideoSection } from '@/components/sections/about-video'
import { FeaturesSection } from '@/components/sections/features'
import { StatsSection } from '@/components/sections/stats'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CtaSection } from '@/components/sections/cta'
import { NewsletterSection } from '@/components/sections/newsletter'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <div id="about">
          <AboutVideoSection />
        </div>
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
