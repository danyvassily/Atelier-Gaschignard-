'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import Logo from './Logo'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)

  // Utiliser le logo dans le dossier images qui semble mieux servi
  const logoPath = '/images/logo-v2.png'

  // Animation du menu mobile
  useGSAP(() => {
    if (isOpen) {
      // Bloquer le scroll
      document.body.style.overflow = 'hidden'

      // Animation d'ouverture
      const tl = gsap.timeline()
      tl.to(menuRef.current, {
        display: 'flex',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
        .fromTo('.mobile-link',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)' },
          '-=0.1'
        )
    } else {
      // Débloquer le scroll
      document.body.style.overflow = ''

      // Animation de fermeture
      gsap.to(menuRef.current, {
        opacity: 0,
        display: 'none',
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  }, { dependencies: [isOpen] })

  // Gestion du scroll pour scroll smooth vers les ancres
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)

    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      const navHeight = 112 // Hauteur exacte de la navbar (h-28 = 112px)

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: element,
          offsetY: navHeight
        },
        ease: 'power3.inOut'
      })
    }
  }

  const navLinks = [
    { name: 'ACCUEIL', href: '#accueil' },
    { name: 'LE CHEF', href: '#le-chef' },
    { name: 'SERVICES', href: '#services' },
    { name: 'GALERIE', href: '#galerie' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 h-28 z-[100] bg-white shadow-md flex items-center justify-between px-4 md:px-8 lg:px-12 transition-all duration-300"
        role="navigation"
      >
        {/* Left Section: Title - Hidden on mobile to avoid duplication with center logo */}
        <div className="hidden md:flex items-center w-1/3 relative z-[103]">
          <a
            href="#accueil"
            onClick={(e) => handleLinkClick(e, '#accueil')}
            className="text-[#3d352e] font-serif text-base md:text-xl lg:text-2xl tracking-wide hover:text-amber-700 transition-colors leading-tight"
          >
            Atelier<br className="md:hidden" /> Gaschignard
          </a>
        </div>

        {/* Center Section: Redesigned Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-[102] w-auto max-w-[40%]">
          <a
            href="#accueil"
            onClick={(e) => handleLinkClick(e, '#accueil')}
            className="block hover:scale-105 transition-transform duration-300"
          >
            <Logo className="py-1" />
          </a>
        </div>

        {/* Right Section: Desktop Navigation & Mobile Burger */}
        <div className="flex items-center justify-end w-[35%]">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#3d352e] font-serif text-[10px] lg:text-xs tracking-[0.15em] hover:text-amber-700 transition-colors uppercase whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            className="md:hidden z-[101] p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[#3d352e] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-[#3d352e] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-[#3d352e] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-white z-[99] hidden flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center space-y-8">
          {/* Mobile Menu Logo */}
          <div className="mb-8 p-4 border border-[#3d352e]/10 rounded-sm">
            <Logo />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="mobile-link text-[#3d352e] text-2xl md:text-3xl font-serif tracking-wider hover:text-amber-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navigation
