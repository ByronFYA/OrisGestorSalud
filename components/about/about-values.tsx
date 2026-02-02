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
    <section className="py-24 md:py-32 lg:py-40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-[#F12A95] font-semibold text-sm tracking-widest uppercase mb-5">
            Nuestros Valores
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 lg:mb-8 text-balance leading-tight">
            Los Principios que nos{" "}
            <span className="text-[#0132A6]">Guían</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Nuestros valores son la base de nuestra cultura organizacional y guían 
            cada una de nuestras acciones en el cuidado de la salud.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 border border-border/60 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${value.color}12` }}
              >
                <value.icon 
                  className="h-8 w-8" 
                  style={{ color: value.color }}
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
