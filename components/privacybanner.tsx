"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("privacyAccepted")
    if (!accepted) {
      setVisible(true)
    }

    const handleScroll = () => {
      if (!localStorage.getItem("privacyAccepted")) {
        localStorage.setItem("privacyAccepted", "true")
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const accept = () => {
    localStorage.setItem("privacyAccepted", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#111827] border-t border-[#1F2937] p-4 z-50">
      <div className="max-w-5xl mx-auto flex items-start justify-between gap-4">
        <p className="text-sm text-[#E5E7EB]">
          Usamos tus datos únicamente para responder a tu mensaje.  
          Lee nuestra{" "}
          <a href="/privacidad" className="text-[#3B82F6] underline">
            Política de Privacidad
          </a>{" "}
          y{" "}
          <a href="/aviso-legal" className="text-[#3B82F6] underline">
            Aviso Legal
          </a>.
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="px-4 py-2 bg-[#3B82F6] text-white rounded-lg text-sm hover:bg-[#60A5FA] transition"
          >
            Aceptar
          </button>

          <button
            onClick={() => setVisible(false)}
            className="p-2 text-[#9CA3AF] hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
