"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top bar */}
      <div className="hidden md:block bg-[#0132A6] text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 py-2.5">
          <div className="flex items-center justify-end gap-8 text-sm">
            <a href="tel:+573001234567" className="flex items-center gap-2 hover:text-[#F12A95] transition-colors">
              <Phone className="h-4 w-4" />
              <span>+57 300 123 4567</span>
            </a>
            <a href="mailto:contacto@orisut.com" className="flex items-center gap-2 hover:text-[#F12A95] transition-colors">
              <Mail className="h-4 w-4" />
              <span>contacto@orisut.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/coooperativa-20diapositivas-20-281-29.png"
              alt="Oris Ut - Gestor de Red de Salud"
              width={160}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-[#0132A6] font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F12A95] transition-all group-hover:w-full" />
              </Link>
            ))}
            <Button 
              asChild
              className="bg-[#F12A95] hover:bg-[#d91f7f] text-white"
            >
              <Link href="/contacto">Contáctenos</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-[#0132A6] font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a href="tel:+573001234567" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+57 300 123 4567</span>
              </a>
              <a href="mailto:contacto@orisut.com" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contacto@orisut.com</span>
              </a>
            </div>
            <Button 
              asChild
              className="bg-[#F12A95] hover:bg-[#d91f7f] text-white w-full mt-2"
            >
              <Link href="/contacto">Contáctenos</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
