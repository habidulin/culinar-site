export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="container mx-auto px-2">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Seit 2015 in Potsdam</span>
          </div>

          {/* Главный заголовок */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Culinar{' '}
            <span className="text-primary">Baklava</span>
            {' '}& Feinkost
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-primary font-semibold mb-8">
            Tradition, Geschmack, Qualität
          </p>

          {/* Описание */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Handgemachte Baklava, frische Feinkost, Antipasti, Oliven und hausgemachte Spezialitäten – 
            direkt aus unserer Familie für Sie.
          </p>

          {/* CTA кнопки */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
              Produkte ansehen
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Kontakt & Standort
            </button>
          </div> */}

          {/* Дополнительная информация */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {[
              { value: 'Frische', label: 'Täglich produziert' },
              { value: '100%', label: 'Handgemacht' },
              { value: '⭐ 5.0', label: 'Google Bewertungen' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-1 border border-gray-200">
                <div className="text-xl font-bold text-primary mb-1">{item.value}</div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}