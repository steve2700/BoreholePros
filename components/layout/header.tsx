"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PHONE_DISPLAY = "060 348 8268"
const PHONE_HREF = "tel:0603488268"
const WHATSAPP_HREF =
  "https://wa.me/27603488268?text=Hi%20Borehole%20Pros!%20I%20need%20help%20with%20my%20borehole."

const navigation = [
  { name: "Borehole Services", href: "/borehole-drilling" },
  { name: "Plumbing Services", href: "/emergency-plumbing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

/** Official WhatsApp logo glyph (same icon used by the floating button) */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top bar */}
      <div className="bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span>24/7 Emergency Service:</span>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:no-underline"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-max flex h-16 items-center justify-between">
        {/* Logo + text */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/boreholepros-logo.png"
            alt="Borehole Pros Logo"
            width={40}
            height={40}
            priority
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
          <span className="text-base font-bold leading-none text-primary sm:text-xl">
            Borehole Pros
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative py-1 text-sm font-medium transition-colors hover:text-primary",
                "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                isActive(item.href)
                  ? "text-primary after:scale-x-100"
                  : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop call-to-actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" className="gap-2 font-semibold shadow-sm">
            <a href={PHONE_HREF}>
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="gap-2 bg-[#25D366] font-semibold text-white shadow-sm hover:bg-[#1ebe5a]"
          >
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile: quick actions + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={PHONE_HREF}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform active:scale-95"
          >
            <Phone className="h-5 w-5" />
            <span className="sr-only">Call now</span>
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform active:scale-95"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="sr-only">WhatsApp</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 hover:bg-muted"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="container-max flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-muted hover:text-primary",
                  isActive(item.href)
                    ? "bg-muted text-primary"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-4">
              <Button asChild size="lg" className="h-12 w-full gap-2 text-base font-semibold">
                <a href={PHONE_HREF}>
                  <Phone className="h-5 w-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 w-full gap-2 bg-[#25D366] text-base font-semibold text-white hover:bg-[#1ebe5a]"
              >
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
