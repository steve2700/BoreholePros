import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Droplet, CheckCircle2, Phone, AlertCircle, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Edenvale | Professional Installation & Repair Services",
  description:
    "Expert borehole drilling services in Edenvale. Fast installation, repairs & maintenance. Serving Johannesburg's East Rand. Call 060 348 8268 for same-day quotes.",
  keywords:
    "borehole drilling edenvale, borehole installation edenvale, borehole repair edenvale, water borehole edenvale, borehole pump edenvale",
  openGraph: {
    title: "Borehole Drilling Edenvale | Professional Installation & Repair",
    description: "Expert borehole drilling services in Edenvale with fast response and professional installation.",
  },
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
    description: "Complete pump installation and water system setup for Edenvale properties.",
    href: "/borehole-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency borehole repairs and burst pipe response in Edenvale.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
]

export default function EdenvalePage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling Services in Edenvale"
        subtitle="Professional Installation | Same-Day Response | 24/7 Emergency Service"
        description="Borehole Pros brings 15+ years of expertise to Edenvale. Professional borehole drilling, installation, and emergency repair service. Free site assessment and quote. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Edenvale Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Borehole Solutions for Edenvale"
        description="From drilling to installation to emergency repairs, Borehole Pros provides comprehensive water solutions for Edenvale residents and businesses."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Professional Borehole Drilling Services in Edenvale
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Edenvale residents face increasing water restrictions and rising municipal water costs. A
                  professionally installed borehole offers a long-term solution that reduces water expenses by 60-80%
                  annually. At Borehole Pros, we've completed over 500 borehole installations across the East Rand, with
                  150+ specifically in Edenvale and surrounding suburbs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our team understands Edenvale's unique geology, water table conditions, and municipal requirements.
                  The water table in Edenvale typically sits between 60-100 meters, making it an ideal area for borehole
                  installation. We conduct free site assessments to determine exact depth, drilling feasibility, and
                  precise costs for your property.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">What Makes Our Borehole Drilling Different</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Unlike fly-by-night operators, Borehole Pros is fully licensed, insured, and certified. We handle all{" "}
                  <Link href="/contact" className="text-accent hover:underline font-semibold">
                    municipal permits and paperwork
                  </Link>{" "}
                  for Edenvale, ensuring your borehole is compliant with City of Johannesburg regulations. Our drilling
                  process is clean, professional, and minimizes disruption to your property.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We use modern rotary drilling equipment capable of reaching depths up to 200 meters. Our technicians
                  are trained to identify geological changes, avoiding complications and reducing drilling time. After
                  drilling, we install quality pump systems, conduct comprehensive water testing, and provide ongoing
                  maintenance support.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Drilling Cost in Edenvale</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Edenvale borehole costs typically range from ZAR 15,000-25,000 depending on depth and soil conditions.
                  Here's what you get in that investment:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Free site assessment and water table depth testing</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Professional rotary drilling to required depth</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Quality submersible pump installation and testing</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Water quality testing and certification</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Municipal permit assistance and compliance documentation</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>12-month warranty and ongoing maintenance support</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Edenvale Water Table & Geology</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Edenvale sits in the East Rand area with relatively consistent geological conditions. The water table
                  averages 60-100 meters, making drilling moderately straightforward compared to some areas. The primary
                  rock formation is dolomite with shale layers, which our equipment handles efficiently.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Historical rainfall in Edenvale averages 630mm annually, supporting good groundwater recharge. This
                  means your borehole will maintain reliable water supply throughout the year, even during drought
                  periods. We recommend annual maintenance to ensure optimal performance.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Borehole Installation Process</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our process is streamlined and professional, typically completed in 3-5 days from start to handover:
                </p>

                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>Free site assessment and water table depth determination</li>
                  <li>Permit application and council coordination (we handle everything)</li>
                  <li>Mobile drilling rig deployment and drilling operations</li>
                  <li>Borehole casing installation and sealing</li>
                  <li>Submersible pump installation and pressure testing</li>
                  <li>Water quality testing and certification</li>
                  <li>Final inspection and system handover with documentation</li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros in Edenvale</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Edenvale deserves expert service, not amateurs. Here's why 150+ Edenvale residents trust Borehole
                  Pros:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">15+ Years Edenvale Experience</p>
                    <p className="text-xs text-muted-foreground">
                      Deep knowledge of local geology, regulations, and contractors.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">500+ Boreholes Completed</p>
                    <p className="text-xs text-muted-foreground">
                      Proven track record with 150+ in Edenvale specifically.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Fully Licensed & Insured</p>
                    <p className="text-xs text-muted-foreground">
                      All work covered by insurance and workmanship warranty.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Same-Day Response</p>
                    <p className="text-xs text-muted-foreground">
                      Free quotes within 24 hours. Emergency repairs available 24/7.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Maintenance & Ongoing Support</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Installation is just the beginning. We provide comprehensive{" "}
                  <Link href="/borehole-maintenance" className="text-accent hover:underline font-semibold">
                    borehole maintenance
                  </Link>{" "}
                  services to ensure your system operates reliably for 20+ years. Annual maintenance includes pump
                  inspection, water quality testing, and any necessary repairs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Common issues we prevent through maintenance include pump failure, water contamination, and pressure
                  loss. A properly maintained borehole operates reliably with minimal downtime. We offer flexible
                  maintenance plans for Edenvale residents.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Quick Facts - Edenvale Boreholes</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Water Table Depth</p>
                      <p className="text-muted-foreground">60-100 meters average</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Average Cost</p>
                      <p className="text-muted-foreground">ZAR 15,000-25,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Annual Water Savings</p>
                      <p className="text-muted-foreground">60-80% reduction in water costs</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Drilling Timeline</p>
                      <p className="text-muted-foreground">3-5 days from start to finish</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">System Lifespan</p>
                      <p className="text-muted-foreground">20+ years with proper maintenance</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get Your Free Edenvale Quote</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Related Borehole Services in Edenvale</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-installation" className="hover:text-accent transition-colors">
                  Professional Borehole Installation
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete pump installation and plumbing integration for your new borehole. We ensure proper pressure
                regulation, water storage integration, and system testing.
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
                Comprehensive water analysis ensuring your borehole water is safe for household use. Full bacterial and
                chemical testing with certification.
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
                Burst pipes, burst geysers, and urgent plumbing emergencies need immediate response. We're available
                24/7 for Edenvale emergencies with same-day service.
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
                Annual maintenance keeps your borehole working perfectly for 20+ years. Pump inspection, water testing,
                and preventive repairs all included.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Edenvale Borehole Drilling FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What is the water table depth in Edenvale?</h3>
              <p className="text-muted-foreground text-sm">
                Edenvale's water table typically ranges from 60-100 meters. Our free site assessment determines exact
                depth for your property.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much does borehole drilling cost in Edenvale?</h3>
              <p className="text-muted-foreground text-sm">
                Typical cost is ZAR 15,000-25,000 including drilling, pump installation, water testing, and permits. Get
                a free quote today.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How long does the entire process take?</h3>
              <p className="text-muted-foreground text-sm">
                From free assessment to handover: 3-5 days. Permit processing adds 2-4 weeks but runs parallel to
                drilling preparation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do I need a City of Johannesburg permit?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We handle all permit applications on your behalf. Included in our service quote.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much water will I save annually?</h3>
              <p className="text-muted-foreground text-sm">
                Typical household saves 60-80% on water costs. If you pay ZAR 500/month, you'll save ZAR 300-400
                monthly.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What warranty do you provide?</h3>
              <p className="text-muted-foreground text-sm">
                12-month comprehensive warranty on all work. Plus ongoing support and maintenance plans available.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Expert Borehole Drilling in Edenvale?"
        description="Get your free assessment and quote today. Same-day response available. Call 060 348 8268 or submit the form below."
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
            name: "Borehole Pros - Edenvale",
            description: "Professional borehole drilling and plumbing services in Edenvale",
            telephone: "060-348-8268",
            areaServed: {
              "@type": "City",
              name: "Edenvale",
            },
            serviceArea: [
              { "@type": "City", name: "Edenvale" },
              { "@type": "City", name: "East Rand" },
              { "@type": "City", name: "Johannesburg" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Borehole & Plumbing Services",
              itemListElement: [
                { "@type": "Service", name: "Borehole Drilling" },
                { "@type": "Service", name: "Borehole Installation" },
                { "@type": "Service", name: "Water Testing" },
                { "@type": "Service", name: "Emergency Plumbing" },
              ],
            },
          }),
        }}
      />
    </>
  )
}
