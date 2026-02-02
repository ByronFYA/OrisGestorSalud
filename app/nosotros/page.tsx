import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutValues } from "@/components/about/about-values"
import { AboutTimeline } from "@/components/about/about-timeline"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Nosotros | Oris Ut - Gestor de Red de Salud",
  description: "Conozca nuestra historia, misión, visión y valores. Somos un gestor de red de salud comprometido con la atención integral de pacientes en Colombia.",
}

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <StatsSection />
        <AboutTimeline />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
