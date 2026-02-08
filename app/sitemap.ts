import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boreholepros.co.za"

  // Tier 1: Emergency money pages - highest priority
  const emergencyPages = [
    { url: "/borehole-not-working/", priority: 0.98, changeFrequency: "weekly" as const },
    { url: "/emergency-borehole-repair-johannesburg/", priority: 0.97, changeFrequency: "weekly" as const },
    { url: "/emergency-borehole-repair-sandton/", priority: 0.96, changeFrequency: "weekly" as const },
    { url: "/plumber-johannesburg/", priority: 0.96, changeFrequency: "monthly" as const },
    { url: "/emergency-plumber-johannesburg/", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/plumbing/", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/pump-inspection/", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/pump-repair/", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/borehole-installation/", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/borehole-maintenance/", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/borehole-near-me/", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/borehole-water-testing/", priority: 0.95, changeFrequency: "monthly" as const },
     { url: "/solar-borehole-pumps/", priority: 0.95, changeFrequency: "monthly" as const },
  ]

  // Tier 2: High-traffic money pages
  const moneyPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/plumber-sandton/", priority: 0.93, changeFrequency: "monthly" as const },
    { url: "/plumber-midrand/", priority: 0.93, changeFrequency: "monthly" as const },
    { url: "/plumber-pretoria/", priority: 0.93, changeFrequency: "monthly" as const },
    { url: "/borehole-emergency-pretoria/", priority: 0.92, changeFrequency: "weekly" as const },
    { url: "/borehole-emergency-johannesburg/", priority: 0.92, changeFrequency: "weekly" as const },
    { url: "/borehole-not-working-north-west/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/borehole-pump-emergency-east-rand/", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/blocked-drain-johannesburg/", priority: 0.88, changeFrequency: "monthly" as const },
    { url: "/geyser-installation-johannesburg/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/borehole-drilling-cost/", priority: 0.92, changeFrequency: "monthly" as const },
  ]

  // Tier 3: Borehole drilling specific pages
  const boreholePages = [
    { url: "/borehole-drilling-edenvale/", priority: 0.87, changeFrequency: "monthly" as const },
    { url: "/borehole-drilling-kempton-park/", priority: 0.87, changeFrequency: "monthly" as const },
    { url: "/borehole-drilling-midrand/", priority: 0.87, changeFrequency: "monthly" as const },
    { url: "/borehole-drilling-krugersdorp/", priority: 0.87, changeFrequency: "monthly" as const },
    { url: "/borehole-drilling-roodepoort/", priority: 0.87, changeFrequency: "monthly" as const },
    { url: "/borehole-drilling-prices-pretoria/", priority: 0.87, changeFrequency: "monthly" as const },
  ]

  // Tier 4: Primary location pages
  const locationPages = [
    { url: "/johannesburg/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/cape-town/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/pretoria/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/durban/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/sandton/", priority: 0.84, changeFrequency: "monthly" as const },
    { url: "/centurion/", priority: 0.84, changeFrequency: "monthly" as const },
  ]

  // Tier 5: Suburb pages
  const suburbPages = [
    { url: "/midrand/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/east-rand/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/fourways/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/germiston/", priority: 0.8, changeFrequency: "monthly" as const },
  ]

  // Tier 6: Service pages
  const servicePages = [
    { url: "/borehole-drilling/", priority: 0.82, changeFrequency: "monthly" as const },
    { url: "/emergency-plumbing/", priority: 0.82, changeFrequency: "monthly" as const },
    { url: "/geyser-installation/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/drain-cleaning/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/leak-detection/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pump-installation/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pressure-systems/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/electrical-installation/", priority: 0.8, changeFrequency: "monthly" as const },
    
  ]

  // Tier 7: Support pages
  const supportPages = [
    { url: "/about/", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/contact/", priority: 0.75, changeFrequency: "weekly" as const },
  ]

  const legalPages = [
    { url: "/privacy/", priority: 0.78, changeFrequency: "monthly" as const },
    { url: "/terms/", priority: 0.78, changeFrequency: "monthly" as const },
    { url: "/faq/", priority: 0.85, changeFrequency: "weekly" as const },
  ]

  const allPages = [
    ...emergencyPages,
    ...moneyPages,
    ...boreholePages,
    ...locationPages,
    ...suburbPages,
    ...servicePages,
    ...supportPages,
    ...legalPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
