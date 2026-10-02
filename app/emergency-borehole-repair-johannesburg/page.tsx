import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { Phone, CheckCircle2, AlertCircle, MapPin } from "lucide-react"

const PHONE_HREF = "tel:0603488268"
const WHATSAPP_HREF =
  "https://wa.me/27603488268?text=Hi%20Borehole%20Pros!%20My%20borehole%20needs%20urgent%20repair."

export const metadata: Metadata = {
  title: "24/7 Emergency Borehole Repair Gauteng | Borehole Pros",
  description:
    "Borehole pump failed or no water? 24/7 emergency borehole repair across Gauteng: Johannesburg, Pretoria, Sandton, Midrand & Centurion. Call 060 348 8268.",
  keywords: [
    "emergency borehole repair gauteng",
    "borehole repair gauteng",
    "borehole pump repair gauteng",
    "emergency borehole repair johannesburg",
    "emergency borehole repair pretoria",
    "borehole not working",
    "borehole no water",
  ],
}

const serviceAreas = [
  { name: "Johannesburg", href: "/johannesburg" },
  { name: "Sandton", href: "/sandton" },
  { name: "Midrand", href: "/midrand" },
  { name: "Centurion", href: "/centurion" },
  { name: "Fourways", href: "/fourways" },
  { name: "Pretoria" },
  { name: "Randburg" },
  { name: "Roodepoort" },
  { name: "Krugersdorp" },
  { name: "Soweto" },
  { name: "Kempton Park" },
  { name: "Benoni" },
  { name: "Boksburg" },
  { name: "Germiston" },
  { name: "Alberton" },
  { name: "Springs" },
  { name: "Vereeniging" },
  { name: "Hartbeespoort" },
  { name: "Brits" },
  { name: "Magaliesburg" },
]

const faqs = [
  {
    q: "How fast can you get to my borehole?",
    a: "In Johannesburg, Sandton, Midrand, Centurion and Pretoria we typically respond within 30-90 minutes. Outskirts, smallholdings and farm areas are usually same-day. Call us for an arrival estimate for your exact location.",
  },
  {
    q: "Do you only work in Johannesburg?",
    a: "No. We repair boreholes across all of Gauteng, including Pretoria, the East Rand, West Rand and Vaal, plus outlying areas such as Hartbeespoort and Brits.",
  },
  {
    q: "My pump runs but there is no water. What should I do?",
    a: "Switch the pump off straight away. Running it dry can burn out the motor. Common causes are a failed pump, a blocked screen or a dropped water level. Call us and we will diagnose it on site.",
  },
  {
    q: "How much does an emergency call-out cost?",
    a: "Day call-outs (6am-10pm) are R900-R1,400 and night call-outs (10pm-6am) are R1,800-R2,800. The final repair cost depends on what we find, and we explain the problem and the price before starting work.",
  },
]

function PhotoCard({
  src,
  alt,
  title,
  text,
}: {
  src: string
  alt: string
  title: string
  text: string
}) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="mb-1 font-bold">{title}</h4>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </Card>
  )
}

