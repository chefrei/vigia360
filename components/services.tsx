"use client"

import { Camera, Shield, Building2, Lock, AlertCircle, Radio } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Vigilancia con Cámaras",
    description: "Sistemas de monitoreo por video en HD y 4K, con almacenamiento en la nube y acceso remoto.",
  },
  {
    icon: Radio,
    title: "Vigilancia 24/7",
    description: "Patrullas de seguridad continuas y monitoreo central sin descanso, todos los días del año.",
  },
  {
    icon: Building2,
    title: "Seguridad Corporativa",
    description: "Soluciones integrales para empresas, oficinas y centros comerciales con protección especializada.",
  },
  {
    icon: Lock,
    title: "Control de Acceso",
    description: "Sistemas biométricos y digitales para gestionar quién entra y sale de tus instalaciones.",
  },
  {
    icon: AlertCircle,
    title: "Respuesta a Emergencias",
    description: "Equipo de respuesta rápida disponible para actuar inmediatamente ante cualquier incidente.",
  },
  {
    icon: Shield,
    title: "Protección Residencial",
    description: "Planes de seguridad personalizados para tu hogar con alarmas y vigilancia discreta.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Soluciones de seguridad personalizadas para satisfacer todas tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
