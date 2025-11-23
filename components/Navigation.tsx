'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  const menuRef = useRef<HTMLDivElement>(null)
  
  // Utiliser le logo à la racine de public pour éviter l'optimiseur Next.js
  const logoPath = '/logo.png'

  // Animation du menu mobile avec useGSAP
  useGSAP(() => {
    if (isOpen) {
      // Animation d'ouverture
      gsap.to(menuRef.current, {
        opacity: 1,
        autoAlpha: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
      
      gsap.fromTo('.mobile-nav-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: 'power2.out',
          delay: 0.1
        }
      )
    } else {
      // Animation de fermeture
      gsap.to(menuRef.current, {
        opacity: 0,
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power2.in'
      })
    }
  }, { dependencies: [isOpen], scope: menuRef })

  // Fonction pour scroller vers une section
  const scrollToSection = (id: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault()
    
    const offset = 80 // Hauteur de la navbar

    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: `#${id}`,
        offsetY: offset
      },
      ease: 'power4.inOut'
    })
    
    setIsOpen(false)
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Throttle pour optimiser les performances
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        // Détecter la section active lors du scroll
        const sections = ['accueil', 'a-propos', 'services', 'galerie', 'contact']
        const scrollPosition = window.scrollY + 100 // Marge de détection

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
        timeoutId = undefined!;
      }, 100);
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Appel initial pour définir la section active
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  // Fermer le menu mobile avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Empêcher le scroll du body quand le menu est ouvert
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navItems = [
    { id: 'accueil', label: 'ACCUEIL' },
    { id: 'services', label: 'SERVICES' },
    { id: 'galerie', label: 'GALERIE' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm transition-all duration-200"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container-custom">
        {/* Desktop & Tablette: Layout 3 colonnes */}
        <div className="hidden md:grid md:grid-cols-3 items-center h-20 lg:h-24">
          {/* Zone 1: Logo à gauche */}
          <div className="flex items-center justify-start">
            <a 
              href="#accueil"
              onClick={(e) => scrollToSection('accueil', e)}
              className="flex items-center min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2 rounded"
              aria-label="Retour à l'accueil"
            >
              <div className="h-20 w-20 lg:h-24 lg:w-24 relative flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={logoPath}
                  alt="Atelier Gaschignard" 
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  loading="eager"
                  // Désactiver srcset pour éviter l'optimiseur Next.js
                  srcSet=""
                  onError={(e) => {
                    console.error('Logo failed to load from:', e.currentTarget.src)
                  }}
                />
              </div>
            </a>
          </div>

          {/* Zone 2: Titre centré */}
          <div className="flex items-center justify-center">
            <h1 className="font-heading text-sm lg:text-base uppercase tracking-[0.05em] text-[var(--color-brand-primary)]">
              Atelier Gaschignard
            </h1>
          </div>

          {/* Zone 3: Menu à droite */}
          <div className="flex items-center justify-end">
            <ul className="flex items-center space-x-4 md:space-x-5 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(item.id, e)}
                      className={`
                        font-heading text-xs lg:text-sm uppercase tracking-[0.1em] 
                        nav-transition min-h-[44px] min-w-[44px] flex items-center justify-center
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2 rounded
                        ${isActive 
                          ? 'text-[var(--color-brand-primary)] border-b border-[var(--color-brand-primary)] pb-1' 
                          : 'text-[var(--color-brand-primary)] opacity-70 hover:opacity-100'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Mobile: Layout flex avec titre centré */}
        <div className="md:hidden relative flex items-center justify-between h-16 px-4">
          {/* Logo à gauche */}
          <div className="flex-shrink-0 z-10">
            <a 
              href="#accueil"
              onClick={(e) => scrollToSection('accueil', e)}
              className="flex items-center min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2 rounded"
              aria-label="Retour à l'accueil"
            >
              <div className="h-12 w-12 relative flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={logoPath}
                  alt="Atelier Gaschignard" 
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  loading="eager"
                  // Désactiver srcset pour éviter l'optimiseur Next.js
                  srcSet=""
                  onError={(e) => {
                    console.error('Logo failed to load from:', e.currentTarget.src)
                  }}
                />
              </div>
            </a>
          </div>

          {/* Titre centré en absolu */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-heading text-xs xs:text-sm uppercase tracking-[0.05em] text-[var(--color-brand-primary)] whitespace-nowrap">
              Atelier Gaschignard
            </h1>
          </div>

          {/* Menu Toggle à droite */}
          <div className="flex-shrink-0 z-10 flex justify-end">
            <button
              className="min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2 rounded"
              onClick={() => setIsOpen(!isOpen)}
              {...(isOpen && { 'aria-expanded': true })}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span 
                  className={`block h-0.5 w-6 bg-[var(--color-brand-primary)] transition-all duration-200 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                  aria-hidden="true"
                />
                <span 
                  className={`block h-0.5 w-6 bg-[var(--color-brand-primary)] transition-all duration-200 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                  aria-hidden="true"
                />
                <span 
                  className={`block h-0.5 w-6 bg-[var(--color-brand-primary)] transition-all duration-200 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div 
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-white z-40 opacity-0 invisible"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation mobile"
        >
          <div className="container-custom pt-8 pb-12">
            <nav aria-label="Navigation mobile">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <li key={item.id} className="mobile-nav-item opacity-0">
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(item.id, e)}
                        className={`
                          font-heading text-xl uppercase tracking-[0.1em] 
                          nav-transition min-h-[44px] flex items-center px-4 py-3
                          focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2 rounded
                          ${isActive 
                            ? 'text-[var(--color-brand-primary)] font-semibold' 
                            : 'text-[var(--color-brand-primary)] opacity-70 hover:opacity-100'
                          }
                        `}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
