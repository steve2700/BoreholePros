import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Wrench, CheckCircle2, Phone, Zap, Settings, Droplet } from "lucide-react"

export const metadata: Metadata = {
  title: "Submersible Pump Installation | Professional Borehole Pump Setup Services",
  description:
    "Expert submersible pump installation for boreholes. Professional setup, electrical connection & testing. Grundfos, Pedrollo & Franklin pumps. Call 060 348 8268.",
  keywords:
    "pump installation, submersible pump installation, borehole pump installation, water pump installation, pump setup, pump replacement",
  openGraph: {
    title: "Professional Pump Installation Services | Submersible Borehole Pumps",
    description: "Expert pump installation with certified technicians. Quality pumps and professional setup.",
  },
}

const services: ServiceItem[] = [
  {
    title: "Submersible Pump Installation",
    description: "Professional installation of high-quality submersible pumps at optimal depth.",
    href: "/contact",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/submersible-pump.jpg",
  },
  {
    title: "Electrical Connection",
    description: "Safe electrical setup with circuit protection and automatic control systems.",
    href: "/electrical-installation",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/electrical-connection.jpg",
  },
  {
    title: "Pump Replacement",
    description: "Fast pump replacement service with removal of old pump and new installation.",
    icon: <Wrench className="w-8 h-8" />,
    highlight: true,
    image: "/images/pump-replacement.jpg",
  },
]

