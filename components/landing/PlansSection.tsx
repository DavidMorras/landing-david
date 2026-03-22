"use client"

import { forwardRef } from "react"
import { Check } from "lucide-react"

type Section = "inicio" | "planes" | "mantenimiento" | "resenas" | "portafolio" | "contacto"

interface PlansSectionProps {
  onNavigate: (section: Section) => void
}

const plans = [
  {
    name: "Plan Básico",
    price: "50€",
    delivery: "5 días",
    features: [
      "Landing de 1 página",
      "Diseño responsive",
      "Formulario de contacto o botón de WhatsApp",
      "Meta title y meta description básicos",
      "1 revisión incluida",
    ],
    forWhom: "Ideal para negocios que necesitan presencia rápida y funcional.",
    highlighted: false,
  },
  {
    name: "Plan Estándar",
    price: "120€",
    delivery: "7 días",
    features: [
      "Todo lo del plan basico",
      "SEO on‑page básico (títulos, descripciones, headings)",
      "Optimización móvil avanzada",
      "Integración con Google Maps o Calendly",
      "Integración con redes sociales",
      "2 meses de soporte para ajustes menores",
    ],
    forWhom: " negocios que buscan visibilidad y reservas sencillas.",
    highlighted: true,
  },
  {
    name: "Plan Premium",
    price: "250€",
    delivery: "10-14 días",
    features: [
      "Todo lo del plan estandar",
      "Sistema de reservas online integrado",
      "Copywriting orientado a conversión (titular, subtítulo, CTAs)",
      "Optimización de velocidad",
      "Instalación y configuración de Google Analytics",
      "2 meses de soporte prioritario",
    ],
    forWhom: " clínicas y negocios que quieren delegar y convertir más.",
    highlighted: false,
  },
]

const PlansSection = forwardRef<HTMLElement, PlansSectionProps>(({ onNavigate }, ref) => {
  return (
    <section
      ref={ref}
      id="planes"
      className="py-20 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5E7EB] text-balance">
            Planes de <span className="text-[#3B82F6]">Landing Pages</span>
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto text-pretty">
            Elige el plan que mejor se adapte a tu negocio. En todos tendrás 
            diseño profesional y acompañamiento durante todo el proceso. 
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative bg-[#111827] rounded-2xl p-8 border transition-all duration-300 hover:border-[#3B82F6]/50 ${
                plan.highlighted
                  ? "border-[#3B82F6] shadow-lg shadow-[#3B82F6]/10"
                  : "border-[#1F2937]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#3B82F6] text-white text-sm font-medium rounded-full">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#E5E7EB]">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#3B82F6]">{plan.price}</span>
                </div>
                <p className="mt-2 text-sm text-[#9CA3AF]">
                  Entrega en {plan.delivery}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E5E7EB] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-8 p-4 bg-[#0B0F14] rounded-lg">
                <p className="text-sm text-[#9CA3AF] font-medium mb-1">¿Para quién es?</p>
                <p className="text-sm text-[#E5E7EB]">{plan.forWhom}</p>
              </div>

              <button
                onClick={() => onNavigate("contacto")}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] ${
                  plan.highlighted
                    ? "bg-[#3B82F6] text-white hover:bg-[#60A5FA]"
                    : "bg-[#1F2937] text-[#E5E7EB] hover:bg-[#3B82F6] hover:text-white"
                }`}
              >
                Contratar
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})

PlansSection.displayName = "PlansSection"

export default PlansSection
