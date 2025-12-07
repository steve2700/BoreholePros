import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Settings, CheckCircle2, Phone, Wrench, ClipboardCheck, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Maintenance Services | Annual Service Plans & Pump Inspections",
  description:
    "Professional borehole maintenance services. Annual service plans, pump inspections, water testing & repairs. Extend system life to 25+ years. Call 060 348 8268.",
  keywords:
    "borehole maintenance, borehole service, pump maintenance, borehole inspection, annual borehole service, preventive maintenance",
  openGraph: {
    title: "Professional Borehole Maintenance | Service Plans & Pump Care",
    description: "Expert borehole maintenance extending system life. Annual service plans and emergency repairs.",
  },
}

const services: ServiceItem[] = [
  {
    title: "Annual Service Plans",
    description: "Comprehensive yearly maintenance keeping your borehole running perfectly for decades.",
    href: "/annual-service",
    icon: <ClipboardCheck className="w-8 h-8" />,
    image: "/images/annual-service.jpg",
  },
  {
    title: "Pump Inspections",
    description: "Thorough pump performance testing and component inspection preventing failures.",
    href: "/pump-inspection",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/pump-inspection.jpg",
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency response for pump failures, pressure loss, and system breakdowns.",
    href: "/emergency-repairs",
    icon: <AlertTriangle className="w-8 h-8" />,
    highlight: true,
    image: "/images/emergency-repair.jpg",
  },
]

