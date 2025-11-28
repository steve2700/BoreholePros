import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Wrench, AlertCircle, Droplet } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Drain Cleaning Services SA | Same-Day Service | Borehole Pros",
  description:
    "Expert drain cleaning and unblocking services across South Africa. Fast, professional service. Blocked drains, root removal, pipe clearing. Call 060 348 8268.",
  keywords: [
    "drain cleaning",
    "blocked drain",
    "drain unblocking",
    "pipe cleaning",
    "root removal",
    "sewage drain",
    "emergency drain",
  ],
  openGraph: {
    title: "Professional Drain Cleaning Services SA | Borehole Pros",
    description: "Expert drain cleaning and unblocking. Same-day service available.",
    url: "https://boreholepros.co.za/drain-cleaning",
    type: "website",
  },
  alternates: {
    canonical: "https://boreholepros.co.za/drain-cleaning",
  },
}

const features: ServiceItem[] = [
  {
    title: "Emergency Drain Unblocking",
    description: "Fast response to blocked drains. Professional equipment to clear blockages quickly.",
    href: "#",
  },
  {
    title: "Root Removal",
    description: "Tree roots clogging your drains? We remove roots and repair damaged pipes.",
    href: "#",
  },
  {
    title: "Drain Camera Inspection",
    description: "Advanced camera systems to identify problems inside pipes. Accurate diagnosis.",
    href: "#",
  },
  {
    title: "Pipe Cleaning",
    description: "High-pressure jetting clears buildup and debris from pipes. Restores proper flow.",
    href: "#",
  },
]

