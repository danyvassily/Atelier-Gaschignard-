'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  // Fonction pour scroller vers une section
  const scrollToSection = (id: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Détecter la section active lors du scroll
      const sections = ['accueil', 'a-propos', 'services', 'galerie', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Appel initial pour définir la section active
    return () => window.removeEventListener('scroll', handleScroll)
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
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm' 
          : 'bg-transparent'
      } transition-all duration-200`}
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
                <Image 
                  src="/images/logo.png"
                  alt="Atelier Gaschignard" 
                  width={96}
                  height={96}
                  className="object-contain"
                  style={{ width: '100%', height: '100%' }}
                  priority
                  unoptimized
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

        {/* Mobile: Layout 2 colonnes (logo + titre, menu toggle) */}
        <div className="md:hidden grid grid-cols-2 items-center h-16 px-4">
          {/* Logo + Titre à gauche */}
          <div className="flex items-center space-x-2">
            <a 
              href="#accueil"
              onClick={(e) => scrollToSection('accueil', e)}
              className="flex items-center min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2 rounded"
              aria-label="Retour à l'accueil"
            >
              <div className="h-16 w-16 relative flex-shrink-0">
                <Image 
                  src="/images/logo.png"
                  alt="Atelier Gaschignard" 
                  width={64}
                  height={64}
                  className="object-contain"
                  style={{ width: '100%', height: '100%' }}
                  priority
                  unoptimized
                />
              </div>
            </a>
            <h1 className="font-heading text-xs uppercase tracking-[0.05em] text-[var(--color-brand-primary)]">
              Atelier Gaschignard
            </h1>
          </div>

          {/* Menu Toggle à droite */}
          <div className="flex items-center justify-end">
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
          className={`md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-white z-40 transition-all duration-200 ease-out ${
            isOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible pointer-events-none'
          }`}
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
                    <li key={item.id}>
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
