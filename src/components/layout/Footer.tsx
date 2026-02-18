"use client";

import logo from '@/assets/logo.png';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-3 py-6">

        {/* Для мобильных - вертикально, для десктопа - горизонтально */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Лого и описание */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              {/* Логотип */}
              <div className="flex flex-col items-center">
                <Image
                  src={logo}
                  alt="Culinar"
                  width={119}
                  height={119}
                  className="object-contain"
                />
                <div className="text-xs text-gray-600">Baklava & Feinkost</div>
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
                  <div>📞 0176 6385 6269</div>
                  <div>✉️ culinar.potsdam@gmx.de</div>
                </div>
              </div>

              {/* Время работы - проще и локаничнее */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Öffnungszeiten</h3>
                <div className="space-y-1 text-gray-600">
                  <div className="flex">
                    <span className="w-24">Mo–Sa:</span>
                    <span className="font-medium">9:00–21:00</span>
                  </div>
                  <div className="flex">
                    <span className="w-24">Sonntag:</span>
                    <span className="font-medium">Geschlossen</span>
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