export default function DrainCleaningPage() {
  return (
    <>
      <Hero
        title="Professional Drain Cleaning & Unblocking Services"
        subtitle="Fast Service | Advanced Equipment | Expert Technicians"
        description="Blocked drains? We've got the solution. Professional drain cleaning across South Africa. Same-day service in most areas. Emergency response available 24/7."
        imageSrc="/images/team-working.jpg"
        cta={{
          primary: { text: "Get Drain Cleaning Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Expert Drain Cleaning & Unblocking Service
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Blocked drains are one of the most frustrating plumbing problems, affecting your entire household.
                Whether it's a slow kitchen sink, backed-up bathroom, or complete sewage blockage, Borehole Pros has the
                expertise and equipment to resolve it quickly and permanently.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We've unblocked thousands of drains across South Africa using advanced diagnostic equipment and proven
                techniques. Our team identifies the root cause—pun intended—whether it's accumulated grease, tree roots,
                or structural pipe damage. Once diagnosed, we apply the right solution to restore full drainage.
              </p>

              <h3 className="text-2xl font-bold mb-6 mt-12">Why Professional Drain Cleaning Matters</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many people attempt DIY drain cleaning with plungers, store-bought chemical drain cleaners, or drain
                snakes. While these might provide temporary relief, they often fail to solve the underlying problem.
                Harsh chemicals can damage pipes, and DIY methods might only clear the surface blockage while leaving
                the real problem deeper in the pipe system.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional drain cleaning gets to the root of the problem. We use high-pressure water jetting, drain
                cameras, and specialized equipment to clear blockages completely and inspect pipes for damage. This
                prevents the drain from backing up again in two weeks and saves you money on repeated repairs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Advanced Equipment
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Professional drain cameras, high-pressure jets, and specialized tools. No guessing—we see exactly
                    what's causing the blockage.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-accent" />
                    Permanent Solutions
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We don't just clear blockages—we identify and fix the underlying cause to prevent future problems.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Emergency Response
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Blocked sewage line? We respond quickly. Same-day service in most areas. Call 060 348 8268
                    immediately.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-accent" />
                    Pipe Safe
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    No harsh chemicals. High-pressure water jetting clears blockages without damaging pipes.
                  </p>
                </div>
              </div>
            </div>

            <div className="sticky top-24 h-fit">
              <Card className="p-6 bg-accent/5 border-accent mb-6">
                <h3 className="font-bold mb-4">24/7 Emergency Service</h3>
                <a
                  href="tel:0603488268"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                >
                  060 348 8268
                </a>
                <Link href="/contact" className="w-full">
                  <button className="w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-sm">
                    Request Quote
                  </button>
                </Link>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4 text-lg">Typical Drain Issues</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Slow kitchen sinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Bathroom backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sewage odors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Tree root damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Grease buildup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Blocked toilets</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Complete Drain Cleaning Services"
        description="From emergency unblocking to preventive maintenance, we handle all drain issues."
        services={features}
        columns={4}
      />

      {/* Common Drain Problems */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Common Drain Problems & Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Grease Buildup (Kitchen Drains)</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Cooking oils and grease accumulate in pipes, creating stubborn blockages. Over time, grease hardens and
                reduces water flow.
              </p>
              <p className="text-sm font-semibold text-accent">Solution:</p>
              <p className="text-sm text-muted-foreground">
                High-pressure hot water jetting dissolves grease and clears pipes completely.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Tree Roots (Sewage Lines)</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Tree roots seek water and can penetrate sewage pipes, causing blockages and pipe damage. More common in
                homes with older clay pipes.
              </p>
              <p className="text-sm font-semibold text-accent">Solution:</p>
              <p className="text-sm text-muted-foreground">
                Root removal with specialized equipment. May require pipe repair or replacement in severe cases.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Hair & Soap Buildup (Bathroom)</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Hair combined with soap residue creates blockages in shower and bathroom drains. Over time, layers
                accumulate and reduce drainage.
              </p>
              <p className="text-sm font-semibold text-accent">Solution:</p>
              <p className="text-sm text-muted-foreground">
                Drain cleaning with camera inspection to ensure complete blockage removal.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Pipe Damage & Misalignment</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Shifted or cracked pipes cause water to pool and debris to accumulate. Often results from ground
                settling or tree roots.
              </p>
              <p className="text-sm font-semibold text-accent">Solution:</p>
              <p className="text-sm text-muted-foreground">
                Drain camera inspection reveals damage. May require pipe repair or relining.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Foreign Objects</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Toys, sanitary products, or other objects accidentally flushed cause blockages. Most common in homes
                with children.
              </p>
              <p className="text-sm font-semibold text-accent">Solution:</p>
              <p className="text-sm text-muted-foreground">
                Drain snake or camera retrieval. Obstruction safely removed without damage.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Mineral Buildup (Hard Water)</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Hard water deposits calcium and minerals on pipe interiors, reducing flow over time. More common in
                certain areas.
              </p>
              <p className="text-sm font-semibold text-accent">Solution:</p>
              <p className="text-sm text-muted-foreground">
                Descaling or chemical cleaning removes mineral deposits. Water softening recommended.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Preventive Drain Maintenance</h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            The best way to avoid expensive drain problems is regular preventive maintenance. Simple steps can prevent
            90% of drain blockages:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Prevention Tips</h3>
              <ul className="space-y-3">
                {[
                  "Don't pour grease down kitchen drains—let it cool and dispose in trash",
                  "Use drain screens to catch hair and debris",
                  "Flush only toilet paper and human waste",
                  "Run hot water regularly to keep pipes clear",
                  "Avoid chemical drain cleaners—they damage pipes",
                  "Have drains inspected annually",
                  "Don't plant trees near sewage lines",
                  "Address slow drains immediately before they get worse",
                ].map((tip, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Related Services</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Drain problems often indicate broader plumbing issues. We offer complete solutions:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/emergency-plumbing" className="text-accent hover:underline font-semibold">
                    Emergency Plumbing Service
                  </Link>
                </li>
                <li>
                  <Link href="/leak-detection" className="text-accent hover:underline font-semibold">
                    Leak Detection & Repair
                  </Link>
                </li>
                <li>
                  <Link href="/pipe-repairs" className="text-accent hover:underline font-semibold">
                    Pipe Repairs & Replacement
                  </Link>
                </li>
                <li>
                  <Link href="/toilet-repairs" className="text-accent hover:underline font-semibold">
                    Toilet Repairs & Installation
                  </Link>
                </li>
                <li>
                  <Link href="/geyser-installation" className="text-accent hover:underline font-semibold">
                    Geyser Installation & Repair
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-8">Drain Cleaning FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-bold mb-3">How much does drain cleaning cost?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Simple drain unblocking: ZAR 500-1,500. Drain camera inspection: ZAR 800-1,200. Root removal: ZAR
                2,000-5,000+. Free quote after assessment.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">Is drain jetting safe for old pipes?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                High-pressure jetting is safe when done by professionals who understand pipe conditions. We assess pipe
                age and material before jetting to prevent damage.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">Can I use store-bought drain cleaners?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We don't recommend harsh chemical drain cleaners. They can damage pipes and are ineffective for serious
                blockages. Professional cleaning is safer and more effective.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">How often should drains be professionally cleaned?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most homes benefit from professional drain cleaning every 1-2 years. Homes with tree roots nearby or
                recurring problems may need more frequent cleaning.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Blocked Drain? We Solve It Fast"
        description="Professional drain cleaning with advanced equipment. Same-day service in most areas. Emergency response 24/7."
        primaryText="Get Drain Cleaning Quote"
        primaryHref="/contact"
        secondaryText="Call Now: 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Drain Cleaning",
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
