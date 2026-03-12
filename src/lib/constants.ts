// Re-export from site.config.ts for backwards compatibility
import { siteConfig as config } from '../../site.config'

export { siteConfig } from '../../site.config'

// Legacy exports
export const CHROME_STORE_URL = config.primaryCta.url
export const SUPPORT_EMAIL = config.email
export const NAV_LINKS = config.navLinks
export const FEATURES = config.features
export const STATS = config.stats
export const TESTIMONIALS = config.testimonials
export const FAQ_ITEMS = config.faq
