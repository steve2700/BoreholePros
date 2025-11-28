import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Phone, CheckCircle2, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency Borehole Repair Johannesburg | 24/7 Fast Response | Borehole Pros",
  description:
    "Emergency borehole repair in Johannesburg. Pump failure, no water, blockages. 30-90 min response. Call 060 348 8268 now!",
  keywords: [
    "emergency borehole repair johannesburg",
    "borehole repair johannesburg",
    "emergency borehole johannesburg",
  ],
}

export default function EmergencyBoreholRepairJohannesburgPage() {
  return (
    <>
      <Hero
        title="24/7 Emergency Borehole Repair Johannesburg"
        subtitle="Pump Failure | No Water | Urgent Response"
        description="Emergency borehole repair across Johannesburg and surrounding areas. 30-90 minute response. Pump failure, blockages, pressure issues. Call 060 348 8268 immediately."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Call Emergency: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "WhatsApp Now", href: "https://wa.me/27603488268" },
        }}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Emergency Borehole Repair in Johannesburg</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Johannesburg's largest metro area depends on borehole water. When your pump fails or borehole stops
                producing water, you need immediate expert help. Borehole Pros provides 24/7 emergency repair service
                across Johannesburg with rapid response and expert diagnosis.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With 15+ years serving Johannesburg's diverse communities from Sandton to Alexandra, we've repaired
                thousands of boreholes. Common emergencies: pump motor failure, sediment blockages, pressure system
                failure, electrical problems. Same-day repair in most cases.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Emergency response: 30-90 minutes depending on location. We operate 24/7 including weekends and
                holidays. Call 060 348 8268 anytime—our emergency technician will arrive with diagnostic equipment to
                quickly assess and repair your borehole.
              </p>

              <div className="bg-background p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-6">Emergency Services Available 24/7</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Pump Replacement", desc: "Failed motor or burned-out pump" },
                    { title: "Well Cleaning", desc: "Sediment blockage or reduced pressure" },
                    { title: "Pressure Repair", desc: "Pressure tank or switch failure" },
                    { title: "Electrical Fix", desc: "Control box or power issues" },
                    { title: "Pipe Repair", desc: "Broken or leaking pipes" },
                    { title: "Water Restoration", desc: "Get your water back fast" },
                  ].map((service, idx) => (
                    <Card key={idx} className="p-4">
                      <h4 className="font-bold mb-2">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Emergency Repair Pricing - Johannesburg</h3>
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
                      <td className="p-4">Emergency Call-out (Day: 6am-10pm)</td>
                      <td className="p-4 font-semibold">ZAR 900 - 1,400</td>
                    </tr>
                    <tr>
                      <td className="p-4">Emergency Call-out (Night: 10pm-6am)</td>
                      <td className="p-4 font-semibold">ZAR 1,800 - 2,800</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pump Replacement</td>
                      <td className="p-4 font-semibold">ZAR 6,500 - 16,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Well Cleaning/Unblocking</td>
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
                      Borehole Not Working
                    </Link>
                  </li>
                  <li>
                    <Link href="/borehole-drilling" className="text-accent hover:underline font-semibold">
                      Borehole Drilling
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
                  <h3 className="font-bold mb-4">Quick Response</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>30-90 min response</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>24/7 available</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Same-day repairs</span>
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
        title="Borehole Emergency in Johannesburg?"
        description="24/7 expert response. Pump failure, blockages, pressure issues. Call now."
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
            name: "Emergency Borehole Repair Johannesburg - Borehole Pros",
            description: "24/7 emergency borehole repair in Johannesburg",
            url: "https://boreholepros.co.za/emergency-borehole-repair-johannesburg",
            telephone: "060-348-8268",
            hoursAvailable: "24/7",
            serviceType: "Emergency Borehole Repair",
          }),
        }}
      />
    </>
  )
}
