import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import {
  CheckCircle2,
  Droplet,
  MapPin,
  Phone,
  Shield,
  Star,
  Clock,
  Award,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Gauteng | Expert Installation from R18,000 | Borehole Pros",
  description:
    "★★★★★ Professional borehole drilling across Gauteng. 15+ years experience, 5000+ boreholes drilled. Complete installation, water testing, compliance certification. Serving Johannesburg, Pretoria, Sandton, Midrand, Centurion & all Gauteng suburbs. Licensed & insured. Free site assessment. Call 060 348 8268.",
  keywords: [
    "borehole drilling gauteng",
    "borehole drilling johannesburg",
    "borehole drilling pretoria",
    "borehole drilling sandton",
    "borehole drilling midrand",
    "borehole drilling centurion",
    "borehole drilling kempton park",
    "borehole drilling roodepoort",
    "borehole drilling krugersdorp",
    "borehole drilling edenvale",
    "borehole installation gauteng",
    "borehole drilling cost gauteng",
    "borehole drilling near me gauteng",
    "borehole drilling east rand",
    "professional borehole drilling gauteng",
  ],
  openGraph: {
    title: "Borehole Drilling Gauteng | From R18,000 | Borehole Pros",
    description: "5000+ boreholes drilled across Gauteng. 15+ years experience. Licensed professionals. Free site assessments. Call 060 348 8268",
    url: "https://boreholepros.co.za/borehole-drilling",
    siteName: "Borehole Pros",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://boreholepros.co.za/borehole-drilling",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const features: ServiceItem[] = [
  {
    title: "Free Site Assessment",
    description: "Professional geological survey and water table analysis across all Gauteng suburbs. We determine the optimal drilling location and expected depth for maximum yield — completely free.",
    href: "/contact",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    title: "Modern Drilling Equipment",
    description: "State-of-the-art drilling rigs capable of depths up to 200 meters. Efficient, safe operations with minimal disruption to your Gauteng property.",
    href: "/contact",
    icon: <Droplet className="w-8 h-8" />,
  },
  {
    title: "Water Quality Testing",
    description: "Comprehensive lab analysis testing for bacteria, minerals, pH levels, and compliance with SANS 241 drinking water standards. Full report included.",
    href: "/borehole-water-testing",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    title: "Complete Installation",
    description: "Full pump system setup including submersible pumps, pressure tanks, control panels, electrical connections and compliance certification. Ready to use.",
    href: "/borehole-installation",
    icon: <Shield className="w-8 h-8" />,
  },
]

export default function BoreholeDrillingPage() {
  return (
    <>
      <Hero
        title="Professional Borehole Drilling Services Across Gauteng"
        subtitle="★★★★★ Gauteng's #1 Borehole Specialists | 5,000+ Boreholes Drilled | 15+ Years Experience"
        description="Complete borehole drilling services from free site assessment through installation, water testing and certification. Licensed professionals using modern equipment. Serving Johannesburg, Pretoria, Sandton, Midrand, Centurion, Kempton Park, Roodepoort and all Gauteng suburbs. From R18,000. Call 060 348 8268 now."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Site Assessment", href: "/contact" },
          secondary: { text: "Call: 060 348 8268", href: "tel:0603488268" },
        }}
      />

      {/* Trust Badges */}
      <section className="py-8 bg-muted border-y">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-semibold">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="font-semibold">5,000+ Boreholes Drilled</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-semibold">12-Month Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-semibold">4.9/5 Rating (1,250+ Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Gauteng's Leading Borehole Drilling Company
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                <p className="leading-relaxed">
                  Water independence is increasingly essential for Gauteng homes and businesses. Municipal water supply challenges, regular restrictions, rising costs and load shedding make <strong>borehole drilling in Gauteng</strong> a smart long-term investment. Borehole Pros has provided professional <strong>borehole drilling services across Gauteng</strong> since 2009, completing over 5,000 successful installations in residential, commercial, and industrial properties across Johannesburg, Pretoria, Sandton, Midrand, Centurion and beyond.
                </p>

                <p className="leading-relaxed">
                  Our experienced team handles complete borehole projects from initial site assessment and geological surveys through drilling, pump installation, pressure system setup, water quality testing, and full compliance certification. We have specialized knowledge of Gauteng's geology and water table characteristics across all suburbs — from <Link href="/borehole-drilling-midrand" className="text-accent hover:underline font-semibold">Midrand</Link> and <Link href="/borehole-drilling-kempton-park" className="text-accent hover:underline font-semibold">Kempton Park</Link> to <Link href="/borehole-drilling-roodepoort" className="text-accent hover:underline font-semibold">Roodepoort</Link>, <Link href="/borehole-drilling-krugersdorp" className="text-accent hover:underline font-semibold">Krugersdorp</Link>, and <Link href="/borehole-drilling-edenvale" className="text-accent hover:underline font-semibold">Edenvale</Link>.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Why Invest in Borehole Drilling in Gauteng?</h3>

                <ul className="space-y-3 my-6">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Dramatic cost savings:</strong> Reduce water bills by 60–80% annually. Typical payback period is 3–5 years.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Load shedding proof:</strong> Pair with our solar borehole pump and get water 24/7 regardless of Eskom outages.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Water security:</strong> Independent supply unaffected by Johannesburg Water or Tshwane restrictions and interruptions.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Property value increase:</strong> Boreholes typically add 3–5% to Gauteng property values — highly attractive to buyers.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Long-term reliability:</strong> Properly maintained boreholes operate efficiently for 20–30+ years.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Versatile use:</strong> Gardens, pools, irrigation, livestock, household drinking water, and commercial operations.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Our Professional Borehole Drilling Process</h3>

                <p className="leading-relaxed">
                  <strong>1. Free Site Assessment & Geological Survey:</strong> We visit your Gauteng property, conduct a full geological evaluation, estimate water table depth, identify the best drilling location, and provide a transparent fixed quote — all completely free with no obligation.
                </p>

                <p className="leading-relaxed">
                  <strong>2. Permit Application & Approvals:</strong> Where required, we handle all Johannesburg, Tshwane, and Ekurhuleni municipality permit applications. Our team navigates all local regulatory requirements efficiently, ensuring your installation is fully compliant.
                </p>

                <p className="leading-relaxed">
                  <strong>3. Professional Drilling Operations:</strong> Using modern drilling rigs operated by experienced Gauteng technicians, we drill to water-bearing formations typically found at 50–100 meters across Gauteng. Our equipment handles all geological conditions from soft sand to hard rock. We maintain clean work sites with minimal property disruption.
                </p>

                <p className="leading-relaxed">
                  <strong>4. Complete Pump System Installation:</strong> We install your full system including submersible pumps matched to your yield, pressure tanks, automated control panels, electrical connections by certified electricians, and distribution plumbing. All work meets SANS standards and building codes.
                </p>

                <p className="leading-relaxed">
                  <strong>5. Water Quality Testing:</strong> Comprehensive laboratory testing for bacteria, minerals, pH, and SANS 241 drinking water compliance. Full written report provided. If treatment is needed we recommend the appropriate filtration solution.
                </p>

                <p className="leading-relaxed">
                  <strong>6. System Commissioning & Training:</strong> We test everything, demonstrate operation, provide maintenance guidance, and hand over all documentation — warranties, compliance certificates, and operation manuals.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Borehole Drilling Costs in Gauteng</h3>

                <p className="leading-relaxed">
                  <strong>Shallow boreholes (15–50 meters)</strong> typically cost ZAR 12,000–18,000. Less common in Gauteng but possible in areas with high water tables near rivers and dams. Suitable for garden irrigation and non-potable uses.
                </p>

                <p className="leading-relaxed">
                  <strong>Standard boreholes (50–100 meters)</strong> range from ZAR 18,000–28,000. This is the most common depth across Gauteng, suitable for most residential and small commercial properties. Includes drilling, pump installation, pressure system, and certification.
                </p>

                <p className="leading-relaxed">
                  <strong>Deep boreholes (100–150+ meters)</strong> cost ZAR 28,000–45,000+. Required in parts of Pretoria with dolomitic geology and certain East Rand areas with deep water tables. Requires specialized drilling equipment and more powerful pumps.
                </p>

                <p className="leading-relaxed">
                  Additional costs include water quality testing (ZAR 1,200–1,800), treatment systems if required (ZAR 3,000–8,000), and compliance certificates (ZAR 500–1,200). We provide fully transparent quotes after site assessment with zero hidden charges. <Link href="/borehole-drilling-cost" className="text-accent hover:underline font-semibold">View our full cost guide here.</Link>
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Borehole Drilling Across All Gauteng Suburbs</h3>

                <p className="leading-relaxed">
                  We provide <strong>professional borehole drilling services</strong> across every Gauteng suburb with local teams who understand the specific geology, water tables, and municipal regulations in each area:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Johannesburg & Sandton</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Comprehensive borehole drilling across Johannesburg, <Link href="/sandton" className="text-accent hover:underline">Sandton</Link>, <Link href="/fourways" className="text-accent hover:underline">Fourways</Link>, Randburg, and Roodepoort. Typical depths 60–90 meters with excellent yields.
                        </p>
                        <Link href="/borehole-drilling-roodepoort" className="text-accent text-sm font-semibold hover:underline">
                          View Johannesburg drilling →
                        </Link>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Pretoria & Centurion</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Expert drilling across Pretoria, <Link href="/centurion" className="text-accent hover:underline">Centurion</Link>, and Tshwane. Specialized expertise with dolomitic areas requiring careful site assessment. Typical depths 70–100 meters.
                        </p>
                        <Link href="/borehole-drilling-prices-pretoria" className="text-accent text-sm font-semibold hover:underline">
                          View Pretoria drilling →
                        </Link>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">East Rand</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Professional drilling across <Link href="/borehole-drilling-kempton-park" className="text-accent hover:underline">Kempton Park</Link>, <Link href="/borehole-drilling-edenvale" className="text-accent hover:underline">Edenvale</Link>, Boksburg, Benoni, and <Link href="/germiston" className="text-accent hover:underline">Germiston</Link>. Excellent water table conditions in most areas.
                        </p>
                        <Link href="/east-rand" className="text-accent text-sm font-semibold hover:underline">
                          View East Rand drilling →
                        </Link>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Midrand & West Rand</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Borehole drilling across <Link href="/borehole-drilling-midrand" className="text-accent hover:underline">Midrand</Link>, Halfway House, Kyalami, <Link href="/borehole-drilling-krugersdorp" className="text-accent hover:underline">Krugersdorp</Link>, and Randfontein. Consistent water yields.
                        </p>
                        <Link href="/midrand" className="text-accent text-sm font-semibold hover:underline">
                          View Midrand drilling →
                        </Link>
                      </div>
                    </div>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Why Choose Borehole Pros in Gauteng</h3>

                <ul className="space-y-3 my-6">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>15+ years Gauteng experience:</strong> Over 5,000 successful borehole installations across all Gauteng suburbs and geological conditions.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Licensed and insured:</strong> All operators properly licensed with comprehensive insurance protecting your property throughout the project.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Modern equipment:</strong> State-of-the-art drilling rigs handling any Gauteng geological condition efficiently and safely.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Transparent fixed pricing:</strong> Detailed quotes with zero hidden costs. You know the full amount before we drill a single meter.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>12-month warranty:</strong> Comprehensive warranty covering all workmanship and equipment performance on every installation.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Same-day assessments:</strong> We come to your Gauteng property, assess the site, and give you a quote — often on the same day you call.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sticky Pricing Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-accent/5 border-accent sticky top-24">
                <h3 className="font-bold mb-4 text-lg">Gauteng Borehole Pricing</h3>
                <div className="space-y-4 text-sm">
                  <div className="pb-3 border-b">
                    <p className="font-semibold text-accent">Shallow (15–50m)</p>
                    <p className="text-muted-foreground font-medium">ZAR 12,000 – 18,000</p>
                    <p className="text-xs text-muted-foreground mt-1">High water table areas, irrigation use</p>
                  </div>
                  <div className="pb-3 border-b">
                    <p className="font-semibold text-accent">Standard (50–100m) ★ Most Common</p>
                    <p className="text-muted-foreground font-medium">ZAR 18,000 – 28,000</p>
                    <p className="text-xs text-muted-foreground mt-1">Most Gauteng residential & commercial</p>
                  </div>
                  <div className="pb-3 border-b">
                    <p className="font-semibold text-accent">Deep (100–150m+)</p>
                    <p className="text-muted-foreground font-medium">ZAR 28,000 – 45,000+</p>
                    <p className="text-xs text-muted-foreground mt-1">Dolomitic areas, high volume commercial</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Site Assessment</p>
                    <p className="text-muted-foreground font-medium">FREE</p>
                    <p className="text-xs text-muted-foreground mt-1">No obligation, same-day available</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t space-y-3">
                  <h4 className="font-bold text-sm">Get Started Today</h4>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <a
                    href="https://wa.me/27603488268"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    WhatsApp Us Now
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    Request Free Assessment
                  </Link>
                </div>

                {/* Trust signals in sidebar */}
                <div className="mt-6 pt-6 border-t space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Licensed & insured technicians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>12-month workmanship warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Transparent fixed pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>4.9/5 rating — 1,250+ reviews</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Complete Borehole Solutions Across Gauteng
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            From free site assessment to drilling, installation, water testing and ongoing maintenance — we handle everything
          </p>
          <ServicesGrid services={features} columns={4} />
        </div>
      </section>

      {/* Drilling Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Our Professional Borehole Drilling Process
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Six systematic steps ensuring quality results and full Gauteng municipal compliance
            </p>

            <div className="space-y-6">
              {[
                {
                  step: "Free Site Assessment & Survey",
                  desc: "We visit your Gauteng property, conduct a full geological evaluation, estimate water table depth, identify the optimal drilling location and provide a transparent fixed quote. Completely free, no obligation.",
                  time: "1–2 hours",
                },
                {
                  step: "Permit Application",
                  desc: "We handle all Johannesburg, Tshwane, and Ekurhuleni municipality permit applications where required. Our team navigates all local regulatory processes so you don't have to.",
                  time: "1–3 weeks",
                },
                {
                  step: "Professional Drilling",
                  desc: "Modern drilling rigs operated by experienced Gauteng technicians. We drill to water-bearing formations with minimal disruption to your property and clean up completely afterwards.",
                  time: "1–2 days",
                },
                {
                  step: "Pump System Installation",
                  desc: "Complete installation of submersible pump, pressure tank, automated control panel, and electrical connections by certified electricians. All work meets SANS standards.",
                  time: "1–2 days",
                },
                {
                  step: "Water Quality Testing",
                  desc: "Comprehensive laboratory analysis testing for bacteria, minerals, pH, and SANS 241 compliance. Full written report provided. Treatment recommendations if required.",
                  time: "3–5 days",
                },
                {
                  step: "System Commissioning & Handover",
                  desc: "Full system testing, operation demonstration, maintenance guidance, and complete handover documentation including warranties, compliance certificates and operation manuals.",
                  time: "2–3 hours",
                },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{item.step}</h3>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded whitespace-nowrap ml-2">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Borehole Drilling Costs in Gauteng
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Transparent pricing based on depth and system requirements. All prices include drilling, pump, pressure system and installation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <Droplet className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-xl">Shallow Borehole</h3>
                <p className="text-muted-foreground text-sm mb-4">15–50 meters depth</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-accent mb-2">ZAR 12,000–18,000</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>High water table areas</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>Garden irrigation & pools</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>Basic pump system included</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>1–2 day installation</span></li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                  MOST COMMON IN GAUTENG
                </span>
              </div>
              <div className="text-center mb-4">
                <Droplet className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-xl">Standard Borehole</h3>
                <p className="text-muted-foreground text-sm mb-4">50–100 meters depth</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-accent mb-2">ZAR 18,000–28,000</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>Most Gauteng residential use</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>Full household water supply</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>Quality submersible pump</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>2–3 day full installation</span></li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <Droplet className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-xl">Deep Borehole</h3>
                <p className="text-muted-foreground text-sm mb-4">100–150+ meters depth</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-accent mb-2">ZAR 28,000–45,000+</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>Dolomitic Pretoria areas</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>High-volume commercial use</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>Specialized drilling rigs</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span>3–4 day installation</span></li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              * Prices include drilling, pump, pressure tank, and installation. Water testing, treatment systems and complex electrical work quoted separately.
            </p>
            <Link href="/borehole-drilling-cost" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              View Full Borehole Cost Guide for Gauteng →
            </Link>
          </div>
        </div>
      </section>

      {/* Gauteng Service Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Borehole Drilling Across All Gauteng Suburbs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We cover every corner of Gauteng with local teams who know your area's specific geology and water tables
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Johannesburg", href: "/johannesburg" },
              { name: "Sandton", href: "/sandton" },
              { name: "Midrand", href: "/borehole-drilling-midrand" },
              { name: "Fourways", href: "/fourways" },
              { name: "Pretoria", href: "/borehole-drilling-prices-pretoria" },
              { name: "Centurion", href: "/centurion" },
              { name: "Kempton Park", href: "/borehole-drilling-kempton-park" },
              { name: "Edenvale", href: "/borehole-drilling-edenvale" },
              { name: "Roodepoort", href: "/borehole-drilling-roodepoort" },
              { name: "Krugersdorp", href: "/borehole-drilling-krugersdorp" },
              { name: "East Rand", href: "/east-rand" },
              { name: "Get A Quote", href: "/contact" },
            ].map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="text-center p-4 bg-muted rounded-lg hover:shadow-md hover:bg-accent/5 transition-all"
              >
                <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="font-semibold text-sm">{area.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What Gauteng Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {[
              {
                text: "Excellent borehole installation from start to finish. Professional site assessment, clean drilling process, quality pump installation. Our water bills dropped by 80%. Worth every cent!",
                name: "John P.",
                area: "Pretoria",
              },
              {
                text: "Best decision we made for our property. The team drilled, installed and certified everything in 2 days. No longer worry about Johannesburg Water restrictions at all.",
                name: "Mark T.",
                area: "Sandton",
              },
              {
                text: "Got three quotes and Borehole Pros were the most transparent with pricing. No hidden costs, they stuck to their quote exactly. Excellent workmanship and very professional team.",
                name: "Susan V.",
                area: "Centurion",
              },
            ].map((review, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{review.text}"</p>
                <p className="font-semibold text-sm">{review.name} — {review.area}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Ready for Water Independence in Gauteng?"
        description="Get a free site assessment and transparent quote today. No obligation. Our certified Gauteng technicians will visit your property and give you a fixed price. Call 060 348 8268 now or WhatsApp us anytime."
        primaryCTA={{ text: "Call: 060 348 8268", href: "tel:0603488268" }}
        secondaryCTA={{ text: "Request Free Assessment", href: "/contact" }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://boreholepros.co.za/borehole-drilling",
            name: "Borehole Drilling Services Gauteng",
            description: "Professional borehole drilling, installation and water testing services across Gauteng. Licensed operators, modern equipment, 15+ years experience, 5000+ boreholes completed.",
            url: "https://boreholepros.co.za/borehole-drilling",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Pros",
              telephone: "+27603488268",
              email: "info@boreholepros.co.za",
              url: "https://boreholepros.co.za",
              image: "https://boreholepros.co.za/images/borehole-drilling.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1250",
              },
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
              { "@type": "AdministrativeArea", name: "Gauteng" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Borehole Drilling Services Gauteng",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Shallow Borehole Drilling (15–50m)",
                    description: "Professional drilling for shallow water table areas, ideal for gardens and irrigation in Gauteng",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "12000",
                    maxPrice: "18000",
                    priceCurrency: "ZAR",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Standard Borehole Drilling (50–100m)",
                    description: "Most common borehole installation for Gauteng residential and commercial properties",
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
                    name: "Deep Borehole Drilling (100–150m+)",
                    description: "Specialized deep drilling for dolomitic Pretoria areas and high-volume commercial requirements",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "28000",
                    maxPrice: "45000",
                    priceCurrency: "ZAR",
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
                  text: "Borehole drilling in Gauteng costs ZAR 12,000–45,000+ depending on depth. Standard residential boreholes (50–100m) cost ZAR 18,000–28,000 including drilling, pump, pressure system and certification. Contact us for a free site assessment and fixed quote.",
                },
              },
              {
                "@type": "Question",
                name: "How deep do boreholes need to be drilled in Gauteng?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most Gauteng residential boreholes are drilled to 50–100 meters depth. Johannesburg and East Rand typically have good water at 60–90m. Pretoria and dolomitic areas may require 70–100m. We conduct a free site assessment to determine the expected depth for your specific property.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a permit to drill a borehole in Gauteng?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Permit requirements vary by Gauteng municipality. Johannesburg, Tshwane and Ekurhuleni each have different requirements. We handle all permit applications as part of our service so you don't have to deal with the paperwork.",
                },
              },
              {
                "@type": "Question",
                name: "How long does borehole drilling take in Gauteng?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The actual drilling takes 1–2 days. Full installation including pump, pressure system and electrical connection takes 2–3 days total. We work efficiently to minimise disruption to your Gauteng property.",
                },
              },
              {
                "@type": "Question",
                name: "Can a borehole provide full household water in Gauteng?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Most Gauteng properties achieve full water independence with a standard borehole. Gauteng aquifers typically yield 500–3,000 litres per hour which is more than sufficient for household use. Our free site assessment determines the expected yield for your specific property.",
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://boreholepros.co.za" },
              { "@type": "ListItem", position: 2, name: "Borehole Drilling Gauteng", item: "https://boreholepros.co.za/borehole-drilling" },
            ],
          }),
        }}
      />
    </>
  )
}
