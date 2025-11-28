import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Wrench, Phone, CheckCircle2, MapPin, AlertCircle, Droplet } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Plumber Johannesburg | Expert Plumbing Services | Borehole Pros",
  description:
    "Expert plumber in Johannesburg for geyser repairs, leaks, drain cleaning, tap repairs. 15+ years experience. Same-day service. Call 060 348 8268 for free quote.",
  keywords: [
    "plumber johannesburg",
    "johannesburg plumbing",
    "professional plumber",
    "plumbing services johannesburg",
    "local plumber johannesburg",
    "geyser repair johannesburg",
    "tap repairs johannesburg",
  ],
}

const plumbingServices: ServiceItem[] = [
  {
    title: "Geyser Installation & Repair",
    description: "Expert geyser installation, repairs, and maintenance. Energy-efficient solutions for all home types.",
    href: "/geyser-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/geyser-repair.jpg",
  },
  {
    title: "Drain Cleaning & Unblocking",
    description: "Professional drain cleaning using advanced technology. Fast, effective solutions for blocked drains.",
    href: "/drain-cleaning",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency response for burst pipes, leaks, and urgent repairs. Same-day service available.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
  {
    title: "Leak Detection",
    description: "Advanced leak detection to find hidden leaks quickly. Prevent water damage before it starts.",
    href: "/leak-detection",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/leak-detection.jpg",
  },
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
  "Johannesburg CBD",
  "Eastgate",
  "Woodmead",
  "Kyalami",
  "Northgate",
]

export default function PlumberJohannesburgPage() {
  return (
    <>
      <Hero
        title="Expert Plumber Johannesburg | Professional Plumbing Services"
        subtitle="Trusted Local Plumbing | 15+ Years Experience | Same-Day Service"
        description="Johannesburg's most trusted plumber for geyser repairs, drain cleaning, leak detection, and emergency plumbing. Professional, certified technicians. Call 060 348 8268 for free quote."
        imageSrc="/images/team-working.jpg"
        cta={{
          primary: { text: "Get Free Johannesburg Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Comprehensive Johannesburg Plumbing Solutions"
        description="Whether you need geyser repair, drain cleaning, emergency plumbing, or leak detection, our expert plumbers deliver fast, professional service across Johannesburg."
        services={plumbingServices}
        columns={4}
      />

      {/* Comprehensive Plumbing Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Why Johannesburg Residents Choose Our Plumbers
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Finding a reliable, professional plumber in Johannesburg is crucial for maintaining your home or
                  business. With over 15 years of experience serving the Johannesburg area, Borehole Pros has built a
                  reputation as the city's most trusted plumbing service. We've completed thousands of successful
                  plumbing projects across Sandton, Midrand, Randburg, and every major suburb in Johannesburg.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our team of certified, experienced plumbers understands Johannesburg's unique plumbing challenges.
                  From dealing with older municipal systems in established suburbs to modern high-rise plumbing in areas
                  like Sandton, we've seen it all. Whether you need geyser installation, drain cleaning, emergency
                  repairs, or preventative maintenance, we bring professional expertise to every job.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  What sets us apart is our commitment to transparency. We provide free site assessments, honest quotes
                  with no hidden fees, and clear explanations of what needs to be done and why. We never upsell
                  unnecessary services. Our goal is to be your trusted plumbing partner for years to come, whether it's
                  routine maintenance or emergency repairs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our emergency plumbing service is available 24/7 because we know plumbing problems don't follow
                  business hours. Burst pipes at midnight, geyser failure on Sunday, sewage backup during a dinner
                  party—we're here to help. With response times of 30-90 minutes depending on location, we minimize
                  water damage and get your plumbing back to normal fast.
                </p>
              </div>

              {/* Why Choose Us Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    15+ Years Johannesburg Experience
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Deep knowledge of Johannesburg's plumbing systems, municipal requirements, and local geology. We've
                    completed 2,000+ projects across the region.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Certified & Insured Plumbers
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All technicians are fully certified professionals. Comprehensive insurance coverage protects you.
                    All work backed by warranty.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    24/7 Emergency Response
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Available anytime for burst pipes, leaks, blocked drains, and urgent repairs. 30-90 minute response
                    in most Johannesburg areas.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Transparent Pricing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Free quotes. No hidden fees. Competitive pricing. We explain exactly what needs doing and why before
                    any work begins.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Advanced Diagnostic Equipment
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We use modern technology to quickly identify problems. This means faster repairs, lower costs, and
                    fewer repeat visits.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Same-Day Service Available
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    For urgent plumbing needs in central Johannesburg, we often complete same-day appointments. Call to
                    check availability.
                  </p>
                </div>
              </div>

              {/* Detailed Services Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/geyser-installation" className="hover:text-accent transition-colors">
                      Professional Geyser Installation & Repair in Johannesburg
                    </Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Your geyser is one of your home's most important appliances. When it fails, you lose access to hot
                    water—an unacceptable situation. Our expert plumbers install, repair, and maintain all types of
                    geysers including electric geysers, gas geysers, and solar systems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    If your geyser is over 10 years old, we recommend replacement with a modern, energy-efficient model.
                    Modern geysers use 30-40% less energy than older units, reducing your monthly electricity bill
                    significantly. A standard electric geyser replacement in Johannesburg costs ZAR 4,500-8,500
                    depending on capacity and location. Solar geysers (ZAR 15,000-25,000) offer even greater long-term
                    savings and environmental benefits.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Common geyser problems we fix include burst geysers, leaking connections, no hot water, slow
                    heating, and pressure relief valve issues. We diagnose quickly and provide honest
                    recommendations—sometimes repair is cheaper, sometimes replacement is better value.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/drain-cleaning" className="hover:text-accent transition-colors">
                      Expert Drain Cleaning & Unblocking Services
                    </Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Blocked drains are one of the most common plumbing problems in Johannesburg. Whether it's slow
                    drainage in the shower, backed-up kitchen sinks, or sewage odors, our drain cleaning specialists
                    solve the problem quickly and professionally.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We use advanced cleaning technology including high-pressure water jetting and drain cameras to
                    identify blockages and remove them effectively. A basic drain cleaning service in Johannesburg costs
                    ZAR 1,200-2,500 depending on severity. Stubborn blockages may require additional work, which we
                    quote separately.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Prevention is key—we recommend regular drain maintenance to prevent future blockages. Simple steps
                    like drain screens, avoiding grease disposal, and regular flushing can prevent costly emergency
                    repairs down the line.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/emergency-plumbing" className="hover:text-accent transition-colors">
                      24/7 Emergency Plumbing Service in Johannesburg
                    </Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Plumbing emergencies happen when you least expect them. Burst pipes, major leaks, sewage
                    backups—these situations need immediate professional response. Our 24/7 emergency plumbing team is
                    always ready to dispatch to your Johannesburg location.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Emergency call-out fees are ZAR 800-1,500 depending on time of day and location (night rates higher
                    than day rates). Once we assess the problem, we provide a quote for repair work. Most emergency
                    repairs are completed same-day or within 24 hours.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For burst pipes specifically, immediate action prevents thousands in water damage. Turn off water at
                    the main, then call us. We'll have a technician at your door quickly to make temporary repairs and
                    arrange permanent solutions.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    <Link href="/leak-detection" className="hover:text-accent transition-colors">
                      Advanced Leak Detection Technology
                    </Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Hidden water leaks can waste thousands of liters of water annually and cause structural damage
                    before you even notice. Our advanced leak detection technology identifies hidden leaks quickly,
                    minimizing water waste and damage.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Leak detection services cost ZAR 1,500-3,500 depending on property size and complexity. Once we
                    locate the leak, we provide repair options and costs. Prevention is always cheaper than damage
                    repair—if you notice unusually high water bills, request a leak detection service immediately.
                  </p>
                </div>
              </div>

              {/* Pricing Table */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Johannesburg Plumbing Service Pricing Guide</h3>
                <div className="bg-muted rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-accent text-accent-foreground">
                        <th className="p-4 text-left font-bold">Service</th>
                        <th className="p-4 text-left font-bold">Typical Cost</th>
                        <th className="p-4 text-left font-bold">Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4">Geyser Installation (Electric)</td>
                        <td className="p-4 font-semibold">ZAR 4,500 - 8,500</td>
                        <td className="p-4">1-2 days</td>
                      </tr>
                      <tr>
                        <td className="p-4">Geyser Repair/Replacement Part</td>
                        <td className="p-4 font-semibold">ZAR 800 - 3,500</td>
                        <td className="p-4">Same-day available</td>
                      </tr>
                      <tr>
                        <td className="p-4">Drain Cleaning (Standard)</td>
                        <td className="p-4 font-semibold">ZAR 1,200 - 2,500</td>
                        <td className="p-4">1-2 hours</td>
                      </tr>
                      <tr>
                        <td className="p-4">Drain Cleaning (Complex)</td>
                        <td className="p-4 font-semibold">ZAR 2,500 - 5,000</td>
                        <td className="p-4">2-4 hours</td>
                      </tr>
                      <tr>
                        <td className="p-4">Emergency Call-out Fee (Day)</td>
                        <td className="p-4 font-semibold">ZAR 800 - 1,200</td>
                        <td className="p-4">30-90 minutes</td>
                      </tr>
                      <tr>
                        <td className="p-4">Emergency Call-out Fee (Night)</td>
                        <td className="p-4 font-semibold">ZAR 1,500 - 2,500</td>
                        <td className="p-4">30-90 minutes</td>
                      </tr>
                      <tr>
                        <td className="p-4">Leak Detection Service</td>
                        <td className="p-4 font-semibold">ZAR 1,500 - 3,500</td>
                        <td className="p-4">1-2 hours</td>
                      </tr>
                      <tr>
                        <td className="p-4">Tap Repair/Installation</td>
                        <td className="p-4 font-semibold">ZAR 500 - 1,500</td>
                        <td className="p-4">30-60 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  *Prices are estimates and may vary based on specific requirements. Free quote provided after
                  assessment.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-accent/5 border-accent mb-6">
                  <h3 className="font-bold mb-4 text-lg">Johannesburg Service Areas</h3>
                  <div className="space-y-2 mb-6">
                    {johannesburgAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Plus surrounding suburbs. Call 060 348 8268 to confirm availability.
                  </p>
                </Card>

                <Card className="p-6 border-2 border-accent mb-6">
                  <h3 className="font-bold mb-4">Quick Contact</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center gap-2 w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors"
                  >
                    WhatsApp Quote
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-3 text-lg">Why Choose Us?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>15+ years experience</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>2,000+ jobs completed</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>24/7 emergency available</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Certified & insured</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>No hidden fees</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Johannesburg Plumber FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How quickly can you respond to plumbing problems?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For standard plumbing needs, we typically schedule within 24 hours. For emergencies like burst pipes or
                sewage backups, we respond within 30-90 minutes depending on your Johannesburg location. Call 060 348
                8268 immediately for emergencies.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What's the cost of geyser replacement in Johannesburg?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Standard electric geyser installation costs ZAR 4,500-8,500. Solar geysers (ZAR 15,000-25,000) offer
                long-term savings. We provide free quotes after assessing your home and understanding your hot water
                needs. Some installations qualify for rebates or payment plans.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How do I know if I have a hidden water leak?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Signs include unusually high water bills, damp patches on walls or ceilings, water pooling in the yard,
                or mold growth. If you notice any of these, request a professional leak detection service immediately.
                Hidden leaks can waste thousands of liters annually.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How often should I have my drains cleaned?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For most Johannesburg homes, annual drain maintenance prevents blockages. If you have recurring drain
                problems, quarterly cleaning may be beneficial. We can recommend a preventative maintenance schedule
                during your initial consultation.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Do you offer warranty on plumbing work?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! All our plumbing work includes a 12-month workmanship warranty. This covers defects from our
                installation. For parts, we offer manufacturer warranties (typically 2-5 years depending on the
                component).
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">Do you service all of Johannesburg?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We service Johannesburg, including Sandton, Midrand, Randburg, Bryanston, Rosebank, Sunninghill, and
                surrounding areas. Call 060 348 8268 to confirm service availability in your specific suburb.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">What's your emergency plumbing call-out fee?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Day emergency call-out: ZAR 800-1,200. Night emergency call-out (22:00-06:00): ZAR 1,500-2,500. This fee
                covers dispatch and initial assessment. Repair costs are quoted separately.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg">How much water can I save with leak detection?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A small hidden leak wastes 200+ liters daily (6,000+ liters monthly). At Johannesburg water rates, this
                costs ZAR 300-500+ monthly. Early leak detection pays for itself within weeks through water savings.
              </p>
            </Card>
          </div>

          {/* Internal Linking Section */}
          <div className="bg-background p-8 rounded-lg">
            <h3 className="font-bold mb-6 text-lg">Related Services & Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-accent">Plumbing Services</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/geyser-installation" className="text-foreground hover:text-accent font-semibold">
                      Geyser Installation & Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/drain-cleaning" className="text-foreground hover:text-accent font-semibold">
                      Drain Cleaning & Unblocking
                    </Link>
                  </li>
                  <li>
                    <Link href="/emergency-plumbing" className="text-foreground hover:text-accent font-semibold">
                      24/7 Emergency Plumbing
                    </Link>
                  </li>
                  <li>
                    <Link href="/leak-detection" className="text-foreground hover:text-accent font-semibold">
                      Leak Detection Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-accent">Borehole Services</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/borehole-drilling" className="text-foreground hover:text-accent font-semibold">
                      Borehole Drilling
                    </Link>
                  </li>
                  <li>
                    <Link href="/borehole-drilling-cost" className="text-foreground hover:text-accent font-semibold">
                      Borehole Drilling Cost Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/johannesburg" className="text-foreground hover:text-accent font-semibold">
                      Services in Johannesburg
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-accent">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/contact" className="text-foreground hover:text-accent font-semibold">
                      Get Free Quote
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-foreground hover:text-accent font-semibold">
                      About Borehole Pros
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-foreground hover:text-accent font-semibold">
                      All Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Final CTA */}
      <CTASection
        title="Ready for Expert Plumbing Service in Johannesburg?"
        description="Get a free quote and fast service. Same-day appointments often available. Call us now or send a message for a callback within 1 hour."
        primaryText="Get Free Johannesburg Quote"
        primaryHref="/contact"
        secondaryText="Call Now: 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Borehole Pros - Johannesburg Plumber",
            description:
              "Expert plumber in Johannesburg for geyser repairs, drain cleaning, emergency plumbing, and leak detection",
            url: "https://boreholepros.co.za/plumber-johannesburg",
            telephone: "060-348-8268",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: johannesburgAreas,
            serviceArea: {
              "@type": "City",
              name: "Johannesburg",
            },
            priceRange: "ZAR",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150",
            },
          }),
        }}
      />
    </>
  )
}
