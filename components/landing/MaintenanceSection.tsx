"use client"

import { forwardRef, useState } from "react"
import { Check, Server } from "lucide-react"

type Section = "inicio" | "planes" | "mantenimiento" | "resenas" | "portfolio" | "contacto"

interface MaintenanceSectionProps {
  onNavigate: (section: Section) => void
}

const maintenancePlans = [
  {
    name: "Básico",
    monthlyPrice: "10€",
    yearlyPrice: "100€",
    features: [
      { text: "Hosting incluido", included: true },
      { text: "Actualizaciones técnicas automáticas", included: true },
      { text: "Seguridad básica", included: true },
      { text: "Copias de seguridad automáticas", included: true },
      { text: "Monitorización de uptime", included: true },

      // X del Básico (máximo 3)
      { text: "No incluye cambios de contenido", included: false },
      { text: "No incluye cambios de diseño", included: false },
      { text: "No incluye soporte (solo incidencias críticas)", included: false },
    ],
  },
  {
    name: "Estándar",
    monthlyPrice: "20€",
    yearlyPrice: "200€",
    highlighted: true,
    features: [
      { text: "Incluye todo lo del plan Básico", included: true },
      { text: "Cambios pequeños mensuales", included: true },
      { text: "Optimización ligera", included: true },
      { text: "Soporte por email", included: true },
      { text: "Revisión técnica mensual", included: true },

      // X estratégicas (solo 2)
      { text: "No incluye cambios ilimitados", included: false },
      { text: "No incluye optimización avanzada de velocidad", included: false },
    ],
  },
  {
    name: "Premium",
    monthlyPrice: "40€",
    yearlyPrice: "400€",
    features: [
      { text: "Incluye todo lo del plan Estándar", included: true },
      { text: "Cambios ilimitados razonables", included: true },
      { text: "Optimización de velocidad", included: true },
      { text: "Ajustes SEO básicos", included: true },
      { text: "Integración con herramientas externas", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "Revisión mensual de rendimiento y mejoras", included: true },
    ],
  },
]

const MaintenanceSection = forwardRef<HTMLElement, MaintenanceSectionProps>(({ onNavigate }, ref) => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section
      ref={ref}
      id="mantenimiento"
      className="py-20 lg:py-32 bg-[#111827]/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5E7EB] text-balance">
            Planes de <span className="text-[#3B82F6]">Mantenimiento</span>
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto text-pretty">
            Mantén tu landing siempre actualizada, segura y funcionando a la perfección.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 p-1 bg-[#1F2937] rounded-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isYearly ? "bg-[#3B82F6] text-white" : "text-[#9CA3AF] hover:text-[#E5E7EB]"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isYearly ? "bg-[#3B82F6] text-white" : "text-[#9CA3AF] hover:text-[#E5E7EB]"
              }`}
            >
              Anual <span className="text-[#60A5FA] ml-1">(-17%)</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {maintenancePlans.map((plan) => (
            <article
              key={plan.name}
              className={`bg-[#111827] rounded-2xl p-8 border transition-all duration-300 hover:border-[#3B82F6]/50 ${
                plan.highlighted
                  ? "border-[#3B82F6] shadow-lg shadow-[#3B82F6]/10"
                  : "border-[#1F2937]"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#E5E7EB]">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#3B82F6]">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-[#9CA3AF]">/{isYearly ? "año" : "mes"}</span>
                </div>
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

        {/* Hosting Card */}
        <article className="bg-[#111827] rounded-2xl p-8 border-2 border-[#3B82F6] shadow-lg shadow-[#3B82F6]/10 relative">
          
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#3B82F6] text-white text-sm font-medium rounded-full">
            Recomendado
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#3B82F6]/10 rounded-xl">
                <Server className="w-8 h-8 text-[#3B82F6]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#E5E7EB]">Hosting Gestionado</h3>

                <p className="mt-2 text-[#9CA3AF] max-w-xl">
                  Recomendado para que tu web funcione siempre al máximo.  
                  Nos encargamos de todo: rendimiento, seguridad, actualizaciones y configuración.  
                  Tú no tienes que tocar nada técnico.
                </p>

                <ul className="mt-4 flex flex-wrap gap-4">
                  <li className="flex items-center gap-2 text-sm text-[#E5E7EB]">
                    <Check className="w-4 h-4 text-[#3B82F6]" />
                    SSL incluido
                  </li>

                  <li className="flex items-center gap-2 text-sm text-[#E5E7EB]">
                    <Check className="w-4 h-4 text-[#3B82F6]" />
                    CDN global
                  </li>

                  <li className="flex items-center gap-2 text-sm text-[#E5E7EB]">
                    <Check className="w-4 h-4 text-[#3B82F6]" />
                    99.9% uptime
                  </li>

                  <li className="flex items-center gap-2 text-sm text-[#E5E7EB]">
                    <Check className="w-4 h-4 text-[#3B82F6]" />
                    Servidor optimizado para landings rápidas
                  </li>

                  <li className="flex items-center gap-2 text-sm text-[#E5E7EB]">
                    <Check className="w-4 h-4 text-[#3B82F6]" />
                    Monitorización continua
                  </li>

                  <li className="flex items-center gap-2 text-sm text-[#E5E7EB]">
                    <Check className="w-4 h-4 text-[#3B82F6]" />
                    Seguridad reforzada
                  </li>
                </ul>

                <p className="mt-4 text-[#60A5FA] text-sm font-medium">
                  La mayoría de negocios lo añaden para evitar problemas técnicos.
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="flex items-baseline gap-1 justify-center md:justify-end">
                <span className="text-3xl font-bold text-[#3B82F6]">+10€</span>
                <span className="text-[#9CA3AF]">/mes</span>
              </div>

              <button
                onClick={() => onNavigate("contacto")}
                className="mt-4 px-8 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#60A5FA] transition-colors duration-200"
              >
                Añadir hosting
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
})

MaintenanceSection.displayName = "MaintenanceSection"

export default MaintenanceSection
