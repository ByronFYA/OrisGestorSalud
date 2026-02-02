"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"

const subjects = [
  { value: "informacion", label: "Información General" },
  { value: "oncologia", label: "Servicios de Oncología" },
  { value: "artritis", label: "Servicios de Artritis Reumatoide" },
  { value: "alta-complejidad", label: "Servicios de Alta Complejidad" },
  { value: "citas", label: "Agendar Cita" },
  { value: "quejas", label: "Quejas y Sugerencias" },
  { value: "otro", label: "Otro" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl lg:rounded-3xl border border-border/60 p-8 md:p-12 lg:p-14 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-5">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
          Gracias por contactarnos. Hemos recibido su mensaje y nos pondremos 
          en contacto con usted lo antes posible.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          size="lg"
          className="rounded-xl"
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-2xl lg:rounded-3xl border border-border/60 p-8 md:p-12 lg:p-14 shadow-sm">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Envíenos un Mensaje
        </h2>
        <p className="text-muted-foreground text-lg">
          Complete el formulario y nos pondremos en contacto con usted a la brevedad.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-3">
            <Label htmlFor="nombre" className="text-base font-medium">Nombre Completo *</Label>
            <Input
              id="nombre"
              name="nombre"
              placeholder="Ej: Juan Pérez"
              required
              className="h-14 rounded-xl text-base"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-base font-medium">Correo Electrónico *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Ej: juan@ejemplo.com"
              required
              className="h-14 rounded-xl text-base"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-3">
            <Label htmlFor="telefono" className="text-base font-medium">Teléfono</Label>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="Ej: +57 300 123 4567"
              className="h-14 rounded-xl text-base"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="asunto" className="text-base font-medium">Asunto *</Label>
            <Select name="asunto" required>
              <SelectTrigger className="h-14 rounded-xl text-base">
                <SelectValue placeholder="Seleccione un asunto" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject.value} value={subject.value}>
                    {subject.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje">Mensaje *</Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escriba su mensaje aquí..."
            required
            rows={6}
            className="resize-none"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacidad"
            name="privacidad"
            required
            className="mt-1"
          />
          <Label htmlFor="privacidad" className="text-sm text-muted-foreground font-normal cursor-pointer">
            Acepto la{" "}
            <a href="/politica-privacidad" className="text-[#0132A6] hover:underline">
              política de privacidad
            </a>{" "}
            y autorizo el tratamiento de mis datos personales.
          </Label>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#0132A6] hover:bg-[#012485] text-white h-14"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    fill="none"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </span>
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Enviar Mensaje
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
