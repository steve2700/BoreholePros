import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Wrench, CheckCircle2, Phone, AlertCircle, Zap, Droplet } from "lucide-react"

export const metadata: Metadata = {
  title: "Pump Repair Services | Professional Borehole Pump Repair & Diagnostics",
  description:
    "Expert borehole pump repair services. Fast diagnostics, motor repairs, bearing replacement & electrical troubleshooting. Same-day service available. Call 060 348 8268.",
  keywords:
    "pump repair, borehole pump repair, submersible pump repair, pump diagnostics, motor repair, bearing replacement, pump troubleshooting",
  openGraph: {
    title: "Professional Pump Repair Services | Expert Borehole Pump Diagnostics",
    description: "Fast, reliable pump repair with certified technicians. Same-day diagnostics and repair service.",
  },
}

const services: ServiceItem[] = [
  {
    title: "Pump Diagnostics",
    description: "Comprehensive pump testing and diagnostics identifying exact failure causes and repair requirements.",
    href: "/pump-diagnostics",
    icon: <AlertCircle className="w-8 h-8" />,
    image: "/images/pump-diagnostics.jpg",
  },
  {
    title: "Motor Repairs & Rewinding",
    description: "Professional motor repair including rewinding, bearing replacement, and seal restoration.",
    href: "/motor-repair",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/motor-repair.jpg",
    highlight: true,
  },
  {
    title: "Emergency Pump Repair",
    description: "Same-day emergency repair service for urgent water supply restoration. Priority response available.",
    href: "/emergency-repair",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/emergency-repair.jpg",
  },
]

