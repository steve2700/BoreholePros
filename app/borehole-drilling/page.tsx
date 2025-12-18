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
  Users
} from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling South Africa | Expert Installation from R18,000 | Borehole Pros",
  description:
    "★★★★★ Professional borehole drilling across SA. 15+ years experience, 2000+ boreholes drilled. Complete installation, water testing, compliance certification. Serving Johannesburg, Cape Town, Pretoria, Durban. Licensed & insured. Free site assessment. Call 060 348 8268.",
  keywords: [
    "borehole drilling south africa",
    "borehole drilling cost",
    "water borehole drilling",
    "borehole installation",
    "borehole drilling companies",
    "borehole drilling johannesburg",
    "borehole drilling pretoria",
    "borehole drilling cape town",
    "borehole drilling prices",
    "professional borehole drilling",
    "borehole drilling services",
    "borehole drilling near me",
  ],
  openGraph: {
    title: "Professional Borehole Drilling South Africa | From R18,000 | Borehole Pros",
    description: "2000+ boreholes drilled. 15+ years experience. Licensed professionals. Free site assessments. Call 060 348 8268",
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
    title: "Expert Site Assessment",
    description: "Professional geological surveys and water table analysis. We determine optimal drilling locations and expected depths for maximum yield.",
    href: "/contact",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    title: "Modern Drilling Equipment",
    description: "State-of-the-art drilling rigs capable of depths up to 200 meters. Efficient, safe operations with minimal environmental impact.",
    href: "/contact",
    icon: <Droplet className="w-8 h-8" />,
  },
  {
    title: "Water Quality Testing",
    description: "Comprehensive lab analysis testing for bacteria, minerals, pH levels, and compliance with SANS 241 drinking water standards.",
    href: "/contact",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    title: "Complete Installation",
    description: "Full pump system setup including submersible pumps, pressure tanks, control panels, and electrical connections. Ready to use.",
    href: "/borehole-installation",
    icon: <Shield className="w-8 h-8" />,
  },
]

