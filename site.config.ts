import type { FeatureItem, Stat, Testimonial, FaqItem, NavLink } from '@/types'

export const siteConfig = {
  // Brand
  name: 'Keizer & De Kroon',
  tagline: 'Excellent in schilderwerken',
  logo: '/favicon.png',

  // Contact
  email: 'info@keizerendekroon.nl',
  phone: '(020) 261 4972',
  address: 'Prinsengracht 343D 1016HK Amsterdam',

  // Social
  social: {
    instagram: '',
    twitter: '',
    facebook: '',
  },

  // Primary CTA
  primaryCta: {
    text: 'Neem Contact Op',
    url: '#contact',
    external: false,
  },

  // Navigation
  navLinks: [
    { label: 'Diensten', href: '#features' },
    { label: 'Contact', href: '/contact' },
  ] as NavLink[],

  // Hero Section
  hero: {
    eyebrow: 'Betrouwbaar · Zorgvuldig · Ontzorgt',
    headline: 'Excellent in',
    headlineAccent: 'Schilderwerken.',
    subheadline: 'Vernieuwend en duurzaam vakmanschap, met focus op **hoogwaardig schilderwerk in het hogere segment** in Amsterdam en omgeving.',
    ctaPrimary: {
      text: 'Neem Contact Op',
      href: '#contact',
    },
    ctaSecondary: {
      text: 'Bekijk Onze Werkwijze',
      href: '#demo',
    },
    images: [
      { src: '/images/construction-1.jpg', alt: 'Hoogwaardig schilderwerk', rotation: 3 },
      { src: '/images/construction-2.jpg', alt: 'Vakmanschap en precisie', rotation: -2 },
    ],
  },

  // Features/Services
  features: [
    {
      title: 'Hoogwaardig Binnenschilderwerk',
      body: 'Keizer & De Kroon verzorgt hoogwaardig binnenschilderwerk voor panden waar uitstraling, detail en afwerking van belang zijn. Onze werkzaamheden vinden voornamelijk plaats in karaktervol commercieel en particulier vastgoed in het centrum van Amsterdam.',
      image: '/images/binnenschilderwerk.JPEG',
      imageAlt: 'Hoogwaardig binnenschilderwerk',
      imageLeft: false,
    },
    {
      title: 'Met oog voor detail',
      body: '• Gespecialiseerd in schilderwerk voor karaktervol vastgoed\n• Zorgvuldige uitvoering met oog voor detail en afwerking\n• Werkzaamheden afgestemd op panden die in gebruik blijven\n• Heldere planning en duidelijke communicatie\n• Actief in het centrum van Amsterdam en omgeving',
      image: '/images/detail.JPEG',
      imageAlt: 'Waarom Keizer & De Kroon',
      imageLeft: true,
    },
    {
      title: 'Vastgoedonderhoud',
      body: 'Wij verzorgen professioneel vastgoedonderhoud waarbij kwaliteit en zorgvuldigheid voorop staan. Blijft uw pand in gebruik tijdens onze werkzaamheden? Dan stemmen wij onze werkwijze hier zorgvuldig op af, zodat processen en het dagelijks gebruik zo min mogelijk verstoord worden.',
      image: '/images/vastgoedonderhoud.JPEG',
      imageAlt: 'Professioneel vastgoedonderhoud',
      imageLeft: false,
    },
  ] as FeatureItem[],

  // Stats
  stats: [
    {
      value: 'Amsterdam',
      label: 'Centrum Focus',
    },
    {
      value: '100%',
      numericValue: 100,
      suffix: '%',
      label: 'Kwaliteit Gegarandeerd',
    },
    {
      value: 'Minimaal',
      label: 'Verstoring',
    },
    {
      value: '24u',
      label: 'Bereikbaar',
    },
  ] as Stat[],

  // Testimonials
  testimonials: [
    {
      quote: 'De zorgvuldige werkwijze en het oog voor detail van Keizer & De Kroon zijn precies wat we zochten voor ons monumentale pand in de Jordaan. Het resultaat overtreft onze verwachtingen.',
      author: 'J. van der Berg',
      role: 'Particuliere Opdrachtgever',
      rating: 5,
    },
    {
      quote: 'Professioneel, betrouwbaar en met minimale verstoring van onze bedrijfsvoering. De kwaliteit van het schilderwerk is uitstekend en het contact verliep voortreffelijk.',
      author: 'M. Jansen',
      role: 'Vastgoedbeheerder',
      rating: 5,
    },
  ] as Testimonial[],

  // FAQ
  faq: [
    {
      question: 'Wat maakt Keizer & De Kroon uniek?',
      answer: 'Wij specialiseren ons in hoogwaardig schilderwerk in het hogere segment. Met een focus op uitstraling, detail en afwerking verzorgen wij werkzaamheden in karaktervol vastgoed in Amsterdam centrum. Onze zorgvuldige werkwijze zorgt voor minimale verstoring.',
    },
    {
      question: 'Hoe verloopt een project bij Keizer & De Kroon?',
      answer: 'We starten met een opname op locatie, maken vervolgens een inventarisatie en voorstel. Na akkoord bereiden we de werkzaamheden zorgvuldig voor, voeren het schilderwerk uit volgens planning, controleren het resultaat bij oplevering en blijven ook daarna bereikbaar voor nazorg.',
    },
    {
      question: 'Kan ik mijn pand in gebruik houden tijdens de werkzaamheden?',
      answer: 'Ja, absoluut. Blijft uw pand in gebruik tijdens onze werkzaamheden? Dan stemmen wij onze werkwijze hier zorgvuldig op af, zodat processen en het dagelijks gebruik van het pand zo min mogelijk verstoord worden.',
    },
    {
      question: 'Waar zijn jullie actief?',
      answer: 'Onze werkzaamheden vinden voornamelijk plaats in karaktervol commercieel en particulier vastgoed in het centrum van Amsterdam en directe omgeving.',
    },
    {
      question: 'Wat voor type panden behandelen jullie?',
      answer: 'Wij verzorgen hoogwaardig binnenschilderwerk en vastgoedonderhoud voor panden waar uitstraling, detail en afwerking van belang zijn. Dit betreft zowel commercieel als particulier vastgoed.',
    },
    {
      question: 'Hoe neem ik contact op voor een offerte?',
      answer: 'U kunt contact met ons opnemen via telefoon (020) 261 4972 of via e-mail info@keizerendekroon.nl. We plannen graag een opname op locatie in om uw wensen te bespreken en een passend voorstel te maken.',
    },
    {
      question: 'Hoe zorgen jullie voor kwaliteit?',
      answer: 'Door zorgvuldige voorbereiding, georganiseerde uitvoering en grondige controle bij oplevering. We werken met oog voor detail en afwerking, gebruiken hoogwaardige materialen en blijven ook na oplevering bereikbaar voor nazorg.',
    },
    {
      question: 'Wat houdt de nazorg in?',
      answer: 'Ook na oplevering blijven wij bereikbaar voor vragen of aanvullende werkzaamheden. Zo zorgen wij ervoor dat het eindresultaat volledig naar wens is en blijft.',
    },
  ] as FaqItem[],
}
