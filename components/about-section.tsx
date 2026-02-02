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
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-[#F12A95] font-medium text-sm tracking-wider uppercase mb-4">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Gestores de Salud con{" "}
                <span className="text-[#0132A6]">Propósito</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Oris Ut</strong> se compromete a garantizar la prestación integral 
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
              className="bg-[#0132A6] hover:bg-[#012485] text-white"
            >
              <Link href="/nosotros">
                Conocer Más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow ${
                  index % 2 === 1 ? "translate-y-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0132A6]/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-[#0132A6]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
