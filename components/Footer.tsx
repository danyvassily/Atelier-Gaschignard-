'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'ACCUEIL' },
    { href: '/services', label: 'SERVICES' },
    { href: '/galerie', label: 'GALERIE' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <footer 
      className="bg-[#0a0a0a] text-white relative"
      role="contentinfo"
      aria-label="Pied de page"
    >
      {/* Hairline divider en haut */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/12" aria-hidden="true" />
      
      <div className="container-custom">
        {/* Desktop: Layout 3 colonnes */}
        <div className="hidden md:grid md:grid-cols-3 items-center py-4 lg:py-5 min-h-[64px] lg:min-h-[72px]">
          {/* Colonne gauche: Marque */}
          <div className="flex flex-col justify-center">
            <div className="font-heading text-xs lg:text-sm uppercase tracking-[0.05em] text-white/88 mb-1">
              Atelier Gaschignard
            </div>
            <div className="font-body text-[10px] lg:text-xs text-white/60">
              © {currentYear}
            </div>
          </div>

          {/* Colonne centre: Navigation */}
          <div className="flex items-center justify-center">
            <nav aria-label="Navigation du pied de page">
              <ul className="flex items-center">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.href} className="flex items-center">
                      <Link
                        href={item.href}
                        className={`
                          font-body text-xs lg:text-sm text-white/84 
                          hover:text-white hover:underline decoration-white/40 decoration-[0.5px] underline-offset-4
                          transition-[color,text-decoration-color] duration-150 ease-out
                          min-h-[44px] min-w-[44px] flex items-center justify-center px-2
                          focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded
                          ${isActive ? 'text-white underline decoration-white/60' : ''}
                        `}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                      {index < navItems.length - 1 && (
                        <span className="text-white/30 mx-2 lg:mx-3 text-xs" aria-hidden="true">·</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Colonne droite: Contact */}
          <div className="flex flex-col items-end justify-center space-y-1">
            <a
              href="mailto:ateliergaschignard@gmail.com"
              className="font-body text-xs lg:text-sm text-white/84 hover:text-white hover:underline decoration-white/40 decoration-[0.5px] underline-offset-4 transition-[color,text-decoration-color] duration-150 ease-out min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded px-1"
              aria-label="Envoyer un email à ateliergaschignard@gmail.com"
            >
              ateliergaschignard@gmail.com
            </a>
            <a
              href="https://instagram.com/ateliergaschignard"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs lg:text-sm text-white/84 hover:text-white hover:underline decoration-white/40 decoration-[0.5px] underline-offset-4 transition-[color,text-decoration-color] duration-150 ease-out min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded px-1"
              aria-label="Visiter le profil Instagram @ateliergaschignard"
            >
              @ateliergaschignard
            </a>
          </div>
        </div>

        {/* Mobile: Layout vertical empilé */}
        <div className="md:hidden flex flex-col py-4 space-y-4 min-h-[56px]">
          {/* Marque */}
          <div className="flex flex-col">
            <div className="font-heading text-xs uppercase tracking-[0.05em] text-white/88 mb-1">
              Atelier Gaschignard
            </div>
            <div className="font-body text-[10px] text-white/60">
              © {currentYear}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation du pied de page">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href} className="flex items-center">
                    <Link
                      href={item.href}
                      className={`
                        font-body text-xs text-white/84 
                        hover:text-white hover:underline decoration-white/40 decoration-[0.5px] underline-offset-4
                        transition-[color,text-decoration-color] duration-150 ease-out
                        min-h-[44px] flex items-center px-1
                        focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded
                        ${isActive ? 'text-white underline decoration-white/60' : ''}
                      `}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                    {index < navItems.length - 1 && (
                      <span className="text-white/30 mx-1.5 text-[10px]" aria-hidden="true">·</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col space-y-1.5">
            <a
              href="mailto:ateliergaschignard@gmail.com"
              className="font-body text-xs text-white/84 hover:text-white hover:underline decoration-white/40 decoration-[0.5px] underline-offset-4 transition-[color,text-decoration-color] duration-150 ease-out min-h-[44px] flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
              aria-label="Envoyer un email à ateliergaschignard@gmail.com"
            >
              ateliergaschignard@gmail.com
            </a>
            <a
              href="https://instagram.com/ateliergaschignard"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-white/84 hover:text-white hover:underline decoration-white/40 decoration-[0.5px] underline-offset-4 transition-[color,text-decoration-color] duration-150 ease-out min-h-[44px] flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
              aria-label="Visiter le profil Instagram @ateliergaschignard"
            >
              @ateliergaschignard
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
