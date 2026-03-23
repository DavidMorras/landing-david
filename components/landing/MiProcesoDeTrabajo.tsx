"use client"

import { forwardRef } from "react"
import { ClipboardList, Layout, Brush, Eye, CheckCircle, Rocket } from "lucide-react"

const steps = [
  {
    title: "Cuestionario inicial",
    description:
      "Lo primero es conocerte un poco y entender qué tipo de web quieres. Te haré algunas preguntas sencillas sobre el estilo, el contenido y las funciones básicas que necesitas. Nada complicado, solo lo necesario para tener una idea clara antes de empezar.",
    icon: ClipboardList,
  },
  {
    title: "Creo la primera versión de tu landing",
    description:
      "Con esa información preparo la estructura inicial de tu web: cómo se verá, qué secciones tendrá y cómo estará organizada. Es una primera versión para que puedas visualizar tu proyecto.",
    icon: Layout,
  },
  {
    title: "Ajusto el diseño y los detalles",
    description:
      "Cuando la base está lista, empiezo a pulirla: colores, tipografías, imágenes y todo lo que hace que la web se vea profesional y acorde a tu estilo.",
    icon: Brush,
  },
  {
    title: "Te la enseño y la revisamos juntos",
    description:
      "Aquí es donde tú opinas. Te muestro la web y vemos sección por sección. Puedes pedirme cambios, ajustes o mejoras para que todo quede como tú quieres.",
    icon: Eye,
  },
  {
    title: "Revisiones finales",
    description:
      "Aplico todos los cambios necesarios hasta que la web esté perfecta y lista para funcionar. Mi objetivo es que quedes totalmente satisfecho.",
    icon: CheckCircle,
  },
  {
    title: "Entrega final",
    description:
      "Cuando todo está listo, te entrego tu web final, optimizada y funcionando. Además, te explico cómo usarla y te doy soporte durante el primer mes según el plan que elijas.",
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
