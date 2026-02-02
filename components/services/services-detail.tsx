import { 
  Microscope, 
  Bone, 
  Building2, 
  Stethoscope,
  CheckCircle2,
  Pill,
  Activity,
  FileCheck,
  HeartPulse,
  Syringe,
  ClipboardList,
  GraduationCap
} from "lucide-react"

const services = [
  {
    id: "oncologia",
    icon: Microscope,
    title: "Oncología",
    subtitle: "Atención Integral para Pacientes Oncológicos",
    description: "Nos comprometemos a brindar una atención integral y especializada a pacientes con patologías oncológicas, desde el diagnóstico hasta el tratamiento y seguimiento continuo.",
    color: "#F12A95",
    features: [
      {
        icon: ClipboardList,
        title: "Consulta Especializada y Seguimiento",
        description: "Evaluación médica completa por especialistas en oncología con seguimiento personalizado.",
      },
      {
        icon: FileCheck,
        title: "Diagnóstico Integral y Estadificación",
        description: "Estudios diagnósticos completos para determinar el tipo y etapa del cáncer.",
      },
      {
        icon: Activity,
        title: "Tratamientos Médicos, Quirúrgicos y/o Ambulatorios",
        description: "Opciones terapéuticas personalizadas según la indicación clínica de cada paciente.",
      },
      {
        icon: Pill,
        title: "Suministro y Administración de Medicamentos",
        description: "Acceso a medicamentos oncológicos especializados con administración supervisada.",
      },
      {
        icon: Syringe,
        title: "Apoyos Diagnósticos y Terapéuticos",
        description: "Exámenes complementarios y procedimientos necesarios para el tratamiento.",
      },
      {
        icon: HeartPulse,
        title: "Manejo de Complicaciones y Seguimiento",
        description: "Atención de eventos asociados y control clínico continuo.",
      },
    ],
  },
  {
    id: "artritis",
    icon: Bone,
    title: "Artritis Reumatoide",
    subtitle: "Tratamiento Especializado en Reumatología",
    description: "Ofrecemos un programa integral para el diagnóstico, tratamiento y seguimiento de pacientes con artritis reumatoide, con enfoque en la calidad de vida.",
    color: "#2D73DD",
    features: [
      {
        icon: ClipboardList,
        title: "Consulta Especializada en Reumatología",
        description: "Atención por especialistas certificados en enfermedades reumáticas.",
      },
      {
        icon: FileCheck,
        title: "Diagnóstico, Clasificación y Seguimiento",
        description: "Evaluación completa para establecer el diagnóstico y plan de tratamiento.",
      },
      {
        icon: Pill,
        title: "Tratamiento Farmacológico Integral",
        description: "Incluyendo terapias modificadoras de la enfermedad (DMARDs) y biológicos.",
      },
      {
        icon: Activity,
        title: "Monitoreo de Respuesta Terapéutica",
        description: "Seguimiento continuo de la efectividad del tratamiento y detección de eventos adversos.",
      },
      {
        icon: Syringe,
        title: "Apoyos Diagnósticos Requeridos",
        description: "Laboratorios, imágenes diagnósticas y procedimientos especializados.",
      },
      {
        icon: GraduationCap,
        title: "Educación al Paciente",
        description: "Programas de educación sobre la enfermedad y autocuidado para mejorar la adherencia.",
      },
    ],
  },
  {
    id: "alta-complejidad",
    icon: Building2,
    title: "Servicios de Alta Complejidad",
    subtitle: "Atención Especializada de Alto Nivel",
    description: "Contamos con una red de instituciones prestadoras de servicios de salud de alta complejidad para garantizar la atención integral de patologías que requieren manejo especializado.",
    color: "#0132A6",
    features: [
      {
        icon: Building2,
        title: "Servicios Hospitalarios Especializados",
        description: "Hospitalización en unidades especializadas con tecnología de punta.",
      },
      {
        icon: Activity,
        title: "Procedimientos Quirúrgicos",
        description: "Cirugías especializadas realizadas por equipos médicos altamente calificados.",
      },
      {
        icon: HeartPulse,
        title: "Cuidados Intensivos",
        description: "Unidades de cuidado intensivo con monitoreo continuo y personal especializado.",
      },
      {
        icon: Syringe,
        title: "Procedimientos Especializados",
        description: "Intervenciones diagnósticas y terapéuticas de alta tecnología.",
      },
      {
        icon: Pill,
        title: "Medicamentos Especializados",
        description: "Acceso a medicamentos de alto costo y tecnologías en salud innovadoras.",
      },
      {
        icon: ClipboardList,
        title: "Coordinación de Atención",
        description: "Gestión integral del proceso de atención en salud del paciente.",
      },
    ],
  },
  {
    id: "mediana-complejidad",
    icon: Stethoscope,
    title: "Servicios de Mediana Complejidad",
    subtitle: "Atención Complementaria Especializada",
    description: "Servicios complementarios de mediana complejidad que garantizan la continuidad y calidad en la atención de nuestros pacientes.",
    color: "#2D73DD",
    features: [
      {
        icon: ClipboardList,
        title: "Servicios Ambulatorios",
        description: "Consultas especializadas y procedimientos que no requieren hospitalización.",
      },
      {
        icon: FileCheck,
        title: "Apoyos Diagnósticos",
        description: "Laboratorio clínico, imagenología y estudios diagnósticos especializados.",
      },
      {
        icon: Pill,
        title: "Medicamentos e Insumos",
        description: "Suministro de medicamentos y dispositivos médicos necesarios para el tratamiento.",
      },
      {
        icon: Activity,
        title: "Servicios Complementarios",
        description: "Terapias de rehabilitación, nutrición y soporte psicológico.",
      },
      {
        icon: HeartPulse,
        title: "Atención Ambulatoria",
        description: "Procedimientos menores y tratamientos que se realizan sin hospitalización.",
      },
      {
        icon: Syringe,
        title: "Procedimientos Diagnósticos",
        description: "Estudios especializados para el diagnóstico y seguimiento de patologías.",
      },
    ],
  },
]

export function ServicesDetail() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon 
                      className="h-8 w-8" 
                      style={{ color: service.color }}
                    />
                  </div>
                  
                  <span 
                    className="text-sm font-medium tracking-wider uppercase"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                    {service.subtitle}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Quick list */}
                  <div className="space-y-3">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature.title} className="flex items-start gap-3">
                        <CheckCircle2 
                          className="h-5 w-5 flex-shrink-0 mt-0.5" 
                          style={{ color: service.color }}
                        />
                        <span className="text-foreground/80">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features grid */}
                <div className={`grid sm:grid-cols-2 gap-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}>
                  {service.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-muted/50 rounded-xl p-6 border border-border hover:border-border/80 hover:shadow-sm transition-all"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <feature.icon 
                          className="h-5 w-5" 
                          style={{ color: service.color }}
                        />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="border-t border-border mt-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
