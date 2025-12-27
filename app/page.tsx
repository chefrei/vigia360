"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoSection } from "@/components/logo-section"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { Commitment } from "@/components/commitment"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <LogoSection />
      <AboutUs />
      <Services />
      <Commitment />
      <Contact />
      <Footer />
    </main>
  )
}
