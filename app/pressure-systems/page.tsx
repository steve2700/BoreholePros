import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Gauge, CheckCircle2, Phone, Droplet, Settings, Battery } from "lucide-react"

export const metadata: Metadata = {
  title: "Pressure System Installation | Borehole Pressure Tanks & Controllers",
  description:
    "Professional pressure system installation for boreholes. Pressure tanks, VSD controllers & constant pressure systems. Expert setup ensuring consistent water pressure. Call 060 348 8268.",
  keywords:
    "pressure system, pressure tank, VSD controller, constant pressure, borehole pressure system, water pressure tank, pressure pump installation",
  openGraph: {
    title: "Pressure System Installation | Professional Borehole Pressure Solutions",
    description: "Expert pressure system installation with tanks, controllers and constant pressure technology.",
  },
}

const services: ServiceItem[] = [
  {
    title: "Pressure Tank Systems",
    description: "Installation of pressure vessels with automatic controllers ensuring consistent water pressure throughout your property.",
    href: "/pressure-tanks",
    icon: <Battery className="w-8 h-8" />,
    image: "/images/pressure-tank.jpg",
  },
  {
    title: "VSD Controller Installation",
    description: "Variable Speed Drive controllers providing constant pressure regardless of water demand fluctuations.",
    href: "/vsd-controllers",
    icon: <Settings className="w-8 h-8" />,
    image: "/images/vsd-controller.jpg",
    highlight: true,
  },
  {
    title: "Pressure System Upgrades",
    description: "Upgrade existing systems to modern constant pressure technology for improved performance and efficiency.",
    href: "/system-upgrades",
    icon: <Gauge className="w-8 h-8" />,
    image: "/images/pressure-upgrade.jpg",
  },
]

