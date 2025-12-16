import { Smartphone, ChefHat, Truck, Smile } from 'lucide-react';

export default function HowItWorks() {

  const steps = [
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: 'Bestellen',
      description: 'Wählen Sie online Ihre Lieblingsprodukte aus'
    },
    {
      icon: <ChefHat className="w-12 h-12 text-primary" />,
      title: 'Wir bereiten vor',
      description: 'Frische Zubereitung mit besten Zutaten'
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: 'Lieferung',
      description: 'Schnelle Lieferung direkt zu Ihnen'
    },
    {
      icon: <Smile className="w-12 h-12 text-primary" />,
      title: 'Genießen',
      description: 'Frische Köstlichkeiten direkt genießen'
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-3">
        <div className="text-center mb-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Einfach & Schnell</span>
          </div> */}

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            So einfach bestellen Sie
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In 4 einfachen Schritten zu Ihren Lieblingsspeisen
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-1">{step.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}