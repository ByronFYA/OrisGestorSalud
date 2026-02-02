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
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
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
