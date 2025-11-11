import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
// import { content } from '@/lib/content'

const Contact = () => {
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
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      )
    }
  }, [])

  // TODO: Intégrer le texte exact du PPTX dans content.ts
  // const contactContent = content.fr.contact

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section avec photo "CONTACT" */}
      <section 
        ref={heroRef}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-heading text-5xl md:text-7xl mb-6 uppercase tracking-wider">
            CONTACT
          </h1>
        </div>
      </section>

      {/* Section Contact */}
      <section ref={contentRef} className="py-20 md:py-32 bg-black">
        <div className="container-custom max-w-3xl">
          <div className="space-y-8 text-center">
            {/* Message d'intention */}
            <div className="prose prose-invert max-w-none">
              {/* 
                INSTRUCTIONS D'INTÉGRATION :
                1. Copier le message d'intention exact du PPTX
                2. Respecter la ponctuation, accents, tirets cadratins (—) si présents
                3. Respecter les paragraphes (un <p> par paragraphe)
                4. Appliquer la classe "text-body" pour Manrope
                5. Couleur du texte = couleur du logo (--color-brand-primary)
              */}
              <p className="text-body text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'var(--color-brand-primary)' }}>
                {/* Texte exact FR : message d'intention */}
                Texte à intégrer depuis le PPTX - Message d'intention
              </p>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <a
                href="mailto:ateliergaschignard@gmail.com"
                className="text-xl md:text-2xl hover:opacity-80 transition-smooth inline-block"
                style={{ color: 'var(--color-brand-primary)' }}
              >
                ateliergaschignard@gmail.com
              </a>
            </div>

            {/* Lien Instagram */}
            <div className="pt-8">
              <a
                href="https://instagram.com/ateliergaschignard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-80 transition-smooth inline-flex items-center space-x-2"
                style={{ color: 'var(--color-brand-primary)' }}
              >
                <span>@ateliergaschignard</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
