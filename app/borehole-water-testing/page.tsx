import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Droplets, AlertTriangle, Phone, Flask, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Water Testing 2026 South Africa | Professional Water Quality Analysis",
  description:
    "Professional borehole water testing from R850. Full analysis in 24-48 hours. E.coli, pH, minerals, metals testing. SABS certified labs. Safe drinking water guaranteed!",
  keywords: [
    "borehole water testing",
    "water quality testing south africa",
    "borehole water analysis",
    "drinking water testing",
    "water testing near me",
    "borehole water quality",
    "water testing price",
  ],
  alternates: {
    canonical: "https://boreholepros.co.za/borehole-water-testing",
  },
  openGraph: {
    title: "Borehole Water Testing | Professional Analysis & Certification 2026",
    description: "SABS certified water testing from R850. Full results in 24-48 hours. Protect your family's health with professional water quality analysis.",
    images: [
      {
        url: "https://boreholepros.co.za/images/borehole-water-testing.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function BoreholeWaterTestingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
              🔬 SABS CERTIFIED | 24-48 HOUR RESULTS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Borehole Water Testing South Africa
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Ensure your borehole water is safe to drink with professional SABS-certified testing. Complete 
              analysis from R850 with results in 24-48 hours. Test for bacteria, minerals, pH levels, and 
              harmful contaminants. Protect your family's health today.
            </p>
            <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-lg mb-8">
              <p className="text-sm font-semibold">
                💡 <strong>Why Test Your Borehole Water?</strong> Even crystal-clear water can contain invisible 
                bacteria, heavy metals, or excess minerals. Testing is the only way to confirm it's safe to drink.
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
                Book Water Test
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

      {/* Testing Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Water Testing Packages 2026</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Choose the right testing package for your needs. All tests performed by SABS-certified laboratories. 
              Results include detailed report and recommendations for treatment if needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic Package */}
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">BASIC PACKAGE</div>
              <h3 className="text-2xl font-bold mb-3">Essential Safety Test</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">Core drinking water safety</p>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  R850
                </div>
                <p className="text-sm text-muted-foreground">Results in 24-48 hours</p>
              </div>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">TESTS INCLUDED:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    E.coli bacteria test
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Total coliform bacteria
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    pH level analysis
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Turbidity (clarity)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Total dissolved solids (TDS)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Written report & certificate
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Treatment recommendations
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Sample collection: 15 minutes</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Annual safety checks, new boreholes</p>
            </Card>

            {/* Standard Package - MOST POPULAR */}
            <Card className="p-8 border-3 border-accent relative hover:shadow-2xl transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                🔥 RECOMMENDED - MOST THOROUGH
              </div>
              <div className="text-sm font-semibold text-accent mb-2 mt-4">STANDARD PACKAGE</div>
              <h3 className="text-2xl font-bold mb-3">Complete Analysis</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">Full drinking water profile</p>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  R1,450
                </div>
                <p className="text-sm text-muted-foreground">Results in 48-72 hours</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">EVERYTHING IN BASIC PLUS:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Nitrate & nitrite levels
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Fluoride concentration
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Chloride levels
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Sulfate content
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Calcium & magnesium (hardness)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Iron & manganese
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Sodium content
                  </li>
                  <li className="flex gap-2">
                    <Flask className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Detailed treatment plan included</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Sample collection: 20 minutes</p>
              <p className="text-xs text-muted-foreground">✅ Best for: First-time testing, health concerns</p>
            </Card>

            {/* Premium Package */}
            <Card className="p-8 border-2 hover:border-accent transition-all hover:shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-2">PREMIUM PACKAGE</div>
              <h3 className="text-2xl font-bold mb-3">Comprehensive Screen</h3>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">Full contaminant analysis</p>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent mb-2">
                  R2,850
                </div>
                <p className="text-sm text-muted-foreground">Results in 5-7 days</p>
              </div>
              <div className="bg-accent/5 p-4 rounded-lg mb-6">
                <p className="text-xs font-semibold mb-2">EVERYTHING IN STANDARD PLUS:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Heavy metals panel (Lead, Arsenic, Mercury)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Aluminum & copper
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Chromium & cadmium
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Pesticides screening
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Herbicides detection
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    VOCs (Volatile Organic Compounds)
                  </li>
                  <li className="flex gap-2">
                    <Flask className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Custom filtration system design</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mb-4">⏱️ Sample collection: 30 minutes</p>
              <p className="text-xs text-muted-foreground">✅ Best for: Agricultural areas, industrial zones</p>
            </Card>
          </div>

          {/* Add-on Tests */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg border-2 border-accent/50">
            <div className="flex items-start gap-4">
              <Flask className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-3">🧪 Additional Specialized Tests Available</h3>
                <p className="text-muted-foreground mb-4">
                  Need specific testing beyond our packages? We offer individual tests and specialized analysis 
                  for unique situations or concerns.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Radon Testing</p>
                    <p className="text-accent font-bold">+R650</p>
                    <p className="text-xs text-muted-foreground">Radioactive gas detection</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Uranium Screen</p>
                    <p className="text-accent font-bold">+R850</p>
                    <p className="text-xs text-muted-foreground">Radioactive mineral test</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Legionella Test</p>
                    <p className="text-accent font-bold">+R950</p>
                    <p className="text-xs text-muted-foreground">Bacteria causing pneumonia</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Annual Monitoring</p>
                    <p className="text-accent font-bold">Save 20%</p>
                    <p className="text-xs text-muted-foreground">Quarterly testing package</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Test Your Water Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Droplets className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Borehole Water Testing is Essential
              </h2>
              <p className="text-muted-foreground">
                Clear water doesn't mean safe water. Professional testing is the only way to ensure your 
                borehole water is safe for drinking, cooking, and daily use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "Invisible Bacteria",
                  description: "E.coli and coliform bacteria are colorless, odorless, and tasteless but can cause serious illness. Testing detects these dangerous microorganisms before they affect your family's health.",
                  risk: "High Health Risk"
                },
                {
                  title: "Heavy Metal Contamination",
                  description: "Lead, arsenic, and mercury can leach into groundwater from natural sources or pollution. Long-term exposure causes severe health issues. Testing identifies metals at dangerous levels.",
                  risk: "Serious Long-term Impact"
                },
                {
                  title: "Nitrate Poisoning",
                  description: "Agricultural runoff causes elevated nitrates in groundwater. Extremely dangerous for infants (blue baby syndrome) and pregnant women. Common in farming areas.",
                  risk: "Critical for Infants"
                },
                {
                  title: "Water Hardness Issues",
                  description: "Excess calcium and magnesium damage appliances, pipes, and water heaters. Testing identifies hardness levels so you can install proper softening systems.",
                  risk: "Equipment Damage"
                },
                {
                  title: "pH Imbalance",
                  description: "Acidic water (low pH) corrodes pipes and leaches metals. Alkaline water (high pH) affects taste and causes buildup. Proper pH is essential for safe drinking water.",
                  risk: "Corrosion & Taste"
                },
                {
                  title: "Chemical Pollutants",
                  description: "Pesticides, herbicides, and industrial chemicals contaminate groundwater near agricultural or industrial areas. Testing screens for these harmful compounds.",
                  risk: "Cancer & Disease Risk"
                },
              ].map((reason, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg mb-3">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{reason.description}</p>
                  <div className="bg-red-50 dark:bg-red-950/20 px-3 py-2 rounded text-xs font-semibold text-red-600">
                    ⚠️ {reason.risk}
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-lg">
              <h4 className="font-bold mb-2">🏥 Health Authority Recommendation:</h4>
              <p className="text-sm text-muted-foreground">
                The South African Department of Water and Sanitation recommends testing borehole water at least 
                once per year, and more frequently (every 3-6 months) for boreholes near agricultural areas, 
                industrial zones, or where pregnant women and infants will consume the water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              How Our Water Testing Process Works
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Simple, professional, and accurate. We handle everything from sample collection to detailed 
              reporting and treatment recommendations.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "Step 1",
                  title: "Book Your Test",
                  description: "Call or WhatsApp to schedule your water test. We'll confirm your package selection and arrange a convenient time for sample collection. Most appointments available within 24-48 hours.",
                  time: "5 minutes",
                  included: ["Choose package", "Schedule appointment", "Confirm location", "Receive instructions"]
                },
                {
                  step: "Step 2",
                  title: "Professional Sample Collection",
                  description: "Our certified technician visits your property with sterile testing equipment. We collect samples using proper protocols to ensure accurate results. Quick, clean, and professional.",
                  time: "15-30 minutes",
                  included: ["Sterile collection bottles", "Proper sampling protocol", "Chain of custody documentation", "Collection receipt"]
                },
                {
                  step: "Step 3",
                  title: "SABS Laboratory Analysis",
                  description: "Samples are immediately transported to our SABS-certified partner laboratory. Advanced testing equipment analyzes your water for all parameters in your selected package.",
                  time: "24-72 hours",
                  included: ["SABS certified testing", "Quality control checks", "Multiple test runs", "Verification protocols"]
                },
                {
                  step: "Step 4",
                  title: "Detailed Report & Consultation",
                  description: "Receive comprehensive test results via email and hard copy. We schedule a consultation call to explain results, answer questions, and recommend treatment solutions if needed.",
                  time: "30 minutes",
                  included: ["Detailed written report", "SANS 241 compliance check", "Treatment recommendations", "Follow-up support"]
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
          </div>
        </div>
      </section>

      {/* Common Contaminants Warning */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-12 h-12 text-orange-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">⚠️ Common Borehole Water Contaminants in South Africa</h2>
                  <p className="text-muted-foreground mb-6">
                    Different regions face different water quality challenges. Here's what we commonly find in 
                    South African borehole water and how testing helps protect you.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { 
                        contaminant: "E.coli Bacteria", 
                        areas: "All regions - sewage leaks, livestock", 
                        health: "Severe gastro illness", 
                        solution: "UV sterilization" 
                      },
                      { 
                        contaminant: "Nitrates", 
                        areas: "Gauteng, Free State farming areas", 
                        health: "Blue baby syndrome, cancer", 
                        solution: "Reverse osmosis" 
                      },
                      { 
                        contaminant: "Iron & Manganese", 
                        areas: "East Rand, KZN coastal areas", 
                        health: "Staining, metallic taste", 
                        solution: "Iron filter system" 
                      },
                      { 
                        contaminant: "Hard Water (Calcium)", 
                        areas: "Pretoria, Northern Cape", 
                        health: "Appliance damage, scale buildup", 
                        solution: "Water softener" 
                      },
                      { 
                        contaminant: "High TDS/Salts", 
                        areas: "Western Cape, coastal regions", 
                        health: "Kidney stress, high blood pressure", 
                        solution: "RO filtration" 
                      },
                      { 
                        contaminant: "Low pH (Acidic)", 
                        areas: "Cape winelands, granite areas", 
                        health: "Metal leaching, corrosion", 
                        solution: "pH correction system" 
                      },
                      { 
                        contaminant: "Pesticides", 
                        areas: "Agricultural areas nationwide", 
                        health: "Long-term cancer risk", 
                        solution: "Carbon filtration + RO" 
                      },
                      { 
                        contaminant: "Fluoride (Excess)", 
                        areas: "Parts of Limpopo, North West", 
                        health: "Dental/bone fluorosis", 
                        solution: "Defluoridation system" 
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-background p-4 rounded-lg border border-muted">
                        <p className="font-semibold text-sm mb-2 text-red-600">{item.contaminant}</p>
                        <div className="space-y-1 text-xs">
                          <p className="text-muted-foreground">
                            <span className="font-semibold">Common in:</span> {item.areas}
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-semibold">Health risk:</span> {item.health}
                          </p>
                          <p className="text-green-600">
                            <span className="font-semibold">Treatment:</span> {item.solution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-background p-4 rounded-lg border-2 border-accent">
                    <p className="font-bold mb-2">✅ How Testing Protects You:</p>
                    <p className="text-sm">
                      Professional testing identifies exactly which contaminants are in YOUR water, so we can 
                      recommend the precise treatment system you need - not an expensive "one size fits all" 
                      solution. Save money and protect health with targeted treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Solutions Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Water Treatment Solutions Based on Test Results
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              If testing reveals contaminants, we design and install custom treatment systems to make your 
              water perfectly safe. All systems come with warranties and ongoing maintenance support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  system: "UV Sterilization",
                  price: "R4,500-R8,500",
                  treats: "E.coli, bacteria, viruses",
                  best: "All boreholes with bacteria",
                  features: ["99.99% kill rate", "No chemicals", "Low maintenance", "Annual lamp replacement"]
                },
                {
                  system: "Reverse Osmosis",
                  price: "R8,500-R15,000",
                  treats: "Nitrates, salts, heavy metals, TDS",
                  best: "Agricultural areas, high TDS",
                  features: ["Removes 95-99% contaminants", "Great tasting water", "Under-sink or whole house", "Filter changes 6-12 months"]
                },
                {
                  system: "Water Softener",
                  price: "R6,500-R12,000",
                  treats: "Hard water, calcium, magnesium",
                  best: "Pretoria, high hardness areas",
                  features: ["Protects appliances", "Softer skin & hair", "Automatic regeneration", "Salt refills every 2-3 months"]
                },
                {
                  system: "Iron Filter",
                  price: "R7,500-R14,000",
                  treats: "Iron, manganese, rust staining",
                  best: "East Rand, coastal boreholes",
                  features: ["Removes orange staining", "Improves taste", "Automatic backwash", "Low maintenance"]
                },
                {
                  system: "pH Correction",
                  price: "R5,500-R9,500",
                  treats: "Acidic water, low pH",
                  best: "Cape areas, granite regions",
                  features: ["Prevents corrosion", "Protects pipes", "Automatic dosing", "6-12 month refills"]
                },
                {
                  system: "Multi-Stage System",
                  price: "R15,000-R35,000",
                  treats: "Multiple contaminants",
                  best: "Complex water issues",
                  features: ["Custom designed", "Complete treatment", "Professional installation", "Comprehensive warranty"]
                },
              ].map((solution, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <Shield className="w-10 h-10 text-accent mb-3" />
                  <h3 className="font-bold text-lg mb-2">{solution.system}</h3>
                  <p className="text-2xl font-bold text-accent mb-3">{solution.price}</p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">TREATS:</p>
                      <p className="text-sm">{solution.treats}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">BEST FOR:</p>
                      <p className="text-sm">{solution.best}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex gap-2">
                        <CheckCircle2 className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-accent/5 border-l-4 border-accent p-6 rounded-lg">
              <h4 className="font-bold mb-2">💡 Smart Approach:</h4>
              <p className="text-sm text-muted-foreground">
                Always test BEFORE installing treatment systems. Many people waste thousands on unnecessary 
                equipment. Testing shows exactly what you need, potentially saving R10,000-R20,000 on 
                over-engineered solutions.
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
              Common Questions About Water Testing
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How often should I test my borehole water?",
                  a: "At minimum, test annually for basic safety (bacteria, pH, TDS). Test every 6 months if you have children, pregnant women, or immune-compromised individuals. Test immediately after new drilling, after heavy rains, if taste/smell changes, or if anyone gets sick. Agricultural areas should test quarterly."
                },
                {
                  q: "How much does borehole water testing cost in South Africa?",
                  a: "Basic safety testing starts at R850 (bacteria, pH, TDS). Complete analysis is R1,450 (includes minerals, nitrates, hardness). Comprehensive screening with heavy metals and pesticides is R2,850. All prices include sample collection, SABS lab analysis, and detailed reporting."
                },
                {
                  q: "Can I test the water myself with a home kit?",
                  a: "Home test strips are unreliable and can't detect dangerous bacteria or most contaminants. SABS-certified laboratory testing is the only way to accurately measure bacteria levels, heavy metals, and chemical pollutants. Home kits may miss critical health hazards."
                },
                {
                  q: "What does SANS 241 compliance mean?",
                  a: "SANS 241 is the South African National Standard for drinking water quality. It sets maximum limits for bacteria, chemicals, and minerals. Our reports clearly show if your water meets SANS 241 standards for safe drinking water, and what treatment is needed if it doesn't."
                },
                {
                  q: "My water looks clear - do I still need testing?",
                  a: "Absolutely! E.coli bacteria, nitrates, heavy metals like arsenic and lead, and many other dangerous contaminants are completely invisible, odorless, and tasteless. Crystal clear water can still cause serious illness. Testing is the ONLY way to confirm safety."
                },
                {
                  q: "How long do test results take?",
                  a: "Basic testing: 24-48 hours. Standard complete analysis: 48-72 hours. Premium comprehensive screening: 5-7 days (due to complex heavy metal and pesticide testing). We email preliminary results and follow up with detailed reports and consultation."
                },
                {
                  q: "What if my water fails the test?",
                  a: "We provide detailed treatment recommendations based on your specific contaminants. Most issues are easily fixed with proper treatment systems (UV sterilization, filtration, softening). We offer installation services and can have safe water flowing within days."
                },
                {
                  q: "Is testing required by law?",
                  a: "For domestic use, testing isn't legally required but is strongly recommended by health authorities. For commercial use (schools, restaurants, offices), regular testing may be required for health permits. Insurance companies increasingly require proof of safe water for liability coverage."
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
            <Flask className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Protect Your Family's Health Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't gamble with your water quality. Professional SABS-certified testing from R850 with results 
              in 24-48 hours. Book now and get peace of mind about your borehole water safety.
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
                Book Water Test
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
                <p className="font-semibold mb-1">SABS Certified Labs</p>
                <p className="text-xs text-muted-foreground">Accurate, reliable, professional testing</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">24-48 Hour Results</p>
                <p className="text-xs text-muted-foreground">Fast turnaround on all basic tests</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-muted">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-semibold mb-1">Treatment Included</p>
                <p className="text-xs text-muted-foreground">Detailed recommendations & support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
