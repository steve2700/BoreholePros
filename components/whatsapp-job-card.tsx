"use client"

import { useMemo, useState } from "react"
import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { cn } from "@/lib/utils"

const URGENCY = ["Emergency - right now", "Today", "This week", "Just a quote"]

const AREAS = [
  "Johannesburg",
  "Sandton",
  "Randburg / Fourways",
  "Roodepoort / Krugersdorp",
  "Soweto",
  "Midrand",
  "Centurion",
  "Pretoria",
  "Kempton Park / Benoni / Boksburg",
  "Germiston / Alberton / Springs",
  "Vereeniging / Vaal",
  "Hartbeespoort / Brits / Magaliesburg",
  "Other area (I'll say where)",
]

const DEFAULT_PROBLEMS = [
  "Pump not working",
  "No water",
  "Low pressure",
  "Replace my pump",
  "New pump installation",
  "Something else",
]

function Chip({
  selected,
  onClick,
  children,
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "rounded-xl border-2 px-4 py-3 text-left text-sm font-semibold transition active:scale-[0.97] sm:text-base",
        selected
          ? "border-[#25D366] bg-[#25D366]/10 text-foreground ring-2 ring-[#25D366]/40"
          : "border-border bg-background hover:border-[#25D366]/60"
      )}
    >
      {children}
    </button>
  )
}

function StepTitle({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h3 className="mb-3 flex items-center gap-3 text-lg font-bold">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
        {n}
      </span>
      {children}
    </h3>
  )
}

export default function WhatsAppJobCard({
  problems = DEFAULT_PROBLEMS,
  title = "Get Your Quote on WhatsApp in 30 Seconds",
  subtitle = "Tap your answers, then press send. We already get your number from WhatsApp.",
  defaultProblem = "",
}: {
  problems?: string[]
  title?: string
  subtitle?: string
  defaultProblem?: string
}) {
  const [problem, setProblem] = useState(defaultProblem)
  const [urgency, setUrgency] = useState("Today")
  const [area, setArea] = useState("")
  const [name, setName] = useState("")
  const [details, setDetails] = useState("")

  const href = useMemo(() => {
    const lines: string[] = [
      "Hi Borehole Pros! I'd like help please.",
      "",
      "*Job request from website*",
    ]
    if (problem) lines.push(`Problem: ${problem}`)
    if (urgency) lines.push(`When: ${urgency}`)
    if (area) lines.push(`Area: ${area}`)
    if (name.trim()) lines.push(`Name: ${name.trim()}`)
    if (details.trim()) lines.push(`Details: ${details.trim()}`)
    return `https://wa.me/27603488268?text=${encodeURIComponent(lines.join("\n"))}`
  }, [problem, urgency, area, name, details])

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
      <h2 className="mb-1 text-2xl font-extrabold sm:text-3xl">{title}</h2>
      <p className="mb-8 text-muted-foreground">{subtitle}</p>

      <div className="space-y-8">
        <div>
          <StepTitle n={1}>What&apos;s the problem?</StepTitle>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {problems.map((p) => (
              <Chip key={p} selected={problem === p} onClick={() => setProblem(p)}>
                {p}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <StepTitle n={2}>How urgent is it?</StepTitle>
          <div className="grid grid-cols-2 gap-3">
            {URGENCY.map((u) => (
              <Chip key={u} selected={urgency === u} onClick={() => setUrgency(u)}>
                {u}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <StepTitle n={3}>Where are you?</StepTitle>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            aria-label="Your area"
            className="mb-3 w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-base focus:border-[#25D366] focus:outline-none"
          >
            <option value="">Choose your area</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            aria-label="Your name"
            className="mb-3 w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-base focus:border-[#25D366] focus:outline-none"
          />
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Anything else? (optional)"
            aria-label="Extra details"
            rows={2}
            className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-base focus:border-[#25D366] focus:outline-none"
          />
        </div>

        <div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-5 text-xl font-extrabold text-white shadow-xl transition hover:bg-[#1ebe5a] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-8 w-8" />
            Send Job Card on WhatsApp
          </a>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            WhatsApp opens with everything filled in. Just press send.
          </p>
          <a
            href="tel:0603488268"
            className="mt-4 flex items-center justify-center gap-2 font-bold text-primary hover:underline"
          >
            <Phone className="h-5 w-5" />
            Rather talk? Call 060 348 8268
          </a>
        </div>
      </div>
    </div>
  )
}
