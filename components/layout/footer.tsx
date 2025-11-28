import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Borehole Pros</h3>
            <p className="text-sm opacity-90 mb-6">
              Expert borehole drilling and plumbing services across South Africa. Available 24/7 for emergencies.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="hover:opacity-75 transition-opacity" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="hover:opacity-75 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="hover:opacity-75 transition-opacity" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Johannesburg Plumbing Services */}
          <div>
            <h4 className="font-semibold mb-4">Johannesburg Plumbing</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plumber-johannesburg" className="hover:opacity-75 transition-opacity">
                  Plumber Johannesburg
                </Link>
              </li>
              <li>
                <Link href="/emergency-plumber-johannesburg" className="hover:opacity-75 transition-opacity">
                  Emergency Plumber
                </Link>
              </li>
              <li>
                <Link href="/blocked-drain-johannesburg" className="hover:opacity-75 transition-opacity">
                  Blocked Drain Services
                </Link>
              </li>
              <li>
                <Link href="/geyser-installation-johannesburg" className="hover:opacity-75 transition-opacity">
                  Geyser Installation
                </Link>
              </li>
              <li>
                <Link href="/emergency-plumbing" className="hover:opacity-75 transition-opacity">
                  Emergency Plumbing General
                </Link>
              </li>
              <li>
                <Link href="/drain-cleaning" className="hover:opacity-75 transition-opacity">
                  Drain Cleaning General
                </Link>
              </li>
            </ul>
          </div>

          {/* Borehole Services - Keyword Focused */}
          <div>
            <h4 className="font-semibold mb-4">Borehole Drilling Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/borehole-drilling" className="hover:opacity-75 transition-opacity">
                  Borehole Drilling
                </Link>
              </li>
              <li>
                <Link href="/borehole-drilling-cost" className="hover:opacity-75 transition-opacity">
                  Borehole Drilling Cost
                </Link>
              </li>
              <li>
                <Link href="/borehole-drilling-edenvale" className="hover:opacity-75 transition-opacity">
                  Borehole Drilling Edenvale
                </Link>
              </li>
              <li>
                <Link href="/borehole-drilling-kempton-park" className="hover:opacity-75 transition-opacity">
                  Borehole Drilling Kempton Park
                </Link>
              </li>
              <li>
                <Link href="/borehole-drilling-midrand" className="hover:opacity-75 transition-opacity">
                  Borehole Drilling Midrand
                </Link>
              </li>
              <li>
                <Link href="/borehole-drilling-krugersdorp" className="hover:opacity-75 transition-opacity">
                  Borehole Drilling Krugersdorp
                </Link>
              </li>
              <li>
                <Link href="/borehole-drilling-roodepoort" className="hover:opacity-75 transition-opacity">
                  Borehole Drilling Roodepoort
                </Link>
              </li>
              <li>
                <Link href="/borehole-drilling-prices-pretoria" className="hover:opacity-75 transition-opacity">
                  Borehole Drilling Prices Pretoria
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">All Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plumbing" className="hover:opacity-75 transition-opacity">
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link href="/geyser-installation" className="hover:opacity-75 transition-opacity">
                  Geyser Installation
                </Link>
              </li>
              <li>
                <Link href="/leak-detection" className="hover:opacity-75 transition-opacity">
                  Leak Detection
                </Link>
              </li>
              <li>
                <Link href="/emergency-plumbing" className="hover:opacity-75 transition-opacity">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link href="/borehole-installation" className="hover:opacity-75 transition-opacity">
                  Borehole Installation
                </Link>
              </li>
              <li>
                <Link href="/borehole-maintenance" className="hover:opacity-75 transition-opacity">
                  Borehole Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Johannesburg Area */}
          <div>
            <h4 className="font-semibold mb-4">Johannesburg Area</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/johannesburg" className="hover:opacity-75 transition-opacity">
                  Johannesburg
                </Link>
              </li>
              <li>
                <Link href="/sandton" className="hover:opacity-75 transition-opacity">
                  Sandton
                </Link>
              </li>
              <li>
                <Link href="/midrand" className="hover:opacity-75 transition-opacity">
                  Midrand
                </Link>
              </li>
              <li>
                <Link href="/randburg" className="hover:opacity-75 transition-opacity">
                  Randburg
                </Link>
              </li>
              <li>
                <Link href="/fourways" className="hover:opacity-75 transition-opacity">
                  Fourways
                </Link>
              </li>
              <li>
                <Link href="/centurion" className="hover:opacity-75 transition-opacity">
                  Centurion
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Services */}
          <div>
            <h4 className="font-semibold mb-4">Emergency Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/borehole-not-working" className="hover:opacity-75 transition-opacity">
                  Borehole Not Working
                </Link>
              </li>
              <li>
                <Link href="/emergency-borehole-repair-johannesburg" className="hover:opacity-75 transition-opacity">
                  Emergency Borehole JNB
                </Link>
              </li>
              <li>
                <Link href="/emergency-borehole-repair-sandton" className="hover:opacity-75 transition-opacity">
                  Emergency Borehole Sandton
                </Link>
              </li>
              <li>
                <Link href="/borehole-emergency-pretoria" className="hover:opacity-75 transition-opacity">
                  Borehole Emergency Pretoria
                </Link>
              </li>
              <li>
                <Link href="/borehole-emergency-johannesburg" className="hover:opacity-75 transition-opacity">
                  Borehole Emergency JNB
                </Link>
              </li>
              <li>
                <Link href="/borehole-pump-emergency-east-rand" className="hover:opacity-75 transition-opacity">
                  Pump Emergency East Rand
                </Link>
              </li>
              <li>
                <Link href="/borehole-not-working-north-west" className="hover:opacity-75 transition-opacity">
                  Borehole North West
                </Link>
              </li>
            </ul>
          </div>

          {/* Plumbers by Location */}
          <div>
            <h4 className="font-semibold mb-4">Plumbers by Location</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plumber-johannesburg" className="hover:opacity-75 transition-opacity">
                  Plumber Johannesburg
                </Link>
              </li>
              <li>
                <Link href="/plumber-sandton" className="hover:opacity-75 transition-opacity">
                  Plumber Sandton
                </Link>
              </li>
              <li>
                <Link href="/plumber-midrand" className="hover:opacity-75 transition-opacity">
                  Plumber Midrand
                </Link>
              </li>
              <li>
                <Link href="/plumber-pretoria" className="hover:opacity-75 transition-opacity">
                  Plumber Pretoria
                </Link>
              </li>
              <li>
                <Link href="/emergency-plumber-johannesburg" className="hover:opacity-75 transition-opacity">
                  Emergency Plumber
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Cities */}
          <div>
            <h4 className="font-semibold mb-4">Other Cities</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cape-town" className="hover:opacity-75 transition-opacity">
                  Cape Town
                </Link>
              </li>
              <li>
                <Link href="/pretoria" className="hover:opacity-75 transition-opacity">
                  Pretoria
                </Link>
              </li>
              <li>
                <Link href="/durban" className="hover:opacity-75 transition-opacity">
                  Durban
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-75 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-75 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:0603488268" className="hover:opacity-75 transition-opacity font-semibold">
                  060 348 8268
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@boreholepros.co.za" className="hover:opacity-75 transition-opacity">
                  info@boreholepros.co.za
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Available: 32 Cities SA</span>
              </div>
              <a
                href="https://wa.me/27603488268"
                className="inline-block text-sm hover:opacity-75 transition-opacity font-semibold text-accent"
              >
                WhatsApp Now →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-75">
            <p>
              &copy; {currentYear} Borehole Pros. All rights reserved. Expert Borehole Drilling & Plumbing Services SA.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
              <Link href="/faq" className="hover:opacity-100 transition-opacity">
                FAQ
              </Link>
              <Link href="/contact" className="hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
