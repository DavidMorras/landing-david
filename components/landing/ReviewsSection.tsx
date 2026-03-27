"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Jorge Morrás",
    role: "Instructor de Seguridad",
    image: "/reviews/fotojorgereseña.png",
    rating: 5,
    text: "El me hizo la mejor web que hubiera imaginado, además ¡tiene un padre guapo!",
  },
]

const ReviewsSection = forwardRef<HTMLElement>((_, ref) => {
  const review = reviews[0] // única reseña

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

        {/* Single Review Card */}
        <div className="max-w-3xl mx-auto">
          <article className="bg-[#111827] rounded-2xl p-8 lg:p-12 border border-[#1F2937]">

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

          </article>
        </div>
      </div>
    </section>
  )
})

ReviewsSection.displayName = "ReviewsSection"

export default ReviewsSection
