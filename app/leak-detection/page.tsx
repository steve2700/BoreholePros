import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Leak Detection Services SA | Advanced Equipment | Borehole Pros",
  description:
    "Expert leak detection and repair across South Africa. Hidden water leaks found quickly. Advanced equipment. Save money and water. Call 060 348 8268.",
  keywords: [
    "leak detection",
    "water leak",
    "hidden leak",
    "leak repair",
    "water damage",
    "moisture detection",
    "underground leak",
  ],
  openGraph: {
    title: "Professional Leak Detection Services SA | Borehole Pros",
    description: "Expert leak detection and repair. Advanced equipment finds hidden leaks quickly.",
    url: "https://boreholepros.co.za/leak-detection",
    type: "website",
  },
  alternates: {
    canonical: "https://boreholepros.co.za/leak-detection",
  },
}

const features: ServiceItem[] = [
  {
    title: "Acoustic Leak Detection",
    description: "Advanced listening technology identifies water leak locations precisely.",
    href: "#",
  },
  {
    title: "Thermal Imaging",
    description: "Infrared cameras detect temperature changes indicating water leaks.",
    href: "#",
  },
  {
    title: "Tracer Gas Detection",
    description: "Specialized gas traces pipe paths to locate hidden leaks.",
    href: "#",
  },
  {
    title: "Visual Inspection",
    description: "Professional assessment for visible leaks and moisture damage.",
    href: "#",
  },
]

