import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Droplet, CheckCircle2, Phone, AlertCircle, Wrench, Clock, Shield, Star, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Roodepoort | Professional Installation & Repair Services",
  description:
    "Professional borehole drilling in Roodepoort. Fast installation, repairs & maintenance. Serving West Rand. Call 060 348 8268 for same-day quotes.",
  keywords:
    "borehole drilling roodepoort, borehole installation roodepoort, water borehole roodepoort, roodepoort borehole, borehole cost roodepoort, water drilling roodepoort",
  alternates: {
    canonical: "https://boreholepros.co.za/borehole-drilling-roodepoort",
  },
  openGraph: {
    title: "Borehole Drilling Roodepoort | Professional Installation & Repair Services",
    description: "Professional borehole drilling in Roodepoort. Fast installation, repairs & maintenance. Serving West Rand. Call 060 348 8268 for same-day quotes.",
    url: "https://boreholepros.co.za/borehole-drilling-roodepoort",
    siteName: "Borehole Pros",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "https://boreholepros.co.za/images/borehole-drilling.jpg",
        width: 1200,
        height: 630,
        alt: "Professional borehole drilling in Roodepoort",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Borehole Drilling Roodepoort | Professional Installation & Repair Services",
    description: "Professional borehole drilling in Roodepoort. Fast installation, repairs & maintenance. Call 060 348 8268.",
    images: ["https://boreholepros.co.za/images/borehole-drilling.jpg"],
  },
}

const services: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description: "Professional borehole drilling with modern equipment and certified technicians.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Borehole Installation",
    description: "Complete pump installation and water system setup for Roodepoort properties.",
    href: "/borehole-installation",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency borehole repairs and burst pipe response in Roodepoort.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
  {
    title: "Water Testing",
    description: "Comprehensive water quality analysis and certification for Roodepoort boreholes.",
    href: "/water-testing",
    icon: <CheckCircle2 className="w-8 h-8" />,
    image: "/images/water-testing.jpg",
  },
  {
    title: "Pump Repairs",
    description: "Expert submersible pump repairs and replacements for optimal performance.",
    href: "/borehole-maintenance",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/pump-repair.jpg",
  },
  {
    title: "Maintenance Plans",
    description: "Annual maintenance packages to keep your borehole running perfectly.",
    href: "/borehole-maintenance",
    icon: <Clock className="w-8 h-8" />,
    image: "/images/maintenance.jpg",
  },
]

