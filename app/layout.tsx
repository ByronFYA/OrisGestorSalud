import React from "react"
import type { Metadata, Viewport } from 'next'
import { Josefin_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const josefinSans = Josefin_Sans({ 
  subsets: ["latin"],
  variable: '--font-josefin',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Oris Ut | Gestor de Red de Salud',
  description: 'Gestor de Red de Salud especializado en servicios de oncología, artritis reumatoide y atención médica de alta complejidad en Colombia. Garantizamos la prestación integral de servicios de salud.',
  keywords: ['salud', 'oncología', 'artritis reumatoide', 'Colombia', 'servicios médicos', 'atención especializada', 'gestor de salud'],
  authors: [{ name: 'Oris Ut' }],
  creator: 'Oris Ut',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://orisut.com',
    siteName: 'Oris Ut - Gestor de Red de Salud',
    title: 'Oris Ut | Gestor de Red de Salud',
    description: 'Servicios especializados en oncología, artritis reumatoide y atención médica de alta complejidad en Colombia.',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0132A6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${josefinSans.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
