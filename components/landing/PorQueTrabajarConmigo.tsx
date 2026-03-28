"use client"

import { forwardRef } from "react"
import { Clock, MessageCircle, CheckCircle } from "lucide-react"

const PorQueTrabajarConmigo = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="porquetrabajarconmigo"
      className="py-20 lg:py-28 bg-[#111827]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5E7EB]">
            ¿Por qué trabajar <span className="text-[#3B82F6]">conmigo?</span>
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Trabajo contigo de forma clara, rápida y sin complicaciones. Mi objetivo es que tengas una web que te represente y que convierta visitas en clientes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 1. Trabajo rápido y profesional */}
          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-6 w-6 text-[#3B82F6]" />
              <h3 className="text-xl font-semibold text-[#E5E7EB]">Trabajo rápido y profesional</h3>
            </div>
            <p className="text-[#9CA3AF] text-sm">
              Entrego landings en pocos días, con diseño limpio, moderno y optimizado para convertir visitas en clientes.
            </p>
          </div>

          {/* 2. Comunicación clara y acompañamiento real */}
          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <div className="flex items-center gap-3 mb-3">
              <MessageCircle className="h-6 w-6 text-[#3B82F6]" />
              <h3 className="text-xl font-semibold text-[#E5E7EB]">Comunicación clara y acompañamiento real</h3>
            </div>
            <p className="text-[#9CA3AF] text-sm">
              Estoy contigo durante todo el proceso: explico cada paso, resuelvo dudas y adapto la web a lo que realmente necesitas.
            </p>
          </div>

          {/* 3. Experiencia real creando webs que funcionan */}
          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="h-6 w-6 text-[#3B82F6]" />
              <h3 className="text-xl font-semibold text-[#E5E7EB]">Experiencia real creando webs que funcionan</h3>
            </div>
            <p className="text-[#9CA3AF] text-sm">
              He creado webs para negocios reales y sé qué estructura, textos y elementos hacen que una landing convierta mejor.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
})

PorQueTrabajarConmigo.displayName = "PorQueTrabajarConmigo"

export default PorQueTrabajarConmigo
