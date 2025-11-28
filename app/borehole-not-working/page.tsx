import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Phone, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Not Working? Expert Diagnosis & Repair | Borehole Pros",
  description:
    "Borehole not working in South Africa? No water, low pressure, pump failure. Expert diagnosis and repair. Call 060 348 8268 for immediate help.",
  keywords: [
    "borehole not working",
    "borehole stopped working",
    "borehole no water",
    "borehole pump not working",
    "why is my borehole not working",
    "borehole repair south africa",
  ],
}

const commonIssues = [
  {
    title: "No Water Output",
    description: "Pump failure, pipe blockage, or dry well",
    solution: "Professional diagnosis required",
  },
  {
    title: "Low Water Pressure",
    description: "Sediment clogging, pump wear, or pipe issues",
    solution: "Cleaning or replacement",
  },
  {
    title: "Pump Not Activating",
    description: "Electrical failure, pressure switch, or control box",
    solution: "Electrical diagnosis",
  },
  {
    title: "Intermittent Supply",
    description: "Float switch problem or partial blockage",
    solution: "Component replacement",
  },
  {
    title: "Discolored Water",
    description: "Sediment, rust, or bacterial growth in well",
    solution: "Well cleaning and treatment",
  },
  { title: "Strange Noises", description: "Pump cavitation or worn bearings", solution: "Pump replacement" },
]

const troubleshootingSteps = [
  { step: 1, title: "Check Power Supply", description: "Verify electrical connection and circuit breaker is ON" },
  {
    step: 2,
    title: "Listen for Pump Sounds",
    description: "A working pump makes humming noise. Silence means electrical issue.",
  },
  {
    step: 3,
    title: "Check Pressure Gauge",
    description: "Normal pressure is 20-60 PSI. Low or zero reading indicates problem.",
  },
  {
    step: 4,
    title: "Inspect Visible Pipes",
    description: "Look for leaks, cracks, or loose connections above ground.",
  },
  { step: 5, title: "Check Pressure Tank", description: "Should be firm, not soft. Soft tank means bladder failure." },
  { step: 6, title: "Call Professional", description: "If steps 1-5 don't help, call us immediately at 060 348 8268" },
]

