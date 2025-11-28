import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Edenvale | Expert Installation | Borehole Pros",
  description:
    "Professional borehole drilling in Edenvale. Installation, maintenance & repairs. Serving Edenvale and surrounding areas. Free quotes. Call 060 348 8268.",
  keywords: [
    "borehole drilling edenvale",
    "borehole installation edenvale",
    "edenvale borehole",
    "borehole services edenvale",
  ],
  alternates: {
    canonical: "https://boreholepros.co.za/edenvale",
  },
}

export default function EdenvalePage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Borehole Drilling in Edenvale</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Expert borehole drilling and water solutions in Edenvale. Professional installation, testing, and
              maintenance. Over 1000+ boreholes drilled.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="tel:0603488268"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Free Quote
              </a>
              <Link
                href="/contact"
                className="border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition"
              >
                Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Borehole Services for Edenvale Residents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold mb-4">Professional Drilling</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Complete borehole drilling with site assessment, permits, installation and water testing. Serving
                Edenvale with 50-80m standard boreholes. Cost: ZAR 12,000-16,000.
              </p>
              <Link href="/borehole-drilling" className="text-accent hover:underline text-sm font-semibold">
                Drilling details →
              </Link>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold mb-4">Maintenance & Repairs</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Annual servicing, pump repairs, filter replacement. Prevent expensive breakdowns with regular
                maintenance. All boreholes serviced.
              </p>
              <Link href="/borehole-maintenance" className="text-accent hover:underline text-sm font-semibold">
                Maintenance services →
              </Link>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Why Edenvale Residents Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h4 className="font-bold mb-3">Local Expertise</h4>
              <p className="text-sm text-muted-foreground">
                Deep knowledge of Edenvale geology and water patterns. 15+ years serving this area.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold mb-3">Fast Installation</h4>
              <p className="text-sm text-muted-foreground">
                Same-day quotes. Typical installation 2-3 days. 24/7 emergency response.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold mb-3">Full Warranty</h4>
              <p className="text-sm text-muted-foreground">
                12-month warranty. Professional insurance. Complete peace of mind.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Edenvale Borehole Costs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-2">Shallow</h3>
              <p className="text-accent text-2xl font-bold mb-2">ZAR 8,000-12,000</p>
              <p className="text-xs text-muted-foreground">15-50m depth</p>
            </Card>
            <Card className="p-6 border-2 border-accent">
              <h3 className="font-bold mb-2">Standard</h3>
              <p className="text-accent text-2xl font-bold mb-2">ZAR 12,000-16,000</p>
              <p className="text-xs text-muted-foreground">50-80m depth</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2">Deep</h3>
              <p className="text-accent text-2xl font-bold mb-2">ZAR 16,000-22,000+</p>
              <p className="text-xs text-muted-foreground">80-120m+ depth</p>
            </Card>
          </div>
          <div className="mt-12 bg-background p-8 rounded-lg">
            <h3 className="font-bold mb-4">What's Included</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Site assessment
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Permit handling
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Professional drilling
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Water testing
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                Pump installation
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                12-month warranty
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Get Your Edenvale Borehole Quote</h2>
          <p className="text-lg text-muted-foreground mb-8">Free assessment. No obligation. Same-day response.</p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a href="tel:0603488268" className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold">
              Call 060 348 8268
            </a>
            <Link href="/contact" className="border-2 border-primary px-8 py-4 rounded-lg font-bold">
              Contact Form
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container-max text-center">
          <p className="text-sm mb-6">Related services and locations:</p>
          <div className="flex gap-6 flex-wrap justify-center text-sm">
            <Link href="/johannesburg" className="text-accent hover:underline">
              Johannesburg Borehole
            </Link>
            <Link href="/borehole-drilling" className="text-accent hover:underline">
              Borehole Drilling
            </Link>
            <Link href="/emergency-plumbing" className="text-accent hover:underline">
              Emergency Services
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
            name: "Borehole Pros Edenvale",
            serviceType: "Borehole Drilling",
            areaServed: { "@type": "City", name: "Edenvale" },
            telephone: "060-348-8268",
            url: "https://boreholepros.co.za/edenvale",
          }),
        }}
      />
    </>
  )
}
