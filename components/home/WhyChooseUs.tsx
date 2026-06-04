import { Package, Truck, Heart, Gift } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Heart,
      title: 'Halal & Cruelty Free Beauty',
      description: 'All our products are certified halal and ethically sourced. We never test on animals and use only the finest cruelty-free ingredients.',
    },
    {
      icon: Truck,
      title: 'Fast Pakistan-wide Delivery',
      description: 'Delivery within 3-5 days across all of Pakistan. Free shipping on orders above Rs.500. Track your order in real-time.',
    },
    {
      icon: Gift,
      title: 'Affordable Prices',
      description: 'Premium quality essentials starting from just Rs.150. Beautiful items that dont break the bank. Enjoy discounts on bulk orders.',
    },
    {
      icon: Package,
      title: 'Cute Packaging',
      description: 'Every order arrives in adorable cherry burgundy packaging. Perfect for gifting or keeping for yourself. Unboxing experience that makes you smile.',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A1E24] mb-4">
            Why CherryCore?
          </h2>
          <div className="h-1 w-20 bg-[#FFB3C1] mx-auto mb-6 rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-[#FFF8F9] border-2 border-[#FFB3C1] rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-[#7A1E24] group-hover:bg-[#FFB3C1] transition-colors duration-300">
                    <Icon size={32} className="text-white group-hover:text-[#7A1E24] transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-[#7A1E24] mb-3 text-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B3D42] font-light leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
