export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Заголовок */}
        <div className="text-center mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Besuchen Sie uns</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Kontakt & Standort
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Besuchen Sie uns in Potsdam oder nehmen Sie Kontakt auf
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Форма */}
          <div className="bg-white rounded-xl p-3 border border-gray-200">
            <h3 className="text-2xl font-bold text-primary mb-6">Schreiben Sie uns</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="Ihr Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">E-Mail *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="ihre@email.de"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Betreff</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Betreff Ihrer Nachricht"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Nachricht *</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Ihre Nachricht an uns..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          {/* Контакты */}
          <div className="space-y-6">
            {[
              {
                icon: '📍',
                title: 'Adresse',
                content: 'Babelsberg Straße 16, 14473 Potsdam'
              },
              {
                icon: '📞', 
                title: 'Telefon',
                content: '+49 (0) 331 12345678'
              },
              {
                icon: '✉️',
                title: 'E-Mail',
                content: 'info@culinar-baklava.de'
              },
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
          </div>
        </div>

        {/* Карта */}
        <div className="mt-12 bg-white rounded-xl p-4 border border-gray-200 max-w-6xl mx-auto">
          <h4 className="font-bold text-gray-900 mb-4 text-lg">So finden Sie uns</h4>
          <div className="h-64 bg-accent rounded-lg flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <span className="text-4xl">🗺️</span>
              <p className="text-gray-600 mt-2">Google Maps Integration</p>
              <button className="bg-primary text-white px-6 py-2 rounded-lg mt-4 hover:bg-secondary transition-colors font-semibold">
                Route planen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}