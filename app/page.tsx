"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Header from "@/components/landing/Header"
import HeroSection from "@/components/landing/HeroSection"
import PorQueTrabajarConmigo from "@/components/landing/PorQueTrabajarConmigo"
import MiProcesoDeTrabajo from "@/components/landing/MiProcesoDeTrabajo"
import PlansSection from "@/components/landing/PlansSection"
import MaintenanceSection from "@/components/landing/MaintenanceSection"
import ReviewsSection from "@/components/landing/ReviewsSection"
import PortfolioSection from "@/components/landing/PortfolioSection"
import ContactSection from "@/components/landing/ContactSection"
import Footer from "@/components/landing/Footer"

type Section =
  | "inicio"
  | "porquetrabajarconmigo"
  | "proceso" 
  | "planes" 
  | "mantenimiento"
  | "resenas"
  | "portafolio"
  | "contacto"

// Easing function for smooth scroll
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// Custom smooth scroll with easing
function smoothScrollTo(targetY: number, duration: number = 800) {
  const startY = window.scrollY
  const difference = targetY - startY
  const startTime = performance.now()

  function step(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeInOutCubic(progress)

    window.scrollTo(0, startY + difference * easedProgress)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<Section>("inicio")

  // Refs for each section
  const inicioRef = useRef<HTMLElement>(null)
  const porquetrabajarconmigoRef = useRef<HTMLElement>(null)
  const procesoRef = useRef<HTMLElement>(null)  
  const planesRef = useRef<HTMLElement>(null)
  const mantenimientoRef = useRef<HTMLElement>(null)
  const resenasRef = useRef<HTMLElement>(null)
  const portafolioRef = useRef<HTMLElement>(null)
  const contactoRef = useRef<HTMLElement>(null)

  const sectionRefs: Record<Section, React.RefObject<HTMLElement | null>> = {
    inicio: inicioRef,
    porquetrabajarconmigo: porquetrabajarconmigoRef,
    proceso: procesoRef,    
    planes: planesRef,
    mantenimiento: mantenimientoRef,
    resenas: resenasRef,
    portafolio: portafolioRef,
    contacto: contactoRef,
  }

  // Navigate to section with smooth scroll
  const navigateToSection = useCallback((section: Section) => {
    const ref = sectionRefs[section]
    if (ref.current) {
      const headerHeight = 80
      const targetPosition = ref.current.offsetTop - headerHeight
      smoothScrollTo(targetPosition)
      setActiveTab(section)
    }
  }, [])

  // IntersectionObserver to update activeTab based on visible section
  useEffect(() => {
    const sections: Section[] = [
      "inicio",
      "porquetrabajarconmigo",
      "proceso",      
      "planes",
      "mantenimiento",
      "resenas",
      "portafolio",
      "contacto",
    ]

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id as Section
          if (sections.includes(sectionId)) {
            setActiveTab(sectionId)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <Header activeTab={activeTab} onNavigate={navigateToSection} />

      <HeroSection ref={inicioRef} onNavigate={navigateToSection} />
      <PorQueTrabajarConmigo ref={porquetrabajarconmigoRef} />
      <MiProcesoDeTrabajo ref={procesoRef} />      
      <PlansSection ref={planesRef} onNavigate={navigateToSection} />
      <MaintenanceSection ref={mantenimientoRef} onNavigate={navigateToSection} />
      <ReviewsSection ref={resenasRef} />
      <PortfolioSection ref={portafolioRef} />
      <ContactSection ref={contactoRef} />

      <Footer onNavigate={navigateToSection} />
    </main>
  )
}
