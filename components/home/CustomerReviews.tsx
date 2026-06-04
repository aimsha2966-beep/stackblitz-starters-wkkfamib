'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/testimonials'

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setAutoPlay(false)
  }

  const displayedReview = TESTIMONIALS[currentIndex]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A1E24] mb-4">
            What Girls Are Saying
          </h2>
          <div className="h-1 w-20 bg-[#D4A853] mx-auto mb-6 rounded-full" />
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-2xl mx-auto">
          {/* Review Card */}
          <div className="bg-[#FFF8F9] border-2 border-[#FFB3C1] rounded-2xl p-8 md:p-12 relative">
            {/* Stars */}
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${i < displayedReview.rating ? 'fill-[#D4A853] text-[#D4A853]' : 'text-gray-300'}`}
                />
              ))}
            </div>

            {/* Comment */}
            <p className="text-[#3D1012] text-center mb-6 font-light leading-relaxed text-lg italic">
              "{displayedReview.comment}"
            </p>

            {/* Customer Info */}
            <div className="border-t border-[#FFB3C1] pt-6 text-center">
              <h4 className="font-bold text-[#7A1E24] text-lg">
                {displayedReview.name}
              </h4>
              <p className="text-[#D4A853] text-sm font-medium mb-2">
                {displayedReview.city}, Pakistan
              </p>
              <p className="text-gray-600 text-xs">
                Purchased: {displayedReview.productBought}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-20 bg-[#7A1E24] hover:bg-[#5A1418] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-20 bg-[#7A1E24] hover:bg-[#5A1418] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#7A1E24] w-8'
                  : 'bg-[#FFB3C1] w-2 hover:bg-[#FF99AD]'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
