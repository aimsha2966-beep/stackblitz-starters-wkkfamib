import { PRODUCTS } from '@/lib/products'
import ProductCard from './ProductCard'
import Link from 'next/link'

export default function BestSellers() {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 8)

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF0F3]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A1E24] mb-4">
            Our Bestsellers
          </h2>
          <div className="h-1 w-20 bg-[#FFB3C1] mx-auto mb-6 rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {bestSellers.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-[#FFB3C1] hover:bg-[#FF99AD] text-[#7A1E24] font-bold rounded-full transition-colors duration-300"
          >
            Shop All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  )
}
