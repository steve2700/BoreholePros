import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Droplet, CheckCircle2, Phone, AlertCircle, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Prices Pretoria | Cost Guide & Professional Services",
  description:
    "Transparent borehole drilling pricing in Pretoria. Costs, factors, ROI analysis. Professional installation with free quotes. Call 060 348 8268.",
  keywords:
    "borehole drilling prices pretoria, borehole drilling cost pretoria, borehole installation price pretoria, borehole drilling rates",
}

const services: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description: "Professional borehole drilling with transparent pricing and free site assessment.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Cost Analysis",
    description: "Complete ROI calculator showing water savings and payback timeline.",
    href: "/borehole-drilling-cost",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Get Quote",
    description: "Free, no-obligation quote for your Pretoria property or business.",
    href: "/contact",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
]

export default function BoreholePretoriaPricingPage() {
  return (
    <>
      <Hero
        title="Borehole Drilling Prices Pretoria | Complete Cost Breakdown"
        subtitle="Transparent Pricing | ROI Analysis | Professional Installation"
        description="Get transparent pricing for borehole drilling in Pretoria. Learn what affects costs and calculate your water savings. Free assessment and quote. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Pretoria Quote", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Pretoria Borehole Drilling Pricing"
        description="Transparent pricing structure with complete cost breakdown. Understand what you're paying for and the ROI timeline for your investment."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Borehole Drilling Prices in Pretoria - Complete Guide
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  One of the most common questions we hear is: "How much does borehole drilling cost in Pretoria?" The
                  answer isn't one-size-fits-all, but we're committed to transparent pricing so you understand exactly
                  what you're investing in. Based on 200+ Pretoria installations, we can provide reliable pricing
                  guidance for your specific situation.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole Pros stands out for price transparency. We don't hide costs or surprise you at the end. Our
                  free site assessment determines exact costs for your property, and we provide written quotes before
                  any work begins. You'll understand the complete investment and ROI timeline before making a decision.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Typical Borehole Drilling Prices in Pretoria</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Pretoria borehole costs vary based on specific location and depth requirements. Here's what
                  residential customers typically pay:
                </p>

                <div className="bg-muted p-8 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Residential Borehole Pricing</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b border-border pb-3">
                      <span className="text-muted-foreground">Shallow (40-60m)</span>
                      <span className="font-bold">ZAR 14,000-18,000</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-border pb-3">
                      <span className="text-muted-foreground">Medium (60-90m)</span>
                      <span className="font-bold">ZAR 18,000-26,000</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-border pb-3">
                      <span className="text-muted-foreground">Deep (90-120m)</span>
                      <span className="font-bold">ZAR 26,000-35,000</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-muted-foreground">Very Deep (120m+)</span>
                      <span className="font-bold">ZAR 35,000-50,000+</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Commercial and industrial installations typically range from ZAR 32,000-65,000+ depending on required
                  capacity and depth. Agricultural systems for farms may cost ZAR 25,000-50,000 depending on acreage and
                  irrigation requirements.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">What's Included in Our Pretoria Pricing</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our quotes include everything needed for a complete, professional installation:
                </p>

                <ul className="space-y-3 mt-4">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Free site assessment and water table depth determination</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Professional rotary drilling to required depth</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Quality submersible pump installation and pressure testing</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Complete water quality testing and health certification</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Municipal permit application and council liaison (all handled)</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Professional installation documentation and certification</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>12-month comprehensive warranty on residential installations</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Ongoing maintenance and support options available</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">What Affects Borehole Drilling Prices</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Several factors influence your final quote. Understanding these helps you anticipate costs:
                </p>

                <div className="space-y-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold mb-2">1. Water Table Depth</h4>
                    <p className="text-sm text-muted-foreground">
                      The deeper the water table, the more drilling time and fuel costs. Pretoria depths range 50-120m.
                      Each additional 10m adds approximately ZAR 1,500-2,000 to drilling costs.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold mb-2">2. Soil & Rock Composition</h4>
                    <p className="text-sm text-muted-foreground">
                      Hard granite or sandstone layers slow drilling. Soft clay or shale is faster. Pretoria's mixed
                      geology affects drilling speed and equipment wear. We always work with geological maps to predict
                      complications.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold mb-2">3. Borehole Diameter</h4>
                    <p className="text-sm text-muted-foreground">
                      Larger diameter boreholes (for higher capacity) require more drilling time. Residential typically
                      use 100-150mm. Commercial may be 150-200mm+.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold mb-2">4. Pump Capacity</h4>
                    <p className="text-sm text-muted-foreground">
                      Standard 0.75-1.5kW pumps cost less than high-capacity 2-3kW systems. Commercial installations use
                      larger pumps, increasing installation costs.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold mb-2">5. Site Access & Conditions</h4>
                    <p className="text-sm text-muted-foreground">
                      Easy access means faster drilling. Rocky ground or difficult terrain may add time and costs. We
                      assess access during free site visits.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold mb-2">6. Municipal Permits</h4>
                    <p className="text-sm text-muted-foreground">
                      City of Pretoria permits typically cost ZAR 500-1,500 depending on location. We handle all
                      applications and include permit costs in our quotes.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">ROI Analysis: Water Savings & Payback Timeline</h3>

                <p className="text-muted-foreground leading-relaxed">
                  The true value of a borehole lies in long-term water savings. Here's a typical ROI calculation for a
                  Pretoria household:
                </p>

                <div className="bg-accent/5 p-6 rounded-lg my-6 border border-accent">
                  <h4 className="font-bold mb-4">Example: Pretoria Residential Borehole ROI</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-accent/20 pb-2">
                      <span>Installation Cost</span>
                      <span className="font-bold">ZAR 20,000</span>
                    </div>
                    <div className="flex justify-between border-b border-accent/20 pb-2">
                      <span>Current Water Cost (Monthly)</span>
                      <span className="font-bold">ZAR 500</span>
                    </div>
                    <div className="flex justify-between border-b border-accent/20 pb-2">
                      <span>Savings with Borehole (60-80%)</span>
                      <span className="font-bold">ZAR 300-400/month</span>
                    </div>
                    <div className="flex justify-between border-b border-accent/20 pb-2">
                      <span>Monthly Maintenance Cost</span>
                      <span className="font-bold">ZAR 50</span>
                    </div>
                    <div className="flex justify-between border-b border-accent/20 pb-2">
                      <span>Net Monthly Savings</span>
                      <span className="font-bold text-accent">ZAR 250-350</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="font-bold">Payback Period</span>
                      <span className="font-bold text-accent">18-30 months</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    After payback, you enjoy 15-20+ years of free or minimal-cost water. Total lifetime savings: ZAR
                    100,000+
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Borehole Pros Pricing Is Competitive</h3>

                <p className="text-muted-foreground leading-relaxed">
                  We're not the cheapest, but we're the best value. Here's why our Pretoria pricing reflects expert
                  service:
                </p>

                <ul className="space-y-3 mt-4">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>15+ years experience means efficient operations and no costly mistakes</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>All work guaranteed by warranty and insurance</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Professional maintenance plans extend system lifespan</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency support minimizes costly downtime</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Get Your Free Pretoria Quote Today</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Stop guessing about costs. Our free site assessment determines your exact borehole drilling price for
                  Pretoria. We'll provide a written quote with complete pricing breakdown before any commitment.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Call 060 348 8268 or visit our contact page. We respond to quotes within 24 hours. Most Pretoria
                  customers receive their quote within 48 hours of site visit.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Pretoria Pricing Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Shallow (40-60m)</p>
                      <p className="text-muted-foreground">ZAR 14,000-18,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Medium (60-90m)</p>
                      <p className="text-muted-foreground">ZAR 18,000-26,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Deep (90-120m)</p>
                      <p className="text-muted-foreground">ZAR 26,000-35,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Annual Water Savings</p>
                      <p className="text-muted-foreground">ZAR 3,000-4,800</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Payback Period</p>
                      <p className="text-muted-foreground">18-30 months</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get Your Free Pretoria Quote</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-3">
                    Free site assessment - 24 hour response
                  </p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Related Borehole Services & Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-drilling-cost" className="hover:text-accent transition-colors">
                  Complete Borehole Cost Guide
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                National pricing guide with factors affecting costs, ROI calculations, and payback timelines.
              </p>
              <Link href="/borehole-drilling-cost" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-drilling" className="hover:text-accent transition-colors">
                  Borehole Drilling Services
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Professional drilling, installation, and maintenance across South Africa with certified technicians.
              </p>
              <Link href="/borehole-drilling" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/pretoria" className="hover:text-accent transition-colors">
                  Pretoria Services
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete borehole and plumbing services in Pretoria, Centurion, and surrounding areas.
              </p>
              <Link href="/pretoria" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-maintenance" className="hover:text-accent transition-colors">
                  Maintenance Plans
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Annual maintenance keeps your system reliable for 20+ years. Protect your investment.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Borehole Drilling Pricing FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What's included in your pricing?</h3>
              <p className="text-muted-foreground text-sm">
                Everything: drilling, pump installation, water testing, permits, and 12-month warranty. No hidden fees.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Why do prices vary so much?</h3>
              <p className="text-muted-foreground text-sm">
                Water table depth is the biggest factor. Deeper boreholes cost more. Soil type, pump capacity, and
                access also affect pricing.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do you offer payment plans?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. Contact us to discuss flexible payment options for larger installations.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">When will I see ROI?</h3>
              <p className="text-muted-foreground text-sm">
                Typically 18-30 months for residential. 12-18 months for commercial. After that, enjoy savings for
                15-20+ years.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Are there ongoing costs after installation?</h3>
              <p className="text-muted-foreground text-sm">
                Minimal. Annual maintenance costs ZAR 500-1,000. Electricity for pumping is usually ZAR 100-300 monthly.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Why not just drill the cheapest borehole?</h3>
              <p className="text-muted-foreground text-sm">
                Cheap installations fail. We invest in quality equipment and expertise for 20+ year lifespan and
                reliability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready to Know Your Exact Borehole Drilling Price?"
        description="Get your free assessment and transparent quote today. No hidden fees. Call 060 348 8268 for same-day response."
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
            name: "Borehole Pros - Pretoria",
            description: "Professional borehole drilling services with transparent pricing in Pretoria",
            telephone: "060-348-8268",
            areaServed: { "@type": "City", name: "Pretoria" },
          }),
        }}
      />
    </>
  )
}
