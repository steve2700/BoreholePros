import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2, MapPin, Clock, Phone, Star, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Near Me 2026 | Find Local Borehole Drilling Services in South Africa",
  description:
    "Find professional borehole drilling near you. Same-day quotes, 3-5 day installation. Serving Johannesburg, Pretoria, Cape Town & all major SA cities. Free site assessment!",
  keywords: [
    "borehole near me",
    "borehole drilling near me",
    "borehole services near me",
    "local borehole drilling",
    "borehole companies near me",
    "borehole installation near me",
    "find borehole drilling",
  ],
  alternates: {
    canonical: "https://boreholepros.co.za/borehole-near-me",
  },
  openGraph: {
    title: "Borehole Near Me | Local Professional Drilling Services 2026",
    description: "Find trusted borehole drilling near you. Same-day quotes, expert installation. 1,500+ satisfied customers across South Africa.",
    images: [
      {
        url: "https://boreholepros.co.za/images/borehole-near-me.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function BoreholeNearMePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
              📍 LOCAL SERVICE | SAME-DAY QUOTES
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Borehole Drilling Near You
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Looking for "borehole near me"? You've found us! We're your local borehole drilling experts 
              serving Johannesburg, Pretoria, Cape Town, and surrounding areas. Get a free site assessment 
              today and water independence in just 3-5 days.
            </p>
            <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-lg mb-8">
              <p className="text-sm font-semibold">
                💡 <strong>Why Choose Local?</strong> Faster response times, better pricing, ongoing support. 
                We're not a call center - we're your neighbors, and we'll be here when you need us.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a
                href="tel:0603488268"
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call 060 348 8268 Now
              </a>
              <Link
                href="/contact"
                className="border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition"
              >
                Get Free Site Assessment
              </Link>
              <a
                href="https://wa.me/27603488268"
                className="bg-green-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-700 transition"
              >
                WhatsApp Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve - Find Us Near You</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Professional borehole drilling services across South Africa's major cities and surrounding areas. 
              Same-day quotes, local teams, and ongoing support in your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Gauteng Region */}
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">GAUTENG REGION</div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-accent" />
                Johannesburg & Pretoria
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">🔥 Most Active Area</p>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">AREAS COVERED:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Sandton & Fourways
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Pretoria & Centurion
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Midrand & Kyalami
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Roodepoort & Krugersdorp
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    East Rand (Benoni, Boksburg)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    West Rand & Soweto
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Response Time: Same day</p>
              <p className="text-xs text-muted-foreground">✅ Local Teams: 4 crews available</p>
            </Card>

            {/* Western Cape */}
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">WESTERN CAPE</div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-accent" />
                Cape Town Region
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">High Demand Area</p>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">AREAS COVERED:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Cape Town CBD & Suburbs
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Northern Suburbs
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Southern Suburbs
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Atlantic Seaboard
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Stellenbosch & Paarl
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Somerset West & Strand
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Response Time: Within 24 hours</p>
              <p className="text-xs text-muted-foreground">✅ Local Teams: 2 crews available</p>
            </Card>

            {/* KZN & Other Regions */}
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">KZN & OTHER REGIONS</div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-accent" />
                Durban & More
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">Expanding Coverage</p>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">AREAS COVERED:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Durban & Pietermaritzburg
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    North Coast (Ballito, Umhlanga)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    South Coast (Scottburgh, Margate)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Bloemfontein & Free State
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Port Elizabeth & East London
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Nelspruit & Mpumalanga
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Response Time: 24-48 hours</p>
              <p className="text-xs text-muted-foreground">✅ Local Teams: On-demand service</p>
            </Card>
          </div>

          {/* Coverage Map Callout */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg border-2 border-accent/50">
            <div className="flex items-start gap-4">
              <Search className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-3">🗺️ Don't See Your Area Listed?</h3>
                <p className="text-muted-foreground mb-4">
                  We serve many additional suburbs and surrounding areas. Our service radius extends 150km from 
                  major city centers. Contact us to confirm coverage in your specific location - we'll let you 
                  know immediately if we can help!
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="tel:0603488268"
                    className="text-sm bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90"
                  >
                    Check Your Area
                  </a>
                  <Link
                    href="/contact"
                    className="text-sm border-2 border-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition"
                  >
                    Submit Location
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose a Local Borehole Company?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              When you search "borehole near me," you're making a smart choice. Local companies offer benefits 
              that national franchises simply can't match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12 text-accent" />,
                title: "Faster Response Times",
                description: "Same-day quotes, next-day site visits. Our teams are in your neighborhood, not hours away. Emergency support when you need it most."
              },
              {
                icon: <Star className="w-12 h-12 text-accent" />,
                title: "Local Expertise",
                description: "We know your area's geology, water table depths, and soil conditions. This means accurate quotes and successful drilling every time."
              },
              {
                icon: <Phone className="w-12 h-12 text-accent" />,
                title: "Ongoing Support",
                description: "We're here for the long term. Need maintenance in 2 years? We'll be here. Try calling a national company in 5 years - good luck!"
              },
              {
                icon: <CheckCircle2 className="w-12 h-12 text-accent" />,
                title: "Better Pricing",
                description: "No franchise fees. No national overhead. We pass savings directly to you. R3,000-R8,000 less than big chains on average."
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Timeline Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              What to Expect: From Quote to Water Independence
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Transparent process, professional service, guaranteed results. Here's exactly what happens when 
              you choose us as your local borehole company.
            </p>

            <div className="space-y-8">
              {[
                {
                  day: "Day 1",
                  title: "Free Site Assessment",
                  description: "Our local technician visits your property (usually same day or next day). We assess geology, access, and provide an accurate written quote. No obligation. Takes 30-45 minutes.",
                  time: "30-45 minutes",
                  included: ["Geological survey", "Water table estimation", "Written quote", "Site marking"]
                },
                {
                  day: "Day 2-3",
                  title: "Professional Drilling",
                  description: "Once you approve, we schedule drilling (typically within 3-5 days). Our experienced crew arrives with all equipment and completes drilling to the required depth.",
                  time: "1-2 days",
                  included: ["Equipment setup", "Professional drilling", "Depth testing", "Water strike confirmation"]
                },
                {
                  day: "Day 4",
                  title: "Pump & System Installation",
                  description: "We install your submersible pump, connect electrical systems, set up pressure tanks, and configure the entire water delivery system to your home.",
                  time: "4-6 hours",
                  included: ["Pump installation", "Electrical connection", "Pressure system", "Piping & valves"]
                },
                {
                  day: "Day 5",
                  title: "Testing & Handover",
                  description: "Final water quality tests, system calibration, and a complete walkthrough. We teach you everything about your new system and provide maintenance guidelines.",
                  time: "2-3 hours",
                  included: ["Water quality test", "System testing", "Owner training", "Documentation & warranty"]
                },
              ].map((step, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-accent">{step.day}</span>
                        <span className="text-xs text-muted-foreground">• {step.time}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.included.map((item, i) => (
                          <span key={i} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-accent/5 border-l-4 border-accent p-6 rounded-lg">
              <h4 className="font-bold mb-2">⚡ Need it Faster?</h4>
              <p className="text-sm text-muted-foreground">
                We offer expedited service for urgent situations (extended load shedding, water restrictions, 
                etc.). Most installations can be completed in 2-3 days with our fast-track option. Call us to 
                discuss your timeline needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews by Area */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Your Neighbors Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "Sandton, Johannesburg",
                rating: 5,
                review: "Searched 'borehole near me' and found these guys. Best decision ever! They completed my installation in 3 days. Now I don't stress about load shedding or water bills. Highly recommend to anyone in Sandton!",
                service: "Standard Package"
              },
              {
                name: "Johan V.",
                location: "Centurion, Pretoria",
                rating: 5,
                review: "Professional from start to finish. They knew exactly what depth to drill for our area (75m). Water quality is excellent. Saved R18,000 in the first year alone. Worth every cent!",
                service: "Premium Package"
              },
              {
                name: "Thabo K.",
                location: "Roodepoort, West Rand",
                rating: 5,
                review: "After getting quotes from 3 companies, these local guys were the best value and most knowledgeable. They explained everything clearly and delivered exactly as promised. My water bill went from R2,500 to R400!",
                service: "Basic Package"
              },
            ].map((review, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{review.review}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {review.location}
                  </p>
                  <p className="text-xs text-accent mt-2">{review.service}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">⭐ 4.9/5 Average Rating from 1,500+ Local Customers</p>
            <Link
              href="/reviews"
              className="text-accent hover:underline font-semibold"
            >
              Read More Reviews from Your Area →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing by Region Table */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Local Pricing by Region
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Transparent, competitive pricing for your area. All prices include complete installation, 
              pump, electrical work, testing, and warranty.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-accent bg-accent/5">
                    <th className="text-left py-4 px-4 font-bold">Your Area</th>
                    <th className="text-left py-4 px-4 font-bold">Typical Depth</th>
                    <th className="text-right py-4 px-4 font-bold">Price Range</th>
                    <th className="text-left py-4 px-4 font-bold">Timeline</th>
                    <th className="text-center py-4 px-4 font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "Sandton", depth: "50-80m", cost: "R22,000-R30,000", duration: "3-4 days" },
                    { area: "Pretoria", depth: "65-95m", cost: "R22,000-R32,000", duration: "3-4 days" },
                    { area: "Fourways", depth: "50-75m", cost: "R21,000-R29,000", duration: "3-4 days" },
                    { area: "Centurion", depth: "60-90m", cost: "R21,000-R30,000", duration: "3-4 days" },
                    { area: "Roodepoort", depth: "60-85m", cost: "R20,000-R28,000", duration: "3-4 days" },
                    { area: "Midrand", depth: "55-85m", cost: "R20,000-R29,000", duration: "3-4 days" },
                    { area: "Johannesburg CBD", depth: "55-85m", cost: "R20,000-R28,000", duration: "3-4 days" },
                    { area: "East Rand", depth: "60-90m", cost: "R20,000-R28,000", duration: "3-4 days" },
                    { area: "Cape Town", depth: "45-75m", cost: "R18,000-R26,000", duration: "2-3 days" },
                    { area: "Durban", depth: "35-65m", cost: "R17,000-R24,000", duration: "2-3 days" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-muted hover:bg-accent/5 transition">
                      <td className="py-4 px-4">
                        <div className="font-semibold flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          {row.area}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{row.depth}</td>
                      <td className="py-4 px-4 text-right font-bold">{row.cost}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.duration}</td>
                      <td className="py-4 px-4 text-center">
                        <a
                          href="tel:0603488268"
                          className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full hover:opacity-90"
                        >
                          Get Quote
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              * Updated February 2026. Final pricing depends on exact site conditions and depth required. 
              Free site assessment confirms accurate pricing before any work begins.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Common Questions About Local Borehole Services
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I find a reliable borehole company near me?",
                  a: "Look for companies with local offices, verifiable reviews from your area, proper licensing, and transparent pricing. We've been serving Gauteng and surrounding areas for 15+ years with over 1,500 successful installations. Check our area-specific reviews and ask for references from your neighborhood."
                },
                {
                  q: "How quickly can you start my borehole project?",
                  a: "Most projects start within 3-5 days of quote approval. For urgent situations (severe load shedding, water restrictions), we offer expedited 24-48 hour service. Our local teams and equipment are always ready - we don't need to transport crews from other provinces."
                },
                {
                  q: "Do you service my suburb/area?",
                  a: "We cover all major cities and extend 150km from city centers. Our primary service areas are Johannesburg, Pretoria, Sandton, Centurion, Midrand, Fourways, Roodepoort, East Rand, Cape Town, and Durban. Call us with your specific location - we'll confirm coverage immediately."
                },
                {
                  q: "What makes you different from other local borehole companies?",
                  a: "15+ years experience in your area means we know local geology intimately. All-inclusive pricing with no hidden fees. Premium equipment (Grundfos pumps). 12-36 month warranties. And most importantly - we'll be here when you need maintenance or support years from now."
                },
                {
                  q: "Can I get same-day service for emergencies?",
                  a: "For quote requests and site assessments, yes - we typically respond same day. For drilling, we can usually mobilize within 24-48 hours for genuine emergencies (complete water supply failure, etc.). Our local presence means fast response times."
                },
                {
                  q: "How much does a borehole cost in my area?",
                  a: "Prices vary by depth and location. Johannesburg/Pretoria average R22,000-R28,000. Cape Town R18,000-R26,000. Durban R17,000-R24,000. All prices include complete installation. We provide exact quotes after a free site assessment - no guesswork."
                },
                {
                  q: "Do you offer ongoing maintenance and support?",
                  a: "Yes! This is where being local really matters. We offer annual maintenance contracts (from R1,500/year), emergency callouts, pump repairs, and system upgrades. We'll be here in 5, 10, 15 years - try finding a national franchise then!"
                },
                {
                  q: "What areas have the best water tables?",
                  a: "In Gauteng: East Rand, parts of Sandton, and northern Pretoria typically have excellent water at 40-70m. West Rand can be deeper (80-100m). We provide geological surveys during site assessment to confirm water table depth at your specific property."
                },
              ].map((faq, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/10 to-transparent">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Find Your Local Borehole Experts Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop searching "borehole near me" - you've found us! Professional installation in 3-5 days. 
              Free site assessment. Local teams. Transparent pricing. No hidden fees. Call now for same-day quote.
            </p>
            <div className="flex gap-4 flex-wrap justify-center mb-8">
              <a
                href="tel:0603488268"
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call 060 348 8268
              </a>
              <Link
                href="/contact"
                className="border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/27603488268"
                className="bg-green-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-700 transition"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">Local Expertise</p>
                <p className="text-xs text-muted-foreground">15+ years serving your community</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">Same-Day Response</p>
                <p className="text-xs text-muted-foreground">Our teams are in your neighborhood</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">Ongoing Support</p>
                <p className="text-xs text-muted-foreground">We'll be here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
