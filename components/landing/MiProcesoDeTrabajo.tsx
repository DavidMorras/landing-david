"use client"

import { forwardRef } from "react"
import { ClipboardList, Layout, Brush, Eye, CheckCircle, Rocket } from "lucide-react"

const steps = [
  {
    title: "Cuestionario inicial",
    description:
      "Antes de empezar, te haré unas preguntas para entender qué tipo de web quieres, qué estilo te gusta y qué elementos básicos debe incluir. Esto me permite tener una visión clara de tu proyecto desde el primer momento.",
    icon: ClipboardList,
  },
  {
    title: "Primera versión de la landing",
    description:
      "Con toda la información, diseño la estructura inicial de tu landing page: secciones, distribución y la base visual del proyecto.",
    icon: Layout,
  },
  {
    title: "Edición y refinado",
    description:
      "Una vez creada la primera versión, ajusto colores, tipografías, imágenes y detalles visuales para que la web encaje perfectamente con tu marca.",
    icon: Brush,
  },
  {
    title: "Revisión contigo",
    description:
      "Te muestro la web y revisamos juntos cada sección. Aquí puedes pedirme cambios, ajustes o mejoras para que todo quede exactamente como quieres.",
    icon: Eye,
  },
  {
    title: "Revisiones finales",
    description:
      "Aplico todas las revisiones necesarias para que la web quede pulida, profesional y alineada con tus objetivos.",
    icon: CheckCircle,
  },
  {
    title: "Entrega final",
    description:
      "Cuando todo está listo, te entrego la web completamente terminada, optimizada y lista para funcionar. Además, te explico cómo usarla y te doy soporte durante el primer mes según tu plan.",
    icon: Rocket,
  },
]

const MiProcesoDeTrabajo = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="proceso"
      className="py-20 lg:py-32 bg-[#0B0F14] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5E7EB]">
            Mi proceso de trabajo
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Un proceso claro, profesional y pensado para que tu web quede exactamente como quieres.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8 hover:border-[#3B82F6]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#0B0F14] border border-[#1F2937]">
                    <Icon className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#E5E7EB]">{step.title}</h3>
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

MiProcesoDeTrabajo.displayName = "MiProcesoDeTrabajo"

export default MiProcesoDeTrabajo
