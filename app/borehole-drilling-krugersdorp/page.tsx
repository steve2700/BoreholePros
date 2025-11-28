import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Droplet, CheckCircle2, Phone, AlertCircle, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Krugersdorp | Expert Installation & Repair Services",
  description:
    "Professional borehole drilling in Krugersdorp. Fast installation, repairs & maintenance. Serving West Rand. Call 060 348 8268 for same-day quotes.",
  keywords:
    "borehole drilling krugersdorp, borehole installation krugersdorp, water borehole krugersdorp, krugersdorp borehole",
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
    description: "Complete pump installation and water system setup for Krugersdorp properties.",
    href: "/borehole-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency borehole repairs and burst pipe response in Krugersdorp.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
]

export default function KrugersdorpPage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling Services in Krugersdorp"
        subtitle="Professional Installation | Agricultural & Residential Solutions | 24/7 Emergency Service"
        description="Borehole Pros delivers expert borehole drilling to Krugersdorp's agricultural, commercial, and residential communities. 15+ years expertise. Free assessment. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Krugersdorp Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Borehole Solutions for Krugersdorp"
        description="From agricultural operations to residential properties, Borehole Pros provides comprehensive water solutions tailored to Krugersdorp's unique needs."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Professional Borehole Drilling Services in Krugersdorp
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Krugersdorp is a thriving agricultural and industrial community on Johannesburg's western border.
                  Water availability is critical for Krugersdorp's farms, nurseries, light manufacturing, and
                  residential developments. Borehole Pros has completed over 500 borehole installations across
                  Johannesburg and Gauteng, with 160+ specifically in Krugersdorp and surrounding West Rand areas.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our team understands Krugersdorp's agricultural heritage and unique water challenges. We've installed
                  boreholes for small hobby farms, large-scale agricultural operations, commercial nurseries, and
                  residential properties. The water table in Krugersdorp typically sits between 70-130 meters, depending
                  on location and geological conditions.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Krugersdorp Agricultural Borehole Solutions</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Krugersdorp's agricultural community relies on consistent water supply for crop irrigation, livestock,
                  and general farm operations. Unlike residential boreholes, agricultural installations require larger
                  capacity systems designed for continuous operation. We've successfully installed irrigation boreholes
                  serving properties from 5 hectares to 50+ hectares.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Agricultural boreholes demand specialized equipment and expertise. We install high-capacity pumps,
                  irrigation system integration, storage tank setup, and pressure regulation systems. Our team
                  understands seasonal water needs, dry season reliability, and agricultural best practices. Most
                  Krugersdorp agricultural installations cost ZAR 25,000-45,000 depending on capacity requirements.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Residential & Industrial Solutions in Krugersdorp</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Beyond agriculture, we serve Krugersdorp's growing residential communities and light industrial
                  operations. Residential boreholes provide reliable household water supply and significant cost
                  savings. Industrial installations support manufacturing, food processing, and other water-intensive
                  operations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  All Krugersdorp boreholes are professionally designed for long-term reliability. We handle all
                  municipal permits, water quality testing, and ongoing maintenance. Our installations are built to
                  operate reliably for 20+ years with proper care.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Drilling Cost in Krugersdorp</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Krugersdorp borehole costs vary based on water table depth and required capacity. Here's what to
                  expect:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Residential: ZAR 16,000-26,000 (standard household boreholes)</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Agricultural: ZAR 25,000-45,000 (irrigation and large-capacity systems)</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>All costs include drilling, pump installation, water testing, and permits</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>12-month warranty on all residential installations</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>24-month warranty on agricultural systems</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Krugersdorp Water Table & Geology</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Krugersdorp's water table averages 70-130 meters, slightly deeper than central Johannesburg. This
                  variation depends on location within Krugersdorp. Our free site assessments determine exact depth and
                  geological conditions for your specific property.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  The primary rock formation is dolomite with some granite intrusions, particularly in areas closer to
                  the Witwatersrand. Our drilling team has extensive experience navigating Krugersdorp's geology and
                  avoiding complications. Historical rainfall of 650mm annually supports good groundwater recharge,
                  ensuring reliable long-term water availability.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Borehole Installation Process in Krugersdorp</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our streamlined process handles Krugersdorp installations professionally and efficiently:
                </p>

                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>Free site assessment and water table depth determination</li>
                  <li>Permit application and council coordination (we handle everything)</li>
                  <li>Mobile drilling rig deployment and drilling operations</li>
                  <li>Borehole casing installation and sealing</li>
                  <li>Submersible pump installation and pressure testing</li>
                  <li>For agricultural: irrigation integration and capacity testing</li>
                  <li>Water quality testing and certification</li>
                  <li>Final inspection and system handover with documentation</li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros in Krugersdorp</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Krugersdorp's farming community and residents trust Borehole Pros. Here's why 160+ Krugersdorp
                  customers continue choosing us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">15+ Years West Rand Experience</p>
                    <p className="text-xs text-muted-foreground">
                      Deep knowledge of Krugersdorp's agriculture, geology, and local regulations.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">160+ Krugersdorp Installations</p>
                    <p className="text-xs text-muted-foreground">
                      Extensive experience with agricultural, commercial, and residential boreholes.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Agricultural Expertise</p>
                    <p className="text-xs text-muted-foreground">
                      Specialized knowledge of irrigation systems, farm water management, and agricultural operations.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Same-Day Response</p>
                    <p className="text-xs text-muted-foreground">
                      Free quotes within 24 hours. Emergency repairs available 24/7.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Maintenance & Support</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Installation is just the beginning. We provide comprehensive maintenance programs for both residential
                  and agricultural boreholes. Annual maintenance includes pump inspection, water quality testing, and
                  preventive repairs. Agricultural systems receive specialized attention to ensure peak irrigation
                  performance throughout growing seasons.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Farmers benefit from our understanding of seasonal water needs and peak-use requirements. We help
                  optimize systems for efficiency and reliability during critical irrigation periods. Proactive
                  maintenance prevents breakdowns during crucial growing seasons.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Quick Facts - Krugersdorp Boreholes</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Water Table Depth</p>
                      <p className="text-muted-foreground">70-130 meters</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Residential Cost</p>
                      <p className="text-muted-foreground">ZAR 16,000-26,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Agricultural Cost</p>
                      <p className="text-muted-foreground">ZAR 25,000-45,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Annual Water Savings</p>
                      <p className="text-muted-foreground">60-80% reduction</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">System Lifespan</p>
                      <p className="text-muted-foreground">20+ years with maintenance</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get Your Free Krugersdorp Quote</h3>
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
            Related Borehole Services in Krugersdorp
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-installation" className="hover:text-accent transition-colors">
                  Professional Borehole Installation
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete pump installation, irrigation integration, and water system setup for Krugersdorp properties.
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
                Comprehensive water analysis ensuring your borehole water is safe for agricultural, commercial, or
                household use.
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
                Burst pipes and urgent emergencies need immediate response. Available 24/7 for Krugersdorp emergencies.
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
                Annual maintenance keeps your borehole working perfectly for 20+ years. Agricultural systems receive
                specialized attention.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Krugersdorp Borehole Drilling FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What's the water table depth in Krugersdorp?</h3>
              <p className="text-muted-foreground text-sm">
                Krugersdorp water table typically ranges from 70-130 meters. Exact depth depends on location. We offer
                free site assessment.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can you handle large agricultural irrigation boreholes?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We specialize in agricultural systems for farms from 5-50+ hectares with irrigation integration and
                high-capacity pumps.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much does agricultural borehole drilling cost?</h3>
              <p className="text-muted-foreground text-sm">
                Typically ZAR 25,000-45,000 depending on depth, capacity requirements, and irrigation system complexity.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do you handle residential boreholes too?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely. Residential boreholes cost ZAR 16,000-26,000 and save 60-80% on water costs annually.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What warranty do you provide for agricultural systems?</h3>
              <p className="text-muted-foreground text-sm">
                24-month comprehensive warranty on agricultural boreholes. Plus ongoing maintenance plans for seasonal
                reliability.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How quickly can you respond to emergencies?</h3>
              <p className="text-muted-foreground text-sm">
                24/7 emergency response available. Critical agricultural water emergencies prioritized for fastest
                resolution.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Expert Borehole Drilling in Krugersdorp?"
        description="Get your free assessment and quote today. Agricultural and residential solutions. Call 060 348 8268."
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
            name: "Borehole Pros - Krugersdorp",
            description: "Professional borehole drilling services in Krugersdorp",
            telephone: "060-348-8268",
            areaServed: { "@type": "City", name: "Krugersdorp" },
          }),
        }}
      />
    </>
  )
}
