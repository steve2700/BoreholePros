import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Geyser Installation & Repair Services SA | Expert Service | Borehole Pros",
  description:
    "Professional geyser installation, repair, and maintenance across South Africa. Gas, electric, and solar geysers. Same-day service. Call 060 348 8268.",
  keywords: [
    "geyser installation",
    "geyser repair",
    "geyser maintenance",
    "solar geyser",
    "electric geyser",
    "hot water system",
    "geyser replacement",
  ],
  openGraph: {
    title: "Geyser Installation & Repair Services SA | Borehole Pros",
    description: "Professional geyser installation, repair, and maintenance. Same-day service available.",
    url: "https://boreholepros.co.za/geyser-installation",
    type: "website",
  },
  alternates: {
    canonical: "https://boreholepros.co.za/geyser-installation",
  },
}

const features: ServiceItem[] = [
  {
    title: "Electric Geyser Installation",
    description:
      "Professional installation of electric geysers. Fast, reliable hot water solution for homes and businesses.",
    href: "#",
  },
  {
    title: "Solar Geyser Installation",
    description:
      "Energy-efficient solar geyser installation. Reduce energy costs by 60-80%. Perfect for South Africa's climate.",
    href: "#",
  },
  {
    title: "Gas Geyser Installation",
    description: "Safe, professional gas geyser installation. Instant hot water. Perfect for continuous supply needs.",
    href: "#",
  },
  {
    title: "Geyser Repairs",
    description:
      "Emergency geyser repairs including leaks, temperature issues, and pressure problems. Same-day service.",
    href: "#",
  },
]

