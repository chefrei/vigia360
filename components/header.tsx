"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Quiénes Somos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#compromiso", label: "Compromiso" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo y nombre */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 relative flex-shrink-0">
              <Image src="/logo.png" alt="Vigia 360 Logo" width={56} height={56} priority />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">Vigia 360</span>
              <span className="text-xs text-primary/70">Protección • Resguardo</span>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Botón de contacto Desktop */}
          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200"
            >
              Contáctanos
            </Link>
          </div>

          {/* Menú Hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navegación Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                className="px-4 py-2 bg-accent text-white rounded-lg font-semibold text-center hover:bg-accent/90 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contáctanos
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
