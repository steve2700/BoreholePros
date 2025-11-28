import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Plumber Pretoria | Geyser & Drain Services | Borehole Pros",
  description:
    "Expert plumber in Pretoria. Geyser repair, drain cleaning, leak detection, burst pipes. Same-day service. Call 060 348 8268.",
  keywords: ["plumber pretoria", "pretoria plumbing", "geyser repair pretoria"],
}

export default function PlumberPretoriaPage() {
  return (
    <>
      <Hero
        title="Professional Plumber Pretoria | Expert Service"
        subtitle="Geyser Repair | Drain Cleaning | Leaks | Emergency"
        description="Expert plumber in Pretoria and Centurion. Geyser repair, drain cleaning, leak detection, emergency plumbing. Same-day service. Call 060 348 8268."
        imageSrc="/images/plumbing-emergency.jpg"
        cta={{
          primary: { text: "Call Plumber: 060 348 8268", href: "tel:0603488268" },
          secondary: { text: "Request Quote", href: "/contact" },
        }}
      />

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Plumber Pretoria & Centurion</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Pretoria and Centurion's residential and commercial properties deserve professional plumbing service.
                From routine geyser maintenance to emergency burst pipe repair, Borehole Pros provides expert solutions
                for all plumbing needs.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With 15+ years serving Pretoria region, we know local water systems and common plumbing issues. Our
                certified, insured plumbers complete jobs with quality workmanship and 12-month warranty on all repairs.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Services: geyser installation/repair, drain cleaning and unblocking, leak detection, burst pipe repair,
                toilet/tap repairs, emergency plumbing 24/7. Call 060 348 8268 for quote.
              </p>

              <h3 className="text-2xl font-bold mb-6">Pretoria Plumbing Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {[
                  { title: "Geyser Repair/Install", price: "ZAR 4,500 - 25,000" },
                  { title: "Drain Cleaning", price: "ZAR 1,500 - 6,000" },
                  { title: "Leak Detection", price: "ZAR 1,200 - 4,500" },
                  { title: "Burst Pipe Repair", price: "ZAR 3,500 - 12,000" },
                  { title: "Toilet Repair", price: "ZAR 800 - 3,500" },
                  { title: "Tap Repair/Replace", price: "ZAR 600 - 2,500" },
                ].map((service, idx) => (
                  <Card key={idx} className="p-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm">{service.title}</h4>
                      <span className="text-xs text-accent font-semibold">{service.price}</span>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-background p-8 rounded-lg mb-8">
                <h3 className="font-bold mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/emergency-plumber-johannesburg"
                          className="text-accent hover:underline font-semibold"
                        >
                          Emergency Plumber
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/borehole-drilling-prices-pretoria"
                          className="text-accent hover:underline font-semibold"
                        >
                          Borehole Drilling Prices
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/pretoria" className="text-accent hover:underline font-semibold">
                          All Pretoria Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-accent hover:underline font-semibold">
                          Request Quote
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <Card className="p-6 bg-accent/10 border-2 border-accent mb-6">
                  <h3 className="font-bold mb-4">Get a Quote</h3>
                  <a
                    href="tel:0603488268"
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-bold py-4 rounded-lg hover:opacity-90 transition-opacity mb-3"
                  >
                    <Phone className="w-6 h-6" />
                    060 348 8268
                  </a>
                </Card>

                <Card className="p-6 bg-muted">
                  <h3 className="font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>15+ years experience</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Certified technicians</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Same-day service</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>12-month warranty</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Professional Plumber in Pretoria & Centurion"
        description="Same-day service for all plumbing needs."
        primaryText="Call: 060 348 8268"
        primaryHref="tel:0603488268"
        secondaryText="Get Quote"
        secondaryHref="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Professional Plumber Pretoria - Borehole Pros",
            url: "https://boreholepros.co.za/plumber-pretoria",
            telephone: "060-348-8268",
            areaServed: [
              { "@type": "City", name: "Pretoria" },
              { "@type": "City", name: "Centurion" },
            ],
          }),
        }}
      />
    </>
  )
}
