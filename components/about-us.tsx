"use client"

import Image from "next/image"

export function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="animate-fade-in-left">
            <Image
              src="/professional-security-team-meeting-in-office.jpg"
              alt="Equipo profesional de Vigia 360"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Contenido */}
          <div className="animate-fade-in-right">
            <h2 className="text-4xl font-bold text-primary mb-6">Quiénes Somos</h2>

            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              En <span className="font-bold text-accent">Vigia 360</span>, somos una empresa líder en soluciones
              integrales de seguridad. Combinamos <span className="font-semibold">tecnología avanzada</span> con{" "}
              <span className="font-semibold">personal altamente capacitado</span> para ofrecer protección confiable y
              profesional.
            </p>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Nuestra misión es proteger lo que más valoras con{" "}
              <span className="font-semibold">responsabilidad y seriedad</span>. Durante años, hemos ganado la confianza
              de empresas y familias que buscan seguridad de clase mundial.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                <p className="text-foreground">Experiencia demostrada en vigilancia profesional</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                <p className="text-foreground">Certificaciones internacionales en seguridad</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                <p className="text-foreground">Disponibilidad 24/7 para nuestros clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
