"use client"

import { forwardRef, useState, useCallback } from "react"
import { Mail, Phone, Send, CreditCard, Smartphone } from "lucide-react"
import BizumModal from "./BizumModal"
import PayPalModal from "./PayPalModal"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isBizumOpen, setIsBizumOpen] = useState(false)
  const [isPayPalOpen, setIsPayPalOpen] = useState(false)

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error("Error al enviar el mensaje")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.error(error)
      alert("Hubo un problema al enviar el mensaje. Inténtalo más tarde.")
    }

    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section
      ref={ref}
      id="contacto"
      className="py-20 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5E7EB] text-balance">
            ¿Listo para <span className="text-[#3B82F6]">empezar</span>?
          </h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto text-pretty">
            Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div className="bg-[#111827] rounded-2xl p-8 border border-[#1F2937]">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-[#3B82F6]" />
                </div>
                <h3 className="text-xl font-bold text-[#E5E7EB] mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[#9CA3AF]">
                  Te responderemos lo antes posible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#E5E7EB] mb-2"
                    >
                      Nombre <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 bg-[#0B0F14] border rounded-lg text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-colors ${
                        errors.name ? "border-[#EF4444]" : "border-[#1F2937]"
                      }`}
                      placeholder="Tu nombre"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-[#EF4444]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#E5E7EB] mb-2"
                    >
                      Email <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-3 bg-[#0B0F14] border rounded-lg text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-colors ${
                        errors.email ? "border-[#EF4444]" : "border-[#1F2937]"
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-[#EF4444]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#E5E7EB] mb-2"
                    >
                      Teléfono <span className="text-[#9CA3AF]">(opcional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B0F14] border border-[#1F2937] rounded-lg text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-colors"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#E5E7EB] mb-2"
                    >
                      Mensaje <span className="text-[#EF4444]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 bg-[#0B0F14] border rounded-lg text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-colors resize-none ${
                        errors.message ? "border-[#EF4444]" : "border-[#1F2937]"
                      }`}
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-[#EF4444]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#60A5FA] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info & Payment Methods */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-[#111827] rounded-2xl p-8 border border-[#1F2937]">
              <h3 className="text-xl font-bold text-[#E5E7EB] mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:hola@landingspro.es"
                  className="flex items-center gap-4 text-[#9CA3AF] hover:text-[#3B82F6] transition-colors"
                >
                  <div className="p-3 bg-[#3B82F6]/10 rounded-lg">
                    <Mail className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <span>hola@landingspro.es</span>
                </a>
                <a
                  href="tel:+34600000000"
                  className="flex items-center gap-4 text-[#9CA3AF] hover:text-[#3B82F6] transition-colors"
                >
                  <div className="p-3 bg-[#3B82F6]/10 rounded-lg">
                    <Phone className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <span>+34 600 000 000</span>
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-[#111827] rounded-2xl p-8 border border-[#1F2937]">
              <h3 className="text-xl font-bold text-[#E5E7EB] mb-6">
                Métodos de pago
              </h3>
              <p className="text-[#9CA3AF] mb-6 text-sm">
                Aceptamos diferentes métodos de pago para tu comodidad.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setIsBizumOpen(true)}
                  className="flex items-center justify-center gap-3 p-4 bg-[#0B0F14] border border-[#1F2937] rounded-xl hover:border-[#3B82F6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                  aria-label="Pagar con Bizum"
                >
                  <Smartphone className="w-6 h-6 text-[#3B82F6]" />
                  <span className="text-[#E5E7EB] font-medium">Bizum</span>
                </button>
                <button
                  onClick={() => setIsPayPalOpen(true)}
                  className="flex items-center justify-center gap-3 p-4 bg-[#0B0F14] border border-[#1F2937] rounded-xl hover:border-[#3B82F6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                  aria-label="Pagar con PayPal"
                >
                  <CreditCard className="w-6 h-6 text-[#3B82F6]" />
                  <span className="text-[#E5E7EB] font-medium">PayPal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <BizumModal isOpen={isBizumOpen} onClose={() => setIsBizumOpen(false)} />
      <PayPalModal isOpen={isPayPalOpen} onClose={() => setIsPayPalOpen(false)} />
    </section>
  )
})

ContactSection.displayName = "ContactSection"

export default ContactSection
