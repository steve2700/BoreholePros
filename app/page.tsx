import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid, type ServiceItem } from "@/components/sections/services-grid"
import { TrustSignals } from "@/components/sections/trust-signals"
import { CTASection } from "@/components/sections/cta-section"
import { Droplet, Wrench, Zap, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Borehole Drilling & Plumbing Services SA | Borehole Pros",
  description:
    "Expert borehole drilling and plumbing across South Africa. Fast installation, maintenance & repairs. Call 060 348 8268 for a free quote today!",
  keywords: [
    "borehole drilling south africa",
    "plumbing services",
    "emergency plumber",
    "geyser installation",
    "leak detection",
    "drain cleaning",
  ],
  openGraph: {
    title: "Borehole Drilling & Plumbing Services SA | Borehole Pros",
    description: "Expert borehole drilling and plumbing across South Africa. Fast installation, maintenance & repairs.",
    url: "https://boreholepros.co.za",
    type: "website",
  },
  alternates: {
    canonical: "https://boreholepros.co.za",
  },
}

const boreholeServices: ServiceItem[] = [
  {
    title: "Borehole Drilling",
    description:
      "Professional borehole drilling with modern equipment. We handle site assessment, drilling, and installation for residential and commercial properties.",
    href: "/borehole-drilling",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/borehole-drilling.jpg",
  },
  {
    title: "Borehole Installation",
    description:
      "Complete borehole installation including pump installation, testing, and certification. Guaranteed quality workmanship.",
    href: "/borehole-installation",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/borehole-installation.jpg",
  },
  {
    title: "Borehole Maintenance",
    description:
      "Regular maintenance, water testing, and repairs to keep your borehole running efficiently. Preventive care to avoid costly downtime.",
    href: "/borehole-maintenance",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/leak-detection.jpg",
  },
]

const plumbingServices: ServiceItem[] = [
  {
    title: "Emergency Plumbing",
    description:
      "Available 24/7 for burst pipes, leaks, and urgent plumbing emergencies. Same-day response across all service areas.",
    href: "/emergency-plumbing",
    icon: <AlertCircle className="w-8 h-8" />,
    highlight: true,
    image: "/images/plumbing-emergency.jpg",
  },
  {
    title: "Geyser Installation & Repair",
    description:
      "Professional geyser installation, repairs, and maintenance. Energy-efficient solutions for your home or business.",
    href: "/geyser-installation",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/geyser-repair.jpg",
  },
  {
    title: "Leak Detection & Repair",
    description:
      "Advanced leak detection technology to find hidden leaks. Fast repairs to prevent water waste and damage.",
    href: "/leak-detection",
    icon: <Droplet className="w-8 h-8" />,
    image: "/images/leak-detection.jpg",
  },
  {
    title: "Drain Cleaning & Plumbing",
    description:
      "Drain unblocking, cleaning, and general plumbing services. From toilet repairs to full bathroom installations.",
    href: "/drain-cleaning",
    icon: <Wrench className="w-8 h-8" />,
    image: "/images/team-working.jpg",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Expert Borehole Drilling & Plumbing Services"
        subtitle="South Africa's #1 Choice for Water Solutions"
        description="24/7 emergency plumbing and professional borehole drilling. Same-day service across South Africa. Trusted by thousands of homeowners and businesses."
        imageSrc="/images/borehole-drilling.jpg"
        cta={{
          primary: { text: "Get Free Quote", href: "/contact" },
          secondary: { text: "Call 060 348 8268", href: "tel:0603488268" },
        }}
      />

      <ServicesGrid
        title="Borehole Solutions"
        description="From drilling to maintenance, we handle all your borehole needs. Fast, professional service with guaranteed results."
        services={boreholeServices}
        columns={3}
      />

      <ServicesGrid
        title="Plumbing & Water Services"
        description="Emergency plumbing available 24/7. Leak detection, geyser installation, drain cleaning, and more."
        services={plumbingServices}
        columns={2}
      />

      {/* Trust Signals */}
      <TrustSignals />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h3 className="font-semibold mb-3 text-lg">How much does borehole drilling cost?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Costs vary based on depth and location.{" "}
                <a href="/borehole-drilling" className="text-primary font-semibold hover:underline">
                  Contact us for a free site assessment and quote
                </a>
                . Most residential boreholes range from ZAR 8,000 to 25,000.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Is emergency plumbing available 24/7?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes!{" "}
                <a href="/emergency-plumbing" className="text-primary font-semibold hover:underline">
                  Call 060 348 8268 anytime for urgent plumbing issues
                </a>
                . We dispatch technicians immediately for emergencies like burst pipes and leaks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Do I need a permit for a borehole?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Permit requirements vary by municipality.{" "}
                <a href="/contact" className="text-primary font-semibold hover:underline">
                  Our team will advise you on local regulations
                </a>{" "}
                and can assist with the application process.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">How quickly can you respond to emergencies?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Same-day response in most areas.{" "}
                <a href="/contact" className="text-primary font-semibold hover:underline">
                  Contact us immediately
                </a>{" "}
                and we'll dispatch the nearest technician to your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Solve Your Water & Plumbing Needs?"
        description="Get a free quote today. No obligation. Our experts will assess your situation and provide the best solution."
        primaryText="Request Free Quote"
        primaryHref="/contact"
        secondaryText="Call Now: 060 348 8268"
        secondaryHref="tel:0603488268"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does borehole drilling cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Costs vary based on depth and location. Most residential boreholes range from ZAR 8,000 to 25,000. Contact us for a free site assessment and quote.",
                },
              },
              {
                "@type": "Question",
                name: "Is emergency plumbing available 24/7?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Call 060 348 8268 anytime for urgent plumbing issues. We dispatch technicians immediately for emergencies.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a permit for a borehole?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Permit requirements vary by municipality. Our team will advise you on local regulations and can assist with the application process.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you respond to emergencies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Same-day response in most areas. Contact us immediately and we'll dispatch the nearest technician to your location.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
