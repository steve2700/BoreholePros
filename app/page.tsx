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
  AlertCircle, 
  MapPin, 
  CheckCircle2, 
  Phone,
  Clock,
  Shield,
  Award,
  Star,
  Users,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling & 24/7 Emergency Plumber South Africa | Borehole Pros",
  description:
    "★★★★★ Rated #1 Borehole Drilling & Emergency Plumbing Services SA. 15+ years experience, 5000+ projects. Available 24/7 in Johannesburg, Cape Town, Pretoria, Durban. Licensed plumbers. Call 060 348 8268 for FREE quote!",
  keywords: [
    "borehole drilling south africa",
    "emergency plumber johannesburg",
    "plumber near me",
    "24/7 plumber",
    "geyser installation",
    "leak detection services",
    "drain cleaning johannesburg",
    "burst pipe repair",
    "plumbing services cape town",
    "plumber pretoria",
    "plumber durban",
    "borehole installation cost",
    "emergency plumbing services",
    "blocked drain specialist",
    "professional plumber sandton",
  ],
  openGraph: {
    title: "Borehole Drilling & 24/7 Emergency Plumber | Borehole Pros SA",
    description: "★ 5000+ Happy Customers ★ 15+ Years Experience ★ Same-Day Service ★ Licensed Plumbers ★ Free Quotes",
    url: "https://boreholepros.co.za",
    siteName: "Borehole Pros",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "https://boreholepros.co.za/images/borehole-drilling.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Borehole Drilling and Emergency Plumbing Services South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borehole Drilling & 24/7 Emergency Plumber SA",
    description: "15+ years experience. Available 24/7. Free quotes. Call 060 348 8268",
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
  verification: {
    google: "your-google-verification-code",
  },
}

const boreholeServices: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description:
      "Professional borehole drilling with modern equipment and certified technicians. Site assessment, drilling, installation for residential and commercial properties across South Africa.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Borehole Installation",
    description:
      "Complete borehole installation including pump setup, pressure systems, electrical connection, testing, and certification. Expert installation ensuring 20+ years reliable operation.",
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
]

