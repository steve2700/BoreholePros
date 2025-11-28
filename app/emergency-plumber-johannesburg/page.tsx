import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { AlertCircle, Phone, Clock, Zap, CheckCircle2, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "24/7 Emergency Plumber Johannesburg | Same-Day Response | Borehole Pros",
  description:
    "Emergency plumber Johannesburg - 24/7 available for burst pipes, leaks, blocked drains. 30-90 min response. Call 060 348 8268 now!",
  keywords: [
    "emergency plumber johannesburg",
    "24 hour plumber johannesburg",
    "burst pipe repair johannesburg",
    "emergency plumbing johannesburg",
    "same day plumber johannesburg",
  ],
}

const emergencyServices = [
  { title: "Burst Pipes", description: "Immediate response to prevent water damage", time: "30-90 min" },
  { title: "Major Leaks", description: "Expert leak assessment and repair", time: "30-90 min" },
  { title: "Blocked Drains", description: "Fast drain unblocking service", time: "1-2 hours" },
  { title: "Geyser Failures", description: "Emergency geyser repair or replacement", time: "Same day" },
  { title: "Sewage Backup", description: "Urgent sewage line cleaning", time: "1-4 hours" },
  { title: "Loss of Water", description: "Diagnose and restore water supply", time: "1-2 hours" },
]