export default function PumpRepairPage() {
  return (
    <>
      <Hero
        title="Professional Borehole Pump Repair Services"
        subtitle="Fast Diagnostics | Expert Repairs | Same-Day Service Available"
        description="Expert borehole pump repair services across Gauteng. Our certified technicians diagnose and repair submersible pumps quickly and effectively. From motor rewinding to bearing replacement—we restore pump performance efficiently. Emergency same-day service available. Call 060 348 8268."
        imageSrc="/images/pump-repair.jpg"
        cta={{
          primary: { text: "Get Repair Quote", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Pump Repair Solutions"
        description="From diagnostics to motor rewinding, we provide comprehensive pump repair services restoring your borehole system to optimal performance."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Expert Borehole Pump Repair Services
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Borehole pump failures disrupt your water supply and require immediate attention. Professional pump repair restores reliable operation quickly and cost-effectively. Whether your pump has stopped working completely, delivers reduced pressure, makes unusual noises, or trips circuit breakers frequently—expert diagnostics identify the exact problem and determine the most appropriate repair solution.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole Pros specializes in submersible pump repair across Gauteng. Our certified technicians have repaired over 1,200 pumps since 2009, working with all major brands including Grundfos, Pedrollo, Franklin Electric, and others. We provide comprehensive repair services from diagnostics and motor rewinding to bearing replacement and seal restoration. Most repairs are completed within 3-5 days, with same-day emergency service available when you need urgent water supply restoration.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Common Pump Problems and Symptoms</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Understanding pump failure symptoms helps determine urgency and likely repair requirements:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Pump Not Running (No Water):</strong> The most obvious failure—turning on the system produces no water. Causes include motor failure (burnt windings or seized bearings), electrical issues (tripped breakers, faulty control box, damaged cables), or mechanical problems (jammed impeller, broken shaft). This requires immediate diagnostics to determine if repair is feasible or replacement necessary. Diagnostic cost: ZAR 1,500-2,500.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Reduced Water Pressure or Flow:</strong> Pump runs but delivers insufficient pressure or flow rate. Common causes include worn impellers reducing pumping efficiency, partial motor winding damage limiting power output, valve or pipe blockages restricting flow, or pump operating at incorrect depth (water level dropped). Often repairable through impeller replacement, minor motor repairs, or system adjustments. Repair cost: ZAR 3,500-8,000.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Unusual Noises or Vibration:</strong> Grinding, rattling, or excessive vibration indicates mechanical wear. Typically caused by bearing failure (most common), shaft misalignment, or debris in the impeller chamber. Bearing replacement is straightforward and extends pump life significantly. Ignoring these symptoms leads to complete motor failure. Bearing replacement cost: ZAR 4,000-7,000.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Frequent Circuit Breaker Trips:</strong> Electrical overload causing breaker trips suggests motor problems. Causes include partially shorted windings drawing excessive current, bearing seizure increasing mechanical load, or electrical insulation breakdown. Requires immediate attention as continued operation risks fire hazard. Depending on damage severity, may require motor rewinding or replacement. Repair cost: ZAR 5,000-12,000.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Intermittent Operation:</strong> Pump works sometimes but not consistently. Usually caused by electrical connection problems (loose terminals, damaged cables), thermal overload trips from overheating, or pressure switch failures. Often simpler repairs than motor problems. Repair cost: ZAR 2,000-5,000.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Professional Pump Repair Process</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our systematic repair process ensures accurate diagnosis and effective repairs:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 1: Initial Assessment and Removal</strong> — We begin with on-site assessment evaluating symptoms and system history. Our technicians safely disconnect electrical connections, remove the pump from the borehole (measuring depth and noting installation details), and inspect external condition. Pumps are transported to our workshop for detailed diagnostics. Assessment and removal typically takes 2-4 hours.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 2: Comprehensive Diagnostics</strong> — In our workshop, we perform thorough diagnostics including electrical testing (winding resistance, insulation resistance, ground faults), mechanical inspection (bearings, shaft, impellers, seals), disassembly and internal examination, and performance testing when possible. We document all findings and photograph damage for customer review. Detailed diagnostics identify exact failure causes and determine repair feasibility. Diagnostic cost: ZAR 1,500-2,500 (credited toward repair if you proceed).
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 3: Repair Quotation and Customer Approval</strong> — Following diagnostics, we provide detailed quotations outlining required repairs, parts needed, labor costs, expected completion time, and warranty coverage. We explain repair options and help you decide between repair and replacement based on pump age, condition, and cost-effectiveness. For pumps over 12-15 years old with major motor damage, replacement often makes better economic sense than expensive repairs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 4: Professional Repair Work</strong> — Upon approval, our technicians perform required repairs using quality parts and proper procedures. Common repairs include motor rewinding (replacing burnt windings with new copper wire), bearing replacement (installing sealed bearings rated for submersible service), seal restoration (replacing mechanical seals preventing water ingress), impeller replacement (installing new or refurbished impellers), cable repair or replacement (using submersible-grade cable), and electrical component replacement (control boxes, capacitors, contactors).
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 5: Testing and Quality Control</strong> — After repairs, pumps undergo comprehensive testing including electrical verification (winding resistance, insulation testing), bench testing (running pump in test tank), pressure and flow measurement, vibration analysis, and extended run testing checking for overheating or unusual operation. Only pumps passing all tests are approved for reinstallation.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Step 6: Reinstallation and Commissioning</strong> — We reinstall repaired pumps following the same professional procedures used for new installations. This includes lowering to original depth, reconnecting electrical systems safely, verifying control systems operation, comprehensive system testing, and documenting performance. We ensure the entire system operates properly before completing the job.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Repair vs Replacement: Making the Right Decision</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Not all failed pumps warrant repair. Several factors determine whether repair or replacement is the better choice:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Repair is Usually Best When:</strong> The pump is less than 8 years old, repair costs are under 50% of replacement cost, only specific components failed (bearings, seals, minor motor damage), the pump is a premium brand (Grundfos, Franklin), and you've maintained the pump properly throughout its life. For example, a 5-year-old Grundfos pump with bearing failure (repair cost ZAR 5,000) versus replacement (ZAR 14,000) clearly favors repair.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Replacement is Usually Best When:</strong> The pump is over 12-15 years old, repair costs exceed 60% of replacement cost, multiple major components failed, the motor requires complete rewinding (expensive repair), the pump is a budget brand with limited lifespan, or the pump has been repaired multiple times previously. For example, a 14-year-old pump requiring motor rewinding (ZAR 9,000) versus new pump installation (ZAR 13,000) favors replacement, especially considering the new pump warranty and expected 15-20 year lifespan.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We provide honest recommendations based on cost-effectiveness and long-term reliability. Our goal is your best interest, not maximizing repair revenue. Sometimes we advise replacement even when repair is technically possible because replacement delivers better long-term value.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Pump Repair Costs and Pricing</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Pump repair costs vary based on failure type, pump size, and required work:
                </p>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Diagnostic Service</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pump removal from borehole</li>
                    <li>• Transport to workshop</li>
                    <li>• Comprehensive electrical and mechanical testing</li>
                    <li>• Detailed diagnostic report with photos</li>
                    <li>• Repair quotation and recommendations</li>
                    <li className="font-semibold text-accent pt-2">Cost: ZAR 1,500 - 2,500</li>
                    <li className="text-xs pt-2">Credited toward repair if you proceed with service</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Minor Repairs (Bearings, Seals, Impellers)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bearing replacement (sealed submersible bearings)</li>
                    <li>• Mechanical seal restoration</li>
                    <li>• Impeller replacement or refurbishment</li>
                    <li>• Shaft inspection and minor repairs</li>
                    <li>• Testing and quality control</li>
                    <li>• Reinstallation and commissioning</li>
                    <li className="font-semibold text-accent pt-2">Cost: ZAR 4,000 - 8,000</li>
                    <li className="text-xs pt-2">Includes parts, labor, 6-month warranty</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Motor Rewinding (Major Repair)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complete motor disassembly</li>
                    <li>• Winding removal and inspection</li>
                    <li>• New copper wire rewinding to specifications</li>
                    <li>• Bearing and seal replacement</li>
                    <li>• Electrical testing and insulation verification</li>
                    <li>• Comprehensive performance testing</li>
                    <li>• Reinstallation and system commissioning</li>
                    <li className="font-semibold text-accent pt-2">Cost: ZAR 7,000 - 14,000</li>
                    <li className="text-xs pt-2">Includes all parts, 12-month warranty on motor</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Electrical System Repairs</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cable replacement (submersible-grade cable)</li>
                    <li>• Control box repair or replacement</li>
                    <li>• Capacitor and contactor replacement</li>
                    <li>• Connection repair and waterproofing</li>
                    <li>• Electrical protection system upgrade</li>
                    <li>• Testing and safety verification</li>
                    <li className="font-semibold text-accent pt-2">Cost: ZAR 2,500 - 6,000</li>
                    <li className="text-xs pt-2">Depending on components and cable length required</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Emergency Pump Repair Service</h3>

                <p className="text-muted-foreground leading-relaxed">
                  When your water supply fails completely and you need urgent restoration, we provide same-day emergency repair service. Our emergency service includes immediate response (typically within 2-4 hours), priority diagnostics, expedited repair work when possible, and temporary water supply solutions if repair takes longer. Emergency service includes additional priority fee (ZAR 2,000-3,000) but ensures fastest possible water supply restoration.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For emergencies requiring major repairs that can't be completed immediately, we often recommend temporary pump rental or replacement while repairing your original pump. This ensures continuous water supply during the repair process. Pump rental: ZAR 1,500-2,500 per week depending on size.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Preventing Pump Failures</h3>

                <p className="text-muted-foreground leading-relaxed">
                  While some pump failures are unavoidable, proper maintenance significantly extends pump life and reduces failure frequency:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Annual Maintenance Inspections:</strong> Professional inspections identify developing problems before they cause failures. We check electrical systems, test pump performance, verify pressure settings, and inspect all components.
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Proper Electrical Protection:</strong> Install quality earth leakage protection, surge arrestors protecting against lightning, and properly calibrated overload protection preventing motor damage.
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Monitor Water Levels:</strong> Ensure pump never runs dry. Install water level monitoring or low-level cutoff switches preventing dry-running damage.
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Address Issues Early:</strong> Unusual noises, reduced pressure, or intermittent operation indicate developing problems. Early intervention prevents minor issues becoming major failures.
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Use Quality Components:</strong> Premium pumps, proper installation, and quality electrical components deliver 15-20 years of reliable service versus 5-8 years for budget alternatives.
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros for Pump Repair</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Professional pump repair requires expertise, proper equipment, and quality parts. Here's why customers choose Borehole Pros:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Expert Diagnostics:</strong> Accurate problem identification saves time and money. We use proper testing equipment and 15+ years experience.
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Quality Repairs:</strong> Professional motor rewinding, genuine parts, and proper repair procedures ensure lasting repairs.
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Honest Recommendations:</strong> We advise replacement when repair isn't cost-effective. Your long-term best interest matters more than repair revenue.
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Fast Turnaround:</strong> Most repairs completed within 3-5 days. Same-day emergency service available when needed.
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>1,200+ Pumps Repaired:</strong> Extensive experience with all major brands and failure types.
                    </span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Comprehensive Warranties:</strong> 6-12 month warranties on repairs depending on work performed.
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Repair Timeline</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Standard pump repairs follow this timeline: Day 1 involves pump removal and workshop transport (2-4 hours). Days 1-2 cover comprehensive diagnostics and customer quotation (diagnostics completed within 24-48 hours). Days 3-5 include repair work and testing (most repairs completed within 3-5 days). Day 6 involves reinstallation and commissioning (4-6 hours).
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For emergency repairs, we expedite every stage. Priority diagnostics are completed within 4-6 hours, and repairs are fast-tracked when possible. If immediate repair isn't feasible, we provide temporary solutions maintaining your water supply during repair. Total emergency repair time: 24-72 hours for most issues.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Repair Pricing</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Diagnostics</p>
                      <p className="text-muted-foreground">ZAR 1,500-2,500</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Minor Repairs</p>
                      <p className="text-muted-foreground">ZAR 4,000-8,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Motor Rewinding</p>
                      <p className="text-muted-foreground">ZAR 7,000-14,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Electrical Repairs</p>
                      <p className="text-muted-foreground">ZAR 2,500-6,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Turnaround Time</p>
                      <p className="text-muted-foreground">3-5 days standard</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Get Repair Quote</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-3">Same-day emergency service available</p>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    WhatsApp Quote
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-3 text-sm">Common Repairs</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Bearing replacement</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Motor rewinding</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Seal restoration</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Cable replacement</span>
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
                When repair isn't cost-effective, we provide professional pump replacement with premium Grundfos, Pedrollo, and Franklin pumps.
              </p>
              <Link href="/pump-installation" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-maintenance" className="hover:text-accent transition-colors">
                  Preventive Maintenance Plans
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Annual maintenance plans preventing pump failures through regular inspections, testing, and proactive care.
              </p>
              <Link href="/borehole-maintenance" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/pressure-systems" className="hover:text-accent transition-colors">
                  Pressure System Repair
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Repair and upgrade pressure tanks, VSD controllers, and pressure switches ensuring consistent water pressure.
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
                Full borehole installation including drilling, pump setup, and system integration for new water supply systems.
              </p>
              <Link href="/borehole-installation" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Pump Repair FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How much does pump repair cost?</h3>
              <p className="text-muted-foreground text-sm">
                Diagnostics: ZAR 1,500-2,500. Minor repairs (bearings, seals): ZAR 4,000-8,000. Motor rewinding: ZAR 7,000-14,000. Electrical repairs: ZAR 2,500-6,000. We provide detailed quotes after diagnostics.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Should I repair or replace my pump?</h3>
              <p className="text-muted-foreground text-sm">
                Generally repair if the pump is under 8 years old and repair costs less than 50% of replacement. Replace if over 12 years old or repair costs exceed 60% of replacement. We provide honest recommendations.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How long does pump repair take?</h3>
              <p className="text-muted-foreground text-sm">
                Standard repairs: 3-5 days including diagnostics, repair work, testing, and reinstallation. Emergency same-day service available for urgent situations requiring immediate water supply restoration.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do you offer emergency pump repair?</h3>
              <p className="text-muted-foreground text-sm">
                Yes. We provide same-day emergency repair service with priority response (2-4 hours), expedited diagnostics, and fast-tracked repairs. Emergency service includes additional priority fee of ZAR 2,000-3,000.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What warranty comes with pump repairs?</h3>
              <p className="text-muted-foreground text-sm">
                Minor repairs: 6-month warranty. Motor rewinding: 12-month warranty. Electrical repairs: 6-month warranty. Warranty covers parts and labor for the specific repair work performed.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can all pumps be repaired?</h3>
              <p className="text-muted-foreground text-sm">
                Most pumps can be repaired, but feasibility depends on age, damage severity, and parts availability. Very old pumps or those with catastrophic damage may not be economically repairable. We assess each pump individually.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Need Professional Pump Repair?"
        description="Get expert diagnostics and repair services with certified technicians. Fast turnaround and honest recommendations. Same-day emergency service available. Call 060 348 8268 for immediate assistance."
        primaryText="Get Repair Quote"
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
            name: "Borehole Pump Repair Services",
            description: "Professional borehole pump repair including diagnostics, motor rewinding, bearing replacement and electrical repairs.",
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
              name: "Pump Repair Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pump Diagnostics",
                    description: "Comprehensive pump testing and diagnostics to identify failure causes",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "1500",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Minor Pump Repairs",
                    description: "Bearing replacement, seal restoration, and impeller repairs",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "4000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Motor Rewinding",
                    description: "Complete motor rewinding with new copper wire and bearing replacement",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "7000",
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
