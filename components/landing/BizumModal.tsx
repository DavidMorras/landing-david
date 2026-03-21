"use client"

import { useEffect, useRef } from "react"
import { X, Smartphone, Copy, Check } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface BizumModalProps {
  isOpen: boolean
  onClose: () => void
}

const BIZUM_NUMBER = "600 000 000"

export default function BizumModal({ isOpen, onClose }: BizumModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(BIZUM_NUMBER.replace(/\s/g, ""))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = BIZUM_NUMBER.replace(/\s/g, "")
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bizum-title"
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
            <Smartphone className="w-8 h-8 text-[#3B82F6]" />
          </div>

          <h2 id="bizum-title" className="text-2xl font-bold text-[#E5E7EB] mb-2">
            Pago con Bizum
          </h2>
          <p className="text-[#9CA3AF] mb-6">
            Envía el importe al siguiente número de teléfono
          </p>

          {/* Phone Number */}
          <div className="bg-[#0B0F14] rounded-xl p-4 mb-6">
            <p className="text-sm text-[#9CA3AF] mb-2">Número de teléfono</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl font-bold text-[#3B82F6] font-mono">
                {BIZUM_NUMBER}
              </span>
              <button
                onClick={handleCopy}
                className="p-2 bg-[#1F2937] rounded-lg text-[#9CA3AF] hover:text-[#3B82F6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                aria-label={copied ? "Copiado" : "Copiar número"}
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-xl p-4 inline-block mb-6">
            <Image
              src="/bizum-qr.png"
              alt="Código QR para pago Bizum"
              width={150}
              height={150}
              className="w-36 h-36"
            />
          </div>

          <p className="text-sm text-[#9CA3AF]">
            Indica tu nombre y el plan contratado en el concepto del Bizum.
          </p>
        </div>
      </div>
    </div>
  )
}