export default function PumpInstallationPage() {
  return (
    <>
      <Hero
        title="Professional Submersible Pump Installation Services"
        subtitle="Expert Installation | Quality Pumps | Safe Electrical Setup"
        description="Professional submersible pump installation for boreholes. We install Grundfos, Pedrollo, and Franklin pumps with proper electrical connection and testing. Certified technicians ensure optimal performance and longevity. Call 060 348 8268."
        imageSrc="/images/pump-installation.jpg"
        cta={{
          primary: { text: "Get Installation Quote", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Pump Installation Solutions"
        description="From pump selection to electrical connection, we provide end-to-end installation services ensuring reliable water supply for decades."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Expert Submersible Pump Installation for Boreholes
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The submersible pump is the heart of your borehole system—responsible for lifting water from depths
                  of 60-120 meters to your property. Professional pump installation is critical for system performance,
                  longevity, and reliability. A correctly installed pump operates efficiently for 15-20 years, while
                  improper installation leads to premature failure, often within 2-3 years.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole Pros specializes in submersible pump installation across Gauteng. Our certified technicians
                  have installed over 900 pumps since 2009, using only premium brands: Grundfos, Pedrollo, and Franklin
                  Electric. We handle complete installation—from pump selection and depth positioning to electrical
                  connection and comprehensive testing. Every installation meets strict safety standards and includes
                  warranty coverage.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Pump Installation Process</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our installation process is methodical and comprehensive, ensuring optimal pump performance from day
                  one. Here's what professional pump installation involves:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 1: Pump Selection and Sizing</strong> — Proper pump selection is crucial. We calculate
                  exact requirements based on borehole depth, water column height, peak water demand, and property
                  elevation. Residential properties typically need 1.5-2.2 kW submersible pumps, while commercial
                  installations require 3-5 kW systems. Undersized pumps deliver insufficient pressure; oversized pumps
                  waste electricity and wear prematurely. Our engineers ensure perfect sizing for your specific needs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 2: Pre-Installation Inspection</strong> — Before installation, we inspect the borehole
                  casing for damage, measure actual depth and water level, and verify electrical supply capacity. We
                  test water quality to ensure pump materials are compatible—certain minerals require corrosion-resistant
                  pump construction. This inspection prevents complications during installation and ensures we select
                  appropriate equipment.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 3: Pump Preparation and Assembly</strong> — The submersible pump is prepared with
                  high-quality HDPE rising main, stainless steel suspension cables rated for underwater use, and
                  waterproof electrical connections using marine-grade cable glands. We install non-return valves
                  preventing water hammer damage, and safety rope as backup support. All connections are tested before
                  lowering into the borehole.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 4: Pump Positioning and Installation</strong> — The pump is carefully lowered to optimal
                  depth—typically 10-15 meters below static water level. This positioning ensures the pump never runs
                  dry while maximizing efficiency. We use calibrated depth markers and measure precisely. The suspension
                  cable is secured to a wellhead mounting bracket designed to support the pump's weight indefinitely.
                  Proper installation prevents pump drop failures that plague amateur installations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 5: Electrical Connection and Protection</strong> — Safe electrical installation follows
                  SANS 10142-1 standards. We connect pumps through dedicated circuits with proper earth leakage
                  protection (30mA trip), overload safeguards calibrated to pump specifications, and surge arrestors
                  protecting against lightning damage. Control boxes are weatherproof and positioned for easy
                  maintenance access. All wiring uses correctly sized cables accounting for voltage drop over distance.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 6: Testing and Commissioning</strong> — Comprehensive testing ensures proper operation.
                  We measure actual flow rate and compare against specifications, verify amperage draw is within normal
                  range, test all safety systems including earth leakage and overload protection, and run extended
                  operation tests checking for vibration or unusual noise. Performance data is documented for future
                  reference during maintenance.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Premium Pump Brands We Install</h3>

                <p className="text-muted-foreground leading-relaxed">
                  We exclusively install premium submersible pumps proven for reliability in South African conditions.
                  Quality pumps cost more initially but deliver superior performance and longevity:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Grundfos Submersible Pumps:</strong> Danish engineering renowned for efficiency and
                  durability. Grundfos pumps feature stainless steel construction, advanced motor protection, and
                  industry-leading efficiency ratings. These pumps typically last 18-25 years with proper maintenance.
                  Popular models include the SP series for residential applications and SQ series for smaller boreholes.
                  Price range: ZAR 9,500-16,000.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Pedrollo Submersible Pumps:</strong> Italian quality offering excellent value. Pedrollo pumps
                  use corrosion-resistant materials, feature thermal overload protection, and deliver reliable
                  performance in demanding conditions. The 4SR series is popular for residential boreholes, while 6SR
                  handles commercial applications. Expected lifespan: 15-20 years. Price range: ZAR 7,500-13,000.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Franklin Electric Pumps:</strong> American engineering specializing in submersible motors.
                  Franklin pumps excel in deep boreholes and high-temperature applications. They feature patented
                  SubMonitor motor protection and WaterFilled motor design for superior cooling. Ideal for commercial
                  installations requiring maximum reliability. Price range: ZAR 11,000-18,000.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pump Installation Costs and Pricing</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Professional pump installation costs vary based on pump size, borehole depth, and installation
                  complexity. Here's typical pricing for complete installations:
                </p>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Standard Residential Installation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 1.5 kW submersible pump (Pedrollo or equivalent)</li>
                    <li>• Installation up to 80m depth</li>
                    <li>• HDPE rising main and fittings</li>
                    <li>• Electrical connection with safety protection</li>
                    <li>• Testing and commissioning</li>
                    <li className="font-semibold text-accent pt-2">Total Cost: ZAR 12,000 - 16,000</li>
                    <li className="text-xs pt-2">Includes pump, materials, labor, and 12-month warranty</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Premium Residential Installation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2.2 kW submersible pump (Grundfos or Franklin)</li>
                    <li>• Installation up to 120m depth</li>
                    <li>• Premium rising main with backup safety rope</li>
                    <li>• Advanced electrical setup with surge protection</li>
                    <li>• Smart controller with dry-run protection</li>
                    <li>• Comprehensive testing and documentation</li>
                    <li className="font-semibold text-accent pt-2">Total Cost: ZAR 18,000 - 24,000</li>
                    <li className="text-xs pt-2">Includes premium pump, advanced controls, 24-month warranty</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Commercial Installation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 4 kW industrial submersible pump</li>
                    <li>• Installation any depth with specialized equipment</li>
                    <li>• Industrial-grade rising main (50mm+)</li>
                    <li>• Three-phase electrical with VSD control</li>
                    <li>• Remote monitoring and telemetry options</li>
                    <li>• Extended testing and performance verification</li>
                    <li className="font-semibold text-accent pt-2">Total Cost: ZAR 28,000 - 42,000</li>
                    <li className="text-xs pt-2">Custom solutions for high-demand applications</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pump Replacement Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Existing pumps eventually wear out and require replacement. We provide fast pump replacement services
                  including removal of failed pumps, inspection of borehole condition, installation of new pumps, and
                  system testing. Pump replacement typically takes 1-2 days and costs ZAR 10,000-20,000 depending on
                  pump size and depth.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Signs your pump needs replacement include declining water pressure, unusual noises or vibration,
                  frequent circuit breaker trips, increased electricity consumption, and intermittent operation. If you
                  experience these symptoms, contact us for diagnostic assessment. Sometimes repairs are possible, but
                  pumps over 12 years old typically warrant replacement rather than expensive repairs.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros for Pump Installation</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Professional installation determines your pump's lifespan and performance. Here's why customers choose
                  Borehole Pros for pump installation:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Certified Technicians:</strong> All installers hold electrical and plumbing
                      certifications with 10+ years experience
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Premium Pumps Only:</strong> We install Grundfos, Pedrollo, and Franklin pumps—no
                      budget brands
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Safety Compliance:</strong> All installations meet SANS standards with electrical
                      certification
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Comprehensive Warranty:</strong> 12-24 month warranty covering labor and equipment
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>900+ Pumps Installed:</strong> Proven track record with residential and commercial
                      clients
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Transparent Pricing:</strong> Fixed quotes with no hidden costs—price includes
                      everything
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Installation Timeline and Process</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Standard pump installation takes 1-2 days from start to completion. Day one involves site preparation,
                  pump assembly, and installation. Day two covers electrical connection, testing, and system
                  commissioning. We schedule installations at your convenience and work efficiently to minimize
                  disruption.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For pump replacements, we often complete the work in a single day. Our technicians arrive with all
                  necessary equipment, remove the failed pump, inspect the borehole, install the new pump, and test
                  thoroughly before departing. Emergency pump replacements can be expedited—we maintain stock of common
                  pump sizes for rapid deployment when you need urgent water supply restoration.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Installation Pricing</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Standard (1.5 kW)</p>
                      <p className="text-muted-foreground">ZAR 12,000-16,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Premium (2.2 kW)</p>
                      <p className="text-muted-foreground">ZAR 18,000-24,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Commercial (4 kW)</p>
                      <p className="text-muted-foreground">ZAR 28,000-42,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Installation Time</p>
                      <p className="text-muted-foreground">1-2 days complete</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Warranty</p>
                      <p className="text-muted-foreground">12-24 months full coverage</p>
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
                  <p className="text-xs text-center text-muted-foreground mb-3">Free consultation & assessment</p>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    WhatsApp Quote
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-3 text-sm">Pump Brands We Install</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Grundfos submersible pumps</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Pedrollo borehole pumps</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Franklin Electric pumps</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>All premium brands available</span>
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
            Related Pump Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-installation" className="hover:text-accent transition-colors">
                  Complete Borehole Installation
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Full borehole installation including drilling, pump setup, and plumbing integration. Professional
                end-to-end service for new boreholes.
              </p>
              <Link href="/borehole-installation" className="text-accent font-semibold hover:underline">
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
                Expert pump diagnostics and repair. From bearing replacement to motor rewinding—we restore pump
                performance efficiently.
              </p>
              <Link href="/pump-repair" className="text-accent font-semibold hover:underline">
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
                Complete pressure tank and control system installation. Ensure consistent water pressure throughout
                your property.
              </p>
              <Link href="/pressure-systems" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-maintenance" className="hover:text-accent transition-colors">
                  Pump Maintenance Plans
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Annual maintenance plans keeping your pump running perfectly. Preventive care extends pump life to 20+
                years.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Pump Installation FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How long does pump installation take?</h3>
              <p className="text-muted-foreground text-sm">
                Standard installations take 1-2 days. Simple pump replacements can be completed in a single day.
                Commercial installations may require 2-3 days.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What pump size do I need for my borehole?</h3>
              <p className="text-muted-foreground text-sm">
                Depends on borehole depth and water demand. Most residential properties need 1.5-2.2 kW pumps. We
                calculate exact requirements during assessment.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Which pump brands do you recommend?</h3>
              <p className="text-muted-foreground text-sm">
                We install Grundfos, Pedrollo, and Franklin Electric pumps. All premium brands proven for reliability
                and longevity in South African conditions.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What warranty comes with installation?</h3>
              <p className="text-muted-foreground text-sm">
                12-month warranty on standard installations, 24-month on premium installations. Pumps include
                manufacturer warranty (2-5 years depending on brand).
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can you replace an existing pump?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We remove failed pumps and install replacements efficiently. Pump replacement typically costs ZAR
                10,000-20,000 and takes 1-2 days.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do you provide emergency pump installation?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We offer priority emergency installation for urgent situations. We maintain stock of common pump
                sizes for rapid deployment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Professional Pump Installation?"
        description="Get expert installation with premium pumps and certified technicians. Complete setup from ZAR 12,000. Call 060 348 8268 for your free consultation."
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
            name: "Submersible Pump Installation Services",
            description: "Professional submersible pump installation for boreholes. Expert setup with premium pumps.",
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
              name: "Pump Installation Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Standard Pump Installation",
                    description: "1.5 kW submersible pump installation for residential properties",
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
                    name: "Premium Pump Installation",
                    description: "2.2 kW premium pump installation with advanced controls",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "18000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Pump Installation",
                    description: "4 kW industrial pump installation for commercial applications",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "28000",
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
