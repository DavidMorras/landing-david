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
      { text: "Landing de una sola sección", included: true },
      { text: "Diseño responsive", included: true },
      { text: "Optimización básica de velocidad", included: true },
      { text: "Formulario de contacto o WhatsApp", included: true },
      { text: "1 revisión incluida", included: true },
      { text: "1 mes de mantenimiento básico incluido", included: true },

      // X del Básico (máximo 3)
      { text: "No incluye secciones adicionales", included: false },
      { text: "No incluye animaciones avanzadas", included: false },
      { text: "No incluye copywriting profesional", included: false },
    ],
    forWhom: "Ideal para proyectos nuevos, pequeños negocios o personas que quieren una web rápida sin complicaciones.",
    highlighted: false,
  },
  {
    name: "Plan Estándar",
    price: "120€",
    delivery: "7 días",
    highlighted: true,
    features: [
      { text: "Incluye todo lo del Plan Básico", included: true },
      { text: "Hasta 3 secciones adicionales", included: true },
      { text: "Animaciones suaves", included: true },
      { text: "Copywriting básico", included: true },
      { text: "Integración con herramientas externas (Analytics, CRM…)", included: true },
      { text: "3 revisiones incluidas", included: true },
      { text: "1 mes de mantenimiento estándar incluido", included: true },

      // X estratégicas (solo 2)
      { text: "No incluye animaciones avanzadas", included: false },
      { text: "No incluye cambios ilimitados", included: false },
    ],
    forWhom: "Ideal si quieres una web más completa, con varias secciones y un enfoque más profesional.",
  },
  {
    name: "Plan Premium",
    price: "250€",
    delivery: "10-14 días",
    features: [
      { text: "Incluye todo lo del Plan Estándar", included: true },
      { text: "Todas las secciones necesarias", included: true },
      { text: "Animaciones avanzadas y microinteracciones", included: true },
      { text: "Copywriting profesional orientado a conversión", included: true },
      { text: "Integraciones avanzadas (reservas, automatizaciones…)", included: true },
      { text: "Diseño premium totalmente personalizado", included: true },
      { text: "Cambios ilimitados durante el desarrollo", included: true },
      { text: "5 revisiones incluidas", included: true },
      { text: "1 mes de mantenimiento premium incluido", included: true },
      { text: "SEO básico incluido", included: true },
    ],
    forWhom: "Ideal para negocios que necesitan una web potente, gestionada de principio a fin y enfocada en conversiones.",
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
            Planes diseñados para hacer <span className="text-[#3B82F6]">Crecer tu negocio</span>
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

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    ) : (
                      <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500 font-bold">✕</span>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-[#E5E7EB]" : "text-[#9CA3AF]"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mb-8 p-4 bg-[#0B0F14] rounded-lg">
                <p className="text-sm text-[#9CA3AF] font-medium mb-1">¿Para quién es?</p>
                <p className="text-sm text-[#E5E7EB]">{plan.forWhom}</p>
              </div>

              <button
                onClick={() => onNavigate("contacto")}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
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
