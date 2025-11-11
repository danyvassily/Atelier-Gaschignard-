import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    // Throttle scroll pour performance
    let ticking = false
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', scrollHandler, { passive: true })
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Empêcher le scroll du body quand le menu mobile est ouvert
      document.body.style.overflow = 'hidden'
      gsap.fromTo('.nav-menu-item', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.3, ease: 'power2.out' }
      )
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Fermer le menu mobile au changement de route
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Menu selon spécifications : LE CHEF, SERVICES, PHOTOS, CONTACT
  const navItems = [
    { href: '/le-chef', label: 'LE CHEF' },
    { href: '/services', label: 'SERVICES' },
    { href: '/photos', label: 'PHOTOS' },
    { href: '/contact', label: 'CONTACT' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Navigation sticky discrète */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        aria-label="Navigation principale"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center z-50 relative group"
              onClick={() => setIsOpen(false)}
              aria-label="Retour à l'accueil"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 relative transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/images/logo.png" 
                  alt="Atelier Gaschignard" 
                  className="w-full h-full object-contain"
                  loading="eager"
                  width="56"
                  height="56"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`
                      text-xs lg:text-sm uppercase tracking-wider font-heading
                      transition-all duration-200 ease-out
                      relative py-2
                      ${isActive 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                      }
                    `}
                    onClick={handleLinkClick}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-all duration-200" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 relative p-2 -mr-2 touch-manipulation"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span 
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Liste claire, taille confortable */}
      <div 
        className={`
          md:hidden fixed inset-0 bg-black z-40 
          transition-all duration-300 ease-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{ top: '64px', paddingTop: '2rem' }}
        aria-hidden={!isOpen}
      >
        <div className="container-custom h-full flex flex-col">
          <nav className="flex flex-col space-y-1" aria-label="Navigation mobile">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`
                    nav-menu-item
                    text-xl uppercase tracking-wider font-heading
                    transition-all duration-200 ease-out
                    py-4 px-4
                    min-h-[48px] flex items-center
                    touch-manipulation
                    ${isActive 
                      ? 'text-white bg-white/5' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                  onClick={handleLinkClick}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Overlay pour fermer le menu mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default Navigation
