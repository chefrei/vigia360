"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (!formData.nombre || !formData.correo || !formData.telefono) {
      alert("Por favor completa todos los campos requeridos")
      return
    }

    console.log("Formulario enviado:", formData)
    setSubmitted(true)

    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setFormData({ nombre: "", correo: "", telefono: "", mensaje: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contacto" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">Contáctanos</h2>
          <p className="text-lg text-foreground/70">
            Estamos listos para resolver tus dudas y proporcionar la solución perfecta para tu seguridad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-primary mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-semibold text-primary mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="tu.correo@ejemplo.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-primary mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Tu número de teléfono"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-primary mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tus necesidades de seguridad"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
              >
                {submitted ? "¡Mensaje Enviado!" : "Enviar Mensaje"}
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="animate-fade-in-right space-y-8">
            {/* Métodos de contacto directo */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Métodos de Contacto Directo</h3>

              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/584245201327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all duration-200"
                >
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">WhatsApp</p>
                    <p className="text-sm text-foreground/70">+58 (424) 520-1327</p>
                  </div>
                </a>

                <a
                  href="mailto:contacto@vigia360.com"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all duration-200"
                >
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Correo</p>
                    <p className="text-sm text-foreground/70">contacto@vigia360.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Ubicación</p>
                    <p className="text-sm text-foreground/70">Tu ciudad, País</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-all duration-200 font-bold"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-all duration-200 font-bold"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-all duration-200 font-bold"
                  aria-label="TikTok"
                >
                  ♪
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-all duration-200 font-bold"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
