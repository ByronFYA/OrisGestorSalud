import Image from "next/image"
import { Target, Eye, Heart } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Intro */}
        <div className="max-w-5xl mx-auto mb-24 lg:mb-28">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-center">
            Quiénes <span className="text-[#0132A6]">Somos</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg lg:text-xl leading-relaxed">
            <p>
              <strong className="text-foreground">Oris Ut</strong> es un Gestor de Red de Salud que se compromete 
              a garantizar la prestación integral bajo la modalidad de pago global prospectivo de los servicios 
              de atención especializada de los pacientes con patología oncológica, artritis reumatoide, 
              servicios de alta y algunos servicios de mediana complejidad.
            </p>
            <p>
              Nuestra labor garantiza la atención integral de estas patologías con cargo del Patrimonio Autónomo 
              Fondo de Atención en Salud de la Población Privada de la Libertad, incluyendo menores de tres años 
              convivientes con sus madres en los Establecimientos de Reclusión del Orden Nacional (ERON).
            </p>
            <p>
              La atención incluye prestación de servicios ambulatorios, hospitalarios y quirúrgicos, así como 
              los medicamentos, insumos y servicios complementarios que se deriven de la atención de esta población.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Mission */}
          <div className="bg-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 border border-border/60 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
            <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-2xl bg-[#0132A6]/10 flex items-center justify-center mb-8">
              <Target className="h-8 w-8 text-[#0132A6]" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-5">Misión</h3>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
              Garantizar la prestación integral de servicios de atención especializada en salud, 
              con calidad, oportunidad y humanidad, contribuyendo al bienestar y calidad de vida 
              de nuestros pacientes a través de un modelo de gestión eficiente y comprometido.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 border border-border/60 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
            <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-2xl bg-[#2D73DD]/10 flex items-center justify-center mb-8">
              <Eye className="h-8 w-8 text-[#2D73DD]" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-5">Visión</h3>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
              Ser reconocidos como el gestor de red de salud líder en Colombia, destacándonos 
              por la excelencia en la atención de patologías de alta complejidad, la innovación 
              en nuestros procesos y el compromiso inquebrantable con el bienestar de nuestros pacientes.
            </p>
          </div>

          {/* Purpose */}
          <div className="bg-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 border border-border/60 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
            <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-2xl bg-[#F12A95]/10 flex items-center justify-center mb-8">
              <Heart className="h-8 w-8 text-[#F12A95]" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-5">Propósito</h3>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
              Transformar vidas a través de una atención en salud integral y humanizada, 
              garantizando que cada paciente reciba el tratamiento que necesita con dignidad, 
              respeto y la más alta calidad médica disponible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
