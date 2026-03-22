"use client"

import { forwardRef, useState } from "react"
import { Check, Server } from "lucide-react"

type Section = "inicio" | "planes" | "mantenimiento" | "resenas" | "portafolio" | "contacto"

interface MaintenanceSectionProps {
  onNavigate: (section: Section) => void
}

const maintenancePlans = [
  {
    name: "Básico",
    monthlyPrice: "10€",
    yearlyPrice: "100€",
    features: [
      "Hosting incluido",
      "Mantenimiento técnico mínimo",
    ],
  },
  {
    name: "Estándar",
    monthlyPrice: "20€",
    yearlyPrice: "200€",
    features: [
      "Hosting incluido",
      "Cambios pequeños mensuales",
      "Soporte por email",
      "Actualizaciones técnicas",
      "Copias de seguridad",
      "Optimización ligera",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    monthlyPrice: "40€",
    yearlyPrice: "400€",
    features: [
      "Hosting incluido",
      "Cambios ilimitados razonables",
      "Soporte prioritario",
      "Optimización de velocidad",
      "Revisión mensual de rendimiento",
      "Ajustes SEO básicos",
      "Integración con herramientas externas",
      "Monitorización avanzada",
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
          <div className="inline-flex items-center gap-4 p-1 bg-[#1F2937] rounded-lg" role="radiogroup" aria-label="Seleccionar periodo de facturación">
            <button
              role="radio"
              aria-checked={!isYearly}
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                !isYearly
                  ? "bg-[#3B82F6] text-white"
                  : "text-[#9CA3AF] hover:text-[#E5E7EB]"
              }`}
            >
              Mensual
            </button>
            <button
              role="radio"
              aria-checked={isYearly}
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                isYearly
                  ? "bg-[#3B82F6] text-white"
                  : "text-[#9CA3AF] hover:text-[#E5E7EB]"
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
                  <span className="text-[#9CA3AF]">
                    /{isYearly ? "año" : "mes"}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E5E7EB] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

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

        {/* Hosting Card - Full Width */}
        <article className="bg-[#111827] rounded-2xl p-8 border-2 border-[#3B82F6] shadow-lg shadow-[#3B82F6]/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#3B82F6]/10 rounded-xl">
                <Server className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#E5E7EB]">Hosting Gestionado</h3>
                <p className="mt-2 text-[#9CA3AF] max-w-xl text-pretty">
                  Nos encargamos de todo: servidor, dominio, SSL, CDN y rendimiento optimizado. 
                  Sin preocupaciones técnicas.
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
                </ul>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-baseline gap-1 justify-center md:justify-end">
                <span className="text-3xl font-bold text-[#3B82F6]">+10€</span>
                <span className="text-[#9CA3AF]">/mes</span>
              </div>
              <button
                onClick={() => onNavigate("contacto")}
                className="mt-4 px-8 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#60A5FA] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]"
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
