// import { MessageCircle, Star, Truck, Trophy } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Müller',
      rating: 5,
      text: 'Die beste Baklava, die ich je gegessen habe! Absolute Weltklasse und der Service ist unglaublich freundlich.',
      verified: true
    },
    {
      id: 2,
      name: 'Thomas Weber',
      rating: 5, 
      text: 'Regelmäßiger Kunde seit Jahren. Die Qualität ist immer top und die Oliven-Auswahl fantastisch!',
      verified: true
    },
    {
      id: 3,
      name: 'Fatma Yildiz',
      rating: 5,
      text: 'Schmeckt wie bei meiner Oma in der Türkei! Authentisch, frisch und mit Liebe gemacht.',
      verified: true
    },
    {
      id: 4,
      name: 'Markus Hofman',
      rating: 5,
      text: 'Der Kumpir ist der Hammer! Frische Zutaten und mega Geschmack. Immer wieder!',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Schmidt',
      rating: 5,
      text: 'Tolle Auswahl an Feinkost. Besonders das Tzatziki ist einmalig cremig und lecker!',
      verified: true
    }
  ]

  // const trustItems = [
  //   { icon: <MessageCircle className="w-12 h-12 text-primary" />, label: '500+ Zufriedene Kunden' },
  //   { icon: <Star className="w-12 h-12 text-primary" />, label: '5,0 Sterne Bewertung' },
  //   { icon: <Truck className="w-12 h-12 text-primary" />, label: 'Frische täglich' },
  //   { icon: <Trophy className="w-12 h-12 text-primary" />, label: 'Beste Qualität' }
  // ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-3">
        
        {/* Заголовок */}
        <div className="text-center mb-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Stimmen</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Kundenbewertungen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Das sagen unsere Gäste über Culinar
          </p>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-12">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-xl p-2 border border-gray-200 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500">
                      {'★'.repeat(review.rating)}
                    </div>                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-1">
                {review.text}
              </p>
            </div>
          ))}
          
          {/* CTA карточка */}
          {/* <div className="bg-accent rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ihre Meinung zählt!</h3>
            <p className="text-gray-600 text-sm mb-6">
              Teilen Sie Ihre Erfahrungen mit anderen Kunden
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
              Bewertung schreiben
            </button>
          </div> */}
        </div>

        {/* Доверительные элементы */}
        {/* <div className="grid grid-cols-3 md:grid-cols-4 gap-3 text-center max-w-4xl mx-auto">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex justify-center mb-2">{item.icon}</div>
              <span className="text-gray-700 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}