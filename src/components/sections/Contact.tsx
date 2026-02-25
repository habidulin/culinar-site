"use client"

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-2">

        {/* Заголовок */}
        <div className="text-center mb-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Besuchen Sie uns</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Kontakt & Standort
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Besuchen Sie uns in Potsdam oder nehmen Sie Kontakt auf
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* Форма */}
          <div className="bg-white rounded-xl p-2 border border-gray-200">
            <h3 className="text-2xl font-bold text-primary mb-6">Schreiben Sie uns</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="Ihr Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">E-Mail *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="ihre@email.de"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1 font-medium">Betreff</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Betreff Ihrer Nachricht"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1 font-medium">Nachricht *</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Ihre Nachricht an uns..."
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg">
                  ✓ Nachricht erfolgreich gesendet!
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg">
                  ✗ Fehler beim Senden. Bitte versuchen Sie es erneut.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </form>
          </div>

          {/* Контакты */}
          {/* <div className="space-y-6">
            {[
              // {
              //   icon: '📍',
              //   title: 'Adresse',
              //   content: 'Babelsberg Straße 16, 14473 Potsdam'
              // },
              // {
              //   icon: '📞',
              //   title: 'Telefon',
              //   content: '+49 176 6385 6269'
              // },
              // {
              //   icon: '✉️',
              //   title: 'E-Mail',
              //   content: 'culinar.potsdam@gmx.de'
              // },
              {
                icon: '🕒',
                title: 'Öffnungszeiten',
                content: 'Mo-Sa: 10:00-20:00\nSonntag: Geschlossen'
              }
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-xl text-white">{contact.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{contact.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed">{contact.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Карта */}
        <div className="mt-6 bg-white rounded-xl p-2 border border-gray-200 max-w-6xl mx-auto">
          <h4 className="font-bold text-gray-900 mb-4 text-lg">So finden Sie uns</h4>
          <div className="h-96 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d152.17420165274828!2d13.0674627!3d52.3924074!3m2!1i1024!2i768!4f145!3m3!1m2!1s0x47a8f5c23d850f45%3A0xbadf974c6cb4e4f1!2sCulinar%20Baklava%20und%20Feinkost!5e0!3m2!1sru!2sde!4v1765283691152!5m2!1sru!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
