import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Midrand | Expert Installation | Borehole Pros",
  description:
    "Professional borehole drilling in Midrand. Complete installation, testing & maintenance. Same-day quotes. Call 060 348 8268.",
  keywords: ["borehole drilling midrand", "midrand borehole installation", "borehole services midrand"],
  alternates: {
    canonical: "https://boreholepros.co.za/midrand",
  },
}

export default function MidrandPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Borehole Drilling in Midrand</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Expert borehole drilling for Midrand's growing community. Professional installation, maintenance & emergency
            repairs. 1000+ projects completed.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:0603488268" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold">
              Get Quote
            </a>
            <Link href="/contact" className="border-2 border-primary px-8 py-3 rounded-lg font-semibold">
              Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Complete Borehole Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="font-bold text-lg mb-4">Drilling & Install</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Complete service from assessment through installation. Professional, insured, warranted.
              </p>
              <Link href="/borehole-drilling" className="text-accent hover:underline text-sm font-semibold">
                Details →
              </Link>
            </Card>
            <Card className="p-8">
              <h3 className="font-bold text-lg mb-4">Maintenance</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Annual servicing and repairs. Keep your system running 20+ years maintenance-free.
              </p>
              <Link href="/borehole-maintenance" className="text-accent hover:underline text-sm font-semibold">
                Service →
              </Link>
            </Card>
            <Card className="p-8">
              <h3 className="font-bold text-lg mb-4">Emergency</h3>
              <p className="text-muted-foreground text-sm mb-6">
                24/7 emergency repairs. Same-day fixes for pump failures and system issues.
              </p>
              <a href="tel:0603488268" className="text-accent hover:underline text-sm font-semibold">
                Call Now →
              </a>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-8">Why Midrand Businesses & Homes Choose Us</h2>
          <div className="space-y-4">
            {[
              { title: "15+ Years Experience", desc: "Trusted by thousands of Midrand families" },
              { title: "Same-Day Quotes", desc: "Fast response and professional assessment" },
              { title: "12-Month Warranty", desc: "Complete protection on all work" },
              { title: "24/7 Emergency", desc: "Available anytime you need us" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 bg-background p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Ready to Install Your Midrand Borehole?</h2>
          <p className="text-lg text-muted-foreground mb-8">Call for free assessment and competitive quote today.</p>
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
            name: "Borehole Pros Midrand",
            serviceType: "Borehole Drilling",
            telephone: "060-348-8268",
            areaServed: { "@type": "City", name: "Midrand" },
          }),
        }}
      />
    </>
  )
}
