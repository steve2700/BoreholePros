import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Wrench, CheckCircle2, Phone, AlertCircle, Droplet, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Pipe Repair Services | Burst Pipes, Leaks & Emergency Repairs",
  description:
    "Professional pipe repair services across South Africa. Burst pipes, leaks, corrosion repairs. 24/7 emergency response in Johannesburg, Cape Town, Pretoria, Durban. Call 060 348 8268.",
  keywords:
    "pipe repairs, burst pipe repair, pipe leak repair, emergency pipe repair, plumbing repairs, pipe replacement, leak detection",
  openGraph: {
    title: "Professional Pipe Repair Services | 24/7 Emergency Response",
    description: "Expert pipe repairs for burst pipes and leaks. Fast response across South Africa.",
  },
}

const services: ServiceItem[] = [
  {
    title: "Burst Pipe Repairs",
    description: "Emergency burst pipe repair with fast response. Stop water damage immediately.",
    href: "/burst-pipe-repair",
    icon: <AlertCircle className="w-8 h-8" />,
    image: "/images/burst-pipe.jpg",
    highlight: true,
  },
  {
    title: "Leak Detection & Repair",
    description: "Advanced leak detection technology locating hidden leaks without excavation.",
    href: "/leak-detection",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/leak-detection.jpg",
  },
  {
    title: "Pipe Replacement",
    description: "Complete pipe replacement for corroded or damaged plumbing systems.",
    href: "/pipe-replacement",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/pipe-replacement.jpg",
  },
]

