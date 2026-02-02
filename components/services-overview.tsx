import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Microscope, 
  Bone, 
  Building2, 
  Stethoscope,
  CheckCircle2
} from "lucide-react"

const services = [
  {
    id: "oncologia",
    icon: Microscope,
    title: "Oncología",
    description: "Atención integral para pacientes con patologías oncológicas, desde el diagnóstico hasta el tratamiento y seguimiento.",
    features: [
      "Consulta especializada y seguimiento",
      "Diagnóstico integral y estadificación",
      "Tratamientos médicos y quirúrgicos",
      "Suministro de medicamentos oncológicos",
    ],
    color: "#F12A95",
  },
  {
    id: "artritis",
    icon: Bone,
    title: "Artritis Reumatoide",
    description: "Tratamiento especializado en reumatología con terapias modificadoras de la enfermedad y monitoreo continuo.",
    features: [
      "Consulta especializada en reumatología",
      "Diagnóstico y clasificación clínica",
      "Tratamiento farmacológico integral",
      "Monitoreo de respuesta terapéutica",
    ],
    color: "#2D73DD",
  },
  {
    id: "alta-complejidad",
    icon: Building2,
    title: "Alta Complejidad",
    description: "Servicios especializados de alta complejidad que garantizan la atención integral de patologías complejas.",
    features: [
      "Servicios hospitalarios especializados",
      "Procedimientos quirúrgicos",
      "Atención de urgencias",
      "Cuidados intensivos",
    ],
    color: "#0132A6",
  },
  {
    id: "mediana-complejidad",
    icon: Stethoscope,
    title: "Mediana Complejidad",
    description: "Servicios complementarios de mediana complejidad para asegurar una atención continua y efectiva.",
    features: [
      "Servicios ambulatorios",
      "Apoyos diagnósticos",
      "Medicamentos e insumos",
      "Servicios complementarios",
    ],
    color: "#2D73DD",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-[#F12A95] font-semibold text-sm tracking-widest uppercase mb-5">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 lg:mb-8 text-balance leading-tight">
            Atención Especializada para su{" "}
            <span className="text-[#0132A6]">Bienestar</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos especializados, 
            garantizando la prestación integral bajo modalidad de pago global prospectivo.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-card rounded-3xl border border-border/60 p-8 lg:p-10 hover:shadow-xl hover:shadow-black/5 hover:border-border transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className="w-16 h-16 lg:w-18 lg:h-18 rounded-2xl flex items-center justify-center mb-8"
                style={{ backgroundColor: `${service.color}12` }}
              >
                <service.icon 
                  className="h-8 w-8" 
                  style={{ color: service.color }}
                />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed text-base lg:text-lg">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 
                      className="h-5 w-5 flex-shrink-0 mt-0.5" 
                      style={{ color: service.color }}
                    />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/servicios#${service.id}`}
                className="inline-flex items-center gap-2 font-semibold text-base transition-all duration-300 group-hover:gap-4"
                style={{ color: service.color }}
              >
                Conocer más
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <Button 
            asChild
            size="lg"
            className="bg-[#0132A6] hover:bg-[#012485] text-white px-10 py-6 text-base font-semibold rounded-xl shadow-lg shadow-black/10"
          >
            <Link href="/servicios">
              Ver Todos los Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
