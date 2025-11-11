import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (heroRef.current && titleRef.current && subtitleRef.current) {
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
    }
  }, [])

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section avec photo "Page d'accueil" */}
      <section 
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/page-accueil.jpg"
            alt="Atelier Gaschignard"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 
            ref={titleRef}
            className="font-heading text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6 uppercase tracking-wider"
          >
            ATELIER GASCHIGNARD
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto font-light"
          >
            by Cyprien Gaschignard
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
