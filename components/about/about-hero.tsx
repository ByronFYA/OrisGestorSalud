import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0132A6] via-[#0132A6] to-[#2D73DD]" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-white/70 text-sm mb-10">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white font-medium">Nosotros</span>
        </nav>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 text-balance leading-[1.1]">
            Conozca{" "}
            <span className="text-[#F12A95]">Oris Ut</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-3xl">
            Somos un Gestor de Red de Salud comprometido con garantizar la prestación 
            integral de servicios de atención especializada, brindando calidad y 
            humanidad en cada momento.
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
