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

                <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Borehole Electrical Requirements</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole electrical systems differ significantly from standard household wiring. Submersible pumps require specialized cables rated for continuous underground and underwater use, waterproof connections preventing moisture ingress and electrical faults, properly sized conductors accounting for voltage drop over long distances, dedicated circuits preventing interference with other electrical loads, and comprehensive protection systems safeguarding expensive pump equipment. Professional installation addresses all these requirements ensuring safe, reliable operation.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Electrical Installation Process</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our systematic installation approach ensures safety, compliance, and optimal performance:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 1: Electrical Assessment and Design</strong> — We begin with comprehensive assessment including pump specifications (power rating, voltage, current draw), cable run distances from distribution board to wellhead, existing electrical supply capacity and available circuits, environmental factors (underground routing, exposure to elements), and required protection systems. Based on assessment, we design electrical systems specifying exact cable sizes, circuit breaker ratings, control box specifications, and protection devices. Proper design prevents voltage drop, ensures adequate circuit capacity, and incorporates all necessary safety features.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 2: Cable Selection and Sizing</strong> — Correct cable sizing is critical for safety and efficiency. Undersized cables cause excessive voltage drop reducing pump performance, create fire hazards through overheating, and waste electricity. We calculate exact cable requirements using: pump rated current plus 25% safety margin, cable run distance including vertical and horizontal sections, acceptable voltage drop limits (typically 2.5% maximum), cable installation method (underground conduit, surface mounting), and ambient temperature considerations. For example, a 2.2 kW single-phase pump at 80 meters requires minimum 4mm² cable, but 6mm² provides optimal performance with minimal voltage drop.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 3: Cable Installation and Routing</strong> — Professional cable installation ensures longevity and safety. We install submersible pump cables rated for continuous water immersion with double-insulated conductors and waterproof outer sheathing. Underground cables run through properly sized conduit (50mm minimum) protecting against mechanical damage. Conduit is buried at minimum 600mm depth following shortest practical route. Vertical cable runs at the wellhead are secured to prevent movement and wear. All cable entries into control boxes use weatherproof cable glands preventing moisture ingress. Cable routing avoids sharp bends (minimum radius 150mm) preventing conductor damage.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 4: Control Box Installation</strong> — The control box houses critical electrical components including circuit breakers, contactors, overload protection, earth leakage devices, and control circuits. We install weatherproof control boxes (IP65 rated minimum) positioned for easy access but protected from direct weather exposure. Control boxes are mounted on stable surfaces preventing vibration and mechanical stress. Internal wiring uses correct conductor sizes with proper terminations. All connections are tight and inspected for quality. Control boxes include clear labeling identifying circuits and emergency shutdown procedures. For VSD installations, we ensure adequate ventilation preventing heat buildup that damages electronic components.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 5: Protection System Installation</strong> — Comprehensive protection prevents equipment damage and ensures safety. We install earth leakage protection (30mA trip) detecting ground faults and preventing electrocution hazards, overload protection calibrated to pump specifications preventing motor damage from overload conditions, surge arrestors protecting against lightning strikes and voltage spikes, phase failure protection for three-phase systems preventing single-phase operation damage, and contactor-based switching preventing direct manual switching of pump circuits. Each protection device is tested individually before commissioning.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 6: Earthing and Bonding</strong> — Proper earthing is essential for electrical safety. We install dedicated earth electrodes (copper rods driven minimum 2.4 meters into ground) achieving earth resistance under 20 ohms. All metallic components including control boxes, wellhead covers, and pump casings are bonded to the earth system. Earth continuity is verified through testing ensuring effective fault protection. For properties with existing earth systems, we integrate borehole earthing appropriately. Poor earthing causes earth leakage devices to trip incorrectly or fail to protect, creating dangerous situations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 7: Testing and Commissioning</strong> — Before energizing the system, we conduct comprehensive testing including insulation resistance testing (minimum 1 megohm between conductors and earth), earth continuity verification (resistance under 1 ohm from any exposed metal to earth electrode), earth leakage device testing (trips within 40 milliseconds at rated current), circuit breaker verification (trips at rated overload), polarity testing ensuring correct phase/neutral connections, and voltage measurement at pump terminals verifying acceptable voltage drop. Only systems passing all tests are commissioned. We document all test results for compliance and future reference.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Electrical Protection Systems Explained</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Multiple protection systems work together safeguarding your pump investment:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Earth Leakage Protection (ELCB/RCD):</strong> Earth leakage devices detect current leaking to earth indicating insulation failure or water ingress. When leakage exceeds 30mA, the device trips within 40 milliseconds cutting power and preventing electrocution. This protection is mandatory for all borehole installations. Earth leakage devices require testing monthly using the built-in test button. Nuisance tripping often indicates developing problems requiring investigation—never bypass earth leakage protection.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Overload Protection:</strong> Thermal overload relays or electronic overload protection monitor pump current continuously. When current exceeds rated levels for sustained periods (indicating mechanical problems, low voltage, or motor failure), overload protection trips preventing motor burnout. Overload settings must be calibrated precisely—typically 110-115% of pump rated current. Incorrect settings cause nuisance tripping (set too low) or fail to protect (set too high). We calibrate overload protection based on pump specifications and measure actual running current during commissioning.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Surge Protection (Lightning Protection):</strong> Lightning strikes are the leading cause of pump electrical damage in South Africa. Surge arrestors divert voltage spikes to earth before they reach sensitive equipment. Quality surge arrestors respond within nanoseconds protecting against direct strikes and induced surges from nearby strikes. We install Type 2 surge protection (suitable for end equipment) at control boxes. Properties in high-risk areas benefit from additional Type 1 protection at the main distribution board. Surge arrestors require periodic inspection and replacement after major strikes—they sacrifice themselves protecting equipment.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Phase Failure Protection (Three-Phase Systems):</strong> Three-phase pumps require all three phases for correct operation. Single-phase operation (one phase failure) causes motors to overheat rapidly leading to catastrophic failure within minutes. Phase failure relays monitor all three phases continuously, tripping immediately when any phase is lost or voltage is unbalanced. This protection is essential for three-phase installations—motor damage from single-phase operation is not covered by warranties.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Under/Over Voltage Protection:</strong> Voltage variations damage pumps. Prolonged undervoltage causes motors to draw excessive current overheating windings. Overvoltage stresses insulation leading to premature failure. Voltage protection monitors supply voltage continuously, disconnecting pumps when voltage exceeds acceptable ranges (typically 207-253V for 230V systems). This protection is particularly valuable in areas with unstable electrical supply or at the end of long rural supply lines.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Single-Phase vs Three-Phase Installations</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole pumps operate on either single-phase or three-phase power depending on size and application:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Single-Phase Installations (up to 3 kW):</strong> Most residential boreholes use single-phase pumps (1.1-2.2 kW typical). Single-phase installation requires two-core cable plus earth (3-core total), operates from standard 230V household supply, uses simple control boxes with fewer components, and connects to existing distribution boards easily. Single-phase systems are suitable for residential properties with standard electrical supply. Larger single-phase pumps (2.2-3 kW) require verification that existing electrical supply has adequate capacity. Installation cost: ZAR 6,000-10,000.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Three-Phase Installations (3 kW and above):</strong> Commercial properties and larger residential installations often require three-phase pumps. Three-phase installation requires four-core cable (three phases plus earth), operates from 400V three-phase supply, uses more complex control boxes with phase monitoring, and may require three-phase supply installation if not existing. Three-phase pumps are more efficient than equivalent single-phase pumps, start more smoothly reducing mechanical stress, and can deliver higher power (up to 15 kW or more). Installation cost: ZAR 10,000-18,000 depending on complexity and whether three-phase supply exists.
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

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Electrical Upgrades and Repairs</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Control box replacement or upgrade</li>
                    <li>• Additional protection systems (surge, voltage)</li>
                    <li>• Cable replacement (damaged or undersized)</li>
                    <li>• Earthing system installation or improvement</li>
                    <li>• Electrical fault finding and repair</li>
                    <li>• Re-certification for compliance</li>
                    <li className="font-semibold text-accent pt-2">Cost: ZAR 2,500 - 8,000</li>
                    <li className="text-xs pt-2">Depending on scope of work required</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Electrical Certification and Compliance</h3>

                <p className="text-muted-foreground leading-relaxed">
                  All electrical installations require certification demonstrating compliance with SANS 10142-1 (Wiring of Premises). Certificate of Compliance (COC) is issued by registered electricians confirming that installations meet safety standards, are properly earthed and protected, use correct cable sizes and protection devices, and pose no electrical hazard. COCs are required for insurance claims, property sales, and municipal approvals. We provide COCs with all electrical installations at no additional cost—it's included in our standard service.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Existing borehole installations without proper electrical certification should be inspected and certified. Many older installations use incorrect cable sizes, lack proper earth leakage protection, have inadequate earthing systems, or violate current electrical regulations. We provide electrical inspection and upgrade services bringing non-compliant installations up to standard and providing certification. Inspection cost: ZAR 1,500-2,500. Upgrade costs vary based on required work.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Common Electrical Problems and Solutions</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Understanding common electrical problems helps identify issues requiring professional attention:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Frequent Earth Leakage Trips:</strong> Earth leakage protection tripping indicates current leaking to earth. Causes include pump insulation failure (water ingress into motor), damaged cables with exposed conductors, moisture in control box or connections, or faulty earth leakage device. Never bypass earth leakage protection—it prevents electrocution. Professional diagnosis identifies the problem and implements proper repairs. Diagnostic cost: ZAR 1,500-2,500.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Overload Trips or Circuit Breaker Trips:</strong> Overload protection tripping suggests pump drawing excessive current. Causes include motor problems (bearing wear, winding damage), mechanical issues (jammed impeller), low voltage causing increased current draw, or incorrectly calibrated overload settings. We diagnose the root cause through current measurement and motor testing. Sometimes the issue is voltage drop from undersized cables requiring cable upgrade.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Reduced Pump Performance:</strong> Pumps delivering insufficient pressure despite running often suffer from voltage drop. Undersized cables cause voltage at pump terminals to fall significantly below supply voltage. For example, 6% voltage drop reduces pump power by approximately 12% and flow rate by 6-8%. We measure voltage at pump terminals under load identifying voltage drop problems. Solution is cable upgrade to properly sized conductors.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Lightning Damage:</strong> Lightning strikes destroy pumps, control boxes, and connected equipment. Symptoms include complete pump failure, burnt control box components, or damaged pressure systems. Prevention through surge protection is far more cost-effective than repairs. Quality surge arrestors cost ZAR 1,500-3,000 but protect ZAR 15,000-30,000 worth of equipment. We strongly recommend surge protection for all installations, especially in high-risk areas.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros for Electrical Installation</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Professional electrical installation ensures safety, reliability, and compliance. Here's why customers choose Borehole Pros:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Certified Electricians:</strong> All electricians hold registration with ECSA (Engineering Council of South Africa) and are qualified to issue COCs
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
                      <strong>Comprehensive Testing:</strong> All installations undergo thorough testing before commissioning ensuring safety and reliability
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>800+ Installations:</strong> Extensive experience with single-phase and three-phase systems across residential and commercial properties
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Workmanship Warranty:</strong> 12-month warranty on all electrical installation work
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Installation Timeline</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Standard single-phase electrical installations take 1 day to complete including cable installation, control box setup, earthing system, testing, and certification. Three-phase installations may require 1-2 days depending on complexity and whether three-phase supply already exists. Electrical upgrades on existing installations typically take 4-6 hours. We schedule installations at your convenience and work efficiently to minimize disruption.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For new borehole installations, electrical work is coordinated with pump installation ensuring smooth integration. We collaborate with drilling teams and plumbers ensuring proper sequencing and avoiding delays. Emergency electrical repairs are available when you experience sudden electrical failures requiring immediate attention. Emergency callouts include priority fee but ensure rapid problem resolution.
                </p>
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
}hover:text-accent transition-colors">
                  Pressure System Installation
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete pressure system setup including electrical integration for pressure tanks, VSD controllers, and constant pressure systems.
              </p>
              <Link href="/pressure-systems" className="
