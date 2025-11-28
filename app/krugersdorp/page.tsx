import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Krugersdorp | Professional Installation | Borehole Pros",
  description:
    "Expert borehole drilling services in Krugersdorp. Installation, testing & maintenance. Free assessment. Call 060 348 8268.",
  keywords: ["borehole drilling krugersdorp", "krugersdorp borehole", "borehole installation krugersdorp"],
  alternates: {
    canonical: "https://boreholepros.co.za/krugersdorp",
  },
}

export default function KrugersdorpPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Borehole Drilling in Krugersdorp</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Professional borehole drilling and plumbing services serving Krugersdorp and surrounding areas. Fast
            installation. 24/7 emergency response.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:0603488268" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold">
              Free Quote
            </a>
            <Link href="/contact" className="border-2 border-primary px-8 py-3 rounded-lg font-semibold">
              Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Our Borehole Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg mb-3">Borehole Drilling</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Complete drilling service with expert assessment, permits, installation and water testing.
              </p>
              <Link href="/borehole-drilling" className="text-accent hover:underline text-sm font-semibold">
                Learn more →
              </Link>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg mb-3">Maintenance</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Annual servicing, repairs, and system maintenance to keep your borehole running optimally.
              </p>
              <Link href="/borehole-maintenance" className="text-accent hover:underline text-sm font-semibold">
                Service info →
              </Link>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold text-lg mb-3">Emergency Repairs</h3>
              <p className="text-muted-foreground text-sm mb-4">
                24/7 emergency service for pump failures and system breakdowns. Rapid response guaranteed.
              </p>
              <a href="tel:0603488268" className="text-accent hover:underline text-sm font-semibold">
                Emergency →
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8">Why Krugersdorp Residents Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
              <h3 className="font-bold mb-2">Local Experts</h3>
              <p className="text-sm text-muted-foreground">15+ years serving Krugersdorp. Deep local knowledge.</p>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
              <h3 className="font-bold mb-2">Fast Service</h3>
              <p className="text-sm text-muted-foreground">Same-day quotes. 2-3 day installation. Quick response.</p>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
              <h3 className="font-bold mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">12-month warranty. Professional insurance coverage.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Get Your Krugersdorp Borehole Quote</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Free assessment. Professional installation. Competitive pricing.
          </p>
          <a
            href="tel:0603488268"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition"
          >
            Call 060 348 8268
          </a>
        </div>
      </section>

      <section className="py-12 bg-background border-t">
        <div className="container-max text-center">
          <p className="text-sm mb-4">Related services:</p>
          <div className="flex gap-4 flex-wrap justify-center text-sm">
            <Link href="/johannesburg" className="text-accent hover:underline">
              Johannesburg
            </Link>
            <Link href="/borehole-drilling" className="text-accent hover:underline">
              Borehole Drilling
            </Link>
            <Link href="/borehole-drilling-cost" className="text-accent hover:underline">
              Cost Guide
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
            name: "Borehole Pros Krugersdorp",
            telephone: "060-348-8268",
            serviceType: "Borehole Drilling",
            areaServed: { "@type": "City", name: "Krugersdorp" },
          }),
        }}
      />
    </>
  )
}
