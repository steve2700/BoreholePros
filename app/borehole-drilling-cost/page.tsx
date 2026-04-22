import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2, TrendingDown, AlertCircle, Phone, Calculator, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Cost Guide South Africa | What Affects Your Price | Borehole Pros",
  description:
    "What affects borehole drilling costs in South Africa? Depth, geology, pump choice, location and more. Get a free site assessment and accurate quote. Call 060 348 8268.",
  keywords: [
    "borehole drilling cost south africa",
    "borehole drilling price south africa",
    "how much borehole drilling",
    "borehole cost factors",
    "borehole drilling cost per meter",
    "borehole installation price",
    "affordable borehole drilling",
  ],
  alternates: {
    canonical: "https://boreholepros.co.za/borehole-drilling-cost",
  },
  openGraph: {
    title: "Borehole Drilling Cost Guide | What Affects Your Price | Borehole Pros",
    description: "Understand what drives borehole drilling costs in SA. Free site assessment & accurate quote. No hidden fees.",
    images: [
      {
        url: "https://boreholepros.co.za/images/borehole-drilling-cost.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function BoreholeDrillingCostPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
              ⚡ Load Shedding Solution | Water Independence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Borehole Drilling Costs: What You Need to Know
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Every borehole project is unique. Costs depend on depth, geology, pump choice, site access and more.
              The only way to get an accurate price is a free site assessment — and that's exactly what we offer.
            </p>
            <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-lg mb-8">
              <p className="text-sm font-semibold">
                💡 <strong>Our promise:</strong> After your free site assessment, we give you a fixed, all-inclusive quote with zero hidden costs. The price we quote is the price you pay.
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
                WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Our Borehole Installations</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Every quote from Borehole Pros is all-inclusive. No line items mysteriously added after the fact.
              Here's what every installation covers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">SHALLOW BOREHOLE</div>
              <h3 className="text-2xl font-bold mb-3">30–60 Meters</h3>
              <p className="text-sm text-muted-foreground mb-6">Suitable for high water table areas. Ideal for garden irrigation and supplementary supply.</p>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">INCLUDED IN YOUR QUOTE:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Free site assessment</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Professional drilling</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Submersible pump</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Electrical installation</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Pressure system setup</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Water quality testing</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />12-month warranty</li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Installation: 2–3 days</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Urban areas, high water table regions</p>
            </Card>

            <Card className="p-8 border-2 border-accent relative hover:shadow-2xl transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                🔥 MOST COMMON IN GAUTENG
              </div>
              <div className="text-sm font-semibold text-accent mb-2 mt-4">STANDARD BOREHOLE</div>
              <h3 className="text-2xl font-bold mb-3">60–100 Meters</h3>
              <p className="text-sm text-muted-foreground mb-6">The most common depth across Johannesburg, Pretoria and surrounding suburbs. Full household supply.</p>
              <div className="bg-accent/10 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">INCLUDED IN YOUR QUOTE:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Free site assessment</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Professional drilling</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Premium submersible pump</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Pressure vessel</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Advanced electrical protection</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Comprehensive water testing</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />24-month warranty</li>
                  <li className="flex gap-2"><Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="font-semibold">Load shedding prep included!</span></li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Installation: 3–4 days</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Most Johannesburg/Pretoria properties</p>
            </Card>

            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">DEEP BOREHOLE</div>
              <h3 className="text-2xl font-bold mb-3">100–150+ Meters</h3>
              <p className="text-sm text-muted-foreground mb-6">Required in dolomitic areas and for high-volume commercial applications. Specialized rigs and pumps.</p>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">INCLUDED IN YOUR QUOTE:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Free site assessment</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Specialized deep drilling</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Industrial-grade pump</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Large pressure system</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />VSD control system</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Advanced filtration</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />36-month warranty</li>
                  <li className="flex gap-2"><Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="font-semibold">Solar backup option available</span></li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Installation: 4–5 days</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Rural areas, commercial properties, dolomitic zones</p>
            </Card>
          </div>

          {/* Load Shedding Add-on */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg border-2 border-accent/50">
            <div className="flex items-start gap-4">
              <Zap className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-3">🆕 Load Shedding Protection Add-Ons</h3>
                <p className="text-muted-foreground mb-4">
                  Keep your borehole running during power outages. We offer inverter backup, solar hybrid, and generator-ready installations — all quoted transparently after your site assessment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Basic Inverter Backup</p>
                    <p className="text-xs text-muted-foreground">4–6 hours of backup during load shedding</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border-2 border-accent">
                    <p className="font-semibold mb-1">Solar Hybrid System ☀️</p>
                    <p className="text-xs text-muted-foreground">Unlimited, load-shedding-proof water supply</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Generator-Ready Setup</p>
                    <p className="text-xs text-muted-foreground">Auto-changeover switch for generator use</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">All add-on pricing provided in your free site assessment quote.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Borehole ROI Section - no specific numbers */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why a Borehole Is a Smart Financial Investment
              </h2>
              <p className="text-muted-foreground">
                With rising municipal water tariffs and ongoing restrictions, a borehole typically pays for itself
                within a few years — and continues saving money for decades.
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-accent" />
                Key Financial Benefits
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Significantly reduced water bills:</strong> Most homeowners see dramatic reductions in monthly municipal water costs once their borehole is operational.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Property value increase:</strong> Properties with boreholes command a premium in the Gauteng market — highly attractive to buyers concerned about water security.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Load shedding protection:</strong> Pair with a solar or inverter backup for uninterrupted water supply regardless of power outages.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Drought and restriction resilience:</strong> Your own water source means restrictions never affect your supply.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Long service life:</strong> A properly installed borehole with quality components can serve your property for 20–30 years.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What Affects Borehole Drilling Cost?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            No two boreholes are the same. These are the key factors that determine your final price — all assessed during your free site visit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Drilling Depth Required",
                description: "Water table depth is the single biggest cost driver. Shallow boreholes cost significantly less than deep ones. Your free site assessment will determine the expected depth for your property.",
                impact: "High Impact"
              },
              {
                title: "Location & Site Access",
                description: "Urban areas with easy access are simpler to service than rural or difficult terrain. Distance, access roads, and site conditions all factor into logistics.",
                impact: "Medium Impact"
              },
              {
                title: "Rock Formation Type",
                description: "Soft soil drills faster and cheaper. Hard rock (granite, dolomite) requires specialized equipment and more time — common in parts of Johannesburg and Pretoria.",
                impact: "Medium Impact"
              },
              {
                title: "Pump Quality & Size",
                description: "Premium pumps (Grundfos, Pedrollo) last 20+ years. Budget pumps may cost less upfront but often need replacement within 5–8 years. We recommend quality for long-term value.",
                impact: "User Choice"
              },
              {
                title: "Electrical Infrastructure",
                description: "Distance from your distribution board, cable run length, and whether single or three-phase power is needed all affect the electrical portion of your installation.",
                impact: "Low–Medium Impact"
              },
              {
                title: "Additional System Needs",
                description: "Water treatment or filtration, solar or inverter backup, storage tanks, and distribution plumbing are optional additions that depend on your specific requirements.",
                impact: "Optional Add-ons"
              },
            ].map((factor, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-3">{factor.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{factor.description}</p>
                <div className="bg-accent/10 px-3 py-2 rounded text-xs font-semibold text-accent">
                  {factor.impact}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Costs Warning Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-12 h-12 text-orange-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">⚠️ Watch Out for Hidden Costs</h2>
                  <p className="text-muted-foreground mb-6">
                    Many drilling companies advertise attractive headline prices, then add on charges after the work begins. Here's what to ask about before signing any contract:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { item: "Site assessment fee", ours: "FREE" },
                      { item: "Water testing", ours: "INCLUDED" },
                      { item: "Pump installation", ours: "INCLUDED" },
                      { item: "Electrical connection", ours: "INCLUDED" },
                      { item: "Hard rock surcharge", ours: "QUOTED UPFRONT" },
                      { item: "Travel / transport fees", ours: "INCLUDED" },
                      { item: "Pressure system", ours: "INCLUDED" },
                      { item: "Warranty coverage", ours: "INCLUDED" },
                    ].map((cost, idx) => (
                      <div key={idx} className="bg-background p-4 rounded-lg border border-muted">
                        <div className="flex justify-between items-center gap-2">
                          <p className="font-semibold text-sm">{cost.item}</p>
                          <p className="text-xs text-green-600 font-bold">{cost.ours}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-background p-4 rounded-lg border-2 border-accent">
                    <p className="font-bold mb-2">✅ Our Guarantee:</p>
                    <p className="text-sm">
                      The price we quote after your site assessment is the price you pay. Period. No surprise charges. No hidden fees. If we encounter unexpected conditions, we discuss options with you before proceeding — never after.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              We Drill Across All Gauteng Suburbs
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Local teams with knowledge of your area's specific geology, water tables, and municipal requirements
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-accent bg-accent/5">
                    <th className="text-left py-4 px-4 font-bold">City / Region</th>
                    <th className="text-left py-4 px-4 font-bold">Typical Depth</th>
                    <th className="text-left py-4 px-4 font-bold">Timeline</th>
                    <th className="text-center py-4 px-4 font-bold">Get Quote</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { city: "Johannesburg", href: "/johannesburg", depth: "55–85m", duration: "3–4 days", popular: true },
                    { city: "Sandton", href: "/sandton", depth: "50–80m", duration: "3–4 days", popular: true },
                    { city: "Pretoria", href: "/borehole-drilling-prices-pretoria", depth: "65–95m", duration: "3–4 days", popular: true },
                    { city: "Centurion", href: "/centurion", depth: "60–90m", duration: "3–4 days", popular: false },
                    { city: "Midrand", href: "/borehole-drilling-midrand", depth: "55–85m", duration: "3–4 days", popular: false },
                    { city: "Fourways", href: "/fourways", depth: "50–75m", duration: "3–4 days", popular: false },
                    { city: "East Rand", href: "/east-rand", depth: "60–90m", duration: "3–4 days", popular: false },
                    { city: "Krugersdorp", href: "/borehole-drilling-krugersdorp", depth: "70–100m", duration: "3–4 days", popular: false },
                    { city: "Kempton Park", href: "/borehole-drilling-kempton-park", depth: "60–90m", duration: "3–4 days", popular: false },
                    { city: "Edenvale", href: "/borehole-drilling-edenvale", depth: "60–85m", duration: "3–4 days", popular: false },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-muted hover:bg-accent/5 transition">
                      <td className="py-4 px-4">
                        <Link
                          href={row.href}
                          className="text-accent hover:underline font-semibold flex items-center gap-2"
                        >
                          {row.city}
                          {row.popular && <span className="text-xs">🔥</span>}
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{row.depth}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.duration}</td>
                      <td className="py-4 px-4 text-center">
                        <Link
                          href={row.href}
                          className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full hover:opacity-90"
                        >
                          Get Quote
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6">
              * Depths are typical ranges — your exact depth is determined during the free site assessment. All quotes are fixed and all-inclusive.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Common Questions About Borehole Costs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much does it cost to drill a borehole in South Africa?",
                  a: "Borehole costs vary significantly based on depth, geology, pump selection, site access and other factors. Every property is different, which is why we conduct a free site assessment before providing any quote. Contact us and we'll give you an accurate, fixed price for your specific situation."
                },
                {
                  q: "What is the cost per meter for borehole drilling?",
                  a: "Per-meter rates differ based on rock type, depth and equipment required. However, the per-meter rate is only one component — pump, electrical, pressure system and other inclusions make the total package more meaningful than a per-meter figure alone. We'll cover all of this in your free assessment."
                },
                {
                  q: "How long does borehole drilling take?",
                  a: "Most residential boreholes are completed in 2–4 days. Day 1 covers site prep and drilling. Days 2–3 cover pump and electrical installation. Day 4 is testing and handover. We provide exact timelines during your free site assessment."
                },
                {
                  q: "Do I need permits for borehole drilling?",
                  a: "For domestic use under 10,000 litres/day, no permit is required in most areas. We handle all compliance documentation. For commercial use or larger volumes, water use licences may be needed — we guide you through this process at no extra charge."
                },
                {
                  q: "What's the most affordable borehole option?",
                  a: "Shallow boreholes in high water table areas are the most affordable. However, 'cheapest upfront' isn't always the best value — a quality pump and proper installation avoids costly repairs later. We help you find the right balance for your budget during the free site assessment."
                },
                {
                  q: "How much does it cost to maintain a borehole annually?",
                  a: "Ongoing costs are mainly pump electricity and an annual service. These are far lower than typical municipal water bills, which is why a borehole pays for itself over time. We provide full maintenance guidance at handover."
                },
                {
                  q: "Can I add solar power to my borehole?",
                  a: "Yes. We offer solar hybrid systems that power your borehole pump independently of the grid — ideal for load shedding protection. Solar add-on pricing is included in your site assessment quote."
                },
                {
                  q: "What happens if you don't find water?",
                  a: "We conduct a free hydro-geological assessment before drilling. In the rare case of a dry hole (less than 1% in our service areas), you only pay for the drilling depth attempted, not the full package. We then help identify and relocate the borehole."
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Water Independent?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of South African homeowners who stopped worrying about water bills and restrictions.
              Free site assessment. Transparent, fixed pricing. Professional installation in 3–5 days.
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
                <p className="font-semibold mb-1">Free Site Assessment</p>
                <p className="text-xs text-muted-foreground">No obligation. Expert evaluation of your property.</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">All-Inclusive Fixed Pricing</p>
                <p className="text-xs text-muted-foreground">No hidden costs. What we quote is what you pay.</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">12–36 Month Warranty</p>
                <p className="text-xs text-muted-foreground">Full coverage on all installations. Peace of mind guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
