'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/lib/types';

interface WishlistState {
  items: Product[];
}

interface WishlistContextType {
  state: WishlistState;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const WISHLIST_STORAGE_KEY = 'resin_wishlist';

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<WishlistState>({
    items: [],
  });

  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (savedWishlist) {
      try {
        setState(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Failed to load wishlist from localStorage:', error);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(state));
    }
  }, [state, isHydrated]);

  const addToWishlist = (product: Product) => {
    setState((prevState) => {
      const exists = prevState.items.some((item) => item.id === product.id);
      if (exists) return prevState;
      return {
        items: [...prevState.items, product],
      };
    });
  };

  const removeFromWishlist = (productId: string) => {
    setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== productId),
    }));
  };

  const isInWishlist = (productId: string): boolean => {
    return state.items.some((item) => item.id === productId);
  };

  const clearWishlist = () => {
    setState({
      items: [],
    });
  };

  return (
    <WishlistContext.Provider
      value={{
        state,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
};
