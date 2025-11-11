'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }

    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      )
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    // Par exemple, avec une API route Next.js ou un service externe
    
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Merci pour votre message. Nous vous répondrons dans les plus brefs délais.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Contact
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Parlons de votre projet
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-primary-900 mb-6">
                  Prenons contact
                </h2>
                <p className="text-primary-700 leading-relaxed text-lg mb-8">
                  {/* Le contenu sera complété après lecture des documents */}
                  Nous serions ravis d'échanger avec vous sur votre projet culinaire.
                  N'hésitez pas à nous contacter pour toute demande.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-primary-600 mb-2">
                    Email
                  </h3>
                  <p className="text-primary-900 text-lg">
                    {/* À compléter */}
                    contact@ateliergaschignard.fr
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-primary-600 mb-2">
                    Téléphone
                  </h3>
                  <p className="text-primary-900 text-lg">
                    {/* À compléter */}
                    +33 (0) X XX XX XX XX
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-primary-600 mb-2">
                    Adresse
                  </h3>
                  <p className="text-primary-900 text-lg">
                    {/* À compléter */}
                    Adresse à compléter
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider text-primary-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-300 bg-white text-primary-900 focus:outline-none focus:border-primary-900 transition-smooth"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider text-primary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-300 bg-white text-primary-900 focus:outline-none focus:border-primary-900 transition-smooth"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-wider text-primary-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-300 bg-white text-primary-900 focus:outline-none focus:border-primary-900 transition-smooth"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-primary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-primary-300 bg-white text-primary-900 focus:outline-none focus:border-primary-900 transition-smooth resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary-900 text-white uppercase tracking-wider text-sm font-medium hover:bg-primary-800 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

