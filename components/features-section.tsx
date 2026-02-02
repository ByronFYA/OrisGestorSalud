import { 
  Shield, 
  Clock, 
  HeartPulse, 
  Pill, 
  UserCheck, 
  Building 
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Atención Integral",
    description: "Cobertura completa desde el diagnóstico hasta el tratamiento y seguimiento continuo.",
  },
  {
    icon: Clock,
    title: "Disponibilidad",
    description: "Servicios ambulatorios, hospitalarios y de urgencias cuando más los necesita.",
  },
  {
    icon: HeartPulse,
    title: "Especialistas",
    description: "Equipo médico altamente calificado en oncología y reumatología.",
  },
  {
    icon: Pill,
    title: "Medicamentos",
    description: "Suministro y administración de medicamentos especializados incluidos.",
  },
  {
    icon: UserCheck,
    title: "Seguimiento",
    description: "Monitoreo continuo de respuesta terapéutica y eventos adversos.",
  },
  {
    icon: Building,
    title: "Infraestructura",
    description: "Red de instituciones prestadoras de servicios de salud de alta calidad.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-[#F12A95] font-semibold text-sm tracking-widest uppercase mb-5">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 lg:mb-8 text-balance leading-tight">
            Comprometidos con su{" "}
            <span className="text-[#0132A6]">Salud</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Brindamos atención médica especializada con los más altos estándares de calidad, 
            garantizando el bienestar integral de nuestros pacientes.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 border border-border/60 hover:border-[#2D73DD]/40 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0132A6] to-[#2D73DD] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0132A6]/20">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