export default function RoodepoortPage() {
  return (
    <>
      <Hero
        title="Expert Borehole Drilling Services in Roodepoort"
        subtitle="Professional Installation | Fast Response | 24/7 Emergency Service"
        description="Borehole Pros brings expert borehole drilling and plumbing services to Roodepoort. 15+ years expertise. Free assessment. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Roodepoort Quote", href: "/contact" },
          secondary: { text: "Emergency: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      {/* Trust Indicators Bar */}
      <section className="py-8 bg-accent/5 border-y border-accent/20">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Star className="w-8 h-8 text-accent" />
              <p className="font-bold text-lg">15+ Years</p>
              <p className="text-sm text-muted-foreground">Experience</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-accent" />
              <p className="font-bold text-lg">140+</p>
              <p className="text-sm text-muted-foreground">Roodepoort Projects</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8 text-accent" />
              <p className="font-bold text-lg">Licensed</p>
              <p className="text-sm text-muted-foreground">& Insured</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 text-accent" />
              <p className="font-bold text-lg">24/7</p>
              <p className="text-sm text-muted-foreground">Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Complete Borehole Solutions for Roodepoort"
        description="From drilling to installation to emergency repairs, Borehole Pros provides comprehensive water solutions for Roodepoort residents and businesses."
        services={services}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Professional Borehole Drilling Services in Roodepoort
              </h2>

              <div className="prose prose-lg max-w-none mb-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort is a rapidly growing residential and commercial area on Johannesburg's western edge. As the
                  community expands, water security becomes increasingly important for both families and businesses.
                  Borehole Pros has completed over 500 borehole installations across Johannesburg, with 140+
                  specifically in Roodepoort and surrounding West Rand areas including Florida, Wilro Park, Constantia Kloof, 
                  Horizon View, and Laser Park.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our team understands Roodepoort's unique position as a developing community with increasing water
                  demand. We've installed boreholes for residential developments, small businesses, schools, and established
                  homes throughout Roodepoort. The water table in Roodepoort typically sits between 75-110 meters,
                  making it suitable for reliable borehole installation with excellent yield potential.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Roodepoort Residents Choose Borehole Pros</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort faces increasing water restrictions as the area grows. Municipal water supply becomes less 
                  reliable during drought seasons, and rising tariffs impact household budgets. A professionally installed 
                  borehole provides water security and significant cost savings - typically 60-80% reduction in water bills. 
                  Unlike inexperienced operators, Borehole Pros is fully licensed, insured, and certified with proven 
                  expertise in Roodepoort installations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We handle all municipal permits and City of Johannesburg requirements for Roodepoort drilling. Our
                  process is professional and minimizes disruption to your property - typically completing the entire 
                  installation within one to two days of actual drilling time. After drilling, we ensure complete
                  testing, certification, and handover with full documentation and ongoing support. Every installation 
                  includes a 12-month comprehensive warranty.
                </p>

                <div className="bg-accent/5 border-l-4 border-accent p-6 my-6 rounded-r-lg">
                  <p className="font-semibold text-accent mb-2">Roodepoort Water Security Guarantee</p>
                  <p className="text-muted-foreground text-sm">
                    Our borehole systems are engineered for Roodepoort's geological conditions. We guarantee adequate 
                    water yield for household use or provide alternative solutions at no additional cost. Your water 
                    security is our commitment.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Drilling Cost in Roodepoort</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort borehole costs typically range from ZAR 17,000-27,000 for residential installations, 
                  depending on depth requirements and pump specifications. Commercial installations may vary based on 
                  required water volume. Here's what's included in our comprehensive package:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Free site assessment and water table depth testing with geological survey</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Professional rotary drilling to required depth (typically 80-120m in Roodepoort)</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>High-quality PVC casing and steel casing installation with proper sealing</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Premium submersible pump installation (Grundfos or equivalent) with pressure tank</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Complete electrical connection and control box installation</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Comprehensive water quality testing and SABS certification</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Municipal permit assistance and compliance documentation</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>12-month warranty on workmanship, equipment, and pump performance</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Ongoing maintenance support and emergency callout service</span>
                  </li>
                </ul>

                <div className="bg-muted p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-3">Typical Return on Investment</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    A Roodepoort household spending ZAR 450/month on municipal water can reduce costs to ZAR 90-180/month 
                    with a borehole system. That's an annual saving of ZAR 3,240-4,320, meaning your investment pays for 
                    itself within 4-6 years while providing 20+ years of water security.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Roodepoort Water Table & Geology</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort sits in the West Rand with relatively consistent geological conditions, primarily consisting 
                  of dolomite formations that are excellent for water storage and yield. The water table averages 75-110 
                  meters, making drilling straightforward with modern rotary equipment. The primary rock formation is 
                  dolomite with granite outcrops in some northern areas near the Krugersdorp boundary, which our 
                  equipment handles efficiently.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Dolomite aquifers in Roodepoort provide excellent water storage capacity and natural filtration. 
                  Historical rainfall in Roodepoort averages 620mm annually, supporting good groundwater recharge during 
                  summer months. This ensures boreholes maintain reliable water supply throughout the year, even during 
                  winter dry seasons. Roodepoort's growing community benefits from consistent water availability through 
                  borehole systems, with typical yields ranging from 1,000 to 3,000 liters per hour - more than adequate 
                  for residential needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <p className="font-semibold text-accent mb-1">Average Depth</p>
                    <p className="text-2xl font-bold mb-1">85m</p>
                    <p className="text-xs text-muted-foreground">Typical drilling depth required</p>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <p className="font-semibold text-accent mb-1">Water Yield</p>
                    <p className="text-2xl font-bold mb-1">2,000 L/h</p>
                    <p className="text-xs text-muted-foreground">Average borehole output</p>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <p className="font-semibold text-accent mb-1">Success Rate</p>
                    <p className="text-2xl font-bold mb-1">98%</p>
                    <p className="text-xs text-muted-foreground">Our Roodepoort projects</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Complete Borehole Installation Process in Roodepoort</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our streamlined process is professional and efficient, typically completed in 3-5 days from initial 
                  assessment to final handover. Here's exactly what happens:
                </p>

                <div className="space-y-4 my-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Free Site Assessment</p>
                      <p className="text-sm text-muted-foreground">
                        Our geologist visits your property to determine optimal drilling location, water table depth, 
                        and geological conditions. We provide a detailed quote with no obligations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Permit Application</p>
                      <p className="text-sm text-muted-foreground">
                        We handle all City of Johannesburg paperwork and permit applications on your behalf. This 
                        typically takes 5-7 business days and runs parallel to drilling preparation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Drilling Operations</p>
                      <p className="text-sm text-muted-foreground">
                        Our mobile drilling rig arrives and completes drilling in 1-2 days. We use rotary drilling 
                        equipment that's efficient and minimizes property disruption. All waste material is removed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Casing Installation</p>
                      <p className="text-sm text-muted-foreground">
                        High-grade PVC casing is installed to prevent borehole collapse and contamination. Steel casing 
                        is used in the top section for additional strength. Proper sealing ensures water purity.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Pump Installation</p>
                      <p className="text-sm text-muted-foreground">
                        Premium submersible pump (Grundfos or equivalent) is installed with pressure tank, control box, 
                        and electrical connections. System is thoroughly tested for optimal performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      6
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Water Quality Testing</p>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive water analysis for pH, mineral content, bacteria, and contaminants. You receive 
                        SABS certification confirming water safety for household use.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      7
                    </div>
                    <div>
                      <p className="font-semibold mb-1">System Handover</p>
                      <p className="text-sm text-muted-foreground">
                        Final inspection ensures everything operates perfectly. You receive complete documentation, 
                        operating instructions, and warranty information. We provide training on system operation and 
                        maintenance.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Borehole Pros in Roodepoort</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Roodepoort residents trust Borehole Pros because of our proven expertise and commitment to quality. 
                  Here's what sets us apart from other drilling companies:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted p-5 rounded-lg">
                    <div className="flex items-start gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-semibold">Local Roodepoort Expertise</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      15+ years serving Roodepoort specifically. Deep knowledge of local geology, municipal regulations, 
                      and optimal drilling locations throughout Florida, Wilro Park, Constantia Kloof, and surrounding areas.
                    </p>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <div className="flex items-start gap-3 mb-2">
                      <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-semibold">140+ Roodepoort Projects</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Proven track record with residential, commercial, and agricultural installations. Our portfolio 
                      includes schools, shopping centers, gated communities, and individual homes.
                    </p>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <div className="flex items-start gap-3 mb-2">
                      <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-semibold">Fully Licensed & Insured</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive liability insurance covers all work. Licensed by relevant authorities with certified 
                      technicians. Your property and investment are fully protected.
                    </p>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <div className="flex items-start gap-3 mb-2">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-semibold">Same-Day Response</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Free quotes within 24 hours. Emergency repairs available 24/7. When your borehole stops working, 
                      we respond immediately with mobile repair units.
                    </p>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <div className="flex items-start gap-3 mb-2">
                      <Wrench className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-semibold">Premium Equipment</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Modern rotary drilling rigs and Grundfos pumps ensure reliable performance. We invest in quality 
                      equipment that delivers superior results and longevity.
                    </p>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="font-semibold">12-Month Warranty</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive warranty covers workmanship, equipment, and pump performance. Plus ongoing maintenance 
                      plans available for extended protection and peace of mind.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Roodepoort Service Areas</h3>

                <p className="text-muted-foreground leading-relaxed">
                  We provide professional borehole drilling services throughout Roodepoort and surrounding West Rand areas:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Florida</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Wilro Park</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Constantia Kloof</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Horizon View</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Laser Park</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Weltevredenpark</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Honeydew</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Ruimsig</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Little Falls</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Quellerina</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Featherbrooke</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Helderkruin</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Maintenance & Ongoing Support</h3>

                <p className="text-muted-foreground leading-relaxed">
                  Installation is just the beginning of your relationship with Borehole Pros. We provide comprehensive 
                  borehole maintenance to ensure your system operates reliably for 20+ years. Annual maintenance includes 
                  pump inspection, water quality testing, electrical connection checks, and preventive repairs. We offer 
                  flexible maintenance plans specifically designed for Roodepoort residents.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Regular maintenance prevents pump failure, water contamination, and pressure loss. A properly maintained 
                  borehole operates reliably with minimal downtime - typically 99.5% uptime over a 12-month period. Your 
                  water supply remains secure year-round with our ongoing support. Emergency callout service is available 
                  24/7 for urgent repairs, with typical response time under 2 hours for Roodepoort emergencies.
                </p>

                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30 my-6">
                  <h4 className="font-bold mb-3 text-accent">Annual Maintenance Plan Includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Complete pump inspection and performance testing</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Water quality testing and contamination screening</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Electrical connection and control box inspection</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Pressure tank and valve checks</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Preventive repairs and component replacement</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Detailed service report with recommendations</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Plans start from ZAR 850/year for residential systems. Commercial plans available.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Environmental Compliance & Water Conservation</h3>

                <p className="text-muted-foreground leading-relaxed">
                  All our Roodepoort borehole installations comply with Department of Water and Sanitation regulations. 
                  We register all boreholes with the appropriate authorities and ensure proper licensing. Our installations 
                  include water monitoring systems to track usage and prevent over-extraction. This protects Roodepoort's 
                  groundwater resources for future generations while providing you with sustainable water security.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Responsible borehole usage actually helps balance municipal water demand, reducing strain on 
                  Johannesburg's water infrastructure. By utilizing groundwater responsibly, you're contributing to 
                  overall water security in Roodepoort while significantly reducing your household costs.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent shadow-lg">
                  <h3 className="font-bold mb-4 text-lg">Quick Facts - Roodepoort Boreholes</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-accent mb-1">Water Table Depth</p>
                      <p className="text-muted-foreground">75-110 meters average</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-1">Average Installation Cost</p>
                      <p className="text-muted-foreground">ZAR 17,000-27,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-1">Annual Water Savings</p>
                      <p className="text-muted-foreground">60-80% cost reduction</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-1">Drilling Timeline</p>
                      <p className="text-muted-foreground">3-5 days complete</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-1">System Lifespan</p>
                      <p className="text-muted-foreground">20+ years with maintenance</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-1">Average Yield</p>
                      <p className="text-muted-foreground">2,000 L/hour</p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-1">Success Rate</p>
                      <p className="text-muted-foreground">98% in Roodepoort</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-accent shadow-lg">
                  <h3 className="font-bold mb-4 text-lg">Get Your Free Roodepoort Quote</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-4 rounded-lg hover:bg-accent/90 transition-colors mb-3 shadow-md"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <p className="text-xs text-center text-muted-foreground mb-4">
                    Call for free site assessment • Same-day response
                  </p>
                  <a
                    href="https://wa.me/27603488268?text=Hi%2C%20I%27m%20interested%20in%20a%20borehole%20quote%20for%20Roodepoort"
                    className="flex items-center justify-center gap-2 w-full border-2 border-accent font-bold py-4 rounded-lg hover:bg-accent/5 transition-colors text-accent shadow-sm"
                  >
                    WhatsApp Quote
                  </a>
                  <div className="mt-5 pt-5 border-t">
                    <p className="text-xs text-center text-muted-foreground mb-2">Available 24/7 for emergencies</p>
                    <div className="flex items-center justify-center gap-2 text-xs text-accent">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">Emergency Response: Under 2 hours</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-4">Why Choose Us?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>15+ years Roodepoort experience</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>140+ local installations completed</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Licensed & fully insured</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>12-month warranty included</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Free permit assistance</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-accent/5 border-accent/30">
                  <h3 className="font-bold mb-3 text-accent">Customer Satisfaction</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <Star className="w-5 h-5 fill-accent text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Professional service from start to finish. Our borehole has been running perfectly for 3 years. 
                    Highly recommend Borehole Pros!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Sarah M., Constantia Kloof</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-center">
            Related Borehole Services in Roodepoort
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive water solutions for your property - from initial drilling to ongoing maintenance and emergency support
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link href="/borehole-installation" className="hover:text-accent transition-colors">
                  Borehole Installation
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Complete pump installation and water system setup for Roodepoort properties with proper pressure regulation and quality components.
              </p>
              <Link href="/borehole-installation" className="text-accent font-semibold hover:underline text-sm flex items-center gap-1">
                Learn More <span>→</span>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link href="/water-testing" className="hover:text-accent transition-colors">
                  Water Quality Testing
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Comprehensive water analysis ensuring your borehole water is safe for household use with full SABS certification and detailed reports.
              </p>
              <Link href="/water-testing" className="text-accent font-semibold hover:underline text-sm flex items-center gap-1">
                Learn More <span>→</span>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-accent">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link href="/emergency-plumbing" className="hover:text-accent transition-colors">
                  24/7 Emergency Service
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Burst pipes and urgent emergencies need immediate response. We're available 24/7 for Roodepoort emergencies with under 2-hour response time.
              </p>
              <Link href="/emergency-plumbing" className="text-accent font-semibold hover:underline text-sm flex items-center gap-1">
                Learn More <span>→</span>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link href="/borehole-maintenance" className="hover:text-accent transition-colors">
                  Maintenance Plans
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Annual maintenance keeps your borehole working perfectly for 20+ years with professional pump inspections and water quality testing.
              </p>
              <Link href="/borehole-maintenance" className="text-accent font-semibold hover:underline text-sm flex items-center gap-1">
                Learn More <span>→</span>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-center">
            Roodepoort Borehole Drilling FAQs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get answers to the most common questions about borehole drilling in Roodepoort
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                What is the water table depth in Roodepoort?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Roodepoort's water table typically ranges from 75-110 meters depth. We determine the exact depth through 
                a free site assessment using professional geological survey equipment. Most residential boreholes in 
                Roodepoort are drilled to 80-100 meters.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                How much does borehole drilling cost in Roodepoort?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Typical cost is ZAR 17,000-27,000 for complete residential installation including drilling, casing, 
                pump installation, water testing, and municipal permits. Get a free, no-obligation quote by calling 
                060 348 8268 or WhatsApp.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                How long does the installation take?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From free assessment to handover: 3-5 days total. Actual drilling takes 1-2 days. Permit processing 
                runs parallel to drilling preparation so there's minimal waiting time. Emergency installations can be 
                expedited.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                Do I need a City permit in Roodepoort?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes, City of Johannesburg requires permits for borehole drilling. We handle all permit applications on 
                your behalf - paperwork, submissions, and follow-ups. This service is included in our quote at no extra 
                cost.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                How much water will I save?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Typical household saves 60-80% on water costs. A family spending ZAR 450/month on municipal water 
                reduces costs to ZAR 90-180/month with a borehole. That's ZAR 3,240-4,320 saved annually. Your 
                investment pays for itself in 4-6 years.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                What warranty is provided?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                12-month comprehensive warranty on all installations covering workmanship, equipment, and pump 
                performance. We also offer ongoing maintenance plans starting from ZAR 850/year for extended protection 
                and peace of mind.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                Is the water safe to drink?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We provide comprehensive water quality testing with every installation. Most Roodepoort borehole water 
                is safe after proper testing and any necessary treatment. You receive SABS certification confirming 
                water quality standards are met.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                What happens if no water is found?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Roodepoort has a 98% success rate for water strikes. In the rare case of insufficient water yield, we 
                provide alternative solutions or refund options as per our guarantee. We conduct thorough site assessment 
                before drilling to minimize risks.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                Do you offer emergency repair services?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes, 24/7 emergency service is available for pump failures, burst pipes, and urgent borehole issues. 
                Typical response time is under 2 hours for Roodepoort emergencies. Call 060 348 8268 anytime for 
                immediate assistance.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-3 text-lg flex items-start gap-2">
                <span className="text-accent text-2xl">?</span>
                Will drilling damage my property?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We use modern mobile drilling rigs that minimize property disruption. Our team protects your property 
                during installation and removes all drilling waste. The drilling footprint is typically 3x3 meters, and 
                we restore landscaping where possible.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Expert Borehole Drilling in Roodepoort?"
        description="Get your free assessment and detailed quote today. Same-day response guaranteed. We're available 24/7 for emergencies. Call 060 348 8268 or submit your details below for a comprehensive consultation."
        primaryText="Get Free Quote"
        primaryHref="/contact"
        secondaryText="Call: 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Borehole Pros - Roodepoort",
            description: "Professional borehole drilling, installation, and maintenance services in Roodepoort and West Rand. Licensed, insured, 15+ years experience.",
            image: "https://boreholepros.co.za/images/borehole-drilling.jpg",
            telephone: "060-348-8268",
            email: "info@boreholepros.co.za",
            url: "https://boreholepros.co.za/borehole-drilling-roodepoort",
            priceRange: "ZAR 17,000 - ZAR 27,000",
            areaServed: {
              "@type": "City",
              name: "Roodepoort",
              containedIn: {
                "@type": "State",
                name: "Gauteng"
              }
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Roodepoort",
              addressRegion: "Gauteng",
              addressCountry: "ZA"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-26.1625",
              longitude: "27.8725"
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                opens: "00:00",
                closes: "23:59"
              }
            ],
            sameAs: [
              "https://www.facebook.com/boreholepros",
              "https://www.instagram.com/boreholepros"
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "140"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Borehole Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Borehole Drilling",
                    description: "Professional borehole drilling services in Roodepoort"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Borehole Installation",
                    description: "Complete pump installation and water system setup"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Repairs",
                    description: "24/7 emergency borehole and plumbing repairs"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Maintenance Plans",
                    description: "Annual borehole maintenance and inspection services"
                  }
                }
              ]
            }
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the water table depth in Roodepoort?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Roodepoort's water table typically ranges from 75-110 meters depth. We determine the exact depth through a free site assessment using professional geological survey equipment. Most residential boreholes in Roodepoort are drilled to 80-100 meters."
                }
              },
              {
                "@type": "Question",
                name: "How much does borehole drilling cost in Roodepoort?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Typical cost is ZAR 17,000-27,000 for complete residential installation including drilling, casing, pump installation, water testing, and municipal permits."
                }
              },
              {
                "@type": "Question",
                name: "How long does the installation take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "From free assessment to handover: 3-5 days total. Actual drilling takes 1-2 days. Permit processing runs parallel to drilling preparation so there's minimal waiting time."
                }
              },
              {
                "@type": "Question",
                name: "Do I need a City permit in Roodepoort?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, City of Johannesburg requires permits for borehole drilling. We handle all permit applications on your behalf - paperwork, submissions, and follow-ups at no extra cost."
                }
              },
              {
                "@type": "Question",
                name: "How much water will I save with a borehole?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Typical household saves 60-80% on water costs. A family spending ZAR 450/month on municipal water reduces costs to ZAR 90-180/month with a borehole. That's ZAR 3,240-4,320 saved annually."
                }
              }
            ]
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://boreholepros.co.za"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Borehole Drilling Roodepoort",
                item: "https://boreholepros.co.za/borehole-drilling-roodepoort"
              }
            ]
          }),
        }}
      />
    </>
  )
}
