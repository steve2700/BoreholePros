import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Fourways | Professional Installation | Borehole Pros",
  description:
    "Expert borehole drilling services in Fourways. Fast installation, water testing & maintenance. Serving all suburbs. Free quote. Call 060 348 8268.",
  keywords: ["borehole drilling fourways", "fourways borehole installation", "borehole services fourways"],
  alternates: {
    canonical: "https://boreholepros.co.za/fourways",
  },
}

export default function FourwaysPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Borehole Drilling in Fourways</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional borehole drilling for Fourways residents. Expert installation, water testing & full
            maintenance. 1000+ projects completed.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:0603488268" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold">
              Free Quote
            </a>
            <Link href="/contact" className="border-2 border-primary px-8 py-3 rounded-lg font-semibold">
              Get Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Borehole Solutions for Fourways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Drilling & Installation</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Complete service from assessment to setup. ZAR 12,000-16,000 for standard boreholes in Fourways.
              </p>
              <Link href="/borehole-drilling" className="text-accent hover:underline text-sm font-semibold">
                Learn more →
              </Link>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Maintenance</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Annual servicing and repairs. Keep your borehole running smoothly for 20+ years.
              </p>
              <Link href="/borehole-maintenance" className="text-accent hover:underline text-sm font-semibold">
                Service details →
              </Link>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Water Testing</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Professional lab analysis. Ensure your water is safe and compliant.
              </p>
              <Link href="/water-testing" className="text-accent hover:underline text-sm font-semibold">
                Testing info →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-8">Why Choose Borehole Pros?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold">15+ Years Experience</h3>
                  <p className="text-sm text-muted-foreground">Trusted by thousands of Fourways families</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Same-Day Quotes</h3>
                  <p className="text-sm text-muted-foreground">Fast response and quick assessment</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold">12-Month Warranty</h3>
                  <p className="text-sm text-muted-foreground">Full protection on all installations</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold">24/7 Emergency Service</h3>
                  <p className="text-sm text-muted-foreground">Always available when you need us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Drill?</h2>
          <p className="text-lg text-muted-foreground mb-8">Call for your free Fourways borehole assessment today.</p>
          <a
            href="tel:0603488268"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition"
          >
            060 348 8268
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Borehole Pros Fourways",
            serviceType: "Borehole Drilling",
            areaServed: { "@type": "City", name: "Fourways" },
            telephone: "060-348-8268",
          }),
        }}
      />
    </>
  )
}
