import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Star,
  Clock,
  Award,
  Droplet,
  Wrench,
  Shield,
  Users
} from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Fourways | Expert Installation & Repair | Borehole Pros",
  description:
    "★★★★★ Professional borehole drilling in Fourways, Johannesburg. 15+ years experience. Same-day quotes, expert installation, water testing, 24/7 maintenance. Licensed & insured. Serving Dainfern, Broadacres, Bryanston. Free assessment. Call 060 348 8268.",
  keywords: [
    "borehole drilling fourways",
    "fourways borehole installation",
    "borehole services fourways",
    "water borehole fourways",
    "borehole maintenance fourways",
    "borehole repair fourways",
    "dainfern borehole drilling",
    "broadacres borehole",
    "bryanston borehole services",
    "fourways plumber",
  ],
  openGraph: {
    title: "Borehole Drilling Fourways | Professional Installation | Borehole Pros",
    description: "Expert borehole drilling in Fourways. 15+ years experience. Licensed professionals. Free quotes. Call 060 348 8268",
    url: "https://boreholepros.co.za/fourways",
    siteName: "Borehole Pros",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://boreholepros.co.za/fourways",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FourwaysPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-muted-foreground">Serving Fourways & Surrounds</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Borehole Drilling Services in Fourways, Johannesburg
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Expert borehole drilling, installation, and maintenance services for Fourways residents and businesses. Serving Dainfern, Broadacres, Bryanston, Cedar Lakes, and all surrounding areas. Licensed professionals with 15+ years experience. Free site assessments and same-day quotes.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-sm font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold">500+ Fourways Projects</span>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="tel:0603488268" 
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call: 060 348 8268
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/5 transition-colors"
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-muted border-y">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-semibold">Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-semibold">12-Month Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-semibold">Same-Day Quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-semibold">15+ Years Experience</span>
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
                Borehole Drilling Experts Serving Fourways and Surrounding Areas
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                <p className="leading-relaxed">
                  Fourways has become one of Johannesburg's premier residential and commercial hubs, with growing water independence needs. Borehole Pros provides comprehensive <strong>borehole drilling services in Fourways</strong>, serving residential estates, commercial properties, and businesses across Dainfern, Broadacres, Bryanston, Cedar Lakes, Lonehill, and surrounding suburbs. Since 2009, we've completed over 500 successful borehole installations in the Fourways area, establishing ourselves as the region's most trusted borehole specialists.
                </p>

                <p className="leading-relaxed">
                  Our Fourways team understands the local geology, water table characteristics, and specific regulations affecting borehole installations in this area. The Fourways region generally offers excellent borehole drilling conditions with reliable water-bearing formations at depths of 40-80 meters. We handle complete projects from initial site assessment and geological surveys through drilling, pump installation, pressure system setup, and ongoing maintenance.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Complete Borehole Services in Fourways</h3>

                <p className="leading-relaxed">
                  We provide end-to-end borehole solutions for Fourways properties, including professional drilling using modern equipment, submersible pump selection and installation, pressure tank and control systems, electrical connections and automation, water quality testing and treatment, compliance certification, and comprehensive maintenance plans. Our local Fourways team responds quickly to service calls, typically providing site assessments within 24 hours of initial contact.
                </p>

                <p className="leading-relaxed">
                  <strong>Borehole drilling costs in Fourways</strong> typically range from ZAR 18,000 to 28,000 for residential properties, depending on depth, pump requirements, and system complexity. This includes drilling, pump installation, pressure system, electrical setup, and testing. We provide transparent, fixed-price quotes after site assessment, with no hidden costs or surprise charges.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Serving Key Fourways Suburbs and Areas</h3>

                <p className="leading-relaxed">
                  Our Fourways service area covers all major residential and commercial zones including:
                </p>

                <ul className="space-y-2 my-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Dainfern Golf Estate & Valley:</strong> Specialized experience with estate regulations and requirements</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Broadacres:</strong> Residential and smallholding borehole installations</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Bryanston:</strong> Estate and standalone property borehole services</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Cedar Lakes & Cedar Creek:</strong> Estate compliance and professional installations</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Lonehill:</strong> Residential and commercial borehole drilling</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Fourways Gardens:</strong> Compact property borehole solutions</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Paulshof:</strong> Residential and business water independence</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Why Fourways Residents Choose Borehole Pros</h3>

                <p className="leading-relaxed">
                  Our reputation in Fourways stems from consistent quality, transparent pricing, and exceptional customer service. Unlike some providers, we're upfront about all costs, provide realistic expectations about yields and depths, and stand behind our work with comprehensive warranties. Many of our Fourways clients come through referrals from satisfied neighbors—the strongest testament to quality service.
                </p>

                <p className="leading-relaxed">
                  We understand Fourways estate requirements and regulations, working efficiently with body corporates and homeowner associations. Our installations meet all compliance standards, and we provide complete documentation for estate approval processes. For commercial properties in Fourways business districts, we handle larger capacity systems designed for sustained high-volume usage.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Borehole Maintenance Services</h3>

                <p className="leading-relaxed">
                  Beyond installation, we provide ongoing <strong>borehole maintenance services in Fourways</strong> ensuring long-term reliability. Annual maintenance includes pump inspection and servicing, water quality testing, pressure system checks, electrical connection testing, and flow rate assessment. Preventive maintenance typically costs ZAR 800-1,200 annually and prevents expensive emergency repairs while extending system life by years.
                </p>

                <p className="leading-relaxed">
                  We also offer emergency repair services for existing boreholes experiencing problems like reduced flow, pump failures, electrical issues, or water quality concerns. Our Fourways team responds quickly to service calls, typically arriving within 4-6 hours for urgent issues.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-accent/5 border-accent sticky top-24">
                <h3 className="font-bold mb-4 text-lg">Fourways Borehole Pricing</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-accent">Complete Installation</p>
                    <p className="text-muted-foreground">ZAR 18,000 - 28,000</p>
                    <p className="text-xs text-muted-foreground mt-1">Includes drilling, pump, system</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Site Assessment</p>
                    <p className="text-muted-foreground">FREE</p>
                    <p className="text-xs text-muted-foreground mt-1">No obligation quote</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Annual Maintenance</p>
                    <p className="text-muted-foreground">ZAR 800 - 1,200</p>
                    <p className="text-xs text-muted-foreground mt-1">Preventive care package</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Water Testing</p>
                    <p className="text-muted-foreground">ZAR 1,200 - 1,800</p>
                    <p className="text-xs text-muted-foreground mt-1">Full lab analysis</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold mb-3 text-sm">Quick Contact</h4>
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
                    Request Free Quote
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Complete Borehole Solutions for Fourways
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            From initial drilling to ongoing maintenance, we handle every aspect of your borehole system
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Droplet className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Drilling & Installation</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Complete borehole drilling service from site assessment to final commissioning. Modern equipment, experienced operators, and quality materials. Typical installations complete in 2-3 days. ZAR 18,000-28,000 for standard residential systems in Fourways.
              </p>
              <Link href="/borehole-drilling" className="text-accent hover:underline text-sm font-semibold inline-flex items-center gap-1">
                Learn more about drilling →
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Wrench className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Maintenance & Repairs</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Professional maintenance keeping your borehole running efficiently for 20+ years. Annual servicing, pump repairs, pressure system checks, and emergency callouts. Preventive care prevents expensive failures and extends equipment life.
              </p>
              <Link href="/borehole-maintenance" className="text-accent hover:underline text-sm font-semibold inline-flex items-center gap-1">
                View maintenance services →
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Water Testing & Treatment</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Comprehensive water quality testing ensuring safety and compliance. Professional lab analysis testing for bacteria, minerals, pH, and contaminants. Treatment solutions for any water quality issues identified.
              </p>
              <Link href="/contact" className="text-accent hover:underline text-sm font-semibold inline-flex items-center gap-1">
                Testing information →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why Fourways Residents Trust Borehole Pros
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Over 500 successful borehole installations in the Fourways area since 2009
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">15+ Years Local Experience</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Extensive experience with Fourways geology, water tables, and estate requirements. We know the area intimately.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Fast Response & Quotes</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Same-day site assessments available. Detailed quotes provided within 24 hours. Quick project turnaround.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">12-Month Warranty</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive warranty on all installations covering workmanship and equipment. We stand behind our work.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Licensed & Certified</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All work performed by licensed professionals. Full compliance with regulations and estate requirements.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">500+ Fourways Projects</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Proven track record throughout Dainfern, Broadacres, Bryanston, and all Fourways suburbs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">24/7 Emergency Service</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Emergency repairs and maintenance available around the clock. We're here when you need us.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-8 text-center">
            We Also Serve Nearby Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/plumber-sandton" className="text-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-semibold text-sm">Sandton</p>
            </Link>
            <Link href="/plumber-midrand" className="text-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-semibold text-sm">Midrand</p>
            </Link>
            <Link href="/plumber-johannesburg" className="text-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-semibold text-sm">Johannesburg</p>
            </Link>
            <Link href="/centurion" className="text-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-semibold text-sm">Centurion</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Water Independence in Fourways?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get your free borehole assessment today. No obligation. Our Fourways team will evaluate your property and provide a detailed quote. Call now or request a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0603488268"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: 060 348 8268
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 border border-primary-foreground hover:bg-primary-foreground/20 font-bold rounded-lg transition-colors"
            >
              Request Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://boreholepros.co.za/fourways",
            name: "Borehole Pros Fourways",
            description: "Professional borehole drilling, installation and maintenance services in Fourways, Johannesburg",
            url: "https://boreholepros.co.za/fourways",
            telephone: "+27603488268",
            email: "info@boreholepros.co.za",
            priceRange: "ZAR",
            image: "https://boreholepros.co.za/images/borehole-drilling.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Fourways",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-26.0134",
              longitude: "28.0062",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Fourways",
              },
              {
                "@type": "Neighborhood",
                name: "Dainfern",
              },
              {
                "@type": "Neighborhood",
                name: "Broadacres",
              },
              {
                "@type": "Neighborhood",
                name: "Bryanston",
              },
              {
                "@type": "Neighborhood",
                name: "Lonehill",
              },
            ],
            serviceType: [
              "Borehole Drilling",
              "Borehole Installation",
              "Borehole Maintenance",
              "Water Testing",
              "Pump Installation",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "125",
            },
            openingHoursSpecification: {
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Borehole Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Borehole Drilling & Installation",
                    description: "Complete borehole drilling and installation service",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: "18000",
                    maxPrice: "28000",
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
                name: "Johannesburg",
                item: "https://boreholepros.co.za/plumber-johannesburg",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Fourways",
                item: "https://boreholepros.co.za/fourways",
              },
            ],
          }),
        }}
      />
    </>
  )
}
