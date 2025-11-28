import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Borehole Drilling Services SA | Borehole Pros",
  description:
    "Expert borehole drilling across South Africa. Complete drilling, installation & testing. Competitive pricing. Free site assessment. Call 060 348 8268.",
  keywords: [
    "borehole drilling",
    "borehole drilling south africa",
    "water borehole",
    "borehole installation",
    "borehole drilling cost",
  ],
}

const features: ServiceItem[] = [
  {
    title: "Expert Site Assessment",
    description: "We conduct professional site assessments to determine optimal drilling depth and water quality.",
    href: "/contact",
  },
  {
    title: "Modern Drilling Equipment",
    description: "State-of-the-art drilling rigs and equipment for efficient, safe drilling operations.",
    href: "/contact",
  },
  {
    title: "Water Testing",
    description: "Complete water quality testing to ensure safety and suitability for your needs.",
    href: "/contact",
  },
  {
    title: "Installation & Setup",
    description: "Full installation of pump systems and all accessories for immediate use.",
    href: "/contact",
  },
]

export default function BoreholeDrillingPage() {
  return (
    <>
      <Hero
        title="Professional Borehole Drilling Services"
        subtitle="Expert Water Solutions Across South Africa"
        description="Complete borehole drilling with site assessment, installation, and water testing. Same-day quotes available. Serving 32 cities nationwide."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Drill a Borehole?</h2>
              <ul className="space-y-4">
                {[
                  "Reduce water costs by 60-80% annually",
                  "Independent water supply during restrictions",
                  "Perfect for gardens, livestock, and homes",
                  "Long-term investment (20+ year lifespan)",
                  "Eco-friendly water solution",
                  "Increase property value",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Borehole Drilling Process</h3>
              <ol className="space-y-4 text-sm">
                {[
                  { step: "1. Site Assessment", desc: "We evaluate your property and geological conditions" },
                  { step: "2. Permit Application", desc: "Handle all necessary council permits" },
                  { step: "3. Drilling", desc: "Professional drilling with modern equipment" },
                  { step: "4. Installation", desc: "Pump and system installation" },
                  { step: "5. Testing", desc: "Water quality testing and certification" },
                  { step: "6. Handover", desc: "Training on operation and maintenance" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <div className="font-semibold text-primary">{item.step}</div>
                    <div className="text-muted-foreground">{item.desc}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Borehole Drilling Services"
        description="Complete solutions from assessment to installation"
        services={features}
        columns={4}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Borehole Drilling Cost Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-2 text-lg">Shallow Borehole</h3>
              <p className="text-muted-foreground text-sm mb-4">15-50 meters</p>
              <p className="text-2xl font-bold text-accent mb-4">ZAR 8,000-12,000</p>
              <p className="text-sm">Urban areas, high water table</p>
            </Card>
            <Card className="p-6 border-2 border-accent">
              <h3 className="font-bold mb-2 text-lg">Standard Borehole</h3>
              <p className="text-muted-foreground text-sm mb-4">50-100 meters</p>
              <p className="text-2xl font-bold text-accent mb-4">ZAR 12,000-18,000</p>
              <p className="text-sm">Most common installation</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2 text-lg">Deep Borehole</h3>
              <p className="text-muted-foreground text-sm mb-4">100-150+ meters</p>
              <p className="text-2xl font-bold text-accent mb-4">ZAR 18,000-30,000+</p>
              <p className="text-sm">Rural areas, specialized rigs</p>
            </Card>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Get Your Free Borehole Site Assessment Today"
        description="We'll evaluate your property and provide an exact quote. No obligation. Same-day service available in most areas."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Borehole Drilling",
            provider: {
              "@type": "Organization",
              name: "Borehole Pros",
              telephone: "060-348-8268",
            },
            areaServed: {
              "@type": "Country",
              name: "South Africa",
            },
            priceRange: "ZAR",
          }),
        }}
      />
    </>
  )
}
