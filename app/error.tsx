'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log l'erreur pour le débogage
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">
          Oups, une erreur est survenue
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          {error.message || 'Une erreur inattendue s\'est produite'}
        </p>
        <button
          onClick={reset}
          className="px-8 py-4 bg-white text-black uppercase tracking-wider text-sm font-medium hover:bg-white/90 transition-smooth"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}

