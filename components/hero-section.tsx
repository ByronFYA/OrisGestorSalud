"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Heart, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0132A6] via-[#0132A6] to-[#2D73DD]" />
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#F12A95]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2D73DD]/30 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Content */}
          <div className="text-white space-y-10">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 text-sm font-medium">
              <span className="w-2 h-2 bg-[#F12A95] rounded-full animate-pulse" />
              <span>Gestor de Red de Salud en Colombia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-balance">
              Atención Integral en{" "}
              <span className="text-[#F12A95]">Salud Especializada</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-2xl">
              Garantizamos la prestación integral de servicios de atención especializada 
              para pacientes con patologías oncológicas, artritis reumatoide y servicios 
              de alta complejidad.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-2">
              <Button 
                asChild
                size="lg"
                className="bg-[#F12A95] hover:bg-[#d91f7f] text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-black/20"
              >
                <Link href="/servicios">
                  Nuestros Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0132A6] bg-transparent px-8 py-6 text-base font-semibold rounded-xl"
              >
                <Link href="/contacto">Contáctenos</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 lg:gap-12 pt-10 mt-4 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F12A95]">10+</p>
                <p className="text-sm lg:text-base text-white/70 mt-1">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F12A95]">5K+</p>
                <p className="text-sm lg:text-base text-white/70 mt-1">Pacientes Atendidos</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F12A95]">100%</p>
                <p className="text-sm lg:text-base text-white/70 mt-1">Compromiso</p>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6 xl:gap-8">
            <div className="space-y-6 xl:space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-[#F12A95] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Atención Oncológica</h3>
                <p className="text-white/75 leading-relaxed">
                  Diagnóstico integral, tratamientos especializados y seguimiento continuo.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] translate-y-8">
                <div className="w-16 h-16 bg-[#2D73DD] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Artritis Reumatoide</h3>
                <p className="text-white/75 leading-relaxed">
                  Tratamiento farmacológico integral y monitoreo especializado.
                </p>
              </div>
            </div>
            <div className="space-y-6 xl:space-y-8 translate-y-16">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Alta Complejidad</h3>
                <p className="text-white/75 leading-relaxed">
                  Servicios ambulatorios, hospitalarios y quirúrgicos especializados.
                </p>
              </div>
            </div>
          </div>
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
