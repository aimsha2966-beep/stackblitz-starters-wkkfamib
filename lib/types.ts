// Product Types
export interface Product {
  id: string;
  name: string;
  nameUrdu: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  description: string;
  descriptionUrdu: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew: boolean;
  isBestSeller: boolean;
  isFeatured: boolean;
  material: string;
  dimensions?: string;
  customizable: boolean;
  tags: string[];
  weight?: string;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  nameUrdu: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

// Review Types
export interface Review {
  id: string;
  productId: string;
  customerName: string;
  city: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
  customization?: {
    text?: string;
    color?: string;
    engraving?: string;
    [key: string]: any;
  };
}

// Wishlist Types
export interface WishlistItem {
  product: Product;
  addedAt: string;
}

// Order Types
export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  payment: {
    method: "cod" | "card" | "bank_transfer";
    status: "pending" | "completed" | "failed";
    transactionId?: string;
  };
  shipping: {
    courier: string;
    trackingNumber?: string;
    estimatedDelivery?: string;
    deliveredDate?: string;
  };
  orderDate: string;
  notes?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  date: string;
  productBought: string;
  image?: string;
}
