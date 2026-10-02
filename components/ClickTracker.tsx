"use client"

import { useEffect } from "react"

/**
 * Tracks every click on a phone (tel:) or WhatsApp (wa.me) link, on every page.
 * Mounted once in app/layout.tsx.
 *
 * Fires two things on each click:
 *  1. A GA-style event (call_click / whatsapp_click) with page + button details
 *  2. A Google Ads conversion event, once you paste the conversion labels below
 */

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const AW_ID = "AW-18489504818"

// Paste the label from Google Ads (the part after the slash in
// send_to: 'AW-18489504818/XXXXXXXX'). Leave "" until you have them;
// events still fire, but no Ads conversion is counted.
const CALL_CONVERSION_LABEL = "wa8kCLa09I0dELLovfBE"
const WHATSAPP_CONVERSION_LABEL = "wskICJGf_Y0dELLovfBE"

// Safe wrapper: works even if the gtag.js script has not finished loading yet.
// gtag.js expects the real `arguments` object to be pushed onto dataLayer.
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
}

export default function ClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest?.("a")
      if (!link) return

      const href = link.getAttribute("href") || ""
      const isCall = href.startsWith("tel:")
      const isWhatsApp =
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("web.whatsapp.com")

      if (!isCall && !isWhatsApp) return

      const eventName = isCall ? "call_click" : "whatsapp_click"
      const params = {
        page_path: window.location.pathname,
        button_text: (link.textContent || "").trim().slice(0, 60),
        link_url: href,
      }

      // 1. Event (visible in Tag Assistant / Network tab)
      gtag("event", eventName, params)

      // 2. Google Ads conversion (only when a label is set)
      const label = isCall ? CALL_CONVERSION_LABEL : WHATSAPP_CONVERSION_LABEL
      if (label) {
        gtag("event", "conversion", {
          send_to: `${AW_ID}/${label}`,
          value: 1.0,
          currency: "ZAR",
          // beacon makes sure the hit is sent even if the dialer / WhatsApp opens right away
          transport_type: "beacon",
        })
      }

      if (process.env.NODE_ENV !== "production") {
        console.log("[ClickTracker]", eventName, params, label ? `-> ${label}` : "(no conversion label set)")
      }
    }

    // Capture phase so we still see the click if a component stops propagation
    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [])

  return null
}
