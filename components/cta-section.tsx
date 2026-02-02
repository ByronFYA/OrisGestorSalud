import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F12A95] to-[#0132A6]" />
          
          {/* Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 px-8 py-16 md:px-16 lg:px-20 md:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-balance leading-tight">
                ¿Necesita Atención Médica Especializada?
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                Estamos comprometidos con brindarle la mejor atención en salud. 
                Contáctenos hoy y permítanos ser parte de su bienestar.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#0132A6] hover:bg-white/90 px-10 py-6 text-base font-semibold rounded-xl shadow-lg shadow-black/20"
                >
                  <Link href="/contacto">
                    Contáctenos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 bg-transparent px-10 py-6 text-base font-semibold rounded-xl"
                >
                  <a href="tel:+573001234567">
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar Ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
