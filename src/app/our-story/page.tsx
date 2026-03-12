import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { CHROME_STORE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'We built BetterBooking.ai to fight back against travel industry algorithms that charge you the maximum you\'ll pay. Here\'s why.',
}

export default function OurStoryPage() {
  return (
    <>
      <Nav />
      <main id="main-content">

        {/* Page header */}
        <div className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-[800px] px-6">
            <p className="mb-4 text-xs font-medium uppercase text-white/50">
              About Us
            </p>
            <h1
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              Our Story
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#111111]">
          <div className="mx-auto max-w-[800px] px-6 py-20 md:py-28">

            {/* The industry secret */}
            <p
              className="text-white/60 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1.05rem, 2vw, 1.2rem)' }}
            >
              Here is the secret the travel industry doesn&apos;t want you to know: they are using
              massive amounts of data and technology to charge you as much as they possibly can.
              Whether it&apos;s for a flight, a hotel, or a taxi, they use algorithms to figure out
              the absolute highest price you are willing to pay and then they try to charge you
              exactly that.
            </p>

            {/* Fight-back statement */}
            <p
              className="font-extrabold text-white leading-tight mb-10"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              We think it&apos;s time to fight back.
            </p>

            {/* Mission */}
            <p
              className="text-white/60 leading-relaxed"
              style={{ fontSize: 'clamp(1.05rem, 2vw, 1.2rem)' }}
            >
              We built BetterBooking.ai to put the power back in your hands. We&apos;re making it
              as simple as possible for you to leverage the exact same AI and tech they use to
              maximize their profits, but with one massive difference: we are using it to save you
              money. Right now, our smart assistant is laser-focused on getting you a better deal on
              your Airbnb. There is no tech jargon to learn and no complicated setup. Just use it
              right alongside how you would ordinarily book an Airbnb, and we are incredibly
              confident we can lower your price. Give it a try.
            </p>

            {/* Divider */}
            <div className="my-14 h-px bg-white/10" aria-hidden />

            {/* Who are we */}
            <h2 className="mb-5 text-xs font-medium uppercase text-[#ff656a]">
              Who are we?
            </h2>
            <p
              className="text-white/60 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(1.05rem, 2vw, 1.2rem)' }}
            >
              We are digital nomads who built this for people who love to travel. Why? We know how
              expensive and stressful traveling can be, and we want to make it easier and cheaper
              for you. We want you to use the money you save to extend your trip a few extra nights,
              explore a little further, have more experiences, benefit local economies, and
              ultimately see more of the world.
            </p>
            <p className="text-white/50 text-sm mb-14">Made with love. ❤️</p>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-14" aria-hidden />

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={CHROME_STORE_URL}
                className="inline-flex items-center gap-2 rounded-full bg-[#ff656a] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#fc0a7e]"
                target={CHROME_STORE_URL !== '#' ? '_blank' : undefined}
                rel={CHROME_STORE_URL !== '#' ? 'noopener noreferrer' : undefined}
              >
                Add to Chrome — It&apos;s Free
              </a>
              <Link
                href="/"
                className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors duration-200"
              >
                ← Back to home
              </Link>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
