export default function BaklavaHighlight() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая колонка - изображение */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="aspect-square bg-accent rounded-lg flex items-center justify-center">
              <span className="text-8xl">🍯</span>
            </div>
          </div>

          {/* Правая колонка - контент */}
          <div className="space-y-6">
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">Unser Star-Produkt</span>
            </div>

            {/* Заголовок */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Echte Türkische{' '}
              <span className="text-primary">Baklava</span>
            </h2>

            {/* Описание */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Seit Generationen bewahren wir die authentische Kunst der Baklava-Herstellung. 
              Jedes Stück ist ein Meisterwerk aus hauchdünnem Filoteig, besten Pistazien 
              und reinem Honig.
            </p>

            {/* Преимущества */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {[
                { icon: '👑', text: 'Premium Pistazien' },
                { icon: '🧈', text: 'Reine Butter' },
                { icon: '🍯', text: 'Natürlicher Honig' },
                { icon: '👨‍🍳', text: 'Handgefertigt' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Цена и CTA */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">Ab 12,99 €</div>
                  <div className="text-gray-600">pro Box • Frisch & Knusprig</div>
                </div>
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors">
                  Jetzt probieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}