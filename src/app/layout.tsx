'use client'

import { useState } from 'react'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Cart from '@/components/layout/Cart'
import CheckoutModal from '@/components/layout/CheckoutModal'
import { CartProvider } from '@/context/CartContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Cart onOpenCheckout={() => setIsCheckoutOpen(true)} />
          <CheckoutModal 
            isOpen={isCheckoutOpen} 
            onClose={() => setIsCheckoutOpen(false)} 
          />
        </CartProvider>
      </body>
    </html>
  )
}
