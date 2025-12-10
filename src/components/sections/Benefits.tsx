import { Heart, Clock, Users, Award } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-2 text-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-2 py-2 rounded-full mb-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Unsere Werte</span>
        </div> */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Warum Culinar wählen?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Tradition meets Moderne - für unvergesslichen Geschmack
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: <Award className="w-12 h-12 text-primary" />, title: 'Premium Qualität', desc: 'Beste Zutaten aus traditioneller Herstellung' },
            { icon: <Clock className="w-12 h-12 text-primary" />, title: 'Schnelle Lieferung', desc: 'Frische Produkte in 30-45 Minuten' },
            { icon: <Heart className="w-12 h-12 text-primary" />, title: 'Familientradition', desc: '28 Jahre Erfahrung in türkischer Küche' },
            { icon: <Users className="w-12 h-12 text-primary" />, title: 'Zufriedenheit', desc: '500+ glückliche Kunden in Potsdam' }
          ].map((item, index) => (
            <div key={index} className="bg-background rounded-xl p-2 border border-gray-200">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
