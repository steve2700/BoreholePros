import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Sun, Zap, Phone, Battery, TrendingDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Solar Borehole Pumps 2026 South Africa | Beat Load Shedding Forever",
  description:
    "Solar-powered borehole pumps from R18,000. 100% load shedding proof. Zero electricity bills. Complete solar pump systems with batteries & inverters. Free assessment!",
  keywords: [
    "solar borehole pump",
    "solar water pump south africa",
    "solar borehole system",
    "load shedding borehole solution",
    "solar powered borehole",
    "solar pump installation",
    "off-grid water pump",
  ],
  alternates: {
    canonical: "https://boreholepros.co.za/solar-borehole-pumps",
  },
  openGraph: {
    title: "Solar Borehole Pumps | Load Shedding Solution 2026 South Africa",
    description: "Never worry about load shedding again. Solar borehole pumps from R18k. Zero electricity costs. 100% water independence.",
    images: [
      {
        url: "https://boreholepros.co.za/images/solar-borehole-pumps.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function SolarBoreholePumpsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
              ☀️ ZERO ELECTRICITY BILLS | 100% LOAD SHEDDING PROOF
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solar Borehole Pumps: Ultimate Load Shedding Solution 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Beat load shedding permanently with solar-powered borehole systems. Unlimited water 24/7, zero 
              electricity costs, complete independence from Eskom. Professional solar pump installation from 
              R18,000 with 10-year warranties. Join 800+ South Africans who never worry about load shedding again.
            </p>
            <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-lg mb-8">
              <p className="text-sm font-semibold">
                💡 <strong>2026 Reality Check:</strong> With Stage 6+ load shedding becoming normal, solar 
                borehole pumps aren't luxury anymore - they're essential. Typical payback period: 2-3 years 
                through eliminated electricity costs!
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
                Get Free Solar Assessment
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

      {/* Solar Pump Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Borehole Pump Systems 2026</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Complete solar pump systems designed for South African conditions. All packages include solar 
              panels, batteries, inverter, pump, installation, and warranties. Choose grid-tied or off-grid options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic Solar Package */}
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">BASIC SOLAR</div>
              <h3 className="text-2xl font-bold mb-3">Solar Direct Drive</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">Daytime pumping only</p>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  R18,000 <span className="text-2xl">- R28,000</span>
                </div>
                <p className="text-sm text-muted-foreground">Complete installation</p>
              </div>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">SYSTEM INCLUDES:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    2 x 400W solar panels (800W)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    DC solar borehole pump (1.5kW)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    MPPT solar controller
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Mounting structure & cables
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Professional installation
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    5-year pump warranty
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    10-year panel warranty
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Installation: 1-2 days</p>
              <p className="text-xs text-muted-foreground mb-4">☀️ Operating hours: 7am-5pm (sunshine only)</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Budget-conscious, daytime use, storage tanks</p>
            </Card>

            {/* Hybrid Solar Package - MOST POPULAR */}
            <Card className="p-8 border-3 border-accent relative hover:shadow-2xl transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                🔥 MOST POPULAR - BEST VALUE
              </div>
              <div className="text-sm font-semibold text-accent mb-2 mt-4">HYBRID SOLAR</div>
              <h3 className="text-2xl font-bold mb-3">Solar + Battery Backup</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">24/7 water availability</p>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  R38,000 <span className="text-2xl">- R52,000</span>
                </div>
                <p className="text-sm text-muted-foreground">Complete installation</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">EVERYTHING IN BASIC PLUS:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    4 x 400W solar panels (1,600W)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    5kVA hybrid inverter
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    2 x 5.12kWh lithium batteries (10kWh)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Grid backup capability
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Smart energy management
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    10-year battery warranty
                  </li>
                  <li className="flex gap-2">
                    <Battery className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Run pump day AND night!</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Installation: 2-3 days</p>
              <p className="text-xs text-muted-foreground mb-4">☀️ Operating hours: 24/7 (solar + battery + grid)</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Complete independence, families, businesses</p>
            </Card>

            {/* Premium Off-Grid Package */}
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">PREMIUM OFF-GRID</div>
              <h3 className="text-2xl font-bold mb-3">Total Independence</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">Zero Eskom dependency</p>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  R65,000 <span className="text-2xl">- R95,000</span>
                </div>
                <p className="text-sm text-muted-foreground">Complete installation</p>
              </div>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">EVERYTHING IN HYBRID PLUS:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    8 x 550W solar panels (4,400W)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    10kVA off-grid inverter
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    4 x 5.12kWh batteries (20kWh)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Generator auto-start ready
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Weather monitoring system
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Remote monitoring app
                  </li>
                  <li className="flex gap-2">
                    <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Power your entire home + pump!</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Installation: 3-5 days</p>
              <p className="text-xs text-muted-foreground mb-4">☀️ Operating hours: 24/7 (100% off-grid capable)</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Farms, estates, complete Eskom independence</p>
            </Card>
          </div>

          {/* Retrofit Option Callout */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg border-2 border-accent/50">
            <div className="flex items-start gap-4">
              <Sun className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-3">🔄 Already Have a Borehole? Add Solar Retrofit!</h3>
                <p className="text-muted-foreground mb-4">
                  Convert your existing grid-powered borehole to solar. Keep your current pump (if compatible) 
                  and add solar panels + batteries. Save 30-40% vs complete new installation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Basic Solar Add-on</p>
                    <p className="text-accent font-bold">R12,000-R18,000</p>
                    <p className="text-xs text-muted-foreground">Panels + controller only</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border-2 border-accent">
                    <p className="font-semibold mb-1">Hybrid Retrofit</p>
                    <p className="text-accent font-bold">R28,000-R42,000</p>
                    <p className="text-xs text-muted-foreground">Panels + inverter + batteries</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Full Replacement</p>
                    <p className="text-accent font-bold">R35,000-R55,000</p>
                    <p className="text-xs text-muted-foreground">New DC pump + complete solar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Solar Pumps Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="text-center mb-12">
            <Sun className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Switch to Solar Borehole Pumps?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Solar pumps aren't just about saving money - they're about complete water independence and 
              never worrying about Eskom again. Here's why 800+ South Africans have made the switch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "100% Load Shedding Proof",
                description: "Never lose water during power outages again. Solar pumps run on sunshine and battery backup. Stage 6 load shedding? Stage 10? Doesn't matter - you'll have water 24/7.",
                impact: "Peace of Mind: Priceless"
              },
              {
                title: "Zero Electricity Bills",
                description: "Typical borehole pump costs R180-R350/month to run. Solar = R0/month forever. That's R2,160-R4,200 saved annually. System pays for itself in 2-3 years, then 20+ years of free water.",
                impact: "Saving: R2,160-R4,200/year"
              },
              {
                title: "Environmental Champion",
                description: "Solar pumps eliminate 2-4 tons of CO2 emissions per year vs grid power. Clean, renewable energy. No diesel generators needed. Reduce your carbon footprint while saving money.",
                impact: "Impact: 2-4 tons CO2 saved/year"
              },
              {
                title: "Minimal Maintenance",
                description: "Solar panels need cleaning 2-3 times per year. No moving parts. DC pumps last 20+ years. Lithium batteries need zero maintenance. Set it and forget it for decades.",
                impact: "Maintenance: R500/year vs R2,000+"
              },
              {
                title: "Increases Property Value",
                description: "Homes with solar borehole systems sell 15-25% faster and for 12-18% more in 2026. Buyers demand load shedding solutions. Solar water = major selling point.",
                impact: "Value: +12-18% property value"
              },
              {
                title: "Grid Independence",
                description: "No reliance on Eskom. No rolling blackouts. No Stage 6 stress. True independence. Control your own water and power. Freedom from utility failures.",
                impact: "Independence: 100%"
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{benefit.description}</p>
                <div className="bg-accent/10 px-3 py-2 rounded text-xs font-semibold text-accent">
                  {benefit.impact}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator for Solar */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <TrendingDown className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solar Borehole Pump ROI Calculator 2026
              </h2>
              <p className="text-muted-foreground">
                See exactly when your solar investment pays for itself. Real numbers based on 2026 electricity 
                prices and typical usage patterns.
              </p>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="font-bold text-xl mb-6">Hybrid Solar System ROI Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-2 border-red-200">
                  <p className="text-sm font-semibold text-red-600 mb-2">❌ GRID-POWERED BOREHOLE</p>
                  <p className="text-4xl font-bold text-red-600 mb-2">R3,400</p>
                  <p className="text-sm text-muted-foreground">Average monthly cost (2026)</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    • Pump electricity: R280/month<br/>
                    • Load shedding inverter rental: R850/month<br/>
                    • Battery charging: R420/month<br/>
                    • Generator fuel: R650/month<br/>
                    • Maintenance & repairs: R200/month<br/>
                    • Tariff increases (8-12% yearly)
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border-2 border-green-200">
                  <p className="text-sm font-semibold text-green-600 mb-2">✅ SOLAR-POWERED BOREHOLE</p>
                  <p className="text-4xl font-bold text-green-600 mb-2">R200</p>
                  <p className="text-sm text-muted-foreground">Average monthly cost (2026)</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    • Electricity: R0 (solar powered)<br/>
                    • Load shedding backup: R0 (built-in)<br/>
                    • Generator fuel: R0 (not needed)<br/>
                    • Panel cleaning: R50/month<br/>
                    • System monitoring: R0 (included)<br/>
                    • Maintenance reserve: R150/month
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-lg mb-1">Monthly Savings</p>
                    <p className="text-4xl font-bold text-accent">R3,200</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg mb-1">Annual Savings</p>
                    <p className="text-4xl font-bold text-accent">R38,400</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg text-center border-2 border-accent">
                  <div className="text-3xl font-bold text-accent mb-2">12-18</div>
                  <p className="text-sm font-semibold">Months to Full ROI</p>
                  <p className="text-xs text-muted-foreground mt-1">Based on R45,000 hybrid system</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">R384k</div>
                  <p className="text-sm font-semibold">10-Year Savings</p>
                  <p className="text-xs text-muted-foreground mt-1">After ROI payback period</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-2">R768k+</div>
                  <p className="text-sm font-semibold">20-Year Savings</p>
                  <p className="text-xs text-muted-foreground mt-1">Typical system lifespan</p>
                </div>
              </div>
            </Card>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5 text-accent" />
                Additional 2026 Financial Benefits
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Tax Incentives:</strong> Section 12B allows businesses to claim 125% tax deduction 
                    on renewable energy investments (consult your accountant)
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Insurance Discounts:</strong> Some insurers offer 8-12% premium reductions for 
                    homes with solar backup systems in 2026
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Tariff Increases:</strong> While Eskom increases rates 8-12% annually, your 
                    solar costs stay flat for 25+ years
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Resale Value:</strong> Properties with solar borehole systems sell for 12-18% more 
                    than comparable homes without
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Solar Pumps Work */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              How Solar Borehole Pumps Work
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Simple, reliable, proven technology. Here's exactly how solar pumps deliver unlimited water 
              without grid power or generators.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "Step 1",
                  title: "Solar Panels Capture Sunlight",
                  description: "High-efficiency solar panels (400-550W each) convert sunlight into DC electricity. Panels are mounted on your roof or ground-mounted in your yard. They generate power from sunrise to sunset, even on cloudy days (at reduced capacity).",
                  components: ["400-550W monocrystalline panels", "25-year power warranty", "Anti-reflective coating", "Hail & weather resistant"]
                },
                {
                  step: "Step 2",
                  title: "Controller/Inverter Manages Power",
                  description: "MPPT solar charge controller (for direct systems) or hybrid inverter (for battery systems) optimizes power delivery. Smart technology ensures maximum efficiency and protects equipment from surges and overload.",
                  components: ["MPPT charge technology", "Overcharge protection", "Smart battery management", "Grid failover (hybrid)"]
                },
                {
                  step: "Step 3",
                  title: "Batteries Store Excess Energy (Hybrid Systems)",
                  description: "Lithium iron phosphate (LiFePO4) batteries store solar energy for night use or cloudy days. 10kWh typical capacity = 4-6 hours of pumping after sunset. Optional grid charging as backup.",
                  components: ["10-20kWh capacity", "10-year warranty", "80% usable depth", "6,000+ cycle lifespan"]
                },
                {
                  step: "Step 4",
                  title: "Pump Delivers Water 24/7",
                  description: "DC borehole pump (direct systems) or AC pump via inverter (hybrid systems) pumps water whenever needed. Smart systems optimize pumping during peak solar hours and use batteries for evening/morning demand.",
                  components: ["1.5-4kW pump capacity", "20+ year lifespan", "Stainless steel construction", "Automatic pressure control"]
                },
              ].map((step, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-accent">{step.step}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.components.map((item, i) => (
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
              <h4 className="font-bold mb-2">🌤️ What About Cloudy Days?</h4>
              <p className="text-sm text-muted-foreground">
                Solar panels still generate 10-25% power on cloudy days. Battery systems store 2-3 days of 
                water pumping capacity for extended bad weather. Hybrid systems can also pull from the grid 
                during prolonged cloudy periods (though 99% of the time, solar is sufficient).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Sizing Guide */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              What Size Solar System Do You Need?
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              System requirements depend on your household size, water usage, and whether you want daytime-only 
              or 24/7 pumping. Here's our expert recommendation guide.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-accent bg-accent/5">
                    <th className="text-left py-4 px-4 font-bold">Household Type</th>
                    <th className="text-left py-4 px-4 font-bold">Daily Usage</th>
                    <th className="text-left py-4 px-4 font-bold">Recommended System</th>
                    <th className="text-right py-4 px-4 font-bold">Investment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      type: "Small household (2-3 people)", 
                      usage: "500-800L/day", 
                      system: "Basic Direct Drive (800W panels)", 
                      price: "R18,000-R24,000" 
                    },
                    { 
                      type: "Medium household (4-5 people)", 
                      usage: "800-1,200L/day", 
                      system: "Hybrid System (1,600W + 10kWh battery)", 
                      price: "R38,000-R48,000" 
                    },
                    { 
                      type: "Large household (6+ people)", 
                      usage: "1,200-2,000L/day", 
                      system: "Hybrid System (2,400W + 15kWh battery)", 
                      price: "R52,000-R68,000" 
                    },
                    { 
                      type: "Estate/Small farm", 
                      usage: "2,000-5,000L/day", 
                      system: "Premium Off-Grid (4,400W + 20kWh)", 
                      price: "R65,000-R95,000" 
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-muted hover:bg-accent/5 transition">
                      <td className="py-4 px-4 font-semibold">{row.type}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.usage}</td>
                      <td className="py-4 px-4">{row.system}</td>
                      <td className="py-4 px-4 text-right font-bold text-accent">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold mb-2">📊 Free Professional Assessment:</h4>
              <p className="text-sm text-muted-foreground">
                Every property is unique. We provide free on-site assessments to calculate your exact water 
                usage, evaluate roof/ground mounting options, measure sun exposure, and design the perfect 
                system for your needs and budget. Call us for your free assessment!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Common Questions About Solar Borehole Pumps
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much do solar borehole pumps cost in South Africa?",
                  a: "Basic direct-drive solar pumps start at R18,000-R28,000 (daytime pumping only). Hybrid systems with batteries for 24/7 water are R38,000-R52,000. Premium off-grid systems are R65,000-R95,000. All prices include panels, pump, installation, and warranties. Typical ROI is 12-24 months."
                },
                {
                  q: "Do solar pumps work during load shedding?",
                  a: "Yes! That's the entire point. Solar pumps run on sunshine and batteries, completely independent of Eskom. Direct systems pump whenever the sun shines. Hybrid systems pump 24/7 using stored battery power during nights and load shedding. Zero dependence on grid power."
                },
                {
                  q: "What happens on cloudy days or at night?",
                  a: "Direct systems reduce pumping on cloudy days (10-25% power) and stop at night. Hybrid systems with batteries continue pumping 24/7 using stored solar energy. Most hybrid systems store 2-3 days of pumping capacity for extended bad weather. In rare cases, grid backup kicks in."
                },
                {
                  q: "How long do solar borehole pumps last?",
                  a: "Solar panels: 25-30 years with 80% efficiency guarantee. DC pumps: 20-25 years. Lithium batteries: 10-15 years (6,000+ cycles). Inverters: 10-15 years. Overall system lifespan is 20-25+ years with minimal maintenance. Best long-term investment for water independence."
                },
                {
                  q: "Can I add solar to my existing borehole?",
                  a: "Absolutely! We offer retrofit packages starting at R12,000. If you have an AC pump, we add solar panels + hybrid inverter + batteries. If you want maximum efficiency, we can replace your pump with a DC solar pump. We assess your current system and recommend the best retrofit option."
                },
                {
                  q: "Is solar cheaper than running on grid electricity?",
                  a: "Initially, solar costs more upfront. But typical payback is 12-24 months. After that, you save R2,400-R4,200 per year in electricity costs. Over 20 years, solar saves R50,000-R85,000 vs grid power (assuming 8-12% annual tariff increases). Plus you get load shedding immunity."
                },
                {
                  q: "Do I need planning permission for solar panels?",
                  a: "For residential properties under 1MVA (virtually all homes), no municipal approval needed. Solar panels are considered 'permitted development.' For commercial/industrial installations, some municipalities require notification. We handle all compliance documentation."
                },
                {
                  q: "What maintenance do solar pumps require?",
                  a: "Very minimal! Clean solar panels 2-3 times per year (R500-R800). Check battery connections annually. That's it. No oil changes, no generator servicing, no grid dependency issues. Budget R500-R1,000 per year total maintenance. Compare that to R2,000-R4,000 for grid+generator systems."
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
            <Sun className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Never Worry About Load Shedding Again
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 800+ South Africans who achieved complete water independence with solar borehole pumps. 
              Free solar assessment. Professional installation in 2-5 days. 10-year warranties. Zero electricity 
              bills. Water 24/7, guaranteed.
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
                Get Free Solar Assessment
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
                <p className="font-semibold mb-1">100% Load Shedding Proof</p>
                <p className="text-xs text-muted-foreground">Water independence guaranteed</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">12-24 Month ROI</p>
                <p className="text-xs text-muted-foreground">Pays for itself through savings</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">25+ Year Lifespan</p>
                <p className="text-xs text-muted-foreground">Decades of free water pumping</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
