import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { siteConfig } from '@/lib/constants'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-32 pb-20">
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text content - left side */}
            <div className="flex flex-col items-start justify-center gap-6">
              <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
              <p className="text-lg text-[#6b6b6b] mb-4">
                Neem contact met ons op voor een vrijblijvende offerte of voor vragen over onze diensten.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Telefoon</h2>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-lg text-[#c44b2a] hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">E-mail</h2>
                  <a href={`mailto:${siteConfig.email}`} className="text-lg text-[#c44b2a] hover:underline">
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Locatie</h2>
                  <p className="text-lg text-[#6b6b6b]">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            {/* Photo - right side, overflowing */}
            <div className="relative lg:absolute lg:-right-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45vw] lg:max-w-[600px]">
              <Image
                src="/images/showcasePhoto_7.JPEG"
                alt="Keizer & De Kroon schilderwerk"
                width={600}
                height={450}
                className="w-full h-auto rounded-l-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
