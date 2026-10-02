import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import WhatsAppJobCard from "@/components/whatsapp-job-card"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import {
  BigCallButton,
  BigWhatsAppButton,
  BigNumberLink,
} from "@/components/big-cta-buttons"

export const metadata: Metadata = {
  title: "Contact Borehole Pros Gauteng | WhatsApp Quote | 24/7",
  description:
    "Contact Borehole Pros for a fast quote. Call or WhatsApp 060 348 8268, available 24/7 for emergencies across Gauteng.",
}

const contactProblems = [
  "Pump not working",
  "No water",
  "New borehole",
  "Replace my pump",
  "Plumbing emergency",
  "Something else",
]

const areas = [
  "Johannesburg",
  "Sandton",
  "Randburg",
  "Fourways",
  "Roodepoort",
  "Krugersdorp",
  "Soweto",
  "Midrand",
  "Centurion",
  "Pretoria",
  "Kempton Park",
  "Benoni",
  "Boksburg",
  "Germiston",
  "Alberton",
  "Springs",
  "Vereeniging",
  "Hartbeespoort",
  "Brits",
  "Magaliesburg",
]

const photos = [
  {
    src: "/images/water-pump-tank-pipes-green.webp",
    alt: "Borehole pump, tank and pipes installed by Borehole Pros",
    caption: "Pump & pressure systems",
  },
  {
    src: "/images/borehole_drilling_installation.webp",
    alt: "Borehole drilling and installation in Gauteng",
    caption: "Drilling & installation",
  },
  {
    src: "/images/farm_workers_drip_irrigation.jpg",
    alt: "Farm workers with borehole drip irrigation",
    caption: "Farms & irrigation",
  },
]

export default function ContactPage() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <Image
          src="/images/borehole-drilling.webp"
          alt="Borehole drilling team at work in Gauteng"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
        />
        <div className="container-max py-16 md:py-24">
          <h1 className="mb-4 max-w-3xl text-4xl font-extrabold leading-tight text-balance md:text-6xl">
            Speak to a Borehole Pro Now
          </h1>
          <p className="mb-8 max-w-2xl text-lg opacity-90 md:text-xl">
            Call or WhatsApp us. Available 24/7 for emergencies across Gauteng.
          </p>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <BigCallButton label="Call a Technician Now" />
            <BigWhatsAppButton label="WhatsApp Now" />
          </div>
          <BigNumberLink prefix="Speak to a Pro Now:" className="text-white" />
        </div>
      </section>

      {/* JOB CARD + SIDE INFO */}
      <section className="py-16 md:py-20">
        <div className="container-max grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <WhatsAppJobCard
              problems={contactProblems}
              title="Send Us Your Job on WhatsApp"
              subtitle="Tap your answers and press send. We reply fast."
            />
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/Blue_Pvc_Casing_Deployment.webp"
                  alt="Borehole casing installation by our technicians"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <h2 className="text-xl font-bold">Quick Facts</h2>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <strong>Response:</strong> typically 30-90 mins in metro areas
                      (emergencies)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <strong>Hours:</strong> 24/7 emergency, 7am-6pm standard
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <strong>Areas:</strong> all of Gauteng and outlying areas
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <strong>Guarantee:</strong> satisfaction guaranteed on all work
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <a
              href="tel:0603488268"
              className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-5 text-xl font-extrabold text-white shadow-lg transition hover:bg-red-700"
            >
              <Phone className="h-6 w-6" />
              Emergency? Call Now
            </a>
          </aside>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container-max">
          <h2 className="mb-10 text-3xl font-extrabold md:text-4xl">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/10">
                  <Phone className="h-7 w-7 text-red-600" />
                </div>
              </div>
              <h3 className="mb-1 font-bold">Call Us</h3>
              <p className="mb-3 text-muted-foreground">24/7 emergency line</p>
              <a href="tel:0603488268" className="text-2xl font-extrabold text-primary hover:underline">
                060 348 8268
              </a>
            </Card>

            <Card className="p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15">
                  <WhatsAppIcon className="h-7 w-7 text-[#25D366]" />
                </div>
              </div>
              <h3 className="mb-1 font-bold">WhatsApp</h3>
              <p className="mb-3 text-muted-foreground">Quick messages and photos</p>
              <a
                href="https://wa.me/27603488268?text=Hi%20Borehole%20Pros!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-extrabold text-primary hover:underline"
              >
                Start Chat
              </a>
            </Card>

            <Card className="p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-7 w-7 text-accent" />
                </div>
              </div>
              <h3 className="mb-1 font-bold">Email</h3>
              <p className="mb-3 text-muted-foreground">Non-urgent enquiries</p>
              <a
                href="mailto:info@boreholepros.co.za"
                className="break-all text-lg font-bold text-primary hover:underline"
              >
                info@boreholepros.co.za
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <h2 className="mb-10 text-3xl font-extrabold md:text-4xl">Our Work Across Gauteng</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {photos.map((p) => (
              <figure key={p.src} className="overflow-hidden rounded-2xl border border-border">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-center font-semibold">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container-max">
          <h2 className="mb-3 text-3xl font-extrabold text-balance md:text-4xl">
            We Serve All of Gauteng
          </h2>
          <p className="mb-8 text-muted-foreground">
            Don&apos;t see your area? Call us, we probably still reach you.
          </p>
          <ul className="flex flex-wrap gap-3">
            {areas.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-14 text-center text-primary-foreground">
        <div className="container-max">
          <h2 className="mb-6 text-3xl font-extrabold md:text-4xl">Need a Pro Right Now?</h2>
          <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BigCallButton label="Speak to a Technician Now" />
            <BigWhatsAppButton label="WhatsApp Now" />
          </div>
          <BigNumberLink prefix="Call:" />
        </div>
      </section>
    </main>
  )
}
