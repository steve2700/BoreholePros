import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { 
  Wrench, 
  CheckCircle2, 
  Phone, 
  AlertCircle, 
  Droplet, 
  MapPin, 
  Clock,
  Shield,
  Award,
  Users,
  Zap,
  Wind,
  Settings
} from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Plumbing Services South Africa | Expert Plumbers Available 24/7",
  description:
    "Comprehensive plumbing services across South Africa. Emergency plumbers, leak detection, drain cleaning, geyser installation, pipe repairs, pump services. 24/7 service in Johannesburg, Cape Town, Pretoria, Durban. Call 060 348 8268.",
  keywords:
    "plumbing services, professional plumbers, emergency plumbing, leak detection, drain cleaning, geyser installation, pipe repairs, pump repair, submersible pump, 24/7 plumber",
  openGraph: {
    title: "Professional Plumbing Services | 24/7 Expert Plumbers South Africa",
    description: "Comprehensive plumbing solutions with fast response times. Trusted by 5,000+ customers since 2009.",
  },
}

const services: ServiceItem[] = [
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency response for burst pipes, major leaks, and urgent plumbing failures.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    image: "/images/emergency-plumbing.jpg",
    highlight: true,
  },
  {
    title: "Leak Detection & Repair",
    description: "Advanced technology detecting hidden leaks without excavation or wall damage.",
    href: "/leak-detection",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/leak-detection.jpg",
  },
  {
    title: "Drain Cleaning",
    description: "Professional drain unblocking for toilets, sinks, and main sewer lines.",
    href: "/blocked-drain-johannesburg",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/drain-cleaning.jpg",
  },
  {
    title: "Geyser Installation",
    description: "Complete geyser services including installation, repairs, and replacements.",
    href: "/geyser-installation-johannesburg",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/geyser-services.jpg",
  },
  {
    title: "Pipe Repairs",
    description: "Expert pipe repair and replacement for burst pipes and corroded plumbing.",
    href: "/pipe-repairs",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/pipe-repairs.jpg",
  },
  {
    title: "Pump Inspection",
    description: "Comprehensive pump diagnostics and inspection services for all pump types.",
    href: "/pump-inspection",
    icon: <Settings className="w-8 h-8" />,
    image: "/images/pump-inspection.jpg",
  },
  {
    title: "Pump Repair",
    description: "Expert pump repair services for borehole, pressure, and circulation pumps.",
    href: "/pump-repair",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/pump-repair.jpg",
  },
  {
    title: "Submersible Pump",
    description: "Specialist submersible pump installation, maintenance, and repair services.",
    href: "/submersible-pump",
    icon: <Wind className="w-8 h-8" />,
    image: "/images/submersible-pump.jpg",
  },
  {
    title: "General Plumbing",
    description: "Comprehensive plumbing maintenance, repairs, and installation services.",
    href: "/plumber-johannesburg",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/general-plumbing.jpg",
  },
]

