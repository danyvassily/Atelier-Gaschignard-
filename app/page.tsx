'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current && titleRef.current && subtitleRef.current && ctaRef.current) {
      const tl = gsap.timeline()
      
      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
    }
  }, [])

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Atelier Gaschignard"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 
            ref={titleRef}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 md:mb-8"
          >
            Atelier Gaschignard
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto font-light"
          >
            Cuisine d'exception et savoir-faire artisanal
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-primary-900 uppercase tracking-wider text-sm font-medium hover:bg-primary-100 transition-smooth"
            >
              Découvrir nos services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white uppercase tracking-wider text-sm font-medium hover:bg-white hover:text-primary-900 transition-smooth"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-primary-900">
                L'art de la gastronomie
              </h2>
              <p className="text-primary-700 leading-relaxed text-lg">
                {/* Le contenu sera ajouté après lecture des documents PDF/PPTX */}
                Découvrez l'excellence culinaire à travers nos créations uniques, 
                où chaque plat raconte une histoire et chaque saveur révèle notre passion.
              </p>
              <p className="text-primary-700 leading-relaxed text-lg">
                Notre atelier allie tradition et innovation pour vous offrir 
                une expérience gastronomique inoubliable.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/food/Amuse bouche.jpeg"
                alt="Création culinaire"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-20 md:py-32 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-900 mb-4">
              Nos créations
            </h2>
            <p className="text-primary-700 text-lg max-w-2xl mx-auto">
              Un aperçu de notre savoir-faire
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              '/images/food/Oeuf parfait 1.jpg',
              '/images/food/Ballotine de poulet 3.jpg',
              '/images/food/Tiramisu 1.jpeg',
              '/images/food/Steak de chou fleur 2.jpg',
              '/images/food/Tatin 1.jpeg',
              '/images/food/Flan Vanille 1.jpg',
            ].map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Création ${index + 1}`}
                  fill
                  className="object-cover transition-smooth group-hover:scale-110"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/galerie"
              className="inline-block px-8 py-4 bg-primary-900 text-white uppercase tracking-wider text-sm font-medium hover:bg-primary-800 transition-smooth"
            >
              Voir toute la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Prêt à vivre une expérience unique ?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-200 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-900 uppercase tracking-wider text-sm font-medium hover:bg-primary-100 transition-smooth"
          >
            Prendre contact
          </Link>
        </div>
      </section>
    </div>
  )
}

