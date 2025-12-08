import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Wrench, CheckCircle2, Phone, Settings, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Installation Services | Professional Pump & System Setup",
  description:
    "Expert borehole installation services. Complete pump setup, plumbing integration & pressure systems. Certified technicians. Call 060 348 8268 for professional installation.",
  keywords:
    "borehole installation, borehole pump installation, water pump installation, borehole system setup, submersible pump installation",
  openGraph: {
    title: "Professional Borehole Installation | Expert Pump & System Setup",
    description: "Complete borehole installation with certified technicians. Pump setup, plumbing integration & testing.",
  },
}

const services: ServiceItem[] = [
  {
    title: "Pump Installation",
    description: "Professional submersible pump installation with proper sizing and depth configuration.",
    href: "/pump-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/pump-installation.jpg",
  },
  {
    title: "Pressure System Setup",
    description: "Complete pressure tank and control system installation for optimal water delivery.",
    href: "/pressure-systems",
    icon: <Settings className="w-8 h-8" />,
    image: "/images/pressure-system.jpg",
  },
  {
    title: "Electrical Integration",
    description: "Safe electrical connections with circuit protection and automatic control systems.",
    href: "/electrical-installation",
    icon: <Zap className="w-8 h-8" />,
    highlight: true,
    image: "/images/electrical-work.jpg",
  },
]

