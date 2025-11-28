import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
}

export function CTASection({
  title,
  description,
  primaryText = "Get Free Quote",
  primaryHref = "/contact",
  secondaryText = "Call 060 348 8268",
  secondaryHref = "tel:0603488268",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{title}</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryHref}>
            <Button size="lg" variant="secondary">
              {primaryText}
            </Button>
          </Link>
          <a href={secondaryHref}>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20"
            >
              <Phone className="w-5 h-5" />
              {secondaryText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
