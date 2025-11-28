import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { generateLocationMetadata, generateLocationSchema } from "@/components/sections/location-template"
import { Card } from "@/components/ui/card"
import { Droplet, Wrench, AlertCircle, MapPin, CheckCircle2, Phone } from "lucide-react"

export const metadata: Metadata = generateLocationMetadata("Johannesburg")

const johannesburgSuburbs = [
  "Sandton",
  "Midrand",
  "Randburg",
  "Bryanston",
  "Sunninghill",
  "Rosebank",
  "Parkhurst",
  "Fourways",
  "Morningside",
  "Centurion",
]

const services: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description:
      "Professional borehole drilling with site assessment, modern drilling equipment, and complete installation. Serving all of Johannesburg.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Emergency Plumbing",
    description:
      "24/7 emergency plumbing service for burst pipes, leaks, and urgent repairs. Same-day response across Johannesburg.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
  {
    title: "Geyser Installation & Repair",
    description:
      "Expert geyser installation, repairs, and maintenance. Energy-efficient solutions for Johannesburg homes and businesses.",
    href: "/geyser-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/geyser-repair.jpg",
  },
]

export default function JohannesburgPage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling & Emergency Plumbing Services in Johannesburg"
        subtitle="Trusted Local Service | Same-Day Response Available"
        description="South Africa's leading borehole drilling and plumbing specialists serving Johannesburg, Sandton, Randburg, and surrounding areas. Fast, professional, certified service. Call 060 348 8268 for immediate assistance or a free quote."
        imageSrc="/images/team-working.jpg"
        cta={{
          primary: { text: "Get Free Johannesburg Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Comprehensive Borehole & Plumbing Solutions in Johannesburg"
        description="Whether you need a new borehole, urgent plumbing repair, or geyser installation, Borehole Pros delivers fast, professional service across Johannesburg."
        services={services}
        columns={3}
      />

      {/* Why Choose Section with Comprehensive Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Why Johannesburg Residents Choose Borehole Pros
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For over 15 years, Borehole Pros has been Johannesburg's most trusted name in water solutions. From
                  residential boreholes to commercial plumbing installations, we've served thousands of satisfied
                  customers across Gauteng. Our reputation is built on reliability, professional expertise, and genuine
                  care for our customers.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  In Johannesburg, where water restrictions are becoming increasingly common, a borehole isn't just a
                  luxury—it's a necessity. Our team specializes in understanding Johannesburg's unique geological
                  conditions, water tables, and municipal requirements. We handle everything from initial site
                  assessment to full installation and ongoing maintenance, ensuring your water supply is always secure.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our emergency plumbing service is available 24/7 because we know that burst pipes and major leaks
                  don't wait for business hours. Whether it's a burst pipe in Sandton, a geyser failure in Rosebank, or
                  drain problems in Midrand, our local team is ready to respond quickly with professional solutions that
                  prevent costly water damage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Local Johannesburg Team
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Based in Johannesburg with deep knowledge of local geology, water tables, and municipal regulations.
                    We've completed 500+ boreholes across the Gauteng region.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Fast Response Times
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    30-60 minute response in central Johannesburg. We prioritize emergency calls and often arrive the
                    same day for urgent plumbing issues.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Certified & Insured
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All technicians are certified professionals. Fully insured for your protection. Work backed by
                    warranty and satisfaction guarantee.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Transparent Pricing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Free site assessment and quote. No hidden fees. Competitive pricing for Johannesburg area. Payment
                    plans available.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-accent/5 border-accent mb-6">
                  <h3 className="font-bold mb-4 text-lg">Johannesburg Service Areas</h3>
                  <div className="space-y-2 mb-6">
                    {johannesburgSuburbs.map((suburb, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{suburb}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Plus surrounding areas. Call 060 348 8268 to confirm service availability.
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

      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Our Johannesburg Services In Detail</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <Link href="/borehole-drilling" className="hover:text-accent transition-colors">
                  Borehole Drilling in Johannesburg
                </Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our borehole drilling service is the most comprehensive in Johannesburg. We handle everything from
                initial site assessment to final installation and testing. Johannesburg's water table typically ranges
                from 50-150 meters, depending on location. Areas like Sandton and Midrand generally have shallower
                tables, while outer areas may require deeper drilling.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use modern drilling equipment and have the expertise to navigate Johannesburg's complex geology. Our
                team works with City of Johannesburg regulations to ensure all permits are obtained properly. Most
                residential boreholes cost between ZAR 12,000-30,000, depending on depth and conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After drilling, we install pump systems, conduct water quality testing, and provide certification. Your
                new borehole can save 60-80% on annual water costs—a significant investment in your property and
                sustainability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                <Link href="/emergency-plumbing" className="hover:text-accent transition-colors">
                  24/7 Emergency Plumbing in Johannesburg
                </Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Plumbing emergencies don't follow business hours, and neither do we. Our emergency plumbing team is
                available 24/7 for burst pipes, major leaks, sewage backups, and urgent repairs. In central Johannesburg
                (Sandton, Midrand, Randburg), we typically respond within 30-60 minutes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Common emergencies we handle include burst water pipes, geyser leaks, blocked sewage lines, and loss of
                water pressure. We've invested in advanced diagnostic equipment to quickly identify problems and provide
                permanent solutions, not just temporary patches.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prevention is part of our service too. We'll inspect your plumbing system and recommend maintenance to
                avoid future emergencies. Regular{" "}
                <Link href="/borehole-maintenance" className="text-accent hover:underline">
                  borehole maintenance
                </Link>{" "}
                and plumbing inspections can prevent costly emergency repairs down the line.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              <Link href="/geyser-installation" className="hover:text-accent transition-colors">
                Geyser Installation & Repairs in Johannesburg
              </Link>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Geysers are essential for Johannesburg homes, and when they fail, hot water becomes a luxury. We install,
              repair, and maintain all types of geysers—electric, gas-powered, and solar. Our technicians diagnose
              issues quickly and provide cost-effective solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If your geyser is over 10 years old, we recommend replacement with an energy-efficient model. Modern
              geysers use 40% less energy than older units, reducing your electricity bills significantly. We can advise
              on solar geyser options for long-term savings and environmental benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Johannesburg-Specific FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Johannesburg Borehole & Plumbing FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What's the average water table depth in Johannesburg?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Johannesburg water tables typically range from 50-150 meters. Central areas like Sandton and Rosebank
                are generally shallower (50-80m), while outer areas may reach 100-150m. We conduct a free site
                assessment to determine exact depth and cost for your property.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">
                How quickly can you respond to emergency plumbing in Johannesburg?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                In central Johannesburg (CBD, Sandton, Midrand), we typically respond within 30-60 minutes. Outer areas
                may take slightly longer. Call 060 348 8268 immediately for emergencies—we dispatch the nearest
                technician for fastest service.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What permits do I need for a borehole in Johannesburg?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                City of Johannesburg requires permits for borehole drilling. We handle all permit applications and
                council liaison on your behalf. This is included in our service quote. Most permits take 2-4 weeks to
                process.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How much does a borehole cost in Johannesburg?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Johannesburg boreholes typically cost ZAR 12,000-30,000 depending on depth and soil conditions. Shallow
                boreholes in areas like Sandton start around ZAR 12,000. Deeper boreholes in outlying areas may cost ZAR
                25,000-30,000. We provide a free, no-obligation quote after site assessment.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How much can a borehole save on water costs?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Johannesburg residents typically save 60-80% on water costs with a borehole. For a typical household
                paying ZAR 500/month, that's ZAR 300-400 monthly savings. With payback periods of 18-30 months, a
                borehole is a smart long-term investment.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Do you service areas outside central Johannesburg?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! We serve all of Johannesburg including Sandton, Midrand, Randburg, Bryanston, Sunninghill,
                Rosebank, Parkhurst, Fourways, and Centurion. Call 060 348 8268 to confirm service availability in your
                specific area.
              </p>
            </Card>
          </div>

          {/* Internal Link Strategy */}
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="font-bold mb-4">Related Services & Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-2">
                  For specific service information, visit our detailed guides:
                </p>
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
                      Leak Detection Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">Other Johannesburg resources:</p>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready for Expert Borehole or Plumbing Service in Johannesburg?"
        description="Get a free quote and fast service. Same-day appointments available. Call us now or complete our online form for a callback within 1 hour."
        primaryText="Get Free Johannesburg Quote"
        primaryHref="/contact"
        secondaryText="Call Now: 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema("Johannesburg", johannesburgSuburbs)),
        }}
      />
    </>
  )
}
