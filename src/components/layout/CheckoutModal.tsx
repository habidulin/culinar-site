'use client'

import { useCart } from '@/context/CartContext'
import { useState } from 'react'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

type DeliveryMethod = 'pickup' | 'delivery'

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, totalPrice, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('pickup')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Имитация отправки заказа
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      clearCart()
      
      // Автоматическое закрытие через 3 секунды
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
      }, 3000)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Расчет стоимости доставки
  const deliveryCost = deliveryMethod === 'delivery' ? 3.50 : 0
  const finalPrice = totalPrice + deliveryCost

  // Если модалка закрыта - не рендерим ничего
  if (!isOpen) {
    return null
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="text-center py-8 px-6">
            <span className="text-6xl">🎉</span>
            <h2 className="text-2xl font-semibold text-primary mt-4">Vielen Dank für Ihre Bestellung!</h2>
            <p className="text-gray-600 mt-2">
              Wir haben Ihre Bestellung erhalten und werden uns in Kürze bei Ihnen melden.
            </p>
            <button 
              onClick={onClose}
              className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Schließen
            </button>
          </div>
        ) : (
          <>
            {/* Заголовок с кнопкой закрытия */}
            <div className="bg-primary text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Bestellung abschließen</h2>
                <button 
                  onClick={onClose}
                  className="text-white/90 hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Выбор способа получения */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">Wie möchten Sie Ihre Bestellung erhalten?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Самовывоз */}
                  <label className={`cursor-pointer border rounded-lg p-4 transition-all ${
                    deliveryMethod === 'pickup' 
                      ? 'border-primary bg-accent' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery"
                        value="pickup"
                        checked={deliveryMethod === 'pickup'}
                        onChange={(e) => setDeliveryMethod(e.target.value as DeliveryMethod)}
                        className="text-primary focus:ring-primary"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">🏪</span>
                          <div>
                            <div className="font-bold text-gray-900">Selbstabholung</div>
                            <div className="text-sm text-gray-600">Kostenlos • 15-20 Minuten</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          Babelsberg Str. 16, 14473 Potsdam
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Доставка */}
                  <label className={`cursor-pointer border rounded-lg p-4 transition-all ${
                    deliveryMethod === 'delivery' 
                      ? 'border-primary bg-accent' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery"
                        value="delivery"
                        checked={deliveryMethod === 'delivery'}
                        onChange={(e) => setDeliveryMethod(e.target.value as DeliveryMethod)}
                        className="text-primary focus:ring-primary"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">🚗</span>
                          <div>
                            <div className="font-bold text-gray-900">Lieferung</div>
                            <div className="text-sm text-gray-600">+3,50 € • 30-45 Minuten</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          Innerhalb von 5km um Potsdam
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Левая колонка - товары */}
                <div>
                  <h3 className="font-bold text-lg mb-2">Ihre Bestellung</h3>
                  <div className="space-y-2 max-h-70 overflow-y-auto">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between items-center bg-accent p-3 rounded border border-primary/10">
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.quantity} × {item.price}</div>
                        </div>
                        <div className="font-bold">
                          {(parseFloat(item.price.replace('€', '').replace(',', '.').trim()) * item.quantity).toFixed(2)} €
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t mt-4 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Zwischensumme:</span>
                      <span>{totalPrice.toFixed(2)} €</span>
                    </div>
                    
                    {deliveryMethod === 'delivery' && (
                      <div className="flex justify-between text-sm">
                        <span>Lieferkosten:</span>
                        <span>+{deliveryCost.toFixed(2)} €</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-xl font-semibold border-t pt-2">
                      <span>Gesamtsumme:</span>
                      <span>{finalPrice.toFixed(2)} €</span>
                    </div>
                  </div>
                </div>

                {/* Правая колонка - форма */}
                <div>
                  <h3 className="font-bold text-lg mb-4">Kontaktdaten</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-0"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">E-Mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-0"
                        placeholder="ihre@email.de"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-0"
                        placeholder="+49 123 456789"
                      />
                    </div>
                    
                    {/* Показываем поле адреса только для доставки */}
                    {deliveryMethod === 'delivery' && (
                      <div>
                        <label className="block text-sm font-medium mb-1">Lieferadresse *</label>
                        <input
                          type="text"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-0"
                          placeholder="Straße, Hausnummer, PLZ, Stadt"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Lieferung innerhalb von 5km um Potsdam
                        </p>
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Nachricht (optional)</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-0"
                        placeholder="Besondere Wünsche oder Anmerkungen..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || items.length === 0}
                      className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-secondary disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? 'Wird gesendet...' : `📦 Bestellung bestätigen (${finalPrice.toFixed(2)} €)`}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
