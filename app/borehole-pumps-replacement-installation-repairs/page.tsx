import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, AlertTriangle } from "lucide-react"
import WhatsAppJobCard from "@/components/whatsapp-job-card"
import {
  BigCallButton,
  BigWhatsAppButton,
  BigNumberLink,
} from "@/components/big-cta-buttons"

export const metadata: Metadata = {
  title: "Borehole Pump Replacement & Repairs Gauteng | Borehole Pros",
  description:
    "Borehole pump replacement, installation & repairs across Gauteng. Fast 24/7 response, 12-month warranty. Speak to a technician now: 060 348 8268.",
  keywords: [
    "borehole pump replacement gauteng",
    "borehole pump repair gauteng",
    "borehole pump installation gauteng",
    "submersible pump replacement johannesburg",
    "borehole pump repair pretoria",
    "solar borehole pump installation",
  ],
}

const pumpProblems = [
  "Pump not working",
  "No water",
  "Low pressure",
  "Replace my pump",
  "New pump installation",
  "Something else",
]

const services = [
  {
    title: "Pump Replacement",
    img: "/images/water-pump-tank-pipes-green.webp",
    alt: "Borehole pump, tank and pipes ready for replacement",
    text: "Burnt-out or worn pump? We pull it, replace it and test it. The new pump is sized to your borehole depth and yield.",
    price: "ZAR 6,500 - 16,000",
  },
  {
    title: "New Pump Installation",
    img: "/images/borehole_drilling_installation.webp",
    alt: "New borehole pump installation in Gauteng",
    text: "New borehole or upgrading? Submersible and solar pumps, pressure tanks, pipes and electrical, installed properly.",
    price: "Free quote",
  },
  {
    title: "Pump Repairs & Pressure Faults",
    img: "/images/Blue_Pvc_Casing_Deployment.webp",
    alt: "Blue PVC borehole casing during repair work",
    text: "Pump trips, loses pressure or runs without water? We find the fault and fix it, often the same day.",
    price: "ZAR 4,500 - 11,000",
  },
]

const signs = [
  "Pump runs but no water comes out",
  "Water pressure keeps dropping",
  "Pump trips the breaker or won't start",
  "Loud grinding, humming or vibration",
  "Sand or dirt in your water",
  "Electricity bill suddenly higher",
]

const steps = [
  { title: "Call or WhatsApp", text: "Tell us what is happening. It takes a minute." },
  { title: "We diagnose", text: "A technician arrives with diagnostic equipment and finds the fault." },
  { title: "Fixed & guaranteed", text: "Repair or replacement done, tested and covered by a 12-month warranty." },
]

const faqs = [
  {
    q: "How do I know if I need a new pump or just a repair?",
    a: "If the pump is burnt out, seized or very old, replacement usually costs less than repeated repairs. Often the problem is a pressure switch, cabling or a blocked line, which is a cheaper repair. We diagnose first and tell you which it is.",
  },
  {
    q: "Which areas do you cover?",
    a: "All of Gauteng, including Johannesburg, Pretoria, Sandton, Midrand, Centurion, the East Rand, West Rand and Vaal, plus outlying areas such as Hartbeespoort and Brits.",
  },
  {
    q: "Do you install solar borehole pumps?",
    a: "Yes. We install solar and conventional borehole pumps. Send us your borehole details on WhatsApp and we will quote.",
  },
]

