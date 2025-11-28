import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Emergency Pretoria | Fast Repair Service | Borehole Pros",
  description:
    "Borehole emergency in Pretoria? Pump failure, no water, blockages. 30-90 min response. Call 060 348 8268 for immediate help.",
  keywords: [
    "borehole emergency pretoria",
    "borehole repair pretoria",
    "emergency borehole pretoria",
    "borehole pump pretoria",
  ],
}

export default function BoreholEmergencyPretoriaPage() {
  return (
    <>
      <Hero
        title="Borehole Emergency Pretoria | 24/7 Expert Response"
        subtitle="Pump Failure | No Water | Fast Emergency Repair"
        description="Borehole emergency in Pretoria? We respond 24/7 for pump failures, blockages, pressure issues. 30-90 minute response. Call 060 348 8268 now."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Call Emergency: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "WhatsApp Now", href: "https://wa.me/27603488268" },
        }}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
            Borehole Emergency in Pretoria - Available 24/7
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Pretoria's residential and commercial properties depend on reliable borehole water supply. When your
                borehole pump fails or stops producing water, you need immediate expert help. Borehole Pros provides
                24/7 emergency response across Pretoria, Centurion, and surrounding areas.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With 15+ years serving Pretoria region, we've repaired thousands of boreholes. Common emergencies: pump
                motor failure, sediment blockages, pressure system failure, control box problems, pressure tank rupture.
                We diagnose and repair same-day in most cases.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Emergency response: 30-90 minutes depending on location within Pretoria and Centurion. Call 060 348 8268
                anytime. Our emergency technician will have diagnostic equipment to quickly assess the problem and
                provide repair options.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3">Swift Response</h3>
                  <p className="text-sm text-muted-foreground">
                    30-90 minute response for Pretoria and Centurion. We dispatch nearest available technician for
                    fastest arrival.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3">Expert Diagnosis</h3>
                  <p className="text-sm text-muted-foreground">
                    Diagnostic equipment determines root cause. Pump failure, blockage, or pressure system issue—we
                    identify it fast.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3">Same-Day Repairs</h3>
                  <p className="text-sm text-muted-foreground">
                    Most emergency repairs completed same-day. If not possible, we provide temporary solution to restore
                    partial water supply.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3">Warranty Backed</h3>
                  <p className="text-sm text-muted-foreground">
                    12-month workmanship warranty on all repairs. If same problem occurs, we fix it free.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Emergency Borehole Services - Pretoria</h3>
              <div className="space-y-3 mb-12">
                {[
                  {
                    title: "Pump Replacement",
                    desc: "Failed motor or burned-out pump. Replacement with quality pump.",
                  },
                  {
                    title: "Emergency Well Cleaning",
                    desc: "Sediment blockage reducing water pressure or stopping flow.",
                  },
                  { title: "Pressure System Repair", desc: "Pressure tank failure or pressure switch malfunction." },
                  { title: "Electrical Diagnosis", desc: "Control box failure or electrical system problems." },
                  { title: "Pipe Repair/Replacement", desc: "Broken or leaking underground or above-ground pipes." },
                  { title: "24/7 Emergency Support", desc: "Call anytime—we're ready to respond." },
                ].map((service, idx) => (
                  <Card key={idx} className="p-4 border">
                    <h4 className="font-bold text-sm mb-1">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6">Emergency Pricing - Pretoria</h3>
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
                <h3 className="font-bold mb-4">Related Services in Pretoria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/borehole-drilling-prices-pretoria"
                          className="text-accent hover:underline font-semibold"
                        >
                          Borehole Drilling Prices Pretoria
                        </Link>
                      </li>
                      <li>
                        <Link href="/borehole-drilling" className="text-accent hover:underline font-semibold">
                          Borehole Drilling Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/water-testing" className="text-accent hover:underline font-semibold">
                          Water Quality Testing
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/pretoria" className="text-accent hover:underline font-semibold">
                          All Pretoria Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-accent hover:underline font-semibold">
                          Emergency Repair Quote
                        </Link>
                      </li>
                      <li>
                        <Link href="/borehole-not-working" className="text-accent hover:underline font-semibold">
                          Borehole Not Working
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
                    WhatsApp Now
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-4">Quick Response</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>30-90 min response</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>24/7 available</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Same-day repairs</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>12-month warranty</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Borehole Emergency FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How do you respond at night?</h3>
              <p className="text-muted-foreground text-sm">
                We maintain 24/7 emergency team. Night emergency rates apply (10pm-6am). Response time same as day
                emergencies.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Will you restore partial water?</h3>
              <p className="text-muted-foreground text-sm">
                If same-day full repair isn't possible, we provide temporary solution to restore some water supply while
                arranging full repair.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do you work Sundays/holidays?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Water emergencies don't take holidays. We're available 24/7 including weekends and public holidays.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can you replace a pump same-day?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. Most pump replacements completed same-day (4-8 hours). We have stock of common pump sizes
                available.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Borehole Emergency in Pretoria?"
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
            name: "Borehole Emergency Pretoria - Borehole Pros",
            description: "24/7 emergency borehole repair in Pretoria",
            url: "https://boreholepros.co.za/borehole-emergency-pretoria",
            telephone: "060-348-8268",
            areaServed: [
              { "@type": "City", name: "Pretoria" },
              { "@type": "City", name: "Centurion" },
            ],
            hoursAvailable: "24/7",
            serviceType: "Emergency Borehole Repair",
          }),
        }}
      />
    </>
  )
}
