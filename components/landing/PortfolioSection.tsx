"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { TrendingUp, Users, Clock } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Clínica Dental Sonríe",
    description: "Landing page completa para clínica dental con sistema de citas online, galería de tratamientos y testimonios de pacientes. Diseño premium con animaciones suaves.",
    image: "/",
    results: [
      { icon: TrendingUp, label: "Aumento de citas", value: "+45%" },
      { icon: Users, label: "Nuevos pacientes", value: "+120/mes" },
      { icon: Clock, label: "Tiempo de carga", value: "0.8s" },
    ],
    tags: ["Salud", "Plan Premium", "SEO"],
  },
  {
    id: 2,
    title: "Fisioterapia Avanza",
    description: "Página profesional para centro de fisioterapia con información de servicios, equipo médico y formulario de contacto avanzado con selección de especialidad.",
    image: "/portfoliousandofisiovital.png",
    results: [
      { icon: TrendingUp, label: "Conversión web", value: "+62%" },
      { icon: Users, label: "Consultas online", value: "+85/mes" },
      { icon: Clock, label: "Tiempo de carga", value: "0.6s" },
    ],
    tags: ["Salud", "Plan Estándar", "Responsive"],
  },
]

const PortfolioSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="portafolio"
      className="py-20 lg:py-32 bg-[#111827]/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5E7EB] text-balance">
            Nuestro <span className="text-[#3B82F6]">Portafolio</span>
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto text-pretty">
            Algunos de los proyectos que hemos realizado para nuestros clientes.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden border border-[#1F2937] shadow-xl shadow-black/20">
                  <Image
                    src={project.image}
                    alt={`Mockup del proyecto ${project.title}`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-[#3B82F6]/10 text-[#3B82F6] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#E5E7EB] mb-4">
                  {project.title}
                </h3>
                
                <p className="text-[#9CA3AF] leading-relaxed mb-8 text-pretty">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {project.results.map((result) => (
                    <div
                      key={result.label}
                      className="bg-[#111827] rounded-xl p-4 border border-[#1F2937]"
                    >
                      <result.icon className="w-5 h-5 text-[#3B82F6] mb-2" />
                      <div className="text-xl font-bold text-[#3B82F6]">{result.value}</div>
                      <div className="text-xs text-[#9CA3AF] mt-1">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})

PortfolioSection.displayName = "PortfolioSection"

export default PortfolioSection
