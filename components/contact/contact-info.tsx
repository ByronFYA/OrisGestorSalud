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
    <div className="space-y-8">
      {/* Contact cards */}
      <div className="space-y-4">
        {contactInfo.map((info) => (
          <div
            key={info.title}
            className="bg-muted/50 rounded-xl p-6 border border-border"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0132A6]/10 flex items-center justify-center flex-shrink-0">
                <info.icon className="h-6 w-6 text-[#0132A6]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-muted-foreground hover:text-[#0132A6] transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div className="bg-gradient-to-br from-[#0132A6] to-[#2D73DD] rounded-xl p-6 text-white">
        <h3 className="font-semibold mb-4">Síganos en Redes Sociales</h3>
        <p className="text-white/80 text-sm mb-4">
          Manténgase informado sobre nuestros servicios y novedades.
        </p>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F12A95] transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-muted/50 rounded-xl overflow-hidden border border-border">
        <div className="aspect-video bg-muted flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin className="h-12 w-12 text-[#0132A6]/30 mx-auto mb-4" />
            <p className="text-muted-foreground">
              Ubicación en Bogotá D.C., Colombia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