export default function BoreholNotWorkingPage() {
  return (
    <>
      <Hero
        title="Borehole Not Working? Expert Diagnosis & Repair"
        subtitle="No Water, Low Pressure, Pump Failure | Fast Professional Help"
        description="Your borehole stopped working? We diagnose and fix the problem fast. Pump failure, blockages, pressure issues—same-day service available. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Call for Diagnosis: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "WhatsApp Details", href: "https://wa.me/27603488268" },
        }}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Why Your Borehole Stopped Working</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                When your borehole stops producing water, it's stressful. You depend on it for daily water supply, and
                now you're faced with potential costs and downtime. The good news: most borehole problems are fixable,
                and many don't require complete replacement.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of experience diagnosing borehole problems across South Africa, we've seen every
                issue imaginable—from failed pumps to sediment blockages to pressure system failures. We know how to
                quickly identify the root cause and provide cost-effective solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Our diagnostic process takes 30-60 minutes and costs ZAR 800-1,500. We'll pinpoint exactly what's wrong,
                explain repair options and costs, and provide a timeline. Many repairs are completed same-day or within
                24 hours.
              </p>

              <h3 className="text-2xl font-bold mb-6">Common Borehole Problems & Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {commonIssues.map((issue, idx) => (
                  <Card key={idx} className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold mb-2">{issue.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{issue.description}</p>
                    <div className="text-xs bg-accent/10 text-accent p-2 rounded">{issue.solution}</div>
                  </Card>
                ))}
              </div>

              <div className="bg-background p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-6">Troubleshooting Checklist: Before You Call</h3>
                <div className="space-y-4">
                  {troubleshootingSteps.map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Borehole Repair Pricing</h3>
              <div className="bg-muted rounded-lg overflow-hidden mb-12">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-accent text-accent-foreground">
                      <th className="p-4 text-left font-bold">Service</th>
                      <th className="p-4 text-left font-bold">Cost</th>
                      <th className="p-4 text-left font-bold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4">Diagnostic Assessment</td>
                      <td className="p-4 font-semibold">ZAR 800 - 1,500</td>
                      <td className="p-4 text-muted-foreground">1 hour</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pressure Switch Replacement</td>
                      <td className="p-4 font-semibold">ZAR 2,500 - 4,500</td>
                      <td className="p-4 text-muted-foreground">2-4 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pump Replacement</td>
                      <td className="p-4 font-semibold">ZAR 6,000 - 15,000</td>
                      <td className="p-4 text-muted-foreground">4-8 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Well Cleaning & Unblocking</td>
                      <td className="p-4 font-semibold">ZAR 3,500 - 8,000</td>
                      <td className="p-4 text-muted-foreground">3-6 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pressure Tank Replacement</td>
                      <td className="p-4 font-semibold">ZAR 4,000 - 10,000</td>
                      <td className="p-4 text-muted-foreground">3-5 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">Electrical/Control Box Repair</td>
                      <td className="p-4 font-semibold">ZAR 2,000 - 6,000</td>
                      <td className="p-4 text-muted-foreground">2-4 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent mb-12">
                <h3 className="font-bold mb-3 flex items-center gap-2 text-lg">
                  <Zap className="w-6 h-6 text-accent" />
                  Why Wait? Call Now for Diagnosis
                </h3>
                <p className="text-muted-foreground">
                  Every day without water is a problem. We diagnose boreholes every day and fix most issues same-day.
                  Our diagnostic fee is applied toward repair costs if you proceed. Call 060 348 8268 right now.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Related Borehole Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/borehole-drilling" className="text-accent hover:underline font-semibold">
                          Borehole Drilling
                        </Link>
                      </li>
                      <li>
                        <Link href="/borehole-drilling-cost" className="text-accent hover:underline font-semibold">
                          Borehole Drilling Cost Guide
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
                        <Link href="/borehole-maintenance" className="text-accent hover:underline font-semibold">
                          Borehole Maintenance Plans
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/emergency-borehole-repair-johannesburg"
                          className="text-accent hover:underline font-semibold"
                        >
                          Emergency Borehole Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-accent hover:underline font-semibold">
                          Request Diagnosis Quote
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
                  <h3 className="font-bold mb-4 text-lg text-red-600">Borehole Not Working?</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-red-500 text-white font-bold py-4 rounded-lg hover:bg-red-600 transition-colors mb-3 text-lg"
                  >
                    <Phone className="w-6 h-6" />
                    Call Now: 060 348 8268
                  </a>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center gap-2 w-full border-2 border-red-500 font-bold py-3 rounded-lg hover:bg-red-500/5 transition-colors text-red-600"
                  >
                    WhatsApp Now
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Most repairs: same-day</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Diagnostic fee applied to repair</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>12-month warranty on repairs</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Transparent pricing</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>15+ years experience</span>
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
          <h2 className="text-3xl font-bold mb-12">Borehole Repair FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How do I know if my pump failed?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A failed pump produces no water but the motor may hum. You'll hear nothing if there's an electrical
                problem. A humming motor with no water means the pump is dead. Call us for diagnosis.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Can a borehole dry up?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes. In drought conditions or if water table drops significantly, boreholes can produce less or no
                water. We test water table depth and recommend solutions like deeper drilling.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How much does pump replacement cost?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ZAR 6,000-15,000 depending on pump size and depth. We quote specific price after diagnosis. New pumps
                come with 1-year warranty. Installation typically takes 4-8 hours.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What's included in preventive maintenance?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Annual inspection, pressure testing, filter replacement, water quality check, and pump performance
                evaluation. Plans start at ZAR 1,500/year and prevent 90% of problems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How long do borehole pumps last?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Quality submersible pumps last 7-10 years with proper maintenance. Without maintenance, they fail in 3-5
                years. Regular servicing extends lifespan significantly.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Do you offer emergency borehole repair?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! 24/7 emergency service available across South Africa. Emergency call-out: ZAR 1,500-2,500 depending
                on time. Many emergency repairs completed same-day.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Borehole Not Working? Expert Diagnosis Now"
        description="Get your borehole working again. Fast diagnosis, transparent pricing, same-day repairs."
        primaryText="Call for Diagnosis: 060 348 8268"
        primaryHref="tel:0603488268"
        secondaryText="WhatsApp Now"
        secondaryHref="https://wa.me/27603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Borehole Repair Diagnosis - Borehole Pros",
            description: "Professional borehole diagnosis and repair for non-working boreholes",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Pros",
              telephone: "060-348-8268",
            },
            serviceType: "Borehole Repair",
            areaServed: {
              "@type": "Country",
              name: "South Africa",
            },
            priceRange: "ZAR",
          }),
        }}
      />
    </>
  )
}
