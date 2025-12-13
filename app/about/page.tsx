import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { 
  Award, 
  Users, 
  Zap, 
  Heart, 
  Shield, 
  Clock, 
  CheckCircle2, 
  Star,
  Phone,
  MapPin,
  TrendingUp,
  Wrench,
  Target
} from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Borehole Pros | 15+ Years Experience | Licensed Plumbers & Borehole Experts SA",
  description:
    "★★★★★ Rated #1. About Borehole Pros - South Africa's most trusted borehole drilling and emergency plumbing company. 15+ years experience, 5000+ projects completed, certified professionals. Serving Johannesburg, Cape Town, Pretoria, Durban. Licensed, insured, 24/7 service.",
  keywords: [
    "about borehole pros",
    "borehole drilling company south africa",
    "licensed plumbers johannesburg",
    "professional plumbing company",
    "certified borehole drillers",
    "emergency plumber company",
    "plumbing company history",
    "trusted plumbers south africa",
    "experienced borehole specialists",
  ],
  openGraph: {
    title: "About Borehole Pros | South Africa's #1 Borehole & Plumbing Experts",
    description: "15+ years experience. 5000+ projects completed. Licensed professionals. Trusted by thousands across SA.",
    url: "https://boreholepros.co.za/about",
    siteName: "Borehole Pros",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "https://boreholepros.co.za/images/team-working.jpg",
        width: 1200,
        height: 630,
        alt: "Borehole Pros Professional Team - Expert Plumbers and Borehole Specialists",
      },
    ],
  },
  alternates: {
    canonical: "https://boreholepros.co.za/about",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm ml-2 opacity-90">4.9/5 from 1,250+ Reviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              About Borehole Pros - South Africa's Most Trusted Plumbing & Borehole Experts
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl leading-relaxed">
              Since 2009, we've been South Africa's leading provider of professional <Link href="/borehole-drilling" className="underline hover:opacity-80">borehole drilling</Link>, installation, and <Link href="/emergency-plumbing" className="underline hover:opacity-80">24/7 emergency plumbing services</Link>. Licensed, certified, and trusted by over 5,000 customers across Johannesburg, Cape Town, Pretoria, and Durban.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-accent/5 border-y border-accent/20">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-semibold">Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-semibold">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="font-semibold">5,000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Enhanced SEO Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story: From Humble Beginnings to South Africa's #1 Choice</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p className="leading-relaxed">
                  Borehole Pros was founded in 2009 with a clear mission: provide South African homes and businesses with reliable, professional water solutions and emergency plumbing services they can trust. What began as a small team of passionate <strong>licensed plumbers and borehole specialists</strong> in <Link href="/plumber-johannesburg" className="text-accent hover:underline font-semibold">Johannesburg</Link> has grown into South Africa's most trusted name in comprehensive plumbing and borehole drilling services.
                </p>

                <p className="leading-relaxed">
                  Our founder recognized the growing need for water independence across South Africa, particularly as municipalities struggled with water supply consistency. Combined with the constant demand for reliable <Link href="/emergency-plumber-johannesburg" className="text-accent hover:underline font-semibold">emergency plumbing services</Link>, we saw an opportunity to build something special—a company that truly puts customers first while delivering uncompromising quality.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">15+ Years of Excellence and Growth</h3>

                <p className="leading-relaxed">
                  Since 2009, we've completed over <strong>5,000 successful projects</strong> across South Africa's major metropolitan areas. Our expansion from Johannesburg to <Link href="/cape-town" className="text-accent hover:underline">Cape Town</Link>, <Link href="/plumber-pretoria" className="text-accent hover:underline">Pretoria</Link>, and <Link href="/durban" className="text-accent hover:underline">Durban</Link> came naturally as demand for our professional services grew through word-of-mouth referrals and satisfied customer recommendations.
                </p>

                <p className="leading-relaxed">
                  Today, we maintain local teams in all major cities including <Link href="/plumber-sandton" className="text-accent hover:underline">Sandton</Link>, <Link href="/plumber-midrand" className="text-accent hover:underline">Midrand</Link>, <Link href="/centurion" className="text-accent hover:underline">Centurion</Link>, <Link href="/fourways" className="text-accent hover:underline">Fourways</Link>, and <Link href="/east-rand" className="text-accent hover:underline">East Rand</Link>. Each team understands their region's specific plumbing challenges, water table characteristics, and local regulations, ensuring every project receives expert local knowledge combined with our company-wide standards of excellence.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Our Professional Team and Certifications</h3>

                <p className="leading-relaxed">
                  Every Borehole Pros technician holds proper licensing and certifications required for plumbing and borehole drilling work in South Africa. Our team includes licensed plumbers certified to SANS 10252 standards, certified borehole drilling operators, electrical technicians for pump installations, water quality specialists, and emergency response coordinators ensuring 24/7 availability.
                </p>

                <p className="leading-relaxed">
                  We invest heavily in ongoing training, keeping our team updated on the latest plumbing technologies, leak detection equipment, and borehole drilling techniques. This commitment to professional development ensures our customers receive service utilizing the most advanced, efficient methods available in the industry.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Comprehensive Services Across All Plumbing Needs</h3>

                <p className="leading-relaxed">
                  While we began focused primarily on borehole drilling, customer needs guided our expansion into comprehensive plumbing services. Today we handle everything from <Link href="/leak-detection" className="text-accent hover:underline">advanced leak detection</Link> and <Link href="/blocked-drain-johannesburg" className="text-accent hover:underline">drain cleaning</Link> to <Link href="/geyser-installation-johannesburg" className="text-accent hover:underline">geyser installation</Link> and complete pipe replacements. This full-service approach means our customers have one trusted partner for all their water and plumbing needs—eliminating the hassle of coordinating multiple contractors.
                </p>

                <p className="leading-relaxed">
                  Our <Link href="/emergency-plumbing" className="text-accent hover:underline font-semibold">24/7 emergency plumbing service</Link> responds to burst pipes, major leaks, blocked sewers, and geyser failures across all service areas with typical response times of 1-3 hours. This around-the-clock commitment reflects our understanding that plumbing emergencies don't respect business hours—and neither do we.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-accent/5 border-accent">
                <h3 className="font-bold mb-4 text-lg">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">2009</div>
                    <p className="text-sm text-muted-foreground">Founded & Established</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">5,000+</div>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">15+</div>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">4.9/5</div>
                    <p className="text-sm text-muted-foreground">Customer Rating</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <p className="text-sm text-muted-foreground">Emergency Service</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-accent">
                <h3 className="font-bold mb-4">Contact Us Today</h3>
                <a
                  href="tel:0603488268"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors mb-3"
                >
                  <Phone className="w-5 h-5" />
                  060 348 8268
                </a>
                <p className="text-xs text-center text-muted-foreground mb-3">Available 24/7 for emergencies</p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full border border-accent font-bold py-3 rounded-lg hover:bg-accent/5 transition-colors text-accent"
                >
                  Request Free Quote
                </Link>
              </Card>

              <Card className="p-6 bg-muted">
                <h3 className="font-bold mb-3 text-sm">Service Areas</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <Link href="/johannesburg" className="hover:underline">Johannesburg</Link>
                  </li>
                  <li className="flex gap-2">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <Link href="/plumber-sandton" className="hover:underline">Sandton</Link>
                  </li>
                  <li className="flex gap-2">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <Link href="/cape-town" className="hover:underline">Cape Town</Link>
                  </li>
                  <li className="flex gap-2">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <Link href="/pretoria" className="hover:underline">Pretoria</Link>
                  </li>
                  <li className="flex gap-2">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <Link href="/durban" className="hover:underline">Durban</Link>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Track Record Speaks for Itself</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Numbers that demonstrate our commitment to excellence and customer satisfaction
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5,000+</div>
              <p className="font-semibold mb-1">Projects Completed</p>
              <p className="text-xs text-muted-foreground">Since 2009</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <p className="font-semibold mb-1">Years Experience</p>
              <p className="text-xs text-muted-foreground">Industry Leaders</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4.9/5</div>
              <p className="font-semibold mb-1">Customer Rating</p>
              <p className="text-xs text-muted-foreground">1,250+ Reviews</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
              <p className="font-semibold mb-1">Emergency Service</p>
              <p className="text-xs text-muted-foreground">Always Available</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Core Values Drive Everything We Do</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            These principles guide every project, every customer interaction, and every decision we make
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Professional Excellence",
                description: "Licensed, certified professionals with extensive industry experience and ongoing training in latest techniques",
              },
              {
                icon: Heart,
                title: "Trust & Integrity",
                description: "Honest pricing, transparent communication, and ethical business practices in every interaction",
              },
              {
                icon: Zap,
                title: "Speed & Efficiency",
                description: "Fast emergency response times (1-3 hours) and efficient service delivery minimizing disruption",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Your satisfaction is our top priority. We don't succeed unless you're completely happy",
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Premium materials, professional workmanship, and comprehensive 12-month warranties on all work",
              },
              {
                icon: Target,
                title: "Reliability",
                description: "Consistent, dependable service you can count on. We show up when promised and deliver results",
              },
              {
                icon: Wrench,
                title: "Technical Expertise",
                description: "Advanced equipment, modern techniques, and deep knowledge across all plumbing and borehole services",
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                description: "Always learning, always advancing. We invest in training and technology to serve you better",
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-3 text-lg text-center">{value.title}</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why Thousands Choose Borehole Pros</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            What sets us apart from other plumbing and borehole companies in South Africa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "True 24/7 Emergency Service",
                description: "Real plumbers available around the clock, not answering services. Typical 1-3 hour response across all major cities.",
              },
              {
                title: "Licensed & Certified Professionals",
                description: "All technicians hold proper licenses and certifications. Work meets SANS standards with full compliance.",
              },
              {
                title: "5,000+ Successful Projects",
                description: "Proven track record since 2009 with thousands of satisfied residential and commercial customers.",
              },
              {
                title: "Transparent, Fixed Pricing",
                description: "Detailed quotes before work begins. No hidden costs or surprise charges. Emergency fees credited to repairs.",
              },
              {
                title: "Comprehensive 12-Month Warranty",
                description: "All work covered by warranty protecting workmanship and materials. We stand behind every job completely.",
              },
              {
                title: "Available Across Major Cities",
                description: "Local teams in Johannesburg, Sandton, Midrand, Cape Town, Pretoria, Centurion, Durban with regional expertise.",
              },
              {
                title: "Modern Equipment & Techniques",
                description: "Latest leak detection technology, high-pressure jetting, thermal imaging, and advanced drilling equipment.",
              },
              {
                title: "Fully Insured Operations",
                description: "Comprehensive insurance protecting your property and our team. Complete peace of mind on every job.",
              },
              {
                title: "Complete Service Range",
                description: "Single trusted partner for boreholes, emergency plumbing, leak detection, drain cleaning, geyser services, and more.",
              },
            ].map((reason, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Proudly Serving South Africa's Major Cities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Local teams with deep regional knowledge and expertise in each area we serve
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/plumber-johannesburg" className="hover:text-accent transition-colors">
                  Johannesburg Region
                </Link>
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <Link href="/plumber-sandton" className="hover:text-accent hover:underline">Sandton</Link></li>
                <li>• <Link href="/plumber-midrand" className="hover:text-accent hover:underline">Midrand</Link></li>
                <li>• <Link href="/fourways" className="hover:text-accent hover:underline">Fourways</Link></li>
                <li>• <Link href="/east-rand" className="hover:text-accent hover:underline">East Rand</Link></li>
                <li>• <Link href="/germiston" className="hover:text-accent hover:underline">Germiston</Link></li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/cape-town" className="hover:text-accent transition-colors">
                  Cape Town Region
                </Link>
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Northern Suburbs</li>
                <li>• Southern Suburbs</li>
                <li>• Atlantic Seaboard</li>
                <li>• City Bowl</li>
                <li>• Cape Flats</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/plumber-pretoria" className="hover:text-accent transition-colors">
                  Pretoria Region
                </Link>
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <Link href="/centurion" className="hover:text-accent hover:underline">Centurion</Link></li>
                <li>• Tshwane Central</li>
                <li>• Pretoria East</li>
                <li>• Pretoria North</li>
                <li>• Pretoria West</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-3">
                <Link href="/durban" className="hover:text-accent transition-colors">
                  Durban Region
                </Link>
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Umhlanga</li>
                <li>• Westville</li>
                <li>• Durban North</li>
                <li>• Durban Central</li>
                <li>• South Coast</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Real reviews from real customers across South Africa
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "Been using Borehole Pros for 3 years now. From the initial borehole installation to regular maintenance and even emergency plumbing - always professional, always reliable. Wouldn't use anyone else."
              </p>
              <p className="font-semibold text-sm">Michael T. - Johannesburg</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "What impressed me most was their honesty. They could have replaced my entire geyser but showed me it just needed a thermostat. Saved me thousands. That's integrity. Highly recommend."
              </p>
              <p className="font-semibold text-sm">Patricia M. - Cape Town</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "Emergency burst pipe on Sunday night. They arrived in under 2 hours, fixed everything professionally, and charged exactly what they quoted. No weekend surcharges or hidden fees. Exceptional service."
              </p>
              <p className="font-semibold text-sm">David K. - Pretoria</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Experience the Borehole Pros Difference Today
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 5,000+ satisfied customers who trust us for their borehole drilling, installation, and emergency plumbing needs. Contact us for a free consultation and discover why we're South Africa's #1 choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:0603488268"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-foreground/10 border border-primary-foreground hover:bg-primary-foreground/20 font-bold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 060 348 8268
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://boreholepros.co.za/about",
            url: "https://boreholepros.co.za/about",
            name: "About Borehole Pros - South Africa's Leading Plumbing & Borehole Experts",
            description: "Learn about Borehole Pros - 15+ years experience, 5000+ projects completed, licensed professionals serving Johannesburg, Cape Town, Pretoria, and Durban with 24/7 emergency service.",
            mainEntity: {
              "@type": "Organization",
              "@id": "https://boreholepros.co.za/#organization",
              name: "Borehole Pros",
              url: "https://boreholepros.co.za",
              logo: {
                "@type": "ImageObject",
                url: "https://boreholepros.co.za/logo.png",
              },
              image: {
                "@type": "ImageObject",
                url: "https://boreholepros.co.za/images/team-working.jpg",
                width: 1200,
                height: 630,
              },
              description: "South Africa's most trusted borehole drilling and emergency plumbing company since 2009. Licensed, certified professionals providing 24/7 service across major cities.",
              foundingDate: "2009",
              telephone: "+27603488268",
              email: "info@boreholepros.co.za",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Johannesburg",
                  "@id": "https://boreholepros.co.za/plumber-johannesburg",
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
                  name: "Centurion",
                  "@id": "https://boreholepros.co.za/centurion",
                },
                {
                  "@type": "City",
                  name: "Durban",
                  "@id": "https://boreholepros.co.za/durban",
                },
              ],
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "50+",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1250",
                bestRating: "5",
                worstRating: "1",
              },
              slogan: "South Africa's Most Trusted Borehole & Plumbing Experts",
              knowsAbout: [
                "Borehole Drilling",
                "Emergency Plumbing",
                "Leak Detection",
                "Drain Cleaning",
                "Geyser Installation",
                "Pipe Repairs",
                "Water Solutions",
              ],
              award: [
                "4.9/5 Customer Rating",
                "5000+ Projects Completed",
                "15+ Years Excellence",
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
                name: "About",
                item: "https://boreholepros.co.za/about",
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
            "@type": "ProfessionalService",
            name: "Borehole Pros",
            description: "Professional borehole drilling and 24/7 emergency plumbing services",
            priceRange: "ZAR",
            telephone: "+27603488268",
            url: "https://boreholepros.co.za",
            areaServed: {
              "@type": "Country",
              name: "South Africa",
            },
            serviceType: [
              "Borehole Drilling",
              "Emergency Plumbing",
              "Leak Detection",
              "Drain Cleaning",
              "Geyser Installation",
              "Pipe Repairs",
            ],
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "license",
                name: "Licensed Plumbers - SANS 10252",
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "certification",
                name: "Certified Borehole Drilling Operators",
              },
            ],
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
          }),
        }}
      />
    </main>
  )
}
