import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Award, Users, Clock } from "lucide-react"

export function TrustSignals() {
  const signals = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available round the clock for urgent plumbing and borehole emergencies",
      link: "/emergency-plumbing",
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Licensed and certified technicians with years of industry experience",
      link: "/about",
    },
    {
      icon: Users,
      title: "1000+ Projects Completed",
      description: "Trusted by homeowners and businesses across South Africa",
      link: "/contact",
    },
    {
      icon: CheckCircle2,
      title: "Warranty & Guarantees",
      description: "All work backed by our satisfaction guarantee and warranty",
      link: "/about",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-max">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">Why Choose Borehole Pros?</h2>
          <p className="text-lg text-muted-foreground">Trusted by thousands of customers across South Africa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, idx) => {
            const Icon = signal.icon
            return (
              <Link key={idx} href={signal.link}>
                <Card className="p-6 text-center hover:shadow-md transition-shadow hover:border-accent cursor-pointer h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{signal.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{signal.description}</p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
