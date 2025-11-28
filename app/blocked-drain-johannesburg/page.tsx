import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Phone, CheckCircle2, MapPin, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Blocked Drain Johannesburg | Professional Drain Cleaning | Borehole Pros",
  description:
    "Blocked drain in Johannesburg? Professional drain cleaning service. Same-day available. High-pressure cleaning. Call 060 348 8268 for fast service.",
  keywords: [
    "blocked drain johannesburg",
    "drain cleaning johannesburg",
    "professional drain cleaner",
    "drain unblocking johannesburg",
    "sewage drain cleaning",
    "clogged drain johannesburg",
  ],
}

const blockageTypes = [
  {
    type: "Hair & Soap Build-up",
    risk: "Shower & bathroom drains",
    solution: "High-pressure jetting or plumbing snake",
  },
  { type: "Grease & Oil", risk: "Kitchen drains", solution: "High-temperature jetting and enzyme treatment" },
  {
    type: "Tree Roots",
    risk: "Underground sewage lines",
    solution: "Drain camera inspection and professional removal",
  },
  { type: "Toilet Paper Buildup", risk: "All drains", solution: "Mechanical extraction or chemical dissolution" },
  { type: "Foreign Objects", risk: "Various locations", solution: "Mechanical removal and prevention advice" },
  { type: "Scale & Mineral Deposits", risk: "Old pipes", solution: "Chemical treatment and high-pressure flushing" },
]

const johannesburgAreas = [
  "Sandton",
  "Midrand",
  "Randburg",
  "Bryanston",
  "Sunninghill",
  "Rosebank",
  "Parkhurst",
  "Fourways",
  "Morningside",
  "Centurion",
]

