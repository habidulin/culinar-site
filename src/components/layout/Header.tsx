"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Закрываем меню при скролле
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Скролл вниз - скрываем
        setIsVisible(false);

      } else if (currentScrollY < lastScrollY) {
        // Скролл вверх - показываем
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <header className={`bg-white/30 backdrop-blur-md sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-3 py-1">
        <div className="flex items-center justify-between">
          {/* Гамбургер для мобильных */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3"
            >
              <div className={`w-8 h-0.5 bg-gray-600 mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-8 h-0.5 bg-gray-600 mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-8 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>

          {/* Логотип */}
          <div className="flex flex-col items-center">
            <Image
              src={logo}
              alt="Culinar"
              width={119}
              height={119}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-xs text-gray-600">Baklava & Feinkost</div>
            </div>
          </div>

          {/* Навигация для ПК */}
          <nav className="hidden md:flex gap-8">
            {[
              { href: '#home', label: 'Home' },
              { href: '#ProductGallery', label: 'Produkte' },
              { href: '#about', label: 'Über Uns' },
              { href: '#contact', label: 'Kontakt' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button для ПК */}
          <a
            href="tel:+4917663856269"
            className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors font-semibold"
          >
            Jetzt bestellen
          </a>

          {/* CTA Button для мобильных */}
          <a
            href="tel:+4917663856269"
            className="md:hidden bg-primary text-white px-3 py-2 rounded-lg hover:bg-secondary transition-colors font-semibold text-sm"
          >
            Bestellen
          </a>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              {[
                { href: '#home', label: 'Home' },
                { href: '#ProductGallery', label: 'Produkte' },
                { href: '#about', label: 'Über Uns' },
                { href: '#contact', label: 'Kontakt' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
