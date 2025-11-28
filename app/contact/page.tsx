import type { Metadata } from "next"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Borehole Pros | Get Free Quote | 24/7 Service",
  description:
    "Contact Borehole Pros for a free quote. Phone, WhatsApp, email. Available 24/7 for emergencies. Call 060 348 8268.",
}

export default function ContactPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get Your Free Quote Today</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Contact us for fast, professional borehole and plumbing service. Available 24/7 for emergencies.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">24/7 Emergency Line</p>
              <a href="tel:0603488268" className="font-bold text-primary hover:underline text-lg">
                060 348 8268
              </a>
            </Card>

            {/* WhatsApp */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Quick Messages</p>
              <a
                href="https://wa.me/27603488268"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:underline text-lg"
              >
                Start Chat
              </a>
            </Card>

            {/* Email */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Non-Urgent</p>
              <a
                href="mailto:info@boreholepros.co.za"
                className="font-bold text-primary hover:underline text-lg break-all text-sm"
              >
                info@boreholepros.co.za
              </a>
            </Card>

            {/* Service Areas */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Service Areas</h3>
              <p className="text-muted-foreground mb-4">32 Cities</p>
              <p className="font-bold text-primary text-sm">Nationwide Coverage</p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your phone"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Area / City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Which city are you in?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Type</label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>-- Select Service --</option>
                      <option>Borehole Drilling</option>
                      <option>Borehole Installation</option>
                      <option>Emergency Plumbing</option>
                      <option>Geyser Installation</option>
                      <option>Leak Detection</option>
                      <option>Drain Cleaning</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message / Details</label>
                    <textarea
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                      placeholder="Describe your situation..."
                      required
                    ></textarea>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Quote Request
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    We'll respond within 1 business hour during business hours or the next morning for after-hours
                    requests.
                  </p>
                </form>
              </Card>
            </div>

            <div>
              <Card className="p-6 bg-primary text-primary-foreground h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <span className="font-semibold">Response Time:</span>
                      <p className="opacity-90">30-90 mins (emergencies)</p>
                    </li>
                    <li>
                      <span className="font-semibold">Service Hours:</span>
                      <p className="opacity-90">24/7 Emergency • 7am-6pm Standard</p>
                    </li>
                    <li>
                      <span className="font-semibold">Service Areas:</span>
                      <p className="opacity-90">32 Major Cities Nationwide</p>
                    </li>
                    <li>
                      <span className="font-semibold">Guarantee:</span>
                      <p className="opacity-90">Satisfaction guaranteed on all work</p>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-primary-foreground/20 mt-6">
                  <p className="text-sm opacity-90 mb-4">
                    <strong>For Emergencies:</strong>
                  </p>
                  <Button asChild className="w-full mb-2 bg-accent hover:bg-accent/90">
                    <a href="tel:0603488268">Call 060 348 8268</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-primary-foreground bg-transparent">
                    <a href="https://wa.me/27603488268" target="_blank" rel="noopener noreferrer">
                      WhatsApp Now
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12 text-balance">We Service 32 Cities Across South Africa</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Johannesburg",
              "Cape Town",
              "Pretoria",
              "Durban",
              "Sandton",
              "Centurion",
              "Midrand",
              "Randburg",
              "Bryanston",
              "Midrand",
              "Port Elizabeth",
              "Bloemfontein",
              "Gqeberha",
              "Pietermaritzburg",
              "Witbank",
              "Germiston",
              "Soweto",
              "Bedfordview",
              "Kempton Park",
              "Springs",
              "Boksburg",
              "Alberton",
              "Vereeniging",
              "Klerksdorp",
              "Potchefstroom",
              "Mahikeng",
              "Nelspruit",
              "Polokwane",
              "Gaborone",
              "Upington",
              "George",
              "Somerset West",
            ].map((city) => (
              <div
                key={city}
                className="p-4 bg-background rounded-lg border border-border text-center hover:border-accent transition-colors"
              >
                <p className="font-medium">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
