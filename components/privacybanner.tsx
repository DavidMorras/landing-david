"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false)
  const [view, setView] = useState<"default" | "privacidad" | "aviso">("default")

  useEffect(() => {
    const accepted = localStorage.getItem("privacyAccepted")
    if (!accepted) setVisible(true)

    const openBanner = () => {
      setView("default")
      setVisible(true)
    }

    window.addEventListener("openPrivacyBanner", openBanner)
    return () => window.removeEventListener("openPrivacyBanner", openBanner)
  }, [])

  const accept = () => {
    localStorage.setItem("privacyAccepted", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#111827] border-t border-[#1F2937] p-6 z-50">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">

        {/* Cerrar */}
        <div className="flex justify-end">
          <button
            onClick={() => setVisible(false)}
            className="p-2 text-[#9CA3AF] hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENIDO */}
        {view === "default" && (
          <p className="text-sm text-[#E5E7EB]">
            Usamos tus datos únicamente para responder a tu mensaje.  
            Puedes leer nuestra{" "}
            <button
              onClick={() => setView("privacidad")}
              className="text-[#3B82F6] underline"
            >
              Política de Privacidad
            </button>{" "}
            y{" "}
            <button
              onClick={() => setView("aviso")}
              className="text-[#3B82F6] underline"
            >
              Aviso Legal
            </button>.
          </p>
        )}

        {view === "privacidad" && (
          <div className="text-sm text-[#E5E7EB] space-y-2">
            <h3 className="font-semibold text-lg">Política de Privacidad</h3>
            <p>Responsable: Representante legal de David Morrás.</p>
            <p>Los datos recogidos se usan únicamente para responder a tu mensaje.</p>
            <p>No se ceden datos a terceros salvo obligación legal.</p>
            <p>Puedes solicitar acceso, rectificación o eliminación escribiendo a: <b>davidmorras2@gmail.com</b></p>

            <button
              onClick={() => setView("default")}
              className="text-[#3B82F6] underline mt-2"
            >
              Volver
            </button>
          </div>
        )}

        {view === "aviso" && (
          <div className="text-sm text-[#E5E7EB] space-y-2">
            <h3 className="font-semibold text-lg">Aviso Legal</h3>
            <p>Este sitio web pertenece a David Morrás, actuando como particular.</p>
            <p>El objetivo del sitio es mostrar servicios y permitir el contacto.</p>
            <p>Correo de contacto: <b>davidmorras2@gmail.com</b></p>

            <button
              onClick={() => setView("default")}
              className="text-[#3B82F6] underline mt-2"
            >
              Volver
            </button>
          </div>
        )}

        {/* BOTÓN ACEPTAR */}
        <div className="flex justify-end">
          <button
            onClick={accept}
            className="px-4 py-2 bg-[#3B82F6] text-white rounded-lg text-sm hover:bg-[#60A5FA] transition"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
