import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Not Working North West | Expert Repair | Borehole Pros",
  description:
    "Borehole not working in North West? Pump failure, no water. Expert repair across North West province. Call 060 348 8268.",
  keywords: ["borehole not working north west", "borehole repair north west", "borehole north west"],
}

export default function BoreholNotWorkingNorthWestPage() {
  return (
    <>
      <Hero
        title="Borehole Not Working in North West | Expert Repair"
        subtitle="Pump Failure | No Water | Professional Solution"
        description="Borehole not working in North West? Expert diagnosis and repair. Pump failure, blockages, pressure issues. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Call for Repair: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "Request Quote", href: "/contact" },
        }}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Borehole Repair in North West Province</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                North West province's farms, estates, and commercial properties depend on reliable boreholes. When your
                borehole stops producing water, you need immediate expert help. Borehole Pros provides professional
                diagnosis and repair across the North West region.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                North West's unique geological conditions—deeper water tables, specific soil types, regional pressure
                variations—require expert knowledge. We understand North West boreholes and provide targeted solutions
                for pump failures, sediment issues, and pressure problems specific to the region.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Services: pump replacement, well cleaning, pressure system repair, water testing, complete borehole
                diagnostics. Call 060 348 8268 for rapid response across North West communities.
              </p>

              <h3 className="text-2xl font-bold mb-6">Borehole Services - North West</h3>
              <div className="space-y-3 mb-12">
                {[
                  "Emergency pump replacement",
                  "Well blockage clearing",
                  "Pressure system repair/replacement",
                  "Water quality testing",
                  "Electrical system diagnosis",
                  "Complete borehole assessment",
                ].map((service, idx) => (
                  <Card key={idx} className="p-4">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      <p className="text-sm font-medium">{service}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-background p-8 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Related Borehole Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/borehole-not-working" className="text-accent hover:underline font-semibold">
                      Borehole Not Working - Troubleshooting
                    </Link>
                  </li>
                  <li>
                    <Link href="/borehole-drilling" className="text-accent hover:underline font-semibold">
                      Borehole Drilling
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-accent hover:underline font-semibold">
                      Request Repair Quote
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-accent/10 border-2 border-accent mb-6">
                  <h3 className="font-bold mb-4">Get Help Now</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-4 rounded-lg hover:opacity-90 transition-opacity mb-3"
                  >
                    <Phone className="w-6 h-6" />
                    060 348 8268
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Borehole Not Working in North West?"
        description="Expert diagnosis and repair across North West province."
        primaryText="Call: 060 348 8268"
        primaryHref="tel:0603488268"
        secondaryText="Get Quote"
        secondaryHref="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Borehole Repair North West",
            description: "Professional borehole repair in North West province",
            provider: { "@type": "LocalBusiness", name: "Borehole Pros", telephone: "060-348-8268" },
            areaServed: { "@type": "Province", name: "North West" },
          }),
        }}
      />
    </>
  )
}
