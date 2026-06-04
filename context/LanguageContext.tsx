'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ur';

interface Translations {
  [key: string]: {
    en: string;
    ur: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { en: 'Home', ur: 'ہوم' },
  shop: { en: 'Shop', ur: 'شاپ' },
  about: { en: 'About', ur: 'ہمارے بارے میں' },
  contact: { en: 'Contact', ur: 'رابطہ' },
  gallery: { en: 'Gallery', ur: 'گیلری' },
  cart: { en: 'Cart', ur: 'کارٹ' },
  wishlist: { en: 'Wishlist', ur: 'خواہشات کی فہرست' },
  customOrder: { en: 'Custom Order', ur: 'حسب ضرورت آرڈر' },
  // Product Actions
  addToCart: { en: 'Add to Cart', ur: 'کارٹ میں شامل کریں' },
  buyNow: { en: 'Buy Now', ur: 'ابھی خریدیں' },
  orderOnWhatsApp: { en: 'Order on WhatsApp', ur: 'واٹس ایپ پر آرڈر کریں' },
  addToWishlist: { en: 'Add to Wishlist', ur: 'خواہشات میں شامل کریں' },
  removeFromWishlist: { en: 'Remove', ur: 'ہٹائیں' },
  removeFromCart: { en: 'Remove', ur: 'ہٹائیں' },
  moveToCart: { en: 'Move to Cart', ur: 'کارٹ میں منتقل کریں' },
  // Shop Filters
  search: { en: 'Search products...', ur: 'مصنوعات تلاش کریں...' },
  filter: { en: 'Filter', ur: 'فلٹر' },
  sortBy: { en: 'Sort By', ur: 'ترتیب دیں' },
  filters: { en: 'Filters', ur: 'فلٹرز' },
  clearAll: { en: 'Clear All', ur: 'سب صاف کریں' },
  categories: { en: 'Categories', ur: 'زمرے' },
  priceRange: { en: 'Price Range', ur: 'قیمت کی حد' },
  inStockOnly: { en: 'In Stock Only', ur: 'صرف اسٹاک میں' },
  newArrivalsOnly: { en: 'New Arrivals Only', ur: 'صرف نئی آمد' },
  bestSellersOnly: { en: 'Best Sellers Only', ur: 'صرف زیادہ فروخت' },
  // Product Badges
  featured: { en: 'Featured', ur: 'خاص' },
  bestSeller: { en: 'Best Seller', ur: 'زیادہ فروخت' },
  newArrival: { en: 'New', ur: 'نئی' },
  sale: { en: 'Sale', ur: 'سیل' },
  customizable: { en: 'Customizable', ur: 'قابل تبدیل' },
  // Product Details
  readMore: { en: 'View Details', ur: 'تفصیل دیکھیں' },
  price: { en: 'Price', ur: 'قیمت' },
  rating: { en: 'Rating', ur: 'درجہ بندی' },
  description: { en: 'Description', ur: 'تفصیل' },
  material: { en: 'Material', ur: 'مواد' },
  dimensions: { en: 'Dimensions', ur: 'ناپ' },
  inStock: { en: 'In Stock', ur: 'دستیاب' },
  outOfStock: { en: 'Out of Stock', ur: 'ختم' },
  quantity: { en: 'Quantity', ur: 'تعداد' },
  reviews: { en: 'Reviews', ur: 'تجربات' },
  writeReview: { en: 'Write a Review', ur: 'تجربہ لکھیں' },
  category: { en: 'Category', ur: 'زمرہ' },
  // Cart / Checkout
  total: { en: 'Total', ur: 'کل' },
  shipping: { en: 'Shipping', ur: 'ڈیلیوری' },
  discount: { en: 'Discount', ur: 'رعایت' },
  coupon: { en: 'Coupon Code', ur: 'کوپن کوڈ' },
  applyCoupon: { en: 'Apply', ur: 'لگائیں' },
  checkout: { en: 'Checkout', ur: 'ادائیگی' },
  continueShopping: { en: 'Continue Shopping', ur: 'خریداری جاری رکھیں' },
  emptyCart: { en: 'Your cart is empty', ur: 'آپ کا کارٹ خالی ہے' },
  emptyWishlist: { en: 'Your wishlist is empty', ur: 'آپ کی خواہشات کی فہرست خالی ہے' },
  // Shipping
  freeShipping: { en: 'Free Shipping', ur: 'مفت ڈیلیوری' },
  freeShippingAbove: { en: 'Free shipping on orders above Rs.1,500', ur: 'Rs.1,500 سے زیادہ آرڈرز پر مفت ڈیلیوری' },
  shippingCost: { en: 'Rs.200 delivery', ur: 'Rs.200 ڈیلیوری' },
  // Language
  language: { en: 'Language', ur: 'زبان' },
  english: { en: 'English', ur: 'انگریزی' },
  urduLang: { en: 'اردو', ur: 'اردو' },
  // WhatsApp
  whatsappNumber: { en: '+92 320 9548892', ur: '+92 320 9548892' },
  whatsappOrder: { en: 'Hi CherryCore.pk! I would like to order this product.', ur: 'ہیلو CherryCore.pk! میں یہ پروڈکٹ آرڈر کرنا چاہتی ہوں۔' },
  // Categories
  jewelry: { en: 'Jewelry', ur: 'زیورات' },
  hairAccessories: { en: 'Hair Accessories', ur: 'بال اکسیسریز' },
  bouquetsGifts: { en: 'Bouquets & Gifts', ur: 'گلدستے اور تحائف' },
  beauty: { en: 'Beauty', ur: 'خوبصورتی' },
  pressOnNails: { en: 'Press-On Nails', ur: 'پریس آن ناخن' },
  cuteAccessories: { en: 'Cute Accessories', ur: 'پیاری اکسیسریز' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'cherrycore_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ur')) {
      setLanguage(savedLanguage);
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage whenever language changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language, isHydrated]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ur' : 'en'));
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
