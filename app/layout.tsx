import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vigia 360 - Seguridad Profesional 24/7",
  description:
    "Soluciones integrales de vigilancia y seguridad para empresas y residencias. Protección con tecnología avanzada, personal certificado y monitoreo continuo.",
  keywords:
    "vigia 360, seguridad 360, vigilancia profesional, monitoreo 24/7, sistemas de seguridad, protección empresarial",
  generator: "v0.app",
  openGraph: {
    title: "Vigilancia 360 - Protección Integral de Seguridad",
    description: "Tu tranquilidad es nuestra misión. Servicios profesionales de vigilancia y seguridad.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
