import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

const services = [
  { name: "Oncología", href: "/servicios#oncologia" },
  { name: "Artritis Reumatoide", href: "/servicios#artritis" },
  { name: "Alta Complejidad", href: "/servicios#alta-complejidad" },
  { name: "Mediana Complejidad", href: "/servicios#mediana-complejidad" },
]

const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

export function Footer() {
  return (
    <footer className="bg-[#0132A6] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company info */}
          <div className="space-y-6">
            <Image
              src="/SALUD1.png"
              alt="Oris Ut - Gestor de Red de Salud"
              width={210}
              height={130}

            />
            <p className="text-white/80 text-sm leading-relaxed">
              Gestor de Red de Salud comprometido con garantizar la prestación integral 
              de servicios de atención especializada para pacientes con patologías oncológicas 
              y reumatológicas en Colombia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F12A95] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F12A95] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F12A95] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Nuestros Servicios
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#F12A95]" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-[#F12A95] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Enlaces Rápidos
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#F12A95]" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#F12A95] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Contacto
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#F12A95]" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F12A95] flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Bogotá D.C., Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#F12A95] flex-shrink-0" />
                <a href="tel:+573001234567" className="text-white/80 hover:text-[#F12A95] transition-colors text-sm">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#F12A95] flex-shrink-0" />
                <a href="mailto:contacto@orisut.com" className="text-white/80 hover:text-[#F12A95] transition-colors text-sm">
                  contacto@orisut.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#F12A95] flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Lunes a Viernes<br />
                  8:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 py-6 lg:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Oris Ut. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/politica-privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos-condiciones" className="hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
