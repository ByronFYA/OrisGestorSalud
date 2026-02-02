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
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#F12A95] font-medium text-sm tracking-wider uppercase mb-4">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprometidos con su{" "}
            <span className="text-[#0132A6]">Salud</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Brindamos atención médica especializada con los más altos estándares de calidad, 
            garantizando el bienestar integral de nuestros pacientes.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-[#2D73DD]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0132A6] to-[#2D73DD] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
