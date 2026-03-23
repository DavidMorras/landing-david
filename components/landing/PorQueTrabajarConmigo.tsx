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
            Trabajo contigo de forma clara, rápida y sin complicaciones. Mi objetivo es que tengas una web que te represente y que te traiga clientes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Webs rápidas y optimizadas</h3>
            <p className="text-[#9CA3AF] text-sm">
              Tu web cargará en menos de un segundo y funcionará bien en cualquier dispositivo. Esto mejora la experiencia y aumenta las posibilidades de que te contacten.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Diseño que transmite confianza</h3>
            <p className="text-[#9CA3AF] text-sm">
              Cada detalle está pensado para que tus clientes entiendan quién eres y qué ofreces desde el primer segundo, sin distracciones ni ruido visual.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Textos que conectan</h3>
            <p className="text-[#9CA3AF] text-sm">
              Te ayudo a explicar lo que haces de forma clara, cercana y orientada a resultados. Nada de textos genéricos: mensajes que realmente funcionan.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Proceso sencillo y sin estrés</h3>
            <p className="text-[#9CA3AF] text-sm">
              Tú me cuentas lo que necesitas y yo me encargo del resto. Te enseño avances, hacemos ajustes y lo dejamos perfecto sin complicarte la vida.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Optimizada para funcionar de verdad</h3>
            <p className="text-[#9CA3AF] text-sm">
              Tu web estará preparada para posicionar mejor, cargar rápido y ofrecer una experiencia profesional que genere confianza desde el primer momento.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] shadow-lg shadow-black/10">
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Acompañamiento real</h3>
            <p className="text-[#9CA3AF] text-sm">
              No te dejo solo. Te explico cómo usar tu web y te doy soporte durante el primer mes. Si tienes dudas, me escribes y lo solucionamos.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
})

PorQueTrabajarConmigo.displayName = "PorQueTrabajarConmigo"

export default PorQueTrabajarConmigo
