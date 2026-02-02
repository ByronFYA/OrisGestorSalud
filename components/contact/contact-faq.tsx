"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué servicios ofrece Oris Ut?",
    answer: "Oris Ut ofrece servicios especializados en oncología, tratamiento de artritis reumatoide, y servicios de alta y mediana complejidad. Esto incluye consultas especializadas, diagnóstico, tratamiento, suministro de medicamentos y seguimiento continuo.",
  },
  {
    question: "¿Cómo puedo acceder a los servicios de Oris Ut?",
    answer: "Para acceder a nuestros servicios, puede comunicarse con nosotros a través del formulario de contacto, llamando a nuestro número telefónico o enviando un correo electrónico. Nuestro equipo le brindará toda la información necesaria sobre el proceso de atención.",
  },
  {
    question: "¿Qué documentos necesito para iniciar mi atención?",
    answer: "Los documentos necesarios incluyen documento de identidad, orden médica o remisión (si aplica), y cualquier historia clínica o exámenes previos relacionados con su condición. Nuestro equipo le informará sobre documentación adicional según su caso.",
  },
  {
    question: "¿Cuáles son los tiempos de espera para una cita?",
    answer: "Los tiempos de espera varían según el tipo de servicio y la urgencia del caso. Trabajamos para garantizar una atención oportuna y priorizamos los casos según criterios médicos. Contáctenos para obtener información específica sobre su caso.",
  },
  {
    question: "¿Oris Ut cubre los medicamentos del tratamiento?",
    answer: "Sí, nuestros servicios incluyen el suministro y administración de medicamentos especializados, incluyendo medicamentos oncológicos y terapias para artritis reumatoide, según lo establecido en el plan de atención de cada paciente.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Nuestra sede principal está ubicada en Bogotá D.C., Colombia. Además, contamos con una red de instituciones prestadoras de servicios de salud aliadas en diferentes regiones del país para garantizar cobertura nacional.",
  },
]

export function ContactFAQ() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-14 lg:mb-16">
          <span className="inline-block text-[#F12A95] font-semibold text-sm tracking-widest uppercase mb-5">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance leading-tight">
            ¿Tiene <span className="text-[#0132A6]">Dudas</span>?
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            Encuentre respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 lg:space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/60 px-6 lg:px-8 data-[state=open]:shadow-lg data-[state=open]:shadow-black/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-[#0132A6] py-6 lg:py-7 hover:no-underline text-base lg:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 lg:pb-8 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
