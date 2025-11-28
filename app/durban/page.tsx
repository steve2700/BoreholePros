import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { generateLocationMetadata, generateLocationSchema } from "@/components/sections/location-template"
import { Card } from "@/components/ui/card"
import { Droplet, Wrench, AlertCircle, MapPin, CheckCircle2, Phone } from "lucide-react"

export const metadata: Metadata = generateLocationMetadata("Durban")

const durbanSuburbs = [
  "Umhlanga",
  "Ballito",
  "Shallowford",
  "Durban North",
  "Pinetown",
  "Westville",
  "Hillcrest",
  "Kloof",
]

const services: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description:
      "Professional borehole drilling in Durban with expertise in KwaZulu-Natal geology and coastal conditions.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing across Durban. Burst pipes and urgent repairs handled immediately.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
  {
    title: "Geyser Services",
    description: "Installation, repair, and maintenance of all geyser types for Durban homes and businesses.",
    href: "/geyser-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/geyser-repair.jpg",
  },
]

export default function DurbanPage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling & Emergency Plumbing in Durban"
        subtitle="KwaZulu-Natal's Trusted Water Solution Specialists"
        description="Professional borehole drilling, emergency plumbing, and geyser services across Durban and KwaZulu-Natal. Fast response, expert service. Call 060 348 8268."
        imageSrc="/images/team-working.jpg"
        cta={{
          primary: { text: "Get Free Durban Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Comprehensive Water & Plumbing Solutions in Durban"
        description="Whether you need a new borehole, urgent plumbing repair, or geyser installation, Borehole Pros delivers expert solutions across Durban and KwaZulu-Natal."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Durban's Most Trusted Borehole & Plumbing Experts
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For over 15 years, Borehole Pros has been Durban and KwaZulu-Natal's most trusted name in water
                  solutions. Durban's coastal climate, high humidity, and increasing water demand have made boreholes
                  essential for both residential and commercial properties. Our team has completed over 800 successful
                  borehole installations across KwaZulu-Natal, making us the most experienced borehole specialists in
                  the Durban region.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Durban's geology presents unique challenges compared to other South African regions. Coastal areas
                  (Umhlanga, Ballito) have different water table depths than inland areas (Westville, Hillcrest, Kloof).
                  High annual rainfall means water saturation levels vary significantly by season. Our team understands
                  Durban's local conditions, having drilled in every major suburb. We know water table depths,
                  geological formations, and seasonal variations for your specific area.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  eThekwini Municipality (Durban's local government) has specific requirements for borehole
                  installations. We navigate these regulations expertly, handling all permits, environmental
                  assessments, and council liaison. Most Durban properties can have a borehole drilled and operational
                  within 4-6 weeks from permit approval. Our service includes comprehensive site assessment, drilling,
                  pump installation, water quality testing, and full certification.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Beyond boreholes, Durban's tropical climate and coastal conditions create unique plumbing challenges.
                  Corrosion from salt air accelerates pipe deterioration. High humidity promotes mold and water damage.
                  Our emergency plumbing team responds 24/7. Whether it's a burst pipe in Umhlanga, geyser failure in
                  Westville, or drain problems in Ballito, we arrive quickly with professional solutions that prevent
                  costly damage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Durban Geology Experts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    800+ boreholes drilled across KwaZulu-Natal. Deep knowledge of Durban's coastal and inland geology.
                    Expertise handling high rainfall seasons. Understanding of eThekwini Municipality permit
                    requirements.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Fast Emergency Response
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    30-60 minute response in central Durban. Same-day service for most emergencies. Available 24/7
                    including weekends and public holidays for urgent plumbing needs.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    eThekwini Compliance Experts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    eThekwini Municipality requires permits and environmental assessments. We manage all applications,
                    documentation, and council liaison. Typical processing: 2-4 weeks with our expert handling.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Certified & Fully Insured
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All technicians certified professionals. Fully insured for your protection. Work backed by
                    comprehensive warranty and satisfaction guarantee. Long-term support included.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-accent/5 border-accent mb-6">
                  <h3 className="font-bold mb-4 text-lg">Durban Service Areas</h3>
                  <div className="space-y-2 mb-6">
                    {durbanSuburbs.map((suburb, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{suburb}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Plus surrounding KwaZulu-Natal areas. Call 060 348 8268 to confirm service in your location.
                  </p>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Emergency Contact</h3>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Our Durban Services In Detail</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <Link href="/borehole-drilling" className="hover:text-accent transition-colors">
                  Borehole Drilling in Durban
                </Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Durban borehole drilling service is the most comprehensive in KwaZulu-Natal. We handle everything
                from initial site assessment to final installation and water quality testing. Durban's water table
                varies by location and season. Coastal areas (Umhlanga, Ballito) typically range 40-100 meters. Inland
                areas (Westville, Hillcrest, Kloof) may range 60-140 meters. High annual rainfall affects water
                saturation levels. We conduct free site assessments to determine exact depth and provide accurate
                quotes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use modern drilling equipment with expertise in KwaZulu-Natal's coastal and inland geology. Different
                soil layers require different approaches. Our team works directly with eThekwini Municipality to obtain
                permits and ensure full environmental compliance. Most residential Durban boreholes cost between ZAR
                9,000-28,000 depending on depth, soil conditions, and location.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After drilling, we install pump systems, conduct comprehensive water quality testing, and provide
                certification. Your new borehole typically saves 60-80% on annual water costs. For properties paying ZAR
                700/month in municipal water, that's ZAR 420-560 monthly savings—over ZAR 5,000 annually. Most Durban
                boreholes pay for themselves in 18-30 months, then provide free water for years.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                <Link href="/emergency-plumbing" className="hover:text-accent transition-colors">
                  24/7 Emergency Plumbing in Durban
                </Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Plumbing emergencies don't wait for business hours. Our emergency plumbing team is available 24/7 for
                burst pipes, major leaks, sewage backups, and urgent repairs across Durban and KwaZulu-Natal. In central
                Durban (Umhlanga, Westville, CBD), we typically respond within 30-60 minutes. Outer areas receive
                service within 90 minutes. We dispatch the nearest available technician for fastest response.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Durban's coastal climate creates unique plumbing challenges. Salt air corrosion accelerates pipe
                deterioration. High humidity promotes mold and water damage. We handle burst pipes, geyser leaks,
                blocked drains, and pressure problems. We invest in advanced diagnostic equipment to quickly identify
                problems and provide permanent solutions that prevent future emergencies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prevention is part of our service. We inspect plumbing systems and recommend maintenance to avoid
                emergencies. Regular{" "}
                <Link href="/borehole-maintenance" className="text-accent hover:underline">
                  borehole maintenance
                </Link>{" "}
                and plumbing inspections prevent 90% of emergency calls. We also offer{" "}
                <Link href="/leak-detection" className="text-accent hover:underline">
                  leak detection services
                </Link>{" "}
                to find hidden leaks before damage occurs.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              <Link href="/geyser-installation" className="hover:text-accent transition-colors">
                Geyser Installation & Repairs in Durban
              </Link>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Geysers are essential for Durban homes. When they fail, hot water becomes impossible. We install, repair,
              and maintain all geyser types—electric, gas-powered, and solar. Durban's tropical climate makes solar
              geysers increasingly popular. Our technicians diagnose issues quickly and provide cost-effective solutions
              for any geyser problem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If your geyser is over 10 years old, we recommend replacement with an energy-efficient model. Modern
              geysers use 40-60% less energy than older units. We advise on solar geyser options—excellent for Durban's
              sunny days—offering massive energy savings. Solar geysers typically pay for themselves through electricity
              savings within 5-7 years.
            </p>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Durban-Specific FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Durban Borehole & Plumbing FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Water table depth in Durban areas?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Coastal areas (Umhlanga, Ballito): 40-100 meters. Inland areas (Westville, Hillcrest, Kloof): 60-140
                meters. Seasonal variations affect levels. We conduct free site assessment to determine exact depth for
                your property.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Emergency response time in Durban?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Central Durban: 30-60 minutes. Outer areas: up to 90 minutes. Call 060 348 8268 immediately for
                dispatch. We prioritize emergencies with immediate technician response.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Permits for Durban boreholes?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                eThekwini Municipality requires drilling permits and environmental assessments. We handle all
                applications, documentation, and council liaison. Permits typically process within 2-4 weeks.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Durban borehole costs?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Typically ZAR 9,000-28,000. Coastal shallow: ZAR 9,000-18,000. Inland moderate: ZAR 14,000-22,000.
                Inland deep: ZAR 18,000-28,000. Free no-obligation quote after site assessment.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Annual water savings with boreholes?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                60-80% savings typical. For ZAR 700/month current costs: ZAR 420-560 saved monthly (ZAR 5,040-6,720
                yearly). Payback period: 18-30 months. Smart long-term investment.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Service areas beyond central Durban?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! We serve all Durban suburbs and surrounding KwaZulu-Natal areas. Call 060 348 8268 to confirm
                service availability in your specific neighborhood.
              </p>
            </Card>
          </div>

          {/* Internal Linking */}
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="font-bold mb-4">Related Services & Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-2">For specific service information:</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/borehole-drilling" className="text-accent hover:underline font-semibold">
                      Complete Borehole Drilling Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/emergency-plumbing" className="text-accent hover:underline font-semibold">
                      24/7 Emergency Plumbing Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/geyser-installation" className="text-accent hover:underline font-semibold">
                      Geyser Installation & Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/leak-detection" className="text-accent hover:underline font-semibold">
                      Professional Leak Detection
                    </Link>
                  </li>
                  <li>
                    <Link href="/drain-cleaning" className="text-accent hover:underline font-semibold">
                      Drain Cleaning Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">Other resources:</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-accent hover:underline font-semibold">
                      About Borehole Pros
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-accent hover:underline font-semibold">
                      Get a Free Quote
                    </Link>
                  </li>
                  <li>
                    <Link href="/johannesburg" className="text-accent hover:underline font-semibold">
                      Johannesburg Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/cape-town" className="text-accent hover:underline font-semibold">
                      Cape Town Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Expert Borehole & Plumbing Solutions in Durban"
        description="Professional service, fast response, affordable pricing. Available 24/7 for emergencies."
        primaryText="Get Free Durban Quote"
        primaryHref="/contact"
        secondaryText="Call 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema("Durban", durbanSuburbs)),
        }}
      />
    </>
  )
}
