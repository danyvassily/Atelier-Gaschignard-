import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Composant Image optimisé avec lazy loading
const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false 
}: { 
  src: string
  alt: string
  className?: string
  priority?: boolean
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <div className={`relative ${className}`} ref={imgRef}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  )
}

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
    }

    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.gallery-item')
      items.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            },
            delay: index * 0.03
          }
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Liste des images du dossier "PHOTOS (FOOD)"
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
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-heading text-5xl md:text-7xl mb-6 uppercase tracking-wider">
            PHOTOS
          </h1>
        </div>
      </section>

      {/* Grille photo fluide et élégante inspirée de HomemadeLab */}
      <section ref={galleryRef} className="py-20 md:py-32 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="gallery-item relative aspect-square overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedImage(src)
                  }
                }}
                aria-label={`Voir l'image ${index + 1} en grand`}
              >
                <LazyImage
                  src={src}
                  alt={`Création ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  priority={index < 4} // Charger les 4 premières images en priorité
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Vue agrandie de l'image"
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <img
              src={selectedImage}
              alt="Vue agrandie"
              className="w-full h-full object-contain"
              loading="eager"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 text-white hover:opacity-80 transition-opacity duration-200 text-3xl w-12 h-12 flex items-center justify-center bg-black/50 rounded-full touch-manipulation"
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Photos
