import type { Metadata } from "next"

export interface LocationPageProps {
  city: string
  region: string
  searchVolume: number
  suburbs: string[]
}

export function generateLocationMetadata(city: string): Metadata {
  return {
    title: `Borehole Drilling & Plumbing ${city} | Expert Local Services | Borehole Pros`,
    description: `Professional borehole drilling and plumbing services in ${city}. Fast installation, maintenance & emergency repairs. Call 060 348 8268 for same-day quotes!`,
    keywords: [
      `borehole drilling ${city}`,
      `plumber ${city}`,
      `emergency plumbing ${city}`,
      `geyser installation ${city}`,
      `leak detection ${city}`,
    ],
    openGraph: {
      title: `Borehole Drilling & Plumbing ${city} | Borehole Pros`,
      description: `Professional borehole drilling and plumbing services in ${city}.`,
      url: `https://boreholepros.co.za/${city.toLowerCase().replace(/\s+/g, "-")}`,
      type: "website",
    },
    alternates: {
      canonical: `https://boreholepros.co.za/${city.toLowerCase().replace(/\s+/g, "-")}`,
    },
  }
}

export function generateLocationSchema(city: string, suburbs: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PlumbingService"],
    name: `Borehole Pros - ${city}`,
    description: `Professional borehole drilling and plumbing services in ${city}`,
    areaServed: [{ "@type": "City", name: city }, ...suburbs.map((suburb) => ({ "@type": "City", name: suburb }))],
    telephone: "060-348-8268",
    url: `https://boreholepros.co.za/${city.toLowerCase().replace(/\s+/g, "-")}`,
    serviceArea: {
      "@type": "City",
      name: city,
    },
    availableService: [
      { "@type": "Service", name: "Borehole Drilling" },
      { "@type": "Service", name: "Borehole Installation" },
      { "@type": "Service", name: "Emergency Plumbing" },
      { "@type": "Service", name: "Geyser Installation" },
      { "@type": "Service", name: "Leak Detection" },
      { "@type": "Service", name: "Drain Cleaning" },
    ],
  }
}

export function LocationContent({ city, region, suburbs }: LocationPageProps) {
  return (
    <>
      {/* Location Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema(city, suburbs)),
        }}
      />
    </>
  )
}