const plumbingServices: ServiceItem[] = [
  {
    title: "24/7 Emergency Plumbing",
    description:
      "Available 24/7 for burst pipes, major leaks, and urgent plumbing emergencies. Same-day response in Johannesburg, Cape Town, Pretoria, and Durban. Fast, professional repairs.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
  {
    title: "Geyser Installation & Repair",
    description:
      "Professional geyser installation, emergency repairs, and maintenance services. Energy-efficient solutions with expert installation ensuring safety and longevity.",
    href: "/geyser-installation-johannesburg",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/geyser-repair.jpg",
  },
  {
    title: "Leak Detection & Repair",
    description:
      "Advanced leak detection technology finding hidden leaks fast. Thermal imaging and acoustic equipment locate leaks without excavation. Professional repairs preventing water waste.",
    href: "/leak-detection",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/leak-detection.jpg",
  },
  {
    title: "Drain Cleaning & Blocked Drains",
    description:
      "Professional drain unblocking and cleaning services. High-pressure jetting, CCTV inspection, and rooter services clearing stubborn blockages in sinks, toilets, and sewer lines.",
    href: "/blocked-drain-johannesburg",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/team-working.jpg",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Enhanced SEO */}
      <Hero
        title="Expert Borehole Drilling & 24/7 Emergency Plumber South Africa"
        subtitle="★★★★★ Rated #1 | 15+ Years Experience | 5,000+ Happy Customers | Same-Day Service"
        description="Professional borehole drilling, installation & emergency plumbing across Johannesburg, Cape Town, Pretoria, and Durban. Licensed, certified technicians. Free quotes. Available 24/7 for emergencies. Call 060 348 8268 now!"
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Quote", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      {/* Trust Badges Section */}
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
              <span className="font-semibold">1-3 Hour Emergency Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-semibold">12-Month Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - Trust Signals */}
      <section className="py-12 bg-muted">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Trusted by Thousands Across South Africa</h2>
            <p className="text-muted-foreground">Delivering excellence in borehole drilling and plumbing since 2009</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              <div className="text-xs text-muted-foreground mt-1">Since 2009</div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
              <div className="text-xs text-muted-foreground mt-1">Satisfied Customers</div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Emergency Service</div>
              <div className="text-xs text-muted-foreground mt-1">Always Available</div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Satisfaction Rate</div>
              <div className="text-xs text-muted-foreground mt-1">Guaranteed Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call-Out Banner */}
      <section className="py-6 bg-accent text-accent-foreground">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Plumbing Emergency? We're Here 24/7!</h3>
                <p className="text-sm opacity-90">Burst pipes, major leaks, blocked drains - Call now for immediate assistance</p>
              </div>
            </div>
            <a
              href="tel:0603488268"
              className="bg-background text-accent px-8 py-3 rounded-lg font-bold hover:bg-background/90 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              060 348 8268
            </a>
          </div>
        </div>
      </section>

      {/* Services Sections with Enhanced Descriptions */}
      <ServicesGrid
        title="Professional Borehole Solutions Across South Africa"
        description="From drilling to maintenance, we handle all your borehole needs with expert precision. Fast, professional service with guaranteed results and 12-month warranties on all work."
        services={boreholeServices}
        columns={3}
      />

      <ServicesGrid
        title="Comprehensive Plumbing & Emergency Services"
        description="Emergency plumbing available 24/7 across all major cities. Expert leak detection, geyser installation, drain cleaning, pipe repairs, and more. Same-day service guaranteed."
        services={plumbingServices}
        columns={2}
      />

      {/* SEO Content Section - Rich, Keyword-Optimized */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              South Africa's Leading Borehole Drilling & Emergency Plumbing Experts
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                When you need a reliable <strong>emergency plumber</strong> or professional <strong>borehole drilling services in South Africa</strong>, Borehole Pros delivers unmatched expertise and 24/7 availability. Since 2009, we've been South Africa's trusted partner for comprehensive plumbing solutions and water independence through expert borehole installation. With over 5,000 successful projects completed across <Link href="/plumber-johannesburg" className="text-accent hover:underline font-semibold">Johannesburg</Link>, <Link href="/cape-town" className="text-accent hover:underline font-semibold">Cape Town</Link>, <Link href="/plumber-pretoria" className="text-accent hover:underline font-semibold">Pretoria</Link>, and <Link href="/durban" className="text-accent hover:underline font-semibold">Durban</Link>, we've built our reputation on quality workmanship, honest pricing, and rapid emergency response.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">24/7 Emergency Plumber Services Across Major Cities</h3>
              
              <p className="leading-relaxed">
                Plumbing emergencies don't wait for business hours. Whether you're dealing with a burst pipe flooding your home at 2 AM, a geyser failure on a freezing winter morning, or a blocked sewer backing up during the weekend, our <Link href="/emergency-plumbing" className="text-accent hover:underline font-semibold">24/7 emergency plumbing service</Link> responds immediately. We maintain fully equipped emergency response teams in <Link href="/emergency-plumber-johannesburg" className="text-accent hover:underline font-semibold">Johannesburg</Link>, <Link href="/plumber-sandton" className="text-accent hover:underline font-semibold">Sandton</Link>, <Link href="/plumber-midrand" className="text-accent hover:underline font-semibold">Midrand</Link>, <Link href="/centurion" className="text-accent hover:underline font-semibold">Centurion</Link>, and all major metropolitan areas, typically arriving within 1-3 hours of your emergency call.
              </p>

              <p className="leading-relaxed">
                Our emergency plumbers are licensed professionals equipped with advanced diagnostic tools and fully stocked service vehicles, ready to handle any urgent plumbing situation. From stopping catastrophic leaks to repairing burst pipes, clearing severe blockages to replacing failed geysers, we provide complete emergency solutions with transparent pricing—even at 3 AM. Call <strong>060 348 8268</strong> anytime for immediate emergency plumbing assistance.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Expert Borehole Drilling & Installation Services</h3>

              <p className="leading-relaxed">
                Water independence is increasingly important for South African homes and businesses. Our professional <strong>borehole drilling services</strong> provide reliable, cost-effective water solutions reducing dependence on municipal supplies and protecting against water restrictions. We handle complete borehole projects from initial site assessment and geological surveys through drilling, pump installation, pressure system setup, and final testing and certification.
              </p>

              <p className="leading-relaxed">
                Using modern drilling equipment and experienced technicians, we've successfully completed boreholes ranging from residential properties requiring 10,000 liters daily to commercial operations needing 50,000+ liters. Our borehole installation services include submersible pump selection and installation, pressure tank and control systems, electrical connections and automation, water quality testing and treatment recommendations, and full compliance certification. Most residential borehole installations cost between ZAR 18,000-28,000, providing decades of reliable water supply with minimal ongoing costs.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Comprehensive Plumbing Services</h3>

              <p className="leading-relaxed">
                Beyond emergency response, we provide complete plumbing services for residential, commercial, and industrial properties. Our <Link href="/leak-detection" className="text-accent hover:underline font-semibold">advanced leak detection services</Link> use thermal imaging and acoustic technology to locate hidden leaks without excavation, preventing water waste and structural damage. Professional <Link href="/blocked-drain-johannesburg" className="text-accent hover:underline font-semibold">drain cleaning and unblocking services</Link> clear everything from simple sink clogs to severe main sewer line blockages using high-pressure water jetting and specialized equipment.
              </p>

              <p className="leading-relaxed">
                Our <Link href="/geyser-installation-johannesburg" className="text-accent hover:underline font-semibold">geyser installation and repair services</Link> cover electric, gas, solar, and heat pump systems, ensuring safe, efficient hot water for your property. We also handle pipe repairs and replacements, bathroom and kitchen plumbing installations, water pressure regulation, and preventive maintenance programs. Every job receives the same attention to quality whether it's fixing a dripping tap or installing complete plumbing systems in new constructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Serve Section - Enhanced Local SEO */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Emergency Plumber & Borehole Services Across South Africa
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We provide expert borehole drilling, installation, and emergency plumbing services across South Africa's major cities. Local teams with deep knowledge of regional plumbing challenges, water tables, and municipal regulations ensuring compliant, reliable service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/plumber-johannesburg" className="hover:text-accent transition-colors">
                  Johannesburg Plumbing
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                24/7 <Link href="/emergency-plumber-johannesburg" className="text-accent hover:underline">emergency plumber</Link>, borehole drilling, geyser installation across Johannesburg, <Link href="/plumber-sandton" className="text-accent hover:underline">Sandton</Link>, <Link href="/plumber-midrand" className="text-accent hover:underline">Midrand</Link>, <Link href="/fourways" className="text-accent hover:underline">Fourways</Link>, <Link href="/germiston" className="text-accent hover:underline">Germiston</Link>, and <Link href="/east-rand" className="text-accent hover:underline">East Rand</Link>.
              </p>
              <Link href="/plumber-johannesburg" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Johannesburg Services <TrendingUp className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/cape-town" className="hover:text-accent transition-colors">
                  Cape Town Plumbing
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Expert plumbing and borehole services across <Link href="/cape-town" className="text-accent hover:underline">Cape Town</Link> metro, Northern Suburbs, Southern Suburbs, Atlantic Seaboard. Coastal corrosion specialists and heritage plumbing experts. Water-saving solutions.
              </p>
              <Link href="/cape-town" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Cape Town Services <TrendingUp className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/pretoria" className="hover:text-accent transition-colors">
                  Pretoria Plumbing
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Professional <Link href="/plumber-pretoria" className="text-accent hover:underline">plumbers serving Pretoria</Link>, <Link href="/centurion" className="text-accent hover:underline">Centurion</Link>, and Tshwane. Residential, commercial, and industrial plumbing solutions. Government building specialists.
              </p>
              <Link href="/pretoria" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Pretoria Services <TrendingUp className="w-4 h-4" />
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/durban" className="hover:text-accent transition-colors">
                  Durban Plumbing
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Plumbing and borehole services across <Link href="/durban" className="text-accent hover:underline">Durban</Link>, Umhlanga, Westville, and coastal KZN. Tropical climate and humidity-resistant solutions. Coastal property specialists.
              </p>
              <Link href="/durban" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Durban Services <TrendingUp className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced Trust Building */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why 5,000+ South Africans Choose Borehole Pros
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            South Africa's most trusted borehole drilling and emergency plumbing experts since 2009. Professional service, transparent pricing, and guaranteed satisfaction on every job.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Licensed & Certified Experts</h3>
              <p className="text-muted-foreground text-sm">
                15+ years experience with fully licensed, certified technicians. All work meets SANS 10252 plumbing standards and SANS 10400 building regulations with full compliance certification and insurance.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">True 24/7 Emergency Response</h3>
              <p className="text-muted-foreground text-sm">
                Real plumbers available around the clock for genuine plumbing emergencies. Fast response times—typically 1-3 hours across all major cities. Not an answering service, actual emergency technicians ready to help.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Quality Guaranteed Always</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive 12-month warranties on all work. Premium materials from trusted suppliers and professional workmanship ensuring long-lasting results. We stand behind every job completely.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Transparent, Fixed Pricing</h3>
              <p className="text-muted-foreground text-sm">
                Detailed quotes before work begins with no hidden charges. Fixed-price quotes for planned work. Emergency diagnostic fees credited toward repairs. You'll always know costs upfront.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">5,000+ Satisfied Customers</h3>
              <p className="text-muted-foreground text-sm">
                Trusted by thousands of homes and businesses since 2009. 4.9/5 average rating from 1,250+ verified reviews. Many customers return for all their plumbing and borehole needs.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Complete Service Range</h3>
              <p className="text-muted-foreground text-sm">
                Single provider for all plumbing and water needs. Emergency repairs, planned installations, maintenance, boreholes—everything handled by one trusted team eliminating coordination hassles.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Enhanced FAQ Section with Schema Markup */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Common questions about our borehole drilling and emergency plumbing services. Need more information? Call us at <strong>060 348 8268</strong> anytime—we're available 24/7.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">How much does borehole drilling cost in South Africa?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Borehole drilling costs vary based on depth, geology, and location. Most residential boreholes range from <strong>ZAR 18,000 to 28,000</strong> including drilling, pump installation, pressure system, and testing.{" "}
                <Link href="/borehole-drilling" className="text-accent font-semibold hover:underline">
                  Contact us for a free site assessment and accurate quote
                </Link>
                . We service <Link href="/plumber-johannesburg" className="text-accent hover:underline">Johannesburg</Link>, <Link href="/cape-town" className="text-accent hover:underline">Cape Town</Link>, <Link href="/plumber-pretoria" className="text-accent hover:underline">Pretoria</Link>, and <Link href="/durban" className="text-accent hover:underline">Durban</Link>.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">Is emergency plumbing really available 24/7?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! Our{" "}
                <Link href="/emergency-plumbing" className="text-accent font-semibold hover:underline">
                  emergency plumbers are genuinely available 24/7
                </Link>
                , 365 days a year across all major cities. Call <strong>060 348 8268</strong> anytime for urgent issues like burst pipes, major leaks, blocked drains, and geyser failures. We typically respond within 1-3 hours with fully equipped service vehicles. Not an answering service—real plumbers, real response.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">Do I need permits for borehole drilling?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Permit requirements vary by municipality and water usage. Some areas require simple registration while others need full permits. Our team provides expert advice on local regulations in{" "}
                <Link href="/johannesburg" className="text-accent font-semibold hover:underline">
                  Johannesburg
                </Link>
                ,{" "}
                <Link href="/cape-town" className="text-accent font-semibold hover:underline">
                  Cape Town
                </Link>
                ,{" "}
                <Link href="/pretoria" className="text-accent font-semibold hover:underline">
                  Pretoria
                </Link>
                , and{" "}
                <Link href="/durban" className="text-accent font-semibold hover:underline">
                  Durban
                </Link>
                . We can assist with permit applications and compliance documentation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">How quickly can you respond to plumbing emergencies?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Same-day response guaranteed in all service areas. Our emergency plumbers typically arrive within <strong>1-3 hours</strong> across Johannesburg, Cape Town, Pretoria, and Durban. For severe emergencies like major flooding, we prioritize even faster response.{" "}
                <Link href="/emergency-plumbing" className="text-accent font-semibold hover:underline">
                  Call 060 348 8268 immediately
                </Link>{" "}
                for burst pipes, major leaks, or urgent plumbing failures.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">What areas do you service across South Africa?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We provide comprehensive borehole drilling and emergency plumbing services across South Africa's major cities:{" "}
                <Link href="/plumber-johannesburg" className="text-accent hover:underline">Johannesburg</Link>,{" "}
                <Link href="/plumber-sandton" className="text-accent hover:underline">Sandton</Link>,{" "}
                <Link href="/plumber-midrand" className="text-accent hover:underline">Midrand</Link>,{" "}
                <Link href="/fourways" className="text-accent hover:underline">Fourways</Link>,{" "}
                <Link href="/cape-town" className="text-accent hover:underline">Cape Town</Link>,{" "}
                <Link href="/plumber-pretoria" className="text-accent hover:underline">Pretoria</Link>,{" "}
                <Link href="/centurion" className="text-accent hover:underline">Centurion</Link>, and{" "}
                <Link href="/durban" className="text-accent hover:underline">Durban</Link>, including surrounding suburbs and metro areas.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">Do you offer warranties on your work?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes, absolutely. All{" "}
                <Link href="/borehole-installation" className="text-accent hover:underline">borehole installations</Link>{" "}
                include comprehensive 12-month warranties on workmanship. Pumps carry manufacturer warranties ranging from 2-5 years depending on brand. All plumbing repairs and{" "}
                <Link href="/geyser-installation-johannesburg" className="text-accent hover:underline">geyser installations</Link>{" "}
                are guaranteed for 12 months. We stand behind all our work with quality assurance.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">What's included in borehole installation cost?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Complete borehole installation includes: drilling to water-bearing depth, submersible pump installation, pressure tank and control system, electrical connection and automation, water quality testing, system commissioning and testing, compliance certification, and basic operator training. Typical cost: <strong>ZAR 18,000-28,000</strong> for residential properties.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">Can you detect leaks without breaking walls?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! Our advanced{" "}
                <Link href="/leak-detection" className="text-accent font-semibold hover:underline">
                  leak detection technology
                </Link>{" "}
                uses thermal imaging cameras and acoustic listening equipment to locate hidden leaks without excavation or breaking walls. We pinpoint leak locations precisely, minimizing repair costs and property disruption. Detection service: <strong>ZAR 950-1,800</strong>.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What Our Customers Say
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Real reviews from real customers across South Africa
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Burst pipe at 11 PM on a Friday. They arrived within 90 minutes, fixed everything professionally, and cleaned up completely. Transparent pricing even during emergency. Highly recommend!"
              </p>
              <p className="font-semibold text-sm">Sarah M. - Sandton</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Excellent borehole installation from start to finish. Professional site assessment, clean drilling process, quality pump installation. Our water bills dropped by 80%. Worth every cent!"
              </p>
              <p className="font-semibold text-sm">John P. - Pretoria</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Used their leak detection service. Found hidden leak in walls without breaking anything. Saved thousands in potential water damage. Expert technicians, modern equipment, fair pricing."
              </p>
              <p className="font-semibold text-sm">Linda K. - Cape Town</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA with Enhanced Conversion Focus */}
      <CTASection
        title="Ready to Solve Your Water & Plumbing Needs?"
        description="Get expert advice and a free quote today. No obligation. Our certified technicians will assess your situation and provide the best solution. Available 24/7 for emergencies."
        primaryCTA={{ text: "Request Free Quote", href: "/contact" }}
        secondaryCTA={{ text: "Call: 060 348 8268", href: "tel:0603488268" }}
      />

      {/* Enhanced Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://boreholepros.co.za",
            name: "Borehole Pros",
            description: "Professional borehole drilling, installation and 24/7 emergency plumbing services across South Africa. Licensed plumbers, certified technicians, 15+ years experience.",
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
            logo: {
              "@type": "ImageObject",
              url: "https://boreholepros.co.za/logo.png",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "ZA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-26.2041",
              longitude: "28.0473",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Johannesburg",
                "@id": "https://boreholepros.co.za/plumber-johannesburg",
              },
              {
                "@type": "City",
                name: "Cape Town",
                "@id": "https://boreholepros.co.za/cape-town",
              },
              {
                "@type": "City",
                name: "Pretoria",
                "@id": "https://boreholepros.co.za/plumber-pretoria",
              },
              {
                "@type": "City",
                name: "Durban",
                "@id": "https://boreholepros.co.za/durban",
              },
              {
                "@type": "City",
                name: "Sandton",
                "@id": "https://boreholepros.co.za/plumber-sandton",
              },
              {
                "@type": "City",
                name: "Midrand",
                "@id": "https://boreholepros.co.za/plumber-midrand",
              },
              {
                "@type": "City",
                name: "Centurion",
                "@id": "https://boreholepros.co.za/centurion",
              },
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1250",
              bestRating: "5",
              worstRating: "1",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Sarah M.",
                },
                datePublished: "2024-11-15",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                reviewBody: "Burst pipe at 11 PM on a Friday. They arrived within 90 minutes, fixed everything professionally, and cleaned up completely. Transparent pricing even during emergency. Highly recommend!",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "John P.",
                },
                datePublished: "2024-10-28",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                reviewBody: "Excellent borehole installation from start to finish. Professional site assessment, clean drilling process, quality pump installation. Our water bills dropped by 80%. Worth every cent!",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Plumbing and Borehole Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "24/7 Emergency Plumbing",
                    description: "Immediate response for burst pipes, major leaks, and plumbing emergencies",
                    serviceType: "Emergency Plumbing",
                    provider: {
                      "@type": "LocalBusiness",
                      name: "Borehole Pros",
                    },
                  },
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Borehole Drilling",
                    description: "Professional borehole drilling and installation services",
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
                    name: "Leak Detection",
                    description: "Advanced leak detection using thermal imaging and acoustic technology",
                    serviceType: "Leak Detection",
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
                    name: "Geyser Installation",
                    description: "Professional geyser installation and repair services",
                    serviceType: "Geyser Services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Drain Cleaning",
                    description: "Professional drain unblocking and cleaning services",
                    serviceType: "Drain Cleaning",
                  },
                },
              ],
            },
            sameAs: [
              "https://www.facebook.com/boreholepros",
              "https://www.instagram.com/boreholepros",
              "https://twitter.com/boreholepros",
            ],
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
                name: "How much does borehole drilling cost in South Africa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Borehole drilling costs vary based on depth, geology, and location. Most residential boreholes range from ZAR 18,000 to 28,000 including drilling, pump installation, pressure system, and testing. Contact us for a free site assessment and accurate quote.",
                },
              },
              {
                "@type": "Question",
                name: "Is emergency plumbing really available 24/7?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Our emergency plumbers are genuinely available 24/7, 365 days a year across all major cities. Call 060 348 8268 anytime for urgent issues like burst pipes, major leaks, blocked drains, and geyser failures. We typically respond within 1-3 hours with fully equipped service vehicles.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need permits for borehole drilling?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Permit requirements vary by municipality and water usage. Some areas require simple registration while others need full permits. Our team provides expert advice on local regulations in Johannesburg, Cape Town, Pretoria, and Durban. We can assist with permit applications and compliance documentation.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you respond to plumbing emergencies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Same-day response guaranteed in all service areas. Our emergency plumbers typically arrive within 1-3 hours across Johannesburg, Cape Town, Pretoria, and Durban. For severe emergencies like major flooding, we prioritize even faster response.",
                },
              },
              {
                "@type": "Question",
                name: "What areas do you service across South Africa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide comprehensive borehole drilling and emergency plumbing services across South Africa's major cities: Johannesburg, Sandton, Midrand, Fourways, Cape Town, Pretoria, Centurion, and Durban, including surrounding suburbs and metro areas.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer warranties on your work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, absolutely. All borehole installations include comprehensive 12-month warranties on workmanship. Pumps carry manufacturer warranties ranging from 2-5 years depending on brand. All plumbing repairs and geyser installations are guaranteed for 12 months.",
                },
              },
              {
                "@type": "Question",
                name: "What's included in borehole installation cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Complete borehole installation includes: drilling to water-bearing depth, submersible pump installation, pressure tank and control system, electrical connection and automation, water quality testing, system commissioning and testing, compliance certification, and basic operator training. Typical cost: ZAR 18,000-28,000 for residential properties.",
                },
              },
              {
                "@type": "Question",
                name: "Can you detect leaks without breaking walls?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Our advanced leak detection technology uses thermal imaging cameras and acoustic listening equipment to locate hidden leaks without excavation or breaking walls. We pinpoint leak locations precisely, minimizing repair costs and property disruption. Detection service: ZAR 950-1,800.",
                },
              },
            ],
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
                item: "https://boreholepros.co.za",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://boreholepros.co.za/#website",
            url: "https://boreholepros.co.za",
            name: "Borehole Pros",
            description: "Professional borehole drilling and 24/7 emergency plumbing services across South Africa",
            publisher: {
              "@type": "Organization",
              "@id": "https://boreholepros.co.za/#organization",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://boreholepros.co.za/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  )
}
