'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const gallerySectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const servicesHeroRef = useRef<HTMLDivElement>(null)
  const galerieHeroRef = useRef<HTMLDivElement>(null)
  const contactHeroRef = useRef<HTMLDivElement>(null)

  // Fonction pour scroller vers une section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (heroRef.current && titleRef.current && subtitleRef.current && ctaRef.current) {
      // Définir l'état initial explicitement avec couleur blanche préservée
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 30,
        color: '#ffffff',
        force3D: true
      })
      
      const tl = gsap.timeline()
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        color: '#ffffff',
        duration: 1,
        ease: 'power3.out',
        force3D: true
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        color: '#ffffff',
        duration: 0.8,
        ease: 'power3.out',
        force3D: true
      }, '-=0.5')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        force3D: true
      }, '-=0.4')
      
      // S'assurer que l'opacité finale reste à 1
      tl.call(() => {
        gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
          opacity: 1,
          color: '#ffffff'
        })
      })
    }

    // Animations pour la section services
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

    // Animations pour la galerie
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.gallery-item')
      items.forEach((item, index) => {
        // Animation d'entrée
        gsap.fromTo(item,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            delay: index * 0.1
          }
        )
      })
    }

    // Animation de déstructuration avec parallaxe lors de la sortie de la section galerie
    if (gallerySectionRef.current && galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.gallery-item')
      
      // Créer un effet parallaxe avec différentes vitesses pour chaque élément
      items.forEach((item, index) => {
        // Attribuer une vitesse différente à chaque élément pour créer l'effet parallaxe
        // Les vitesses varient entre 0.2 et 0.8 pour un effet plus prononcé
        const speed = 0.2 + (index % 5) * 0.15
        const rotation = (index % 2 === 0 ? 1 : -1) * (10 + (index % 4) * 8)
        const xOffset = (index % 3 === 0 ? 1 : index % 3 === 1 ? -1 : 0) * (80 + (index % 5) * 40)
        
        // Animation de déstructuration avec parallaxe
        gsap.to(item, {
          y: (1 - speed) * 400, // Effet parallaxe vertical plus prononcé
          x: xOffset,
          rotation: rotation,
          opacity: 0,
          scale: 0.7,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: gallerySectionRef.current,
            start: 'bottom top', // Démarre quand le bas de la section atteint le haut de la fenêtre
            end: 'bottom top-=300', // Zone d'animation plus large
            scrub: 0.5, // Animation plus fluide liée au scroll
            invalidateOnRefresh: true
          }
        })
      })
    }

    // Animations pour le formulaire de contact
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      )
    }

    // Animations pour les sections hero
    if (servicesHeroRef.current) {
      gsap.fromTo(servicesHeroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }

    if (galerieHeroRef.current) {
      gsap.fromTo(galerieHeroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }

    if (contactHeroRef.current) {
      gsap.fromTo(contactHeroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }

    // Nettoyage des ScrollTriggers au démontage
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Merci pour votre message. Nous vous répondrons dans les plus brefs délais.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

  const galleryImages = [
    '/images/food/Oeuf parfait 1.jpg',
    '/images/food/Oeuf parfait 2.jpg',
    '/images/food/Ballotine de poulet 3.jpg',
    '/images/food/Amuse bouche.jpeg',
    '/images/food/Amuse bouche à l_oignon et pomme granny.jpg',
    '/images/food/Tiramisu 1.jpeg',
    '/images/food/Tiramisu 3.jpg',
    '/images/food/Steak de chou fleur 2.jpg',
    '/images/food/Tatin 1.jpeg',
    '/images/food/Tatin 2.jpeg',
    '/images/food/Tatin poire miso 1.jpeg',
    '/images/food/Flan Vanille 1.jpg',
    '/images/food/Flan Vanille 2.jpg',
    '/images/food/Ravioli au gorgonzola et PDT 1.jpeg',
    '/images/food/Poivrons.JPG',
    '/images/food/Poireaux gribiche 2.jpg',
    '/images/food/Aubergines brulées sauce grec 2.jpg',
    '/images/food/Maquereaux 2.jpeg',
    '/images/food/Agneau en ballotine.jpeg',
    '/images/food/Agneau précuit.jpeg',
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section - Accueil */}
      <section 
        id="accueil"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white hero-text-white">
          <h1 
            ref={titleRef}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 md:mb-8 drop-shadow-2xl text-shadow-hero-title opacity-0 hero-text-white"
          >
            Atelier Gaschignard
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto font-light drop-shadow-lg text-shadow-hero-subtitle opacity-0 hero-text-white"
          >
            Cuisine d&apos;exception et savoir-faire artisanal
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-white text-primary-900 uppercase tracking-wider text-sm font-medium hover:bg-primary-100 transition-smooth"
            >
              Découvrir nos services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white text-white uppercase tracking-wider text-sm font-medium hover:bg-white hover:text-primary-900 transition-smooth"
            >
              Nous contacter
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('a-propos')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
          aria-label="Défiler vers le bas"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-20 md:pt-32 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-white">
                L&apos;art de la gastronomie
              </h2>
              <p className="text-white/80 leading-relaxed text-lg">
                {/* Le contenu sera ajouté après lecture des documents PDF/PPTX */}
                Découvrez l&apos;excellence culinaire à travers nos créations uniques, 
                où chaque plat raconte une histoire et chaque saveur révèle notre passion.
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
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

      {/* Services Hero Section */}
      <section 
        ref={servicesHeroRef}
        className="relative py-12 md:py-16 px-4 bg-black"
      >
        <div className="container-custom">
          <div className="relative w-full h-[50vh] min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/services-hero.jpg"
              alt="Services"
              fill
              priority
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="font-serif text-5xl md:text-7xl mb-6">
                  Nos Services
                </h2>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
                  Une expertise au service de votre projet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-black">
        <div className="container-custom">

          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item group"
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-smooth group-hover:scale-110"
                    quality={90}
                  />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 md:py-32 bg-black mt-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                Notre Processus
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
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
                  <div className="text-6xl md:text-7xl font-serif text-white/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Hero Section */}
      <section 
        ref={galerieHeroRef}
        className="relative py-12 md:py-16 px-4 bg-black"
      >
        <div className="container-custom">
          <div className="relative w-full h-[50vh] min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/page-accueil.jpg"
              alt="Galerie"
              fill
              priority
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="font-serif text-5xl md:text-7xl mb-6">
                  Galerie
                </h2>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
                  Un aperçu de nos créations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" ref={gallerySectionRef} className="py-20 md:py-32 bg-black">
        <div className="container-custom">

          <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="gallery-item relative aspect-square overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Création ${index + 1}`}
                  fill
                  className="object-cover transition-smooth group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-smooth flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Hero Section */}
      <section 
        ref={contactHeroRef}
        className="relative py-12 md:py-16 px-4 bg-black"
      >
        <div className="container-custom">
          <div className="relative w-full h-[50vh] min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/contact-hero.jpg"
              alt="Contact"
              fill
              priority
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="font-serif text-5xl md:text-7xl mb-6">
                  Contact
                </h2>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
                  Parlons de votre projet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-black">
        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
                  Prenons contact
                </h3>
                <p className="text-white/80 leading-relaxed text-lg mb-8">
                  Nous serions ravis d&apos;échanger avec vous sur votre projet culinaire.
                  N&apos;hésitez pas à nous contacter pour toute demande.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">
                    Email
                  </h4>
                  <a 
                    href="mailto:contact@ateliergaschignard.fr" 
                    className="text-white text-lg hover:text-white/80 transition-smooth"
                  >
                    contact@ateliergaschignard.fr
                  </a>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">
                    Téléphone
                  </h4>
                  <p className="text-white text-lg">
                    +33 (0) X XX XX XX XX
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">
                    Adresse
                  </h4>
                  <p className="text-white text-lg">
                    Adresse à compléter
                  </p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">
                    Instagram
                  </h4>
                  <a 
                    href="https://instagram.com/ateliergaschignard" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg hover:text-white/80 transition-smooth"
                  >
                    @ateliergaschignard
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider text-white/80 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-white/20 bg-black/50 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-smooth"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider text-white/80 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-white/20 bg-black/50 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-smooth"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-wider text-white/80 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/20 bg-black/50 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-smooth"
                    placeholder="+33 (0) X XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-white/20 bg-black/50 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-smooth resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-white text-black uppercase tracking-wider text-sm font-medium hover:bg-white/90 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {/* Note: Utilisation de <img> au lieu de <Image> pour le modal car cela offre 
          un meilleur contrôle du dimensionnement dans un contexte flex et évite 
          les problèmes de dimensionnement avec fill */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Vue agrandie"
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              loading="eager"
              onError={(e) => {
                console.error('Erreur de chargement de l\'image:', selectedImage)
                e.currentTarget.style.display = 'none'
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 text-white hover:text-primary-200 transition-smooth z-10 bg-black/50 rounded-full p-2"
              aria-label="Fermer"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
