import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Borehole Pros</h3>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              South Africa's #1 borehole drilling and emergency plumbing service. Licensed professionals. 15+ years experience. Available 24/7.
            </p>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61584522675079" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity bg-primary-foreground/10 p-2 rounded-full" 
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/borehole-pros-96b76a3a0/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity bg-primary-foreground/10 p-2 rounded-full" 
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/boreholepros/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity bg-primary-foreground/10 p-2 rounded-full" 
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://za.pinterest.com/boreholepros/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity bg-primary-foreground/10 p-2 rounded-full" 
                aria-label="Visit our Pinterest page"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <div className="space-y-2 text-xs">
              <a 
                href="https://linktr.ee/boreholepros" 
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-75 transition-opacity text-accent font-semibold"
              >
                → All Our Links
              </a>
              <a 
                href="https://about.me/boreholepros" 
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-75 transition-opacity"
              >
                → About Us Profile
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Core Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/borehole-drilling" className="hover:opacity-75 transition-opacity hover:underline">
                  Borehole Drilling
                </Link>
              </li>
              <li>
                <Link href="/borehole-installation" className="hover:opacity-75 transition-opacity hover:underline">
                  Borehole Installation
                </Link>
              </li>
              <li>
                <Link href="/borehole-maintenance" className="hover:opacity-75 transition-opacity hover:underline">
                  Borehole Maintenance
                </Link>
              </li>
              <li>
                <Link href="/borehole-near-me" className="hover:opacity-75 transition-opacity hover:underline">
                  Borehole Near Me 
                </Link>
              </li>
              <li>
                <Link href="/solar-borehole-pumps" className="hover:opacity-75 transition-opacity hover:underline">
                  Solar Borehole Pumps
                </Link>
              </li
              <li>
                <Link href="/borehole-water-testing" className="hover:opacity-75 transition-opacity hover:underline">
                  Borehole Water Testing
                </Link>
              </li>
      
              <li>
                <Link href="/emergency-plumbing" className="hover:opacity-75 transition-opacity hover:underline">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link href="/leak-detection" className="hover:opacity-75 transition-opacity hover:underline">
                  Leak Detection
                </Link>
              </li>
              <li>
                <Link href="/geyser-installation" className="hover:opacity-75 transition-opacity hover:underline">
                  Geyser Installation
                </Link>
              </li>
              <li>
                <Link href="/plumbing" className="hover:opacity-75 transition-opacity hover:underline">
                  Plumbing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Johannesburg Services */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Johannesburg</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plumber-johannesburg" className="hover:opacity-75 transition-opacity hover:underline">
                  Plumber Johannesburg
                </Link>
              </li>
              <li>
                <Link href="/emergency-plumber-johannesburg" className="hover:opacity-75 transition-opacity hover:underline">
                  Emergency Plumber JHB
                </Link>
              </li>
              <li>
                <Link href="/blocked-drain-johannesburg" className="hover:opacity-75 transition-opacity hover:underline">
                  Blocked Drains JHB
                </Link>
              </li>
              <li>
                <Link href="/geyser-installation-johannesburg" className="hover:opacity-75 transition-opacity hover:underline">
                  Geyser Installation JHB
                </Link>
              </li>
              <li>
                <Link href="/plumber-sandton" className="hover:opacity-75 transition-opacity hover:underline">
                  Plumber Sandton
                </Link>
              </li>
              <li>
                <Link href="/plumber-midrand" className="hover:opacity-75 transition-opacity hover:underline">
                  Plumber Midrand
                </Link>
              </li>
              <li>
                <Link href="/fourways" className="hover:opacity-75 transition-opacity hover:underline">
                  Fourways Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Major Cities */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Major Cities</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/johannesburg" className="hover:opacity-75 transition-opacity hover:underline">
                  Johannesburg
                </Link>
              </li>
              <li>
                <Link href="/cape-town" className="hover:opacity-75 transition-opacity hover:underline">
                  Cape Town
                </Link>
              </li>
              <li>
                <Link href="/plumber-pretoria" className="hover:opacity-75 transition-opacity hover:underline">
                  Pretoria
                </Link>
              </li>
              <li>
                <Link href="/durban" className="hover:opacity-75 transition-opacity hover:underline">
                  Durban
                </Link>
              </li>
              <li>
                <Link href="/sandton" className="hover:opacity-75 transition-opacity hover:underline">
                  Sandton
                </Link>
              </li>
              <li>
                <Link href="/centurion" className="hover:opacity-75 transition-opacity hover:underline">
                  Centurion
                </Link>
              </li>
              <li>
                <Link href="/midrand" className="hover:opacity-75 transition-opacity hover:underline">
                  Midrand
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Contact & Help</h4>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <div>
                  <a href="tel:0603488268" className="hover:opacity-75 transition-opacity font-bold block">
                    060 348 8268
                  </a>
                  <span className="text-xs opacity-75">24/7 Emergency</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <a href="mailto:info@boreholepros.co.za" className="hover:opacity-75 transition-opacity break-all">
                  info@boreholepros.co.za
                </a>
              </div>
              <a
                href="https://wa.me/27603488268"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:opacity-75 transition-opacity font-semibold text-accent"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            <div className="space-y-2 text-sm border-t border-primary-foreground/20 pt-4">
              <Link href="/about" className="block hover:opacity-75 transition-opacity hover:underline">
                About Us
              </Link>
              <Link href="/contact" className="block hover:opacity-75 transition-opacity hover:underline">
                Contact Us
              </Link>
              <Link href="/faq" className="block hover:opacity-75 transition-opacity hover:underline">
                FAQ
              </Link>
              <Link href="/sitemap.xml" className="block hover:opacity-75 transition-opacity hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-75 text-center md:text-left">
              &copy; {currentYear} Borehole Pros. All rights reserved. Licensed Borehole Drilling & Emergency Plumbing Services across South Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs opacity-75">
              <Link href="/privacy" className="hover:opacity-100 transition-opacity hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition-opacity hover:underline">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:opacity-100 transition-opacity hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Borehole Pros",
            url: "https://boreholepros.co.za",
            logo: "https://boreholepros.co.za/logo.png",
            description: "Professional borehole drilling and 24/7 emergency plumbing services across South Africa",
            telephone: "+27603488268",
            email: "info@boreholepros.co.za",
            address: {
              "@type": "PostalAddress",
              addressCountry: "ZA",
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61584522675079",
              "https://www.linkedin.com/in/borehole-pros-96b76a3a0/",
              "https://www.instagram.com/boreholepros/",
              "https://za.pinterest.com/boreholepros/",
              "https://linktr.ee/boreholepros",
              "https://about.me/boreholepros",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+27603488268",
              contactType: "customer service",
              availableLanguage: "English",
              areaServed: "ZA",
            },
          }),
        }}
      />
    </footer>
  )
}
