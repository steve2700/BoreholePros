import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { AlertCircle, Phone, Clock, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "24/7 Emergency Plumber | Same-Day Response | Borehole Pros",
  description:
    "Emergency plumber available 24/7. Burst pipes, leaks, blocked drains. Same-day response. Call 060 348 8268 now!",
  keywords: ["emergency plumber", "burst pipe repair", "leak detection", "emergency plumbing", "24 hour plumber"],
}

const emergencyServices: ServiceItem[] = [
  {
    title: "Burst Pipe Repair",
    description: "Immediate response to burst pipes to prevent water damage to your property.",
    href: "#",
  },
  {
    title: "Leak Detection",
    description: "Advanced leak detection technology to find hidden leaks before they cause damage.",
    href: "#",
  },
  {
    title: "Blocked Drains",
    description: "Fast drain unblocking service to restore normal drainage quickly.",
    href: "#",
  },
  {
    title: "Water Leaks",
    description: "Emergency water leak repairs to minimize water waste and damage.",
    href: "#",
  },
]

export default function EmergencyPlumbingPage() {
  return (
    <>
      <Hero
        title="24/7 Emergency Plumbing Service"
        subtitle="Same-Day Response | Burst Pipes & Leaks"
        description="Emergency plumber available anytime. Burst pipes, leaks, and urgent plumbing repairs. Call 060 348 8268 for immediate dispatch."
        cta={{
          primary: { text: "Call Emergency Plumber: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "WhatsApp Emergency", href: "https://wa.me/27603488268" },
        }}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Borehole Pros for Emergencies?</h2>
              <ul className="space-y-4">
                {[
                  "Available 24/7 - Call anytime",
                  "Same-day response in most areas",
                  "Certified emergency technicians",
                  "Modern diagnostic equipment",
                  "Transparent pricing, no hidden fees",
                  "Complete damage prevention focus",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Emergency Response Guarantee</h3>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-accent">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Fast Response</h4>
                      <p className="text-sm text-muted-foreground">30-90 minutes depending on location</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-accent">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Expert Assessment</h4>
                      <p className="text-sm text-muted-foreground">Professional damage evaluation</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-accent">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Direct Dispatch</h4>
                      <p className="text-sm text-muted-foreground">Nearest technician sent immediately</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid title="Emergency Plumbing Services" services={emergencyServices} columns={4} />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">When to Call Emergency Plumber</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              { problem: "Burst pipes", when: "Immediate - stop water at main" },
              { problem: "Sewage backup", when: "Immediate - health hazard" },
              { problem: "Complete loss of water", when: "Same day - depends on cause" },
              { problem: "Gas odor at geyser", when: "Immediate - evacuate property" },
              { problem: "Major water leak", when: "Immediate - prevent damage" },
              { problem: "Frozen pipes", when: "Same day - permanent damage risk" },
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-bold mb-2">{item.problem}</h3>
                <p className="text-sm text-accent font-semibold">{item.when}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Emergency Plumbing - Call Now"
        description="Don't wait. Call 060 348 8268 immediately for emergency plumbing. Available 24/7."
        primaryText="Call Emergency: 060 348 8268"
        primaryHref="tel:0603488268"
        secondaryText="WhatsApp"
        secondaryHref="https://wa.me/27603488268"
      />
    </>
  )
}
