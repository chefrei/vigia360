"use client"

import Image from "next/image"

export function LogoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-accent/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
          {/* Logo Grande */}
          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <Image
                src="/logo.png"
                alt="Vigia 360 - Logo Profesional"
                width={320}
                height={320}
                className="drop-shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Texto descriptivo */}
          <div className="flex-1 animate-fade-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              <span className="text-accent">Vigia 360</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Nuestro logo representa nuestro compromiso con la protección integral. El águila simboliza vigilancia
              constante, las alas representan cobertura 360°, y el escudo es garantía de seguridad y confiabilidad.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              <span className="font-semibold text-primary">Protección</span> y{" "}
              <span className="font-semibold text-primary">Resguardo</span> son más que palabras: son nuestros pilares y
              tu garantía.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
