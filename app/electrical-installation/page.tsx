import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Zap, CheckCircle2, Phone, Shield, Settings, Cable } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Electrical Installation | Professional Pump Electrical Services",
  description:
    "Expert borehole electrical installation services. Safe pump wiring, control boxes, earth leakage protection & surge protection. SANS compliant installations. Call 060 348 8268.",
  keywords:
    "borehole electrical installation, pump electrical wiring, control box installation, earth leakage protection, surge protection, pump electrical services",
  openGraph: {
    title: "Professional Borehole Electrical Installation | Safe Pump Wiring",
    description: "Expert electrical installation for borehole pumps. SANS compliant with certified electricians.",
  },
}

const services: ServiceItem[] = [
  {
    title: "Pump Electrical Wiring",
    description: "Professional pump wiring with correctly sized cables, waterproof connections, and proper voltage drop calculations.",
    href: "/pump-wiring",
    icon: <Cable className="w-8 h-8" />,
    image: "/images/pump-wiring.jpg",
  },
  {
    title: "Control Box Installation",
    description: "Complete control box setup with earth leakage protection, overload safeguards, and automatic controls.",
    href: "/control-boxes",
    icon: <Settings className="w-8 h-8" />,
    image: "/images/control-box.jpg",
    highlight: true,
  },
  {
    title: "Electrical Protection Systems",
    description: "Comprehensive protection including surge arrestors, earth leakage devices, and lightning protection.",
    href: "/electrical-protection",
    icon: <Shield className="w-8 h-8" />,
    image: "/images/surge-protection.jpg",
  },
]

