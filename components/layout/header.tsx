"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Borehole Services", href: "/borehole-drilling" },
    { name: "Plumbing Services", href: "/emergency-plumbing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          24/7 Emergency Service Available:{" "}
          <a href="tel:0603488268" className="font-bold underline">
            060 348 8268
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-max flex items-center justify-between h-16">

        {/* Logo + Text */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/boreholepros-logo.png"
            alt="Borehole Pros Logo"
            width={40}
            height={40}
            priority
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
          />
          <span className="font-bold text-base sm:text-xl leading-none text-primary">
            Borehole Pros
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop call-to-actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0603488268">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
          <a href="https://wa.me/27603488268" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container-max py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex gap-2 pt-4">
              <a href="tel:0603488268" className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
              </a>

              <a
                href="https://wa.me/27603488268"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="sm" className="w-full gap-2 bg-primary hover:bg-primary/90">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
