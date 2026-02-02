import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesDetail } from "@/components/services/services-detail"
import { ServicesProcess } from "@/components/services/services-process"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Servicios | Oris Ut - Gestor de Red de Salud",
  description: "Servicios especializados en oncología, artritis reumatoide y atención médica de alta y mediana complejidad. Atención integral para su bienestar.",
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesDetail />
        <ServicesProcess />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
