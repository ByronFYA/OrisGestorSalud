"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote: "La atención que recibí durante mi tratamiento oncológico fue excepcional. El equipo médico siempre estuvo pendiente de mi bienestar y evolución.",
    author: "María García",
    role: "Paciente de Oncología",
    avatar: "MG",
  },
  {
    id: 2,
    quote: "Gracias al seguimiento constante y el tratamiento especializado, mi calidad de vida ha mejorado significativamente. Estoy muy agradecido con todo el equipo.",
    author: "Carlos Rodríguez",
    role: "Paciente de Reumatología",
    avatar: "CR",
  },
  {
    id: 3,
    quote: "La coordinación entre los diferentes especialistas y la disponibilidad de medicamentos ha hecho que mi tratamiento sea mucho más llevadero.",
    author: "Ana Martínez",
    role: "Paciente de Oncología",
    avatar: "AM",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-[#F12A95] font-semibold text-sm tracking-widest uppercase mb-5">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance leading-tight">
              Lo Que Dicen Nuestros{" "}
              <span className="text-[#0132A6]">Pacientes</span>
            </h2>
          </div>

          {/* Testimonial card */}
          <div className="relative bg-muted/40 rounded-[2rem] p-8 md:p-12 lg:p-16">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16">
              <Quote className="h-16 w-16 lg:h-20 lg:w-20 text-[#F12A95]/15" />
            </div>

            <div className="relative z-10 pt-10 lg:pt-12">
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-10 text-center">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="w-18 h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-[#0132A6] to-[#2D73DD] flex items-center justify-center text-white font-bold text-xl lg:text-2xl mb-5 shadow-lg shadow-[#0132A6]/30">
                  {testimonials[currentIndex].avatar}
                </div>
                <p className="font-bold text-foreground text-lg lg:text-xl">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground text-base lg:text-lg">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border hover:border-[#0132A6] hover:text-[#0132A6] bg-transparent"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#F12A95]" : "bg-border"
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border hover:border-[#0132A6] hover:text-[#0132A6] bg-transparent"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
