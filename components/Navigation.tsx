'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.nav-menu-item', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.4 }
      )
    }
  }, [isOpen])

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 z-50 relative"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image 
                src="/images/logo.png" 
                alt="Atelier Gaschignard" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-serif text-xl md:text-2xl text-primary-900">
              Atelier Gaschignard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm uppercase tracking-wider transition-smooth ${
                  pathname === item.href
                    ? 'text-primary-900 border-b-2 border-primary-900 pb-1'
                    : 'text-primary-700 hover:text-primary-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span 
                className={`block h-0.5 w-6 bg-primary-900 transition-smooth ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-6 bg-primary-900 transition-smooth ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-6 bg-primary-900 transition-smooth ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-white z-40 transition-smooth ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ top: '80px' }}
        >
          <div className="container-custom pt-12 pb-8">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-menu-item text-2xl uppercase tracking-wider transition-smooth ${
                    pathname === item.href
                      ? 'text-primary-900'
                      : 'text-primary-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

