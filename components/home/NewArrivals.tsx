'use client'

import { useState } from 'react'
import { PRODUCTS } from '@/lib/products'
import ProductCard from './ProductCard'

export default function NewArrivals() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const allNewArrivals = PRODUCTS.filter(p => p.isNew)

  const categories = ['Jewelry', 'Hair', 'Beauty', 'Nails', 'Gifts']

  const filteredProducts = selectedCategory
    ? allNewArrivals.filter(p => p.category === selectedCategory).slice(0, 8)
    : allNewArrivals.slice(0, 8)

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A1E24] mb-4">
            Fresh Drops
          </h2>
          <div className="h-1 w-20 bg-[#D4A853] mx-auto mb-6 rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
              selectedCategory === null
                ? 'bg-[#7A1E24] text-white'
                : 'bg-[#FFF0F3] text-[#7A1E24] hover:bg-[#FFB3C1]'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-[#7A1E24] text-white'
                  : 'bg-[#FFF0F3] text-[#7A1E24] hover:bg-[#FFB3C1]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid - Horizontal scroll on mobile, grid on desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {filteredProducts.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden mb-12 overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-min px-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="w-64 flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
