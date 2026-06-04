'use client'

import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { Heart, Star } from 'lucide-react'

export default function Hero() {
  const { language } = useLanguage()

  const isUrdu = language === 'ur'

  const headingEn = 'Soft Girl Essentials, Delivered Across Pakistan'
  const headingUr = 'نرم لڑکی کی ضروریات، پورے پاکستان میں پہنچائی جائے'
  const heading = isUrdu ? headingUr : headingEn

  const shopNowEn = 'Shop Now'
  const shopNowUr = 'ابھی خریدیں'
  const shopNow = isUrdu ? shopNowUr : shopNowEn

  const customOrderEn = 'Custom Order'
  const customOrderUr = 'حسب ضرورت آرڈر'
  const customOrder = isUrdu ? customOrderUr : customOrderEn

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A1E24] via-[#A63A42] to-[#FFB3C1]" />

      {/* Floating Decorative Shapes */}
      <div className="absolute top-20 left-10 text-[#FFB3C1] opacity-40 animate-float">
        <Heart size={80} fill="#FFB3C1" />
      </div>
      <div className="absolute top-40 right-20 text-[#D4A853] opacity-30 animate-float" style={{ animationDelay: '2s' }}>
        <Star size={60} fill="#D4A853" />
      </div>
      <div className="absolute bottom-32 left-20 text-[#FFB3C1] opacity-20 animate-float" style={{ animationDelay: '4s' }}>
        <Heart size={50} fill="#FFB3C1" />
      </div>
      <div className="absolute top-1/2 right-40 text-[#D4A853] opacity-25 animate-float" style={{ animationDelay: '3s' }}>
        <Star size={70} fill="#D4A853" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-8 leading-tight max-w-4xl">
          {heading}
        </h1>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-12 justify-center items-center">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-[#FFB3C1]">1000+</p>
            <p className="text-white text-sm sm:text-base">{isUrdu ? 'خوش حال صارفین' : 'Happy Customers'}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-[#D4A853]">6</p>
            <p className="text-white text-sm sm:text-base">{isUrdu ? 'زمرے' : 'Categories'}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-[#FFB3C1]">4.9★</p>
            <p className="text-white text-sm sm:text-base">{isUrdu ? 'اوسط درجہ بندی' : 'Average Rating'}</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/shop"
            className="px-8 py-3 bg-[#FFB3C1] hover:bg-[#FF99AD] text-[#7A1E24] font-bold rounded-full transition-colors duration-300 text-center"
          >
            {shopNow}
          </Link>
          <Link
            href="/custom-order"
            className="px-8 py-3 bg-white hover:bg-[#FFF8F9] text-[#7A1E24] font-bold rounded-full transition-colors duration-300 border-2 border-white text-center"
          >
            {customOrder}
          </Link>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFF8F9"
            d="M0,40 Q120,20 240,40 T480,40 T720,40 T960,40 T1200,40 T1440,40 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </div>
  )
}
