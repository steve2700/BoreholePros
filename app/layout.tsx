import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ClickTracker from "@/components/ClickTracker"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Borehole Drilling Gauteng | Licensed Specialists | Borehole Pros",
  description:
    "Expert borehole drilling and installation across Gauteng. Serving Johannesburg, Pretoria, Sandton, Midrand & Centurion. From R18,000. Free site assessment. Call 060 348 8268!",
  generator: "v0.app",
  keywords: [
    "borehole drilling gauteng",
    "borehole drilling johannesburg",
    "borehole installation gauteng",
    "borehole drilling pretoria",
    "borehole drilling sandton",
    "borehole drilling midrand",
    "borehole drilling centurion",
    "borehole drilling near me",
    "borehole pump installation gauteng",
    "borehole repair johannesburg",
  ],
  authors: [{ name: "Borehole Pros" }],
  creator: "Borehole Pros",
  publisher: "Borehole Pros",
  applicationName: "Borehole Pros",
  metadataBase: new URL("https://boreholepros.co.za"),

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "./",
    siteName: "Borehole Pros",
    title: "Borehole Drilling Gauteng | Licensed Specialists | Borehole Pros",
    description:
      "Expert borehole drilling and installation across Gauteng. From R18,000. Free site assessment. Call 060 348 8268.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Borehole Pros - Expert Borehole Drilling Gauteng",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Borehole Drilling Gauteng | Borehole Pros",
    description: "Expert borehole drilling across Gauteng. From R18,000. Free site assessment. Call 060 348 8268.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // "./" resolves against metadataBase for each page, so every page
  // gets its own canonical URL instead of the homepage.
  alternates: {
    canonical: "./",
  },

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Borehole Pros",
              description: "Expert Borehole Drilling & Installation Services Across Gauteng",
              url: "https://boreholepros.co.za",
              telephone: "+27603488268",
              priceRange: "ZAR",
              areaServed: [
                { "@type": "City", name: "Johannesburg" },
                { "@type": "City", name: "Pretoria" },
                { "@type": "City", name: "Sandton" },
                { "@type": "City", name: "Midrand" },
                { "@type": "City", name: "Centurion" },
                { "@type": "City", name: "Kempton Park" },
                { "@type": "City", name: "Roodepoort" },
                { "@type": "AdministrativeArea", name: "Gauteng" },
              ],
              availableService: [
                { "@type": "Service", name: "Borehole Drilling" },
                { "@type": "Service", name: "Borehole Installation" },
                { "@type": "Service", name: "Borehole Maintenance" },
                { "@type": "Service", name: "Borehole Pump Repair" },
                { "@type": "Service", name: "Solar Borehole Pumps" },
                { "@type": "Service", name: "Borehole Water Testing" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+27603488268",
                areaServed: "ZA",
                availableLanguage: ["English", "Afrikaans"],
              },
            }),
          }}
        />
      </head>

      <body className="font-sans antialiased">
        {/* Google tag (gtag.js) - Google Ads account AW-18489504818. Loaded once for every page. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18489504818"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18489504818');
          `}
        </Script>

        {/* Tracks every tel: and WhatsApp link click on all pages */}
        <ClickTracker />

        <Header />
        {children}
        <Footer />

        {/* WhatsApp Floating Button - Shows on ALL pages */}
        <WhatsAppButton />

        <Analytics />
      </body>
    </html>
  )
}
