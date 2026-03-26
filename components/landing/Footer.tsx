"use client"

type Section =
  | "inicio"
  | "porquetrabajarconmigo"
  | "proceso"
  | "planes"
  | "mantenimiento"
  | "resenas"
  | "portfolio"
  | "contacto"

interface FooterProps {
  onNavigate: (section: Section) => void
}

const navItems: { id: Section; label: string }[] = [
  { id: "inicio", label: "Inicio" },
  { id: "porquetrabajarconmigo", label: "Por qué yo" },
  { id: "proceso", label: "Proceso" },
  { id: "planes", label: "Planes" },
  { id: "mantenimiento", label: "Mantenimiento" },
  { id: "resenas", label: "Reseñas" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contacto", label: "Contacto" },
]

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#111827] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <button
              onClick={() => onNavigate("inicio")}
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg"
            >
              <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-[#E5E7EB] font-semibold text-lg">LandingsPro</span>
            </button>
            <p className="mt-4 text-[#9CA3AF] text-sm leading-relaxed">
              Te ayudamos a transformar visitas en clientes con una landing profesional hecha a medida.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#E5E7EB] font-semibold mb-4">Navegación</h3>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="block text-[#9CA3AF] hover:text-[#3B82F6] transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#E5E7EB] font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:davidmorras2@gmail.com"
                className="block text-[#9CA3AF] hover:text-[#3B82F6] transition-colors"
              >
                davidmorras2@gmail.com
              </a>
              <a
                href="tel:+34680210456"
                className="block text-[#9CA3AF] hover:text-[#3B82F6] transition-colors"
              >
                +34 680210456
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#1F2937] text-center">
          <p className="text-[#9CA3AF] text-sm flex items-center justify-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new Event("openPrivacyBanner"))}
              className="underline hover:text-[#3B82F6] transition"
            >
              Política de Privacidad
            </button>

            <span>|</span>

            <button
              onClick={() => window.dispatchEvent(new Event("openPrivacyBanner"))}
              className="underline hover:text-[#3B82F6] transition"
            >
              Aviso Legal
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}
