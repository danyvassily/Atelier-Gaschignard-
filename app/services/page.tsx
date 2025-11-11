'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }

    if (contentRef.current) {
      const items = contentRef.current.querySelectorAll('.service-item')
      items.forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      })
    }
  }, [])

  const services = [
    {
      title: 'Cuisine sur mesure',
      description: 'Création de menus personnalisés selon vos préférences et événements',
      image: '/images/food/Making off.jpg',
    },
    {
      title: 'Événements privés',
      description: 'Service traiteur pour vos réceptions et célébrations',
      image: '/images/food/Amuse bouche à l_oignon et pomme granny.jpg',
    },
    {
      title: 'Ateliers culinaires',
      description: 'Apprenez les techniques de la haute gastronomie',
      image: '/images/food/Ravioli au gorgonzola et PDT 1.jpeg',
    },
    {
      title: 'Consultation',
      description: 'Conseil et accompagnement pour vos projets culinaires',
      image: '/images/food/Poivrons.JPG',
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Services"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Une expertise au service de votre projet
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={contentRef} className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item group"
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-smooth group-hover:scale-110"
                    quality={90}
                  />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-primary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-primary-700 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-primary-700 text-lg max-w-2xl mx-auto">
              {/* Le contenu sera complété après lecture des documents */}
              De la conception à la réalisation, nous vous accompagnons à chaque étape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { step: '01', title: 'Consultation', desc: 'Échange sur vos besoins et vos attentes' },
              { step: '02', title: 'Conception', desc: 'Création d\'un menu sur mesure' },
              { step: '03', title: 'Réalisation', desc: 'Exécution avec excellence et précision' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl md:text-7xl font-serif text-primary-200 mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-primary-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

