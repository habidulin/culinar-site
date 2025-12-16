import { productCategories } from '@/data/products'

export default function ProductCategories() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-3">
        
        {/* Заголовок секции */}
        <div className="text-center mb-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Handgemacht</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Unsere Spezialitäten
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere vielfältige Auswahl an handgemachten Köstlichkeiten
          </p>
        </div>

        {/* Сетка категорий */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-xl p-2 border border-gray-200 hover:border-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            > 
              {/* Бейдж для главной категории */}
              {/* {category.isHighlight && (
                <div className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  ⭐ Hauptprodukt
                </div>
              )} */}

              {/* Иконка категории */}
              <div className={`w-28 h-28 rounded-lg flex items-center justify-center mb-2 mx-auto ${
                category.isHighlight ? 'bg-secondary' : 'bg-primary'
              }`}>
                <span className="text-4xl text-white">
                  {category.id === 'baklava' && '🍯'}
                  {category.id === 'kumpir' && '🥔'} 
                  {category.id === 'oliven' && '🫒'}
                  {category.id === 'antipasti' && '🧀'}
                </span>
              </div>

              {/* Название и описание */}
              <h3 className="font-semibold text-gray-900 text-lg mb-2 text-center">
                {category.name}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>

              {/* Кнопка */}
              <button className="text-primary hover:text-secondary font-semibold transition-colors text-center mt-auto">
                Entdecken →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
