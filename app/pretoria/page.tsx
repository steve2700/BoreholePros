import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { generateLocationMetadata, generateLocationSchema } from "@/components/sections/location-template"
import { Card } from "@/components/ui/card"
import { Droplet, Wrench, AlertCircle, MapPin, CheckCircle2, Phone } from "lucide-react"

export const metadata: Metadata = generateLocationMetadata("Pretoria")

const pretoriaSuburbs = [
  "Centurion",
  "Lynnwood Ridge",
  "Sunnyridge",
  "Brooklyn",
  "Arcadia",
  "Hatfield",
  "Menlyn",
  "Waterkloof",
  "Silverton",
  "Mamelodi",
  "Atteridgeville",
]

const services: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description:
      "Professional borehole drilling in Pretoria and Centurion with expertise in local geology and water table conditions.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing across Pretoria. Burst pipes, leaks, and urgent repairs handled immediately.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
  {
    title: "Geyser Services",
    description:
      "Installation, repair, and maintenance of electric, gas, and solar geysers for Pretoria homes and businesses.",
    href: "/geyser-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/geyser-repair.jpg",
  },
]

export default function PretoriaPage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling & Emergency Plumbing in Pretoria"
        subtitle="Centurion & Gauteng's Trusted Water Solution Experts"
        description="Professional borehole drilling, emergency plumbing, and geyser services across Pretoria, Centurion, and surrounding Gauteng areas. Fast response, expert service. Call 060 348 8268."
        imageSrc="/images/team-working.jpg"
        cta={{
          primary: { text: "Get Free Pretoria Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Comprehensive Water & Plumbing Solutions in Pretoria"
        description="Whether you need a new borehole, urgent plumbing repair, or geyser installation, Borehole Pros delivers expert solutions across Pretoria and Centurion."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Pretoria & Centurion's Most Trusted Borehole & Plumbing Experts
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For over 15 years, Borehole Pros has been Pretoria and Centurion's most trusted name in water
                  solutions. Gauteng's rapid development, combined with increasing water restrictions and rising
                  municipal water costs, has made boreholes essential for both residential and commercial properties.
                  Our team has completed over 1,500 successful borehole installations across the Gauteng region, making
                  us the most experienced and trusted borehole specialists in Pretoria.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pretoria's geology is complex and varies significantly by area. Centurion developments, with their
                  newer infrastructure, often have more favorable conditions. Brooklyn, Arcadia, and Hatfield offer
                  moderate water table depths. Outer areas like Mamelodi and Atteridgeville may require deeper drilling.
                  Our team has drilled in every Pretoria suburb, understanding the specific geological conditions, water
                  table depths, and municipal requirements for each area. This local expertise translates directly to
                  accurate quotes and successful installations.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  City of Tshwane (Pretoria's municipality) has specific requirements for borehole installations. We
                  navigate these regulations expertly, handling all permits, environmental assessments, and council
                  liaison on your behalf. Most properties can have a borehole drilled and operational within 4-6 weeks.
                  Our team provides comprehensive service from initial free site assessment through final installation
                  and water quality certification.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Beyond boreholes, Pretoria's aging plumbing infrastructure creates frequent emergencies. High water
                  pressure in some areas causes burst pipes. Winter freezing can crack pipes. Our emergency plumbing
                  team responds 24/7. Whether it's a burst pipe in Centurion, geyser failure in Brooklyn, or drain
                  problems in Hatfield, we arrive quickly with professional solutions that prevent costly water damage
                  and property loss.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Pretoria & Centurion Specialists
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    1,500+ boreholes drilled across Gauteng. Expertise in Pretoria's diverse geology including Brooklyn
                    granite, Centurion sandstone, and outer area shale formations. Deep knowledge of City of Tshwane
                    permit requirements.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Fast Emergency Response
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    30-60 minute response in central Pretoria and Centurion. Same-day service for most emergencies.
                    Available 24/7 including weekends and public holidays. Burst pipe? We dispatch immediately.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Permit & Compliance Experts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    City of Tshwane requires permits and assessments. We manage all applications, environmental
                    documentation, and council liaison. Process typically takes 2-4 weeks with our expert handling.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Certified & Fully Insured
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All technicians certified professionals. Fully insured for your protection. Work backed by
                    comprehensive warranty and satisfaction guarantee. After-sale support included.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-accent/5 border-accent mb-6">
                  <h3 className="font-bold mb-4 text-lg">Pretoria Service Areas</h3>
                  <div className="space-y-2 mb-6">
                    {pretoriaSuburbs.map((suburb, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{suburb}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Plus surrounding Gauteng areas. Call 060 348 8268 to confirm service in your location.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Our Pretoria Services In Detail</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <Link href="/borehole-drilling" className="hover:text-accent transition-colors">
                  Borehole Drilling in Pretoria & Centurion
                </Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Pretoria borehole drilling service is the most comprehensive in Gauteng. We handle everything from
                initial site assessment to final installation and water quality testing. Pretoria's water table varies
                by area. Central Pretoria (Brooklyn, Hatfield, Arcadia) typically ranges 60-100 meters. Centurion
                developments often have favorable conditions at 50-90 meters. Outer areas (Mamelodi, Atteridgeville) may
                require 100-150+ meters. We conduct free site assessments to determine exact depth and provide accurate
                quotes for your specific property.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use modern drilling equipment with expertise in Pretoria's diverse geology. Brooklyn granite
                formations, Centurion sandstone, and outer area shale require different drilling approaches. Our team
                works directly with City of Tshwane to obtain permits and ensure full compliance. Most residential
                Pretoria boreholes cost between ZAR 10,000-26,000 depending on depth, soil conditions, and location.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After drilling, we install pump systems, conduct comprehensive water quality testing for safety, and
                provide certification. Your new borehole typically saves 60-80% on annual water costs. For properties
                paying ZAR 600/month in municipal water, that's ZAR 360-480 monthly savings—over ZAR 4,000 annually.
                Most Pretoria boreholes pay for themselves in 18-30 months, then provide free water for years.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                <Link href="/emergency-plumbing" className="hover:text-accent transition-colors">
                  24/7 Emergency Plumbing in Pretoria
                </Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Plumbing emergencies don't wait for business hours. Our emergency plumbing team is available 24/7 for
                burst pipes, major leaks, sewage backups, and urgent repairs across Pretoria and Centurion. In central
                Pretoria (Centurion, Brooklyn, Hatfield), we typically respond within 30-60 minutes. Outer areas receive
                service within 90 minutes. We dispatch the nearest available technician for fastest possible emergency
                response.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Common emergencies we handle include burst water pipes (especially in winter), geyser leaks flooding
                homes, blocked sewage lines, and loss of water pressure. We invest in advanced diagnostic equipment to
                quickly identify problems and provide permanent solutions. We've prevented thousands of rands in
                property damage through fast emergency response and expert repair.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prevention is part of our service. We inspect plumbing systems and recommend maintenance to avoid future
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
                Geyser Installation & Repairs in Pretoria
              </Link>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Geysers are essential for Pretoria homes. When they fail, hot water becomes impossible. We install,
              repair, and maintain all geyser types—electric, gas-powered, and solar. Our technicians diagnose issues
              quickly and provide cost-effective solutions. Many Pretoria homes use electric geysers for simplicity,
              while solar geysers are increasingly popular for long-term energy savings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If your geyser is over 10 years old, we recommend replacement with an energy-efficient model. Modern
              geysers use 40-60% less energy than older units, significantly reducing electricity bills. We advise on
              solar geyser options—excellent for Gauteng's climate—offering massive energy savings and environmental
              benefits. Solar geysers typically pay for themselves through electricity savings within 5-7 years.
            </p>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Pretoria-Specific FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Pretoria Borehole & Plumbing FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What water table depth in Pretoria areas?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Central Pretoria: 60-100 meters. Centurion: 50-90 meters. Outer areas: 100-150+ meters. We conduct free
                site assessment to determine exact depth and cost for your property. Call 060 348 8268.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Emergency response time in Pretoria?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Central Pretoria and Centurion: 30-60 minutes. Outer areas: up to 90 minutes. Call 060 348 8268
                immediately for dispatch. We prioritize emergency calls with immediate technician dispatch.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Permits for Pretoria boreholes?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                City of Tshwane requires drilling permits and environmental assessments. We handle all applications,
                documentation, and council liaison. Permits typically process within 2-4 weeks.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Pretoria borehole costs?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Typically ZAR 10,000-26,000. Centurion: ZAR 10,000-20,000. Central areas: ZAR 12,000-22,000. Outer
                areas: ZAR 18,000-26,000. Free no-obligation quote after site assessment.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Annual water savings with boreholes?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                60-80% savings typical. For ZAR 600/month current costs: ZAR 360-480 saved monthly (ZAR 4,320-5,760
                yearly). Payback period: 18-30 months. Long-term investment in water independence.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Service areas beyond central Pretoria?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! We serve all Pretoria suburbs, Centurion, and surrounding Gauteng areas. Call 060 348 8268 to
                confirm service availability in your specific area or neighborhood.
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
        title="Expert Borehole & Plumbing Solutions in Pretoria"
        description="Professional service, fast response, affordable pricing. Available 24/7 for emergencies."
        primaryText="Get Free Pretoria Quote"
        primaryHref="/contact"
        secondaryText="Call 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema("Pretoria", pretoriaSuburbs)),
        }}
      />
    </>
  )
}