export default function BlockedDrainJohannesburgPage() {
  return (
    <>
      <Hero
        title="Blocked Drain Johannesburg | Expert Drain Cleaning Service"
        subtitle="Same-Day Service | Professional Unblocking | Preventive Solutions"
        description="Blocked drain in Johannesburg? Professional drain cleaning and unblocking. Fast response, permanent solutions. High-pressure jetting technology. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Drain Cleaning Quote", href: "/contact" },
          secondary: { text: "Call Now: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional Blocked Drain Solutions in Johannesburg
              </h2>

              <div className="prose prose-lg max-w-none space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  A blocked drain is more than just an inconvenience—it's a problem that gets worse if ignored. In
                  Johannesburg, drain blockages are incredibly common due to older municipal systems, mineral-rich
                  water, and the way homes and businesses accumulate debris in pipes over years of use. What starts as
                  slow drainage in a shower can escalate to backed-up sewage affecting your entire property.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our professional drain cleaning service in Johannesburg uses advanced technology to identify and
                  eliminate blockages quickly and permanently. Whether it's a simple hair clog in your bathroom or a
                  serious tree root blockage in underground sewage lines, we have the expertise and equipment to fix it.
                  We've cleared thousands of drains across Sandton, Midrand, Randburg, and all Johannesburg suburbs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  The key to preventing drain problems is professional maintenance. We don't just clear your current
                  blockage—we show you how to prevent future problems and recommend preventive maintenance to keep your
                  drains flowing freely for years.
                </p>
              </div>

              {/* Warning Signs */}
              <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded mb-12">
                <h3 className="font-bold mb-4 flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  Warning Signs of Blocked Drains
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Slow drainage in shower or sink
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Water backing up when flushing toilet
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Gurgling sounds from pipes
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Unpleasant sewage odors
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Multiple drains clogging simultaneously
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    Water pooling in yard or around foundations
                  </li>
                </ul>
              </div>

              {/* Blockage Types */}
              <h3 className="text-2xl font-bold mb-6">Common Drain Blockage Types We Treat</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {blockageTypes.map((item, idx) => (
                  <Card key={idx} className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold mb-2">{item.type}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      <span className="font-semibold">Risk Areas:</span> {item.risk}
                    </p>
                    <p className="text-xs text-accent font-semibold">
                      <span className="font-semibold">Our Solution:</span> {item.solution}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Our Process */}
              <div className="bg-muted p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-6">Our Drain Cleaning Process</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Drain Camera Inspection</h4>
                      <p className="text-muted-foreground text-sm">
                        We use a small camera to inspect inside your drain line. This shows exactly where the blockage
                        is and what's causing it—hair, grease, roots, etc.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Choose Treatment Method</h4>
                      <p className="text-muted-foreground text-sm">
                        Based on the inspection, we recommend the best solution: mechanical snake removal, high-pressure
                        water jetting, chemical treatment, or professional extraction.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Clear the Blockage</h4>
                      <p className="text-muted-foreground text-sm">
                        Our technician uses the selected method to completely clear the blockage. Most blockages are
                        cleared within 1-2 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Verify Success with Testing</h4>
                      <p className="text-muted-foreground text-sm">
                        We test the drain to confirm it's flowing freely and problem-solved. We'll show you what caused
                        the blockage and provide prevention tips.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Prevention Recommendations</h4>
                      <p className="text-muted-foreground text-sm">
                        We advise on maintenance to prevent future blockages—drain screens, avoiding grease, regular
                        flushing, or professional maintenance schedules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <h3 className="text-2xl font-bold mb-6">Blocked Drain Cleaning Pricing in Johannesburg</h3>
              <div className="bg-muted rounded-lg overflow-hidden mb-12">
                <table className="w-full">
                  <thead>
                    <tr className="bg-accent text-accent-foreground">
                      <th className="p-4 text-left font-bold">Service</th>
                      <th className="p-4 text-left font-bold">Cost</th>
                      <th className="p-4 text-left font-bold">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4">Drain Camera Inspection</td>
                      <td className="p-4 font-semibold">ZAR 800 - 1,500</td>
                      <td className="p-4">30-45 min</td>
                    </tr>
                    <tr>
                      <td className="p-4">Basic Drain Cleaning (Standard Blockage)</td>
                      <td className="p-4 font-semibold">ZAR 1,200 - 2,500</td>
                      <td className="p-4">1-2 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Complex Drain Cleaning (Stubborn Blockage)</td>
                      <td className="p-4 font-semibold">ZAR 2,500 - 5,000</td>
                      <td className="p-4">2-4 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">High-Pressure Water Jetting</td>
                      <td className="p-4 font-semibold">ZAR 2,000 - 4,500</td>
                      <td className="p-4">1-3 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Tree Root Removal (Underground Sewage)</td>
                      <td className="p-4 font-semibold">ZAR 4,500 - 12,000</td>
                      <td className="p-4">2-6 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Preventive Drain Maintenance (Annual)</td>
                      <td className="p-4 font-semibold">ZAR 1,500 - 3,000</td>
                      <td className="p-4">1-2 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Internal Links */}
              <div className="bg-background p-8 rounded-lg">
                <h3 className="font-bold mb-4">Related Johannesburg Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Plumbing Services</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/plumber-johannesburg" className="text-foreground hover:text-accent font-semibold">
                          Professional Plumber Johannesburg
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/emergency-plumber-johannesburg"
                          className="text-foreground hover:text-accent font-semibold"
                        >
                          Emergency Plumber Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/geyser-installation-johannesburg"
                          className="text-foreground hover:text-accent font-semibold"
                        >
                          Geyser Installation & Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/leak-detection" className="text-foreground hover:text-accent font-semibold">
                          Leak Detection Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/contact" className="text-foreground hover:text-accent font-semibold">
                          Request Free Quote
                        </Link>
                      </li>
                      <li>
                        <Link href="/johannesburg" className="text-foreground hover:text-accent font-semibold">
                          All Services in Johannesburg
                        </Link>
                      </li>
                      <li>
                        <Link href="/drain-cleaning" className="text-foreground hover:text-accent font-semibold">
                          General Drain Cleaning Guide
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-accent/5 border-accent mb-6">
                  <h3 className="font-bold mb-4">Quick Stats</h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-2xl font-bold text-accent">500+</p>
                      <p className="text-sm text-muted-foreground">Drains cleaned annually</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">1-2 hrs</p>
                      <p className="text-sm text-muted-foreground">Average resolution time</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">Same-day</p>
                      <p className="text-sm text-muted-foreground">Service available</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent mb-6">
                  <h3 className="font-bold mb-4">Contact Us Now</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center gap-2 w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors"
                  >
                    WhatsApp Now
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-4">Service Areas</h3>
                  <div className="space-y-2">
                    {johannesburgAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Blocked Drain FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What causes blocked drains?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Common causes: hair and soap (bathrooms), grease and food (kitchens), mineral deposits (old pipes), tree
                roots (underground lines), and flushed items. Age and existing pipe damage also contribute.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How much does drain cleaning cost?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Standard drain cleaning: ZAR 1,200-2,500. Complex blockages: ZAR 2,500-5,000. Camera inspection: ZAR
                800-1,500. Tree root removal: ZAR 4,500-12,000. Free quote provided after assessment.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How can I prevent blocked drains?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Use drain screens, avoid pouring grease down drains, don't flush non-paper items, regular hot water
                flushing, and professional maintenance annually. Prevention is cheaper than emergency repairs.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How quickly can you clear a blocked drain?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most standard blockages clear within 1-2 hours. Complex blockages may take 2-4 hours. We work quickly
                without compromising quality. Many same-day appointments available in Johannesburg.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Do you offer preventive drain maintenance?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! Annual preventive drain maintenance costs ZAR 1,500-3,000. This involves professional cleaning and
                inspection to prevent future blockages. Saves money compared to emergency repairs.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What if the blockage is tree roots?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tree root blockages require professional removal, typically ZAR 4,500-12,000. We use camera inspection
                to confirm, then mechanical removal or jetting. Sometimes relining is recommended for severe damage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Blocked Drain? Get Professional Cleaning Today"
        description="Fast, permanent solutions. Same-day service available. Free assessment and quote."
        primaryText="Get Free Quote Now"
        primaryHref="/contact"
        secondaryText="Call: 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Blocked Drain Johannesburg - Borehole Pros",
            description: "Professional blocked drain cleaning in Johannesburg. Same-day service.",
            url: "https://boreholepros.co.za/blocked-drain-johannesburg",
            telephone: "060-348-8268",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            serviceType: "Drain Cleaning",
          }),
        }}
      />
    </>
  )
}
