import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Droplet, CheckCircle2, Phone, AlertCircle, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Roodepoort | Professional Installation & Repair Services",
  description:
    "Professional borehole drilling in Roodepoort. Fast installation, repairs & maintenance. Serving West Rand. Call 060 348 8268 for same-day quotes.",
  keywords:
    "borehole drilling roodepoort, borehole installation roodepoort, water borehole roodepoort, roodepoort borehole",
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
    description: "Complete pump installation and water system setup for Roodepoort properties.",
    href: "/borehole-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency borehole repairs and burst pipe response in Roodepoort.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
]

export default function RoodepoortPage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling Services in Roodepoort"
        subtitle="Professional Installation | Fast Response | 24/7 Emergency Service"
        description="Borehole Pros brings expert borehole drilling and plumbing services to Roodepoort. 15+ years expertise. Free assessment. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Roodepoort Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Borehole Solutions for Roodepoort"
        description="From drilling to installation to emergency repairs, Borehole Pros provides comprehensive water solutions for Roodepoort residents and businesses."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Professional Borehole Drilling Services in Roodepoort
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort is a rapidly growing residential and commercial area on Johannesburg's western edge. As the
                  community expands, water security becomes increasingly important for both families and businesses.
                  Borehole Pros has completed over 500 borehole installations across Johannesburg, with 140+
                  specifically in Roodepoort and surrounding West Rand areas.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our team understands Roodepoort's unique position as a developing community with increasing water
                  demand. We've installed boreholes for residential developments, small businesses, and established
                  homes throughout Roodepoort. The water table in Roodepoort typically sits between 75-110 meters,
                  making it suitable for reliable borehole installation.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Roodepoort Residents Choose Borehole Pros</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort faces increasing water restrictions as the area grows. A professionally installed borehole
                  provides water security and significant cost savings. Unlike inexperienced operators, Borehole Pros is
                  fully licensed, insured, and certified with proven expertise in Roodepoort installations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We handle all municipal permits and City of Johannesburg requirements for Roodepoort drilling. Our
                  process is professional and minimizes disruption to your property. After drilling, we ensure complete
                  testing, certification, and handover with full documentation and ongoing support.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Drilling Cost in Roodepoort</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort borehole costs typically range from ZAR 17,000-27,000 for residential installations. Here's
                  what's included:
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

                <h3 className="text-2xl font-bold mt-8 mb-4">Roodepoort Water Table & Geology</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort sits in the West Rand with relatively consistent geological conditions. The water table
                  averages 75-110 meters, making drilling straightforward. The primary rock formation is dolomite with
                  granite outcrops in some areas, which our equipment handles efficiently.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Historical rainfall in Roodepoort averages 620mm annually, supporting good groundwater recharge. This
                  ensures boreholes maintain reliable water supply throughout the year. Roodepoort's growing community
                  benefits from consistent water availability through borehole systems.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Borehole Installation Process in Roodepoort</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our streamlined process is professional and efficient, typically completed in 3-5 days from start to
                  handover:
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

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros in Roodepoort</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort residents trust Borehole Pros because of our proven expertise. Here's why 140+ Roodepoort
                  customers choose us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">15+ Years Roodepoort Experience</p>
                    <p className="text-xs text-muted-foreground">
                      Deep knowledge of Roodepoort geology, regulations, and local conditions.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">500+ Boreholes Completed</p>
                    <p className="text-xs text-muted-foreground">
                      140+ specifically in Roodepoort. Proven track record with residential installations.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Fully Licensed & Insured</p>
                    <p className="text-xs text-muted-foreground">
                      All work covered by insurance and workmanship warranty for your protection.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Same-Day Response Available</p>
                    <p className="text-xs text-muted-foreground">
                      Free quotes within 24 hours. Emergency repairs available 24/7.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Maintenance & Ongoing Support</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Installation is just the beginning. We provide comprehensive borehole maintenance to ensure your
                  system operates reliably for 20+ years. Annual maintenance includes pump inspection, water quality
                  testing, and preventive repairs. We offer flexible maintenance plans for Roodepoort residents.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Regular maintenance prevents pump failure, water contamination, and pressure loss. A properly
                  maintained borehole operates reliably with minimal downtime. Your water supply remains secure
                  year-round with our ongoing support.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Quick Facts - Roodepoort Boreholes</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Water Table Depth</p>
                      <p className="text-muted-foreground">75-110 meters</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Average Cost</p>
                      <p className="text-muted-foreground">ZAR 17,000-27,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Annual Water Savings</p>
                      <p className="text-muted-foreground">60-80% reduction in costs</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Drilling Timeline</p>
                      <p className="text-muted-foreground">3-5 days from start</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">System Lifespan</p>
                      <p className="text-muted-foreground">20+ years with care</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get Your Free Roodepoort Quote</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Related Borehole Services in Roodepoort</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-installation" className="hover:text-accent transition-colors">
                  Professional Borehole Installation
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete pump installation and water system setup for Roodepoort properties with proper pressure
                regulation.
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
                Comprehensive water analysis ensuring your borehole water is safe for household use with full
                certification.
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
                Burst pipes and urgent emergencies need immediate response. We're available 24/7 for Roodepoort
                emergencies.
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
                Annual maintenance keeps your borehole working perfectly for 20+ years with professional pump
                inspections.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Roodepoort Borehole Drilling FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What is the water table depth in Roodepoort?</h3>
              <p className="text-muted-foreground text-sm">
                Roodepoort's water table typically ranges from 75-110 meters. We determine exact depth through free site
                assessment.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much does borehole drilling cost in Roodepoort?</h3>
              <p className="text-muted-foreground text-sm">
                Typical cost is ZAR 17,000-27,000 including drilling, pump installation, water testing, and permits. Get
                a free quote.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How long does the installation take?</h3>
              <p className="text-muted-foreground text-sm">
                From free assessment to handover: 3-5 days. Permit processing runs parallel to drilling preparation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do I need a City permit in Roodepoort?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We handle all permit applications on your behalf. Service included in our quote.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much water will I save?</h3>
              <p className="text-muted-foreground text-sm">
                Typical household saves 60-80% on water costs. Monthly water bill of ZAR 450 becomes ZAR 90-180.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What warranty is provided?</h3>
              <p className="text-muted-foreground text-sm">
                12-month comprehensive warranty on all installations. Plus ongoing maintenance plans available.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Expert Borehole Drilling in Roodepoort?"
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
            name: "Borehole Pros - Roodepoort",
            description: "Professional borehole drilling services in Roodepoort",
            telephone: "060-348-8268",
            areaServed: { "@type": "City", name: "Roodepoort" },
          }),
        }}
      />
    </>
  )
}
