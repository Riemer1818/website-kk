import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { siteConfig } from '@/lib/constants'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-lg text-[#6b6b6b] mb-12">
            Neem contact met ons op voor een vrijblijvende offerte of voor vragen over onze diensten.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <Image
                src="/images/showcasePhoto_7.JPEG"
                alt="Keizer & De Kroon schilderwerk"
                width={600}
                height={450}
                className="w-full h-auto rounded-r-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-8">
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
        </div>
      </main>
      <Footer />
    </>
  )
}
