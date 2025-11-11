'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }

    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.gallery-item')
      items.forEach((item, index) => {
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
  }, [])

  // Liste des images de la galerie
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
    '/images/food/Aubergines brulées sauce grec 2.jpg',
    '/images/food/Maquereaux 2.jpeg',
    '/images/food/Agneau en ballotine.jpeg',
    '/images/food/Agneau précuit.jpeg',
  ]

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/food/Making off.jpg"
            alt="Galerie"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Galerie
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Un aperçu de nos créations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="gallery-item relative aspect-square overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Création ${index + 1}`}
                  fill
                  className="object-cover transition-smooth group-hover:scale-110"
                  quality={85}
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Vue agrandie"
              fill
              className="object-contain"
              quality={95}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary-200 transition-smooth"
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

