'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, MessageCircle, Star } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id));

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
    addItem(product, 1);
  };

  const whatsappMessage = `Hi CherryCore.pk! I would like to order ${product.name} (Rs.${product.price.toLocaleString()}).`;
  const whatsappUrl = `https://wa.me/923209548892?text=${encodeURIComponent(whatsappMessage)}`;

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="product-card group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 w-full bg-[#FFF0F3] overflow-hidden rounded-t-2xl">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </Link>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-[#C82040] text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discountPercentage}%
          </div>
        )}

        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {discountPercentage === 0 && product.isNew && (
            <span className="bg-[#7A1E24] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">NEW</span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#D4A853] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">BESTSELLER</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-110 z-10 shadow-sm"
        >
          <Heart
            size={16}
            className={`transition-colors duration-300 ${isWishlisted ? 'fill-[#C82040] text-[#C82040]' : 'text-[#7A1E24]'}`}
          />
        </button>

        {/* Quick Add Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#7A1E24]/80 via-[#7A1E24]/20 to-transparent flex items-end p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-white text-[#7A1E24] font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#FFF0F3] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={15} />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 bg-white">
        <p className="text-xs font-semibold text-[#C82040]/70 uppercase tracking-widest mb-1">
          {product.category}
        </p>

        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-[#3D1012] mb-2 line-clamp-2 hover:text-[#C82040] transition-colors duration-300 leading-snug">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              className={`${i < Math.floor(product.rating) ? 'fill-[#D4A853] text-[#D4A853]' : 'text-gray-200'}`}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-[#7A1E24]">Rs.{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">Rs.{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="p-2 rounded-full bg-[#FFF0F3] text-[#7A1E24] hover:bg-[#C82040] hover:text-white transition-all duration-300">
              <MessageCircle size={15} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
