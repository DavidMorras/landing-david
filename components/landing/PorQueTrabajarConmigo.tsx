"use client"

import { forwardRef } from "react"

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
            Porque no solo hago webs bonitas: hago webs que funcionan.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Webs rápidas y optimizadas</h3>
            <p className="text-[#9CA3AF] text-sm">
              Tu web cargará en menos de un segundo, mejorando la experiencia y aumentando conversiones.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Diseño claro y profesional</h3>
            <p className="text-[#9CA3AF] text-sm">
              Nada de webs recargadas. Todo pensado para que el cliente entienda qué ofreces en segundos.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Comunicación directa</h3>
            <p className="text-[#9CA3AF] text-sm">
              Hablas conmigo, no con una agencia. Respuestas rápidas y trato cercano.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Entrega en pocos días</h3>
            <p className="text-[#9CA3AF] text-sm">
              Tu web lista en tiempo récord, sin esperas eternas ni procesos complicados.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Precios transparentes</h3>
            <p className="text-[#9CA3AF] text-sm">
              Sin sorpresas ni costes ocultos. Sabes lo que pagas desde el primer momento.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Webs pensadas para convertir</h3>
            <p className="text-[#9CA3AF] text-sm">
              Cada sección está diseñada para que el usuario haga lo que tú quieres: contactarte.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
})

PorQueTrabajarConmigo.displayName = "PorQueTrabajarConmigo"

export default PorQueTrabajarConmigo
