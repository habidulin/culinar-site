"use client";

import { useState } from 'react';
import { productCategories } from '@/data/products'
import { allProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Product } from '@/data/products'


export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-2">
        
        {/* Заголовок секции */}
        <div className="text-center mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Handgemacht</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Unsere Köstlichkeiten
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere vollständige Speisekarte
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-2 py-2 rounded-lg font-semibold ${
              selectedCategory === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:border-primary'
            }`}
          >
            Alle Produkte
          </button>
          {productCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-2 rounded-lg font-semibold border transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Сетка продуктов */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-2 border border-gray-200 hover:border-primary transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              
              {/* Изображение продукта */}
              <div className="aspect-square bg-accent rounded-lg mb-1 flex items-center justify-center">
                <span className="text-5xl">
                  {product.category === 'baklava' && '🍯'}
                  {product.category === 'kumpir' && '🥔'}
                  {product.category === 'oliven' && '🫒'}
                  {product.category === 'antipasti' && '🧀'}
                </span>
              </div>
              
              {/* Информация о продукте */}
              <div className="space-y-3 flex flex-col flex-grow">  {/* ← добавил */}
                <h3 className="font-semibold text-lg text-gray-900">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">  {/* ← уже есть flex-grow */}
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <div className="text-lg font-bold text-primary">
                    {product.price}
                  </div>
                  
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-primary text-white px-2 py-1 text-sm rounded-lg hover:bg-secondary transition-colors font-semibold"
                  >
                    Bestellen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}