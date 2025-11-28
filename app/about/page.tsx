import type { Metadata } from "next"
import { Award, Users, Zap, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Borehole Pros | Expert Team | South Africa",
  description:
    "About Borehole Pros - South Africa's trusted borehole drilling and plumbing experts. 15+ years experience. Certified professionals.",
}

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About Borehole Pros</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            South Africa's most trusted expert in borehole drilling and plumbing services since 2008.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Borehole Pros was founded with a simple mission: to provide expert, reliable water solutions to
                homeowners and businesses across South Africa. What started as a small team has grown into the most
                trusted name in borehole drilling and plumbing services.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 15 years of combined experience, our team has successfully completed over 1,000 borehole
                drilling projects and countless plumbing installations across 32 cities nationwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to delivering exceptional service, using only modern equipment, and treating every
                project like it's our own home.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-8 text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <p className="font-semibold">Projects Completed</p>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <p className="font-semibold">Years Experience</p>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-3xl font-bold text-accent mb-2">32</div>
                <p className="font-semibold">Cities Served</p>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="font-semibold">Emergency Service</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12 text-balance">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Expertise",
                description: "Certified professionals with years of industry experience",
              },
              {
                icon: Heart,
                title: "Trust",
                description: "Honest pricing and transparent communication always",
              },
              {
                icon: Zap,
                title: "Speed",
                description: "Fast response times and efficient service delivery",
              },
              {
                icon: Users,
                title: "Care",
                description: "Your satisfaction is our top priority",
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={idx} className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-2 text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12 text-balance">Why Customers Choose Borehole Pros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              "Same-day service available in most areas",
              "Certified and licensed professionals",
              "1000+ successful projects completed",
              "Competitive pricing with no hidden costs",
              "Full warranty on all work",
              "24/7 emergency service available",
              "Modern equipment and techniques",
              "All areas fully insured",
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Experience the Borehole Pros Difference</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover why thousands of South Africans trust us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:0603488268"
              className="inline-block px-8 py-3 bg-primary-foreground/10 border border-primary-foreground hover:bg-primary-foreground/20 font-bold rounded-lg transition-colors"
            >
              Call 060 348 8268
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