export default function GeyserInstallationPage() {
  return (
    <>
      <Hero
        title="Professional Geyser Installation, Repair & Maintenance"
        subtitle="Energy-Efficient Hot Water Solutions"
        description="Expert geyser installation and repair services across South Africa. Electric, gas, and solar options. Emergency repairs available 24/7. Same-day service in most areas."
        imageSrc="/images/geyser-repair.jpg"
        cta={{
          primary: { text: "Get Free Geyser Quote", href: "/contact" },
          secondary: { text: "Call 060 348 8268", href: "tel:0603488268" },
        }}
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Professional Geyser Services for Every Home
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A reliable geyser is essential for modern living. Whether you need a new installation, emergency repair,
                or maintenance service, Borehole Pros delivers expert solutions. With over 15 years of experience, we've
                installed and maintained thousands of geysers across South Africa, from residential homes to large
                commercial facilities.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We specialize in all geyser types—electric, gas, and solar—ensuring you get the right system for your
                needs and budget. Our certified technicians understand the specific requirements of each geyser type and
                can advise on the best energy-efficient solutions to reduce your utility bills.
              </p>

              <h3 className="text-2xl font-bold mb-6 mt-12">Why Choose Professional Geyser Installation?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Attempting a DIY geyser installation is dangerous and often illegal. Professional installation ensures
                safety compliance, proper plumbing connections, and optimal performance. Our team handles all aspects:
                site assessment, removal of old geysers, installation of new units, pressure testing, and complete
                certification.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Safety Assured
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All installations meet safety standards. Gas geysers checked for leaks. Pressure relief valves
                    properly installed.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Energy Efficient
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Modern geysers use 40-60% less energy than older models. Solar options available for maximum
                    savings.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Warranty Coverage
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All installations backed by warranty. Parts and labor guaranteed. Quick service for issues.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Emergency Available
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    24/7 emergency geyser repairs. Same-day service for breakdowns. No weekend or holiday surcharges.
                  </p>
                </div>
              </div>
            </div>

            <div className="sticky top-24 h-fit">
              <Card className="p-6 bg-accent/5 border-accent mb-6">
                <h3 className="font-bold mb-4">Quick Contact</h3>
                <a
                  href="tel:0603488268"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                >
                  060 348 8268
                </a>
                <Link href="/contact" className="w-full">
                  <button className="w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors">
                    Request Quote
                  </button>
                </Link>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4 text-lg">Average Geyser Costs</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-accent">Electric Geyser</p>
                    <p className="text-muted-foreground">ZAR 3,000-6,000 + installation</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Gas Geyser</p>
                    <p className="text-muted-foreground">ZAR 4,000-8,000 + installation</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Solar Geyser</p>
                    <p className="text-muted-foreground">ZAR 8,000-15,000 + installation</p>
                  </div>
                  <p className="text-xs text-muted-foreground italic pt-3 border-t">
                    Installation costs vary. Free quote after site assessment.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Geyser Types Comparison */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Geyser Types: Which Is Right for You?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-accent">Electric Geysers</h3>
              <p className="text-muted-foreground mb-6">
                Most common and affordable option. Heats water using electric elements. Simple to install and maintain.
                Best for steady demand.
              </p>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Lower initial cost</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Reliable performance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Easy maintenance</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Typical lifespan: 10-15 years</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-accent">
              <h3 className="text-2xl font-bold mb-4 text-accent">Solar Geysers</h3>
              <p className="text-muted-foreground mb-6">
                Most energy-efficient option. Heats water using solar panels. Perfect for South Africa's sunny climate.
                Saves 60-80% on energy.
              </p>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Huge energy savings</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Eco-friendly</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Government rebates available</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Typical lifespan: 15-20 years</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-accent">Gas Geysers</h3>
              <p className="text-muted-foreground mb-6">
                Instant hot water on demand. Efficient and cost-effective for continuous use. Requires gas line
                installation.
              </p>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Instant hot water</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Low operating cost</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Space-saving</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Typical lifespan: 12-18 years</p>
            </Card>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Complete Geyser Services"
        description="From installation to emergency repair, we handle all geyser needs."
        services={features}
        columns={4}
      />

      {/* Geyser Maintenance & Troubleshooting */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Geyser Maintenance & Common Issues</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Regular Maintenance Tips</h3>
              <ul className="space-y-4">
                {[
                  "Annual safety check for pressure relief valve function",
                  "Regular inspection of plumbing connections for leaks",
                  "Monitor geyser temperature and adjust as needed",
                  "Check for rust or corrosion on exterior",
                  "Flush sediment from tank every 2-3 years",
                  "Inspect gas connections (for gas geysers) yearly",
                  "Test emergency shut-off procedures",
                  "Professional service every 3-5 years",
                ].map((tip, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">When to Call a Professional</h3>
              <div className="space-y-4">
                {[
                  {
                    problem: "No hot water",
                    action: "Could be thermostat or element failure. Professional diagnosis needed.",
                  },
                  {
                    problem: "Leaking geyser",
                    action: "Immediate service required. Can cause water damage and safety hazards.",
                  },
                  {
                    problem: "Strange noises",
                    action: "May indicate sediment buildup. Flush or replacement may be needed.",
                  },
                  {
                    problem: "Poor pressure/temperature",
                    action: "Could be valve issue, sediment, or element failure. Professional inspection required.",
                  },
                  { problem: "Gas odor", action: "Immediate evacuation. Call gas supplier and do not ignore." },
                  { problem: "Age over 15 years", action: "Consider replacement for safety and efficiency." },
                ].map((item, idx) => (
                  <Card key={idx} className="p-4">
                    <h4 className="font-bold mb-2 text-accent">{item.problem}</h4>
                    <p className="text-sm text-muted-foreground">{item.action}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Internal Linking Section */}
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="font-bold mb-4 text-lg">Related Services & Resources</h3>
            <p className="text-muted-foreground mb-6">
              Geyser problems often lead to other plumbing issues. Our team can handle complete water and plumbing
              solutions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-bold mb-3">Plumbing Services</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/emergency-plumbing" className="text-accent hover:underline">
                      Emergency Plumbing
                    </Link>
                  </li>
                  <li>
                    <Link href="/leak-detection" className="text-accent hover:underline">
                      Leak Detection
                    </Link>
                  </li>
                  <li>
                    <Link href="/drain-cleaning" className="text-accent hover:underline">
                      Drain Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/pipe-repairs" className="text-accent hover:underline">
                      Pipe Repairs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-3">Water Solutions</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/borehole-drilling" className="text-accent hover:underline">
                      Borehole Drilling
                    </Link>
                  </li>
                  <li>
                    <Link href="/borehole-installation" className="text-accent hover:underline">
                      Borehole Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="/water-testing" className="text-accent hover:underline">
                      Water Testing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-3">Locations</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/johannesburg" className="text-accent hover:underline">
                      Johannesburg
                    </Link>
                  </li>
                  <li>
                    <Link href="/cape-town" className="text-accent hover:underline">
                      Cape Town
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-accent hover:underline">
                      All Areas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Geyser Installation FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How long does geyser installation take?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Typical installation takes 2-4 hours depending on old geyser removal, site conditions, and geyser type.
                We handle removal, installation, plumbing connections, pressure testing, and certification in one visit.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What warranty do you provide?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We provide 1-year labor warranty and full manufacturer warranty on all geysers. Most manufacturers offer
                3-5 year warranties on parts. All work is fully guaranteed.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can I install a geyser myself?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional installation is recommended for safety and warranty reasons. Gas geysers require licensed
                installation. Electric geysers need proper electrical work. We handle everything to code.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Which geyser type saves the most money?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Solar geysers save 60-80% on energy costs—the most savings. However, initial cost is higher. Payback
                period is typically 5-7 years. Gas and electric are cheaper upfront but higher operating costs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How often should geysers be serviced?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Annual safety inspection recommended. More frequent maintenance extends lifespan and prevents
                emergencies. We offer maintenance plans for regular checks and priority emergency service.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What's the lifespan of a geyser?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Electric geysers: 10-15 years. Gas geysers: 12-18 years. Solar geysers: 15-20 years. Proper maintenance
                extends lifespan. After 15 years, replacement is recommended for safety and efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Professional Geyser Installation & Repair"
        description="Get expert service from certified technicians. Free quote. Same-day service available in most areas."
        primaryText="Request Free Quote"
        primaryHref="/contact"
        secondaryText="Call 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Geyser Installation & Repair",
            provider: {
              "@type": "Organization",
              name: "Borehole Pros",
              telephone: "060-348-8268",
            },
            areaServed: {
              "@type": "Country",
              name: "South Africa",
            },
            priceRange: "ZAR",
            offers: [
              { "@type": "Offer", description: "Electric Geyser Installation" },
              { "@type": "Offer", description: "Solar Geyser Installation" },
              { "@type": "Offer", description: "Gas Geyser Installation" },
              { "@type": "Offer", description: "Geyser Repair Service" },
            ],
          }),
        }}
      />
    </>
  )
}
