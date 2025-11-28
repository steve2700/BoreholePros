import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | Borehole Pros | Data Protection & Your Rights",
  description:
    "Borehole Pros Privacy Policy. Learn how we protect your personal data, handle information securely, and respect your privacy rights.",
  robots: "index, follow",
}

export default function PrivacyPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Privacy Policy</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Your privacy matters to us. Learn how Borehole Pros protects your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-max max-w-4xl">
          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction & Commitment to Privacy</h2>
              <p className="text-lg leading-relaxed mb-4">
                Borehole Pros ("we," "our," or "us") is committed to protecting your privacy and ensuring you have a
                positive experience on our website and when using our borehole drilling and plumbing services across
                South Africa. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website at boreholepros.co.za and engage with our services.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                We comply with South African data protection laws, including the Protection of Personal Information
                (POPI) Act, 2013. Please read this Privacy Policy carefully. If you do not agree with our policies and
                practices, please do not use our website or services.
              </p>
              <p className="text-lg leading-relaxed">
                This Privacy Policy was last updated in 2024 and may be updated periodically to reflect changes in our
                practices, technology, legal requirements, or other factors. We will notify you of any material changes
                by updating the "Last Updated" date.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-lg leading-relaxed mb-4">
                We collect various types of information in connection with our services. This information helps us
                provide better service, improve our website, and respond to your inquiries effectively.
              </p>

              <h3 className="text-xl font-semibold mb-3">Information You Provide Directly:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Contact Information:</strong> When you contact us for a free quote or emergency service, we
                    collect your name, phone number, email address, physical address, and suburb/city location.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Service Details:</strong> Information about the borehole drilling or plumbing service you
                    require, including your specific problem, timeline, and budget.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Payment Information:</strong> If services are booked through our site, we may collect
                    payment details processed through secure third-party payment processors.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Communication History:</strong> Records of emails, WhatsApp messages, phone calls, and other
                    communications with our team for service coordination and follow-up.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Information Collected Automatically:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Website Usage Data:</strong> When you visit boreholepros.co.za, we collect information about
                    your interactions including pages visited, time spent, links clicked, and referral sources through
                    Google Analytics 4.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Device Information:</strong> Technical data including IP address, browser type, device type
                    (mobile/desktop), operating system, and Internet service provider.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Cookies & Tracking:</strong> We use cookies and similar technologies to remember your
                    preferences and track user behavior for service improvement and analytics.
                  </span>
                </li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                We use the information we collect for various legitimate business purposes, all in compliance with South
                African data protection regulations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  "Processing service requests and emergency calls",
                  "Providing borehole drilling quotes and plumbing estimates",
                  "Coordinating service delivery and scheduling",
                  "Sending confirmation emails and SMS updates",
                  "Requesting feedback and reviews after service completion",
                  "Improving website functionality and user experience",
                  "Marketing legitimate services via email and SMS (with consent)",
                  "Fraud prevention and security monitoring",
                ].map((use, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-muted rounded-lg">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span className="text-sm">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">3. How We Share Your Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                We take data sharing seriously and only share information when necessary to provide our services or
                comply with legal requirements.
              </p>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Service Providers:</strong> We share location and contact information with our technicians
                    who will perform the borehole drilling or plumbing work you've requested.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Payment Processors:</strong> Payment information is shared with secure third-party payment
                    providers to process transactions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Analytics Providers:</strong> We share anonymized usage data with Google Analytics to
                    understand website behavior and improve service quality.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or
                    government request to comply with South African legal obligations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>We Do NOT Sell Data:</strong> We never sell, rent, or trade your personal information to
                    third parties for marketing purposes without explicit consent.
                  </span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">4. Data Security & Protection</h2>
              <p className="text-lg leading-relaxed mb-4">
                We implement comprehensive security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>SSL Encryption:</strong> Our website uses SSL/TLS encryption to protect data transmitted
                    between your device and our servers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Secure Servers:</strong> All information is stored on secure servers with restricted access
                    and backup systems.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Access Controls:</strong> Only authorized employees with a legitimate need to access your
                    information can do so, and they are bound by confidentiality agreements.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Regular Audits:</strong> We conduct regular security audits and updates to protect against
                    emerging threats and vulnerabilities.
                  </span>
                </li>
              </ul>

              <Card className="p-6 border-accent/20 bg-accent/5">
                <p className="text-sm">
                  <strong>Important Note:</strong> While we implement strong security measures, no method of data
                  transmission is 100% secure. We cannot guarantee absolute security, but we are committed to protecting
                  your information using industry-standard practices.
                </p>
              </Card>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">5. Your Privacy Rights (POPI Act)</h2>
              <p className="text-lg leading-relaxed mb-4">
                Under South African data protection laws, including the POPI Act, you have the following rights
                regarding your personal information:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Right to Access",
                    desc: "You have the right to request access to all personal information we hold about you.",
                  },
                  {
                    title: "Right to Correct",
                    desc: "You can request correction of inaccurate or incomplete personal information.",
                  },
                  {
                    title: "Right to Delete",
                    desc: "You may request deletion of your personal information (with certain exceptions).",
                  },
                  {
                    title: "Right to Object",
                    desc: "You can object to processing of your information for marketing or other purposes.",
                  },
                  {
                    title: "Right to Portability",
                    desc: "You can request your data in a structured, commonly used format.",
                  },
                ].map((right, idx) => (
                  <div key={idx} className="p-4 border border-accent/20 rounded-lg">
                    <h4 className="font-bold mb-2">{right.title}</h4>
                    <p className="text-sm text-muted-foreground">{right.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed mt-6">
                To exercise any of these rights, please contact us at{" "}
                <Link href="mailto:info@boreholepros.co.za" className="text-accent hover:underline">
                  info@boreholepros.co.za
                </Link>{" "}
                or call 060 348 8268. We will respond to your request within 30 days.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">6. Cookies & Tracking Technologies</h2>
              <p className="text-lg leading-relaxed">
                We use cookies to enhance your experience on boreholepros.co.za. Cookies are small files stored on your
                device that help us remember your preferences. You can control cookies through your browser settings.
                Most browsers allow you to refuse cookies or alert you when cookies are being sent.
              </p>
            </div>

            {/* Contact & Complaints */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">7. Contact Information & Data Complaints</h2>
              <p className="text-lg leading-relaxed mb-4">
                For privacy questions, requests, or complaints, contact us at:
              </p>
              <Card className="p-6 bg-muted mb-4">
                <p className="mb-2">
                  <strong>Borehole Pros</strong>
                  <br />
                  Email:{" "}
                  <Link href="mailto:info@boreholepros.co.za" className="text-accent hover:underline">
                    info@boreholepros.co.za
                  </Link>
                  <br />
                  Phone: 060 348 8268
                  <br />
                  WhatsApp:{" "}
                  <a href="https://wa.me/27603488268" className="text-accent hover:underline">
                    Click to Chat
                  </a>
                </p>
              </Card>

              <p className="text-lg leading-relaxed">
                If you are not satisfied with our response, you have the right to lodge a complaint with the South
                African Information Regulator (SAIR).
              </p>
            </div>

            {/* Footer Links */}
            <div className="pt-8 border-t border-muted">
              <p className="text-sm text-muted-foreground mb-4">Related Pages:</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/terms" className="text-accent hover:underline">
                  Terms of Service
                </Link>
                <Link href="/faq" className="text-accent hover:underline">
                  FAQ
                </Link>
                <Link href="/contact" className="text-accent hover:underline">
                  Contact Us
                </Link>
                <Link href="/borehole-drilling" className="text-accent hover:underline">
                  Borehole Drilling
                </Link>
                <Link href="/emergency-plumbing" className="text-accent hover:underline">
                  Emergency Plumbing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
