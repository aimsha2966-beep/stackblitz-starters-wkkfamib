'use client';

import React from 'react';
import { CartProvider } from './CartContext';
import { WishlistProvider } from './WishlistContext';
import { LanguageProvider } from './LanguageContext';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <LanguageProvider>
      <CartProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CartProvider>
    </LanguageProvider>
  );
}
