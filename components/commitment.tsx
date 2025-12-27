"use client"

import { CheckCircle2 } from "lucide-react"

const commitments = [
  {
    title: "Tecnología de Vanguardia",
    description: "Utilizamos sistemas de vigilancia de última generación para prevenir riesgos antes de que ocurran.",
  },
  {
    title: "Personal Capacitado",
    description: "Nuestro equipo cumple con estándares internacionales de seguridad y se entrena continuamente.",
  },
  {
    title: "Respuesta Inmediata",
    description: "Disponibles 24/7 para actuar rápidamente ante cualquier incidente o emergencia.",
  },
  {
    title: "Transparencia y Ética",
    description: "Operamos con integridad total, respetando privacidad y cumpliendo todas las normativas legales.",
  },
]

export function Commitment() {
  return (
    <section id="compromiso" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Lado izquierdo - Texto */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl font-bold text-primary mb-8">Nuestro Compromiso</h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              En <span className="font-bold text-accent">Vigia 360</span>, nos comprometemos con tu seguridad como si
              fuera la nuestra. Entendemos que confías en nosotros para proteger lo que más importa.
            </p>

            <div className="space-y-6">
              {commitments.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado derecho - Imagen */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl"></div>
              <img
                src="/security-professionals-with-technology-and-reliabi.jpg"
                alt="Compromiso Vigia 360"
                className="w-full rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
