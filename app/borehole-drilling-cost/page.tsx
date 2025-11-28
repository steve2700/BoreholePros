import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2, TrendingDown, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Cost Guide South Africa 2024 | Borehole Pros",
  description:
    "Complete borehole drilling cost breakdown. Factors affecting price, depth guide, ROI calculator. Average costs ZAR 8,000-30,000+. Free quotes in all cities.",
  keywords: [
    "borehole drilling cost",
    "borehole drilling price",
    "how much borehole drilling",
    "borehole cost south africa",
    "borehole drilling cost per meter",
    "cheap borehole drilling",
  ],
  alternates: {
    canonical: "https://boreholepros.co.za/borehole-drilling-cost",
  },
}

export default function BoreholeDrillingCostPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Borehole Drilling Cost Guide 2024</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Complete breakdown of borehole drilling prices in South Africa, factors affecting cost, and how to get the
              best value for your investment.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="tel:0603488268"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Call for Free Quote
              </a>
              <Link
                href="/contact"
                className="border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition"
              >
                Get Detailed Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Average Borehole Drilling Costs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 border-2">
              <h3 className="text-xl font-bold mb-3">Shallow Borehole</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">15-50 meters depth</p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-accent mb-2">ZAR 8,000 - 12,000</div>
                <p className="text-sm text-muted-foreground">Average cost per borehole</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Urban residential areas
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  High water table regions
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Quick installation (1-2 days)
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-3 border-accent">
              <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-3">Standard Borehole</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">50-100 meters depth</p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-accent mb-2">ZAR 12,000 - 18,000</div>
                <p className="text-sm text-muted-foreground">Average cost per borehole</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Most common installation
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Reliable water supply
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  2-3 days installation
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2">
              <h3 className="text-xl font-bold mb-3">Deep Borehole</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">100-150+ meters depth</p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-accent mb-2">ZAR 18,000 - 30,000+</div>
                <p className="text-sm text-muted-foreground">Average cost per borehole</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Rural and remote areas
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Specialized equipment required
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  3-4 days installation
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-muted p-8 rounded-lg border-l-4 border-accent">
            <h3 className="font-bold text-lg mb-3 flex gap-2 items-center">
              <AlertCircle className="w-5 h-5 text-accent" />
              Price Includes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Professional site assessment
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Permit application assistance
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Expert drilling operations
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Water quality testing
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Pump system installation
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                12-month warranty & support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Factors Affecting Borehole Drilling Cost</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Location & Geology</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Urban vs Rural</h4>
                  <p className="text-sm text-muted-foreground">
                    Urban areas typically have shallower water tables and easier access, reducing costs by 20-30%. Rural
                    areas require specialized equipment and longer drilling times.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Rock Type</h4>
                  <p className="text-sm text-muted-foreground">
                    Soft soil drills faster and cheaper. Hard rock formations, granite, and basalt increase drilling
                    time and cost significantly (up to 40% more).
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Water Table Depth</h4>
                  <p className="text-sm text-muted-foreground">
                    Shallower water tables (15-50m) = lower cost. Deep water tables (100-150m+) require specialized
                    deep-drilling equipment and more time.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Service & Equipment</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Pump System Quality</h4>
                  <p className="text-sm text-muted-foreground">
                    Basic submersible pumps (ZAR 3,000-5,000) vs high-efficiency models (ZAR 7,000-12,000). We provide
                    quality options to suit your budget.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Additional Testing</h4>
                  <p className="text-sm text-muted-foreground">
                    Water quality analysis (ZAR 1,500-3,000) ensures safety. Many clients choose this for peace of mind
                    and health compliance.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Accessibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Easy access for drilling equipment reduces costs. Difficult terrain or limited space may add ZAR
                    2,000-5,000 to the final bill.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Borehole Drilling Cost Comparison by City</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 px-4 font-bold">City</th>
                  <th className="text-left py-3 px-4 font-bold">Avg Depth</th>
                  <th className="text-right py-3 px-4 font-bold">Cost Range</th>
                  <th className="text-left py-3 px-4 font-bold">Typical Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { city: "Johannesburg", depth: "50-80m", cost: "ZAR 12,000-16,000", duration: "2-3 days" },
                  { city: "Pretoria", depth: "60-90m", cost: "ZAR 13,000-17,000", duration: "2-3 days" },
                  { city: "Cape Town", depth: "40-70m", cost: "ZAR 10,000-15,000", duration: "2-3 days" },
                  { city: "Durban", depth: "35-60m", cost: "ZAR 9,000-14,000", duration: "1-2 days" },
                  { city: "East Rand", depth: "55-85m", cost: "ZAR 12,500-16,500", duration: "2-3 days" },
                  { city: "Sandton", depth: "50-75m", cost: "ZAR 13,000-17,000", duration: "2-3 days" },
                  { city: "Centurion", depth: "60-95m", cost: "ZAR 14,000-18,000", duration: "2-3 days" },
                  { city: "Midrand", depth: "55-80m", cost: "ZAR 12,500-16,500", duration: "2-3 days" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-muted hover:bg-muted/50 transition">
                    <td className="py-3 px-4">
                      <Link href={`/${row.city.toLowerCase()}`} className="text-accent hover:underline font-semibold">
                        {row.city}
                      </Link>
                    </td>
                    <td className="py-3 px-4">{row.depth}</td>
                    <td className="py-3 px-4 text-right font-semibold">{row.cost}</td>
                    <td className="py-3 px-4">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Return on Investment (ROI)</h2>
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg border-l-4 border-accent">
              <h3 className="font-bold text-lg mb-2 flex gap-2 items-center">
                <TrendingDown className="w-5 h-5 text-accent" />
                Monthly Water Cost Savings
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Average household saves ZAR 1,200-2,000 monthly on water bills after borehole installation. This assumes
                50% of water comes from the borehole.
              </p>
              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm">
                  <span className="font-bold">Example:</span> A ZAR 15,000 borehole investment pays for itself in 7-12
                  months through water savings alone.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">60-80%</div>
                <p className="text-sm font-semibold">Monthly savings on water bills</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">7-12</div>
                <p className="text-sm font-semibold">Months to ROI payback</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <p className="text-sm font-semibold">Years lifespan of borehole</p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Long-Term Financial Benefits</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">10-Year Savings:</span> ZAR 144,000-240,000 in water bills (plus
                    increased property value)
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Property Value Increase:</span> Homes with boreholes sell for 8-12%
                    more in drought-prone areas
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Insurance Benefits:</span> Some insurers offer premium reductions
                    for water-independent homes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Additional Costs to Consider</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold mb-2">Water Quality Testing</h3>
              <p className="text-muted-foreground text-sm mb-3">ZAR 1,500 - 3,000</p>
              <p className="text-sm">
                Professional lab analysis ensuring your water is safe for drinking and domestic use. Highly recommended
                for health compliance.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Pressure Tank Installation</h3>
              <p className="text-muted-foreground text-sm mb-3">ZAR 2,000 - 5,000</p>
              <p className="text-sm">
                Optional but recommended. Ensures consistent water pressure throughout your property and extends pump
                lifespan.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Backup Power (Inverter/Generator)</h3>
              <p className="text-muted-foreground text-sm mb-3">ZAR 5,000 - 15,000+</p>
              <p className="text-sm">
                Ensures water supply during power outages. Important in areas with frequent load-shedding or unstable
                grid power.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Annual Maintenance</h3>
              <p className="text-muted-foreground text-sm mb-3">ZAR 1,500 - 3,000/year</p>
              <p className="text-sm">
                Professional servicing, filter replacement, and system checks ensure optimal performance and longevity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-3">What's the cheapest way to drill a borehole?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The most cost-effective approach is choosing a shallow borehole (15-50m) in urban areas. These typically
                cost ZAR 8,000-12,000 and are faster to complete. However, ensure water table assessment confirms this
                is feasible for your property. Contact us for a free site assessment.
              </p>
              <Link href="/contact" className="text-accent hover:underline text-sm font-semibold">
                Get Free Assessment →
              </Link>
            </div>
            <div>
              <h3 className="font-bold mb-3">Do you offer payment plans?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Yes! We work with our clients to make borehole drilling affordable. Ask about our flexible payment
                options and financing partners when you call for your quote.
              </p>
              <a href="tel:0603488268" className="text-accent hover:underline text-sm font-semibold">
                Call 060 348 8268 →
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-3">Why are deep boreholes so expensive?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Deep boreholes require specialized drilling rigs, higher-capacity pumps, and more skilled labor.
                Drilling takes longer, and additional complications like harder rock layers increase costs. However,
                they provide reliable long-term water supply in areas with low water tables.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Can I negotiate the drilling cost?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Our prices are highly competitive and based on actual costs. However, we offer discounts for multiple
                boreholes or referrals. Speak to our team about available options for your specific project.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Is the price fixed or could it change?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                We provide fixed quotes after site assessment. The only variables are unexpected geology (hard rock
                layers) which is discussed and approved before drilling. You're protected with transparent, honest
                pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Get Your Free Borehole Drilling Quote Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            No obligation. Fast response. Serving all 32 major cities across South Africa.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center">
            <a
              href="tel:0603488268"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition text-center"
            >
              Call 060 348 8268
            </a>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition text-center"
            >
              Contact Form
            </Link>
            <a
              href="https://wa.me/27603488268"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container-max">
          <h3 className="font-semibold mb-6 text-center">Borehole Services by Location</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
            {[
              { text: "Johannesburg", href: "/johannesburg" },
              { text: "Cape Town", href: "/cape-town" },
              { text: "Pretoria", href: "/pretoria" },
              { text: "Durban", href: "/durban" },
              { text: "East Rand", href: "/east-rand" },
              { text: "Edenvale", href: "/edenvale" },
              { text: "Fourways", href: "/fourways" },
              { text: "Germiston", href: "/germiston" },
              { text: "Kempton Park", href: "/kempton-park" },
              { text: "Midrand", href: "/midrand" },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="text-accent hover:underline">
                Borehole Drilling in {link.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                  text: "Average costs range from ZAR 8,000-12,000 for shallow boreholes (15-50m), ZAR 12,000-18,000 for standard boreholes (50-100m), and ZAR 18,000-30,000+ for deep boreholes (100-150m+).",
                },
              },
              {
                "@type": "Question",
                name: "What factors affect borehole drilling cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Main factors include location (urban vs rural), geology (rock type), water table depth, equipment needed, and accessibility. Harder rock formations and deeper water tables increase costs.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to drill a borehole?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Shallow boreholes take 1-2 days, standard boreholes take 2-3 days, and deep boreholes take 3-4 days. This includes setup, drilling, installation, and testing.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
