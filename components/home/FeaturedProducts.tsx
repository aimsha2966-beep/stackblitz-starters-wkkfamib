import { PRODUCTS } from '@/lib/products'
import ProductCard from './ProductCard'
import Link from 'next/link'

export default function FeaturedProducts() {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 8)

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A1E24] mb-4">
            Featured Picks
          </h2>
          <div className="h-1 w-20 bg-[#7A1E24] mx-auto mb-6 rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-[#7A1E24] hover:bg-[#5A1418] text-white font-bold rounded-full transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