export default function PlumbingServicesPage() {
  return (
    <>
      <Hero
        title="Professional Plumbing Services Across South Africa"
        subtitle="Expert Plumbers | 24/7 Emergency Response | 5,000+ Satisfied Customers"
        description="Comprehensive plumbing solutions for residential, commercial, and industrial properties. From emergency repairs to planned installations, our licensed plumbers deliver quality workmanship across Johannesburg, Cape Town, Pretoria, and Durban. Available 24/7. Call 060 348 8268."
        imageSrc="/images/plumbing-services-hero.jpg"
        cta={{
          primary: { text: "Get Emergency Service", href: "/emergency-plumbing" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <section className="py-12 md:py-16 bg-muted">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">24/7 Availability</h3>
              <p className="text-sm text-muted-foreground">Emergency service available around the clock</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">15+ Years Experience</h3>
              <p className="text-sm text-muted-foreground">Established in 2009, proven track record</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">5,000+ Customers</h3>
              <p className="text-sm text-muted-foreground">Trusted by homes and businesses</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">12-month warranty on all work</p>
            </Card>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Comprehensive Plumbing Solutions"
        description="Professional plumbing services covering every aspect of residential and commercial plumbing needs across South Africa."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                South Africa's Leading Plumbing Service Provider
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Plumbing problems disrupt daily life, damage property, and waste resources. Whether you're facing an emergency burst pipe flooding your home at 2 AM or planning a bathroom renovation requiring expert installation, professional plumbing services make the difference between temporary fixes and lasting solutions. Borehole Pros has provided comprehensive plumbing services across South Africa since 2009, building a reputation for quality workmanship, honest pricing, and reliable service.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our team of licensed, experienced plumbers has completed over 5,000 plumbing jobs spanning emergency repairs, planned installations, maintenance contracts, and complete system replacements. We serve residential homes, commercial buildings, industrial facilities, and government properties across South Africa's major metropolitan areas including <Link href="/plumber-johannesburg" className="text-accent hover:underline">Johannesburg</Link>, <Link href="/cape-town" className="text-accent hover:underline">Cape Town</Link>, <Link href="/plumber-pretoria" className="text-accent hover:underline">Pretoria</Link>, and <Link href="/durban" className="text-accent hover:underline">Durban</Link>. Every job receives the same attention to quality—from fixing a dripping tap to installing complete plumbing systems in new constructions.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">24/7 Emergency Plumbing Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Plumbing emergencies don't wait for business hours. Burst pipes flood homes at midnight, geysers fail on cold winter mornings, and blocked sewers back up during weekend gatherings. Our <Link href="/emergency-plumbing" className="text-accent hover:underline">emergency plumbing service</Link> operates 24 hours daily, 7 days weekly, 365 days yearly across all major cities. When you call our emergency line, you reach a real plumber—not an answering service—who coordinates immediate response.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Emergency response times average 1-2 hours in major metropolitan areas like <Link href="/emergency-plumber-johannesburg" className="text-accent hover:underline">Johannesburg</Link>, <Link href="/plumber-sandton" className="text-accent hover:underline">Sandton</Link>, <Link href="/plumber-midrand" className="text-accent hover:underline">Midrand</Link>, and <Link href="/centurion" className="text-accent hover:underline">Centurion</Link>, with fully equipped service vehicles arriving ready to handle most emergency scenarios immediately. Our emergency protocol prioritizes stopping damage—shutting off water supplies, containing leaks, and implementing temporary repairs—before completing permanent solutions.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Common plumbing emergencies we handle include burst pipes causing flooding, major leaks damaging ceilings or walls, completely blocked drains backing up sewage, failed geysers flooding ceilings, no water supply due to system failures, and gas leaks requiring immediate attention. Emergency callouts cost ZAR 850-1,200 depending on time and location, with this diagnostic fee credited toward repair costs. We provide transparent quotes before starting work, even in emergencies, ensuring you understand costs before authorizing repairs.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Leak Detection Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Hidden leaks are silent destroyers—wasting thousands of liters monthly, inflating water bills, and causing gradual structural damage that becomes expensive to repair. Many leaks occur underground, inside walls, or under concrete slabs where they're invisible until significant damage accumulates. Our <Link href="/leak-detection" className="text-accent hover:underline">advanced leak detection services</Link> locate hidden leaks without unnecessary excavation or property damage.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We use specialized leak detection technology including acoustic listening equipment that hears water escaping from pressurized pipes, thermal imaging cameras revealing temperature changes indicating leaks, tracer gas detection for underground pipes, and pressure testing isolating leak locations. This technology-driven approach locates leaks precisely, minimizing repair costs by avoiding exploratory excavation.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Signs indicating hidden leaks include unexplained water bill increases exceeding 20% without usage changes, constant running water sounds when all fixtures are closed, damp patches appearing on walls or ceilings, musty odors indicating hidden moisture and mold growth, reduced water pressure across the property, foundation cracks from soil erosion, and unusually green patches in otherwise dry lawns. If you notice these signs, early leak detection prevents extensive damage—a small leak ignored for six months can cause ZAR 20,000-50,000 in structural repairs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Leak detection services cost ZAR 950-1,800 depending on property size and leak complexity. Once located, repair costs vary: accessible leaks cost ZAR 800-2,500 to repair, while underground or in-wall leaks requiring excavation range from ZAR 3,000-7,500. We use minimally invasive repair techniques when possible, preserving landscaping and interior finishes while permanently fixing leaks.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Blocked Drain and Sewer Cleaning</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Blocked drains are among the most common plumbing problems, ranging from minor sink clogs to complete sewer line blockages backing up sewage into homes. Our <Link href="/blocked-drain-johannesburg" className="text-accent hover:underline">professional drain cleaning services</Link> clear blockages using specialized equipment designed for different drain types and blockage severities.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For simple blockages in sinks, showers, or toilets, we use drain snakes and augering equipment clearing accumulated hair, soap scum, and debris. Kitchen drain blockages often involve grease buildup requiring high-pressure water jetting dissolving and flushing accumulated fats. Main sewer line blockages—the most serious—require professional equipment like motorized drain machines, high-pressure water jetting systems, and CCTV drain cameras identifying blockage causes.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Tree root invasion causes many main sewer line blockages, particularly in older properties with clay pipes. Roots penetrate pipe joints seeking moisture, eventually filling pipes completely. We use specialized root-cutting equipment clearing roots and, when necessary, recommend pipe relining or replacement preventing future invasions. CCTV drain inspection following cleaning confirms complete blockage removal and identifies any underlying pipe damage requiring attention.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Drain cleaning costs vary by blockage type: simple sink or toilet blockages cost ZAR 600-1,200, shower drain clearing costs ZAR 800-1,500, main sewer line clearing costs ZAR 1,500-3,500, and severe blockages requiring excavation cost ZAR 3,500-8,000. We provide fixed quotes before starting work, with no hidden charges.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Geyser Installation and Repair Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Hot water is essential for comfortable modern living, making geyser failures particularly disruptive. Our comprehensive <Link href="/geyser-installation-johannesburg" className="text-accent hover:underline">geyser services</Link> cover installation, repairs, maintenance, and emergency replacements across all geyser types including electric, gas, solar, and heat pump systems.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Common geyser problems include thermostat failures causing no hot water or scalding water, element failures preventing water heating, pressure relief valve leaks indicating excessive pressure, burst geysers flooding ceilings, and pilot light failures in gas geysers. Many geyser failures are repairable—replacing elements, thermostats, or valves costs ZAR 1,200-2,500, significantly less than complete replacement.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When replacement is necessary, we install quality geysers with proper certification and warranty coverage. Standard electric geyser installation (150-200 liter) costs ZAR 6,500-9,500 including geyser, installation, new drip tray, and valve replacement. Solar geyser installation costs ZAR 18,000-35,000 depending on system size and complexity, with government rebates potentially reducing costs. We handle all required compliance certification ensuring insurance validity.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Preventive geyser maintenance extends system life and prevents failures. We recommend annual geyser inspections costing ZAR 450-650, including pressure testing, thermostat calibration, valve inspection, and sediment flushing. This preventive maintenance typically extends geyser life by 3-5 years, preventing expensive emergency replacements.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Comprehensive Pipe Repair and Replacement</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Pipe failures cause significant property damage and disruption. Whether dealing with burst pipes, corroded plumbing, or persistent leaks, our <Link href="/pipe-repairs" className="text-accent hover:underline">pipe repair services</Link> restore plumbing integrity using quality materials and professional techniques. We handle everything from minor leak repairs to complete home re-piping projects.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Burst pipes require immediate emergency response—water flowing from burst pipes causes thousands of rands damage hourly. Our emergency protocol stops water flow immediately, implements temporary repairs preventing further damage, and completes permanent repairs as quickly as possible. Burst pipe repairs typically cost ZAR 1,200-3,500 depending on pipe location and damage extent.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Older properties often have corroded galvanized steel pipes installed 30-50 years ago. These pipes rust internally, restricting flow, discoloring water, and eventually failing. Signs indicating pipe replacement needs include rusty or brown-colored water, dramatically reduced water pressure, frequent leaks in multiple locations, and visible corrosion on exposed pipes. Complete residential re-piping costs ZAR 18,000-75,000 depending on property size, using modern materials like copper, PEX, or CPVC providing 50+ year lifespans.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Pump Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Water pumps are critical infrastructure components in many South African properties, particularly those with boreholes, water storage systems, or pressure boosting requirements. Our comprehensive pump services ensure reliable water supply through expert installation, regular maintenance, thorough inspections, and prompt repairs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our <Link href="/pump-inspection" className="text-accent hover:underline">pump inspection services</Link> provide detailed diagnostics identifying developing problems before they cause complete pump failure. Comprehensive pump inspections cost ZAR 650-1,200 and include electrical testing, mechanical component inspection, pressure and flow rate testing, motor bearing assessment, impeller condition evaluation, and seal integrity checks. Regular six-monthly inspections typically extend pump life by 40-60%, preventing expensive emergency replacements and extended water supply interruptions.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When pumps do fail, our <Link href="/pump-repair" className="text-accent hover:underline">professional pump repair services</Link> restore functionality quickly and reliably. Common pump problems include motor failures, impeller damage from debris or cavitation, seal leaks causing water loss, pressure switch malfunctions, and bearing failures causing excessive noise. Pump repair costs range from ZAR 1,200-4,500 depending on failure type, significantly less than replacement costs of ZAR 8,000-35,000 for quality pumps.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <Link href="/submersible-pump" className="text-accent hover:underline">Submersible pump services</Link> represent a specialized expertise area due to these pumps' unique installation requirements and operating environments. Submersible pumps operate underwater in boreholes or tanks, making diagnosis and repair more complex than surface pumps. We handle complete submersible pump installations, retrieval and repair services, cable and control system maintenance, and emergency replacements when pumps fail completely.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Submersible pump installation costs vary based on borehole depth and pump capacity: shallow installations (up to 30 meters) cost ZAR 12,000-18,000, medium depth installations (30-60 meters) cost ZAR 18,000-28,000, and deep installations (60-100+ meters) cost ZAR 28,000-45,000. These installations include the pump, rising main, electrical cable, control box, and all necessary fittings. We only install quality brands with proven reliability in South African conditions.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Plumbing Services Across Major South African Cities</h3>

                <p className="text-muted-foreground leading-relaxed">
                  We provide comprehensive plumbing services across South Africa's major metropolitan areas, with local teams understanding each region's specific plumbing challenges, building codes, and water quality issues:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Johannesburg Plumbing Services</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Comprehensive plumbing services across <Link href="/johannesburg" className="text-accent hover:underline">Johannesburg</Link> and surrounding areas including <Link href="/sandton" className="text-accent hover:underline">Sandton</Link>, <Link href="/fourways" className="text-accent hover:underline">Fourways</Link>, <Link href="/midrand" className="text-accent hover:underline">Midrand</Link>, <Link href="/east-rand" className="text-accent hover:underline">East Rand</Link>, and <Link href="/germiston" className="text-accent hover:underline">Germiston</Link>. Our Johannesburg team handles residential estates, high-rise buildings, and commercial properties with expertise in winter burst pipe prevention.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Cape Town Plumbing Services</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Serving <Link href="/cape-town" className="text-accent hover:underline">Cape Town</Link>, Northern Suburbs, Southern Suburbs, and Atlantic Seaboard. Our Cape Town specialists handle coastal corrosion challenges, water-saving installations complying with regional restrictions, and Victorian-era plumbing requiring sensitive restoration.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Pretoria Plumbing Services</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Comprehensive services across <Link href="/pretoria" className="text-accent hover:underline">Pretoria</Link>, <Link href="/centurion" className="text-accent hover:underline">Centurion</Link>, and Tshwane metropolitan areas. Our Pretoria team specializes in government buildings, educational institutions, and diverse residential properties across the capital region.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Durban Plumbing Services</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Serving <Link href="/durban" className="text-accent hover:underline">Durban</Link>, Umhlanga, Westville, and coastal KwaZulu-Natal. Our Durban specialists address humidity-related corrosion, tropical climate challenges, and coastal property plumbing unique to subtropical regions.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros for Plumbing Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Selecting the right plumber affects both immediate results and long-term reliability. Here's why thousands of South Africans trust Borehole Pros for their plumbing needs:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Licensed, Experienced Plumbers:</strong> All our plumbers hold proper licenses and certifications, with average 8+ years field experience handling diverse plumbing scenarios
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>24/7 Emergency Response:</strong> True round-the-clock availability with 1-2 hour response times in major cities, not answering services promising next-day callbacks
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Transparent, Fixed Pricing:</strong> Detailed quotes before work begins with no hidden charges—emergency diagnostic fees credited toward repairs
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Quality Materials and Workmanship:</strong> We use premium materials from reputable suppliers, properly installed following manufacturer specifications and building codes
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Comprehensive Service Range:</strong> Single provider handling all plumbing needs from emergency repairs to planned installations, eliminating coordination hassles
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>12-Month Warranty Coverage:</strong> All work covered by comprehensive warranty protecting both workmanship and materials used
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Proven Track Record:</strong> Over 5,000 satisfied customers since 2009, with many repeat clients and referral-based growth demonstrating consistent quality
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Preventive Plumbing Maintenance</h3>

                <p className="text-muted-foreground leading-relaxed">
                  While we excel at repairs, preventing problems is better than fixing failures. Regular plumbing maintenance identifies developing issues before they become expensive emergencies. We offer comprehensive maintenance services including annual plumbing inspections, geyser servicing, drain preventive cleaning, water pressure testing and regulation, pump inspections and servicing, and leak detection surveys.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Annual plumbing inspections cost ZAR 600-950 and typically prevent ZAR 5,000-15,000 in emergency repairs by identifying problems early. Inspections include checking all fixtures for leaks, testing water pressure and flow rates, inspecting visible pipes for corrosion, testing geyser operation and safety devices, checking drain flow and potential blockages, inspecting toilet mechanisms and seals, and evaluating pump performance where applicable.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For properties over 20 years old, particularly those with original galvanized pipes or borehole water systems, annual inspections are essential. Early detection of corrosion, slow leaks, or developing blockages allows planned repairs during convenient times at standard rates, avoiding expensive emergency callouts and extensive damage repairs.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Contact Us for Professional Plumbing Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Whether you need emergency plumbing assistance now or want to schedule routine maintenance, our team is ready to help. We're available 24/7 for emergencies and offer convenient appointment scheduling for planned work. Call us at 060 348 8268 or WhatsApp for fast response, detailed quotes, and professional plumbing services you can trust.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Quick Service Links</h3>
                  <div className="space-y-2 text-sm">
                    <Link href="/emergency-plumbing" className="block text-accent hover:underline font-semibold">
                      → 24/7 Emergency Plumbing
                    </Link>
                    <Link href="/leak-detection" className="block text-accent hover:underline">
                      → Leak Detection Services
                    </Link>
                    <Link href="/blocked-drain-johannesburg" className="block text-accent hover:underline">
                      → Drain Cleaning & Unblocking
                    </Link>
                    <Link href="/geyser-installation-johannesburg" className="block text-accent hover:underline">
                      → Geyser Installation & Repair
                    </Link>
                    <Link href="/pipe-repairs" className="block text-accent hover:underline">
                      → Pipe Repairs & Replacement
                    </Link>
                    <Link href="/pump-inspection" className="block text-accent hover:underline">
                      → Pump Inspection Services
                    </Link>
                    <Link href="/pump-repair" className="block text-accent hover:underline">
                      → Pump Repair Services
                    </Link>
                    <Link href="/submersible-pump" className="block text-accent hover:underline">
                      → Submersible Pump Services
                    </Link>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Need a Plumber?</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-3">24/7 emergency service available</p>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    WhatsApp Us
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-3 text-sm">Service Areas</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/johannesburg" className="hover:underline">
                        Johannesburg
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/sandton" className="hover:underline">
                        Sandton
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/midrand" className="hover:underline">
                        Midrand
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/fourways" className="hover:underline">
                        Fourways
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/centurion" className="hover:underline">
                        Centurion
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/pretoria" className="hover:underline">
                        Pretoria
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/cape-town" className="hover:underline">
                        Cape Town
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <Link href="/durban" className="hover:underline">
                        Durban
                      </Link>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Get Professional Plumbing Services Today"
        description="Available 24/7 for emergencies and scheduled appointments. Quality work, transparent pricing, 12-month warranty."
        primaryCTA={{
          text: "Call: 060 348 8268",
          href: "tel:0603488268",
        }}
        secondaryCTA={{
          text: "WhatsApp Us",
          href: "https://wa.me/27603488268",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Professional Plumbing Services South Africa",
            description: "Comprehensive plumbing services including emergency repairs, leak detection, drain cleaning, geyser installation, pipe repairs, and pump services. 24/7 availability across South Africa.",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Pros",
              telephone: "060-348-8268",
              url: "https://boreholepros.co.za",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
              },
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
              {
                "@type": "City",
                name: "Sandton",
              },
              {
                "@type": "City",
                name: "Midrand",
              },
              {
                "@type": "City",
                name: "Centurion",
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
              name: "Plumbing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Plumbing Services",
                    description: "24/7 emergency plumbing response for burst pipes, major leaks, and urgent failures",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "850",
                    maxPrice: "1200",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Leak Detection Services",
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
                    name: "Drain Cleaning Services",
                    description: "Professional drain unblocking for toilets, sinks, showers, and main sewer lines",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "600",
                    maxPrice: "8000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Geyser Installation and Repair",
                    description: "Complete geyser services including installation, repairs, and maintenance",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "1200",
                    maxPrice: "35000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pipe Repair and Replacement",
                    description: "Expert pipe repair and complete re-piping services",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "1200",
                    maxPrice: "75000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pump Inspection Services",
                    description: "Comprehensive pump diagnostics and inspection for all pump types",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "650",
                    maxPrice: "1200",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pump Repair Services",
                    description: "Professional pump repair for borehole, pressure, and circulation pumps",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "1200",
                    maxPrice: "4500",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Submersible Pump Services",
                    description: "Specialist submersible pump installation, maintenance, and repair",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "12000",
                    maxPrice: "45000",
                    priceCurrency: "ZAR",
                  },
                },
              ],
            },
          }),
        }}
      />
