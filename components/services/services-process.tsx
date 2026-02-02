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
    <section className="py-24 md:py-32 lg:py-40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-[#F12A95] font-semibold text-sm tracking-widest uppercase mb-5">
            Proceso de Atención
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 lg:mb-8 text-balance leading-tight">
            ¿Cómo{" "}
            <span className="text-[#0132A6]">Trabajamos</span>?
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Nuestro proceso de atención está diseñado para brindarle una experiencia 
            integral y de calidad desde el primer contacto.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-[#0132A6] to-[#2D73DD] -translate-x-10 z-0" />
              )}
              
              <div className="relative z-10 bg-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 border border-border/60 h-full hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0132A6] to-[#2D73DD] flex items-center justify-center shadow-lg shadow-[#0132A6]/20">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-[#F12A95]/15">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
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