export default function BoreholeMaintencePage() {
  return (
    <>
      <Hero
        title="Professional Borehole Maintenance Services"
        subtitle="Annual Service Plans | Preventive Maintenance | Emergency Repairs"
        description="Keep your borehole system running flawlessly for 25+ years with professional maintenance. Comprehensive service plans include pump inspection, water testing, and preventive repairs. Protect your investment with expert care. Call 060 348 8268."
        imageSrc="/images/borehole-maintenance.jpg"
        cta={{
          primary: { text: "Get Maintenance Quote", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Complete Borehole Maintenance Solutions"
        description="From routine annual service to emergency repairs, we provide comprehensive maintenance keeping your borehole system operating at peak performance."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Expert Borehole Maintenance: Protecting Your Water Investment
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A borehole represents a significant investment in water independence—typically ZAR 45,000-85,000 for
                  complete installation. Yet many property owners neglect maintenance, leading to premature equipment
                  failure and costly emergency repairs. Professional borehole maintenance is not optional; it's
                  essential insurance protecting your investment and ensuring uninterrupted water supply for decades.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole Pros has maintained over 1,200 borehole systems across Gauteng since 2009. Our experience
                  shows that properly maintained boreholes operate reliably for 25-30 years, while neglected systems
                  often fail within 8-12 years. The difference? Regular professional maintenance costing just ZAR
                  1,500-2,200 annually—a fraction of emergency repair costs averaging ZAR 8,000-15,000 per incident.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Borehole Maintenance Is Critical</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Borehole systems operate under demanding conditions: submersible pumps work continuously in water,
                  electrical components face moisture exposure, pressure vessels experience constant cycling, and
                  mechanical parts wear from 24/7 operation. Without maintenance, small issues compound into major
                  failures requiring expensive emergency interventions.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Consider the submersible pump—the heart of your borehole system. Operating at depths of 60-120 meters
                  in abrasive groundwater, these pumps face harsh conditions. Sediment accumulation, bearing wear,
                  electrical insulation degradation, and impeller damage occur gradually. Annual inspection catches
                  these issues early when repairs cost ZAR 1,200-2,500. Waiting until complete failure means pump
                  replacement costing ZAR 12,000-18,000 plus emergency callout fees.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Beyond equipment longevity, maintenance ensures water quality and system efficiency. Bacterial
                  contamination can develop in untested boreholes, posing health risks. Declining pump performance
                  increases electricity consumption by 20-40%, wasting thousands annually. Pressure system drift causes
                  annoying fluctuations in household water pressure. Regular maintenance addresses all these issues
                  proactively.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Comprehensive Annual Service: What's Included</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our annual maintenance service is thorough and systematic, covering every component of your borehole
                  system. Here's exactly what happens during a professional service visit:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Pump Performance Testing:</strong> We measure actual flow rate and compare against
                  manufacturer specifications. Performance decline indicates wear requiring attention. We check pump
                  amperage draw—elevated current consumption signals bearing wear or impeller damage. Vibration
                  analysis detects mechanical issues before catastrophic failure. Thermal testing ensures the motor
                  operates within safe temperature ranges.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Pressure System Inspection:</strong> The pressure vessel bladder is examined for air loss and
                  membrane degradation. We verify pre-charge pressure matches specifications—incorrect pressure causes
                  excessive pump cycling and premature failure. Pressure switches are tested and calibrated to maintain
                  consistent water pressure. All pressure gauges are checked for accuracy and replaced if faulty.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Electrical Component Testing:</strong> We inspect all electrical connections for corrosion,
                  looseness, or heat damage. Earth leakage protection is tested to ensure it trips correctly during
                  faults. Control panels receive thorough inspection with tightening of all terminals. Cable insulation
                  resistance is measured—degradation indicates impending electrical failure requiring cable replacement.
                </p>

                <ul className="space-y-3 mt-6">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Complete pump performance testing and amperage verification</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Pressure system inspection and calibration</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Electrical safety testing and connection inspection</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Valve operation testing and lubrication</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Comprehensive water quality analysis (bacterial and chemical)</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Detailed service report with recommendations</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Minor adjustments and repairs included</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Common Problems Prevented by Regular Maintenance</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our maintenance service prevents the most common and costly borehole failures. Here are issues we
                  regularly catch before they become emergencies:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Pump Bearing Wear:</strong> Detected through vibration analysis and noise monitoring. Caught
                  early, bearing replacement costs ZAR 1,800-3,200. Ignored until failure, you face complete pump
                  replacement at ZAR 12,000-18,000 plus emergency callout fees. We've prevented hundreds of these
                  failures through timely intervention.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Pressure Bladder Failure:</strong> The pressure vessel bladder gradually deteriorates,
                  causing rapid pump cycling that destroys pump starters. Annual inspection detects early degradation.
                  Bladder replacement costs ZAR 1,200-2,400. Waiting until complete failure often requires replacing
                  the entire pressure vessel (ZAR 3,500-6,500) plus repairing damaged pump starters (ZAR 2,200-4,000).
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <strong>Electrical Connection Corrosion:</strong> Moisture infiltration corrodes electrical
                  connections, increasing resistance and generating heat. This causes intermittent failures and
                  eventual fire risk. Maintenance identifies corroded connections early—cleaning and sealing costs ZAR
                  400-800. Ignored corrosion leads to control panel replacement (ZAR 3,200-5,500) or worse, electrical
                  fires causing extensive property damage.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Maintenance Service Plans & Pricing</h3>

                <p className="text-muted-foreground leading-relaxed">
                  We offer three maintenance plans tailored to different property types and usage levels. All plans
                  include comprehensive annual service with detailed reporting:
                </p>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Basic Residential Plan</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Annual service visit with full system inspection</li>
                    <li>• Pump performance testing and electrical safety check</li>
                    <li>• Pressure system calibration and valve inspection</li>
                    <li>• Basic water quality testing (bacterial screening)</li>
                    <li>• Minor repairs and adjustments included</li>
                    <li>• Detailed service report with recommendations</li>
                    <li>• 10% discount on any required parts</li>
                    <li className="font-semibold text-accent pt-2">Annual Cost: ZAR 1,500</li>
                    <li className="text-xs pt-2">Best for: Standard residential boreholes with moderate usage</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Premium Residential Plan</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Two service visits per year (every 6 months)</li>
                    <li>• Comprehensive pump diagnostics with performance baseline</li>
                    <li>• Advanced electrical testing including insulation resistance</li>
                    <li>• Full water quality analysis (bacterial and chemical)</li>
                    <li>• Pressure system optimization for efficiency</li>
                    <li>• Priority emergency response (4-hour callout)</li>
                    <li>• All minor repairs and adjustments included</li>
                    <li>• 15% discount on parts and major repairs</li>
                    <li className="font-semibold text-accent pt-2">Annual Cost: ZAR 2,800</li>
                    <li className="text-xs pt-2">Best for: High-value properties, heavy water users, or older systems</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-4">Commercial/Industrial Plan</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Quarterly service visits (4 times per year)</li>
                    <li>• Comprehensive system performance monitoring</li>
                    <li>• Predictive maintenance using vibration and thermal analysis</li>
                    <li>• Monthly water quality testing with compliance reporting</li>
                    <li>• 24/7 emergency support with 2-hour response</li>
                    <li>• Spare pump availability for critical operations</li>
                    <li>• Annual system efficiency audit with optimization</li>
                    <li>• All routine repairs included in plan</li>
                    <li>• 20% discount on major component replacement</li>
                    <li className="font-semibold text-accent pt-2">Annual Cost: ZAR 6,500 - 12,000</li>
                    <li className="text-xs pt-2">Best for: Commercial properties, industrial operations</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">When to Schedule Maintenance</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Timing matters for borehole maintenance. We recommend scheduling annual service during autumn
                  (March-May) or early spring (August-September). These periods offer moderate temperatures ideal for
                  testing and avoid peak summer usage when you depend heavily on your borehole.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For systems over 10 years old, bi-annual service is advisable. Older systems experience accelerated
                  wear and benefit from more frequent inspection. If your property uses borehole water for critical
                  operations (commercial kitchens, medical facilities, industrial processes), quarterly maintenance
                  prevents costly downtime.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Emergency Repair Services</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Despite best maintenance practices, emergencies sometimes occur. Borehole Pros provides 24/7 emergency
                  response for critical system failures. Our emergency service includes rapid diagnosis, temporary
                  solutions to restore water supply, and permanent repairs completed efficiently.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Common emergencies we handle: complete pump failure with no water supply, electrical faults causing
                  safety hazards, burst pipes and major leaks, pressure system failures, contaminated water requiring
                  immediate remediation. Our emergency callout includes diagnostic fee (ZAR 850-1,200) credited toward
                  repairs if you proceed with our quote.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">The True Cost of Neglecting Maintenance</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Many property owners skip maintenance to save money—a costly mistake. Consider the mathematics:
                  annual maintenance costs ZAR 1,500-2,200. Over 10 years, that's ZAR 15,000-22,000 invested in
                  preventive care.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Without maintenance, typical failures include: pump replacement (ZAR 12,000-18,000), pressure vessel
                  replacement (ZAR 3,500-6,500), control panel replacement (ZAR 3,200-5,500), electrical rewiring (ZAR
                  4,500-8,000), emergency callout fees (ZAR 850-1,200 per incident). Just one major failure costs more
                  than 10 years of maintenance. Most neglected systems experience multiple failures over their
                  shortened lifespan.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros for Maintenance</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Certified Technical Team</p>
                    <p className="text-xs text-muted-foreground">
                      All technicians hold electrical and plumbing certifications. Average 12+ years industry experience.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Comprehensive Service</p>
                    <p className="text-xs text-muted-foreground">
                      We inspect every component thoroughly—no shortcuts. Detailed reporting with photographic evidence.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Transparent Pricing</p>
                    <p className="text-xs text-muted-foreground">
                      Fixed plan pricing with no hidden costs. Additional repairs quoted before proceeding.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">1,200+ Systems Maintained</p>
                    <p className="text-xs text-muted-foreground">
                      Proven track record since 2009. Long-term relationships with customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-accent/5 border-accent">
                  <h3 className="font-bold mb-4">Maintenance Plan Pricing</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-accent">Basic Residential</p>
                      <p className="text-muted-foreground">ZAR 1,500/year</p>
                      <p className="text-xs text-muted-foreground mt-1">1 annual service visit</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Premium Residential</p>
                      <p className="text-muted-foreground">ZAR 2,800/year</p>
                      <p className="text-xs text-muted-foreground mt-1">2 service visits + priority support</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Commercial/Industrial</p>
                      <p className="text-muted-foreground">ZAR 6,500-12,000/year</p>
                      <p className="text-xs text-muted-foreground mt-1">4 visits + 24/7 emergency response</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent">Emergency Callout</p>
                      <p className="text-muted-foreground">ZAR 850-1,200</p>
                      <p className="text-xs text-muted-foreground mt-1">Plan members: Priority response</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent">
                  <h3 className="font-bold mb-4">Schedule Maintenance</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-3">Call to book your service</p>
                  <a
                    href="https://wa.me/27603488268"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    WhatsApp Booking
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-3 text-sm">Service Includes</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Pump performance testing</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Electrical safety inspection</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Pressure system calibration</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Water quality testing</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Valve inspection & lubrication</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Minor repairs included</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Detailed service report</span>
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
            Related Maintenance Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/pump-repair" className="hover:text-accent transition-colors">
                  Pump Repair Services
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Expert diagnosis and repair of submersible pump issues. From bearing replacement to motor rewinding—we
                restore pump performance efficiently.
              </p>
              <Link href="/pump-repair" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/water-testing" className="hover:text-accent transition-colors">
                  Water Quality Testing
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive water analysis for safety and compliance. Bacterial and chemical testing with SANS 241
                certification and treatment recommendations.
              </p>
              <Link href="/water-testing" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/pressure-system-repair" className="hover:text-accent transition-colors">
                  Pressure System Repair
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Fix pressure fluctuations, bladder failures, and control system issues. Professional repair restores
                consistent water pressure throughout your property.
              </p>
              <Link href="/pressure-system-repair" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">
                <Link href="/borehole-inspection" className="hover:text-accent transition-colors">
                  Pre-Purchase Inspections
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Buying property with a borehole? Get professional inspection before purchase. We assess condition,
                identify issues, and provide repair cost estimates.
              </p>
              <Link href="/borehole-inspection" className="text-accent font-semibold hover:underline">
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Borehole Maintenance FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">How often should boreholes be serviced?</h3>
              <p className="text-muted-foreground text-sm">
                Annual service is recommended for most residential boreholes. Systems over 10 years old or commercial
                installations benefit from bi-annual or quarterly maintenance.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What does annual maintenance cost?</h3>
              <p className="text-muted-foreground text-sm">
                Basic residential plans start at ZAR 1,500/year. Premium residential plans cost ZAR 2,800/year.
                Commercial plans range from ZAR 6,500-12,000 depending on system complexity.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">What happens if I skip maintenance?</h3>
              <p className="text-muted-foreground text-sm">
                Premature equipment failure is common. Average neglected systems fail within 8-12 years versus 25-30
                years for maintained systems. Emergency repairs cost far more than preventive maintenance.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Do you offer emergency callout services?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, 24/7 emergency response available. Maintenance plan members receive priority response within 2-4
                hours. Standard emergency calls responded to within 6-12 hours.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Is water testing included in maintenance?</h3>
              <p className="text-muted-foreground text-sm">
                Basic plans include bacterial screening. Premium and commercial plans include comprehensive bacterial
                and chemical analysis with SANS 241 compliance reporting.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 text-lg">Can I cancel my maintenance plan?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, plans are annual commitments with no long-term contracts. Cancel anytime with 30 days notice. Most
                customers continue indefinitely after experiencing the benefits.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Protect Your Borehole Investment with Professional Maintenance"
        description="Annual service plans from ZAR 1,500/year. Keep your system running perfectly for 25+ years. Call 060 348 8268 to schedule your maintenance service."
        primaryText="Schedule Service"
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
            name: "Borehole Maintenance Services",
            description: "Professional borehole maintenance and service plans. Annual inspections, repairs, and preventive care.",
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
              name: "Borehole Maintenance Plans",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Basic Residential Maintenance Plan",
                    description: "Annual service plan for standard residential boreholes",
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
                    name: "Premium Residential Maintenance Plan",
                    description: "Bi-annual service with priority support for residential properties",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "2800",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Maintenance Plan",
                    description: "Quarterly service with 24/7 support for commercial operations",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "6500",
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
