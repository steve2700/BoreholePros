import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Wrench, Phone, CheckCircle2, MapPin, Zap, TrendingDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Geyser Installation Johannesburg | Expert Installation & Repair | Borehole Pros",
  description:
    "Geyser installation Johannesburg - electric, gas, solar options. Professional installation, repairs, maintenance. Energy-efficient solutions. Call 060 348 8268.",
  keywords: [
    "geyser installation johannesburg",
    "geyser repair johannesburg",
    "hot water geyser johannesburg",
    "solar geyser johannesburg",
    "electric geyser installation",
    "geyser maintenance johannesburg",
  ],
}

const geyserTypes = [
  {
    name: "Electric Storage Geyser",
    capacity: "50-100L",
    cost: "ZAR 4,500 - 8,500",
    pros: "Affordable, reliable, 10-15 year lifespan",
    cons: "Higher electricity usage, slower heating",
    best: "Standard homes",
  },
  {
    name: "Gas Geyser (LPG)",
    capacity: "Continuous hot water",
    cost: "ZAR 6,000 - 12,000",
    pros: "Fast heating, continuous hot water, fuel efficient",
    cons: "Requires gas cylinder, ventilation needed",
    best: "Families with high demand",
  },
  {
    name: "Solar Geyser",
    capacity: "200L typical",
    cost: "ZAR 15,000 - 25,000",
    pros: "Lowest long-term cost, eco-friendly, government rebates",
    cons: "Higher upfront cost, weather-dependent",
    best: "Long-term investment",
  },
  {
    name: "Instant/Tankless Geyser",
    capacity: "On-demand hot water",
    cost: "ZAR 8,000 - 15,000",
    pros: "Compact, instant hot water, energy-efficient",
    cons: "Limited flow rate, needs strong power supply",
    best: "Small spaces, apartments",
  },
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

export default function GeyserInstallationJohannesburgPage() {
  return (
    <>
      <Hero
        title="Expert Geyser Installation Johannesburg | Professional Service"
        subtitle="Electric, Gas, Solar Options | Energy-Efficient Solutions | Same-Day Service"
        description="Professional geyser installation, repair, and maintenance in Johannesburg. Expert technicians. All brands. Energy-efficient solutions. Call 060 348 8268 for free quote."
        imageSrc="/images/geyser-repair.jpg"
        cta={{
          primary: { text: "Get Free Johannesburg Quote", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional Geyser Installation & Repair in Johannesburg
              </h2>

              <div className="prose prose-lg max-w-none space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Your geyser is one of your home's most important systems, providing hot water for showers, washing
                  dishes, and laundry. When it fails, especially during Johannesburg's cold winter months, life becomes
                  uncomfortable. Whether you need a new geyser installation, an emergency repair, or maintenance to
                  extend your current geyser's lifespan, Borehole Pros provides expert service with transparent pricing.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We install and service all types of geysers: traditional electric storage geysers, efficient gas
                  geysers, environmentally-friendly solar geysers, and modern instant/tankless units. Our technicians
                  understand the unique requirements of Johannesburg properties and can recommend the best option for
                  your home, family size, and budget.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Over 15 years serving Johannesburg, we've installed thousands of geysers and developed relationships
                  with top manufacturers. This means we can offer genuine parts, warranty coverage, and expert knowledge
                  that newer competitors can't match.
                </p>
              </div>

              {/* Geyser Types Comparison */}
              <h3 className="text-2xl font-bold mb-6">Geyser Options Compared</h3>
              <div className="space-y-4 mb-12">
                {geyserTypes.map((type, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg">{type.name}</h4>
                      <span className="text-sm bg-accent text-accent-foreground px-2 py-1 rounded font-semibold">
                        {type.cost}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <p className="text-muted-foreground text-xs">Capacity</p>
                        <p className="font-semibold">{type.capacity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Lifespan</p>
                        <p className="font-semibold">10-20 years</p>
                      </div>
                    </div>
                    <div className="mb-3 space-y-1 text-sm">
                      <p>
                        <span className="font-semibold text-accent">Pros:</span>{" "}
                        <span className="text-muted-foreground">{type.pros}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-red-500">Cons:</span>{" "}
                        <span className="text-muted-foreground">{type.cons}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-accent">Best for:</span>{" "}
                        <span className="text-muted-foreground">{type.best}</span>
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* ROI Section */}
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-12">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-accent" />
                  Geyser Replacement ROI in Johannesburg
                </h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground leading-relaxed">
                    If your geyser is over 10 years old, replacement with a modern energy-efficient model can reduce
                    your electricity costs by 30-40%. For a typical Johannesburg household:
                  </p>
                  <div className="bg-background p-4 rounded space-y-2">
                    <p>
                      <span className="font-semibold">Current electric costs:</span>{" "}
                      <span className="text-muted-foreground">ZAR 300-500/month for hot water</span>
                    </p>
                    <p>
                      <span className="font-semibold">After modern geyser:</span>{" "}
                      <span className="text-muted-foreground">ZAR 200-300/month (40% savings)</span>
                    </p>
                    <p>
                      <span className="font-semibold">Monthly savings:</span>{" "}
                      <span className="text-accent font-bold">ZAR 100-200</span>
                    </p>
                    <p>
                      <span className="font-semibold">Annual savings:</span>{" "}
                      <span className="text-accent font-bold">ZAR 1,200-2,400</span>
                    </p>
                    <p className="pt-2 border-t">
                      <span className="font-semibold">Payback period:</span>{" "}
                      <span className="text-accent font-bold">18-24 months</span>
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    Solar geysers have longer payback periods (3-5 years) but lowest long-term operating costs.
                  </p>
                </div>
              </div>

              {/* Installation Process */}
              <h3 className="text-2xl font-bold mb-6">Our Geyser Installation Process</h3>
              <div className="bg-muted p-8 rounded-lg mb-12">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Assessment & Quote</h4>
                      <p className="text-muted-foreground text-sm">
                        We visit your Johannesburg property, assess your current setup, understand your hot water needs,
                        and recommend the best geyser option. Free, no-obligation quote provided.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Scheduling</h4>
                      <p className="text-muted-foreground text-sm">
                        Once you approve, we schedule installation at your convenience. Most installations happen within
                        1-3 days. Same-day service sometimes available.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Professional Installation</h4>
                      <p className="text-muted-foreground text-sm">
                        Our certified technicians safely remove your old geyser and install the new unit. We handle all
                        connections, safety checks, and testing. Typically 2-4 hours for standard installation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Testing & Instruction</h4>
                      <p className="text-muted-foreground text-sm">
                        We test the new geyser thoroughly, ensure it's functioning correctly, and show you how to
                        operate and maintain it properly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Warranty & Support</h4>
                      <p className="text-muted-foreground text-sm">
                        All installations backed by 12-month workmanship warranty plus manufacturer warranty. We're
                        available for follow-up service and maintenance anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <h3 className="text-2xl font-bold mb-6">Our Geyser Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <Card className="p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-accent" />
                    New Installation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Professional installation of electric, gas, solar, or instant geysers. All brands. Full warranty
                    coverage.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Repair Service
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Fast repair of broken geysers, no hot water issues, leaks, and other problems. Same-day often
                    available.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Maintenance
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Annual maintenance, flushing, pressure valve testing, and component inspection to extend geyser
                    life.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-accent" />
                    Upgrade Consultation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Expert advice on upgrading to energy-efficient models. Calculate ROI and long-term savings.
                  </p>
                </Card>
              </div>

              {/* Pricing */}
              <h3 className="text-2xl font-bold mb-6">Johannesburg Geyser Installation Pricing</h3>
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
                      <td className="p-4">Free Assessment & Quote</td>
                      <td className="p-4 font-semibold">FREE</td>
                      <td className="p-4">30-45 min</td>
                    </tr>
                    <tr>
                      <td className="p-4">Electric Geyser Installation (50-100L)</td>
                      <td className="p-4 font-semibold">ZAR 4,500 - 8,500</td>
                      <td className="p-4">2-4 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Gas Geyser Installation</td>
                      <td className="p-4 font-semibold">ZAR 6,000 - 12,000</td>
                      <td className="p-4">3-5 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Solar Geyser Installation</td>
                      <td className="p-4 font-semibold">ZAR 15,000 - 25,000</td>
                      <td className="p-4">Full day</td>
                    </tr>
                    <tr>
                      <td className="p-4">Instant/Tankless Geyser Installation</td>
                      <td className="p-4 font-semibold">ZAR 8,000 - 15,000</td>
                      <td className="p-4">2-3 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Geyser Repair (Parts + Labor)</td>
                      <td className="p-4 font-semibold">ZAR 800 - 5,000</td>
                      <td className="p-4">1-2 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Annual Maintenance Service</td>
                      <td className="p-4 font-semibold">ZAR 1,200 - 2,500</td>
                      <td className="p-4">1-2 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Internal Links */}
              <div className="bg-background p-8 rounded-lg">
                <h3 className="font-bold mb-4">Related Services in Johannesburg</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Plumbing Services</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/plumber-johannesburg" className="text-foreground hover:text-accent font-semibold">
                          Professional Plumber
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/emergency-plumber-johannesburg"
                          className="text-foreground hover:text-accent font-semibold"
                        >
                          Emergency Plumbing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blocked-drain-johannesburg"
                          className="text-foreground hover:text-accent font-semibold"
                        >
                          Drain Cleaning
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Borehole Services</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/borehole-drilling" className="text-foreground hover:text-accent font-semibold">
                          Borehole Drilling
                        </Link>
                      </li>
                      <li>
                        <Link href="/johannesburg" className="text-foreground hover:text-accent font-semibold">
                          All Jo'burg Services
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
                <Card className="p-6 bg-accent/10 border-accent mb-6">
                  <h3 className="font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-2xl font-bold text-accent">1000+</p>
                      <p className="text-muted-foreground">Geysers installed</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">15+</p>
                      <p className="text-muted-foreground">Years experience</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">40%</p>
                      <p className="text-muted-foreground">Energy savings potential</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent mb-6">
                  <h3 className="font-bold mb-4">Contact Us</h3>
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
                    WhatsApp Quote
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
          <h2 className="text-3xl font-bold mb-12">Geyser Installation FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How long do geysers last?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Electric geysers: 10-15 years. Gas geysers: 12-20 years. Solar systems: 20-25 years. Proper maintenance
                extends lifespan. Annual servicing recommended.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What's the best geyser type?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Depends on your needs. Electric: affordable upfront. Gas: fast heating. Solar: lowest long-term costs.
                Instant: space-saving. We recommend based on your specific situation.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How much can solar save?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Solar geysers reduce hot water costs by 60-80%. Higher upfront cost (ZAR 15,000-25,000) but payback in
                3-5 years. Government rebates available.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How quickly can you install?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Standard installations within 1-3 days of booking. Same-day available for simpler replacements. We
                coordinate around your schedule.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Do you service all geyser brands?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! We service all major brands including Kwikot, Joven, Vulcan, Metalurg, and imported models. We
                stock genuine parts.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Is warranty included?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! 12-month workmanship warranty on all installations. Plus manufacturer warranty (typically 5-10
                years on geyser tanks).
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Professional Geyser Installation?"
        description="Free quote and expert advice. All geyser types. Energy-efficient solutions."
        primaryText="Get Free Quote"
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
            name: "Geyser Installation Johannesburg - Borehole Pros",
            description: "Professional geyser installation in Johannesburg. Electric, gas, solar options.",
            url: "https://boreholepros.co.za/geyser-installation-johannesburg",
            telephone: "060-348-8268",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            serviceType: "Geyser Installation",
          }),
        }}
      />
    </>
  )
}
