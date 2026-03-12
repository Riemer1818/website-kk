import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageCircle, ChevronDown } from 'lucide-react'
import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ_ITEMS, SUPPORT_EMAIL, CHROME_STORE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Get help with BetterBooking.ai. Browse FAQs, find answers to common questions, or contact our support team.',
}

const contactCards = [
  {
    icon: Mail,
    title: 'Email Us',
    body: 'Get a response within 24 hours.',
    action: { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
  },
  {
    icon: MessageCircle,
    title: 'Leave a Review',
    body: 'Your feedback helps us improve the extension.',
    action: {
      label: 'Chrome Web Store',
      href: CHROME_STORE_URL,
      external: true,
    },
  },
  {
    icon: ChevronDown,
    title: 'Browse FAQs',
    body: 'Find instant answers to common questions below.',
    action: { label: 'Jump to FAQs', href: '#faq' },
  },
]

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#1b1b1b] pt-32 pb-20" aria-labelledby="support-heading">
          <div className="mx-auto max-w-[800px] px-6 text-center">
            <span className="inline-block mb-4 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-medium uppercase text-white/60">
              24h Response Time
            </span>
            <h1
              id="support-heading"
              className="font-extrabold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Support Center
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-[500px] mx-auto">
              We&apos;re here to help. Most questions are answered in our FAQ below —
              or reach out and we&apos;ll get back to you quickly.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="bg-[#242424] py-16 border-b border-white/6" aria-label="Contact options">
          <div className="mx-auto max-w-[1000px] px-6">
            <div className="grid md:grid-cols-3 gap-4">
              {contactCards.map(({ icon: Icon, title, body, action }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-xl border border-white/8 bg-white/4 p-6 transition-colors hover:border-white/16"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[#ff656a]/15">
                    <Icon size={18} className="text-[#ff656a]" aria-hidden />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-white mb-1">{title}</h2>
                    <p className="text-sm text-white/50 leading-relaxed">{body}</p>
                  </div>
                  <a
                    href={action.href}
                    target={'external' in action && action.external ? '_blank' : undefined}
                    rel={'external' in action && action.external ? 'noopener noreferrer' : undefined}
                    className="mt-auto text-sm font-medium text-[#ff8a8e] hover:text-white transition-colors duration-200"
                  >
                    {action.label} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="bg-[#1b1b1b] py-20 md:py-28"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-[720px] px-6">
            <div className="text-center mb-14">
              <p className="mb-3 text-xs font-medium uppercase text-white/40">
                Common Questions
              </p>
              <h2
                id="faq-heading"
                className="font-extrabold text-white leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-2">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-white/8 rounded-xl px-6 data-[state=open]:border-white/16"
                >
                  <AccordionTrigger className="text-left text-white font-medium hover:no-underline py-5 text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 leading-relaxed pb-5 text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="gradient-brand py-20" aria-label="Contact CTA">
          <div className="mx-auto max-w-[600px] px-6 text-center">
            <h2
              className="font-extrabold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Still need help?
            </h2>
            <p className="text-white/75 mb-8 leading-relaxed">
              We&apos;re one email away. Our team typically responds within 24 hours.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1b1b1b] shadow-lg transition-colors duration-200 hover:bg-[#fc0a7e] hover:text-white"
            >
              <Mail size={16} aria-hidden />
              Email Support
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
