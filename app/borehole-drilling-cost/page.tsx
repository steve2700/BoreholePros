import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2, TrendingDown, AlertCircle, Phone, Calculator, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Cost Guide 2026 South Africa | Current Prices & ROI Calculator",
  description:
    "Updated 2026 borehole drilling costs: R18,000-R35,000 avg. Complete price breakdown, depth guide, ROI calculator. Free quotes across SA. Load shedding solution included!",
  keywords: [
    "borehole drilling cost 2026",
    "borehole drilling price south africa",
    "how much borehole drilling",
    "borehole cost 2026",
    "borehole drilling cost per meter",
    "affordable borehole drilling",
    "borehole installation price",
  ],
  alternates: {
    canonical: "https://boreholepros.co.za/borehole-drilling-cost",
  },
  openGraph: {
    title: "Borehole Drilling Costs 2026 | Complete Price Guide South Africa",
    description: "Updated 2026 prices: R18k-R35k. Beat load shedding & water restrictions. Free quotes & ROI calculator.",
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
      {/* Hero Section - Enhanced for 2026 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
              ⚡ UPDATED FOR 2026 | Load Shedding Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Borehole Drilling Costs 2026: Complete Price Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Beat load shedding and water restrictions with your own borehole. Updated 2026 prices: R18,000-R35,000 
              average installation. Get water independence in 3-5 days with our transparent pricing and professional service.
            </p>
            <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-lg mb-8">
              <p className="text-sm font-semibold">
                💡 <strong>2026 Average Cost:</strong> R22,500 for complete installation including pump, electrical, 
                testing & 12-month warranty. Pays for itself in 8-14 months through water bill savings!
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

      {/* 2026 Updated Pricing Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">2026 Borehole Drilling Prices South Africa</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Transparent, all-inclusive pricing updated for 2026. No hidden costs. Prices include drilling, pump 
              installation, electrical connection, testing, and warranty. Load shedding backup options available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic Package */}
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">BASIC PACKAGE</div>
              <h3 className="text-2xl font-bold mb-3">Shallow Borehole</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">30-60 meters depth</p>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  R18,000 <span className="text-2xl">- R25,000</span>
                </div>
                <p className="text-sm text-muted-foreground">Complete installation</p>
              </div>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">WHAT'S INCLUDED:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Free site assessment
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Professional drilling (30-60m)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    1.5kW submersible pump
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Electrical installation
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Pressure system setup
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Water quality testing
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    12-month warranty
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Installation: 2-3 days</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Urban areas, high water table regions</p>
            </Card>

            {/* Standard Package - MOST POPULAR */}
            <Card className="p-8 border-3 border-accent relative hover:shadow-2xl transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                🔥 MOST POPULAR - BEST VALUE
              </div>
              <div className="text-sm font-semibold text-accent mb-2 mt-4">STANDARD PACKAGE</div>
              <h3 className="text-2xl font-bold mb-3">Standard Borehole</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">60-100 meters depth</p>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  R25,000 <span className="text-2xl">- R32,000</span>
                </div>
                <p className="text-sm text-muted-foreground">Complete installation</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">EVERYTHING IN BASIC PLUS:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Deeper drilling (60-100m)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    2.2kW premium pump (Grundfos)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    200L pressure vessel
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Advanced electrical protection
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Comprehensive water testing
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    24-month warranty
                  </li>
                  <li className="flex gap-2">
                    <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Load shedding prep included!</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Installation: 3-4 days</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Most Johannesburg/Pretoria properties</p>
            </Card>

            {/* Premium Package */}
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">PREMIUM PACKAGE</div>
              <h3 className="text-2xl font-bold mb-3">Deep Borehole</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">100-150+ meters depth</p>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  R32,000 <span className="text-2xl">- R45,000+</span>
                </div>
                <p className="text-sm text-muted-foreground">Complete installation</p>
              </div>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">EVERYTHING IN STANDARD PLUS:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Deep drilling (100-150m+)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    4kW industrial pump
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    300L pressure system
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    VSD control system
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Advanced filtration
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    36-month warranty
                  </li>
                  <li className="flex gap-2">
                    <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Solar backup option available</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Installation: 4-5 days</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Rural areas, commercial properties</p>
            </Card>
          </div>

          {/* New 2026 Feature Callout */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg border-2 border-accent/50">
            <div className="flex items-start gap-4">
              <Zap className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-3">🆕 2026 Load Shedding Protection Package</h3>
                <p className="text-muted-foreground mb-4">
                  Add inverter backup to your borehole for uninterrupted water supply during power outages. Essential 
                  for 2026 with continued load shedding across South Africa.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Basic Inverter</p>
                    <p className="text-accent font-bold">+R6,500</p>
                    <p className="text-xs text-muted-foreground">4-6 hours backup</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border-2 border-accent">
                    <p className="font-semibold mb-1">Solar Hybrid System</p>
                    <p className="text-accent font-bold">+R18,000</p>
                    <p className="text-xs text-muted-foreground">Unlimited power ☀️</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Generator Ready</p>
                    <p className="text-accent font-bold">+R2,200</p>
                    <p className="text-xs text-muted-foreground">Auto-changeover switch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 ROI Calculator Section - Enhanced */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                2026 Borehole ROI Calculator: See Your Savings
              </h2>
              <p className="text-muted-foreground">
                With 2026 municipal water prices at R25-45 per kiloliter (up 12% from 2025), your borehole pays for 
                itself faster than ever. Calculate your exact savings below.
              </p>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="font-bold text-xl mb-6">Average Household Savings (2026 Rates)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-2 border-red-200">
                  <p className="text-sm font-semibold text-red-600 mb-2">❌ WITHOUT BOREHOLE</p>
                  <p className="text-4xl font-bold text-red-600 mb-2">R2,800</p>
                  <p className="text-sm text-muted-foreground">Average monthly water bill (2026)</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    • 20kl municipal water @ R35/kl = R700<br/>
                    • Basic charge: R180<br/>
                    • Sanitation: R220<br/>
                    • VAT & levies: R300
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border-2 border-green-200">
                  <p className="text-sm font-semibold text-green-600 mb-2">✅ WITH BOREHOLE</p>
                  <p className="text-4xl font-bold text-green-600 mb-2">R680</p>
                  <p className="text-sm text-muted-foreground">Average monthly cost (2026)</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    • Electricity (pump): R180<br/>
                    • Maintenance reserve: R150<br/>
                    • Municipal sanitation: R220<br/>
                    • Levies: R130
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-lg mb-1">Monthly Savings</p>
                    <p className="text-4xl font-bold text-accent">R2,120</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg mb-1">Annual Savings</p>
                    <p className="text-4xl font-bold text-accent">R25,440</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg text-center border-2 border-accent">
                  <div className="text-3xl font-bold text-accent mb-2">8-14</div>
                  <p className="text-sm font-semibold">Months to Full ROI</p>
                  <p className="text-xs text-muted-foreground mt-1">Based on R22,500 investment</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">R254k</div>
                  <p className="text-sm font-semibold">10-Year Savings</p>
                  <p className="text-xs text-muted-foreground mt-1">After ROI payback period</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">R508k+</div>
                  <p className="text-sm font-semibold">20-Year Savings</p>
                  <p className="text-xs text-muted-foreground mt-1">Typical borehole lifespan</p>
                </div>
              </div>
            </Card>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-accent" />
                Additional 2026 Financial Benefits
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Property Value Increase:</strong> Homes with boreholes sell for 10-15% more in 2026 
                    (up from 8-12% in 2024) due to water crisis concerns
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Insurance Discounts:</strong> Some insurers now offer 5-8% premium reductions for 
                    water-independent homes in 2026
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Load Shedding Protection:</strong> Water availability during power outages = priceless 
                    in 2026 South Africa
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Drought Resilience:</strong> Water restrictions becoming annual - your borehole = 
                    uninterrupted supply
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Updated City Pricing Table */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              2026 Borehole Drilling Costs by City
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Updated prices reflecting 2026 market rates, fuel costs, and regional variations across South Africa
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-accent bg-accent/5">
                    <th className="text-left py-4 px-4 font-bold">City / Region</th>
                    <th className="text-left py-4 px-4 font-bold">Avg Depth</th>
                    <th className="text-right py-4 px-4 font-bold">2026 Cost Range</th>
                    <th className="text-left py-4 px-4 font-bold">Timeline</th>
                    <th className="text-center py-4 px-4 font-bold">Popular</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { city: "Johannesburg", depth: "55-85m", cost: "R20,000-R28,000", duration: "3-4 days", popular: "🔥" },
                    { city: "Sandton", depth: "50-80m", cost: "R22,000-R30,000", duration: "3-4 days", popular: "🔥" },
                    { city: "Pretoria", depth: "65-95m", cost: "R22,000-R32,000", duration: "3-4 days", popular: "🔥" },
                    { city: "Centurion", depth: "60-90m", cost: "R21,000-R30,000", duration: "3-4 days", popular: "" },
                    { city: "Midrand", depth: "55-85m", cost: "R20,000-R29,000", duration: "3-4 days", popular: "" },
                    { city: "Fourways", depth: "50-75m", cost: "R21,000-R29,000", duration: "3-4 days", popular: "" },
                    { city: "East Rand", depth: "60-90m", cost: "R20,000-R28,000", duration: "3-4 days", popular: "" },
                    { city: "Cape Town", depth: "45-75m", cost: "R18,000-R26,000", duration: "2-3 days", popular: "" },
                    { city: "Durban", depth: "35-65m", cost: "R17,000-R24,000", duration: "2-3 days", popular: "" },
                    { city: "Krugersdorp", depth: "70-100m", cost: "R23,000-R33,000", duration: "3-4 days", popular: "" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-muted hover:bg-accent/5 transition">
                      <td className="py-4 px-4">
                        <Link 
                          href={`/${row.city.toLowerCase().replace(" ", "-")}`} 
                          className="text-accent hover:underline font-semibold flex items-center gap-2"
                        >
                          {row.city}
                          {row.popular && <span className="text-xs">{row.popular}</span>}
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{row.depth}</td>
                      <td className="py-4 px-4 text-right font-bold">{row.cost}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.duration}</td>
                      <td className="py-4 px-4 text-center">
                        <Link
                          href={`/${row.city.toLowerCase().replace(" ", "-")}`}
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
              * Prices updated January 2026. Includes complete installation: drilling, pump, electrical, testing. 
              Final cost depends on exact depth and site conditions. All quotes include free site assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Factors Section - Updated */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Affects Borehole Drilling Cost in 2026?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Drilling Depth Required",
                description: "Water table depth is the #1 cost factor. Shallow boreholes (30-60m) cost 30-40% less than deep boreholes (100m+). Free site assessment determines exact depth needed.",
                impact: "High Impact: +40% for deep drilling"
              },
              {
                title: "Location & Accessibility",
                description: "Urban areas with easy access cost less. Rural, remote, or difficult terrain adds R3,000-R8,000 due to equipment transport and setup complexity.",
                impact: "Medium Impact: +15-25%"
              },
              {
                title: "Rock Formation Type",
                description: "Soft soil/sandstone = faster drilling. Hard rock (granite, dolomite) requires specialized drill bits and more time. Common in Johannesburg/Pretoria regions.",
                impact: "Medium Impact: +20-35%"
              },
              {
                title: "Pump Quality & Size",
                description: "Premium pumps (Grundfos, Pedrollo) cost R8k-R15k vs budget pumps R4k-R6k. We recommend premium for longevity (20+ years vs 5-8 years).",
                impact: "User Choice: Budget to Premium"
              },
              {
                title: "Electrical Infrastructure",
                description: "Distance from distribution board affects cabling costs. Add R2k-R5k for long runs (50m+) or three-phase installations.",
                impact: "Low Impact: +8-15%"
              },
              {
                title: "2026 Fuel & Transport",
                description: "Diesel prices up 8% in 2026 affects drilling rig costs. We absorb most increases but extreme distances may add small surcharge.",
                impact: "New 2026 Factor: +5-10%"
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-12 h-12 text-orange-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">⚠️ Watch Out for Hidden Costs in 2026</h2>
                  <p className="text-muted-foreground mb-6">
                    Many drilling companies advertise low prices then add charges later. Here's what to ask about 
                    before signing any contract:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { item: "Site assessment fee", hidden: "R500-R1,500", ours: "FREE" },
                      { item: "Water testing", hidden: "R800-R1,200", ours: "INCLUDED" },
                      { item: "Pump installation", hidden: "R3,000-R5,000", ours: "INCLUDED" },
                      { item: "Electrical connection", hidden: "R2,500-R4,000", ours: "INCLUDED" },
                      { item: "Hard rock surcharge", hidden: "R5,000-R12,000", ours: "QUOTED UPFRONT" },
                      { item: "Travel/transport fees", hidden: "R1,500-R3,500", ours: "INCLUDED" },
                      { item: "Pressure system", hidden: "R4,000-R7,000", ours: "INCLUDED" },
                      { item: "Warranty coverage", hidden: "Extra R2k-R4k", ours: "INCLUDED" },
                    ].map((cost, idx) => (
                      <div key={idx} className="bg-background p-4 rounded-lg border border-muted">
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <p className="font-semibold text-sm">{cost.item}</p>
                          <div className="text-right">
                            <p className="text-xs text-red-600 line-through">{cost.hidden}</p>
                            <p className="text-xs text-green-600 font-bold">{cost.ours}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-background p-4 rounded-lg border-2 border-accent">
                    <p className="font-bold mb-2">✅ Our Guarantee:</p>
                    <p className="text-sm">
                      The price we quote is the price you pay. Period. No surprise charges. No hidden fees. 
                      All-inclusive pricing with a written guarantee. If we encounter hard rock or unexpected 
                      conditions, we discuss options before proceeding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Common Questions About Borehole Costs (2026)
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much does it cost to drill a borehole in South Africa in 2026?",
                  a: "The average cost for a complete borehole installation in 2026 is R18,000-R35,000, depending on depth and location. This includes drilling, pump, electrical installation, testing, and warranty. Most Johannesburg/Pretoria properties fall in the R22,000-R28,000 range."
                },
                {
                  q: "What is the cost per meter for borehole drilling in 2026?",
                  a: "Drilling costs vary by depth and rock type. Shallow drilling (30-60m) averages R350-R450/meter. Standard depth (60-100m) is R400-R550/meter. Deep drilling (100m+) is R500-R700/meter. However, the total package price is more important than per-meter cost."
                },
                {
                  q: "How long does borehole drilling take?",
                  a: "Most residential boreholes are completed in 2-4 days. Day 1: Site prep and drilling. Day 2-3: Pump and electrical installation. Day 4: Testing and handover. We provide exact timelines during your free site assessment."
                },
                {
                  q: "Do I need permits for borehole drilling in 2026?",
                  a: "For domestic use under 10,000 liters/day, no permit is required in most areas. We handle all compliance documentation. For commercial use or larger volumes, water use licenses may be needed - we guide you through this process."
                },
                {
                  q: "What's the cheapest borehole option?",
                  a: "Our Basic Package starts at R18,000 for shallow boreholes (30-60m) with a quality pump and full installation. However, 'cheap' often costs more long-term. We recommend investing in quality pumps and proper installation to avoid costly repairs."
                },
                {
                  q: "How much does it cost to maintain a borehole annually?",
                  a: "Budget R1,500-R2,500/year for maintenance: R180/month electricity (R2,160/year), plus R500-R1,000 for annual pump service and water quality testing. Still 75% cheaper than municipal water!"
                },
                {
                  q: "Can I add solar power to my borehole?",
                  a: "Yes! Our 2026 Solar Hybrid System (+R18,000) provides unlimited power for your borehole pump. Pays for itself in 24-30 months through eliminated electricity costs. Popular with load shedding concerns."
                },
                {
                  q: "What happens if you don't find water?",
                  a: "We conduct free hydro-geological assessments before drilling. In the rare case of a dry hole (less than 1% in our service areas), you only pay for the drilling depth attempted, not the full package. We then help relocate the borehole."
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
              Ready to Get Water Independent in 2026?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 1,500+ South African homeowners who stopped worrying about water bills and load shedding. 
              Free site assessment. Transparent pricing. Professional installation in 3-5 days.
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
                <p className="font-semibold mb-1">All-Inclusive Pricing</p>
                <p className="text-xs text-muted-foreground">No hidden costs. What we quote is what you pay.</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">12-36 Month Warranty</p>
                <p className="text-xs text-muted-foreground">Full coverage on all installations. Peace of mind guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
