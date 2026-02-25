'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface CartItem {
  id: string
  name: string
  price: string
  quantity: number
  category: string
  weight?: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Загрузка из localStorage при монтировании
  useEffect(() => {
    const savedCart = localStorage.getItem('culinar-cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Сохранение в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('culinar-cart', JSON.stringify(items))
  }, [items])

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      // Создаем уникальный ключ с учетом веса
      const itemKey = product.weight ? `${product.id}-${product.weight}` : product.id
      const existing = prev.find(item => {
        const existingKey = item.weight ? `${item.id}-${item.weight}` : item.id
        return existingKey === itemKey
      })
      
      if (existing) {
        return prev.map(item => {
          const existingKey = item.weight ? `${item.id}-${item.weight}` : item.id
          return existingKey === itemKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        })
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity } : item
    ))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('€', '').replace(',', '.').trim())
    return sum + (price * item.quantity)
  }, 0)

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}