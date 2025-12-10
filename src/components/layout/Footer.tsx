export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        
        {/* Для мобильных - вертикально, для десктопа - горизонтально */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Лого и описание */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg"></div>
              <div>
                <div className="font-bold text-xl text-gray-900">Culinar Baklava</div>
                <div className="text-sm text-gray-600">& Feinkost</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Handgemachte Baklava, frische Feinkost und traditionelle Spezialitäten aus Potsdam.
            </p>
          </div>
          
          {/* Контакты и время работы - на мобильных в две колонки */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Контакты */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Kontakt</h3>
                <div className="space-y-2 text-gray-600">
                  <div>📍 Potsdam, Germany</div>
                  <div>📞 0331 2730 8229</div>
                  <div>✉️ info@culinar-baklava.de</div>
                </div>
              </div>
              
              {/* Время работы - проще и локаничнее */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Öffnungszeiten</h3>
                <div className="space-y-1 text-gray-600">
                  <div className="flex justify-between">
                    <span>Mo–Fr:</span>
                    <span className="font-medium">10:00–19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sa:</span>
                    <span className="font-medium">10:00–18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>So:</span>
                    <span className="font-medium">11:00–17:00</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
        
        {/* Разделитель и копирайт */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-gray-500 text-sm">
              © 2024 Culinar Baklava & Feinkost. Alle Rechte vorbehalten.
            </div>
            <div className="text-sm text-gray-500">
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Impressum
              </a>
              <span className="mx-2">•</span>
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
