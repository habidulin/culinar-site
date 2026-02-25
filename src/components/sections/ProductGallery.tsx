"use client";

import { useState } from 'react';
import Image from 'next/image';
import { productCategories } from '@/data/products'
import { allProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Product } from '@/data/products'

interface WeightSelectorProps {
  product: Product;
  selectedWeight: string;
  onWeightChange: (weight: string, price: string) => void;
}

function WeightSelector({ product, selectedWeight, onWeightChange }: WeightSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!product.weightOptions || product.weightOptions.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-lg font-medium text-primary hover:text-secondary transition-colors"
      >
        {selectedWeight}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[120px]">
            {product.weightOptions.map((option) => (
              <button
                key={option.weight}
                onClick={() => {
                  onWeightChange(option.weight, option.price);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                  selectedWeight === option.weight ? 'bg-gray-50 font-semibold' : ''
                }`}
              >
                <div className="flex justify-between items-center gap-2">
                  <span>{option.weight}</span>
                  <span className="text-primary font-semibold">{option.price}</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [productWeights, setProductWeights] = useState<Record<string, { weight: string; price: string }>>({});
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const getProductWeight = (productId: string, product: Product) => {
    if (!productWeights[productId] && product.weightOptions && product.weightOptions.length > 0) {
      return {
        weight: product.weightOptions[0].weight,
        price: product.weightOptions[0].price
      };
    }
    return productWeights[productId] || { weight: '', price: product.price };
  };

  const handleWeightChange = (productId: string, weight: string, price: string) => {
    setProductWeights(prev => ({
      ...prev,
      [productId]: { weight, price }
    }));
  };

  const handleAddToCart = (product: Product) => {
    const { weight, price } = getProductWeight(product.id, product);
    addToCart({
      id: product.id,
      name: product.name,
      price: price,
      category: product.category,
      weight: weight || undefined
    });
  };

  return (
    <section id="ProductGallery" className="py-20 bg-white">
      <div className="container mx-auto px-3">

        {/* Заголовок секции */}
        <div className="text-center mb-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Handgemacht</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Unsere Köstlichkeiten
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere vollständige Speisekarte
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2 py-1 rounded-lg font-semibold ${
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
              className={`px-3 py-1 rounded-lg font-semibold border transition-colors ${
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
              <div className="aspect-square bg-accent rounded-lg mb-1 overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority={false}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl">
                      {product.category === 'baklava' && '🍯'}
                      {product.category === 'kumpir' && '🥔'}
                      {product.category === 'oliven' && '🫒'}
                      {product.category === 'antipasti' && '🧀'}
                    </span>
                  </div>
                )}
              </div>

              {/* Информация о продукте */}
              <div className="space-y-1 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-900">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {product.description}
                </p>

                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-bold text-primary">
                      {getProductWeight(product.id, product).price}
                    </div>
                    <WeightSelector
                      product={product}
                      selectedWeight={getProductWeight(product.id, product).weight}
                      onWeightChange={(weight, price) => handleWeightChange(product.id, weight, price)}
                    />
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-primary text-white px-2 py-1 text-sm rounded-lg hover:bg-secondary transition-colors font-semibold"
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
