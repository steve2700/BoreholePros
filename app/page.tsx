import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import {
  Droplet,
  Wrench,
  Zap,
  MapPin,
  CheckCircle2,
  Phone,
  Clock,
  Shield,
  Award,
  Star,
  Users,
  TrendingUp,
  Waves,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling & Installation Gauteng | Borehole Pros SA",
  description:
    "★★★★★ Rated #1 Borehole Drilling & Installation in Gauteng. 15+ years experience, 5000+ boreholes drilled. Serving Johannesburg, Pretoria, Sandton, Midrand & Centurion. Licensed, certified technicians. Free site assessment. Call 060 348 8268!",
  keywords: [
    "borehole drilling johannesburg",
    "borehole drilling gauteng",
    "borehole installation gauteng",
    "borehole drilling cost south africa",
    "borehole drilling pretoria",
    "borehole drilling sandton",
    "borehole drilling midrand",
    "borehole installation cost",
    "borehole pump installation gauteng",
    "borehole maintenance gauteng",
    "borehole not working johannesburg",
    "borehole repair gauteng",
    "borehole drilling kempton park",
    "borehole drilling centurion",
    "borehole drilling near me",
  ],
  openGraph: {
    title: "Borehole Drilling & Installation Gauteng | Borehole Pros SA",
    description: "★ 5000+ Boreholes Drilled ★ 15+ Years Experience ★ Free Site Assessment ★ Licensed Specialists ★ From R18,000",
    url: "https://boreholepros.co.za",
    siteName: "Borehole Pros",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "https://boreholepros.co.za/images/borehole-drilling.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Borehole Drilling and Installation Services Gauteng South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borehole Drilling Gauteng | Borehole Pros SA",
    description: "15+ years experience. Free site assessment. From R18,000. Call 060 348 8268",
    images: ["https://boreholepros.co.za/images/borehole-drilling.jpg"],
  },
  alternates: {
    canonical: "https://boreholepros.co.za",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const boreholeServices: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description:
      "Professional borehole drilling with modern equipment and certified technicians. Full site assessment, drilling, and installation for residential and commercial properties across Gauteng.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Borehole Installation",
    description:
      "Complete borehole installation including pump setup, pressure systems, electrical connection, testing, and compliance certification. Expert installation ensuring 20+ years of reliable operation.",
    href: "/borehole-installation",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Borehole Maintenance",
    description:
      "Annual maintenance plans, pump inspections, water quality testing, and preventive repairs. Keep your borehole running efficiently for decades with professional care.",
    href: "/borehole-maintenance",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/leak-detection.jpg",
  },
  {
    title: "Borehole Pump Repair",
    description:
      "Borehole stopped working? Our expert technicians diagnose and fix all pump faults, pressure problems, and borehole failures across Gauteng. Same-day emergency repair available.",
    href: "/borehole-not-working",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Solar Borehole Pumps",
    description:
      "Energy-independent water supply with solar-powered borehole pump systems. No electricity needed — pump water day and night using clean solar energy. Perfect for load shedding.",
    href: "/solar-borehole-pumps",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Borehole Water Testing",
    description:
      "Professional water quality testing and analysis. Ensure your borehole water is safe for drinking, irrigation, and industrial use. Full lab reports and treatment recommendations.",
    href: "/borehole-water-testing",
    icon: <Waves className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Expert Borehole Drilling & Installation Across Gauteng"
        subtitle="★★★★★ Rated #1 | 15+ Years Experience | 5,000+ Boreholes Drilled | Free Site Assessment"
        description="Professional borehole drilling, installation & maintenance across Johannesburg, Pretoria, Sandton, Midrand and Centurion. Licensed, certified technicians. From R18,000. Call 060 348 8268 for a free quote!"
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Site Assessment", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      {/* Trust Badges */}
      <section className="py-8 bg-accent/5 border-y border-accent/20">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-semibold">4.9/5 Rating (1,250+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-semibold">Same-Day Assessment Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-semibold">12-Month Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Gauteng's Most Trusted Borehole Specialists</h2>
            <p className="text-muted-foreground">Delivering water independence across Gauteng since 2009</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              <div className="text-xs text-muted-foreground mt-1">Since 2009</div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground font-medium">Boreholes Drilled</div>
              <div className="text-xs text-muted-foreground mt-1">Across Gauteng</div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">R18K</div>
              <div className="text-sm text-muted-foreground font-medium">Starting Price</div>
              <div className="text-xs text-muted-foreground mt-1">Full Installation</div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">80%</div>
              <div className="text-sm text-muted-foreground font-medium">Water Bill Saving</div>
              <div className="text-xs text-muted-foreground mt-1">Average Customer Saving</div>
            </div>
          </div>
        </div>
      </section>

      {/* Borehole Services */}
      <ServicesGrid
        title="Complete Borehole Solutions Across Gauteng"
        description="From initial site assessment to drilling, installation, maintenance and repairs — we handle everything. Professional service with guaranteed results and 12-month warranties on all work."
        services={boreholeServices}
        columns={3}
      />

      {/* SEO Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Gauteng's Leading Borehole Drilling & Installation Experts
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                When you need professional <strong>borehole drilling in Gauteng</strong>, Borehole Pros delivers unmatched expertise and reliable results. Since 2009, we've been Gauteng's trusted partner for water independence through expert borehole drilling and installation. With over 5,000 successful boreholes completed across <Link href="/borehole-drilling-midrand" className="text-accent hover:underline font-semibold">Midrand</Link>, <Link href="/borehole-drilling-kempton-park" className="text-accent hover:underline font-semibold">Kempton Park</Link>, <Link href="/borehole-drilling-pretoria" className="text-accent hover:underline font-semibold">Pretoria</Link>, <Link href="/borehole-drilling-roodepoort" className="text-accent hover:underline font-semibold">Roodepoort</Link> and <Link href="/borehole-drilling-krugersdorp" className="text-accent hover:underline font-semibold">Krugersdorp</Link>, we've built our reputation on quality workmanship, honest pricing, and guaranteed results.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Expert Borehole Drilling & Installation Services</h3>

              <p className="leading-relaxed">
                Water independence is increasingly important for Gauteng homes and businesses. Our professional <strong>borehole drilling services</strong> provide reliable, cost-effective water solutions reducing dependence on municipal supplies and protecting against water restrictions and load shedding. We handle complete borehole projects from initial site assessment and geological surveys through drilling, pump installation, pressure system setup, and final testing and certification.
              </p>

              <p className="leading-relaxed">
                Using modern drilling equipment and experienced technicians, we've successfully completed boreholes ranging from residential properties requiring 10,000 liters daily to commercial operations needing 50,000+ liters. Our borehole installation services include submersible pump selection and installation, pressure tank and control systems, electrical connections and automation, water quality testing and treatment recommendations, and full compliance certification. Most residential <Link href="/borehole-drilling-cost" className="text-accent hover:underline font-semibold">borehole installations cost between ZAR 18,000–28,000</Link>, providing decades of reliable water supply with minimal ongoing costs.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Borehole Repairs & Emergency Services</h3>

              <p className="leading-relaxed">
                Borehole stopped working? Don't lose your water supply. Our <Link href="/borehole-not-working" className="text-accent hover:underline font-semibold">borehole repair team</Link> diagnoses and fixes all faults across Gauteng — from pump failures and pressure problems to electrical faults and blocked casings. We offer same-day <Link href="/emergency-borehole-repair-johannesburg" className="text-accent hover:underline font-semibold">emergency borehole repair in Johannesburg</Link> and <Link href="/borehole-emergency-pretoria" className="text-accent hover:underline font-semibold">Pretoria</Link>. Call 060 348 8268 for fast assistance.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Solar Borehole Pumps — Load Shedding Proof</h3>

              <p className="leading-relaxed">
                With load shedding affecting Gauteng daily, our <Link href="/solar-borehole-pumps" className="text-accent hover:underline font-semibold">solar borehole pump systems</Link> keep your water flowing 24/7 regardless of Eskom. Completely energy independent, our solar pump installations pay for themselves within 2–3 years while delivering decades of free water pumping. Perfect for both new boreholes and upgrading existing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Borehole Drilling Across All Gauteng Suburbs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We provide expert borehole drilling and installation services across all Gauteng suburbs. Local teams with deep knowledge of Gauteng's water tables, geology, and municipal regulations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/johannesburg" className="hover:text-accent transition-colors">
                  Johannesburg
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Borehole drilling across <Link href="/borehole-drilling-midrand" className="text-accent hover:underline">Midrand</Link>, <Link href="/borehole-drilling-roodepoort" className="text-accent hover:underline">Roodepoort</Link>, <Link href="/borehole-drilling-edenvale" className="text-accent hover:underline">Edenvale</Link>, <Link href="/fourways" className="text-accent hover:underline">Fourways</Link>, <Link href="/sandton" className="text-accent hover:underline">Sandton</Link>, and <Link href="/east-rand" className="text-accent hover:underline">East Rand</Link>.
              </p>
              <Link href="/johannesburg" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Johannesburg Services <TrendingUp className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/pretoria" className="hover:text-accent transition-colors">
                  Pretoria & Tshwane
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Professional borehole drilling across <Link href="/borehole-drilling-prices-pretoria" className="text-accent hover:underline">Pretoria</Link>, <Link href="/centurion" className="text-accent hover:underline">Centurion</Link>, Tshwane and all surrounding areas. Residential and commercial.
              </p>
              <Link href="/pretoria" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Pretoria Services <TrendingUp className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/east-rand" className="hover:text-accent transition-colors">
                  East Rand
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Borehole drilling across <Link href="/borehole-drilling-kempton-park" className="text-accent hover:underline">Kempton Park</Link>, <Link href="/borehole-drilling-edenvale" className="text-accent hover:underline">Edenvale</Link>, <Link href="/germiston" className="text-accent hover:underline">Germiston</Link>, Boksburg and Benoni.
              </p>
              <Link href="/east-rand" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View East Rand Services <TrendingUp className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/midrand" className="hover:text-accent transition-colors">
                  Midrand & Centurion
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Expert borehole drilling in <Link href="/borehole-drilling-midrand" className="text-accent hover:underline">Midrand</Link>, <Link href="/centurion" className="text-accent hover:underline">Centurion</Link>, Halfway House, Kyalami and all surrounding suburbs.
              </p>
              <Link href="/midrand" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Midrand Services <TrendingUp className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why 5,000+ Gauteng Homeowners Choose Borehole Pros
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Gauteng's most trusted borehole drilling and installation experts since 2009. Professional service, transparent pricing, and guaranteed satisfaction on every job.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Licensed & Certified Experts</h3>
              <p className="text-muted-foreground text-sm">
                15+ years experience with fully licensed, certified technicians. All work meets SANS 10252 standards and building regulations with full compliance certification and insurance.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Free Site Assessment</h3>
              <p className="text-muted-foreground text-sm">
                We visit your property, assess the geology, identify the best drilling location, and give you a transparent fixed quote — all completely free with no obligation.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">12-Month Warranty</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive 12-month warranties on all workmanship. Pumps carry manufacturer warranties of 2–5 years. We stand behind every borehole we drill completely.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Transparent Fixed Pricing</h3>
              <p className="text-muted-foreground text-sm">
                Detailed quotes before work begins with no hidden charges. Fixed-price quotes for all installations. You'll always know the full cost upfront before we drill.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">5,000+ Satisfied Customers</h3>
              <p className="text-muted-foreground text-sm">
                Trusted by thousands of Gauteng homes and businesses since 2009. 4.9/5 average rating from 1,250+ verified reviews. Our customers save up to 80% on water bills.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Complete Turnkey Service</h3>
              <p className="text-muted-foreground text-sm">
                We handle everything — site assessment, drilling, pump installation, pressure systems, electrical connection, water testing and certification. One team, one quote, zero hassle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Common questions about borehole drilling and installation in Gauteng. Call us anytime on <strong>060 348 8268</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">How much does borehole drilling cost in Gauteng?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most residential boreholes in Gauteng range from <strong>ZAR 18,000 to 28,000</strong> including drilling, pump installation, pressure system, and certification. Cost depends on depth and geology. <Link href="/borehole-drilling-cost" className="text-accent font-semibold hover:underline">View our full cost guide</Link> or contact us for a free site assessment and accurate quote.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">How long does borehole drilling take?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most residential borehole drilling is completed in <strong>1–2 days</strong>. The full installation including pump, pressure system and electrical connection typically takes 2–3 days total. We work efficiently to minimise disruption to your property.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">Do I need permits for borehole drilling in Gauteng?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Permit requirements vary by municipality. Some Gauteng areas require simple registration while others need full permits. Our team handles all permit applications and compliance documentation for Johannesburg, Pretoria, Ekurhuleni and surrounding areas.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">What is included in a full borehole installation?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our complete installation includes drilling to water-bearing depth, submersible pump, pressure tank and control system, electrical connection and automation, water quality testing, commissioning, compliance certification, and operator training. <strong>ZAR 18,000–28,000</strong> for most residential properties.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">My borehole stopped working — what do I do?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Call us immediately on <strong>060 348 8268</strong>. We offer same-day <Link href="/borehole-not-working" className="text-accent font-semibold hover:underline">borehole repair across Gauteng</Link>. Common causes include pump failure, power issues, low water table, or blocked casings — all of which our technicians can diagnose and fix fast.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">How much water can a borehole produce in Gauteng?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gauteng boreholes typically yield between 500 and 5,000 litres per hour depending on the aquifer. A site assessment determines your property's yield potential before drilling. Most residential households need 500–1,500 litres per hour for full water independence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Real reviews from real Gauteng homeowners and businesses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Excellent borehole installation from start to finish. Professional site assessment, clean drilling process, quality pump installation. Our water bills dropped by 80%. Worth every cent!"
              </p>
              <p className="font-semibold text-sm">John P. — Pretoria</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Best decision we made for our property. The team drilled, installed and certified everything in 2 days. Water supply is consistent and we no longer worry about municipal restrictions."
              </p>
              <p className="font-semibold text-sm">Mark T. — Sandton</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Our borehole pump failed on a Saturday. They sent a technician same day, diagnosed the fault and had us back up and running by Sunday afternoon. Incredible service."
              </p>
              <p className="font-semibold text-sm">Linda K. — Midrand</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready for Water Independence in Gauteng?"
        description="Get a free site assessment and quote today. No obligation. Our certified technicians will visit your property, assess the geology, and give you a transparent price. Call 060 348 8268 now."
        primaryCTA={{ text: "Get Free Site Assessment", href: "/contact" }}
        secondaryCTA={{ text: "Call: 060 348 8268", href: "tel:0603488268" }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://boreholepros.co.za",
            name: "Borehole Pros",
            description: "Professional borehole drilling, installation and maintenance services across Gauteng. Licensed technicians, certified specialists, 15+ years experience.",
            url: "https://boreholepros.co.za",
            telephone: "+27603488268",
            email: "info@boreholepros.co.za",
            priceRange: "ZAR",
            image: {
              "@type": "ImageObject",
              url: "https://boreholepros.co.za/images/borehole-drilling.jpg",
              width: 1200,
              height: 630,
            },
            address: {
              "@type": "PostalAddress",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-26.2041",
              longitude: "28.0473",
            },
            areaServed: [
              { "@type": "City", name: "Johannesburg" },
              { "@type": "City", name: "Pretoria" },
              { "@type": "City", name: "Sandton" },
              { "@type": "City", name: "Midrand" },
              { "@type": "City", name: "Centurion" },
              { "@type": "City", name: "Kempton Park" },
              { "@type": "City", name: "Roodepoort" },
              { "@type": "City", name: "Krugersdorp" },
              { "@type": "City", name: "Edenvale" },
              { "@type": "City", name: "Ekurhuleni" },
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "06:00",
              closes: "20:00",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1250",
              bestRating: "5",
              worstRating: "1",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Borehole Services Gauteng",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Borehole Drilling",
                    description: "Professional borehole drilling for residential and commercial properties across Gauteng",
                    serviceType: "Borehole Drilling",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "18000",
                    maxPrice: "28000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Borehole Installation",
                    description: "Complete borehole installation including pump, pressure system and certification",
                    serviceType: "Borehole Installation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Borehole Maintenance",
                    description: "Annual maintenance plans, pump inspections and water quality testing",
                    serviceType: "Borehole Maintenance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Borehole Pump Repair",
                    description: "Emergency borehole pump repairs and fault diagnosis across Gauteng",
                    serviceType: "Borehole Repair",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Solar Borehole Pumps",
                    description: "Solar powered borehole pump installation for load shedding proof water supply",
                    serviceType: "Solar Borehole Pumps",
                  },
                },
              ],
            },
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
                name: "How much does borehole drilling cost in Gauteng?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most residential boreholes in Gauteng range from ZAR 18,000 to 28,000 including drilling, pump installation, pressure system, and certification. Cost depends on depth and geology. Contact us for a free site assessment and accurate quote.",
                },
              },
              {
                "@type": "Question",
                name: "How long does borehole drilling take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most residential borehole drilling is completed in 1–2 days. The full installation including pump, pressure system and electrical connection typically takes 2–3 days total.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need permits for borehole drilling in Gauteng?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Permit requirements vary by municipality. Our team handles all permit applications and compliance documentation for Johannesburg, Pretoria, Ekurhuleni and surrounding areas.",
                },
              },
              {
                "@type": "Question",
                name: "My borehole stopped working — what do I do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Call us immediately on 060 348 8268. We offer same-day borehole repair across Gauteng. Common causes include pump failure, power issues, low water table, or blocked casings.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
