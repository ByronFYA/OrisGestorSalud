import { 
  Shield, 
  Users, 
  Award, 
  Lightbulb, 
  HeartHandshake, 
  Scale 
} from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Compromiso",
    description: "Nos comprometemos a garantizar la prestación integral de servicios de salud con los más altos estándares de calidad.",
    color: "#0132A6",
  },
  {
    icon: Users,
    title: "Humanidad",
    description: "Ponemos al paciente en el centro de nuestra atención, brindando un trato cálido, respetuoso y empático.",
    color: "#F12A95",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Buscamos constantemente la mejora continua en todos nuestros procesos y servicios de atención médica.",
    color: "#2D73DD",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Adoptamos nuevas tecnologías y prácticas para ofrecer soluciones más efectivas en el cuidado de la salud.",
    color: "#0132A6",
  },
  {
    icon: HeartHandshake,
    title: "Integridad",
    description: "Actuamos con honestidad, transparencia y ética en todas nuestras relaciones y decisiones.",
    color: "#F12A95",
  },
  {
    icon: Scale,
    title: "Equidad",
    description: "Garantizamos el acceso justo e igualitario a servicios de salud de calidad para todos nuestros pacientes.",
    color: "#2D73DD",
  },
]

export function AboutValues() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#F12A95] font-medium text-sm tracking-wider uppercase mb-4">
            Nuestros Valores
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Los Principios que nos{" "}
            <span className="text-[#0132A6]">Guían</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nuestros valores son la base de nuestra cultura organizacional y guían 
            cada una de nuestras acciones en el cuidado de la salud.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${value.color}15` }}
              >
                <value.icon 
                  className="h-7 w-7" 
                  style={{ color: value.color }}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
