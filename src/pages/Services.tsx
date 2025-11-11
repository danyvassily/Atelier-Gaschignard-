import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { content } from '@/lib/content'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Services = () => {
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
      const items = contentRef.current.querySelectorAll('.service-block')
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

  // TODO: Intégrer les textes exacts du PPTX dans content.ts
  // const servicesContent = content.fr.services

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section avec photo "SERVICES" */}
      <section 
        ref={heroRef}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services.jpeg"
            alt="Services"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-heading text-5xl md:text-7xl mb-6 uppercase tracking-wider">
            SERVICES
          </h1>
        </div>
      </section>

      {/* Deux blocs de contenu */}
      <section ref={contentRef} className="py-20 md:py-32 bg-black">
        <div className="container-custom space-y-24">
          {/* Bloc 1 : Cours et animation d'ateliers de cuisine */}
          <div className="service-block">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-8 uppercase tracking-wider">
              Cours et animation d'ateliers de cuisine
            </h2>
            <div className="prose prose-invert max-w-3xl">
              {/* 
                INSTRUCTIONS D'INTÉGRATION :
                1. Copier le texte exact du PPTX (section "Cours et animation d'ateliers de cuisine")
                2. Respecter la ponctuation, accents, tirets cadratins (—) si présents
                3. Respecter les paragraphes (un <p> par paragraphe)
                4. Appliquer la classe "text-body" pour Manrope
                5. Couleur du texte = couleur du logo (--color-brand-primary)
              */}
              <p className="text-body text-lg leading-relaxed" style={{ color: 'var(--color-brand-primary)' }}>
                {/* Texte exact du PPTX - "Cours et animation d'ateliers de cuisine" */}
                Texte à intégrer depuis le PPTX - Section "Cours et animation d'ateliers de cuisine"
              </p>
            </div>
          </div>

          {/* Bloc 2 : Prestation privée */}
          <div className="service-block">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-8 uppercase tracking-wider">
              Prestation privée
            </h2>
            <div className="prose prose-invert max-w-3xl">
              {/* 
                INSTRUCTIONS D'INTÉGRATION :
                1. Copier le texte exact du PPTX (section "Prestation privée")
                2. Respecter la ponctuation, accents, tirets cadratins (—) si présents
                3. Respecter les paragraphes (un <p> par paragraphe)
                4. Appliquer la classe "text-body" pour Manrope
                5. Couleur du texte = couleur du logo (--color-brand-primary)
              */}
              <p className="text-body text-lg leading-relaxed" style={{ color: 'var(--color-brand-primary)' }}>
                {/* Texte exact du PPTX - "Prestation privée" */}
                Texte à intégrer depuis le PPTX - Section "Prestation privée"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
