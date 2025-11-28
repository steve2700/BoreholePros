import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Droplet, CheckCircle2, Phone, AlertCircle, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Midrand | Premium Installation & Repair Services",
  description:
    "Expert borehole drilling in Midrand for residential and business properties. Fast installation, repairs & maintenance. Call 060 348 8268 for same-day quotes.",
  keywords:
    "borehole drilling midrand, borehole installation midrand, midrand borehole drilling, water borehole midrand",
}

const services: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description: "Professional borehole drilling with modern equipment and certified technicians.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Borehole Installation",
    description: "Complete pump installation and water system setup for Midrand properties.",
    href: "/borehole-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency borehole repairs and burst pipe response in Midrand.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
]

export default function MidrandPage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling Services in Midrand"
        subtitle="Professional Installation | Business Solutions | 24/7 Emergency Service"
        description="Borehole Pros delivers premium borehole drilling and plumbing services to Midrand's business and residential communities. 15+ years expertise. Free assessment. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Midrand Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Premium Borehole Solutions for Midrand"
        description="Midrand's thriving business community deserves expert water solutions. Borehole Pros provides comprehensive drilling, installation, and maintenance services."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Premium Borehole Drilling Services in Midrand
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Midrand is South Africa's premier business hub with thriving commercial operations, corporate offices,
                  and modern residential developments. Water security is critical for the success of Midrand's business
                  community. Borehole Pros has completed over 500 borehole installations across Johannesburg, with 200+
                  specifically in Midrand and the business corridor.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our team understands Midrand's unique position as a business and residential hub. We serve corporate
                  clients, shopping centers, logistics hubs, and residential complexes. The water table in Midrand
                  typically sits between 40-70 meters, making it one of the easier areas for efficient borehole
                  installation and operation.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Midrand's Leading Businesses Trust Borehole Pros</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Business continuity depends on reliable water supply. Unlike fly-by-night contractors, Borehole Pros
                  is fully licensed, insured, and certified with 15+ years of Midrand-specific experience. We've
                  installed boreholes for Midrand's largest corporate tenants, shopping centers, and residential
                  developments.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our installations are designed for zero downtime. We coordinate closely with business operations,
                  install systems in phases, and provide redundancy for critical systems. We handle all municipal
                  permits, regulatory compliance, and ongoing maintenance so your team focuses on core business.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Midrand Water Table Advantage</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Midrand has one of the shallowest water tables in Johannesburg—averaging 40-70 meters. This is a major
                  advantage for borehole costs and drilling efficiency. Shallow water tables mean faster drilling, lower
                  costs, and quicker ROI. Most Midrand boreholes reach water-bearing levels in 1-2 days of drilling.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  This geological advantage translates to ZAR 12,000-18,000 for typical residential installations—the
                  lowest in Johannesburg. Commercial systems range ZAR 30,000-50,000 depending on required capacity.
                  Combined with 60-80% water savings, ROI occurs within 18-24 months for residential, 12-18 months for
                  commercial.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Drilling Cost in Midrand</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Midrand offers exceptional value for borehole installation due to favorable geology. Typical costs
                  break down as follows:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Residential: ZAR 12,000-18,000 (Midrand's lowest cost in Johannesburg)</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Commercial: ZAR 30,000-50,000</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      All costs include drilling, pump installation, water testing, permits, and certification
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>12-month warranty on all residential installations</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>24-month warranty on commercial systems</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Midrand Geology & Water Quality</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Midrand's geological advantage starts with its shallow water table. The primary rock formation is
                  dolomite with excellent water-bearing capacity. Historical data shows consistent groundwater
                  availability throughout the year, making Midrand boreholes extremely reliable.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Midrand receives approximately 700mm of annual rainfall, supporting excellent groundwater recharge.
                  Water quality is typically good to excellent, requiring minimal treatment for most applications. Our
                  comprehensive water testing ensures your borehole meets all health and safety standards.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Borehole Installation Process in Midrand</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our streamlined process handles Midrand installations efficiently, typically completed in 2-4 days
                  from start to handover:
                </p>

                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>Free site assessment and water table depth determination</li>
                  <li>Permit application and council coordination (we handle everything)</li>
                  <li>Mobile drilling rig deployment and rapid drilling operations</li>
                  <li>Borehole casing installation and sealing</li>
                  <li>Submersible pump installation and pressure testing</li>
                  <li>Water quality testing and certification</li>
                  <li>Final inspection and system handover with full documentation</li>
                </ol>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  For commercial installations, we coordinate closely with your operations team to ensure zero
                  disruption to business activities. We can install systems in phases and provide temporary water
                  solutions during installation if needed.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros in Midrand</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Midrand's leading businesses and residents trust Borehole Pros. Here's why 200+ Midrand customers
                  continue partnering with us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">15+ Years Midrand Experience</p>
                    <p className="text-xs text-muted-foreground">
                      Proven track record with Midrand's leading corporations and residential developments.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">500+ Boreholes Completed</p>
                    <p className="text-xs text-muted-foreground">
                      200+ specifically in Midrand. Proven expertise with commercial-scale installations.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Same-Day Response</p>
                    <p className="text-xs text-muted-foreground">
                      Free quotes within 24 hours. Emergency repairs available 24/7 for business continuity.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Lowest Midrand Costs</p>
                    <p className="text-xs text-muted-foreground">
                      Exceptional value due to favorable geology. ZAR 12,000-18,000 for residential boreholes.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Maintenance & Support</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Installation is just the beginning. Our comprehensive maintenance programs ensure your Midrand
                  borehole operates reliably for 20+ years. Annual maintenance includes pump inspection, water quality
                  testing, and preventive repairs. For commercial clients, 24/7 emergency support is available.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Commercial installations receive specialized maintenance contracts with guaranteed response times. We
                  prevent downtime through proactive monitoring and rapid response to any issues. Your business water
                  supply remains secure year-round.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Quick Facts - Midrand Boreholes</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Water Table Depth</p>
                      <p className="text-muted-foreground">40-70 meters (shallow)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Residential Cost</p>
                      <p className="text-muted-foreground">ZAR 12,000-18,000 (lowest in JNB)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Commercial Cost</p>
                      <p className="text-muted-foreground">ZAR 30,000-50,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Annual Water Savings</p>
                      <p className="text-muted-foreground">60-80% reduction</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Installation Time</p>
                      <p className="text-muted-foreground">2-4 days (fast)</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get Your Free Midrand Quote</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-3">Call for free site assessment</p>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    WhatsApp Quote
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Related Borehole Services in Midrand</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-installation" className="hover:text-accent transition-colors">
                  Professional Borehole Installation
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete pump installation and system integration. Designed for both residential and commercial
                operations in Midrand.
              </p>
              <Link href="/borehole-installation" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/water-testing" className="hover:text-accent transition-colors">
                  Water Quality Testing
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive water analysis for safety and compliance. Full certification and ongoing monitoring
                available.
              </p>
              <Link href="/water-testing" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/emergency-plumbing" className="hover:text-accent transition-colors">
                  24/7 Emergency Plumbing
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Business-critical emergencies need immediate response. 24/7 service for Midrand with guaranteed rapid
                response.
              </p>
              <Link href="/emergency-plumbing" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-maintenance" className="hover:text-accent transition-colors">
                  Borehole Maintenance Plans
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Proactive maintenance for 20+ year system lifespan. Commercial support contracts with guaranteed
                response times.
              </p>
              <Link href="/borehole-maintenance" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Midrand Borehole Drilling FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Why is Midrand ideal for boreholes?</h3>
              <p className="text-muted-foreground text-sm">
                Shallow water table (40-70m) means lower drilling costs (ZAR 12,000-18,000), faster installation (2-4
                days), and better ROI.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much does a Midrand borehole cost?</h3>
              <p className="text-muted-foreground text-sm">
                Residential: ZAR 12,000-18,000. Commercial: ZAR 30,000-50,000. Get a free quote today.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How fast is Midrand borehole drilling?</h3>
              <p className="text-muted-foreground text-sm">
                Installation typically takes 2-4 days from start to handover due to Midrand's shallow water table.
                Commercial may take longer.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What water savings can I expect in Midrand?</h3>
              <p className="text-muted-foreground text-sm">
                60-80% annual water cost reduction. If you pay ZAR 400/month, save ZAR 240-320 monthly.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do you service Midrand corporate clients?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. 200+ Midrand commercial clients trust us. Commercial installations, maintenance contracts, and 24/7
                emergency support available.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What's your warranty on Midrand installations?</h3>
              <p className="text-muted-foreground text-sm">
                12-month warranty on residential. 24-month on commercial. Plus ongoing maintenance plans available.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Expert Borehole Drilling in Midrand?"
        description="Get your free assessment and quote today. Lowest costs in Johannesburg with fastest installation. Call 060 348 8268."
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
            name: "Borehole Pros - Midrand",
            description: "Professional borehole drilling services in Midrand",
            telephone: "060-348-8268",
            areaServed: { "@type": "City", name: "Midrand" },
          }),
        }}
      />
    </>
  )
}
