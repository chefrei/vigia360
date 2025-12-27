"use client"

import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/professional-security-monitoring-center-with-camer.jpg" alt="Hero Background" fill className="object-cover" priority />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Seguridad 360°:
          <span className="block text-accent mt-2">Protección, Compromiso y Tecnología</span>
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Para tu tranquilidad. En Vigia 360, combinamos tecnología avanzada y personal capacitado para ofrecerte la
          seguridad que mereces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contacto"
            className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
          >
            Solicita una Cotización
          </Link>
          <Link
            href="#nosotros"
            className="px-8 py-4 bg-white/20 text-white font-bold rounded-lg border-2 border-white hover:bg-white/30 transition-all duration-200"
          >
            Conoce Más
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm">Desplázate para conocer más</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
