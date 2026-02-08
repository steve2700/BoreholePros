// components/WhatsAppButton.tsx
"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Show button after user scrolls a bit (better UX)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Show immediately on mobile
    if (window.innerWidth < 768) {
      setIsVisible(true)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappNumber = "27603488268" // Your number in international format
  const defaultMessage = "Hi! I'm interested in borehole drilling. Can you help me?"

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isVisible) return null

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Expanded tooltip */}
        {isExpanded && (
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 max-w-xs animate-in slide-in-from-bottom-5">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm mb-1">Need Quick Help?</p>
                <p className="text-xs text-muted-foreground mb-3">
                  Chat with us on WhatsApp for instant quotes and support!
                </p>
                <button
                  onClick={handleClick}
                  className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-lg w-full transition-colors"
                >
                  Start Chat
                </button>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsExpanded(true)}
          className="group relative bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-in fade-in zoom-in"
          aria-label="Chat on WhatsApp"
        >
          {/* Ping animation */}
          <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75"></span>
          
          {/* Icon */}
          <MessageCircle className="w-6 h-6 relative z-10" />
          
          {/* Unread badge (optional - remove if you don't want it) */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            1
          </span>
        </button>

        {/* Text label (shows on desktop hover) */}
        <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap">
            Chat on WhatsApp
          </div>
        </div>
      </div>
    </>
  )
}

// ============================================
// ALTERNATIVE VERSION: Simple & Clean
// ============================================

export function WhatsAppButtonSimple() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    if (window.innerWidth < 768) setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="https://wa.me/27603488268?text=Hi!%20I'm%20interested%20in%20borehole%20drilling"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75"></span>
      
      {/* WhatsApp Icon (using lucide-react) */}
      <MessageCircle className="w-7 h-7 relative z-10" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  )
}

// ============================================
// ALTERNATIVE VERSION: With Custom SVG Icon
// ============================================

export function WhatsAppButtonWithSVG() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000) // Show after 2 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="https://wa.me/27603488268?text=Hi!%20I%20need%20help%20with%20borehole%20drilling"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white pl-5 pr-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom-5"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>

      <span className="font-semibold text-sm">Chat with us</span>
    </a>
  )
}