export default function PipeRepairsPage() {
  return (
    <>
      <Hero
        title="Professional Pipe Repair Services Across South Africa"
        subtitle="24/7 Emergency Response | Burst Pipes | Leak Detection | Fast Repairs"
        description="Expert pipe repair services for residential and commercial properties. We fix burst pipes, leaking pipes, and corroded plumbing across Johannesburg, Cape Town, Pretoria, and Durban. Emergency response available 24/7. Call 060 348 8268."
        imageSrc="/images/pipe-repairs.jpg"
        cta={{
          primary: { text: "Get Emergency Repair", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Pipe Repair Solutions"
        description="From emergency burst pipe repairs to planned pipe replacement, we provide comprehensive plumbing repair services across South Africa."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Expert Pipe Repair Services - Fast Response Across South Africa
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Pipe failures cause significant property damage, water wastage, and disruption to daily life. Whether
                  you're dealing with a catastrophic burst pipe flooding your property or a slow leak gradually damaging
                  walls and foundations, professional pipe repair services are essential. Borehole Pros provides expert
                  pipe repair across South Africa's major cities—responding within hours to emergencies and delivering
                  permanent repairs that last decades.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our experienced plumbers have completed over 2,500 pipe repairs since 2009, handling everything from
                  minor leaks to complete plumbing system replacements. We service residential properties, commercial
                  buildings, and industrial facilities across Johannesburg, Cape Town, Pretoria, and Durban. Every
                  repair uses quality materials and professional techniques ensuring long-term reliability.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Emergency Burst Pipe Repair Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Burst pipes are plumbing emergencies requiring immediate response. Water flowing from burst pipes
                  causes thousands of rands in damage per hour—destroying flooring, damaging electrical systems, and
                  compromising structural integrity. Our emergency response team operates 24/7 across all major cities,
                  arriving within 1-3 hours of your call.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Common causes of burst pipes include freezing temperatures in winter (particularly in Johannesburg and
                  Pretoria), excessive water pressure damaging older pipes, corrosion weakening pipe walls over decades,
                  and ground movement cracking rigid pipes. When pipes burst, immediate action is critical. Our
                  emergency protocol includes shutting off water supply to stop flooding, temporary repairs containing
                  damage, water extraction if needed, and permanent repairs completed same-day when possible.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Burst pipe repairs typically cost ZAR 1,200-3,500 depending on pipe size, location, and damage extent.
                  Emergency callouts include a ZAR 850-1,200 diagnostic fee credited toward repairs. For severe bursts
                  requiring extensive pipe replacement, costs range from ZAR 3,500-8,000. We provide transparent quotes
                  before starting work and work with insurance companies for claims processing.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Leak Detection and Repair</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Hidden leaks are insidious problems—wasting water, increasing bills, and causing gradual property
                  damage. Many leaks occur underground or inside walls, making detection challenging without specialized
                  equipment. We use advanced leak detection technology including acoustic listening devices that hear
                  water escaping pipes, thermal imaging cameras detecting temperature changes from leaks, and pressure
                  testing isolating leak locations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Signs you have hidden leaks include unexplained water bill increases (20%+ higher than normal),
                  running water sounds when all taps are closed, damp patches on walls or ceilings, musty odors
                  indicating mold growth, and foundation cracks from soil erosion. Early leak detection prevents
                  extensive damage—a small leak ignored for months can cause ZAR 15,000-40,000 in structural repairs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our leak detection service costs ZAR 950-1,800 depending on property size and leak complexity. Once
                  located, repairs range from ZAR 800-2,500 for accessible leaks to ZAR 3,000-6,500 for underground or
                  in-wall repairs requiring excavation or wall opening. We use minimally invasive techniques when
                  possible, preserving your property's appearance while fixing leaks permanently.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pipe Corrosion and Replacement Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Older properties often have corroded galvanized steel pipes installed 30-50 years ago. These pipes
                  gradually rust from inside, restricting water flow, discoloring water, and eventually failing
                  completely. Signs your pipes need replacement include rusty or brown-colored water, dramatically
                  reduced water pressure, frequent leaks in multiple locations, and visible corrosion on exposed pipes.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We recommend complete pipe replacement when corrosion is widespread—repair costs accumulate quickly
                  with multiple leak repairs, while replacement provides decades of trouble-free operation. Modern pipe
                  materials we install include copper pipes (premium choice, 50+ year lifespan, excellent for hot and
                  cold water), PEX (cross-linked polyethylene) flexible pipes resistant to corrosion and freezing, and
                  CPVC (chlorinated polyvinyl chloride) for budget-friendly hot water applications.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Complete residential pipe replacement costs vary by property size: small homes (2 bedroom) ZAR
                  18,000-28,000, medium homes (3-4 bedroom) ZAR 28,000-45,000, and large homes (4+ bedroom) ZAR
                  45,000-75,000. Commercial pipe replacement is quoted per project based on system complexity. We work
                  section-by-section minimizing disruption, often completing residential replacements in 3-5 days.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pipe Repair Services in Major South African Cities</h3>

                <p className="text-muted-foreground leading-relaxed">
                  We provide comprehensive pipe repair services across South Africa's major metropolitan areas, with
                  local teams familiar with each region's specific plumbing challenges:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Johannesburg Pipe Repairs</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Serving Johannesburg and surrounding areas including Sandton, Randburg, Roodepoort, and East
                          Rand. Our Johannesburg team handles high-rise buildings, residential estates, and commercial
                          properties. Winter burst pipe repairs are common due to freezing temperatures.
                        </p>
                        <div className="space-y-1 text-xs">
                          <Link href="/plumber-johannesburg" className="text-accent hover:underline block">
                            → Professional Plumbers in Johannesburg
                          </Link>
                          <Link href="/emergency-plumber" className="text-accent hover:underline block">
                            → 24/7 Emergency Plumber Services
                          </Link>
                          <Link href="/blocked-drain-services" className="text-accent hover:underline block">
                            → Blocked Drain Cleaning Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Cape Town Pipe Repairs</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Covering Cape Town, Northern Suburbs, Southern Suburbs, and Atlantic Seaboard. Our Cape Town
                          specialists handle coastal corrosion issues and older Victorian-era plumbing systems requiring
                          sensitive restoration.
                        </p>
                        <div className="space-y-1 text-xs">
                          <Link href="/cape-town/pipe-repairs" className="text-accent hover:underline block">
                            → Cape Town Pipe Repair Services
                          </Link>
                          <Link href="/cape-town/emergency-plumbing" className="text-accent hover:underline block">
                            → Emergency Plumbing Cape Town
                          </Link>
                          <Link href="/geyser-installation" className="text-accent hover:underline block">
                            → Geyser Installation & Repairs
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Pretoria Pipe Repairs</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Serving Pretoria, Centurion, and surrounding Tshwane metropolitan areas. Our Pretoria team
                          specializes in government buildings, educational institutions, and residential properties
                          across diverse neighborhoods.
                        </p>
                        <div className="space-y-1 text-xs">
                          <Link href="/pretoria/pipe-repairs" className="text-accent hover:underline block">
                            → Pretoria Pipe Repair Services
                          </Link>
                          <Link href="/pretoria/drain-cleaning" className="text-accent hover:underline block">
                            → Professional Drain Cleaning
                          </Link>
                          <Link href="/emergency-plumbing" className="text-accent hover:underline block">
                            → 24/7 Emergency Response
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Durban Pipe Repairs</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Covering Durban, Umhlanga, Westville, and coastal KwaZulu-Natal. Our Durban specialists
                          address humidity-related corrosion and tropical climate plumbing challenges unique to coastal
                          regions.
                        </p>
                        <div className="space-y-1 text-xs">
                          <Link href="/durban/pipe-repairs" className="text-accent hover:underline block">
                            → Durban Pipe Repair Services
                          </Link>
                          <Link href="/durban/leak-detection" className="text-accent hover:underline block">
                            → Professional Leak Detection
                          </Link>
                          <Link href="/drain-cleaning-general" className="text-accent hover:underline block">
                            → Drain Cleaning Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Common Pipe Problems We Repair</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our experienced plumbers handle all types of pipe failures and plumbing issues:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Burst pipes from freezing:</strong> Common in Johannesburg and Pretoria winters,
                      requiring immediate repair
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Corroded galvanized pipes:</strong> Older homes with rusty water and low pressure needing
                      replacement
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Hidden underground leaks:</strong> Advanced detection locating leaks without excavating
                      entire yards
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Slab leaks under foundations:</strong> Specialized repairs accessing pipes beneath
                      concrete slabs
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Joint failures and connections:</strong> Repairing leaking joints and threaded
                      connections
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Tree root damage:</strong> Removing invasive roots and repairing damaged underground
                      pipes
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Water hammer damage:</strong> Installing arrestors and repairing pipes damaged by
                      pressure surges
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Pipe Repair Process</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our systematic repair process ensures quality results and lasting repairs:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>1. Emergency Response and Assessment:</strong> For emergencies, we arrive within 1-3 hours
                  and immediately stop water flow preventing further damage. We assess the extent of pipe damage,
                  identify root causes, and determine whether repair or replacement is most cost-effective.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>2. Transparent Quoting:</strong> Before starting work, we provide detailed quotes outlining
                  materials needed, labor costs, and timeline. For insurance claims, we provide comprehensive
                  documentation supporting your claim.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>3. Professional Repairs:</strong> Using quality materials and proven techniques, we complete
                  repairs to high standards. All work is pressure-tested ensuring leak-free operation before completion.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>4. Cleanup and Restoration:</strong> We clean work areas thoroughly and restore affected
                  spaces to pre-damage condition when possible. For extensive damage requiring renovation, we
                  coordinate with contractors.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pipe Repair Costs and Pricing</h3>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Typical Pipe Repair Pricing</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Minor leak repairs: ZAR 800-1,500</li>
                    <li>• Burst pipe emergency repairs: ZAR 1,200-3,500</li>
                    <li>• Underground leak detection: ZAR 950-1,800</li>
                    <li>• Hidden leak repairs (in-wall or underground): ZAR 3,000-6,500</li>
                    <li>• Pipe section replacement (2-5 meters): ZAR 2,500-5,500</li>
                    <li>• Complete home re-piping: ZAR 18,000-75,000</li>
                    <li>• Emergency callout fee: ZAR 850-1,200 (credited toward repairs)</li>
                    <li className="text-xs pt-2 italic">
                      Prices vary by location, pipe material, and job complexity
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros for Pipe Repairs</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">24/7 Emergency Response</p>
                    <p className="text-xs text-muted-foreground">
                      Available around the clock across all major cities. Arrive within 1-3 hours for emergencies.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">2,500+ Repairs Completed</p>
                    <p className="text-xs text-muted-foreground">
                      Proven track record since 2009. Experience with all pipe materials and repair scenarios.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Advanced Detection Technology</p>
                    <p className="text-xs text-muted-foreground">
                      Acoustic and thermal imaging equipment locates hidden leaks without unnecessary excavation.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Quality Materials</p>
                    <p className="text-xs text-muted-foreground">
                      We use premium copper, PEX, and CPVC pipes with manufacturer warranties for lasting repairs.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Transparent Pricing</p>
                    <p className="text-xs text-muted-foreground">
                      Detailed quotes before work begins. No hidden costs or surprise charges.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Warranty Coverage</p>
                    <p className="text-xs text-muted-foreground">
                      12-month warranty on all repairs and workmanship. Extended warranties on pipe replacements.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Preventing Future Pipe Problems</h3>

                <p className="text-muted-foreground leading-relaxed">
                  While we excel at repairs, prevention is better than emergency fixes. Regular plumbing inspections
                  identify problems before they cause damage. We recommend annual inspections for properties over 20
                  years old, particularly those with original galvanized pipes. Inspections cost ZAR 600-950 and often
                  prevent ZAR 5,000-15,000 in emergency repairs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Winter pipe protection is essential in Johannesburg and Pretoria where freezing temperatures burst
                  exposed pipes. We install pipe insulation, heat trace cables for vulnerable pipes, and frost-proof
                  hose bibs preventing costly winter damage. Pressure regulation also prevents pipe stress—we install
                  pressure reducing valves when municipal pressure exceeds 500 kPa.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Repair Pricing Guide</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Minor Leak Repairs</p>
                      <p className="text-muted-foreground">ZAR 800-1,500</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Burst Pipe Emergency</p>
                      <p className="text-muted-foreground">ZAR 1,200-3,500</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Leak Detection</p>
                      <p className="text-muted-foreground">ZAR 950-1,800</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Complete Re-piping</p>
                      <p className="text-muted-foreground">ZAR 18,000-75,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Emergency Response</p>
                      <p className="text-muted-foreground">1-3 hours citywide</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Emergency Pipe Repair</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-3">24/7 emergency response available</p>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    WhatsApp Emergency
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-3 text-sm">Cities We Serve</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/plumber-johannesburg" className="hover:underline">
                        Johannesburg & East Rand
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/cape-town" className="hover:underline">
                        Cape Town & Suburbs
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/pretoria" className="hover:underline">
                        Pretoria & Centurion
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/durban" className="hover:underline">
                        Durban & KZN Coast
                      </Link>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
            Related Plumbing Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/emergency-plumber" className="hover:text-accent transition-colors">
                  Emergency Plumbing Services
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                24/7 emergency plumber response for burst pipes, major leaks, and urgent plumbing failures across all
                major cities.
              </p>
              <Link href="/emergency-plumber" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/blocked-drain-services" className="hover:text-accent transition-colors">
                  Blocked Drain Cleaning
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Professional drain cleaning services clearing blockages in sinks, toilets, and main sewer lines with
                specialized equipment.
              </p>
              <Link href="/blocked-drain-services" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/geyser-installation" className="hover:text-accent transition-colors">
                  Geyser Installation & Repair
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete geyser services including installation, repairs, and replacements for electric and solar water
                heating systems.
              </p>
              <Link href="/geyser-installation" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Need Emergency Pipe Repairs?"
        description="Our expert plumbers are available 24/7 for emergency pipe repairs across South Africa. Fast response times, quality workmanship, and transparent pricing guaranteed."
        primaryCTA={{ text: "Call: 060 348 8268", href: "tel:0603488268" }}
        secondaryCTA={{ text: "Request Quote", href: "/contact" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Professional Pipe Repair Services",
            description: "Expert pipe repair services for burst pipes, leaks, and corrosion. 24/7 emergency response across South Africa including Johannesburg, Cape Town, Pretoria, and Durban.",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Pros",
              telephone: "060-348-8268",
              url: "https://boreholepros.co.za",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Johannesburg",
              },
              {
                "@type": "City",
                name: "Cape Town",
              },
              {
                "@type": "City",
                name: "Pretoria",
              },
              {
                "@type": "City",
                name: "Durban",
              },
            ],
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+27-60-348-8268",
                contactType: "Emergency Service",
                availableLanguage: "English",
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Pipe Repair Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Minor Leak Repairs",
                    description: "Professional repair of minor pipe leaks in accessible locations",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "800",
                    maxPrice: "1500",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Burst Pipe Emergency Repairs",
                    description: "Emergency burst pipe repair with fast 1-3 hour response time",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "1200",
                    maxPrice: "3500",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Leak Detection",
                    description: "Advanced leak detection using acoustic and thermal imaging technology",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "950",
                    maxPrice: "1800",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hidden Leak Repairs",
                    description: "Underground or in-wall leak repairs with minimal property disruption",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "3000",
                    maxPrice: "6500",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Complete Home Re-piping",
                    description: "Full residential pipe replacement with modern copper, PEX, or CPVC pipes",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "18000",
                    maxPrice: "75000",
                    priceCurrency: "ZAR",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}
