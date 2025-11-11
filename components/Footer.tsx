'use client'

import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-primary-100 py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-4">Atelier Gaschignard</h3>
            <p className="text-sm text-primary-300 leading-relaxed">
              Cuisine d&apos;exception et savoir-faire artisanal
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-primary-300 hover:text-primary-100 transition-smooth">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-primary-300 hover:text-primary-100 transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-sm text-primary-300 hover:text-primary-100 transition-smooth">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-300 hover:text-primary-100 transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-sm text-primary-300 leading-relaxed">
              {/* Le contenu sera ajouté après lecture des documents */}
            </p>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-400">
            © {currentYear} Atelier Gaschignard. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

