import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling Kempton Park | Expert Services | Borehole Pros",
  description:
    "Professional borehole drilling in Kempton Park. Complete installation, testing & maintenance. Free quotes. Call 060 348 8268.",
  keywords: ["borehole drilling kempton park", "kempton park borehole", "borehole installation kempton park"],
  alternates: {
    canonical: "https://boreholepros.co.za/kempton-park",
  },
}

export default function KemptonParkPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Borehole Drilling in Kempton Park</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Expert borehole installation, maintenance & emergency repairs in Kempton Park. Over 1000+ successful
            projects. Same-day quotes available.
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
          <h2 className="text-3xl font-bold mb-12">Professional Borehole Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <h3 className="font-bold text-xl mb-4">Drilling</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Complete drilling with site assessment, permits, installation and testing. ZAR 12,000-16,000.
              </p>
              <Link href="/borehole-drilling" className="text-accent hover:underline text-sm font-semibold">
                Details →
              </Link>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="font-bold text-xl mb-4">Maintenance</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Annual servicing and repairs keep your borehole running 20+ years trouble-free.
              </p>
              <Link href="/borehole-maintenance" className="text-accent hover:underline text-sm font-semibold">
                Service →
              </Link>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="font-bold text-xl mb-4">Emergency</h3>
              <p className="text-sm text-muted-foreground mb-6">
                24/7 emergency repairs for pump failures and system issues. Rapid response.
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
          <h2 className="text-3xl font-bold mb-8">Why Choose Borehole Pros?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">15+ Years Experience</h3>
                  <p className="text-sm text-muted-foreground">Trusted borehole specialists</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Same-Day Quotes</h3>
                  <p className="text-sm text-muted-foreground">Fast assessment and pricing</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">12-Month Warranty</h3>
                  <p className="text-sm text-muted-foreground">Complete peace of mind</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">24/7 Emergency</h3>
                  <p className="text-sm text-muted-foreground">Always available for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-8">Ready for Your Kempton Park Borehole?</h2>
          <a
            href="tel:0603488268"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition"
          >
            Call 060 348 8268
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Borehole Pros Kempton Park",
            telephone: "060-348-8268",
            serviceType: "Borehole Drilling",
            areaServed: { "@type": "City", name: "Kempton Park" },
          }),
        }}
      />
    </>
  )
}