export default function BoreholeInstallationPage() {
  return (
    <>
      <Hero
        title="Professional Borehole Installation Services"
        subtitle="Complete System Setup | Certified Technicians | Quality Guarantee"
        description="Expert borehole installation from pump to plumbing. We handle complete system integration with pressure control, electrical setup, and thorough testing. Professional installation ensures 20+ years of reliable operation. Call 060 348 8268."
        imageSrc="/images/borehole-installation.jpg"
        cta={{
          primary: { text: "Get Installation Quote", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Borehole Installation Solutions"
        description="From pump installation to full system integration, we provide end-to-end borehole setup services with professional certification and testing."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Expert Borehole Installation & System Integration
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A professionally installed borehole system is the foundation of reliable water independence. While
                  drilling creates the water source, installation transforms it into a fully functional water supply
                  system. Borehole Pros specializes in complete system integration—from submersible pump placement to
                  household plumbing connection—ensuring your borehole operates flawlessly for decades.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our certified installation team has completed over 800 full system setups across Johannesburg and
                  surrounding areas. We understand that proper installation is critical: an incorrectly installed pump
                  can fail within months, while professional setup ensures 20+ years of trouble-free operation. Every
                  installation follows strict technical standards and includes comprehensive testing before handover.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Borehole Installation Process</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our installation process is methodical and comprehensive, designed to deliver a turnkey water system.
                  Here's what happens during professional borehole installation:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 1: System Design & Pump Selection</strong> — We begin by analyzing your water
                  requirements, borehole depth, and property layout. This determines pump capacity, pressure system
                  sizing, and plumbing configuration. Residential properties typically need 1-2 kW submersible pumps,
                  while commercial installations may require 3-5 kW systems. Proper sizing prevents equipment failure
                  and ensures adequate water pressure throughout your property.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 2: Submersible Pump Installation</strong> — The pump is lowered into the borehole at
                  the optimal depth—typically 10-15 meters below the static water level. This positioning ensures the
                  pump never runs dry while maximizing efficiency. We use stainless steel suspension cables rated for
                  long-term submersion, preventing pump drop failures that plague amateur installations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 3: Rising Main & Plumbing Connection</strong> — High-grade HDPE piping connects the pump
                  to your property's water system. We install proper check valves, isolation valves, and drainage points
                  for maintenance access. All connections are pressure-tested to 1.5x operating pressure, ensuring
                  leak-free operation. Underground piping is bedded in sand and protected from root intrusion.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 4: Pressure System Installation</strong> — A pressure tank and control system regulate
                  water delivery to your taps. We install commercial-grade pressure vessels sized to minimize pump
                  cycling, extending equipment life. Digital pressure controllers maintain consistent water pressure
                  (typically 2.5-3.5 bar) throughout your property, matching municipal supply performance.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 5: Electrical Connection & Protection</strong> — Safe electrical installation is
                  critical. We connect pumps through dedicated circuits with proper earth leakage protection and
                  overload safeguards. All electrical work complies with SANS 10142-1 standards and includes lightning
                  surge protection. Automatic controllers start and stop the pump based on water demand, preventing
                  manual operation hassles.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 6: System Testing & Commissioning</strong> — Before handover, we conduct comprehensive
                  testing: flow rate verification, pressure stability checks, electrical safety testing, and extended
                  run testing. We measure actual flow rates against design specifications, ensuring your system delivers
                  promised performance. Any issues are corrected immediately.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pump Selection: Critical Installation Decision</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Selecting the right pump is the most important installation decision. An undersized pump delivers
                  insufficient water pressure. An oversized pump wastes electricity and wears prematurely. Our
                  engineers calculate exact requirements based on:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Borehole depth and water column:</strong> Determines required pump head (lifting capacity)
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Peak water demand:</strong> Number of simultaneous taps, irrigation needs, household size
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Property elevation and distance:</strong> Additional head requirements for multi-story or
                      large properties
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Borehole yield capacity:</strong> Pump cannot exceed sustainable extraction rate
                    </span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  We exclusively use premium submersible pumps from Grundfos, Pedrollo, and Franklin Electric—brands
                  proven for longevity in South African conditions. These pumps feature stainless steel construction,
                  thermal overload protection, and efficiency ratings that minimize electricity consumption. A quality
                  pump typically costs ZAR 8,000-15,000 but lasts 15+ years with proper installation.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pressure System Configuration</h3>

                <p className="text-muted-foreground leading-relaxed">
                  The pressure system is your borehole's interface with household plumbing. It creates the consistent
                  water pressure you experience at taps and showers. Without proper pressure control, you'd experience
                  pressure fluctuations every time the pump starts or stops—an unacceptable user experience.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our installations use bladder-type pressure vessels ranging from 50L (small residential) to 300L
                  (commercial applications). These tanks store pressurized water, allowing the pump to rest between
                  cycles. Larger tanks mean less frequent pump starts, extending equipment life significantly. We pair
                  tanks with digital pressure controllers featuring adjustable cut-in/cut-out settings, allowing
                  customization to your preferences.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Modern installations include smart controllers with dry-run protection—automatically shutting down if
                  the borehole water level drops too low. This prevents catastrophic pump damage during droughts or
                  excessive water usage. Controllers also provide cycle counters and runtime monitoring, invaluable for
                  maintenance scheduling.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Plumbing Integration Methods</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Connecting your borehole to existing plumbing requires careful planning. We offer three integration
                  approaches based on your needs and budget:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Direct Connection:</strong> Borehole water replaces municipal supply entirely. Most
                  cost-effective but requires high-quality borehole water suitable for all uses. Ideal when water
                  testing confirms potability or when used exclusively for irrigation and outdoor purposes. Installation
                  cost: ZAR 3,500-6,000.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Dual System with Manual Switching:</strong> Separate plumbing for borehole and municipal
                  water with valve switching. Allows you to use borehole water for toilets, washing machines, and
                  irrigation while keeping municipal water for kitchen and drinking. Manual changeover provides backup
                  during maintenance. Installation cost: ZAR 8,500-12,000.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Automatic Dual System:</strong> Sophisticated setup using automatic changeover valves.
                  Primarily runs on borehole water but seamlessly switches to municipal supply if borehole pressure
                  drops. Provides uninterrupted water supply with maximum borehole usage. Preferred for critical
                  applications. Installation cost: ZAR 15,000-22,000.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Electrical Installation & Safety</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole pumps operate on 220V single-phase or 380V three-phase power, depending on size. All
                  electrical work is performed by certified electricians following SANS 10142-1 wiring standards.
                  Safety is paramount when combining electricity with water systems.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Every installation includes dedicated circuit breakers rated for motor starting currents, earth
                  leakage units (ELCBs) providing 30mA trip protection, and surge arrestors protecting against lightning
                  damage. The pump motor requires overload protection calibrated to its specific amp rating, preventing
                  burnout from jammed impellers or low voltage conditions.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We install waterproof junction boxes for all underground cable connections, using marine-grade cable
                  glands and silicone sealing. Cable sizing accounts for voltage drop over distance—undersized cables
                  cause motor inefficiency and premature failure. All installations receive compliance certificates
                  acceptable to insurance companies.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Installation Costs & Timeline</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Professional borehole installation costs vary based on system complexity and property requirements.
                  Here's typical pricing for complete installations:
                </p>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Standard Residential Installation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 1.5 kW submersible pump (up to 80m depth)</li>
                    <li>• 100L pressure vessel with digital controller</li>
                    <li>• Rising main and plumbing connections (up to 20m)</li>
                    <li>• Electrical installation with safety protection</li>
                    <li>• System testing and commissioning</li>
                    <li className="font-semibold text-accent pt-2">Cost: ZAR 18,000 - 25,000</li>
                    <li className="font-semibold">Timeline: 2-3 days</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Premium Residential Installation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2.2 kW premium submersible pump (up to 120m depth)</li>
                    <li>• 200L pressure vessel with smart controller</li>
                    <li>• Dual plumbing system with automatic changeover</li>
                    <li>• UV sterilization and filtration system</li>
                    <li>• Premium electrical setup with remote monitoring</li>
                    <li className="font-semibold text-accent pt-2">Cost: ZAR 35,000 - 45,000</li>
                    <li className="font-semibold">Timeline: 3-5 days</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Commercial Installation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 4 kW industrial submersible pump (any depth)</li>
                    <li>• 300L pressure vessel with redundancy</li>
                    <li>• High-capacity plumbing (50mm+ mains)</li>
                    <li>• Three-phase electrical with VSD control</li>
                    <li>• Industrial filtration and treatment</li>
                    <li className="font-semibold text-accent pt-2">Cost: ZAR 55,000 - 85,000+</li>
                    <li className="font-semibold">Timeline: 5-7 days</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Post-Installation Support & Warranty</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Every Borehole Pros installation includes comprehensive warranty coverage and ongoing support. Our
                  standard warranty covers:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>12-month full system warranty:</strong> All labor, materials, and equipment covered
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Manufacturer pump warranty:</strong> 2-5 years depending on brand (we handle claims)
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Free 6-month service:</strong> Inspection, testing, and minor adjustments included
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Lifetime technical support:</strong> Phone and email support for operational questions
                    </span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  We maintain detailed installation records for every system, including pump specifications, electrical
                  schematics, and plumbing diagrams. These records are invaluable for future maintenance or
                  modifications. Customers receive complete documentation at handover, including operation manuals,
                  warranty certificates, and emergency shutdown procedures.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros for Installation</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Installation quality determines your borehole system's lifespan and reliability. Here's why over 800
                  customers have trusted Borehole Pros:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Certified Technical Team</p>
                    <p className="text-xs text-muted-foreground">
                      All installers hold electrical and plumbing certifications. No subcontractors—permanent staff only.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Premium Equipment Only</p>
                    <p className="text-xs text-muted-foreground">
                      We install Grundfos, Pedrollo, and Franklin pumps—no budget brands. Quality costs less long-term.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Compliance & Certification</p>
                    <p className="text-xs text-muted-foreground">
                      Every installation meets SANS standards with full electrical and plumbing certification.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Transparent Fixed Pricing</p>
                    <p className="text-xs text-muted-foreground">
                      Detailed quotes with no hidden costs. Price includes everything from pump to commissioning.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Maintenance: Protecting Your Investment</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Even perfectly installed systems require regular maintenance. Annual servicing extends equipment life
                  from 15 years to 25+ years—a significant return on a modest maintenance investment. Our maintenance
                  plans include:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Annual pump inspection and performance testing, pressure system calibration and tank inspection, valve
                  operation verification and lubrication, electrical connection inspection and tightening, water quality
                  sampling and bacterial testing, controller software updates and settings verification. Most issues we
                  prevent through maintenance would cost ZAR 3,000-8,000 to repair. Annual maintenance costs just ZAR
                  1,200-1,800—excellent value protection.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Installation Pricing Guide</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Basic Residential</p>
                      <p className="text-muted-foreground">ZAR 18,000-25,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Premium Residential</p>
                      <p className="text-muted-foreground">ZAR 35,000-45,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Commercial Systems</p>
                      <p className="text-muted-foreground">ZAR 55,000-85,000+</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Installation Time</p>
                      <p className="text-muted-foreground">2-7 days (varies by complexity)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Warranty Coverage</p>
                      <p className="text-muted-foreground">12-60 months full coverage</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get Installation Quote</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-3">Free consultation & site assessment</p>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    WhatsApp Quote
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-3 text-sm">What's Included</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Professional pump installation</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Pressure system setup</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Electrical connection & protection</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Plumbing integration</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Full system testing</span>
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

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
            Related Installation Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-drilling" className="hover:text-accent transition-colors">
                  Borehole Drilling Services
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Professional drilling with modern equipment. We locate optimal drilling positions and create reliable
                water sources for your property.
              </p>
              <Link href="/borehole-drilling" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
              </h3>
              <p className="text-muted-foreground mb-4">
                Advanced filtration and UV sterilization for safe, clean water. Remove sediment, bacteria, and
                contaminants from your borehole supply.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/pump-repair" className="hover:text-accent transition-colors">
                  Pump Repair & Replacement
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Expert pump diagnostics and repair services. We service all major brands and provide rapid replacement
                when needed.
              </p>
              <Link href="/pump-repair" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-maintenance" className="hover:text-accent transition-colors">
                  Maintenance Plans
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Annual service plans keeping your system running perfectly. Preventive maintenance extends equipment
                life to 25+ years.
              </p>
              <Link href="/borehole-maintenance" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Borehole Installation FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How long does installation take?</h3>
              <p className="text-muted-foreground text-sm">
                Standard residential installations take 2-3 days. Premium systems with dual plumbing take 3-5 days.
                Commercial installations require 5-7 days.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What pump size do I need?</h3>
              <p className="text-muted-foreground text-sm">
                Depends on borehole depth, water demand, and property size. Most residential properties need 1.5-2.2 kW pumps. We calculate exact requirements during site assessment.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can I install a pump myself?</h3>
              <p className="text-muted-foreground text-sm">
                Not recommended. Improper installation causes pump failure, electrical hazards, and voided warranties. Professional installation ensures safety and longevity.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What warranty do you provide?</h3>
              <p className="text-muted-foreground text-sm">
                12-month full system warranty on all labor and materials. Pumps carry 2-5 year manufacturer warranties that we manage on your behalf.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do you handle electrical certification?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. All electrical work is performed by certified electricians and includes compliance certificates meeting SANS 10142-1 standards.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can you connect to existing plumbing?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely. We integrate with your current plumbing, offering direct connection, manual dual system, or automatic changeover options.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Professional Borehole Installation?"
        description="Get expert installation with certified technicians. Complete system setup from pump to plumbing. Call 060 348 8268 for your free consultation."
        primaryText="Get Installation Quote"
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
            name: "Borehole Installation Services",
            description: "Professional borehole installation with certified technicians. Complete pump and system setup.",
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
              name: "Borehole Installation Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Standard Residential Installation",
                    description: "Complete pump and system installation for residential properties",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Premium Residential Installation",
                    description: "Advanced installation with dual plumbing and filtration",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Installation",
                    description: "Industrial-grade installation for commercial operations",
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
