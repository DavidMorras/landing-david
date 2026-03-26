"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { TrendingUp, Users, Clock } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Instructor de Seguridad – Web Profesional",
    description:
      "Web profesional para un instructor independiente especializado en formación de seguridad. Diseñada para transmitir confianza, experiencia y claridad en los servicios que ofrece.",
    image: "/porfoliousandowebseguridad.png", // Aquí pondrás tu mockup cuando lo generes
    results: [
      { icon: TrendingUp, label: "Interés generado", value: "+40%" },
      { icon: Users, label: "Nuevas consultas", value: "+25/mes" },
      { icon: Clock, label: "Tiempo de carga", value: "0.9s" },
    ],
    tags: ["Formación", "Web Profesional", "Responsive"],
  },
]

const PortfolioSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-20 lg:py-32 bg-[#111827]/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5E7EB] text-balance">
            Nuestro <span className="text-[#3B82F6]">Portfolio</span>
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto text-pretty">
            Algunos de los proyectos reales que hemos desarrollado para nuestros clientes.
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
                    className="w-full h-auto object-cover"
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

                {/* Button */}
                <a
                  href="https://web-seguridad.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#60A5FA] transition-colors duration-200"
                >
                  Ver proyecto
                </a>
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
