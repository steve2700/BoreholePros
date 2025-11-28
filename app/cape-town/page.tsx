import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { generateLocationMetadata, generateLocationSchema } from "@/components/sections/location-template"
import { Card } from "@/components/ui/card"
import { Droplet, Wrench, AlertCircle, MapPin, CheckCircle2, Phone } from "lucide-react"

export const metadata: Metadata = generateLocationMetadata("Cape Town")

const capeTownSuburbs = [
  "Camps Bay",
  "Clifton",
  "Constantia",
  "Claremont",
  "Newlands",
  "Kenilworth",
  "Rondebosch",
  "Mowbray",
  "Wynberg",
  "Plumstead",
  "Observatory",
]

const services: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description:
      "Professional borehole drilling across Cape Town with expertise in Table Mountain geology and Western Cape water conditions.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Emergency Plumbing",
    description:
      "24/7 emergency plumbing service across Cape Town. Fast response to burst pipes, leaks, and urgent repairs.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
  {
    title: "Geyser Installation",
    description: "Expert geyser installation, repair, and maintenance. Energy-efficient solutions for Cape Town homes.",
    href: "/geyser-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/geyser-repair.jpg",
  },
]

export default function CapeownPage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling & Plumbing Services in Cape Town"
        subtitle="Western Cape's Most Trusted Water Solution Specialists"
        description="Professional borehole drilling, emergency plumbing, and geyser services across Cape Town and Western Cape. Fast, reliable service since 2010. Call 060 348 8268 for immediate assistance."
        imageSrc="/images/team-working.jpg"
        cta={{
          primary: { text: "Get Free Cape Town Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Comprehensive Water & Plumbing Services in Cape Town"
        description="Whether you need a new borehole, urgent plumbing repair, or geyser installation, Borehole Pros delivers expert solutions across the Western Cape."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Why Cape Town Residents Trust Borehole Pros
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For over 15 years, Borehole Pros has been Cape Town and the Western Cape's most trusted name in water
                  solutions. Water scarcity is not new to Cape Town residents—the 2018 "Day Zero" crisis taught us the
                  value of water independence. Since then, thousands of Cape Town homes have invested in boreholes, and
                  Borehole Pros has installed the majority of them. Our reputation is built on reliability, technical
                  expertise, and genuine commitment to providing lasting solutions.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cape Town's water challenges are unique. With increasing municipal water restrictions, rising water
                  costs, and the real risk of future shortages, a borehole isn't just a luxury—it's a smart investment
                  in your property, your family's comfort, and your financial security. Our team specializes in
                  understanding Cape Town's unique geological conditions, water tables, and Table Mountain geology.
                  We've completed over 1,200 successful borehole installations across the Western Cape, giving us
                  unmatched local expertise.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cape Town's water table varies significantly by location. Areas like Constantia and Claremont
                  typically have shallower water tables (40-80 meters), making drilling more affordable. Outer areas
                  like Wynberg and Observatory may require deeper drilling (80-150+ meters). Our team assesses your
                  specific location, soil conditions, and municipal requirements to provide accurate quotes and
                  timelines. We handle all City of Cape Town permits and environmental assessments, ensuring full
                  compliance with Western Cape regulations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Beyond boreholes, we provide complete plumbing solutions. Cape Town's aging infrastructure and high
                  water pressure in some areas create frequent burst pipes and leaks. Our emergency plumbing team is
                  available 24/7 to respond to emergencies. Whether it's a burst pipe in Clifton, geyser failure in
                  Camps Bay, or drain problems in Mowbray, our local team responds quickly with professional solutions
                  that prevent costly water damage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Cape Town Geological Expertise
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    1,200+ boreholes installed across Western Cape. Expert knowledge of Table Mountain geology,
                    sandstone conditions, and water table variations by suburb. Understanding of environmental impact
                    assessments required by City of Cape Town.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Fast Response Times
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    30-60 minute response in central Cape Town. We prioritize emergency calls and often arrive same-day
                    for urgent plumbing issues. Available 24/7 for emergencies including weekends and public holidays.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Complete Permit Handling
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    City of Cape Town requires specific permits and assessments for boreholes. We manage all
                    applications, liaisons, and compliance on your behalf. Most permits processed within 3-4 weeks.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Certified & Insured Professionals
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All technicians certified and trained. Fully insured for your protection. Work backed by warranty,
                    satisfaction guarantee, and after-service support.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-accent/5 border-accent mb-6">
                  <h3 className="font-bold mb-4 text-lg">Cape Town Service Areas</h3>
                  <div className="space-y-2 mb-6">
                    {capeTownSuburbs.map((suburb, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{suburb}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Plus surrounding areas and Western Cape. Call 060 348 8268 to confirm service in your area.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Our Cape Town Services In Detail</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <Link href="/borehole-drilling" className="hover:text-accent transition-colors">
                  Borehole Drilling in Cape Town
                </Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cape Town boreholes represent independence from municipal water restrictions. Our drilling service is
                the most comprehensive in the Western Cape. We handle everything from initial site assessment to final
                installation and water quality testing. Cape Town's water table varies by location. Constantia and
                Claremont typically range 50-90 meters. Wynberg and Observatory may require 100-150 meters. Outer areas
                could reach 150+ meters. We conduct comprehensive site assessments at no charge to determine exact depth
                and provide accurate quotes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use modern drilling equipment and have specialized expertise navigating Cape Town's complex geology.
                Table Mountain granite and sandstone require different drilling approaches. Our team works directly with
                City of Cape Town to obtain permits and ensure environmental compliance. Most residential Cape Town
                boreholes cost between ZAR 10,000-28,000 depending on depth, soil conditions, and location.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After drilling, we install pump systems, conduct water quality testing for safety and usability, and
                provide certification for compliance. Your new borehole typically saves 60-80% on annual water costs.
                For properties paying ZAR 800/month in municipal water, that's ZAR 480-640 monthly savings—nearly ZAR
                6,000 annually. Most boreholes pay for themselves in 18-30 months.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                <Link href="/emergency-plumbing" className="hover:text-accent transition-colors">
                  24/7 Emergency Plumbing in Cape Town
                </Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Plumbing emergencies don't wait for business hours. Our emergency plumbing team is available 24/7 for
                burst pipes, major leaks, sewage backups, and urgent repairs across Cape Town. In central areas (Camps
                Bay, Clifton, Constantia, Claremont), we typically respond within 30-60 minutes. Outer areas receive
                service within 90 minutes. We dispatch the nearest available technician for fastest possible response.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Common emergencies we handle include burst water pipes (especially dangerous in winter), geyser leaks
                flooding homes, blocked sewage lines, and complete loss of water pressure. We invest in advanced
                diagnostic equipment to quickly identify problems and provide permanent solutions, not just temporary
                patches that fail weeks later. We've prevented thousands of rands in property damage through fast
                emergency response.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prevention is part of our service too. We inspect your plumbing system and recommend maintenance to
                avoid future emergencies. Regular{" "}
                <Link href="/borehole-maintenance" className="text-accent hover:underline">
                  borehole maintenance
                </Link>{" "}
                and plumbing inspections can prevent 90% of emergency calls. We also offer{" "}
                <Link href="/leak-detection" className="text-accent hover:underline">
                  leak detection services
                </Link>{" "}
                to find hidden leaks before they cause major damage.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              <Link href="/geyser-installation" className="hover:text-accent transition-colors">
                Geyser Installation & Repairs in Cape Town
              </Link>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Geysers are essential for Cape Town homes. When they fail, hot water becomes a luxury you can't afford. We
              install, repair, and maintain all geyser types—electric, gas-powered, and solar. Our technicians diagnose
              issues quickly and provide cost-effective solutions. Many Cape Town homes use electric geysers, but solar
              geysers are becoming popular for long-term energy savings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If your geyser is over 10 years old, we recommend replacement with an energy-efficient model. Modern
              geysers use 40-60% less energy than older units, significantly reducing your electricity bills. We can
              advise on solar geyser options—excellent for Cape Town's sunny climate—offering massive energy savings and
              environmental benefits. Solar geysers pay for themselves through electricity savings within 5-7 years.
            </p>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Cape Town-Specific FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Cape Town Borehole & Plumbing FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What's the average water table depth in Cape Town?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cape Town water tables range 50-150+ meters depending on location. Central areas (Constantia, Claremont)
                are shallower (50-90m). Outer areas (Wynberg, Observatory, Plumstead) run deeper (100-150m+). We conduct
                free site assessment to determine exact depth and cost for your property.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How quickly can you respond to emergencies in Cape Town?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Central Cape Town (Camps Bay, Clifton, Constantia): 30-60 minutes. Mid-areas (Newlands, Rondebosch,
                Mowbray): 60-90 minutes. Outer areas: up to 90+ minutes. Call 060 348 8268 immediately—we dispatch the
                nearest technician for fastest service.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What permits are required for Cape Town boreholes?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                City of Cape Town requires drilling permits and environmental assessment for boreholes. We handle all
                applications, paperwork, and council liaison. Most permits process within 2-4 weeks. No hidden
                costs—permit fees are included in our quotes.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How much does a Cape Town borehole cost?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cape Town boreholes typically cost ZAR 10,000-28,000. Shallow boreholes in central areas start around
                ZAR 10,000-15,000. Medium depths (central-outer areas) range ZAR 15,000-22,000. Deep boreholes in outer
                areas reach ZAR 22,000-28,000. Free no-obligation quote after site assessment.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How much will a Cape Town borehole save annually?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cape Town properties typically save 60-80% on water costs with boreholes. For households paying ZAR
                800/month, that's ZAR 480-640 saved monthly (ZAR 5,760-7,680 yearly). Payback period: 18-30 months. A
                smart long-term investment in your property and water independence.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Do you service all of Cape Town and surroundings?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! We serve Cape Town CBD, southern suburbs (Constantia, Wynberg, Claremont), northern suburbs (Camps
                Bay, Clifton), eastern suburbs (Newlands, Mowbray), and surrounding areas. Call 060 348 8268 to confirm
                service in your specific location.
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
                      24/7 Emergency Plumbing
                    </Link>
                  </li>
                  <li>
                    <Link href="/geyser-installation" className="text-accent hover:underline font-semibold">
                      Geyser Installation & Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/leak-detection" className="text-accent hover:underline font-semibold">
                      Leak Detection Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/drain-cleaning" className="text-accent hover:underline font-semibold">
                      Professional Drain Cleaning
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
                    <Link href="/" className="text-accent hover:underline font-semibold">
                      View All Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/johannesburg" className="text-accent hover:underline font-semibold">
                      Johannesburg Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Expert Water & Plumbing Solutions in Cape Town"
        description="Professional borehole drilling and emergency plumbing. Fast, reliable service. Available 24/7 for emergencies."
        primaryText="Get Free Cape Town Quote"
        primaryHref="/contact"
        secondaryText="Call 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema("Cape Town", capeTownSuburbs)),
        }}
      />
    </>
  )
}