export default function PressureSystemsPage() {
  return (
    <>
      <Hero
        title="Professional Pressure System Installation for Boreholes"
        subtitle="Constant Pressure | Efficient Operation | Reliable Performance"
        description="Expert installation of pressure systems for borehole water supply. We install pressure tanks, VSD controllers, and constant pressure systems ensuring consistent water pressure throughout your property. Professional setup with quality components and comprehensive testing. Call 060 348 8268."
        imageSrc="/images/pressure-system.jpg"
        cta={{
          primary: { text: "Get Pressure System Quote", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Pressure System Solutions"
        description="From traditional pressure tanks to advanced VSD controllers, we provide pressure systems that deliver consistent water pressure, protect your pump, and optimize energy efficiency."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Professional Pressure System Installation for Boreholes
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A properly designed pressure system is essential for reliable borehole water supply. Without adequate pressure management, you experience fluctuating water pressure, pump cycling that causes premature wear, pressure surges damaging plumbing fixtures, and excessive energy consumption. Professional pressure system installation ensures consistent water pressure throughout your property while protecting your pump investment and optimizing efficiency.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole Pros specializes in pressure system installation across Gauteng. Our technicians have designed and installed over 600 pressure systems since 2009, from traditional pressure tank setups to advanced VSD constant pressure systems. We handle complete installation—from system sizing and component selection to plumbing integration and commissioning. Every installation is optimized for your specific water demand patterns and property layout.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Pressure Systems</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole pressure systems serve multiple critical functions. They maintain consistent water pressure at all taps and outlets, prevent pump cycling by providing buffer capacity, eliminate water hammer and pressure surges, and protect pumps from frequent start-stop cycles that cause premature failure. There are three main types of pressure systems, each suited to different applications:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Pressure Tank Systems (Traditional):</strong> Use compressed air in sealed vessels to maintain pressure. The pump fills the tank until it reaches cut-out pressure (typically 3.5-4.0 bar), then stops. As water is drawn, pressure decreases until reaching cut-in pressure (typically 2.0-2.5 bar), triggering the pump to restart. This creates acceptable pressure variation but requires the pump to cycle on and off. Tank capacity typically ranges from 100L to 300L for residential applications. Cost: ZAR 8,000-15,000 installed.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>VSD Constant Pressure Systems (Modern):</strong> Use Variable Speed Drive controllers that adjust pump speed continuously to maintain exact target pressure regardless of demand. Opening one tap or ten taps produces identical pressure. The system responds instantly to pressure changes, ramping pump speed up or down as needed. VSD systems eliminate pressure variation, reduce energy consumption by 30-40%, extend pump life significantly, and provide superior user experience. Cost: ZAR 12,000-22,000 installed.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Hybrid Systems (Premium):</strong> Combine VSD controllers with pressure vessels for optimal performance. The tank provides buffer capacity reducing micro-cycling, while VSD maintains constant pressure. This configuration delivers the benefits of both technologies—perfect pressure consistency with minimal pump starts and maximum longevity. Ideal for properties with highly variable water demand. Cost: ZAR 18,000-28,000 installed.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Pressure System Installation Process</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our installation process ensures optimal system performance tailored to your specific needs:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 1: System Design and Sizing</strong> — We calculate exact requirements based on property size, number of bathrooms and water outlets, peak simultaneous demand, plumbing run lengths and elevation changes, and existing pump specifications. Undersized pressure systems cause frequent cycling and inconsistent pressure. Oversized systems waste money without improving performance. Our engineers design systems precisely matched to your needs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 2: Component Selection</strong> — We specify quality components proven for reliability. Pressure tanks from reputable manufacturers (Aquasky, Grundfos, Wilo) with 5-year warranties, VSD controllers with built-in pump protection and remote monitoring capability, pressure switches calibrated to optimal cut-in/cut-out points, pressure gauges for system monitoring, and non-return valves preventing backflow. All components are sized to work together as an integrated system.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 3: Installation Location Planning</strong> — Proper placement is critical for performance and maintenance access. Pressure systems are typically installed near the wellhead or in technical rooms, positioned on stable foundations to prevent vibration, with adequate ventilation for heat dissipation from VSD units, and easy access for future maintenance and gauge reading. We ensure installations comply with plumbing regulations and building codes.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 4: Plumbing Integration</strong> — Professional plumbing ensures leak-free operation. We install pressure tanks with properly sized inlet and outlet connections, pressure relief valves for safety, drain valves for maintenance, and isolation valves allowing system servicing without disrupting water supply. All connections use quality fittings rated for pressure service. Pipe sizing accounts for flow rates and pressure losses throughout the distribution system.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 5: Electrical Connection and VSD Setup</strong> — VSD controllers require proper electrical installation. We connect through dedicated circuits with appropriate circuit breakers, install earth leakage protection (30mA trip), configure VSD parameters including target pressure setpoint, ramp rates preventing water hammer, pump protection limits including dry-run and overload, and soft-start settings extending pump life. Advanced systems include remote monitoring capability via smartphone apps.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 6: System Testing and Commissioning</strong> — Comprehensive testing validates proper operation. We verify pressure consistency across all outlets, test system response to varying demand, confirm pump protection features activate correctly, check for leaks at all connections, measure actual pressure at critical points, and document system settings for future reference. We run extended tests simulating normal household usage patterns to ensure reliable performance.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pressure Tank vs VSD Systems: Which is Right for You?</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Choosing between traditional pressure tanks and modern VSD systems depends on your priorities and budget:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Choose Pressure Tank Systems if:</strong> Your budget is limited (ZAR 8,000-15,000), you're comfortable with minor pressure variation (0.5-1.0 bar), your water usage is relatively consistent without extreme peaks, you have space for a 100-300L tank, and you prefer proven simple technology with minimal electronics. Pressure tanks are reliable, cost-effective, and suitable for most residential applications. They require occasional maintenance (air pressure checks annually) but are otherwise maintenance-free.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Choose VSD Constant Pressure Systems if:</strong> You want perfect pressure consistency regardless of demand, you're using multiple water outlets simultaneously frequently, you want to maximize pump lifespan through reduced cycling, energy efficiency is important (30-40% electricity savings), you value modern convenience features like remote monitoring, or you have a larger property with complex water distribution. VSD systems cost more initially but deliver superior performance and long-term savings.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Choose Hybrid Systems if:</strong> You want the absolute best performance, you have highly variable water demand patterns, you're operating a guesthouse, B&B, or small commercial property, or you want maximum pump protection and longevity. Hybrid systems combine the buffer capacity of pressure tanks with the precise control of VSD technology, delivering optimal performance for demanding applications.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pressure System Pricing</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Professional pressure system installation costs vary based on system type, capacity, and complexity:
                </p>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Standard Pressure Tank System</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 100-150L pressure tank (Aquasky or equivalent)</li>
                    <li>• Automatic pressure switch (2.0-3.5 bar)</li>
                    <li>• Pressure gauge and safety valve</li>
                    <li>• Professional plumbing integration</li>
                    <li>• All fittings, valves, and connections</li>
                    <li>• System testing and commissioning</li>
                    <li className="font-semibold text-accent pt-2">Total Cost: ZAR 8,000 - 12,000</li>
                    <li className="text-xs pt-2">Includes all materials, labor, and 12-month warranty</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">VSD Constant Pressure System</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• VSD controller (1.5-2.2 kW rated)</li>
                    <li>• Advanced pump protection features</li>
                    <li>• Digital pressure display and controls</li>
                    <li>• Electrical installation with safety protection</li>
                    <li>• Professional calibration and setup</li>
                    <li>• Remote monitoring capability (optional)</li>
                    <li>• Comprehensive testing and commissioning</li>
                    <li className="font-semibold text-accent pt-2">Total Cost: ZAR 12,000 - 18,000</li>
                    <li className="text-xs pt-2">Includes VSD unit, installation, 24-month warranty</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Premium Hybrid System</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• VSD controller with advanced features</li>
                    <li>• 100-200L pressure tank for buffer capacity</li>
                    <li>• Remote monitoring and control via smartphone</li>
                    <li>• Professional electrical and plumbing integration</li>
                    <li>• Comprehensive pump protection suite</li>
                    <li>• Energy efficiency optimization</li>
                    <li>• Extended testing and documentation</li>
                    <li className="font-semibold text-accent pt-2">Total Cost: ZAR 18,000 - 28,000</li>
                    <li className="text-xs pt-2">Premium system for optimal performance and longevity</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pressure System Maintenance and Troubleshooting</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Proper maintenance ensures long-term reliable operation. Pressure tank systems require annual inspection of air pressure (should be 0.2 bar below cut-in pressure), checking for water leaks at fittings, testing pressure switch operation, and inspecting the tank bladder for wear. VSD systems require periodic inspection of electrical connections, checking cooling fan operation, verifying pressure sensor calibration, and updating firmware when available.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Common pressure system issues include: pressure tank waterlogging (bladder failure requiring replacement), pressure switch malfunction (causing incorrect cut-in/cut-out), VSD error codes (usually electrical issues or sensor problems), inconsistent pressure (often air leaks in pressure tanks or incorrect VSD settings), and pump short-cycling (undersized pressure tank or failed bladder). Most issues are quickly diagnosed and resolved by experienced technicians.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Energy Efficiency and Cost Savings</h3>

                <p className="text-muted-foreground leading-relaxed">
                  VSD constant pressure systems deliver significant energy savings compared to traditional pressure tanks. By adjusting pump speed to match demand precisely, VSD systems reduce electricity consumption by 30-40% for typical households. A 1.5 kW pump running continuously at full speed consumes substantial electricity, but a VSD system runs that same pump at reduced speeds most of the time, dramatically lowering power usage.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For example, a household using 2,000L daily might spend ZAR 300-400 monthly on borehole pumping with a traditional system. A VSD system reduces this to ZAR 180-240 monthly—savings of ZAR 1,440-1,920 annually. The VSD system typically pays for its additional cost through energy savings within 3-4 years, while also delivering superior pressure consistency and extended pump life.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros for Pressure System Installation</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Professional pressure system installation determines system reliability and performance. Here's why customers choose Borehole Pros:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Expert System Design:</strong> Custom pressure systems designed for your specific water demand and property layout
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Quality Components:</strong> Only premium pressure tanks, VSD controllers, and fittings from trusted manufacturers
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Professional Installation:</strong> Certified technicians with electrical and plumbing expertise
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Comprehensive Testing:</strong> Every system thoroughly tested and optimized before handover
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>600+ Systems Installed:</strong> Proven track record across residential and commercial properties
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Extended Warranties:</strong> 12-24 month warranty on all pressure system installations
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Installation Timeline</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Standard pressure tank installations take 1 day to complete, including plumbing integration and testing. VSD system installations typically require 1-2 days, depending on electrical work complexity and system configuration. Hybrid systems may take 2 days for complete installation and commissioning. We schedule installations at your convenience and work efficiently to minimize disruption.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For pressure system upgrades on existing boreholes, we can often complete the work in a single day. Our technicians arrive with all necessary components, remove old pressure switches or failed tanks, install the new pressure system, integrate with existing plumbing, and test thoroughly before departing. Emergency pressure system installations are available when you need urgent restoration of reliable water pressure.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">System Pricing</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Pressure Tank</p>
                      <p className="text-muted-foreground">ZAR 8,000-12,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">VSD System</p>
                      <p className="text-muted-foreground">ZAR 12,000-18,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Hybrid System</p>
                      <p className="text-muted-foreground">ZAR 18,000-28,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Installation Time</p>
                      <p className="text-muted-foreground">1-2 days complete</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Warranty</p>
                      <p className="text-muted-foreground">12-24 months coverage</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get System Quote</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-3">Free consultation & system design</p>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    WhatsApp Quote
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-3 text-sm">System Benefits</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Consistent water pressure</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Extended pump lifespan</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Energy efficiency (VSD)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Reduced pump cycling</span>
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
                Professional submersible pump installation with proper sizing, electrical connection, and testing. Premium Grundfos, Pedrollo, and Franklin pumps.
              </p>
              <Link href="/pump-installation" className="text-accent font-semibold hover:underline">
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
                Full borehole installation including drilling, pump setup, pressure system, and plumbing integration. End-to-end professional service.
              </p>
              <Link href="/borehole-installation" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-maintenance" className="hover:text-accent transition-colors">
                  Pressure System Maintenance
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Annual maintenance plans for pressure systems. Tank inspections, VSD calibration, and preventive care ensuring reliable operation.
              </p>
              <Link href="/borehole-maintenance" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/pump-repair" className="hover:text-accent transition-colors">
                  Pump Repair Services
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Expert pump diagnostics and repair. From pressure issues to motor problems—we restore pump and system performance efficiently.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Pressure System FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What's the difference between pressure tank and VSD systems?</h3>
              <p className="text-muted-foreground text-sm">
                Pressure tanks provide acceptable pressure variation (2.0-3.5 bar) while VSD systems maintain constant exact pressure regardless of demand. VSD systems cost more but deliver superior performance and energy savings.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much does pressure system installation cost?</h3>
              <p className="text-muted-foreground text-sm">
                Pressure tank systems: ZAR 8,000-12,000. VSD constant pressure systems: ZAR 12,000-18,000. Premium hybrid systems: ZAR 18,000-28,000. All prices include installation and warranty.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do VSD systems really save electricity?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. VSD systems reduce electricity consumption by 30-40% by adjusting pump speed to match demand. For typical households, this translates to ZAR 1,440-1,920 annual savings.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How long does pressure system installation take?</h3>
              <p className="text-muted-foreground text-sm">
                Pressure tank installations take 1 day. VSD systems require 1-2 days depending on electrical complexity. Hybrid systems typically take 2 days for complete installation and commissioning.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can I upgrade my existing pressure tank to VSD?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We regularly upgrade existing systems to VSD technology. The upgrade typically takes 1 day and costs ZAR 10,000-15,000 depending on your current setup and electrical requirements.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What maintenance do pressure systems require?</h3>
              <p className="text-muted-foreground text-sm">
                Pressure tanks need annual air pressure checks and occasional bladder replacement (every 5-7 years). VSD systems require minimal maintenance—periodic electrical inspection and sensor calibration every 2-3 years.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Professional Pressure System Installation?"
        description="Get expert installation with quality components and comprehensive testing. Consistent water pressure from ZAR 8,000. Call 060 348 8268 for your free consultation and system design."
        primaryText="Get System Quote"
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
            name: "Pressure System Installation Services",
            description: "Professional pressure system installation for boreholes. Pressure tanks, VSD controllers and constant pressure systems.",
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
              name: "Pressure System Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pressure Tank System Installation",
                    description: "Traditional pressure tank system with automatic pressure switch",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "8000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "VSD Constant Pressure System",
                    description: "Variable Speed Drive controller for constant pressure operation",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "12000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Premium Hybrid System",
                    description: "Combined VSD and pressure tank system for optimal performance",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "18000",
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
