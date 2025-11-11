import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-400 py-12 md:py-16">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo en bas à gauche (remplace MAGENTA) */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <img 
                src="/images/logo.png" 
                alt="Atelier Gaschignard" 
                className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-smooth"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500">
            © {currentYear} Atelier Gaschignard. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
