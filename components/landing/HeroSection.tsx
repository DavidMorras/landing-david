"use client"

import { forwardRef } from "react"
import Image from "next/image"

type Section = "inicio" | "planes" | "mantenimiento" | "resenas" | "portafolio" | "contacto"

interface HeroSectionProps {
  onNavigate: (section: Section) => void
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onNavigate }, ref) => {
  return (
    <section
      ref={ref}
      id="inicio"
      className="min-h-screen flex items-center pt-20 lg:pt-0 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] leading-tight text-balance">
              Landings profesionales que{" "}
              <span className="text-[#3B82F6]">convierten</span>{" "}
              visitas en clientes
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Diseño premium, velocidad optimizada y enfoque total en resultados. 
              Tu negocio merece una landing que genere clientes desde el primer día. 
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate("contacto")}
                className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#60A5FA] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
              >
                Empezar ahora
              </button>
              <button
                onClick={() => onNavigate("planes")}
                className="px-8 py-4 bg-transparent text-[#E5E7EB] font-semibold rounded-lg border border-[#1F2937] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
              >
                Ver planes y precios
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#3B82F6]">50+</div>
                <div className="text-sm text-[#9CA3AF] mt-1">Proyectos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#3B82F6]">98%</div>
                <div className="text-sm text-[#9CA3AF] mt-1">Satisfacción</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#3B82F6]">+45%</div>
                <div className="text-sm text-[#9CA3AF] mt-1">Conversión</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-[#3B82F6]/10 border border-[#1F2937]">
              <Image
                src="/hero-mockup.jpg"
                alt="Ejemplo de landing page profesional con diseño moderno"
                width={600}
                height={450}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#60A5FA]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"

export default HeroSection
