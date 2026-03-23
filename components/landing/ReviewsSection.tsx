"use client"

import { forwardRef, useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Jorge Morrás",
    role: "Instructor de Seguridad",
    image: "/reviews/fotojorgereseña.png",
    rating: 5,
    text: "El me hizo la mejor web que hubiera imaginado, además ¡tiene un padre guapo!",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "CEO, Fisioterapia Avanza",
    image: "/reviews/carlos.jpg",
    rating: 5,
    text: "Increíble trabajo. El equipo entendió perfectamente nuestras necesidades y entregó antes del plazo. El soporte post-entrega ha sido excepcional. Totalmente recomendados.",
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Fundadora, Estética Bella",
    image: "/reviews/laura.jpg",
    rating: 5,
    text: "La mejor inversión que hemos hecho para nuestro negocio. La landing page no solo es bonita, sino que realmente convierte. Hemos triplicado las consultas desde el primer mes.",
  },
  {
    id: 4,
    name: "Pedro Sánchez",
    role: "Director, Clínica Veterinaria Huella",
    image: "/reviews/pedro.jpg",
    rating: 5,
    text: "Profesionalismo de principio a fin. Nos guiaron en todo el proceso y el resultado superó nuestras expectativas. El mantenimiento mensual nos da mucha tranquilidad.",
  },
]

const ReviewsSection = forwardRef<HTMLElement>((_, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }, [])

  return (
    <section
      ref={ref}
      id="resenas"
      className="py-20 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5E7EB] text-balance">
            Lo que dicen nuestros <span className="text-[#3B82F6]">clientes</span>
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto text-pretty">
            Más de 50 clínicas y PYMES confían en nosotros para su presencia digital.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 p-3 bg-[#111827] border border-[#1F2937] rounded-full text-[#9CA3AF] hover:text-[#E5E7EB] hover:border-[#3B82F6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            aria-label="Reseña anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 p-3 bg-[#111827] border border-[#1F2937] rounded-full text-[#9CA3AF] hover:text-[#E5E7EB] hover:border-[#3B82F6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            aria-label="Siguiente reseña"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Review Card */}
          <div 
            className="overflow-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[#111827] rounded-2xl p-8 lg:p-12 border border-[#1F2937]">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#3B82F6] text-[#3B82F6]"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="sr-only">{review.rating} de 5 estrellas</span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg lg:text-xl text-[#E5E7EB] leading-relaxed mb-8">
                      {'"'}{review.text}{'"'}
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#1F2937]">
                        <Image
                          src={review.image}
                          alt={`Foto de ${review.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-[#E5E7EB]">{review.name}</div>
                        <div className="text-sm text-[#9CA3AF]">{review.role}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Navegación de reseñas">
            {reviews.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ir a reseña ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                  index === currentIndex
                    ? "bg-[#3B82F6] w-8"
                    : "bg-[#1F2937] hover:bg-[#3B82F6]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

ReviewsSection.displayName = "ReviewsSection"

export default ReviewsSection
