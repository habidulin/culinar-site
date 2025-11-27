'use client'

import { useCart } from '@/context/CartContext'
import { useState } from 'react'

interface CartProps {
  onOpenCheckout: () => void
}

export default function Cart({ onOpenCheckout }: CartProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenCheckout = () => {
    setIsOpen(false)
    onOpenCheckout()
  }

  if (!isOpen) {
    return (
      <>
        {/* Кнопка WhatsApp */}
        <button 
          onClick={() => window.open('https://wa.me/49123456789', '_blank')}
          className="fixed bottom-24 right-3 bg-[#25D366] text-white w-11 h-11 rounded-xl hover:bg-[#128C7E] transition-colors z-50 flex items-center justify-center shadow-xl"
          title="WhatsApp Bestellung"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
          </svg>
        </button>

        {/* Кнопка корзины */}
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-9 right-3 bg-white text-primary w-12 h-12 rounded-xl hover:bg-gray-100 transition-colors z-50 flex items-center justify-center border-2 shadow-xl"
        >
          <span className="text-2xl">🛒</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full min-w-5 h-5 flex items-center justify-center text-xs font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-2">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
        {/* Заголовок */}
        <div className="bg-primary text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Ihr Warenkorb</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
          <p className="opacity-90">{totalItems} Artikel im Warenkorb</p>
        </div>

        {/* Содержимое корзины */}
        <div className="p-3 max-h-96 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-8 bg-gray-30 rounded-lg">
              <span className="text-6xl">🛒</span>
              <p className="text-gray-600 mt-4">Ihr Warenkorb ist leer</p>
            </div>
          ) : (
            <div className="space-y-2">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-3 bg-accent rounded-lg p-2 border border-primary/10">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-primary font-semibold">{item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-white border border-gray-200 rounded-full hover:border-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="font-semibold w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-white border border-gray-200 rounded-full hover:border-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Итого и кнопка */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between text-xl font-semibold">
              <span>Gesamtsumme:</span>
              <span>{totalPrice.toFixed(2)} €</span>
            </div>
            
            <button 
              onClick={handleOpenCheckout}
              className="w-full bg-primary text-white py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              📦 Zur Kasse gehen
            </button>
          </div>
        )}
      </div>
    </div>
  )
}