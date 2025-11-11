import type { Metadata } from 'next'
import { Inter, Playfair_Display, Raleway, Manrope } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Atelier Gaschignard',
  description: 'Atelier Gaschignard - Cuisine d\'exception',
  keywords: 'cuisine, gastronomie, atelier, Gaschignard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${raleway.variable} ${manrope.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen bg-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

