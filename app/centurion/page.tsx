import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { generateLocationMetadata, generateLocationSchema } from "@/components/sections/location-template"
import { Droplet, Wrench, AlertCircle } from "lucide-react"

export const metadata: Metadata = generateLocationMetadata("Centurion")

const centurionSuburbs = ["Pretoria", "Midrand", "Lynnwood", "Verwoerdburg", "Raslouw"]

const services: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description: "Expert borehole drilling for Centurion's established and new developments.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
  },
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency response for Centurion. Quick dispatch for burst pipes and leaks.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
  },
  {
    title: "Bulk Installations",
    description: "Specialized in bulk installations for developments and commercial projects.",
    href: "/borehole-installation",
    icon: <Wrench className="w-8 h-8" />,
  },
]

export default function CenturionPage() {
  return (
    <>
      <Hero
        title="Borehole Drilling & Plumbing Services in Centurion"
        subtitle="Development Specialist & Local Expert"
        description="Expert borehole and plumbing services for Centurion. Experienced in both residential developments and established suburbs. Call 060 348 8268."
      />
      <ServicesGrid title="Services for Centurion & Developments" services={services} columns={3} />
      <TrustSignals />
      <CTASection
        title="Centurion's Trusted Water & Plumbing Expert"
        description="From single homes to large developments. Free assessment available."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocationSchema("Centurion", centurionSuburbs)) }}
      />
    </>
  )
}
