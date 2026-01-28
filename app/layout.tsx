import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// ---------------------------------------------------------
// SEO + FAVICON + SOCIAL METADATA
// ---------------------------------------------------------
export const metadata: Metadata = {
  title: "Borehole Drilling & Plumbing Services SA | Borehole Pros",
  description:
    "Expert borehole drilling and plumbing across South Africa. Fast installation, maintenance & repairs. Call 060 348 8268 for a free quote today!",
  generator: "v0.app",
  keywords: [
    "borehole drilling",
    "plumbing services",
    "south africa",
    "geyser installation",
    "leak detection",
    "emergency plumber",
  ],
  authors: [{ name: "Borehole Pros" }],
  creator: "Borehole Pros",
  publisher: "Borehole Pros",
  applicationName: "Borehole Pros",
  metadataBase: new URL("https://boreholepros.co.za"),

  // ---- Open Graph ----
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://boreholepros.co.za",
    siteName: "Borehole Pros",
    title: "Borehole Drilling & Plumbing Services SA | Borehole Pros",
    description:
      "Expert borehole drilling and plumbing across South Africa. Fast installation, maintenance & repairs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Borehole Pros - Expert Services",
      },
    ],
  },

  // ---- Twitter ----
  twitter: {
    card: "summary_large_image",
    title: "Borehole Drilling & Plumbing Services SA | Borehole Pros",
    description: "Expert borehole drilling and plumbing across South Africa.",
    images: ["/og-image.jpg"],
  },

  // ---- Robots ----
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ---- Canonical ----
  alternates: {
    canonical: "https://boreholepros.co.za",
  },

  // ---- FAVICONS + ICONS ----
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

// ---------------------------------------------------------
// VIEWPORT (Mobile optimization)
// ---------------------------------------------------------
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

// ---------------------------------------------------------
// ROOT LAYOUT
// ---------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <head>
    {/* Google Ads Tag */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-17888460394"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17888460394');
        `,
      }}
    />

    {/* JSON-LD STRUCTURED DATA */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["PlumbingService", "LocalBusiness"],
          name: "Borehole Pros",
          description:
            "Expert Borehole Drilling & Plumbing Services Across South Africa",
          url: "https://boreholepros.co.za",
          telephone: "060-348-8268",
          priceRange: "ZAR",
          areaServed: { "@type": "Country", name: "South Africa" },
          availableService: [
            { "@type": "Service", name: "Borehole Drilling" },
            { "@type": "Service", name: "Borehole Installation" },
            { "@type": "Service", name: "Emergency Plumbing" },
            { "@type": "Service", name: "Geyser Installation" },
            { "@type": "Service", name: "Leak Detection" },
            { "@type": "Service", name: "Drain Cleaning" },
          ],
          openingHours: "Mo-Su 00:00-23:59",
          sameAs: [],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            telephone: "060-348-8268",
            areaServed: "ZA",
          },
        }),
      }}
    />
  </head>


      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