export default function LeakDetectionPage() {
  return (
    <>
      <Hero
        title="Professional Leak Detection & Water Loss Prevention"
        subtitle="Advanced Technology | Accurate Location | Fast Repairs"
        description="Hidden water leaks waste thousands of rands annually. Our advanced leak detection finds hidden leaks before they cause damage. Serving all of South Africa."
        imageSrc="/images/leak-detection.jpg"
        cta={{
          primary: { text: "Get Leak Detection Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Find and Fix Hidden Water Leaks</h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Water leaks can cost homeowners thousands of rands per month in wasted water and hidden property damage.
                Many leaks occur underground, behind walls, or under concrete—invisible until serious damage appears.
                Borehole Pros uses advanced leak detection technology to find hidden leaks quickly and accurately,
                preventing costly damage and water waste.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our leak detection service uses specialized equipment—acoustic sensors, thermal imaging, and tracer
                gas—to pinpoint leak locations precisely. Once located, we can repair immediately, saving you water
                costs and preventing structural damage to your property. Average hidden leaks waste 20,000+ liters
                monthly.
              </p>

              <h3 className="text-2xl font-bold mb-6 mt-12">Signs You Might Have a Hidden Leak</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { sign: "Unexpectedly high water bill", icon: DollarSign },
                  { sign: "Damp patches on floors or walls", icon: AlertCircle },
                  { sign: "Mold or mildew growth", icon: AlertCircle },
                  { sign: "Running water sound when nothing is on", icon: AlertCircle },
                  { sign: "Soft spots in concrete", icon: AlertCircle },
                  { sign: "Dead patches in lawn or garden", icon: AlertCircle },
                  { sign: "Water meter running continuously", icon: AlertCircle },
                  { sign: "Musty or damp odors", icon: AlertCircle },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex gap-3">
                      <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item.sign}</span>
                    </div>
                  )
                })}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                If you notice any of these signs, a hidden leak is likely. The sooner you detect it, the less damage
                occurs. Call us immediately at 060 348 8268 for emergency leak detection.
              </p>

              <h3 className="text-2xl font-bold mb-6">Our Leak Detection Process</h3>
              <ol className="space-y-4 mb-12">
                {[
                  {
                    step: "1. Water Meter Check",
                    desc: "We read your water meter to confirm a leak exists and calculate loss rate.",
                  },
                  {
                    step: "2. Visual Inspection",
                    desc: "Look for visible signs—damp patches, soft ground, vegetation changes.",
                  },
                  {
                    step: "3. Advanced Detection",
                    desc: "Use acoustic sensors, thermal imaging, or tracer gas to locate exact leak position.",
                  },
                  { step: "4. Precise Location", desc: "Mark the leak location precisely on your property." },
                  { step: "5. Repair Planning", desc: "Develop a repair plan and provide cost estimate." },
                  { step: "6. Repair Execution", desc: "Fix the leak with minimal property disruption." },
                  { step: "7. Verification", desc: "Confirm the leak is fixed. Meter reading verification." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold text-primary mb-1">{item.step}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </ol>
            </div>

            <div className="sticky top-24 h-fit">
              <Card className="p-6 bg-accent/5 border-accent mb-6">
                <h3 className="font-bold mb-4">Check Your Water Bill</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Has your water bill increased unexpectedly? Could indicate a hidden leak.
                </p>
                <a
                  href="tel:0603488268"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                >
                  Call For Leak Check
                </a>
                <Link href="/contact" className="w-full">
                  <button className="w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-sm">
                    Request Inspection
                  </button>
                </Link>
              </Card>

              <Card className="p-6 border-2 border-accent">
                <h3 className="font-bold mb-4 text-lg">Average Water Waste</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-accent">Small leak</p>
                    <p className="text-muted-foreground">500-2,000 liters/month</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Medium leak</p>
                    <p className="text-muted-foreground">5,000-15,000 liters/month</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Major leak</p>
                    <p className="text-muted-foreground">20,000+ liters/month</p>
                  </div>
                  <p className="text-xs text-muted-foreground italic pt-3 border-t">
                    Early detection saves thousands in water costs.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Advanced Leak Detection Methods"
        description="We use multiple technologies to locate all types of hidden water leaks."
        services={features}
        columns={4}
      />

      {/* Types of Leaks */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Types of Water Leaks We Find</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Underground/Slab Leaks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Water pipes under concrete slabs and underground can leak without visible signs above ground. Often
                caused by pipe corrosion, ground shifting, or pressure issues.
              </p>
              <p className="text-sm font-semibold text-accent mb-2">Detection Method:</p>
              <p className="text-sm text-muted-foreground">
                Acoustic sensors or tracer gas locate exact position of underground leak.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Wall/In-Pipe Leaks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Leaks within walls are invisible until damage appears. May cause mold, paint peeling, and structural
                damage. Often in older homes with corroding pipes.
              </p>
              <p className="text-sm font-semibold text-accent mb-2">Detection Method:</p>
              <p className="text-sm text-muted-foreground">
                Thermal imaging detects temperature differences from water flow.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Swimming Pool Leaks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Pools lose water naturally through evaporation, but significant loss indicates a leak. Can occur in
                structure, plumbing, or around the perimeter.
              </p>
              <p className="text-sm font-semibold text-accent mb-2">Detection Method:</p>
              <p className="text-sm text-muted-foreground">
                Specialized pool leak detection finds cracks and pipe damage.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Roof/Gutter Leaks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Roof and gutter leaks cause water damage to interior walls and attics. Can be difficult to locate as
                water travels along beams before appearing indoors.
              </p>
              <p className="text-sm font-semibold text-accent mb-2">Detection Method:</p>
              <p className="text-sm text-muted-foreground">
                Visual inspection plus moisture meters identify water damage sources.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Sewage System Leaks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Broken sewage lines cause foul odors, wet ground, and health hazards. Often caused by tree roots or pipe
                deterioration.
              </p>
              <p className="text-sm font-semibold text-accent mb-2">Detection Method:</p>
              <p className="text-sm text-muted-foreground">
                Camera inspection reveals cracks, roots, and misalignments in sewage pipes.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Borehole/Well Leaks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Underground boreholes can lose pressure and water, indicating leaks in the bore casing or delivery
                pipes. Reduces borehole efficiency significantly.
              </p>
              <p className="text-sm font-semibold text-accent mb-2">Detection Method:</p>
              <p className="text-sm text-mibadgeuted-foreground">
                Pressure testing and
                <Link href="/borehole-maintenance" className="text-accent hover:underline">
                  borehole maintenance checks
                </Link>{" "}
                identify loss points.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Prevention & Maintenance */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Prevent Leaks Before They Start</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Preventive Maintenance Tips</h3>
              <ul className="space-y-3">
                {[
                  "Annual professional pipe inspections",
                  "Monitor water bills for unexpected increases",
                  "Check visible pipes regularly for corrosion",
                  "Maintain proper water pressure (40-80 PSI)",
                  "Have older pipes replaced proactively",
                  "Install water pressure regulators if needed",
                  "Insulate pipes to prevent freezing",
                  "Clear drains regularly to prevent backups",
                ].map((tip, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Related Plumbing Services</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Leak detection often leads to other plumbing needs. We offer complete solutions:
              </p>
              <div className="space-y-3 text-sm">
                <Link
                  href="/pipe-repairs"
                  className="flex items-start gap-2 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Pipe Repairs & Replacement</p>
                    <p className="text-muted-foreground text-xs">Fix corroded or damaged pipes</p>
                  </div>
                </Link>

                <Link
                  href="/emergency-plumbing"
                  className="flex items-start gap-2 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Emergency Plumbing</p>
                    <p className="text-muted-foreground text-xs">24/7 urgent repair service</p>
                  </div>
                </Link>

                <Link
                  href="/drain-cleaning"
                  className="flex items-start gap-2 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Drain Cleaning</p>
                    <p className="text-muted-foreground text-xs">Professional drain unblocking</p>
                  </div>
                </Link>

                <Link
                  href="/borehole-maintenance"
                  className="flex items-start gap-2 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Borehole Maintenance</p>
                    <p className="text-muted-foreground text-xs">Keep boreholes running efficiently</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-8">Leak Detection FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-bold mb-3">How much does leak detection cost?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leak detection service: ZAR 800-2,000 depending on property size and detection method needed. If we find
                and repair a leak, detection cost often applies toward repair bill.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">How accurate is leak detection technology?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our advanced equipment locates leaks to within 30cm accuracy. Combined methods provide even greater
                precision. We're confident in leak locations before beginning repairs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">Can I find leaks myself?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You can check water meter and look for visible signs, but hidden leaks require professional equipment.
                Early professional detection prevents major property damage and saves money long-term.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">How long does leak detection take?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Typical service takes 1-3 hours depending on property size and leak complexity. We often locate and mark
                leaks the same day, scheduling repairs immediately.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Suspicious Water Bill? Detect Leaks Immediately"
        description="Advanced leak detection finds hidden leaks before they cause major damage. Call 060 348 8268 for same-day service."
        primaryText="Get Leak Detection Quote"
        primaryHref="/contact"
        secondaryText="Emergency: 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Leak Detection",
            provider: {
              "@type": "Organization",
              name: "Borehole Pros",
              telephone: "060-348-8268",
            },
            areaServed: {
              "@type": "Country",
              name: "South Africa",
            },
          }),
        }}
      />
    </>
  )
}