const johannesburgAreas = [
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

export default function EmergencyPlumberJohannesburgPage() {
  return (
    <>
      <Hero
        title="24/7 Emergency Plumber Johannesburg | Fast Response"
        subtitle="Burst Pipes & Leaks | Same-Day Service | Available Anytime"
        description="Emergency plumber available 24/7 in Johannesburg for burst pipes, major leaks, and urgent plumbing problems. 30-90 minute response. Call 060 348 8268 immediately."
        imageSrc="/images/plumbing-emergency.jpg"
        cta={{
          primary: { text: "Call Emergency: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "WhatsApp Emergency", href: "https://wa.me/27603488268" },
        }}
      />

      {/* Emergency Response Overview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
            Emergency Plumbing in Johannesburg - Available 24/7
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Plumbing emergencies don't wait for business hours. When a burst pipe floods your Johannesburg home at
                midnight, or your geyser fails during winter, you need immediate professional help. Borehole Pros
                emergency plumbing team is available 24/7 to handle any urgent plumbing situation.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of experience responding to emergencies across Johannesburg, our technicians know how
                to minimize damage, work quickly, and provide lasting solutions—not temporary patches. We operate across
                Sandton, Midrand, Randburg, Bryanston, and all major Johannesburg suburbs.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Our emergency response is swift: 30-90 minutes depending on your location in Johannesburg. We arrive
                with diagnostic equipment to quickly assess the problem and provide repair options. Most emergency
                repairs are completed same-day or within 24 hours.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Fast Response Guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    30-60 minute response in central Johannesburg (Sandton, Midrand, CBD). 60-90 minutes for outer
                    areas. We dispatch the nearest available technician for fastest arrival.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    Always Available
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Weekdays, weekends, holidays, 3am—whenever you need us. Emergency rates apply after hours
                    (22:00-06:00). Call 060 348 8268 anytime.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Damage Mitigation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our first priority is stopping the problem to prevent water damage. We'll advise on immediate
                    actions (turning off mains, etc.) while we're en route.
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Permanent Solutions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We fix the root cause, not just patch the symptom. This prevents the same problem from happening
                    again next week.
                  </p>
                </div>
              </div>

              {/* Emergency Services Grid */}
              <h3 className="text-2xl font-bold mb-6">Common Emergency Plumbing Situations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {emergencyServices.map((service, idx) => (
                  <Card key={idx} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-lg">{service.title}</h4>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">{service.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </Card>
                ))}
              </div>

              {/* What to Do */}
              <div className="bg-background p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-6">What to Do During a Plumbing Emergency</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Call us immediately: 060 348 8268</h4>
                      <p className="text-muted-foreground text-sm">
                        Don't wait. Tell us the problem and your location. We'll dispatch our nearest technician
                        immediately.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Turn off water if safe to do so</h4>
                      <p className="text-muted-foreground text-sm">
                        For burst pipes or major leaks, turn off the main water valve to minimize damage while we're on
                        the way.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Contain the water if possible</h4>
                      <p className="text-muted-foreground text-sm">
                        Use towels, buckets, or mop water to prevent damage to floors and furniture while waiting for
                        us.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Document damage for insurance</h4>
                      <p className="text-muted-foreground text-sm">
                        Take photos of damage if safe. This helps with insurance claims. Keep documentation of our work
                        for repairs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">We arrive and assess the situation</h4>
                      <p className="text-muted-foreground text-sm">
                        Our technician will diagnose the problem, explain repair options, and provide cost estimate
                        before proceeding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Pricing */}
              <h3 className="text-2xl font-bold mb-6">Emergency Plumbing Pricing in Johannesburg</h3>
              <div className="bg-muted rounded-lg overflow-hidden mb-12">
                <table className="w-full">
                  <thead>
                    <tr className="bg-accent text-accent-foreground">
                      <th className="p-4 text-left font-bold">Item</th>
                      <th className="p-4 text-left font-bold">Cost</th>
                      <th className="p-4 text-left font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4">Emergency Call-out (Day: 06:00-22:00)</td>
                      <td className="p-4 font-semibold">ZAR 800 - 1,200</td>
                      <td className="p-4 text-sm text-muted-foreground">Covers dispatch and assessment</td>
                    </tr>
                    <tr>
                      <td className="p-4">Emergency Call-out (Night: 22:00-06:00)</td>
                      <td className="p-4 font-semibold">ZAR 1,500 - 2,500</td>
                      <td className="p-4 text-sm text-muted-foreground">Higher rate for after-hours response</td>
                    </tr>
                    <tr>
                      <td className="p-4">Burst Pipe Temporary Repair</td>
                      <td className="p-4 font-semibold">ZAR 2,500 - 5,000</td>
                      <td className="p-4 text-sm text-muted-foreground">Stops emergency, may need permanent repair</td>
                    </tr>
                    <tr>
                      <td className="p-4">Burst Pipe Permanent Repair</td>
                      <td className="p-4 font-semibold">ZAR 4,500 - 12,000</td>
                      <td className="p-4 text-sm text-muted-foreground">Depends on location and pipe type</td>
                    </tr>
                    <tr>
                      <td className="p-4">Emergency Drain Unblocking</td>
                      <td className="p-4 font-semibold">ZAR 2,500 - 6,000</td>
                      <td className="p-4 text-sm text-muted-foreground">Standard to complex blockages</td>
                    </tr>
                    <tr>
                      <td className="p-4">Emergency Geyser Failure</td>
                      <td className="p-4 font-semibold">ZAR 4,500 - 15,000</td>
                      <td className="p-4 text-sm text-muted-foreground">Repair or replacement depending on damage</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Internal Links */}
              <div className="bg-background p-8 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Related Johannesburg Plumbing Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/plumber-johannesburg" className="text-accent hover:underline font-semibold">
                          Professional Plumber Johannesburg
                        </Link>
                      </li>
                      <li>
                        <Link href="/drain-cleaning" className="text-accent hover:underline font-semibold">
                          Drain Cleaning Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/geyser-installation" className="text-accent hover:underline font-semibold">
                          Geyser Installation & Repair
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/leak-detection" className="text-accent hover:underline font-semibold">
                          Leak Detection Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-accent hover:underline font-semibold">
                          Request Free Quote
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
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-red-500/10 border-2 border-red-500 mb-6">
                  <h3 className="font-bold mb-4 text-lg text-red-600">Emergency in Progress?</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-red-500 text-white font-bold py-4 rounded-lg hover:bg-red-600 transition-colors mb-3 text-lg"
                  >
                    <Phone className="w-6 h-6" />
                    060 348 8268
                  </a>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center gap-2 w-full border-2 border-red-500 font-bold py-3 rounded-lg hover:bg-red-500/5 transition-colors text-red-600"
                  >
                    WhatsApp Now
                  </a>
                </Card>

                <Card className="p-6 bg-accent/5 border-accent mb-6">
                  <h3 className="font-bold mb-4">Service Areas</h3>
                  <div className="space-y-2">
                    {johannesburgAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-4">Why Choose Us for Emergencies?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>24/7 availability</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>30-90 min response</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Certified technicians</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Damage prevention focus</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Permanent solutions</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Transparent pricing</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Emergency Plumbing FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What should I do if my pipe bursts?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                1) Turn off the main water valve immediately to stop water flow. 2) Call us right away at 060 348 8268.
                3) Contain the water with towels/buckets to minimize damage. 4) Document damage with photos for
                insurance. We'll dispatch immediately and fix the problem.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How fast can you arrive for emergencies?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Central Johannesburg (Sandton, Midrand): 30-60 minutes. Outer areas: 60-90 minutes. Response time
                depends on current demand, traffic, and your location. Call immediately to get dispatch time estimate.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What's the cost of emergency call-out?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Day (6am-10pm): ZAR 800-1,200. Night (10pm-6am): ZAR 1,500-2,500. This covers dispatch and problem
                assessment. Repair costs quoted separately and depend on the issue severity.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Do you work on holidays and weekends?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! Plumbing emergencies don't take holidays. We operate 24/7 including weekends, public holidays, and
                special days. Same emergency response applies anytime you call.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Can you help if my geyser bursts?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Absolutely. A burst geyser is an emergency. Turn off the water and electricity, then call us
                immediately. We'll assess whether repair or replacement is needed and provide options.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Is there a guarantee on emergency repairs?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! All emergency plumbing work includes 12-month workmanship warranty. If the same problem occurs due
                to our work, we'll fix it for free.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Plumbing Emergency? Call Immediately"
        description="24/7 emergency response. Burst pipes, leaks, blockages. We're ready to help right now."
        primaryText="Call Emergency: 060 348 8268"
        primaryHref="tel:0603488268"
        secondaryText="WhatsApp Emergency"
        secondaryHref="https://wa.me/27603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Emergency Plumber Johannesburg - Borehole Pros",
            description: "24/7 emergency plumber in Johannesburg for burst pipes, leaks, and urgent repairs",
            url: "https://boreholepros.co.za/emergency-plumber-johannesburg",
            telephone: "060-348-8268",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: johannesburgAreas,
            priceRange: "ZAR",
            hoursAvailable: "24/7",
            serviceType: "Emergency Plumbing",
          }),
        }}
      />
    </>
  )
}
