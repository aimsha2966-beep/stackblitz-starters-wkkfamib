'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id));

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.inStock) addItem(product, 1);
  };

  return (
    <div className="group h-full">
      <Link href={`/product/${product.id}`}>
        <div
          className="relative overflow-hidden rounded-2xl bg-white border border-[#FFD6DE] transition-all duration-300 hover:shadow-xl hover:shadow-[#C82040]/10 hover:-translate-y-1 h-full flex flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative w-full aspect-square overflow-hidden bg-[#FFF0F3]">
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
              {product.isNew && (
                <Badge className="bg-[#7A1E24] hover:bg-[#5C1A1E] text-white text-xs px-2 py-0.5 rounded-full">New</Badge>
              )}
              {product.isBestSeller && (
                <Badge className="bg-[#D4A853] hover:bg-[#A8832E] text-white text-xs px-2 py-0.5 rounded-full">Bestseller</Badge>
              )}
              {discountPercent > 0 && (
                <Badge className="bg-[#C82040] hover:bg-[#A81835] text-white text-xs px-2 py-0.5 rounded-full">-{discountPercent}%</Badge>
              )}
            </div>

            {/* Wishlist */}
            <button
              onClick={toggleWishlist}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:scale-110 transition-all duration-200"
            >
              <Heart
                size={14}
                className={isWishlisted ? 'fill-[#C82040] text-[#C82040]' : 'text-[#7A1E24]'}
              />
            </button>

            {/* Stock Status */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-10">
                <span className="text-[#7A1E24] font-semibold text-sm bg-white px-4 py-2 rounded-full shadow">Out of Stock</span>
              </div>
            )}

            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />

            {/* Hover Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-[#7A1E24]/70 via-transparent to-transparent flex items-end p-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-white text-[#7A1E24] font-semibold py-2 rounded-full flex items-center justify-center gap-1.5 text-xs hover:bg-[#FFF0F3] transition-colors disabled:opacity-50"
              >
                <ShoppingCart size={13} />
                Add to Cart
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-3.5 flex-1 flex flex-col gap-2">
            <p className="text-xs text-[#C82040]/70 font-medium uppercase tracking-wider">{product.category}</p>

            <h3 className="font-serif font-semibold text-sm line-clamp-2 text-[#3D1012] group-hover:text-[#C82040] transition-colors duration-300 leading-snug">
              {product.name}
            </h3>

            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-[#D4A853] text-[#D4A853]' : 'text-gray-200'} />
              ))}
              <span className="text-xs text-gray-400 ml-1">({product.reviewCount})</span>
            </div>

            <div className="flex items-baseline gap-2 mt-auto">
              <span className="text-base font-bold text-[#7A1E24]">Rs.{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">Rs.{product.originalPrice.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
