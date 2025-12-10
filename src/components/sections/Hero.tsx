export default function Hero() {
  return (
    <section id="home" className="relative h-[60vh] md:h-[60vh] flex items-center justify-center">

      {/* Видео фон */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Контент поверх видео */}
      <div className="container mx-auto px-2 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Culinar{' '}
            <span className="text-primary">Baklava</span>
            {' '}& Feinkost
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-semibold mb-8">
            Tradition, Geschmack, Qualität
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Handgemachte Baklava, frische Feinkost, Antipasti, Oliven und hausgemachte Spezialitäten – 
            direkt aus unserer Familie für Sie.
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {[
              { value: 'Frische', label: 'Täglich produziert' },
              { value: '100%', label: 'Handgemacht' },
              { value: '⭐ 5.0', label: 'Google Bewertungen' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-gray-200">
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