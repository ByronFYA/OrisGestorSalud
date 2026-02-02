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
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-[#F12A95] font-medium text-sm tracking-wider uppercase mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Tiene <span className="text-[#0132A6]">Dudas</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Encuentre respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[#0132A6] py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