export default function BoreholeDrillingPage() {
  return (
    <>
      <Hero
        title="Professional Borehole Drilling Services Across South Africa"
        subtitle="★★★★★ Expert Water Solutions | 2,000+ Boreholes Drilled | 15+ Years Experience"
        description="Complete borehole drilling services from site assessment through installation and testing. Licensed professionals using modern equipment. Serving Johannesburg, Cape Town, Pretoria, Durban, and 30+ cities nationwide. Free site assessments. Same-day quotes. Competitive pricing from R18,000. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Assessment", href: "/contact" },
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
              <span className="font-semibold">2,000+ Boreholes Drilled</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-semibold">12-Month Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                South Africa's Leading Borehole Drilling Company
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                <p className="leading-relaxed">
                  Water independence is increasingly essential for South African homes and businesses. Municipal water supply challenges, regular restrictions, and rising costs make <strong>borehole drilling</strong> a smart long-term investment. Borehole Pros has provided professional <strong>borehole drilling services across South Africa</strong> since 2009, completing over 2,000 successful installations in residential, commercial, agricultural, and industrial properties.
                </p>

                <p className="leading-relaxed">
                  Our experienced team handles complete borehole projects from initial site assessment and geological surveys through drilling, pump installation, pressure system setup, water quality testing, and compliance certification. We operate across all major South African cities including <Link href="/plumber-johannesburg" className="text-accent hover:underline font-semibold">Johannesburg</Link>, <Link href="/cape-town" className="text-accent hover:underline font-semibold">Cape Town</Link>, <Link href="/plumber-pretoria" className="text-accent hover:underline font-semibold">Pretoria</Link>, and <Link href="/durban" className="text-accent hover:underline font-semibold">Durban</Link>, with specialized knowledge of regional geology and water table characteristics.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Why Invest in Borehole Drilling?</h3>

                <p className="leading-relaxed">
                  Boreholes provide numerous benefits making them excellent investments for property owners:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Dramatic cost savings:</strong> Reduce water bills by 60-80% annually. Typical payback period is 3-5 years.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Water security:</strong> Independent supply unaffected by municipal restrictions, interruptions, or load shedding.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Property value increase:</strong> Boreholes typically add 3-5% to property values, highly attractive to buyers.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Long-term reliability:</strong> Properly maintained boreholes operate efficiently for 20-30+ years.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Environmental sustainability:</strong> Eco-friendly water solution reducing strain on municipal systems.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Versatile applications:</strong> Perfect for gardens, pools, irrigation, livestock, household use, and commercial operations.</span>
                  </li>
                </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <Droplet className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-xl">Deep Borehole</h3>
                <p className="text-muted-foreground text-sm mb-4">100-150+ meters depth</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-accent mb-2">ZAR 28,000-45,000+</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Rural areas, deep water table</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>High-volume commercial use</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Specialized drilling rigs</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>3-4 day installation</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              * Prices include drilling, pump, pressure tank, and basic installation. Additional costs may apply for water testing, treatment systems, and complex electrical work.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Get Your Free Detailed Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Borehole Drilling Across South Africa
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Professional services in all major cities and surrounding areas
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Johannesburg", href: "/plumber-johannesburg" },
              { name: "Sandton", href: "/plumber-sandton" },
              { name: "Midrand", href: "/plumber-midrand" },
              { name: "Fourways", href: "/fourways" },
              { name: "Cape Town", href: "/cape-town" },
              { name: "Pretoria", href: "/plumber-pretoria" },
              { name: "Centurion", href: "/centurion" },
              { name: "Durban", href: "/durban" },
              { name: "East Rand", href: "/east-rand" },
              { name: "Randburg", href: "/randburg" },
              { name: "Germiston", href: "/germiston" },
              { name: "All Areas", href: "/contact" },
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

      <TrustSignals />

      <CTASection
        title="Ready for Water Independence? Get Your Free Borehole Assessment"
        description="Our experts will evaluate your property and provide a detailed quote with no obligation. Most assessments completed same-day. Contact us now to start your journey to water independence."
        primaryCTA={{ text: "Call: 060 348 8268", href: "tel:0603488268" }}
        secondaryCTA={{ text: "Request Free Assessment", href: "/contact" }}
      />

      {/* Enhanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://boreholepros.co.za/borehole-drilling",
            name: "Borehole Drilling Services South Africa",
            description: "Professional borehole drilling, installation and water testing services across South Africa. Licensed operators, modern equipment, 15+ years experience.",
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
                reviewCount: "450",
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
                "@type": "Country",
                name: "South Africa",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Borehole Drilling Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Shallow Borehole Drilling (15-50m)",
                    description: "Professional drilling for shallow water table areas, ideal for gardens and irrigation",
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
                    name: "Standard Borehole Drilling (50-100m)",
                    description: "Most common borehole installation for residential and commercial properties",
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
                    name: "Deep Borehole Drilling (100-150m+)",
                    description: "Specialized deep drilling for rural areas and high-volume requirements",
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
            additionalType: [
              "Borehole Installation",
              "Water Well Drilling",
              "Groundwater Development",
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
                  text: "Borehole drilling costs in South Africa range from ZAR 12,000 to 45,000+ depending on depth and requirements. Shallow boreholes (15-50m) cost ZAR 12,000-18,000, standard boreholes (50-100m) cost ZAR 18,000-28,000, and deep boreholes (100m+) cost ZAR 28,000-45,000+. Prices include drilling, pump installation, and basic setup.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to drill a borehole?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Borehole drilling typically takes 1-2 days for the actual drilling process. The complete project including site assessment, permits, drilling, pump installation, and testing usually takes 2-4 weeks from start to finish, depending on permit requirements in your area.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a permit to drill a borehole?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Permit requirements vary by municipality. Some areas require simple registration while others need full permits before drilling. We handle all permit applications and ensure compliance with local regulations. Contact us for specific requirements in your area.",
                },
              },
              {
                "@type": "Question",
                name: "How deep do you need to drill for water?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Water depth varies by region. In South Africa, water-bearing formations are typically found at 40-120 meters depth. Urban areas often have shallower water tables (40-70m) while rural areas may require deeper drilling (80-150m). We conduct site assessments to determine expected depths for your location.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a borehole last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Properly maintained boreholes can last 20-30+ years. The borehole itself is permanent, while pumps typically last 10-15 years with regular maintenance. Annual servicing ensures optimal performance and extends equipment life significantly.",
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Borehole Drilling",
                item: "https://boreholepros.co.za/borehole-drilling",
              },
            ],
          }),
        }}
      />
    </>
  )
}

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Professional Borehole Drilling Process</h3>

                <p className="leading-relaxed">
                  Our systematic approach ensures quality results and regulatory compliance:
                </p>

                <p className="leading-relaxed">
                  <strong>1. Site Assessment and Geological Survey:</strong> We begin with comprehensive property evaluation including geological analysis, water table depth estimation, access considerations, and regulatory requirement reviews. This assessment provides accurate expectations for drilling depth, water yield, and total project costs. Site assessments are free with no obligation.
                </p>

                <p className="leading-relaxed">
                  <strong>2. Permit Application and Approvals:</strong> Where required, we handle municipal permit applications and ensure compliance with local regulations. Requirements vary by municipality—some areas require registration while others need full permits. Our team navigates these processes efficiently, ensuring legal compliance for your installation.
                </p>

                <p className="leading-relaxed">
                  <strong>3. Professional Drilling Operations:</strong> Using modern drilling rigs operated by experienced technicians, we drill to water-bearing formations typically found at 40-120 meters depth (varies by region). Our equipment handles various geological conditions from soft sand to hard rock formations. We maintain clean work sites with minimal property disruption.
                </p>

                <p className="leading-relaxed">
                  <strong>4. Pump System Installation:</strong> Once drilling confirms adequate water supply, we install complete pump systems including submersible pumps matched to your requirements, pressure tanks maintaining consistent flow, control panels with automated operation, electrical connections by certified electricians, and distribution plumbing to your required points. All installations meet safety standards and building codes.
                </p>

                <p className="leading-relaxed">
                  <strong>5. Water Quality Testing:</strong> We conduct comprehensive water quality testing through accredited laboratories, analyzing bacterial content, mineral composition, pH levels, and compliance with SANS 241 drinking water standards. If treatment is needed, we recommend appropriate filtration systems.
                </p>

                <p className="leading-relaxed">
                  <strong>6. System Commissioning and Training:</strong> Final stages include thorough system testing, demonstration of operation and controls, maintenance guidance, and documentation including warranties, compliance certificates, and operation manuals.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Borehole Drilling Costs in South Africa</h3>

                <p className="leading-relaxed">
                  <strong>Borehole drilling costs</strong> vary based on depth, geology, and system requirements. Understanding pricing helps property owners budget appropriately:
                </p>

                <p className="leading-relaxed">
                  <strong>Shallow boreholes (15-50 meters)</strong> typically cost ZAR 12,000-18,000. Common in urban areas with high water tables like coastal regions and river valleys. Suitable for garden irrigation and non-potable uses.
                </p>

                <p className="leading-relaxed">
                  <strong>Standard boreholes (50-100 meters)</strong> range from ZAR 18,000-28,000. This is the most common depth across South Africa, suitable for most residential and small commercial applications. Includes drilling, basic pump installation, and pressure system.
                </p>

                <p className="leading-relaxed">
                  <strong>Deep boreholes (100-150+ meters)</strong> cost ZAR 28,000-45,000+. Required in areas with deep water tables or specialized high-volume commercial applications. Requires specialized drilling equipment and more powerful pumps.
                </p>

                <p className="leading-relaxed">
                  Additional costs include water quality testing (ZAR 1,200-1,800), treatment systems if needed (ZAR 3,000-8,000), and compliance certificates (ZAR 500-1,200). We provide detailed, transparent quotes after site assessment outlining all costs with no hidden charges.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Borehole Drilling Across Major South African Cities</h3>

                <p className="leading-relaxed">
                  We provide <strong>professional borehole drilling services</strong> across South Africa's major metropolitan areas, with local teams understanding regional geology, water tables, and municipal regulations:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Johannesburg Borehole Drilling</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Comprehensive services across Johannesburg, <Link href="/plumber-sandton" className="text-accent hover:underline">Sandton</Link>, <Link href="/plumber-midrand" className="text-accent hover:underline">Midrand</Link>, <Link href="/fourways" className="text-accent hover:underline">Fourways</Link>, Randburg, and East Rand. Typical depths 60-90 meters with excellent yields.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Cape Town Borehole Drilling</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Specialized experience with Cape Town's unique geology. Services across Northern Suburbs, Southern Suburbs, Atlantic Seaboard. Particularly valuable given water restrictions.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Pretoria Borehole Drilling</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Serving Pretoria, <Link href="/centurion" className="text-accent hover:underline">Centurion</Link>, and Tshwane. Expertise with dolomitic areas requiring specialized techniques. Typical depths 70-100 meters.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Durban Borehole Drilling</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Coastal KwaZulu-Natal services including Durban, Umhlanga, Westville. Favorable water tables with shallower drilling depths often 40-70 meters.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Why Choose Borehole Pros for Your Drilling Project</h3>

                <p className="leading-relaxed">
                  Our reputation stems from consistent quality, honest communication, and exceptional results:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>15+ years specialized experience:</strong> Over 2,000 successful borehole installations across diverse geological conditions</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Licensed and insured:</strong> All operators properly licensed with comprehensive insurance protecting your property</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Modern equipment:</strong> State-of-the-art drilling rigs capable of handling any geological condition efficiently</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Transparent pricing:</strong> Detailed quotes with no hidden costs. You know exactly what you're paying before work begins</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Quality materials:</strong> Premium pumps, pipes, and components from reputable manufacturers with proper warranties</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>12-month warranty:</strong> Comprehensive warranty covering workmanship and equipment performance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-accent/5 border-accent sticky top-24">
                <h3 className="font-bold mb-4 text-lg">Borehole Drilling Pricing</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-accent">Shallow (15-50m)</p>
                    <p className="text-muted-foreground">ZAR 12,000 - 18,000</p>
                    <p className="text-xs text-muted-foreground mt-1">Urban areas, high water table</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Standard (50-100m)</p>
                    <p className="text-muted-foreground">ZAR 18,000 - 28,000</p>
                    <p className="text-xs text-muted-foreground mt-1">Most common depth</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Deep (100-150m+)</p>
                    <p className="text-muted-foreground">ZAR 28,000 - 45,000+</p>
                    <p className="text-xs text-muted-foreground mt-1">Specialized equipment</p>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="font-semibold text-accent">Site Assessment</p>
                    <p className="text-muted-foreground">FREE</p>
                    <p className="text-xs text-muted-foreground mt-1">No obligation</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold mb-3 text-sm">Get Started Today</h4>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                  >
                    <Phone className="w-5 h-5" />
                    060 348 8268
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                  >
                    Request Free Assessment
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Complete Borehole Drilling Solutions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            From initial assessment to ongoing maintenance, we handle every aspect of your borehole project
          </p>

          <ServicesGrid
            services={features}
            columns={4}
          />
        </div>
      </section>

      {/* Drilling Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Our Professional Drilling Process
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Six systematic steps ensuring quality results and full compliance
            </p>

            <div className="space-y-6">
              {[
                { 
                  step: "1. Site Assessment & Survey", 
                  desc: "Professional evaluation of your property including geological analysis, water table depth estimation, and regulatory requirements. Free with no obligation.",
                  time: "1-2 hours"
                },
                { 
                  step: "2. Permit Application", 
                  desc: "We handle all necessary municipal permits and approvals. Requirements vary by location—we navigate the process efficiently.",
                  time: "1-3 weeks"
                },
                { 
                  step: "3. Professional Drilling", 
                  desc: "Modern drilling rigs operated by experienced technicians. We drill to water-bearing formations with minimal property disruption.",
                  time: "1-2 days"
                },
                { 
                  step: "4. Pump System Installation", 
                  desc: "Complete installation of submersible pumps, pressure tanks, control panels, and electrical connections. All work meets safety standards.",
                  time: "1-2 days"
                },
                { 
                  step: "5. Water Quality Testing", 
                  desc: "Comprehensive laboratory analysis testing for bacteria, minerals, pH, and compliance with SANS 241 drinking water standards.",
                  time: "3-5 days"
                },
                { 
                  step: "6. System Commissioning", 
                  desc: "Thorough testing, operation demonstration, maintenance guidance, and complete documentation including warranties and certificates.",
                  time: "2-3 hours"
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
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
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

      {/* Pricing Comparison */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Borehole Drilling Cost Guide for South Africa
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Transparent pricing based on depth and system requirements. All prices include drilling, pump, and basic installation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <Droplet className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-xl">Shallow Borehole</h3>
                <p className="text-muted-foreground text-sm mb-4">15-50 meters depth</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-accent mb-2">ZAR 12,000-18,000</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Urban areas, high water table</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Garden irrigation, pools</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Basic pump system</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>1-2 day installation</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-accent hover:shadow-xl transition-shadow relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-4">
                <Droplet className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-xl">Standard Borehole</h3>
                <p className="text-muted-foreground text-sm mb-4">50-100 meters depth</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-accent mb-2">ZAR 18,000-28,000</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Most common installation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Household & commercial use</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Quality submersible pump</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>2-3 day installation</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <Droplet className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-xl">Deep Borehole</h3>
                <p className="text-muted-foreground text-sm mb-4">100-150+ meters depth</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-accent mb-2">ZAR 28,000-45,000+</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Rural areas, deep water table</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>High-volume commercial use</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Specialized drilling rigs</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>3-4 day installation</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              * Prices include drilling, pump, pressure tank, and basic installation. Additional costs may apply for water testing, treatment systems, and complex electrical work.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Get Your Free Detailed Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Borehole Drilling Across South Africa
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Professional services in all major cities and surrounding areas
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Johannesburg", href: "/plumber-johannesburg" },
              { name: "Sandton", href: "/plumber-sandton" },
              { name: "Midrand", href: "/plumber-midrand" },
              { name: "Fourways", href: "/fourways" },
              { name: "Cape Town", href: "/cape-town" },
              { name: "Pretoria", href: "/plumber-pretoria" },
              { name: "Centurion", href: "/centurion" },
              { name: "Durban", href: "/durban" },
              { name: "East Rand", href: "/east-rand" },
              { name: "Randburg", href: "/randburg" },
              { name: "Germiston", href: "/germiston" },
              { name: "All Areas", href: "/contact" },
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

      <TrustSignals />

      <CTASection
        title="Ready for Water Independence? Get Your Free Borehole Assessment"
        description="Our experts will evaluate your property and provide a detailed quote with no obligation. Most assessments completed same-day. Contact us now to start your journey to water independence."
        primaryCTA={{ text: "Call: 060 348 8268", href: "tel:0603488268" }}
        secondaryCTA={{ text: "Request Free Assessment", href: "/contact" }}
      />

      {/* Enhanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://boreholepros.co.za/borehole-drilling",
            name: "Borehole Drilling Services South Africa",
            description: "Professional borehole drilling, installation and water testing services across South Africa. Licensed operators, modern equipment, 15+ years experience.",
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
                reviewCount: "450",
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
                "@type": "Country",
                name: "South Africa",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Borehole Drilling Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Shallow Borehole Drilling (15-50m)",
                    description: "Professional drilling for shallow water table areas, ideal for gardens and irrigation",
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
                    name: "Standard Borehole Drilling (50-100m)",
                    description: "Most common borehole installation for residential and commercial properties",
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
                    name: "Deep Borehole Drilling (100-150m+)",
                    description: "Specialized deep drilling for rural areas and high-volume requirements",
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
            additionalType: [
              "Borehole Installation",
              "Water Well Drilling",
              "Groundwater Development",
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
                  text: "Borehole drilling costs in South Africa range from ZAR 12,000 to 45,000+ depending on depth and requirements. Shallow boreholes (15-50m) cost ZAR 12,000-18,000, standard boreholes (50-100m) cost ZAR 18,000-28,000, and deep boreholes (100m+) cost ZAR 28,000-45,000+. Prices include drilling, pump installation, and basic setup.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to drill a borehole?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Borehole drilling typically takes 1-2 days for the actual drilling process. The complete project including site assessment, permits, drilling, pump installation, and testing usually takes 2-4 weeks from start to finish, depending on permit requirements in your area.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a permit to drill a borehole?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Permit requirements vary by municipality. Some areas require simple registration while others need full permits before drilling. We handle all permit applications and ensure compliance with local regulations. Contact us for specific requirements in your area.",
                },
              },
              {
                "@type": "Question",
                name: "How deep do you need to drill for water?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Water depth varies by region. In South Africa, water-bearing formations are typically found at 40-120 meters depth. Urban areas often have shallower water tables (40-70m) while rural areas may require deeper drilling (80-150m). We conduct site assessments to determine expected depths for your location.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a borehole last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Properly maintained boreholes can last 20-30+ years. The borehole itself is permanent, while pumps typically last 10-15 years with regular maintenance. Annual servicing ensures optimal performance and extends equipment life significantly.",
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Borehole Drilling",
                item: "https://boreholepros.co.za/borehole-drilling",
              },
            ],
          }),
        }}
      />
    </>
  )
}
