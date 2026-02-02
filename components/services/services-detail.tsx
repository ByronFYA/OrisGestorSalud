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
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="space-y-32 lg:space-y-40">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32"
            >
              <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-start ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} lg:sticky lg:top-32`}>
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                    style={{ backgroundColor: `${service.color}12` }}
                  >
                    <service.icon 
                      className="h-8 w-8" 
                      style={{ color: service.color }}
                    />
                  </div>
                  
                  <span 
                    className="text-sm font-semibold tracking-widest uppercase"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
                    {service.subtitle}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-10">
                    {service.description}
                  </p>

                  {/* Quick list */}
                  <div className="space-y-4 bg-muted/30 rounded-2xl p-6 lg:p-8">
                    <h4 className="font-semibold text-foreground mb-4">Servicios incluidos:</h4>
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature.title} className="flex items-start gap-4">
                        <CheckCircle2 
                          className="h-6 w-6 flex-shrink-0 mt-0.5" 
                          style={{ color: service.color }}
                        />
                        <span className="text-foreground/90 font-medium">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features grid */}
                <div className={`grid sm:grid-cols-2 gap-5 lg:gap-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}>
                  {service.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="group bg-card rounded-2xl p-6 lg:p-8 border border-border/60 hover:border-border hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${service.color}12` }}
                      >
                        <feature.icon 
                          className="h-6 w-6" 
                          style={{ color: service.color }}
                        />
                      </div>
                      <h3 className="font-bold text-foreground mb-3 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="border-t border-border/50 mt-32 lg:mt-40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
