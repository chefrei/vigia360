"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Vigia 360</h3>
            <p className="text-sm text-primary-foreground/80">
              Tu seguridad es nuestra misión. Protección profesional 24/7.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-bold text-accent mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#inicio" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-accent transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-accent transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#compromiso" className="hover:text-accent transition-colors">
                  Compromiso
                </Link>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-bold text-accent mb-4">Políticas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="font-bold text-accent mb-4">Contacto Rápido</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contacto@vigia360.com" className="hover:text-accent transition-colors">
                  contacto@vigia360.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/584245201327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp: +58 (424) 520-1327
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-sm text-primary-foreground/80">
            <p>
              © {currentYear} <span className="font-bold text-accent">Vigia 360</span>. Todos los derechos reservados.
            </p>
            <p className="mt-2">Protección • Resguardo • Compromiso</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
