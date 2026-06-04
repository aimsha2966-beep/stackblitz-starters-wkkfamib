'use client';

import Link from 'next/link';
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Heart,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: language === 'en' ? 'Home' : 'ہوم', href: '/' },
    { label: language === 'en' ? 'Shop' : 'شاپ', href: '/shop' },
    { label: language === 'en' ? 'Custom Orders' : 'اپنا آرڈر', href: '/custom-order' },
    { label: language === 'en' ? 'About' : 'ہمارے بارے میں', href: '/about' },
    { label: language === 'en' ? 'Gallery' : 'گیلری', href: '/gallery' },
    { label: language === 'en' ? 'Contact' : 'رابطہ', href: '/contact' },
  ];

  const categories = [
    { label: language === 'en' ? 'Jewelry' : 'زیورات', href: '/shop?category=Jewelry' },
    { label: language === 'en' ? 'Hair Accessories' : 'بال اکسیسریز', href: '/shop?category=Hair+Accessories' },
    { label: language === 'en' ? 'Bouquets & Gifts' : 'گلدستے اور تحائف', href: '/shop?category=Bouquets+%26+Gifts' },
    { label: language === 'en' ? 'Beauty' : 'خوبصورتی', href: '/shop?category=Beauty' },
    { label: language === 'en' ? 'Press-On Nails' : 'پریس آن ناخن', href: '/shop?category=Press-On+Nails' },
    { label: language === 'en' ? 'Cute Accessories' : 'پیاری اکسیسریز', href: '/shop?category=Cute+Accessories' },
  ];

  const policies = [
    { label: language === 'en' ? 'Privacy Policy' : 'رازداری کی پالیسی', href: '/privacy' },
    { label: language === 'en' ? 'Terms & Conditions' : 'شرائط و ضوابط', href: '/terms' },
    { label: language === 'en' ? 'Shipping Policy' : 'ڈیلیوری پالیسی', href: '/shipping' },
    { label: language === 'en' ? 'Refund Policy' : 'واپسی کی پالیسی', href: '/refund' },
  ];

  const paymentMethods = ['Cash on Delivery', 'EasyPaisa', 'JazzCash', language === 'en' ? 'Bank Transfer' : 'بینک ٹرانسفر'];

  return (
    <footer className="bg-[#1A0508] text-[#FAF0F2] mt-20">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#7A1E24] via-[#C82040] to-[#FFB3C1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-block mb-4">
              <div>
                <span className="font-serif text-2xl font-bold text-white group-hover:text-[#FFB3C1] transition-colors">CherryCore</span>
                <span className="font-serif text-2xl font-bold text-[#D4A853] group-hover:text-[#F0D4A0] transition-colors">.pk</span>
              </div>
              <p className="text-xs tracking-widest text-[#FFB3C1]/60 font-medium mt-1">
                {language === 'en' ? 'SOFT GIRL ESSENTIALS' : 'پاکستان'}
              </p>
            </Link>

            <p className="text-sm text-[#FAF0F2]/50 mt-4 leading-relaxed">
              {language === 'en'
                ? 'Your one-stop shop for feminine accessories, beauty, and everything that makes you feel cute. Delivered across Pakistan.'
                : 'پاکستان بھر میں ڈیلیوری کے ساتھ آپ کی پسندیدہ اکسیسریز، خوبصورتی اور سب کچھ جو آپ کو پیارا محسوس کرائے۔'}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C82040] to-[#7A1E24] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#C82040]/30 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/923209548892"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C82040] to-[#7A1E24] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#C82040]/30 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:aimsha2966@gmail.com"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C82040] to-[#7A1E24] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#C82040]/30 transition-all duration-300 hover:scale-110"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#FFB3C1] to-[#C82040] rounded-full" />
              {language === 'en' ? 'Quick Links' : 'فوری لنکس'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FAF0F2]/50 hover:text-[#FFB3C1] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#C82040] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#FFB3C1] to-[#C82040] rounded-full" />
              {language === 'en' ? 'Categories' : 'زمرہ جات'}
            </h3>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FAF0F2]/50 hover:text-[#FFB3C1] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#C82040] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#FFB3C1] to-[#C82040] rounded-full" />
              {language === 'en' ? 'Get in Touch' : 'رابطہ کریں'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FFB3C1] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#FAF0F2]/40 uppercase tracking-wider mb-0.5">
                    {language === 'en' ? 'WhatsApp' : 'واٹس ایپ'}
                  </p>
                  <a
                    href="https://wa.me/923209548892"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#FAF0F2]/60 hover:text-[#FFB3C1] transition-colors"
                  >
                    +92 320 9548892
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#FFB3C1] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#FAF0F2]/40 uppercase tracking-wider mb-0.5">
                    {language === 'en' ? 'Email' : 'ای میل'}
                  </p>
                  <a
                    href="mailto:aimsha2966@gmail.com"
                    className="text-sm text-[#FAF0F2]/60 hover:text-[#FFB3C1] transition-colors"
                  >
                    aimsha2966@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFB3C1] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#FAF0F2]/40 uppercase tracking-wider mb-0.5">
                    {language === 'en' ? 'Location' : 'مقام'}
                  </p>
                  <p className="text-sm text-[#FAF0F2]/60">
                    {language === 'en' ? 'Pakistan-wide delivery' : 'پورے پاکستان میں ڈیلیوری'}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C82040]/40 to-transparent mb-10" />

        {/* Payment Methods */}
        <div className="mb-10">
          <h4 className="text-xs font-semibold text-white/60 mb-4 uppercase tracking-wider">
            {language === 'en' ? 'Payment Methods' : 'ادائیگی کے طریقے'}
          </h4>
          <div className="flex flex-wrap gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#FAF0F2]/60 hover:border-[#FFB3C1]/40 hover:text-[#FFB3C1] transition-all duration-300"
              >
                {method}
              </div>
            ))}
            <div className="px-4 py-2 rounded-full bg-[#C82040]/10 border border-[#C82040]/20 text-xs font-medium text-[#FFB3C1]">
              {language === 'en' ? 'Payment: 03004323930' : 'ادائیگی: 03004323930'}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C82040]/40 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#FAF0F2]/40">
            &copy; {currentYear}{' '}
            <span className="text-[#FFB3C1] font-medium">CherryCore.pk</span>
            {language === 'en' ? '. All rights reserved.' : '۔ تمام حقوق محفوظ ہیں۔'}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {policies.map((link, idx) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-xs text-[#FAF0F2]/40 hover:text-[#FFB3C1] transition-colors duration-300"
                >
                  {link.label}
                </Link>
                {idx < policies.length - 1 && (
                  <span className="text-[#FAF0F2]/20 text-xs">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-[#FAF0F2]/25 flex items-center justify-center gap-1">
          <span>{language === 'en' ? 'Made with' : 'بنایا گیا'}</span>
          <Heart size={10} className="text-[#C82040] fill-[#C82040]" />
          <span>{language === 'en' ? 'for soft girls across Pakistan' : 'پاکستان کی سافٹ گرلز کے لیے'}</span>
        </div>
      </div>
    </footer>
  );
}
