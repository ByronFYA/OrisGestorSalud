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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-[#F12A95] rounded-full animate-pulse" />
              <span>Gestor de Red de Salud en Colombia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Atención Integral en{" "}
              <span className="text-[#F12A95]">Salud Especializada</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Garantizamos la prestación integral de servicios de atención especializada 
              para pacientes con patologías oncológicas, artritis reumatoide y servicios 
              de alta complejidad.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-[#F12A95] hover:bg-[#d91f7f] text-white px-8"
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
                className="border-white text-white hover:bg-white hover:text-[#0132A6] bg-transparent px-8"
              >
                <Link href="/contacto">Contáctenos</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#F12A95]">10+</p>
                <p className="text-sm text-white/70">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#F12A95]">5K+</p>
                <p className="text-sm text-white/70">Pacientes Atendidos</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#F12A95]">100%</p>
                <p className="text-sm text-white/70">Compromiso</p>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 bg-[#F12A95] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Atención Oncológica</h3>
                <p className="text-white/70 text-sm">
                  Diagnóstico integral, tratamientos especializados y seguimiento continuo.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors translate-y-8">
                <div className="w-14 h-14 bg-[#2D73DD] rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Artritis Reumatoide</h3>
                <p className="text-white/70 text-sm">
                  Tratamiento farmacológico integral y monitoreo especializado.
                </p>
              </div>
            </div>
            <div className="space-y-6 translate-y-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Alta Complejidad</h3>
                <p className="text-white/70 text-sm">
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