export default function BoreholePumpsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <Image
          src="/images/water-pump-tank-pipes-green.webp"
          alt="Borehole pump and pressure system"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
        />
        <div className="container-max py-16 md:py-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-1 text-sm font-bold uppercase tracking-wide">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            24/7 Gauteng Pump Specialists
          </p>
          <h1 className="mb-4 max-w-3xl text-4xl font-extrabold leading-tight text-balance md:text-6xl">
            Borehole Pump Replacement, Installation &amp; Repairs in Gauteng
          </h1>
          <p className="mb-8 max-w-2xl text-lg opacity-90 md:text-xl">
            Pump stopped, no water or low pressure? Our technicians fix it fast across
            Johannesburg, Pretoria, Sandton, Midrand, Centurion and surrounds.
          </p>

          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <BigCallButton label="Speak to a Technician Now" />
            <BigWhatsAppButton
              label="WhatsApp Now"
              message="Hi Borehole Pros! I need help with my borehole pump."
            />
          </div>

          <BigNumberLink prefix="Speak to a Pro Now:" className="mb-8 text-white" />

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {["24/7 emergency response", "12-month warranty", "Free quote", "15+ years experience"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-max">
          <h2 className="mb-10 text-3xl font-extrabold text-balance md:text-4xl">
            Borehole Pump Services Across Gauteng
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <p className="mb-4 text-sm font-semibold text-accent">From: {s.price}</p>
                  <BigCallButton label="Call a Pro Now" className="px-4 py-3 text-base" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container-max grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-extrabold text-balance md:text-4xl">
              <AlertTriangle className="h-9 w-9 shrink-0 text-red-600" />
              Signs Your Borehole Pump Needs Attention
            </h2>
            <ul className="space-y-3">
              {signs.map((s) => (
                <li key={s} className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg bg-background p-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Tip:</strong> if the pump runs but gives no
              water, switch it off. Running it dry can burn out the motor.
            </p>
          </div>
          <div className="rounded-2xl bg-background p-8 text-center shadow-lg">
            <h3 className="mb-2 text-2xl font-extrabold">See Any of These?</h3>
            <p className="mb-6 text-muted-foreground">Speak to a technician right now.</p>
            <div className="flex flex-col gap-4">
              <BigCallButton label="Speak to a Technician" className="w-full" />
              <BigWhatsAppButton label="WhatsApp Now" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-max">
          <h2 className="mb-10 text-3xl font-extrabold md:text-4xl">How It Works</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container-max max-w-3xl">
          <h2 className="mb-6 text-3xl font-extrabold md:text-4xl">
            Borehole Pump Pricing Guide
          </h2>
          <div className="overflow-hidden rounded-xl bg-background">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-accent text-accent-foreground">
                  <th className="p-4 text-left font-bold">Service</th>
                  <th className="p-4 text-left font-bold">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4">Call-out (day: 6am-10pm)</td>
                  <td className="p-4 font-semibold">ZAR 900 - 1,400</td>
                </tr>
                <tr>
                  <td className="p-4">Pump replacement</td>
                  <td className="p-4 font-semibold">ZAR 6,500 - 16,000</td>
                </tr>
                <tr>
                  <td className="p-4">Pressure system repair</td>
                  <td className="p-4 font-semibold">ZAR 4,500 - 11,000</td>
                </tr>
                <tr>
                  <td className="p-4">New pump installation</td>
                  <td className="p-4 font-semibold">Quote after assessment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Prices are a guide. Final cost depends on your pump, borehole depth and the fault found.
          </p>
        </div>
      </section>

      {/* JOB CARD */}
      <section id="quote" className="bg-background py-16 md:py-20">
        <div className="container-max max-w-2xl">
          <WhatsAppJobCard
            problems={pumpProblems}
            title="Get Your Pump Quote on WhatsApp"
            subtitle="Tap your answers and press send. No typing needed."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container-max max-w-3xl">
          <h2 className="mb-6 text-3xl font-extrabold md:text-4xl">Pump Questions Answered</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg bg-background p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Also see{" "}
            <Link href="/emergency-borehole-repair-johannesburg" className="font-semibold text-accent hover:underline">
              24/7 emergency borehole repair
            </Link>{" "}
            and{" "}
            <Link href="/borehole-drilling" className="font-semibold text-accent hover:underline">
              borehole drilling
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-16 text-center text-primary-foreground">
        <div className="container-max">
          <h2 className="mb-6 text-3xl font-extrabold text-balance md:text-5xl">
            No Water? Speak to a Pro Now
          </h2>
          <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BigCallButton label="Speak to a Technician Now" />
            <BigWhatsAppButton label="WhatsApp Now" />
          </div>
          <BigNumberLink prefix="Call:" />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Borehole Pump Replacement, Installation and Repair",
            name: "Borehole Pump Replacement, Installation & Repairs Gauteng",
            url: "https://boreholepros.co.za/borehole-pumps-replacement-installation-repairs",
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
          }),
        }}
      />
    </>
  )
}
