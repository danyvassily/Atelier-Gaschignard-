'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const gallerySectionRef = useRef<HTMLElement>(null)
  const servicesHeroRef = useRef<HTMLDivElement>(null)
  const galerieHeroRef = useRef<HTMLDivElement>(null)
  const contactHeroRef = useRef<HTMLDivElement>(null)
  const chefHeroRef = useRef<HTMLDivElement>(null)
  const chefSectionRef = useRef<HTMLElement>(null)

  // Fonction pour scroller vers une section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Hauteur de la navbar

      // Utilisation de gsap pour le scroll smooth
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: element,
          offsetY: offset
        },
        ease: 'power3.inOut'
      })
    }
  }

  useGSAP(() => {
    // Configuration initiale
    if (titleRef.current && subtitleRef.current && ctaRef.current) {
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 30,
        color: '#ffffff',
        force3D: true // Optimisation GPU
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
    }

    // Optimisation des animations de liste avec ScrollTrigger.batch
    // Services
    ScrollTrigger.batch('.service-item', {
      onEnter: batch => gsap.fromTo(batch,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          overwrite: true
        }
      ),
      start: 'top 85%',
      once: true // Animation jouée une seule fois pour la performance
    })

    // Galerie - Animation optimisée
    ScrollTrigger.batch('.gallery-item', {
      onEnter: batch => gsap.fromTo(batch,
        { opacity: 0, scale: 0.95 }, // Scale moins agressif pour fluidité
        {
          opacity: 1,
          scale: 1,
          stagger: 0.05, // Stagger plus rapide
          duration: 0.5, // Durée réduite
          ease: 'power2.out',
          overwrite: true
        }
      ),
      start: 'top 90%',
      once: true
    })

    // Animations Hero Sections
    const heroes = [servicesHeroRef.current, galerieHeroRef.current, contactHeroRef.current, chefHeroRef.current]
    heroes.forEach(hero => {
      if (hero) {
        gsap.fromTo(hero,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: hero,
              start: 'top 85%',
              once: true
            }
          }
        )
      }
    })

    // Animation Section Chef
    if (chefSectionRef.current) {
      gsap.fromTo(chefSectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: chefSectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      )
    }

  }, { scope: containerRef }) // Scope important pour le nettoyage automatique


  const services = [
    {
      title: 'Prestation privée',
      description: 'Je conçois des menus sur mesure pour vos déjeuners, dîners ou événements particuliers. Chaque prestation est pensée comme une expérience personnalisée, où la cuisine s’accorde à vos goûts, à la saison et à l’ambiance souhaitée.',
      image: '/images/food/Amuse bouche à l_oignon et pomme granny.jpg',
    },
    {
      title: 'Cours & Ateliers',
      description: 'Je propose des ateliers culinaires pensés comme des moments de transmission et de convivialité. L’objectif : apprendre des techniques simples et précises, découvrir des associations de saveurs, et surtout, prendre plaisir à cuisiner.',
      image: '/images/food/Ravioli au gorgonzola et PDT 1.jpeg',
    },
    {
      title: 'Cuisine d\'exception',
      description: 'Une expérience gastronomique unique à domicile, où chaque plat raconte une histoire et chaque saveur révèle une passion pour le terroir et la créativité.',
      image: '/images/food/Making off.jpg',
    }
  ]

  const galleryImages = [
    '/images/food/imgnew1.jpeg',
    '/images/food/imgnew2.jpeg',
    '/images/food/imgnew3.jpeg',
    '/images/food/imgnew4.jpeg',
    '/images/food/imgnew5.jpeg',
    '/images/food/imgnew6.jpeg',
    '/images/food/Oeuf parfait 1.jpg',
    '/images/food/Oeuf parfait 2.jpg',
    '/images/food/Ballotine de poulet 3.jpg',
    '/images/food/Amuse bouche à l_oignon et pomme granny.jpg',
    '/images/food/Making off.jpg',
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
    <div ref={containerRef} className="bg-black text-white">
      {/* Hero Section - Accueil */}
      <section
        id="accueil"
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 gpu-accelerated">
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

      {/* Le Chef Section */}
      <section id="le-chef" ref={chefSectionRef} className="py-20 md:py-32 bg-primary-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[3/4] order-2 lg:order-1 max-w-md mx-auto w-full shadow-2xl overflow-hidden rounded-lg">
              <Image
                src="/images/chef.jpg"
                alt="Le Chef"
                fill
                className="object-cover"
                quality={95}
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
                Le Chef
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed text-lg">
                <p>
                  Avant de me consacrer pleinement à la cuisine, j’ai suivi des études à Sciences Po, puis travaillé plusieurs années dans l’humanitaire — notamment en Haïti, au Tchad et en République Centrafricaine, pour des ONG françaises et internationales. Ces expériences m’ont profondément marqué : elles m’ont appris le sens du partage, de la rencontre, et m’ont fait découvrir la richesse des cultures à travers leurs cuisines.
                </p>
                <p>
                  De retour en France, j’ai choisi de revenir à ma passion première et de me former à la gastronomie en passant mon CAP cuisine, avant d’approfondir mes connaissances en œnologie avec les examens WSET. Je travaille aujourd’hui au restaurant Almanach Montmartre, dans le 18ᵉ arrondissement de Paris, où j’affine chaque jour ma technique et ma sensibilité culinaire.
                </p>
                <p>
                  Tout au long de l’année, j’essaie également de me former auprès d’autres chefs, en passant quelques semaines dans différents restaurants, afin de découvrir de nouvelles approches, d’enrichir ma pratique et de nourrir mon inspiration.
                </p>
                <p>
                  Avec mon activité de chef privé, je souhaite offrir une expérience sur mesure, à la croisée de la convivialité et de l’exigence gastronomique. J’aime concevoir des menus qui racontent une histoire, où chaque plat trouve son équilibre entre saisonnalité, terroir et créativité.
                </p>
                <p className="italic font-serif text-xl border-l-2 border-white/20 pl-6 mt-8">
                  &ldquo;Plus qu’un simple repas, je veux créer des moments à part, où la cuisine devient un langage d’émotions et de partage.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
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
                src="/images/food/imgnew5.jpeg"
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
          <div className="relative w-full h-[50vh] min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl gpu-accelerated">
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

          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item group"
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg gpu-accelerated">
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
                <div key={index} className="text-center service-item">
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
          <div className="relative w-full h-[50vh] min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl gpu-accelerated">
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
                className="gallery-item relative aspect-square overflow-hidden group cursor-pointer opacity-0 gpu-accelerated"
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
          <div className="relative w-full h-[50vh] min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl gpu-accelerated">
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

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-8">
              Prenons contact
            </h3>
            <p className="text-white/80 leading-relaxed text-lg mb-12">
              Nous serions ravis d&apos;échanger avec vous sur votre projet culinaire.
              N&apos;hésitez pas à nous contacter via nos réseaux ou par email.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              {/* Instagram */}
              <a
                href="https://instagram.com/ateliergaschignard"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 transition-smooth"
              >
                <div className="w-16 h-16 flex items-center justify-center border border-white/20 rounded-full group-hover:border-white/50 group-hover:bg-white/5 transition-smooth">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div className="text-center">
                  <h4 className="text-sm uppercase tracking-wider text-white/60 mb-1">Instagram</h4>
                  <p className="text-white text-xl font-medium">@ateliergaschignard</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:servicecommercial@ateliergaschignard.com"
                className="group flex flex-col items-center space-y-4 transition-smooth"
              >
                <div className="w-16 h-16 flex items-center justify-center border border-white/20 rounded-full group-hover:border-white/50 group-hover:bg-white/5 transition-smooth">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="text-center">
                  <h4 className="text-sm uppercase tracking-wider text-white/60 mb-1">Email</h4>
                  <p className="text-white text-xl font-medium">servicecommercial@ateliergaschignard.com</p>
                </div>
              </a>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
