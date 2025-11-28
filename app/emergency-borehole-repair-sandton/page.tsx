import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency Borehole Repair Sandton | Fast Response | Borehole Pros",
  description:
    "Emergency borehole repair in Sandton. Pump failure, no water, blockages. 30-60 min response. Call 060 348 8268 now!",
  keywords: [
    "emergency borehole repair sandton",
    "borehole sandton",
    "borehole drilling sandton",
    "borehole pump repair sandton",
  ],
}

const sandtonAreas = ["Sandton", "Morningside", "Bryanston", "Sunninghill", "Rosebank", "Parktown"]

export default function EmergencyBoreholRepairSandtonPage() {
  return (
    <>
      <Hero
        title="24/7 Emergency Borehole Repair Sandton"
        subtitle="Pump Failure | No Water | Urgent Response"
        description="Emergency borehole repair in Sandton. Pump failure, blockages, pressure issues. 30-60 minute response. Call 060 348 8268 immediately."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Call Emergency: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "WhatsApp Now", href: "https://wa.me/27603488268" },
        }}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
            Emergency Borehole Repair in Sandton - Available 24/7
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Sandton's premium properties depend on reliable water supply. When your borehole pump fails or stops
                producing water, it's an emergency. Borehole Pros provides 24/7 emergency repair service in Sandton with
                rapid response times and expert diagnosis.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years serving Sandton's estates, Morningside, and high-value properties, we understand the
                urgency. Our technicians arrive with diagnostic equipment to quickly assess pump failure, blockages, or
                pressure system problems. Most emergency repairs are completed same-day.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Sandton emergency response: 30-60 minutes depending on location. We operate across Sandton, Morningside,
                Bryanston, Sunninghill, Rosebank, and Parktown. Call 060 348 8268 anytime—we're ready to help.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3">Fast Response in Sandton</h3>
                  <p className="text-sm text-muted-foreground">
                    30-60 minute response for Sandton central areas. We prioritize emergency repairs and dispatch the
                    nearest available technician.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3">24/7 Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    Weekdays, weekends, holidays—whenever your borehole fails, we're available. Emergency rates apply
                    for after-hours calls.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Common Sandton Borehole Issues</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {[
                  "Pump motor burned out",
                  "No water pressure",
                  "Well blockage from sediment",
                  "Pressure tank failure",
                  "Electrical control box failure",
                  "Water pressure loss",
                ].map((issue, idx) => (
                  <Card key={idx} className="p-4">
                    <p className="font-semibold text-sm">{issue}</p>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6">Borehole Repair Pricing - Sandton</h3>
              <div className="bg-muted rounded-lg overflow-hidden mb-12">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-accent text-accent-foreground">
                      <th className="p-4 text-left font-bold">Service</th>
                      <th className="p-4 text-left font-bold">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4">Emergency Call-out (Day)</td>
                      <td className="p-4 font-semibold">ZAR 1,000 - 1,500</td>
                    </tr>
                    <tr>
                      <td className="p-4">Emergency Call-out (Night)</td>
                      <td className="p-4 font-semibold">ZAR 2,000 - 3,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pump Replacement</td>
                      <td className="p-4 font-semibold">ZAR 7,000 - 18,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Well Cleaning</td>
                      <td className="p-4 font-semibold">ZAR 4,000 - 9,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pressure Tank Replacement</td>
                      <td className="p-4 font-semibold">ZAR 5,000 - 12,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-background p-8 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Related Borehole Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/borehole-not-working" className="text-accent hover:underline font-semibold">
                          Borehole Not Working
                        </Link>
                      </li>
                      <li>
                        <Link href="/borehole-drilling" className="text-accent hover:underline font-semibold">
                          Borehole Drilling
                        </Link>
                      </li>
                      <li>
                        <Link href="/borehole-drilling-midrand" className="text-accent hover:underline font-semibold">
                          Borehole Drilling Midrand
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/water-testing" className="text-accent hover:underline font-semibold">
                          Water Testing
                        </Link>
                      </li>
                      <li>
                        <Link href="/sandton" className="text-accent hover:underline font-semibold">
                          All Sandton Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-accent hover:underline font-semibold">
                          Request Emergency Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-red-500/10 border-2 border-red-500 mb-6">
                  <h3 className="font-bold mb-4 text-lg text-red-600">Emergency Now?</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-red-500 text-white font-bold py-4 rounded-lg hover:bg-red-600 transition-colors mb-3 text-lg"
                  >
                    <Phone className="w-6 h-6" />
                    060 348 8268
                  </a>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center gap-2 w-full border-2 border-red-500 font-bold py-3 rounded-lg text-red-600"
                  >
                    WhatsApp
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-4">Service Areas</h3>
                  <div className="space-y-2">
                    {sandtonAreas.map((area) => (
                      <div key={area} className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Emergency Borehole Repair FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How fast do you respond in Sandton?</h3>
              <p className="text-muted-foreground text-sm">
                30-60 minutes for Sandton central areas. Response time depends on current demand and traffic. Call
                immediately to get estimate.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can you repair weekend emergencies?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! We operate 24/7 including weekends and holidays. Same-day emergency response applies anytime you
                call.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What's your emergency call-out fee?</h3>
              <p className="text-muted-foreground text-sm">
                Day (6am-10pm): ZAR 1,000-1,500. Night (10pm-6am): ZAR 2,000-3,000. Fee applied toward repair if you
                proceed.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do you guarantee emergency repairs?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! 12-month warranty on all emergency repairs. If the same problem occurs due to our work, we fix it
                free.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Emergency Borehole Repair in Sandton"
        description="24/7 available. Pump failure, no water, blockages. Fast response."
        primaryText="Call Emergency: 060 348 8268"
        primaryHref="tel:0603488268"
        secondaryText="WhatsApp Now"
        secondaryHref="https://wa.me/27603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Emergency Borehole Repair Sandton - Borehole Pros",
            description: "24/7 emergency borehole repair in Sandton",
            url: "https://boreholepros.co.za/emergency-borehole-repair-sandton",
            telephone: "060-348-8268",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sandton",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: sandtonAreas,
            hoursAvailable: "24/7",
            serviceType: "Emergency Borehole Repair",
          }),
        }}
      />
    </>
  )
}
