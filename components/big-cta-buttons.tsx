import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { cn } from "@/lib/utils"

export const PHONE_HREF = "tel:0603488268"
export const PHONE_DISPLAY = "060 348 8268"

export function whatsappLink(message: string) {
  return `https://wa.me/27603488268?text=${encodeURIComponent(message)}`
}

const base =
  "inline-flex w-full items-center justify-center gap-3 rounded-xl px-8 py-5 text-xl font-extrabold text-white shadow-xl transition active:scale-[0.98] sm:w-auto"

/** Big red tap-to-call button */
export function BigCallButton({
  label = "Speak to a Technician Now",
  className,
}: {
  label?: string
  className?: string
}) {
  return (
    <a href={PHONE_HREF} className={cn(base, "bg-red-600 hover:bg-red-700", className)}>
      <Phone className="h-7 w-7" />
      <span>{label}</span>
    </a>
  )
}

/** Big green WhatsApp button with the real WhatsApp icon */
export function BigWhatsAppButton({
  label = "WhatsApp Now",
  message = "Hi Borehole Pros! I need help with my borehole pump.",
  className,
}: {
  label?: string
  message?: string
  className?: string
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, "bg-[#25D366] hover:bg-[#1ebe5a]", className)}
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span>{label}</span>
    </a>
  )
}

/** Huge clickable phone number line */
export function BigNumberLink({
  prefix = "Speak to a Pro Now:",
  className,
}: {
  prefix?: string
  className?: string
}) {
  return (
    <a
      href={PHONE_HREF}
      className={cn("inline-flex flex-wrap items-center gap-x-3 gap-y-1 font-bold hover:underline", className)}
    >
      <span className="text-lg sm:text-xl">{prefix}</span>
      <span className="text-3xl underline underline-offset-4 sm:text-4xl">{PHONE_DISPLAY}</span>
    </a>
  )
}
