import type { FeatureItem, Stat, Testimonial, FaqItem, NavLink } from '@/types'

export const siteConfig = {
  // Brand
  name: 'BetterBooking.ai',
  tagline: 'Use AI to pay less for your Airbnb.',
  logo: '/logos/handshake.svg',

  // Contact
  email: 'support@betterbooking.ai',
  phone: '',
  address: '',

  // Social
  social: {
    instagram: 'https://instagram.com/betterbooking.ai',
    twitter: 'https://x.com/betterbookingai',
    facebook: 'https://facebook.com/betterbookingai',
  },

  // Primary CTA
  primaryCta: {
    text: 'Try It Free — Add to Chrome',
    url: process.env.NEXT_PUBLIC_CHROME_STORE_URL ??
         'https://chromewebstore.google.com/detail/gpbhclmapjhojhkjmfnilalfhldlffmn?utm_source=item-share-cp',
    external: true,
  },

  // Navigation
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Our Story', href: '/our-story' },
  ] as NavLink[],

  // Hero Section
  hero: {
    eyebrow: 'Chrome Extension · Free to Install',
    headline: 'Book Airbnb',
    headlineAccent: 'Smarter.',
    subheadline: 'BetterBooking.ai puts simple AI in your hands to secure a better Airbnb rate, **averaging a 12% discount.**',
    ctaPrimary: {
      text: 'Try It Free — Add to Chrome',
      href: '#', // Uses primaryCta.url
    },
    ctaSecondary: {
      text: 'See How It Works',
      href: '#demo',
    },
    images: [
      { src: '/images/hero-guest.jpg', alt: '', rotation: 3 },
      { src: '/images/hero-homes.jpg', alt: '', rotation: -2 },
    ],
  },

  // Features
  features: [
    {
      title: 'Get a Better Deal',
      body: 'Browse Airbnb just like you normally would. When you find a place you love, simply tell us your dates and what you want to pay. Our smart assistant steps in to handle the rest, working in the background to secure you a better price without any of the guesswork.',
      image: '/images/feature-messaging.jpg',
      imageAlt: 'Airbnb messaging interface showing BetterBooking.ai in action',
      imageLeft: false,
    },
    {
      title: 'Keep More of Your Cash',
      body: 'Stop overpaying for your trips. Our AI assistant targets up to 30% off the listed price, securing an average 12% discount for our users. You keep more money in your pocket to spend on your actual vacation, all without lifting a finger.',
      badge: 'Average 12% savings on your stays',
      image: '/images/feature-pricing.jpg',
      imageAlt: 'Airbnb total price display showing savings with BetterBooking.ai',
      imageLeft: true,
    },
    {
      title: 'Save Time',
      body: 'Securing the perfect Airbnb takes time and energy. BetterBooking.ai runs quietly in your browser, doing everything you used to need to do manually such as politely handling conversations with hosts for you. Focus on planning your trip, and let us handle the rest.',
      image: '/images/feature-stays.jpg',
      imageAlt: 'Beautiful Airbnb guest favourite listing in Japan',
      imageLeft: false,
    },
  ] as FeatureItem[],

  // Stats
  stats: [
    {
      value: '$5m+',
      label: 'Booking Savings',
    },
    {
      value: '100k+',
      numericValue: 100,
      suffix: 'k+',
      label: 'Installs',
    },
    {
      value: '5.0',
      label: 'Average Rating',
    },
    {
      value: '24h',
      label: 'Support Response',
    },
  ] as Stat[],

  // Testimonials
  testimonials: [
    {
      quote: 'Digital Nomads Dream!!! Saving me time, money and stress. Thank you',
      author: 'Mark Swiderski',
      role: 'Nomad',
      rating: 5,
    },
  ] as Testimonial[],

  // FAQ
  faq: [
    {
      question: 'What is BetterBooking.ai?',
      answer: 'BetterBooking.ai is a free Chrome extension that uses AI to negotiate a better price on Airbnb listings on your behalf. Browse Airbnb as you normally would, tell us your dates and target price, and our smart assistant handles the rest — working in the background to get you a lower rate.',
    },
    {
      question: 'Is it really free?',
      answer: 'Yes, BetterBooking.ai is completely free to install and use. Add it from the Chrome Web Store in seconds — no account or credit card required.',
    },
    {
      question: 'How does it work?',
      answer: 'When you find a listing you like, simply tell BetterBooking.ai your dates and what you want to pay. Our AI assistant steps in and politely handles the conversation with the host on your behalf, working to secure you a better price without you needing to lift a finger.',
    },
    {
      question: 'How much can I realistically save?',
      answer: 'Our users save an average of 12% on their stays. Our AI targets up to 30% off the listed price, though results vary by listing, host, and dates. Even a modest discount on a week-long stay adds up to real money back in your pocket.',
    },
    {
      question: 'Do I need to do anything special?',
      answer: 'No. Just use Airbnb exactly as you normally would. BetterBooking.ai runs quietly alongside your browsing experience — there is no tech jargon to learn and no complicated setup. When you find a place you love, we take it from there.',
    },
    {
      question: 'Is BetterBooking.ai safe to use?',
      answer: 'Yes. The extension only reads listing information visible on the Airbnb page when you actively initiate a negotiation. It does not access your Airbnb account credentials, payment information, personal data, or browsing history outside of the listing you are viewing.',
    },
    {
      question: 'Which browsers are supported?',
      answer: 'Currently Chrome and Chromium-based browsers (Brave, Microsoft Edge). Firefox support is on our roadmap.',
    },
    {
      question: 'How do I uninstall it?',
      answer: 'Right-click the BetterBooking.ai icon in your browser toolbar and select "Remove from Chrome", or navigate to chrome://extensions and remove it there.',
    },
    {
      question: 'I found a bug. How do I report it?',
      answer: 'Email us at support@betterbooking.ai with a description of the issue and your Chrome version. Screenshots are always helpful!',
    },
  ] as FaqItem[],
}
