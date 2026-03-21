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
    delivery: "3-5 días",
    features: [
      "Landing page de una sección",
      "Diseño responsive",
      "Formulario de contacto básico",
      "Optimización SEO básica",
      "1 revisión incluida",
    ],
    forWhom: "Ideal para autónomos y profesionales que necesitan una presencia online simple y efectiva.",
    highlighted: false,
  },
  {
    name: "Plan Estándar",
    price: "120€",
    delivery: "5-7 días",
    features: [
      "Landing page de múltiples secciones",
      "Diseño responsive premium",
      "Formulario de contacto avanzado",
      "Optimización SEO completa",
      "Integración con redes sociales",
      "3 revisiones incluidas",
      "Animaciones suaves",
    ],
    forWhom: "Perfecto para PYMES y clínicas que buscan destacar y generar confianza con sus clientes.",
    highlighted: true,
  },
  {
    name: "Plan Premium",
    price: "250€",
    delivery: "7-10 días",
    features: [
      "Landing page completa y personalizada",
      "Diseño responsive de alta gama",
      "Formularios avanzados con validación",
      "SEO técnico y on-page completo",
      "Integración con CRM/Email marketing",
      "Chat en vivo o WhatsApp",
      "Animaciones avanzadas",
      "Análisis de conversión",
      "Revisiones ilimitadas",
    ],
    forWhom: "La mejor opción para negocios que quieren maximizar conversiones y ofrecer una experiencia premium.",
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
            Elige el plan que mejor se adapte a las necesidades de tu negocio. 
            Todos incluyen diseño profesional y soporte.
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
