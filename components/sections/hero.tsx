import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2 } from "lucide-react"

interface HeroProps {
  title: string
  subtitle: string
  description: string
  cta?: {
    primary?: { text: string; href: string }
    secondary?: { text: string; href: string }
  }
  imageSrc?: string
}

export function Hero({
  title,
  subtitle,
  description,
  imageSrc,
  cta = {
    primary: { text: "Get Free Quote", href: "/contact" },
    secondary: { text: "Call 060 348 8268", href: "tel:0603488268" },
  },
}: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl"></div>
      </div>

      {imageSrc && (
        <div className="absolute inset-0 opacity-15 z-0">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
      )}

      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">{subtitle}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">{title}</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">{description}</p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Same-Day Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Certified Professionals</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {cta.primary && (
              <Link href={cta.primary.href}>
                <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                  {cta.primary.text}
                </Button>
              </Link>
            )}
            {cta.secondary && (
              <a href={cta.secondary.href} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Phone className="w-5 h-5" />
                  {cta.secondary.text}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
