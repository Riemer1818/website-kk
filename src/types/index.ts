export interface FeatureItem {
  title: string
  body: string
  badge?: string
  image: string
  imageAlt: string
  imageLeft: boolean
}

export interface Stat {
  value: string
  numericValue?: number
  suffix?: string
  label: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  rating: number
}

export interface FaqItem {
  question: string
  answer: string
}

export interface NavLink {
  label: string
  href: string
}
