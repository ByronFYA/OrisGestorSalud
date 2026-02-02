import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Award, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Compromiso",
    description: "Nos comprometemos a garantizar la prestación integral de servicios de salud de alta calidad.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Actuamos con claridad y honestidad en todos nuestros procesos y relaciones.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Buscamos constantemente la mejora continua en la atención médica especializada.",
  },
  {
    icon: Users,
    title: "Humanidad",
    description: "Ponemos al paciente en el centro de nuestra atención con calidez y empatía.",
  },
]

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div>
              <span className="inline-block text-[#F12A95] font-semibold text-sm tracking-widest uppercase mb-5">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 text-balance leading-tight">
                Gestores de Salud con{" "}
                <span className="text-[#0132A6]">Propósito</span>
              </h2>
            </div>
            
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                <strong className="text-foreground font-semibold">Oris Ut</strong> se compromete a garantizar la prestación integral 
                bajo la modalidad de pago global prospectivo de los servicios de atención especializada 
                de los pacientes con patología oncológica, artritis reumatoide, y servicios de alta 
                y mediana complejidad.
              </p>
              <p>
                Nuestra atención incluye servicios ambulatorios, hospitalarios y quirúrgicos, 
                así como medicamentos, insumos y servicios complementarios que se deriven 
                de la atención integral de nuestros pacientes.
              </p>
              <p>
                Trabajamos con el Patrimonio Autónomo Fondo de Atención en Salud para brindar 
                cobertura especializada a poblaciones que requieren atención médica de calidad.
              </p>
            </div>

            <Button 
              asChild
              size="lg"
              className="bg-[#0132A6] hover:bg-[#012485] text-white px-10 py-6 text-base font-semibold rounded-xl shadow-lg shadow-black/10"
            >
              <Link href="/nosotros">
                Conocer Más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-5 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-border/60 shadow-sm hover:shadow-lg hover:shadow-black/5 transition-all duration-300 ${
                  index % 2 === 1 ? "translate-y-8" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-[#0132A6]/10 flex items-center justify-center mb-5">
                  <value.icon className="h-7 w-7 text-[#0132A6]" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
