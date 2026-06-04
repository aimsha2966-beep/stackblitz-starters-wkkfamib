import { Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function InstagramGallery() {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'CherryCore Beauty 1',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/3189139/pexels-photo-3189139.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'CherryCore Beauty 2',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'CherryCore Beauty 3',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'CherryCore Beauty 4',
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'CherryCore Beauty 5',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/5750980/pexels-photo-5750980.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'CherryCore Beauty 6',
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'CherryCore Beauty 7',
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'CherryCore Beauty 8',
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'CherryCore Beauty 9',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8F9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A1E24] mb-4">
            Follow Us on Instagram
          </h2>
          <div className="h-1 w-20 bg-[#FFB3C1] mx-auto mb-6 rounded-full" />
          <p className="text-[#6B3D42] text-lg max-w-2xl mx-auto font-light mb-8">
            See our latest products, customer moments, and exclusive sneak peeks
          </p>
          <a
            href="https://instagram.com/cherrycore.pk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#7A1E24] hover:bg-[#5A1418] text-white font-bold rounded-full transition-colors duration-300">
              <Instagram size={20} />
              @cherrycore.pk
            </button>
          </a>
        </div>

        {/* Instagram Gallery Grid - 3x3 */}
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {galleryImages.map((image, index) => (
            <a
              key={image.id}
              href="https://instagram.com/cherrycore.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              {/* Image */}
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A1E24]/80 via-[#7A1E24]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Instagram size={40} className="text-white mb-2 mx-auto" />
                  <p className="text-white font-semibold text-xs sm:text-sm">View on Instagram</p>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-[#FFB3C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
