import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling East Rand | Professional Installation | Borehole Pros",
  description:
    "Expert borehole drilling services in East Rand. Fast installation, water testing & maintenance. Serving Daveyton, Boksburg, Springs. Call 060 348 8268 for same-day quote.",
  keywords: [
    "borehole drilling east rand",
    "borehole installation east rand",
    "borehole services east rand",
    "east rand borehole drilling",
    "borehole drilling springs",
    "borehole drilling boksburg",
  ],
  alternates: {
    canonical: "https://boreholepros.co.za/east-rand",
  },
}

export default function EastRandPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-max">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Borehole Drilling in East Rand</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Professional borehole drilling services serving East Rand, Boksburg, Springs, Daveyton, and surrounding
              areas. Expert installation, maintenance, and water solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Same-day free quotes. Experienced team. Over 1000+ boreholes installed. Available 24/7 for emergencies.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="tel:0603488268"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Call for Free Quote
              </a>
              <Link
                href="/contact"
                className="border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition"
              >
                Site Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Why East Rand Residents Choose Borehole Pros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Local Expertise</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We understand East Rand's unique geology and water table conditions. Springs area requires specialized
                drilling techniques we've perfected over 15+ years.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Familiar with local water patterns
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Knowledge of permit requirements
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Quick response times (30-60 mins)
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-accent">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Service</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Same-day quotes and rapid installation scheduling. Most East Rand projects completed within 3-5 business
                days from assessment to handover.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Same-day free assessment
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Fast turnaround on permits
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Quick installation (2-3 days)
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Certified & Insured</h3>
              <p className="text-sm text-muted-foreground mb-4">
                All work backed by insurance, warranties, and professional certifications. Your investment is protected
                from start to finish.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Fully insured operations
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  12-month warranty included
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Professional certifications
                </li>
              </ul>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-12">Our Borehole Services in East Rand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold mb-4">Borehole Drilling & Installation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Complete borehole drilling service from site assessment to pump installation. We handle all permits and
                ensure water quality testing. Typical costs ZAR 12,500-16,500 for East Rand standard boreholes (50-85m
                depth).
              </p>
              <Link href="/borehole-drilling" className="text-accent hover:underline text-sm font-semibold">
                Learn more about drilling →
              </Link>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold mb-4">Borehole Maintenance & Repair</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Annual servicing, pump repairs, filter replacement, and system diagnostics. Prevent costly breakdowns
                with regular maintenance. We service boreholes of all ages and brands.
              </p>
              <Link href="/borehole-maintenance" className="text-accent hover:underline text-sm font-semibold">
                Maintenance services →
              </Link>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold mb-4">Water Testing & Analysis</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Professional laboratory water quality testing. Ensures your borehole water is safe for drinking,
                gardening, and livestock. Results certified and documented for compliance.
              </p>
              <Link href="/water-testing" className="text-accent hover:underline text-sm font-semibold">
                Water testing info →
              </Link>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold mb-4">Emergency Borehole Repairs</h3>
              <p className="text-muted-foreground text-sm mb-4">
                24/7 emergency service for failed pumps, burst pipes, or system breakdowns. Call 060 348 8268 anytime.
                Rapid response and same-day repairs in most cases.
              </p>
              <Link href="/emergency-plumbing" className="text-accent hover:underline text-sm font-semibold">
                Emergency services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12">Service Areas in East Rand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Boksburg",
              "Springs",
              "Daveyton",
              "Brakpan",
              "Duncanville",
              "Duduza",
              "Kwa-Guqa",
              "Primrose",
              "Benoni",
              "Tokolosko",
              "Etwatwa",
              "Tembisa",
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-background p-6 rounded-lg text-center border border-border hover:border-accent transition"
              >
                <p className="font-semibold">{area}</p>
                <p className="text-xs text-muted-foreground mt-2">Serving this area</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Borehole Drilling Costs in East Rand</h2>
          <div className="space-y-6 mb-12">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold mb-2">Shallow Borehole (15-50m)</h3>
              <p className="text-2xl font-bold text-accent mb-2">ZAR 8,000 - 12,000</p>
              <p className="text-muted-foreground text-sm">
                Ideal for high water table areas like Primrose and Daveyton. Fast installation (1-2 days).
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold mb-2">Standard Borehole (50-85m)</h3>
              <p className="text-2xl font-bold text-accent mb-2">ZAR 12,500 - 16,500</p>
              <p className="text-muted-foreground text-sm">
                Most common in East Rand. Typical installation 2-3 days. Reliable long-term water supply.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold mb-2">Deep Borehole (85-120m+)</h3>
              <p className="text-2xl font-bold text-accent mb-2">ZAR 17,000 - 24,000+</p>
              <p className="text-muted-foreground text-sm">
                For areas with deeper water tables. Requires specialized equipment. 3-4 days installation.
              </p>
            </div>
          </div>

          <div className="bg-accent/10 border-2 border-accent p-8 rounded-lg mb-12">
            <h3 className="font-bold text-lg mb-4">What's Included in Our Quote?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Professional site assessment</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Permit application assistance</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Complete drilling operation</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Water quality testing</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Pump & system installation</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">12-month warranty & support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Why East Rand Needs Boreholes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Water Restrictions & Load-Shedding</h3>
              <p className="text-muted-foreground mb-4">
                East Rand residents face frequent water restrictions and power outages. A borehole provides independent
                water supply regardless of municipal restrictions or grid failures. Stay water-secure year-round.
              </p>
              <Link href="/borehole-drilling-cost" className="text-accent hover:underline text-sm font-semibold">
                See cost savings potential →
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Mining History & Water Quality</h3>
              <p className="text-muted-foreground mb-4">
                Historic mining in the East Rand area affects groundwater. Our water testing ensures borehole water
                meets safety standards. We know the specific geological conditions of this region.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Growing Property Values</h3>
              <p className="text-muted-foreground mb-4">
                Homes with boreholes in East Rand sell for 8-12% more. Independent water supply is a major selling
                feature in water-stressed areas. Invest in your property's future value.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Agricultural & Business Use</h3>
              <p className="text-muted-foreground mb-4">
                Farms, gardens, and small businesses need reliable water year-round. Boreholes provide cost-effective
                water for irrigation, livestock, and industrial processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions - East Rand</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">What's the water table depth in East Rand?</h3>
              <p className="text-sm text-muted-foreground">
                Average water table in East Rand is 50-85 meters. Areas like Primrose have shallower tables (35-50m),
                while rural sections can be 90-120m. We conduct free site assessment to determine exact depth for your
                property.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Do I need a permit to drill in East Rand?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, Ekurhuleni Metropolitan Municipality requires drilling permits. We handle all permit applications -
                you just need to approve the application. Fast turnaround typically 5-7 business days.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I use borehole water for drinking?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, with proper testing and treatment if needed. Our water quality testing ensures safety. Some water
                may need basic filtration. Discuss treatment options during your free assessment.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How quickly can you install in East Rand?</h3>
              <p className="text-sm text-muted-foreground">
                Once permits are approved, installation takes 2-3 days for standard boreholes. Assessment to fully
                operational typically 10-14 business days. Emergency repairs available 24/7.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Do you service old boreholes?</h3>
              <p className="text-sm text-muted-foreground">
                We repair, maintain, and upgrade existing boreholes regardless of age or original contractor. Many East
                Rand residents use us to revive old boreholes with new pumps and systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready for Your East Rand Borehole?</h2>
          <p className="text-lg mb-8 opacity-90">
            Free assessment, competitive pricing, and professional installation. Available in all East Rand suburbs.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center">
            <a
              href="tel:0603488268"
              className="bg-background text-primary px-8 py-4 rounded-lg font-bold hover:opacity-90 transition text-center"
            >
              Call 060 348 8268
            </a>
            <Link
              href="/contact"
              className="border-2 border-accent-foreground px-8 py-4 rounded-lg font-bold hover:bg-accent-foreground hover:text-accent transition text-center"
            >
              Request Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container-max">
          <h3 className="font-semibold mb-6 text-center">Other Borehole Services Nearby</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              { text: "Johannesburg", href: "/johannesburg" },
              { text: "Pretoria", href: "/pretoria" },
              { text: "Germiston", href: "/germiston" },
              { text: "Borehole Drilling", href: "/borehole-drilling" },
              { text: "Borehole Costs", href: "/borehole-drilling-cost" },
              { text: "Emergency Repairs", href: "/emergency-plumbing" },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="text-accent hover:underline">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Borehole Pros - East Rand",
            description: "Professional borehole drilling services in East Rand, Boksburg, Springs",
            image: "/og-image.jpg",
            priceRange: "ZAR",
            areaServed: {
              "@type": "City",
              name: "East Rand",
            },
            telephone: "060-348-8268",
            url: "https://boreholepros.co.za/east-rand",
            serviceType: "Borehole Drilling",
            address: {
              "@type": "PostalAddress",
              addressCountry: "ZA",
              addressRegion: "East Rand",
            },
          }),
        }}
      />
    </>
  )
}
