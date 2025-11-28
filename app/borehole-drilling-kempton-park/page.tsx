import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Droplet, CheckCircle2, Phone, AlertCircle, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Kempton Park | Expert Installation & Maintenance Services",
  description:
    "Professional borehole drilling in Kempton Park. Fast installation, repairs & maintenance. Serving East Rand. Call 060 348 8268 for same-day quotes.",
  keywords:
    "borehole drilling kempton park, borehole installation kempton park, borehole repair kempton park, water borehole kempton park",
  openGraph: {
    title: "Borehole Drilling Kempton Park | Professional Installation & Repair",
    description: "Expert borehole drilling services in Kempton Park with fast response and professional installation.",
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
    description: "Complete pump installation and water system setup for Kempton Park properties.",
    href: "/borehole-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency borehole repairs and burst pipe response in Kempton Park.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
]

export default function KemptonParkPage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling Services in Kempton Park"
        subtitle="Professional Installation | Same-Day Response | 24/7 Emergency Service"
        description="Borehole Pros brings 15+ years of expertise to Kempton Park. Professional borehole drilling, installation, and emergency repair service. Free site assessment and quote. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Kempton Park Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Borehole Solutions for Kempton Park"
        description="From drilling to installation to emergency repairs, Borehole Pros provides comprehensive water solutions for Kempton Park residents and businesses."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Professional Borehole Drilling Services in Kempton Park
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Kempton Park is an established industrial and residential area with specific water challenges.
                  Municipal water restrictions, coupled with high demand from commercial operations, make boreholes
                  essential for both businesses and residents. Borehole Pros has completed over 500 borehole
                  installations across the East Rand, with 180+ specifically in Kempton Park and surrounding industrial
                  areas.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our team understands Kempton Park's unique industrial geology, water table conditions, and municipal
                  requirements. The water table in Kempton Park typically sits between 55-95 meters, making it highly
                  suitable for borehole installation. We conduct free site assessments to determine exact depth,
                  drilling feasibility, and precise costs for your property or business.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Kempton Park Businesses Choose Borehole Pros</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Industrial and commercial operations in Kempton Park require reliable water supply. Unlike residential
                  boreholes, commercial installations demand industrial-grade equipment and higher capacity systems. We
                  specialize in both, with proven experience delivering large-scale water solutions to manufacturing,
                  logistics, and service companies across the area.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our fully licensed, insured, and certified team handles all municipal permits for Kempton Park
                  drilling operations. We manage compliance with City of Johannesburg regulations, ensuring your
                  borehole meets all industrial standards. Our drilling process is professional, efficient, and
                  minimizes downtime to your business operations.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Kempton Park Commercial & Residential Solutions</h3>

                <p className="text-muted-foreground leading-relaxed">
                  We serve both markets in Kempton Park. For residential customers, a professionally installed borehole
                  reduces water expenses by 60-80% annually. For commercial operations, the savings are even more
                  dramatic—industrial water costs can drop by 70-85% with a properly sized borehole system.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Commercial boreholes require specialized equipment capable of handling high flow rates. We install
                  high-capacity submersible pumps, dual-system redundancy for critical operations, and industrial-grade
                  plumbing integration. Most Kempton Park commercial installations cost ZAR 35,000-65,000 depending on
                  required capacity and depth.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Drilling Cost in Kempton Park</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Kempton Park borehole costs typically range from ZAR 18,000-28,000 for residential installations, and
                  ZAR 35,000-65,000 for commercial systems. Here's what's included in residential quotes:
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

                <h3 className="text-2xl font-bold mt-8 mb-4">Kempton Park Water Table & Geology</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Kempton Park sits in the East Rand with relatively consistent geological conditions suitable for
                  drilling. The water table averages 55-95 meters, making drilling straightforward. The primary rock
                  formation is dolomite with interspersed shale layers, which our equipment handles efficiently for
                  predictable drilling timelines.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Historical rainfall in Kempton Park averages 615mm annually, supporting good groundwater recharge.
                  This ensures boreholes maintain reliable water supply throughout the year. Industrial operations
                  benefit from this consistency, as production can rely on stable water availability. Annual maintenance
                  keeps systems operating at peak performance for 20+ years.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Borehole Installation Process in Kempton Park</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our streamlined process is professional and efficient, typically completed in 3-5 days from start to
                  handover for residential installations:
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

                <p className="text-muted-foreground leading-relaxed mt-4">
                  Commercial installations follow the same process but with larger equipment and longer completion
                  timelines (5-7 days). We coordinate closely with your operations to minimize disruption.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros in Kempton Park</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Kempton Park's industrial landscape requires experienced contractors. Here's why 180+ Kempton Park
                  customers trust Borehole Pros:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">15+ Years Kempton Park Experience</p>
                    <p className="text-xs text-muted-foreground">
                      Deep knowledge of industrial operations, commercial requirements, and local regulations.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">500+ Boreholes Completed</p>
                    <p className="text-xs text-muted-foreground">
                      Proven track record with 180+ in Kempton Park, including industrial clients.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Commercial Expertise</p>
                    <p className="text-xs text-muted-foreground">
                      Industrial-grade systems, high-capacity installations, and business-focused solutions.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Same-Day Response Available</p>
                    <p className="text-xs text-muted-foreground">
                      Free quotes within 24 hours. Emergency repairs available 24/7 for critical systems.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Maintenance & Ongoing Support</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Installation is just the beginning. We provide comprehensive borehole maintenance to ensure your
                  system operates reliably for 20+ years. Annual maintenance includes pump inspection, water quality
                  testing, and any necessary repairs. For commercial customers, we offer 24/7 emergency support
                  contracts.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Common issues we prevent through maintenance include pump failure, water contamination, and pressure
                  loss. A properly maintained borehole operates reliably with minimal downtime—critical for business
                  operations. We offer flexible maintenance plans for both residential and commercial Kempton Park
                  customers.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Quick Facts - Kempton Park Boreholes</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Water Table Depth</p>
                      <p className="text-muted-foreground">55-95 meters average</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Residential Cost</p>
                      <p className="text-muted-foreground">ZAR 18,000-28,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Commercial Cost</p>
                      <p className="text-muted-foreground">ZAR 35,000-65,000+</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Water Savings</p>
                      <p className="text-muted-foreground">60-85% annual reduction</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">System Lifespan</p>
                      <p className="text-muted-foreground">20+ years with maintenance</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get Your Free Kempton Park Quote</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
            Related Borehole Services in Kempton Park
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-installation" className="hover:text-accent transition-colors">
                  Professional Borehole Installation
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete pump installation and plumbing integration for your new borehole. We ensure proper pressure
                regulation and system testing.
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
                Comprehensive water analysis ensuring your borehole water is safe. Full bacterial and chemical testing
                with certification.
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
                Burst pipes and urgent emergencies need immediate response. Available 24/7 for Kempton Park with
                same-day service.
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
                Annual maintenance keeps your borehole working perfectly for 20+ years. Pump inspection and water
                testing included.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Kempton Park Borehole Drilling FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What is the water table depth in Kempton Park?</h3>
              <p className="text-muted-foreground text-sm">
                Kempton Park's water table typically ranges from 55-95 meters. Our free site assessment determines exact
                depth for your property.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much does commercial borehole drilling cost?</h3>
              <p className="text-muted-foreground text-sm">
                Commercial systems typically cost ZAR 35,000-65,000+ depending on capacity. Get a free industrial quote
                today.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How long does installation take in Kempton Park?</h3>
              <p className="text-muted-foreground text-sm">
                Residential: 3-5 days. Commercial: 5-7 days. Permits run parallel. We minimize disruption to your
                operations.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do industrial boreholes need special permits?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We handle all municipal permits and industrial compliance documentation. Included in service quote.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can you service urgent industrial water needs?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. 24/7 emergency service available. Call 060 348 8268 for critical water system failures.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What warranty applies to commercial installations?</h3>
              <p className="text-muted-foreground text-sm">
                24-month comprehensive warranty on commercial systems. Plus ongoing support and maintenance contracts
                available.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Expert Borehole Drilling in Kempton Park?"
        description="Get your free assessment and quote today. Residential and commercial solutions. Call 060 348 8268 or submit the form below."
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
            name: "Borehole Pros - Kempton Park",
            description: "Professional borehole drilling and plumbing services in Kempton Park",
            telephone: "060-348-8268",
            areaServed: { "@type": "City", name: "Kempton Park" },
            serviceArea: [
              { "@type": "City", name: "Kempton Park" },
              { "@type": "City", name: "East Rand" },
            ],
          }),
        }}
      />
    </>
  )
}
