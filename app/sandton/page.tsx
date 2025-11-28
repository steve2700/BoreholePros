import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { generateLocationMetadata, generateLocationSchema } from "@/components/sections/location-template"
import { Droplet, Wrench, AlertCircle } from "lucide-react"

export const metadata: Metadata = generateLocationMetadata("Sandton")

const sandtonSuburbs = ["Bryanston", "Sunninghill", "Rosebank", "Parkhurst", "Kyalami", "Benmore"]

const services: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description: "Premium borehole drilling for Sandton's high-end residential and commercial properties.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
  },
  {
    title: "Emergency Plumbing",
    description: "Premium 24/7 emergency plumbing service for Sandton properties. Discrete and professional.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
  },
  {
    title: "Luxury Installations",
    description: "High-end geyser and plumbing installations for premium properties.",
    href: "/geyser-installation",
    icon: <Wrench className="w-8 h-8" />,
  },
]

export default function SandtonPage() {
  return (
    <>
      <Hero
        title="Premium Borehole & Plumbing Services in Sandton"
        subtitle="Johannesburg's Most Trusted Luxury Provider"
        description="Discrete, professional borehole and plumbing services for Sandton's premium properties. Immediate response available. Call 060 348 8268."
      />
      <ServicesGrid title="Exclusive Services for Sandton" services={services} columns={3} />
      <TrustSignals />
      <CTASection
        title="Premium Service for Premium Properties"
        description="Tailored solutions for Sandton. Free consultation available."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocationSchema("Sandton", sandtonSuburbs)) }}
      />
    </>
  )
}
