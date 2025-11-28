import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Phone, AlertCircle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Pump Emergency East Rand | Fast Repair | Borehole Pros",
  description:
    "Borehole pump emergency in East Rand? Pump failure, no water. 30-90 min response. Call 060 348 8268 immediately.",
  keywords: ["borehole pump emergency east rand", "pump repair east rand", "borehole emergency east rand"],
}

export default function BoreholePumpEmergencyEastRandPage() {
  return (
    <>
      <Hero
        title="Borehole Pump Emergency East Rand | Fast Response"
        subtitle="Pump Failure | No Water | Professional Help"
        description="Borehole pump emergency in East Rand? Pump failure, no water pressure. 30-90 minute response. Call 060 348 8268 immediately."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Call Emergency: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "WhatsApp Now", href: "https://wa.me/27603488268" },
        }}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Borehole Pump Emergency in East Rand</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                East Rand's residential and commercial properties depend on borehole water supply. When your pump fails
                or stops producing water, it's a serious problem. Borehole Pros responds immediately with expert pump
                diagnosis and emergency replacement service.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Borehole pump failures are common in East Rand due to water quality issues and high mineral content. Our
                technicians understand East Rand's specific borehole challenges and provide quick solutions—pump
                replacement, pressure system repair, electrical diagnostics. Most emergencies resolved same-day.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Emergency response: 30-90 minutes depending on location in East Rand. Call 060 348 8268 anytime. We
                arrive with diagnostic equipment to assess pump failure and provide immediate repair options. Same-day
                pump replacement available for most situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Pump Replacement</h3>
                  <p className="text-sm text-muted-foreground">
                    Failed submersible pump replaced same-day. We stock common sizes. Installation includes testing and
                    warranty.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Pressure Repair</h3>
                  <p className="text-sm text-muted-foreground">
                    Pressure tank rupture or pressure switch failure diagnosed and repaired. Restores proper water
                    pressure throughout property.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Electrical Diagnosis</h3>
                  <p className="text-sm text-muted-foreground">
                    Control box failure or electrical problems identified. Repair or replacement with full functionality
                    test.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Well Cleaning</h3>
                  <p className="text-sm text-muted-foreground">
                    Sediment blockage causing pressure loss. Professional cleaning restores full water output.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Emergency Pump Pricing - East Rand</h3>
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
                      <td className="p-4">Emergency Call-out</td>
                      <td className="p-4 font-semibold">ZAR 900 - 1,400</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pump Replacement</td>
                      <td className="p-4 font-semibold">ZAR 6,500 - 16,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Well Cleaning</td>
                      <td className="p-4 font-semibold">ZAR 3,800 - 8,500</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pressure System Repair</td>
                      <td className="p-4 font-semibold">ZAR 4,500 - 11,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-background p-8 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Related Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/borehole-not-working" className="text-accent hover:underline font-semibold">
                      Borehole Not Working - Diagnosis Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/borehole-drilling" className="text-accent hover:underline font-semibold">
                      Borehole Drilling East Rand
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

            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-red-500/10 border-2 border-red-500 mb-6">
                  <h3 className="font-bold mb-4 text-lg text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Emergency Now?
                  </h3>
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
                    WhatsApp Now
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-4">Why Us?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>30-90 min response</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Same-day repair</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Expert diagnosis</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>12-month warranty</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Borehole Pump Emergency in East Rand?"
        description="Expert emergency response available 24/7."
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
            name: "Borehole Pump Emergency East Rand - Borehole Pros",
            url: "https://boreholepros.co.za/borehole-pump-emergency-east-rand",
            telephone: "060-348-8268",
            areaServed: { "@type": "City", name: "East Rand" },
          }),
        }}
      />
    </>
  )
}
