import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ServiceItem {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  image?: string
  highlight?: boolean
}

interface ServicesGridProps {
  title: string
  description?: string
  services: ServiceItem[]
  columns?: 2 | 3 | 4
}

export function ServicesGrid({ title, description, services, columns = 3 }: ServicesGridProps) {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-max">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{title}</h2>
          {description && <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>}
        </div>

        <div className={cn("grid gap-6", gridClass[columns])}>
          {services.map((service, idx) => (
            <Link key={idx} href={service.href}>
              <Card
                className={cn(
                  "h-full overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer",
                  "hover:border-accent hover:-translate-y-1",
                  service.highlight && "border-2 border-accent bg-accent/5",
                )}
              >
                {service.image && (
                  <div className="relative h-40 w-full overflow-hidden bg-muted">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  {service.icon && <div className="mb-4 text-accent">{service.icon}</div>}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  <div className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
