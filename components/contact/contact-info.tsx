import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Bogotá D.C., Colombia",
    link: null,
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+57 300 123 4567",
    link: "tel:+573001234567",
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    content: "contacto@orisut.com",
    link: "mailto:contacto@orisut.com",
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    content: "Lunes a Viernes: 8:00 AM - 5:00 PM",
    link: null,
  },
]

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

export function ContactInfo() {
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Contact cards */}
      <div className="space-y-4 lg:space-y-5">
        {contactInfo.map((info) => (
          <div
            key={info.title}
            className="bg-muted/40 rounded-2xl p-6 lg:p-8 border border-border/60 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#0132A6]/10 flex items-center justify-center flex-shrink-0">
                <info.icon className="h-7 w-7 text-[#0132A6]" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2 text-lg">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-muted-foreground hover:text-[#0132A6] transition-colors text-base"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-base">{info.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div className="bg-gradient-to-br from-[#0132A6] to-[#2D73DD] rounded-2xl p-6 lg:p-8 text-white shadow-lg shadow-[#0132A6]/20">
        <h3 className="font-bold text-lg mb-4">Síganos en Redes Sociales</h3>
        <p className="text-white/80 mb-5">
          Manténgase informado sobre nuestros servicios y novedades.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center hover:bg-[#F12A95] transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-muted/40 rounded-2xl overflow-hidden border border-border/60">
        <div className="aspect-video bg-muted flex items-center justify-center">
          <div className="text-center p-10">
            <MapPin className="h-14 w-14 text-[#0132A6]/25 mx-auto mb-5" />
            <p className="text-muted-foreground text-lg">
              Ubicación en Bogotá D.C., Colombia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
