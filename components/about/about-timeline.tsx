const timeline = [
  {
    year: "2015",
    title: "Fundación",
    description: "Oris Ut inicia operaciones como gestor de red de salud, con el compromiso de brindar atención especializada de calidad.",
  },
  {
    year: "2017",
    title: "Expansión de Servicios",
    description: "Ampliamos nuestra oferta de servicios para incluir atención oncológica integral y tratamientos de artritis reumatoide.",
  },
  {
    year: "2019",
    title: "Alianzas Estratégicas",
    description: "Establecemos alianzas con instituciones de salud de alta complejidad para garantizar cobertura nacional.",
  },
  {
    year: "2021",
    title: "Certificación de Calidad",
    description: "Obtenemos certificaciones que avalan nuestros procesos y compromiso con la excelencia en atención médica.",
  },
  {
    year: "2023",
    title: "Innovación Tecnológica",
    description: "Implementamos sistemas de gestión avanzados para mejorar la coordinación y seguimiento de pacientes.",
  },
  {
    year: "2025",
    title: "Consolidación",
    description: "Nos consolidamos como uno de los gestores de red de salud más confiables en Colombia, con miles de pacientes atendidos.",
  },
]

export function AboutTimeline() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#F12A95] font-medium text-sm tracking-wider uppercase mb-4">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Un Camino de{" "}
            <span className="text-[#0132A6]">Compromiso</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Desde nuestros inicios, hemos trabajado incansablemente para convertirnos 
            en un referente en la gestión de servicios de salud especializados.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0132A6] via-[#2D73DD] to-[#F12A95] md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                    <span className="text-[#F12A95] font-bold text-lg">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Circle indicator */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-[#0132A6] rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
