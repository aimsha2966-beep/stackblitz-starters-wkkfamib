'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '@/lib/types';

// Coupon definitions
const COUPONS: Record<string, number> = {
  CHERRY10: 0.10,
  WELCOME15: 0.15,
  GIRLY20: 0.20,
};

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  discount: number;
  coupon: string | null;
  shipping: number;
}

interface CartContextType {
  state: CartState;
  addItem: (product: Product, quantity?: number, customization?: CartItem['customization']) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'cherrycore_cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<CartState>({
    items: [],
    total: 0,
    itemCount: 0,
    discount: 0,
    coupon: null,
    shipping: 0,
  });

  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        setState(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
    }
  }, [state, isHydrated]);

  // Calculate totals
  const calculateTotals = (items: CartItem[], coupon: string | null) => {
    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const discountPercentage = coupon ? COUPONS[coupon] || 0 : 0;
    const discountAmount = subtotal * discountPercentage;
    const shipping = subtotal - discountAmount >= 1500 ? 0 : 200;
    const total = subtotal - discountAmount + shipping;

    return {
      subtotal,
      discount: discountAmount,
      shipping,
      total,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    };
  };

  const addItem = (product: Product, quantity = 1, customization?: CartItem['customization']) => {
    setState((prevState) => {
      const existingItem = prevState.items.find((item) => item.product.id === product.id);

      let newItems: CartItem[];
      if (existingItem) {
        newItems = prevState.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...prevState.items, { product, quantity, customization }];
      }

      const totals = calculateTotals(newItems, prevState.coupon);
      return {
        ...prevState,
        items: newItems,
        total: totals.total,
        itemCount: totals.itemCount,
        discount: totals.discount,
        shipping: totals.shipping,
      };
    });
  };

  const removeItem = (productId: string) => {
    setState((prevState) => {
      const newItems = prevState.items.filter((item) => item.product.id !== productId);
      const totals = calculateTotals(newItems, prevState.coupon);

      return {
        ...prevState,
        items: newItems,
        total: totals.total,
        itemCount: totals.itemCount,
        discount: totals.discount,
        shipping: totals.shipping,
      };
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setState((prevState) => {
      const newItems = prevState.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      const totals = calculateTotals(newItems, prevState.coupon);

      return {
        ...prevState,
        items: newItems,
        total: totals.total,
        itemCount: totals.itemCount,
        discount: totals.discount,
        shipping: totals.shipping,
      };
    });
  };

  const clearCart = () => {
    setState({
      items: [],
      total: 0,
      itemCount: 0,
      discount: 0,
      coupon: null,
      shipping: 0,
    });
  };

  const applyCoupon = (code: string): boolean => {
    const upperCode = code.toUpperCase();
    if (!COUPONS[upperCode]) {
      return false;
    }

    setState((prevState) => {
      const totals = calculateTotals(prevState.items, upperCode);
      return {
        ...prevState,
        coupon: upperCode,
        total: totals.total,
        discount: totals.discount,
        shipping: totals.shipping,
      };
    });

    return true;
  };

  const removeCoupon = () => {
    setState((prevState) => {
      const totals = calculateTotals(prevState.items, null);
      return {
        ...prevState,
        coupon: null,
        total: totals.total,
        discount: totals.discount,
        shipping: totals.shipping,
      };
    });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