export default function EmergencyBoreholeRepairGautengPage() {
  return (
    <>
      <Hero
        title="24/7 Emergency Borehole Repair Gauteng"
        subtitle="Pump Failure | No Water | Johannesburg, Pretoria & Surrounds"
        description="Borehole pump failed or water stopped? Emergency repair across Gauteng, including Johannesburg, Pretoria, Sandton, Midrand, Centurion and outlying areas. Fast response, upfront call-out pricing. Call 060 348 8268."
        imageSrc="/images/borehole-drilling.webp"
        cta={{
          primary: { text: "Call Emergency: 060 348 8268", href: PHONE_HREF },
          secondary: { text: "WhatsApp Now", href: WHATSAPP_HREF },
        }}
      />

      <section className="bg-muted py-16 md:py-24">
        <div className="container-max">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Emergency Borehole Repair Across Gauteng
          </h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                When your borehole pump fails or the water suddenly stops, you need a
                technician fast. Borehole Pros provides 24/7 emergency borehole repair across
                Gauteng, from Johannesburg and Sandton to Pretoria, Centurion, the East Rand,
                West Rand and the Vaal, with expert diagnosis on arrival.
              </p>

              <p className="mb-6 leading-relaxed text-muted-foreground">
                With 15+ years of experience we have repaired thousands of boreholes for
                homes, estates, farms and businesses. The most common emergencies are pump
                motor failure, sediment blockages, pressure system faults and electrical
                problems. Most repairs are completed the same day.
              </p>

              <p className="mb-8 leading-relaxed text-muted-foreground">
                Response is typically 30-90 minutes in metro areas and same-day for outlying
                areas. We operate 24/7 including weekends and public holidays. Call{" "}
                <a href={PHONE_HREF} className="font-semibold text-accent hover:underline">
                  060 348 8268
                </a>{" "}
                anytime and our technician will arrive with diagnostic equipment.
              </p>

              {/* What's wrong - image cards */}
              <h3 className="mb-6 text-2xl font-bold">What Is Wrong With Your Borehole?</h3>
              <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <PhotoCard
                  src="/images/water-pump-tank-pipes-green.webp"
                  alt="Borehole pump, pressure tank and pipes being repaired"
                  title="Pump or Pressure Failure"
                  text="Pump trips, runs without water, or pressure drops."
                />
                <PhotoCard
                  src="/images/Blue_Pvc_Casing_Deployment.webp"
                  alt="Blue PVC borehole casing being installed"
                  title="Blocked or Damaged Casing"
                  text="Sand, silt or collapsed casing cutting off your supply."
                />
                <PhotoCard
                  src="/images/borehole_water_filtration_system.jpg"
                  alt="Borehole water filtration system"
                  title="Dirty or Smelly Water"
                  text="Filtration and water quality fixes once your pump is running."
                />
              </div>

              <div className="mb-12 rounded-lg bg-background p-8">
                <h3 className="mb-6 text-2xl font-bold">Emergency Services Available 24/7</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    { title: "Borehole Pump Replacement", desc: "Failed motor or burned-out pump" },
                    { title: "Borehole Cleaning", desc: "Sediment blockage or reduced flow" },
                    { title: "Pressure Repair", desc: "Pressure tank or switch failure" },
                    { title: "Electrical Fix", desc: "Control box, cabling or power issues" },
                    { title: "Pipe Repair", desc: "Broken or leaking pipes" },
                    { title: "Water Restoration", desc: "Get your water back fast" },
                  ].map((service) => (
                    <Card key={service.title} className="p-4">
                      <h4 className="mb-2 font-bold">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <h3 className="mb-6 text-2xl font-bold">Emergency Borehole Repair Pricing - Gauteng</h3>
              <div className="mb-3 overflow-hidden rounded-lg bg-background">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-accent text-accent-foreground">
                      <th className="p-4 text-left font-bold">Service</th>
                      <th className="p-4 text-left font-bold">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4">Emergency Call-out (Day: 6am-10pm)</td>
                      <td className="p-4 font-semibold">ZAR 900 - 1,400</td>
                    </tr>
                    <tr>
                      <td className="p-4">Emergency Call-out (Night: 10pm-6am)</td>
                      <td className="p-4 font-semibold">ZAR 1,800 - 2,800</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pump Replacement</td>
                      <td className="p-4 font-semibold">ZAR 6,500 - 16,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Borehole Cleaning/Unblocking</td>
                      <td className="p-4 font-semibold">ZAR 3,800 - 8,500</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pressure System Repair</td>
                      <td className="p-4 font-semibold">ZAR 4,500 - 11,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-12 text-sm text-muted-foreground">
                Prices are a guide. Final cost depends on your pump, depth and the fault found.
                Outlying areas may carry an extra travel charge.
              </p>

              {/* Areas we serve */}
              <div className="mb-12 rounded-lg bg-background p-8">
                <h3 className="mb-2 flex items-center gap-2 text-2xl font-bold">
                  <MapPin className="h-6 w-6 text-accent" />
                  Areas We Serve in Gauteng
                </h3>
                <p className="mb-6 text-muted-foreground">
                  We cover the whole of Gauteng and the outskirts. Don&apos;t see your area? Call
                  us, we probably still reach you.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <li key={area.name}>
                      {area.href ? (
                        <Link
                          href={area.href}
                          className="inline-block rounded-full border border-border px-3 py-1 text-sm font-medium text-accent hover:bg-muted"
                        >
                          {area.name}
                        </Link>
                      ) : (
                        <span className="inline-block rounded-full border border-border px-3 py-1 text-sm">
                          {area.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Farms and smallholdings */}
              <Card className="mb-12 overflow-hidden p-0 md:grid md:grid-cols-2">
                <div className="relative aspect-video w-full md:aspect-auto md:min-h-full">
                  <Image
                    src="/images/farm_workers_drip_irrigation.jpg"
                    alt="Farm workers at a borehole-fed drip irrigation system"
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Farms, Smallholdings & Irrigation</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    A dead pump on a farm or smallholding means no water for livestock or
                    crops. We repair irrigation borehole pumps, tanks and pipework across
                    Gauteng and the outlying farming areas.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    Call 060 348 8268
                  </a>
                </div>
              </Card>

              {/* Need a new borehole */}
              <Card className="mb-12 overflow-hidden p-0 md:grid md:grid-cols-2">
                <div className="relative aspect-video w-full md:aspect-auto md:min-h-full">
                  <Image
                    src="/images/borehole_drilling_installation.webp"
                    alt="New borehole drilling and installation in Gauteng"
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Need a New Borehole Instead?</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    If your borehole has collapsed or run dry for good, we also drill and
                    install new boreholes with a free site assessment.
                  </p>
                  <Link
                    href="/borehole-drilling"
                    className="mt-4 inline-block font-semibold text-accent hover:underline"
                  >
                    See borehole drilling &rarr;
                  </Link>
                </div>
              </Card>

              {/* FAQ */}
              <h3 className="mb-6 text-2xl font-bold">Emergency Borehole Repair FAQ</h3>
              <div className="mb-12 space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group rounded-lg bg-background p-4">
                    <summary className="cursor-pointer list-none font-semibold">
                      {faq.q}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>

              <div className="mb-8 rounded-lg bg-background p-8">
                <h3 className="mb-4 font-bold">Related Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/borehole-not-working" className="font-semibold text-accent hover:underline">
                      Borehole Not Working
                    </Link>
                  </li>
                  <li>
                    <Link href="/borehole-drilling" className="font-semibold text-accent hover:underline">
                      Borehole Drilling
                    </Link>
                  </li>
                  <li>
                    <Link href="/johannesburg" className="font-semibold text-accent hover:underline">
                      All Johannesburg Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                <Card className="mb-6 border-2 border-red-500 bg-red-500/10 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-red-600">
                    <AlertCircle className="h-5 w-5" />
                    Borehole Emergency?
                  </h3>
                  <a
                    href={PHONE_HREF}
                    className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 py-4 text-lg font-bold text-white transition-colors hover:bg-red-600"
                  >
                    <Phone className="h-6 w-6" />
                    060 348 8268
                  </a>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 font-bold text-white transition-colors hover:bg-[#1ebe5a]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp Now
                  </a>
                </Card>

                <Card className="bg-muted p-6">
                  <h3 className="mb-4 font-bold">Quick Response</h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Fast response across Gauteng",
                      "24/7 including weekends & holidays",
                      "Same-day repairs in most cases",
                      "12-month warranty",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      <CTASection
        title="Borehole Emergency in Gauteng?"
        description="24/7 expert response across Johannesburg, Pretoria and surrounds. Pump failure, blockages, pressure issues. Call now."
        primaryText="Call Emergency: 060 348 8268"
        primaryHref={PHONE_HREF}
        secondaryText="WhatsApp Now"
        secondaryHref={WHATSAPP_HREF}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Emergency Borehole Repair",
            name: "24/7 Emergency Borehole Repair Gauteng",
            description:
              "24/7 emergency borehole pump repair, blockage clearing and pressure system repair across Gauteng.",
            url: "https://boreholepros.co.za/emergency-borehole-repair-johannesburg",
            provider: {
              "@type": "LocalBusiness",
              name: "Borehole Pros",
              telephone: "+27603488268",
              url: "https://boreholepros.co.za",
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Gauteng" },
              { "@type": "City", name: "Johannesburg" },
              { "@type": "City", name: "Pretoria" },
              { "@type": "City", name: "Sandton" },
              { "@type": "City", name: "Midrand" },
              { "@type": "City", name: "Centurion" },
            ],
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: "+27603488268",
            },
          }),
        }}
      />
    </>
  )
}
