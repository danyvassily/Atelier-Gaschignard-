import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { content } from '@/lib/content'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const LeChef = () => {
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
      const items = contentRef.current.querySelectorAll('.content-item')
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

  // TODO: Intégrer le texte exact du PPTX dans content.ts
  // const leChefContent = content.fr.leChef

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-heading text-5xl md:text-7xl mb-6 uppercase tracking-wider">
            LE CHEF
          </h1>
        </div>
      </section>

      {/* Section Contenu : Photo à gauche, Texte à droite */}
      <section ref={contentRef} className="py-20 md:py-32 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Photo portrait à gauche */}
            <div className="content-item relative aspect-[3/4]">
              <img
                src="/images/food/Making off.jpg"
                alt="Cyprien Gaschignard"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Texte éditorial à droite */}
            <div className="content-item space-y-6">
              <div className="prose prose-invert max-w-none">
                {/* 
                  INSTRUCTIONS D'INTÉGRATION :
                  1. Copier le texte exact du PPTX (section LE CHEF)
                  2. Respecter la ponctuation, accents, tirets cadratins (—) si présents
                  3. Respecter les paragraphes (un <p> par paragraphe)
                  4. Appliquer la classe "text-body" pour Manrope
                  5. Couleur du texte = couleur du logo (--color-brand-primary)
                */}
                <p className="text-body text-lg leading-relaxed" style={{ color: 'var(--color-brand-primary)' }}>
                  {/* Texte exact FR du PPTX - Section LE CHEF - Paragraphe 1 */}
                  Texte à intégrer depuis le PPTX - Section LE CHEF
                </p>
                <p className="text-body text-lg leading-relaxed" style={{ color: 'var(--color-brand-primary)' }}>
                  {/* Texte exact FR du PPTX - Section LE CHEF - Paragraphe 2 */}
                  Continuer avec le texte du PPTX...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LeChef
