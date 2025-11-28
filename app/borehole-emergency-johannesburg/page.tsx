import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Phone, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Emergency Johannesburg | 24/7 Fast Help | Borehole Pros",
  description:
    "Borehole emergency in Johannesburg? No water, pump failure. 30-90 min response. Call 060 348 8268 immediately.",
  keywords: ["borehole emergency johannesburg", "borehole emergency", "emergency borehole johannesburg"],
}

export default function BoreholEmergencyJohannesburgPage() {
  return (
    <>
      <Hero
        title="Borehole Emergency Johannesburg | 24/7 Expert Help"
        subtitle="Pump Failure | No Water | Emergency Response"
        description="Borehole emergency in Johannesburg? We respond 24/7. Pump failures, blockages, pressure issues. 30-90 minute response. Call 060 348 8268 now."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Call Emergency: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "WhatsApp Now", href: "https://wa.me/27603488268" },
        }}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Borehole Emergency in Johannesburg</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                When your Johannesburg borehole stops working, it's an emergency. You depend on that water for daily
                life, and now you're facing immediate problems. Borehole Pros responds 24/7 with expert diagnosis and
                fast repair to get your water flowing again.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We've handled every emergency imaginable: pump motor burns, complete water loss, sediment blockages,
                pressure system failures, control box breakdowns. With 15+ years serving Johannesburg, we know how to
                quickly diagnose the problem and provide cost-effective solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Don't wait. Call 060 348 8268 immediately. We dispatch the nearest available technician to arrive within
                30-90 minutes. Most emergency repairs completed same-day or within 24 hours. Emergency call-out fee
                applies but is deducted from repair costs if you proceed.
              </p>

              <h3 className="text-2xl font-bold mb-6">Common Johannesburg Borehole Emergencies</h3>
              <div className="space-y-3 mb-12">
                {[
                  "Pump stops working completely - no water output",
                  "Water pressure drops to trickle or zero",
                  "Pump motor burned or makes noise",
                  "Well blockage from sediment accumulation",
                  "Pressure tank rupture or failure",
                  "Control box electrical failure",
                  "Pipe burst or major leak",
                ].map((issue, idx) => (
                  <Card key={idx} className="p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-sm">{issue}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-background p-8 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Related Emergency Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/borehole-not-working" className="text-accent hover:underline font-semibold">
                      Borehole Not Working - Troubleshooting Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emergency-borehole-repair-johannesburg"
                      className="text-accent hover:underline font-semibold"
                    >
                      Emergency Borehole Repair Johannesburg
                    </Link>
                  </li>
                  <li>
                    <Link href="/johannesburg" className="text-accent hover:underline font-semibold">
                      All Johannesburg Services
                    </Link>
                  </li>
                </ul>
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
                    WhatsApp Now
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Borehole Emergency in Johannesburg?"
        description="24/7 expert response available now."
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
            name: "Borehole Emergency Johannesburg - Borehole Pros",
            url: "https://boreholepros.co.za/borehole-emergency-johannesburg",
            telephone: "060-348-8268",
            hoursAvailable: "24/7",
          }),
        }}
      />
    </>
  )
}
