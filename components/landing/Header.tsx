"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

type Section =
  | "inicio"
  | "porquetrabajarconmigo"
  | "proceso"  
  | "planes"
  | "mantenimiento"
  | "resenas"
  | "portafolio"
  | "contacto"

interface HeaderProps {
  activeTab: Section
  onNavigate: (section: Section) => void
}

const navItems: { id: Section; label: string }[] = [
  { id: "inicio", label: "Inicio" },
  { id: "porquetrabajarconmigo", label: "Por qué yo" },
  { id: "proceso", label: "Proceso" },   
  { id: "planes", label: "Planes" },
  { id: "mantenimiento", label: "Mantenimiento" },
  { id: "resenas", label: "Reseñas" },
  { id: "portafolio", label: "Portafolio" },
  { id: "contacto", label: "Contacto" },
]

export default function Header({ activeTab, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (section: Section) => {
    onNavigate(section)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0B0F14]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("inicio")}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg"
          >
            <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-[#E5E7EB] font-semibold text-lg hidden sm:block">
              LandingsPro
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            role="navigation"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={activeTab === item.id ? "true" : undefined}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                  activeTab === item.id
                    ? "bg-[#3B82F6] text-white"
                    : "text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2" role="navigation" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={activeTab === item.id ? "true" : undefined}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                  activeTab === item.id
                    ? "bg-[#3B82F6] text-white"
                    : "text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
