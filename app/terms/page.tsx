import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service | Borehole Pros | Legal Terms & Conditions",
  description:
    "Borehole Pros Terms of Service. Legal terms, service conditions, warranties, and limitations for borehole drilling and plumbing services.",
  robots: "index, follow",
}

export default function TermsPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Terms of Service</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Please read these terms carefully before using our borehole drilling and plumbing services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-max max-w-4xl">
          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-lg leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the website boreholepros.co.za ("Website") and all
                services provided by Borehole Pros ("Company," "we," "us," or "our"), including borehole drilling,
                plumbing installation, maintenance, and emergency repair services across South Africa.
              </p>
              <p className="text-lg leading-relaxed">
                By accessing our website or requesting our services, you agree to be bound by these Terms. If you do not
                agree to these Terms, you may not use our services. We reserve the right to modify these Terms at any
                time, effective upon posting to the Website.
              </p>
            </div>

            {/* Service Description */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">2. Service Description & Scope</h2>
              <p className="text-lg leading-relaxed mb-4">
                Borehole Pros provides professional borehole drilling, installation, maintenance, and plumbing services
                throughout South Africa, including 32+ cities and surrounding areas. Our services include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Borehole drilling and installation",
                  "Borehole pump installation and repair",
                  "Water testing and analysis",
                  "Emergency borehole repairs",
                  "General plumbing services",
                  "Geyser installation and repairs",
                  "Leak detection and repair",
                  "Drain cleaning and unblocking",
                  "Pipe repairs and replacements",
                  "Toilet and tap repairs",
                  "24/7 emergency plumbing",
                  "Water pressure solutions",
                ].map((service, idx) => (
                  <div key={idx} className="flex gap-2 p-3 bg-muted rounded">
                    <span className="text-accent">✓</span>
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed">
                Specific service scope will be determined during site assessment and detailed in our quotation. We
                cannot guarantee specific outcomes for borehole drilling based on geological factors beyond our control.
              </p>
            </div>

            {/* Pricing & Payment */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">3. Pricing, Quotations & Payment Terms</h2>
              <p className="text-lg leading-relaxed mb-4">
                All quotations are valid for 14 days from the date of issue. Prices may vary based on site conditions,
                additional work discovered during service, and material costs at the time of service.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Quotation Accuracy:</strong> We provide accurate quotes based on information provided. If
                    site conditions change, quotes may be adjusted accordingly.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Payment Terms:</strong> Payment is due upon completion of service unless other arrangements
                    are made in writing. We accept cash, EFT transfers, and card payments.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Additional Costs:</strong> Any additional work not included in the original quotation
                    requires written approval before proceeding.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Emergency Rates:</strong> After-hours emergency services may incur additional fees as
                    detailed in our pricing schedule.
                  </span>
                </li>
              </ul>
            </div>

            {/* Warranties & Guarantees */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">4. Warranties & Service Guarantees</h2>
              <p className="text-lg leading-relaxed mb-4">
                We warrant that all work performed will be completed in a professional manner by certified technicians
                using quality materials and modern equipment.
              </p>

              <Card className="p-6 border-accent/20 bg-accent/5 mb-4">
                <h3 className="font-bold mb-3">Our Guarantees:</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>
                      <strong>12-Month Warranty:</strong> All workmanship on borehole drilling, installation, and
                      plumbing repairs includes 12 months warranty against defects.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>
                      <strong>Materials Warranty:</strong> All materials supplied carry manufacturer warranty as
                      specified.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>
                      <strong>Professional Service:</strong> All technicians are certified and carry full liability
                      insurance.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>
                      <strong>Site Cleanup:</strong> We clean all work sites and remove waste materials after
                      completion.
                    </span>
                  </li>
                </ul>
              </Card>

              <p className="text-lg leading-relaxed">
                Warranties do not cover damage caused by customer misuse, negligence, natural disasters, or wear and
                tear beyond normal use.
              </p>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">5. Limitations & Disclaimers</h2>
              <p className="text-lg leading-relaxed mb-4">
                While we strive for 100% customer satisfaction, certain factors are beyond our control. Please
                understand the following:
              </p>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Geological Factors:</strong> Borehole drilling success depends on water table levels,
                    geological conditions, and soil composition. We cannot guarantee water availability or specific
                    depth.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Weather Conditions:</strong> Severe weather may delay service scheduling or affect work
                    timelines.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Hidden Damage:</strong> If additional damage is discovered during service, this may increase
                    costs and require approval before proceeding.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Emergency Response Times:</strong> While we strive for fast response, emergency call times
                    may vary based on technician availability and location.
                  </span>
                </li>
              </ul>
            </div>

            {/* Cancellation & Refunds */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">6. Cancellation & Refund Policy</h2>
              <p className="text-lg leading-relaxed mb-4">
                We want you to be completely satisfied with our services. Our cancellation and refund policy is:
              </p>

              <div className="space-y-4">
                {[
                  {
                    condition: "Cancellation Before Work Begins",
                    policy: "Full refund of deposit or quote fee.",
                  },
                  {
                    condition: "Cancellation During Work",
                    policy: "Payment for work completed to date plus any materials purchased (non-refundable).",
                  },
                  {
                    condition: "Dissatisfaction with Completed Work",
                    policy:
                      "Contact us immediately. We will inspect and attempt correction within warranty period at no cost.",
                  },
                  {
                    condition: "Service Quality Issues",
                    policy: "Contact our customer service team immediately for resolution.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 border border-accent/20 rounded-lg">
                    <h4 className="font-bold mb-2">{item.condition}</h4>
                    <p className="text-sm text-muted-foreground">{item.policy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Liability */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-lg leading-relaxed mb-4">
                To the fullest extent permitted by South African law, Borehole Pros shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including lost profits, even if
                advised of the possibility of such damages.
              </p>
              <p className="text-lg leading-relaxed">
                Our total liability for any claim shall not exceed the amount paid for the specific service in question.
                This limitation applies to all claims regardless of form or cause.
              </p>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">8. Client Responsibilities</h2>
              <p className="text-lg leading-relaxed mb-4">As our client, you agree to:</p>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Provide accurate information about your property, borehole condition, and service requirements.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Grant safe access to work areas and ensure hazards are disclosed (electrical lines, pets, etc.).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Pay for services upon completion as per agreed terms.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Use services only for lawful purposes and in compliance with applicable regulations.</span>
                </li>
              </ul>
            </div>

            {/* Insurance & Safety */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">9. Insurance & Safety Compliance</h2>
              <p className="text-lg leading-relaxed mb-4">
                Borehole Pros carries comprehensive liability insurance. However, the client is responsible for:
              </p>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Ensuring their property insurance covers our work activities.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Maintaining their property and our work to prevent damage or injury.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Obtaining necessary permits from local authorities if required for borehole drilling.</span>
                </li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">10. Governing Law & Jurisdiction</h2>
              <p className="text-lg leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the Republic of South Africa,
                and you irrevocably submit to the exclusive jurisdiction of the South African courts. Any disputes shall
                be resolved in the provinces where the service was performed.
              </p>
            </div>

            {/* Contact & Disputes */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">11. Contact Information & Dispute Resolution</h2>
              <p className="text-lg leading-relaxed mb-4">
                For questions or disputes regarding these Terms, please contact us at:
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
                We encourage you to contact us to resolve any disputes before pursuing legal action.
              </p>
            </div>

            {/* Footer Links */}
            <div className="pt-8 border-t border-muted">
              <p className="text-sm text-muted-foreground mb-4">Related Pages:</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/faq" className="text-accent hover:underline">
                  FAQ
                </Link>
                <Link href="/contact" className="text-accent hover:underline">
                  Contact Us
                </Link>
                <Link href="/about" className="text-accent hover:underline">
                  About Us
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
