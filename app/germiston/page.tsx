import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Droplets } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Germiston | Professional Services | Borehole Pros",
  description:
    "Expert borehole drilling in Germiston. Installation, maintenance & emergency repairs. Serving Germiston and surroundings. Call 060 348 8268 for quote.",
  keywords: ["borehole drilling germiston", "germiston borehole", "borehole services germiston"],
  alternates: {
    canonical: "https://boreholepros.co.za/germiston",
  },
}

export default function GermistonPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Borehole Drilling in Germiston</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Professional borehole drilling and plumbing services in Germiston. Expert installation, water testing,
            maintenance & 24/7 emergency repairs.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Free site assessment. Competitive pricing. 1000+ boreholes installed across South Africa.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:0603488268" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold">
              Call for Quote
            </a>
            <Link href="/contact" className="border-2 border-primary px-8 py-3 rounded-lg font-semibold">
              Site Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Borehole Services in Germiston</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-accent pl-6">
              <Droplets className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-bold mb-3">Drilling & Installation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete borehole drilling with expert site assessment, permits, pump installation and water quality
                testing.
              </p>
              <Link href="/borehole-drilling" className="text-accent hover:underline text-sm font-semibold">
                Details →
              </Link>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <Zap className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-bold mb-3">Maintenance & Repairs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Annual servicing, pump repairs, and system upgrades. Prevent costly breakdowns with preventive
                maintenance.
              </p>
              <Link href="/borehole-maintenance" className="text-accent hover:underline text-sm font-semibold">
                Service →
              </Link>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <CheckCircle2 className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-bold mb-3">Emergency Service</h3>
              <p className="text-sm text-muted-foreground mb-4">
                24/7 emergency repairs for failed pumps and system breakdowns. Rapid response, same-day fixes.
              </p>
              <a href="tel:0603488268" className="text-accent hover:underline text-sm font-semibold">
                Emergency →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Pricing for Germiston</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8">
              <h3 className="font-bold text-lg mb-2">Shallow Borehole</h3>
              <p className="text-xs text-muted-foreground mb-4">15-50m depth</p>
              <p className="text-3xl font-bold text-accent mb-4">ZAR 8,000-12,000</p>
              <p className="text-xs">Perfect for high water table areas. Quick installation.</p>
            </Card>
            <Card className="p-8 border-2 border-accent">
              <p className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold mb-4">
                MOST POPULAR
              </p>
              <h3 className="font-bold text-lg mb-2">Standard Borehole</h3>
              <p className="text-xs text-muted-foreground mb-4">50-85m depth</p>
              <p className="text-3xl font-bold text-accent mb-4">ZAR 12,000-16,000</p>
              <p className="text-xs">Most common in Germiston. Reliable long-term supply.</p>
            </Card>
            <Card className="p-8">
              <h3 className="font-bold text-lg mb-2">Deep Borehole</h3>
              <p className="text-xs text-muted-foreground mb-4">85-120m+ depth</p>
              <p className="text-3xl font-bold text-accent mb-4">ZAR 16,000-24,000+</p>
              <p className="text-xs">For deeper water tables. Specialist equipment.</p>
            </Card>
          </div>

          <div className="bg-background p-8 rounded-lg">
            <h3 className="font-bold text-lg mb-6">What's Included in Every Quote</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Professional site assessment</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Permit application help</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Professional drilling</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Water quality testing</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Pump system install</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">12-month warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Why Germiston Needs Boreholes</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold mb-2">Water Restrictions</h3>
              <p className="text-muted-foreground text-sm">
                Germiston frequently faces water restrictions. A borehole ensures independent water supply for your home
                or business regardless of municipal restrictions.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold mb-2">Cost Savings</h3>
              <p className="text-muted-foreground text-sm">
                Save 60-80% on monthly water bills. Average payback period 7-12 months. Ongoing savings for 20+ years.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold mb-2">Property Value</h3>
              <p className="text-muted-foreground text-sm">
                Properties with boreholes sell for 8-12% more. Valuable feature in water-stressed areas.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold mb-2">Business Protection</h3>
              <p className="text-muted-foreground text-sm">
                Farms, gardens, and businesses need reliable water. Boreholes ensure consistent supply for irrigation,
                livestock, and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Get Your Germiston Borehole Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Free assessment. Competitive pricing. Professional installation. Same-day quotes available.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center">
            <a
              href="tel:0603488268"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-center"
            >
              Call 060 348 8268
            </a>
            <Link href="/contact" className="border-2 border-primary px-8 py-4 rounded-lg font-bold text-center">
              Request Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background border-t">
        <div className="container-max">
          <h3 className="font-semibold mb-6 text-center">Explore Other Services</h3>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/johannesburg" className="text-accent hover:underline">
              Johannesburg
            </Link>
            <Link href="/borehole-drilling" className="text-accent hover:underline">
              Borehole Drilling
            </Link>
            <Link href="/borehole-drilling-cost" className="text-accent hover:underline">
              Cost Guide
            </Link>
            <Link href="/emergency-plumbing" className="text-accent hover:underline">
              Emergency Plumbing
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Borehole Pros Germiston",
            serviceType: "Borehole Drilling",
            areaServed: [{ "@type": "City", name: "Germiston" }],
            telephone: "060-348-8268",
            url: "https://boreholepros.co.za/germiston",
            priceRange: "ZAR",
          }),
        }}
      />
    </>
  )
}
