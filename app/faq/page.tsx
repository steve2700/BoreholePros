import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | Borehole Pros | Common Questions About Drilling & Plumbing",
  description:
    "Frequently Asked Questions about borehole drilling, plumbing services, costs, installation, and emergency repairs. Get answers from Borehole Pros experts.",
  robots: "index, follow",
}

const faqCategories = [
  {
    category: "Borehole Drilling Questions",
    icon: "🔨",
    questions: [
      {
        q: "How much does borehole drilling cost in South Africa?",
        a: "Borehole drilling costs range from ZAR 8,000-25,000+ depending on depth, location, geology, and water availability. Depths of 40-80 meters are typical. We provide free quotes after site assessment. Factors affecting cost include: rock type (limestone, granite, shale), water table location, equipment access difficulty, and permit requirements. Contact us for a specific quote for your area.",
      },
      {
        q: "How deep should a borehole be?",
        a: "Average boreholes in South Africa are 40-80 meters deep, but depth varies by location. Water table depth differs by region: Johannesburg/Gauteng averages 50-70m, Cape Town 30-50m, Pretoria 40-60m, Durban 20-40m. A site assessment determines your specific needs. Deeper boreholes cost more but may access better quality water. We use modern drilling equipment to reach depths up to 150+ meters if needed.",
      },
      {
        q: "How long does borehole drilling take?",
        a: "A typical borehole drilling project takes 1-3 days depending on depth and geology. A 60-meter borehole usually takes 1-2 days. Installation of pump and testing adds 1 day. Harder rock formations or difficult access may extend timelines. We schedule emergency drilling within 24 hours in most cases. Weather conditions may affect schedules. We'll provide a realistic timeline during your consultation.",
      },
      {
        q: "Do I need a permit for a borehole in South Africa?",
        a: "Permit requirements vary by province and municipality. Most areas require notification to local water authorities or permits for boreholes over certain depths. In Johannesburg, Pretoria, Cape Town, and Durban, permits are usually required. We help coordinate with local authorities and can advise on requirements. Contact your local municipality or let us handle the process for you.",
      },
      {
        q: "How long will my borehole last?",
        a: "A well-maintained borehole can last 20-50+ years or even indefinitely. Lifespan depends on: water quality (acidic water corrodes pipes), maintenance frequency (annual testing and cleaning recommended), pump quality, and geological stability. Regular maintenance including water testing, pump servicing, and pipe inspection extends lifespan significantly. We offer maintenance packages starting at ZAR 1,500/year.",
      },
      {
        q: "What if my borehole runs dry?",
        a: "Boreholes rarely go completely dry. If water level drops: 1) We lower the pump deeper into the bore, 2) Investigate water quality issues, 3) Consider drilling a secondary borehole, 4) Implement water conservation measures. Seasonal variation is normal—water levels fluctuate with rainfall. Severe droughts may affect depth temporarily. Our technicians can diagnose the issue and recommend solutions.",
      },
      {
        q: "How do I maintain my borehole?",
        a: "Regular maintenance extends borehole life and ensures water quality: 1) Annual water testing (costs ZAR 500-1,200), 2) Pump servicing every 12 months (ZAR 1,500-2,500), 3) Pipe inspections for corrosion, 4) Cleaning sediment buildup annually. We offer maintenance packages. Signs you need maintenance: reduced water pressure, discolored water, strange tastes/odors, or pump noise.",
      },
      {
        q: "Is borehole water safe to drink?",
        a: "Borehole water varies in quality by location. We recommend annual water testing (ZAR 500-1,200) to check for bacteria, minerals, pH, hardness, and contaminants. Many boreholes require filtration or treatment systems (cost ZAR 3,000-15,000). In Johannesburg/Sandton, water is typically safe after basic filtration. In Cape Town and coastal areas, salinity testing is essential. We can recommend appropriate treatment solutions.",
      },
      {
        q: "What is a borehole pump and how much does installation cost?",
        a: "A borehole pump lifts water from underground to your home/business. Costs range: Submersible pump installation ZAR 4,500-8,000, pressure system ZAR 2,000-5,000, solar pump system ZAR 12,000-35,000. Pump size depends on depth, water volume needed, and pressure requirements. We recommend quality pumps with 5-10 year warranties. Installation includes testing and calibration.",
      },
      {
        q: "Is solar-powered borehole drilling a good option?",
        a: "Yes! Solar systems are excellent for reducing long-term operating costs by 80-90%. Initial investment ZAR 15,000-40,000 but pays for itself in 3-5 years through electricity savings. Ideal for areas with good sunlight (most of South Africa). Systems work 24/7 with battery backup. Maintenance is minimal. Perfect for farms, businesses, and remote properties. We install quality solar pumping systems with 10-year warranties.",
      },
    ],
  },
  {
    category: "Plumbing Services Questions",
    icon: "🔧",
    questions: [
      {
        q: "How much does a plumber charge in South Africa?",
        a: "Plumbing costs vary by service: Emergency call-out ZAR 800-1,500, basic repairs ZAR 500-2,500, geyser installation ZAR 4,500-15,000, drain cleaning ZAR 1,200-4,000, leak detection ZAR 2,000-5,000. Most jobs include: diagnosis, parts, labor. We provide fixed quotes before starting work. Emergency services after 6pm or weekends incur 25-50% surcharge. Call 060 348 8268 for immediate quote.",
      },
      {
        q: "What should I do in a plumbing emergency?",
        a: "For emergencies (burst pipes, blockages, water leaks): 1) Turn off water main immediately, 2) Call us 24/7 on 060 348 8268, 3) Use WhatsApp for photos if helpful, 4) Contain water damage with towels/buckets, 5) Don't attempt major repairs yourself. We respond within 30-60 minutes in Johannesburg/Pretoria, 45-90 minutes in other areas. Emergency rates apply but worth it to prevent damage (water damage costs ZAR 50,000+).",
      },
      {
        q: "How do I fix a leaking tap/dripping faucet?",
        a: "DIY approach: Turn off water supply, unscrew tap handle, replace rubber washer (costs ZAR 5-20). If leak continues, cartridge/valve needs replacement (ZAR 200-600). Professional repair costs ZAR 500-1,200 but guarantees warranty. Ignoring leaks wastes 10,000+ liters yearly (adds ZAR 200-400 to water bill). Better to call us for permanent fix. We fix most taps in under 30 minutes.",
      },
      {
        q: "What causes low water pressure?",
        a: "Common causes: 1) Clogged aerators (clean with vinegar), 2) Pipe corrosion or mineral buildup, 3) Pressure regulator issues, 4) Municipal supply problems, 5) Leaks reducing pressure. Solutions: Clean aerators (DIY, free), Install pressure booster pump (ZAR 2,500-5,000), Replace corroded pipes (ZAR 3,000-8,000), Install water softener if mineral-related (ZAR 4,000-12,000). We diagnose and fix permanently.",
      },
      {
        q: "How long does a geyser last?",
        a: "Average lifespan: Electric geysers 8-12 years, gas geysers 10-15 years, solar geysers 15-25 years. Lifespan depends on: water quality (hard water reduces life), maintenance (anode rod replacement extends life 2-3 years), usage patterns. Signs of failure: Rust-colored water, leaks, low temperature, strange noises. Regular servicing (ZAR 800-1,500 annually) extends lifespan. We repair geysers or install quality replacements with 5-10 year warranties.",
      },
      {
        q: "Can I save money with a geyser upgrade?",
        a: "Yes! Energy savings options: Solar geysers save 40-60% (pays for itself in 4-7 years), Heat pump systems save 50-70%, Gas geysers save 20-30% vs electric, Instant water heaters eliminate storage losses. Upfront costs: Solar ZAR 12,000-25,000, Heat pump ZAR 15,000-30,000, Gas ZAR 8,000-15,000. Long-term savings justify investment. We install all types with professional guidance.",
      },
      {
        q: "What causes blocked drains?",
        a: "Common causes: Hair buildup (especially bathrooms), Grease accumulation (kitchens), Food waste, Tree roots penetrating pipes, Mineral scale from hard water, Foreign objects (wet wipes, sanitary products). Prevention: Use drain covers, Avoid pouring grease, Regular drain cleaning (ZAR 1,200-2,000 annually), Install sediment filters. Professional drain cleaning with camera inspection (ZAR 1,500-3,500) clears blockages permanently.",
      },
      {
        q: "How much does drain cleaning cost?",
        a: "Drain cleaning costs: Simple blockage ZAR 1,200-1,800, Stubborn blockage ZAR 2,000-3,500, Tree root removal ZAR 3,500-8,000, Pipe replacement ZAR 5,000-15,000+. Cost depends on blockage severity and location. We use advanced equipment: Camera inspection (identifies problem), High-pressure jetting (clears buildup), Rooter machine (removes tree roots). Fixed quotes provided after diagnosis. Prevention maintenance costs ZAR 800-1,200 annually.",
      },
      {
        q: "How do I detect a water leak?",
        a: "Signs of leaks: Unusually high water bills (sudden spike = leak), Wet patches on walls/ceilings, Mold or mildew growth, Water sounds when no taps running, Soft ground patches in yard. Professional leak detection: We use acoustic equipment, thermal imaging, and smoke testing (cost ZAR 2,000-4,000). Early detection saves thousands in water damage. Underground leaks waste 10,000+ liters daily.",
      },
      {
        q: "What should I do about a burst pipe?",
        a: "Immediate steps: 1) Turn off water main, 2) Turn off geyser (prevent damage), 3) Call us immediately 060 348 8268, 4) Contain water damage, 5) Take photos for insurance. Repair costs: Small repair ZAR 800-1,500, Pipe section replacement ZAR 1,500-3,000, Full line replacement ZAR 5,000-15,000. Emergency service 24/7. Water damage (mold, structural damage) costs exponentially more if not addressed immediately.",
      },
    ],
  },
  {
    category: "Service & General Questions",
    icon: "✓",
    questions: [
      {
        q: "What areas do you service?",
        a: "We service 32+ cities across South Africa including: Johannesburg, Sandton, Midrand, Randburg, Centurion, Pretoria, Cape Town, Durban, and all surrounding suburbs. We handle emergency calls nationwide with response times: Johannesburg/Pretoria metro 30-60 minutes, Other major cities 1-2 hours, Remote areas same-day scheduling. Call 060 348 8268 to confirm coverage for your area.",
      },
      {
        q: "Do you offer emergency services?",
        a: "Yes! We operate 24/7 emergency services for: Burst pipes, Blockages, Water leaks, Boreholes not working, Geyser failures. Emergency response times: 30-60 minutes in metro areas, 1-2 hours in other areas. Emergency surcharge: 25% after 6pm, 50% after 10pm. Call 060 348 8268 or WhatsApp immediately. Having an emergency contact on speed dial prevents costly water damage.",
      },
      {
        q: "Do you offer free quotes?",
        a: "Yes, all quotes are free! We provide detailed estimates after: Site inspection, Assessment of your specific needs, Material and labor cost breakdown. Quotes are valid 14 days. No obligation—you can shop around. For phone quotes, provide detailed information about your problem. Emergency calls may incur ZAR 500-800 assessment fee (waived if you proceed with work).",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept: Cash payment on completion, EFT bank transfers, Card payments (Visa/Mastercard), WhatsApp Money transfers (if available in your area). Deposit policy: Large jobs may require 30-50% deposit to secure booking. Payment on completion for most jobs. We issue invoices with warranty terms. Transparent pricing—no hidden fees.",
      },
      {
        q: "Do your technicians have certifications?",
        a: "Yes! All our technicians are: Fully trained in borehole drilling and plumbing, Hold current certifications in their fields, Carry liability insurance, Undergo background checks, Wear company uniforms for identification. We employ only professional, trustworthy technicians. We guarantee quality work backed by 12-month warranties.",
      },
      {
        q: "What warranty do you offer?",
        a: "All our work includes: 12-month workmanship warranty covering defects or issues with our installation/repair. 5-10 year manufacturer warranty on pumps, pipes, and fixtures supplied by us. Warranty covers labor to fix issues—parts may be charged if damaged by misuse. Warranty excludes normal wear, weather damage, or customer misuse.",
      },
      {
        q: "How do I schedule a service?",
        a: "Scheduling is easy: 1) Call 060 348 8268, 2) Use WhatsApp: wa.me/27603488268, 3) Fill contact form on our website, 4) Email info@boreholepros.co.za. Provide: Your name, Location, Service needed, Preferred date/time. We confirm availability and provide arrival window. Emergency calls handled immediately. Most scheduling happens same-day.",
      },
      {
        q: "What should I prepare for your visit?",
        a: "Before technician arrival: Ensure safe access to work areas, Turn off electricity/gas in work areas if needed, Clear pets from work zone, Have adult home to grant access, Prepare list of all issues you've noticed. This ensures efficient service and prevents delays.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Find answers to common questions about borehole drilling, plumbing services, and emergency repairs.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-max max-w-4xl">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.category}
              </h2>

              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`${catIdx}-${qIdx}`}
                    className="border border-muted-foreground/20 rounded-lg px-4 overflow-hidden"
                  >
                    <AccordionTrigger className="hover:bg-muted/50 transition-colors py-4 font-semibold text-lg text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-base leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Still Have Questions */}
          <div className="mt-16 p-8 bg-muted rounded-lg border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Can't find the answer you're looking for? Our expert team is ready to help. Contact us anytime for a
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0603488268"
                className="inline-block px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-colors text-center"
              >
                Call 060 348 8268
              </a>
              <a
                href="https://wa.me/27603488268"
                className="inline-block px-6 py-3 border border-accent hover:bg-accent/10 font-bold rounded-lg transition-colors text-center"
              >
                WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-muted-foreground hover:bg-muted font-bold rounded-lg transition-colors text-center"
              >
                Contact Form
              </Link>
            </div>
          </div>

          {/* Related Pages */}
          <div className="mt-12 pt-12 border-t border-muted">
            <p className="text-sm text-muted-foreground mb-4">Related Resources:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/borehole-drilling" className="text-accent hover:underline">
                Borehole Drilling Service
              </Link>
              <Link href="/emergency-plumbing" className="text-accent hover:underline">
                Emergency Plumbing
              </Link>
              <Link href="/borehole-drilling-cost" className="text-accent hover:underline">
                Drilling Cost Guide
              </Link>
              <Link href="/geyser-installation" className="text-accent hover:underline">
                Geyser Installation
              </Link>
              <Link href="/leak-detection" className="text-accent hover:underline">
                Leak Detection
              </Link>
              <Link href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-accent hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