export default function ElectricalInstallationPage() {
  return (
    <>
      <Hero
        title="Professional Borehole Electrical Installation Services"
        subtitle="Safe Wiring | SANS Compliant | Certified Electricians"
        description="Expert electrical installation for borehole pumps across Gauteng. Our certified electricians provide safe pump wiring, control box installation, earth leakage protection, and surge protection systems. All installations comply with SANS 10142-1 electrical safety standards. Professional setup ensuring reliable operation and maximum pump protection. Call 060 348 8268."
        imageSrc="/images/electrical-installation.jpg"
        cta={{
          primary: { text: "Get Electrical Quote", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Electrical Installation Solutions"
        description="From pump wiring to advanced protection systems, we provide comprehensive electrical services ensuring safe, reliable, and efficient borehole operation."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Expert Borehole Electrical Installation Services
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Professional electrical installation is critical for safe and reliable borehole operation. Improper electrical work causes pump failures, creates safety hazards, wastes electricity through voltage drop, and violates building regulations. Borehole pumps operate in demanding conditions—submerged in water, running continuously for hours, and exposed to lightning strikes. Professional electrical installation ensures your system operates safely, efficiently, and reliably for decades.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole Pros specializes in borehole electrical installation across Gauteng. Our certified electricians have completed over 800 borehole electrical installations since 2009, working with single-phase and three-phase systems from 1.1 kW to 15 kW. We provide complete electrical services including pump wiring with correctly sized cables, control box installation with comprehensive protection, earth leakage and surge protection systems, and electrical certification for compliance. Every installation meets SANS 10142-1 standards and includes safety testing before commissioning.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Electrical Installation Process</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our systematic installation approach ensures safety, compliance, and optimal performance through a comprehensive seven-step process.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 1: Electrical Assessment and Design</strong> — We begin with comprehensive assessment including pump specifications, cable run distances, existing electrical supply capacity, environmental factors, and required protection systems. Based on assessment, we design electrical systems specifying exact cable sizes, circuit breaker ratings, control box specifications, and protection devices.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 2: Cable Selection and Sizing</strong> — Correct cable sizing is critical for safety and efficiency. We calculate exact cable requirements using pump rated current plus safety margin, cable run distance, acceptable voltage drop limits, cable installation method, and ambient temperature considerations. For example, a 2.2 kW single-phase pump at 80 meters requires minimum 4mm² cable, but 6mm² provides optimal performance.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 3: Cable Installation and Routing</strong> — Professional cable installation ensures longevity and safety. We install submersible pump cables rated for continuous water immersion. Underground cables run through properly sized conduit protecting against mechanical damage. Conduit is buried at minimum 600mm depth following shortest practical route. All cable entries use weatherproof cable glands preventing moisture ingress.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 4: Control Box Installation</strong> — The control box houses critical electrical components including circuit breakers, contactors, overload protection, earth leakage devices, and control circuits. We install weatherproof control boxes positioned for easy access but protected from direct weather exposure. Control boxes include clear labeling identifying circuits and emergency shutdown procedures.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 5: Protection System Installation</strong> — Comprehensive protection prevents equipment damage and ensures safety. We install earth leakage protection detecting ground faults, overload protection preventing motor damage, surge arrestors protecting against lightning strikes, phase failure protection for three-phase systems, and contactor-based switching. Each protection device is tested individually before commissioning.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 6: Earthing and Bonding</strong> — Proper earthing is essential for electrical safety. We install dedicated earth electrodes achieving earth resistance under 20 ohms. All metallic components are bonded to the earth system. Earth continuity is verified through testing ensuring effective fault protection.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 7: Testing and Commissioning</strong> — Before energizing the system, we conduct comprehensive testing including insulation resistance testing, earth continuity verification, earth leakage device testing, circuit breaker verification, polarity testing, and voltage measurement. Only systems passing all tests are commissioned.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Electrical Protection Systems</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Multiple protection systems work together safeguarding your pump investment:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Earth Leakage Protection:</strong> Earth leakage devices detect current leaking to earth indicating insulation failure or water ingress. When leakage exceeds 30mA, the device trips within 40 milliseconds cutting power and preventing electrocution. This protection is mandatory for all borehole installations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Surge Protection:</strong> Lightning strikes are the leading cause of pump electrical damage in South Africa. Surge arrestors divert voltage spikes to earth before they reach sensitive equipment. Quality surge arrestors respond within nanoseconds protecting against direct strikes and induced surges. We install Type 2 surge protection suitable for end equipment.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Electrical Installation Costs and Pricing</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Electrical installation costs vary based on pump size, cable distance, and complexity:
                </p>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Standard Single-Phase Installation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 1.1-1.5 kW pump electrical installation</li>
                    <li>• 4mm² submersible pump cable (up to 50m)</li>
                    <li>• Weatherproof control box with protection</li>
                    <li>• Earth leakage and overload protection</li>
                    <li>• Circuit breaker and contactor</li>
                    <li>• Earthing system with testing</li>
                    <li>• Electrical certification (COC)</li>
                    <li className="font-semibold text-accent pt-2">Total Cost: ZAR 6,000 - 9,000</li>
                    <li className="text-xs pt-2">Includes materials, labor, testing, certification</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Premium Single-Phase Installation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2.2 kW pump electrical installation</li>
                    <li>• 6mm² submersible pump cable (up to 80m)</li>
                    <li>• Premium control box with advanced protection</li>
                    <li>• Earth leakage, overload, and surge protection</li>
                    <li>• Under/over voltage protection</li>
                    <li>• Professional earthing with earth spike</li>
                    <li>• Comprehensive testing and certification</li>
                    <li className="font-semibold text-accent pt-2">Total Cost: ZAR 9,000 - 13,000</li>
                    <li className="text-xs pt-2">Premium components and comprehensive protection</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Three-Phase Installation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 4-5.5 kW three-phase pump installation</li>
                    <li>• 4-core three-phase cable (appropriately sized)</li>
                    <li>• Three-phase control box with phase monitoring</li>
                    <li>• Complete protection suite (earth leakage, overload, surge, phase failure)</li>
                    <li>• Professional earthing and bonding</li>
                    <li>• Comprehensive testing and three-phase certification</li>
                    <li className="font-semibold text-accent pt-2">Total Cost: ZAR 12,000 - 18,000</li>
                    <li className="text-xs pt-2">For commercial and high-demand applications</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros for Electrical Installation</h3>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Certified Electricians:</strong> All electricians hold registration with ECSA and are qualified to issue COCs
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>SANS Compliance:</strong> Every installation meets SANS 10142-1 standards with proper certification included
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Quality Components:</strong> We use premium cables, control boxes, and protection devices from trusted manufacturers
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Comprehensive Testing:</strong> All installations undergo thorough testing before commissioning
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>800+ Installations:</strong> Extensive experience with single-phase and three-phase systems
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Workmanship Warranty:</strong> 12-month warranty on all electrical installation work
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Installation Pricing</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Single-Phase Standard</p>
                      <p className="text-muted-foreground">ZAR 6,000-9,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Single-Phase Premium</p>
                      <p className="text-muted-foreground">ZAR 9,000-13,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Three-Phase System</p>
                      <p className="text-muted-foreground">ZAR 12,000-18,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Installation Time</p>
                      <p className="text-muted-foreground">1 day standard</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Certification</p>
                      <p className="text-muted-foreground">COC included</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get Electrical Quote</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-3">Certified electricians & SANS compliant</p>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    WhatsApp Quote
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-3 text-sm">Protection Systems</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Earth leakage protection</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Overload safeguards</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Surge/lightning protection</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Voltage protection</span>
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
            Related Borehole Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/pump-installation" className="hover:text-accent transition-colors">
                  Pump Installation Services
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Professional pump installation with complete electrical integration. Premium Grundfos, Pedrollo, and Franklin pumps with certified electrical setup.
              </p>
              <Link href="/pump-installation" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/pressure-systems" className="hover:text-accent transition-colors">
                  Pressure System Installation
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete pressure system setup including electrical integration for pressure tanks, VSD controllers, and constant pressure systems.
              </p>
              <Link href="/pressure-systems" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-installation" className="hover:text-accent transition-colors">
                  Complete Borehole Installation
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Full borehole installation including drilling, pump setup, complete electrical system, and plumbing integration. End-to-end professional service.
              </p>
              <Link href="/borehole-installation" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/pump-repair" className="hover:text-accent transition-colors">
                  Electrical Fault Finding
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Expert electrical diagnostics and repair for borehole systems. From earth leakage issues to voltage problems—we diagnose and fix electrical faults.
              </p>
              <Link href="/pump-repair" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Electrical Installation FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much does borehole electrical installation cost?</h3>
              <p className="text-muted-foreground text-sm">
                Single-phase standard: ZAR 6,000-9,000. Single-phase premium: ZAR 9,000-13,000. Three-phase: ZAR 12,000-18,000. All prices include materials, labor, testing, and COC certification.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do I need an electrical certificate for my borehole?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. All electrical installations require a Certificate of Compliance (COC) demonstrating SANS compliance. We provide COCs with all installations at no extra cost.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What cable size do I need for my pump?</h3>
              <p className="text-muted-foreground text-sm">
                Depends on pump power and cable distance. Typical sizes: 1.1 kW = 2.5-4mm², 1.5 kW = 4mm², 2.2 kW = 4-6mm². We calculate exact requirements considering voltage drop.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Is surge protection necessary?</h3>
              <p className="text-muted-foreground text-sm">
                Highly recommended. Lightning strikes are the leading cause of pump electrical damage in South Africa. Quality surge arrestors (ZAR 1,500-3,000) protect ZAR 15,000-30,000 of equipment.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How long does electrical installation take?</h3>
              <p className="text-muted-foreground text-sm">
                Single-phase installations: 1 day including cable installation, control box setup, testing, and certification. Three-phase installations: 1-2 days depending on complexity.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can you upgrade existing borehole electrical systems?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We upgrade non-compliant installations to current SANS standards including cable replacement, protection system upgrades, proper earthing, and COC certification. Cost: ZAR 2,500-8,000.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Need Professional Borehole Electrical Installation?"
        description="Get certified electrical installation with SANS compliance and comprehensive protection. Safe, reliable electrical systems from ZAR 6,000. Call 060 348 8268 for your free consultation and electrical assessment."
        primaryText="Get Electrical Quote"
        primaryHref="/contact"
        secondaryText="Call: 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Borehole Electrical Installation Services",
            description: "Professional electrical installation for borehole pumps. SANS compliant with certified electricians and comprehensive protection systems.",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Pros",
              telephone: "060-348-8268",
            },
            areaServed: {
              "@type": "Country",
              name: "South Africa",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Electrical Installation Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Single-Phase Standard Installation",
                    description: "Complete electrical installation for 1.1-1.5 kW pumps with protection and certification",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "6000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Single-Phase Premium Installation",
                    description: "Premium electrical installation for 2.2 kW pumps with advanced protection",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "9000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Three-Phase Installation",
                    description: "Complete three-phase electrical installation for commercial and high-demand applications",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "12000",
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
