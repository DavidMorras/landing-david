"use client"

import { useEffect, useRef, useState } from "react"
import { X, CreditCard, Loader2 } from "lucide-react"

interface PayPalModalProps {
  isOpen: boolean
  onClose: () => void
}

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style?: {
          layout?: string
          color?: string
          shape?: string
          label?: string
        }
        createOrder: () => Promise<string>
        onApprove: (data: { orderID: string }) => Promise<void>
        onError: (err: unknown) => void
      }) => {
        render: (selector: string | HTMLElement) => Promise<void>
      }
    }
  }
}

export default function PayPalModal({ isOpen, onClose }: PayPalModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const paypalContainerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return

    // Dynamically load PayPal SDK only when modal opens
    const loadPayPalSDK = async () => {
      setIsLoading(true)
      setError(null)

      // Check if already loaded
      if (window.paypal) {
        renderPayPalButtons()
        return
      }

      // Create script element
      const script = document.createElement("script")
      script.src = "https://www.paypal.com/sdk/js?client-id=sb&currency=EUR"
      script.async = true

      script.onload = () => {
        renderPayPalButtons()
      }

      script.onerror = () => {
        setError("No se pudo cargar PayPal. Por favor, inténtalo de nuevo.")
        setIsLoading(false)
      }

      document.body.appendChild(script)
    }

    const renderPayPalButtons = () => {
      if (!window.paypal || !paypalContainerRef.current) {
        setError("Error al inicializar PayPal")
        setIsLoading(false)
        return
      }

      // Clear any existing buttons
      paypalContainerRef.current.innerHTML = ""

      try {
        window.paypal
          .Buttons({
            style: {
              layout: "vertical",
              color: "blue",
              shape: "rect",
              label: "pay",
            },
            createOrder: async () => {
              // In a real implementation, this would call your backend
              // to create an order and return the order ID
              return "DEMO-ORDER-ID"
            },
            onApprove: async (data) => {
              // In a real implementation, this would call your backend
              // to capture the payment
              console.log("Payment approved:", data.orderID)
              alert("¡Pago completado! Te contactaremos pronto.")
              onClose()
            },
            onError: (err) => {
              console.error("PayPal error:", err)
              setError("Error al procesar el pago. Por favor, inténtalo de nuevo.")
            },
          })
          .render(paypalContainerRef.current)
          .then(() => {
            setIsLoading(false)
          })
      } catch {
        setError("Error al cargar los botones de PayPal")
        setIsLoading(false)
      }
    }

    loadPayPalSDK()
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paypal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-[#111827] rounded-2xl p-8 max-w-md w-full border border-[#1F2937] shadow-2xl animate-in fade-in zoom-in duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-[#3B82F6]" />
          </div>

          <h2 id="paypal-title" className="text-2xl font-bold text-[#E5E7EB] mb-2">
            Pago con PayPal
          </h2>
          <p className="text-[#9CA3AF] mb-6">
            Paga de forma segura con tu cuenta de PayPal o tarjeta de crédito
          </p>

          {/* PayPal Buttons Container */}
          <div className="min-h-[150px] flex items-center justify-center">
            {isLoading ? (
              <div className="flex items-center gap-3 text-[#9CA3AF]">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>Cargando PayPal...</span>
              </div>
            ) : error ? (
              <div className="text-[#EF4444] text-sm">{error}</div>
            ) : null}
            <div
              ref={paypalContainerRef}
              className={isLoading || error ? "hidden" : "w-full"}
            />
          </div>

          <p className="text-xs text-[#9CA3AF] mt-4">
            El pago es procesado de forma segura por PayPal.
          </p>
        </div>
      </div>
    </div>
  )
}
