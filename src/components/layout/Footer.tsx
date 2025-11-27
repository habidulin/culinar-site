export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4">
        
        {/* Основной контент */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Колонка 1 - О компании */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-lg">C</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-lg">Culinar</div>
                <div className="text-sm text-gray-600">Baklava & Feinkost</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Traditionelle türkische Spezialitäten mit Liebe zubereitet. 
              Seit 1995 für Sie in Potsdam.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {'⭐'.repeat(5)}
              </div>
              <span className="text-sm text-gray-600">5.0 (128 Bewertungen)</span>
            </div>
          </div>

          {/* Колонка 2 - Быстрые ссылки */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Startseite', href: '#home' },
                { name: 'Produkte', href: '#products' },
                { name: 'Über Uns', href: '#about' },
                { name: 'Kontakt', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3 - Контакты */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-6">Kontakt</h4>
            <div className="space-y-3 text-gray-600">
              <div>Babelsberg Str. 16</div>
              <div>14473 Potsdam</div>
              <div>+49 (0) 331 12345678</div>
              <div>info@culinar-baklava.de</div>
            </div>
          </div>

          {/* Колонка 4 - Соцсети */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-6">Folgen Sie uns</h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: '📘', name: 'Facebook' },
                { icon: '📷', name: 'Instagram' },
                { icon: '💬', name: 'WhatsApp' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ihre E-Mail"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary"
                />
                <button className="bg-primary text-white px-4 py-3 rounded-r-lg hover:bg-secondary transition-colors font-semibold">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2024 Culinar Baklava & Feinkost. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-primary transition-colors">Impressum</a>
              <a href="#" className="hover:text-primary transition-colors">AGB</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}