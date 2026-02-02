import { PhoneCall, ClipboardCheck, Stethoscope, HeartHandshake } from "lucide-react"

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Contacto Inicial",
    description: "Comuníquese con nosotros para iniciar el proceso de atención. Nuestro equipo le brindará información completa sobre los servicios.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Evaluación y Diagnóstico",
    description: "Realizamos una evaluación integral para determinar el diagnóstico y establecer el plan de tratamiento más adecuado.",
  },
  {
    icon: Stethoscope,
    step: "03",
    title: "Tratamiento Especializado",
    description: "Iniciamos el tratamiento con el acompañamiento de nuestro equipo médico especializado y seguimiento continuo.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Seguimiento Continuo",
    description: "Mantenemos un monitoreo constante de su evolución y ajustamos el tratamiento según sea necesario.",
  },
]

export function ServicesProcess() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#F12A95] font-medium text-sm tracking-wider uppercase mb-4">
            Proceso de Atención
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            ¿Cómo{" "}
            <span className="text-[#0132A6]">Trabajamos</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nuestro proceso de atención está diseñado para brindarle una experiencia 
            integral y de calidad desde el primer contacto.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#0132A6] to-[#2D73DD] -translate-x-8 z-0" />
              )}
              
              <div className="relative z-10 bg-card rounded-2xl p-8 border border-border h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0132A6] to-[#2D73DD] flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-[#F12A95]/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
