"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Años de Experiencia",
    description: "En gestión de servicios de salud especializados",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Pacientes Atendidos",
    description: "Con tratamientos integrales y seguimiento",
  },
  {
    value: 50,
    suffix: "+",
    label: "Profesionales",
    description: "Especialistas comprometidos con su salud",
  },
  {
    value: 100,
    suffix: "%",
    label: "Compromiso",
    description: "Con la atención integral de nuestros pacientes",
  },
]

function useCountUp(end: number, duration: number = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!startCounting) return
    
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration, startCounting])
  
  return count
}

function StatCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(stat.value, 2000, isVisible)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="text-center p-8"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
      <p className="text-white/70 text-sm">{stat.description}</p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0132A6] to-[#2D73DD]" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
