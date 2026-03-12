import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { SUPPORT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How BetterBooking.ai collects, uses, and protects your data. Fully compliant with the Chrome Web Store User Data Policy.',
}

const LAST_UPDATED = 'February 27, 2026'
const EFFECTIVE_DATE = 'February 27, 2026'

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Page header */}
        <section className="bg-[#1b1b1b] pt-32 pb-16" aria-labelledby="privacy-heading">
          <div className="mx-auto max-w-[720px] px-6">
            <p className="mb-3 text-xs font-medium uppercase text-white/40">
              Legal
            </p>
            <h1
              id="privacy-heading"
              className="font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm">
              Last updated: {LAST_UPDATED} &middot; Effective: {EFFECTIVE_DATE}
            </p>
          </div>
        </section>

        {/* Prose content */}
        <article
          className="bg-white py-16 md:py-20"
          aria-label="Privacy policy content"
        >
          <div
            className="mx-auto max-w-[720px] px-6"
            style={{ color: '#333', lineHeight: '1.8', fontSize: '1rem' }}
          >

            {/* CWS Limited Use Disclosure — prominently placed */}
            <div className="mb-12 rounded-xl border border-[#ff656a]/30 bg-[#fff8f8] p-6">
              <p className="font-semibold text-[#111] mb-2 text-sm uppercase tracking-wide">
                Chrome Web Store — Limited Use Disclosure
              </p>
              <p className="text-[#444] text-sm leading-relaxed">
                The use and transfer to any other app of information received from Google APIs
                will adhere to the{' '}
                <a
                  href="https://developer.chrome.com/docs/webstore/program_policies/user_data_faq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff656a] hover:text-[#fc0a7e] transition-colors"
                >
                  Chrome Web Store User Data Policy
                </a>
                , including the Limited Use requirements. BetterBooking.ai only accesses
                data you explicitly request it to access, uses that data solely to provide
                the negotiation service you initiated, and does not transfer, sell, or
                repurpose it for any other use.
              </p>
            </div>

            {/* Lede */}
            <p className="text-lg text-[#444] leading-relaxed mb-12 border-l-4 border-[#ff656a] pl-5">
              BetterBooking.ai is committed to protecting your privacy. This policy explains
              what information our Chrome extension and website collect, how we use it, and
              your rights regarding your data.
            </p>

            <Section title="1. What BetterBooking Does">
              <p>
                BetterBooking.ai is a Chrome browser extension that helps you get lower
                prices on Airbnb listings using artificial intelligence. When you find a
                listing you like and click &ldquo;Get BetterBooking&rdquo;, our AI crafts and
                sends a polite negotiation message to the host on your behalf — helping you
                secure a better rate automatically.
              </p>
              <p>
                By using BetterBooking, you expressly authorize us to send AI-generated
                negotiation messages to hosts each time you initiate a negotiation. You may
                review your full message history at any time within the extension.
              </p>
            </Section>

            <Section title="2. Chrome Extension Permissions">
              <p>
                BetterBooking requires read access to <strong>airbnb.com</strong> in order
                to retrieve listing information visible on the page — such as price,
                property details, and host information. This access is strictly:
              </p>
              <ul>
                <li>
                  <strong>User-initiated only:</strong> The extension reads page data
                  exclusively when you click &ldquo;Get BetterBooking.&rdquo; It never
                  passively monitors, scans, or transmits page content in the background
                  without your direct action.
                </li>
                <li>
                  <strong>Narrowly scoped:</strong> Only data relevant to the specific
                  listing you are actively viewing is accessed. We do not read unrelated
                  pages, your browser history, inbox, or any personal messages outside
                  the negotiation context.
                </li>
                <li>
                  <strong>Purpose-bound:</strong> Listing data is used exclusively to
                  generate your negotiation message. It is never repurposed for
                  advertising, profiling, or any secondary use.
                </li>
              </ul>
            </Section>

            <Section title="3. Information We Collect">
              <p><strong>Information you provide:</strong></p>
              <ul>
                <li>Email address (for account creation and service notifications)</li>
                <li>
                  Subscription and billing details (processed by Stripe — we never store
                  your card number)
                </li>
                <li>
                  Your negotiation preferences (target price, reservation price) when
                  you enter them
                </li>
              </ul>

              <p>
                <strong>
                  Listing data read when you actively initiate a negotiation:
                </strong>
              </p>
              <ul>
                <li>Property details: title, location, room type, amenities, description</li>
                <li>Pricing: listed price, fees, discounts</li>
                <li>Host information: name, response rate, rating, review count</li>
                <li>Booking parameters: dates, number of guests</li>
              </ul>

              <p><strong>Data generated through our service:</strong></p>
              <ul>
                <li>AI-generated negotiation messages sent on your behalf</li>
                <li>Conversation history between the negotiation agent and hosts</li>
                <li>Negotiation status and outcomes</li>
              </ul>

              <p><strong>Technical and usage data:</strong></p>
              <ul>
                <li>Timestamps of feature usage</li>
                <li>Session and request identifiers (for debugging and support)</li>
                <li>Aggregated, anonymized success metrics</li>
              </ul>

              <p><strong>We do NOT collect:</strong></p>
              <ul>
                <li>Your passwords or login credentials</li>
                <li>Authentication cookies or session tokens</li>
                <li>Payment methods stored in your booking accounts</li>
                <li>Personal messages unrelated to BetterBooking negotiations</li>
                <li>Your browsing history outside of active Airbnb listing pages</li>
                <li>Location data beyond what appears in listing details</li>
              </ul>
            </Section>

            <Section title="4. How the Negotiation Agent Works">
              <p>
                When you initiate a price negotiation, BetterBooking uses a{' '}
                <strong>user-authorized, ephemeral browser session</strong> managed through
                our Kernel infrastructure partner to deliver your AI-crafted message to the
                host. The following principles govern every session:
              </p>
              <ul>
                <li>
                  <strong>Strictly user-initiated:</strong> The session activates only when
                  you explicitly click &ldquo;Get BetterBooking.&rdquo; No action is taken
                  passively, automatically, or without your direct instruction.
                </li>
                <li>
                  <strong>Credentials entered directly by you:</strong> Any credentials
                  required to access the booking platform are entered by you directly into
                  the platform&apos;s own native login interface. BetterBooking does not
                  intercept, capture, store, or transmit those credentials at any point.
                </li>
                <li>
                  <strong>No token or cookie harvesting:</strong> BetterBooking does not
                  extract, retain, or transmit authentication cookies, session tokens,
                  OAuth tokens, or any other credential artifacts. These remain solely
                  within your browser session and are never accessible to our servers.
                </li>
                <li>
                  <strong>Ephemeral and self-terminating:</strong> Remote sessions
                  automatically terminate upon task completion or after 15 minutes of
                  inactivity. No session state, credential, or token is persisted after
                  termination.
                </li>
                <li>
                  <strong>Authorized scope only:</strong> The agent performs exclusively
                  the messaging action you requested — sending your negotiation message and
                  returning the host&apos;s response. It takes no other action on your
                  account.
                </li>
              </ul>
              <p>
                This architecture ensures BetterBooking operates solely as your explicitly
                authorized agent, with no ability to access your accounts beyond the
                specific task you initiate.
              </p>
            </Section>

            <Section title="5. How We Use Your Information">
              <p>
                We use the information described above solely for the following purposes:
              </p>
              <ul>
                <li>
                  To generate and send AI-powered negotiation messages on your behalf
                </li>
                <li>To manage your BetterBooking account, subscription, and billing</li>
                <li>To notify you when hosts respond to your negotiations</li>
                <li>To provide customer support</li>
                <li>
                  To improve our AI and service quality using anonymized, aggregated data
                  only
                </li>
              </ul>
              <p><strong>We do NOT:</strong></p>
              <ul>
                <li>Sell your data to third parties, data brokers, or advertisers</li>
                <li>
                  Use your data for advertising, ad targeting, or behavioral profiling
                </li>
                <li>Share your negotiation data with any unauthorized party</li>
                <li>Make bookings or financial commitments on your behalf</li>
                <li>
                  Transfer user data for purposes inconsistent with this Privacy Policy
                </li>
              </ul>
            </Section>

            <Section title="6. Subprocessors and Third-Party Services">
              <p>
                We share limited, purpose-specific data with the following infrastructure
                providers. These are operational subprocessors — not data buyers or
                advertisers — and each is bound by a data processing agreement:
              </p>
              <ul>
                <li>
                  <strong>Supabase</strong> — Secure database hosting.{' '}
                  <em>Receives:</em> account information, listing data, conversation
                  history. <em>Does not receive:</em> payment information.
                </li>
                <li>
                  <strong>Anthropic (Claude API)</strong> — AI negotiation engine.{' '}
                  <em>Receives:</em> listing details and conversation context required to
                  generate your message. <em>Does not receive:</em> your email address or
                  payment information.
                </li>
                <li>
                  <strong>Kernel</strong> — Ephemeral remote browser infrastructure.{' '}
                  <em>Receives:</em> listing URLs and negotiation task instructions.{' '}
                  <em>Does not receive or store:</em> credentials, authentication tokens,
                  or personal account data of any kind.
                </li>
                <li>
                  <strong>Stripe</strong> — Payment processing. <em>Receives:</em>{' '}
                  billing and subscription information. <em>Does not receive:</em>{' '}
                  negotiation data or listing information. Stripe processes payments as an
                  independent data controller under its own privacy policy.
                </li>
              </ul>
              <p>Optional diagnostic services (can be disabled on request):</p>
              <ul>
                <li>
                  <strong>Langfuse</strong> — LLM performance monitoring, using
                  anonymized, non-personal data only
                </li>
                <li>
                  <strong>Grafana Loki</strong> — Error logging, using anonymized
                  diagnostic data only
                </li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to any third
                party. No user data is shared with advertising networks or data brokers.
              </p>
            </Section>

            <Section title="7. Data Security">
              <p><strong>Technical measures:</strong></p>
              <ul>
                <li>All data transmitted over HTTPS with TLS 1.3 encryption</li>
                <li>Database-level encryption at rest</li>
                <li>Row-level security preventing cross-user data access</li>
                <li>Token-based authentication (JWT)</li>
                <li>API rate limiting to prevent abuse</li>
              </ul>
              <p><strong>Operational measures:</strong></p>
              <ul>
                <li>
                  Remote browser sessions expire after 15 minutes of inactivity and leave
                  no stored state
                </li>
                <li>No long-term storage of credentials or authentication tokens</li>
                <li>
                  Employee access to production data is logged, audited, and
                  access-controlled
                </li>
                <li>Quarterly security reviews of infrastructure and code</li>
              </ul>
              <p>
                In the event of a data breach likely to affect your rights or freedoms, we
                will notify affected users within 72 hours by email and report to relevant
                authorities as required by applicable law.
              </p>
            </Section>

            <Section title="8. Data Retention">
              <ul>
                <li>
                  <strong>Active negotiations:</strong> Retained until resolved, cancelled,
                  or you request deletion
                </li>
                <li>
                  <strong>Account information:</strong> Retained for the duration of your
                  account and deleted upon your verified request
                </li>
                <li>
                  <strong>Remote browser sessions:</strong> Terminated immediately after
                  task completion; no session data is retained
                </li>
                <li>
                  <strong>Billing records:</strong> 7 years (legal and tax compliance,
                  held by Stripe under its own retention policy)
                </li>
              </ul>
              <p>
                Following account deletion, we may retain anonymized, aggregated data
                with no connection to you personally for service improvement purposes.
              </p>
            </Section>

            <Section title="9. Your Rights">
              <p>You may at any time:</p>
              <ul>
                <li>
                  Request access to the personal data we hold about you
                </li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your account and associated data</li>
                <li>
                  Opt out of marketing emails at any time using the unsubscribe link in
                  any email we send
                </li>
              </ul>
              <p>
                <strong>EU / UK users (GDPR):</strong> You additionally have the right to
                data portability, the right to object to or restrict processing, and the
                right to lodge a complaint with your local data protection authority. We
                rely on Standard Contractual Clauses (SCCs) for transfers of personal data
                from the EU/UK to the United States.
              </p>
              <p>
                <strong>California users (CCPA):</strong> You have the right to know what
                personal information we collect and how it is used, the right to request
                deletion, and the right to non-discrimination for exercising these rights.
                We do not sell personal information.
              </p>
              <p>
                To exercise any of the above rights, contact us at{' '}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-[#ff656a] hover:text-[#fc0a7e] transition-colors"
                >
                  {SUPPORT_EMAIL}
                </a>
                . We will respond within 30 days.
              </p>
            </Section>

            <Section title="10. Children's Privacy">
              <p>
                BetterBooking.ai is not directed at children under the age of 13. We do
                not knowingly collect personal information from children. If you believe a
                child has provided us with personal information, please contact us and we
                will delete it promptly.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will
                update the &ldquo;Last updated&rdquo; date at the top of this page. For
                material changes, we will notify active users and newsletter subscribers
                by email. We encourage you to review this policy periodically.
              </p>
            </Section>

            <Section title="12. Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy
                Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 rounded-xl border border-black/8 bg-[#f9f9f9] p-5">
                <p className="font-semibold text-[#111]">BetterBooking.ai</p>
                <p className="text-sm mt-1">
                  Email:{' '}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-[#ff656a] hover:text-[#fc0a7e] transition-colors"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </p>
                <p className="text-sm mt-1">
                  Website:{' '}
                  <a
                    href="https://betterbooking.ai"
                    className="text-[#ff656a] hover:text-[#fc0a7e] transition-colors"
                  >
                    betterbooking.ai
                  </a>
                </p>
              </div>
            </Section>

            {/* Back link */}
            <div className="mt-16 pt-8 border-t border-black/8">
              <Link
                href="/"
                className="text-sm text-[#6b6b6b] hover:text-[#ff656a] transition-colors duration-200"
              >
                ← Back to BetterBooking.ai
              </Link>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const id = title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').toLowerCase()
  return (
    <section className="mb-10" aria-labelledby={id}>
      <h2
        id={id}
        className="font-bold text-[#111] mb-4 pb-2 border-b border-black/8"
        style={{ fontSize: '1.125rem' }}
      >
        {title}
      </h2>
      <div className="space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-[#444] [&_p]:text-[#444]">
        {children}
      </div>
    </section>
  )
}
