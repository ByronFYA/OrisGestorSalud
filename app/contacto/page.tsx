import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFAQ } from "@/components/contact/contact-faq"

export const metadata: Metadata = {
  title: "Contacto | Oris Ut - Gestor de Red de Salud",
  description: "Contáctenos para más información sobre nuestros servicios de salud especializados. Estamos aquí para ayudarle.",
}

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-20">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        <ContactFAQ />
      </main>
      <Footer />
    </>
  )
}
