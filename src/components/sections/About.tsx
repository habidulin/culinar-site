import { HandHeart, Star, Heart } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const values = [
    {
      icon: <HandHeart className="w-9 h-9 text-primary" />,
      title: 'Handgemacht',
      description: 'Jedes Stück mit Liebe per Hand zubereitet'
    },
    {
      icon: <Star className="w-9 h-9 text-primary" />,
      title: 'Beste Zutaten', 
      description: 'Hochwertige Rohstoffe'
    },
    {
      icon: <Heart className="w-9 h-9 text-primary" />,
      title: 'Mit Leidenschaft',
      description: 'Authentische türkische Küche'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          
          {/* Левая колонка - изображение */}
          <div className="bg-white rounded-xl p-2 border border-gray-200">

            {/* <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Familientradition Culinar Baklava"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div> */}

            <div className="aspect-video rounded-lg overflow-hidden relative">
              <Image
                src="/about.jpg"
                alt="Familientradition Culinar Baklava"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/40 backdrop-blur-sm p-1 text-center">
                <p className="font-semibold text-primary">
                  Familientradition seit 1995
                </p>
              </div>
            </div>

            {/* <div className="aspect-video bg-accent rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">👨‍👩‍👧‍👦</span>
                <p className="text-lg font-semibold text-primary mt-4">Familientradition seit 1995</p>
              </div>
            </div> */}

          </div>

          {/* Правая колонка - контент */}
          <div className="space-y-4">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-2 py-2 rounded-full mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Unsere Geschichte</span>
            </div> */}

            {/* Заголовок */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Tradition aus{' '}
              <span className="text-primary">Familienhand</span>
            </h2>

            {/* Основной текст */}
            <div className="space-y-2 text-lg text-gray-600 leading-relaxed">
              <p>
                Seit Generationen widmen wir uns der Kunst der türkischen Küche. 
                Was 1995 als kleiner Familienbetrieb in Istanbul begann, ist heute 
                eine feste Größe in der Potsdamer Gastronomielandschaft.
              </p>
              
              <p>
                Unser Geheimnis? Die Liebe zum Detail und die Treue zu originalen Rezepten, 
                die von Generation zu Generation weitergegeben wurden.
              </p>
            </div>

            {/* Ценности */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 py-4">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-2">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-primary mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Статистика */}
            {/* <div className="bg-accent rounded-xl p-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { number: '28+', label: 'Jahre Erfahrung' },
                  { number: '50+', label: 'Produkte' },
                  { number: '10k+', label: 'Zufriedene Kunden' },
                  { number: '3.', label: 'Generation' }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}