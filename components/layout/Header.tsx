'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShoppingCart,
  Heart,
  Search,
  Menu,
  X,
  Globe,
  Phone,
  ChevronDown,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { state: cartState } = useCart();
  const { state: wishlistState } = useWishlist();
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const cartCount = cartState.items.length;
  const wishlistCount = wishlistState.items.length;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navigationLinks = [
    { href: '/', labelEn: 'Home', labelUr: 'ہوم' },
    { href: '/shop', labelEn: 'Shop', labelUr: 'شاپ' },
    { href: '/gallery', labelEn: 'Gallery', labelUr: 'گیلری' },
    { href: '/custom-order', labelEn: 'Custom Order', labelUr: 'اپنا آرڈر' },
    { href: '/about', labelEn: 'About', labelUr: 'ہمارے بارے میں' },
    { href: '/contact', labelEn: 'Contact', labelUr: 'رابطہ' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const logoClass = isScrolled
    ? 'text-[#7A1E24]'
    : 'text-white';
  const navLinkBase = isScrolled ? 'text-[#3D1012]' : 'text-white';
  const iconClass = isScrolled ? 'text-[#3D1012]' : 'text-white';

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[#7A1E24] via-[#C82040] to-[#7A1E24] text-white py-2 px-4 text-center text-xs font-medium">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span>
            {language === 'en'
              ? 'Free delivery on orders above Rs.1,500'
              : 'Rs.1,500 سے زیادہ آرڈرز پر مفت ڈیلیوری'}
          </span>
          <span className="hidden sm:inline opacity-60">|</span>
          <span className="flex items-center gap-1">
            <Phone size={12} />
            {language === 'en' ? 'WhatsApp:' : 'واٹس ایپ:'}
            {' '}+92 320 9548892
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-[#FFD6DE]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group cursor-pointer flex-shrink-0">
              <div>
                <span className={`font-serif text-2xl font-bold transition-all duration-300 group-hover:opacity-80 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-[#7A1E24] to-[#C82040] bg-clip-text text-transparent'
                    : 'text-white'
                }`}>
                  CherryCore
                </span>
                <span className={`font-serif text-2xl font-bold transition-all duration-300 ${
                  isScrolled ? 'text-[#D4A853]' : 'text-[#FFD6DE]'
                }`}>.pk</span>
                <p className={`text-xs tracking-widest font-medium transition-all duration-300 ${
                  isScrolled ? 'text-[#C82040]/70' : 'text-white/70'
                }`}>
                  {language === 'en' ? 'SOFT GIRL ESSENTIALS' : 'پاکستان'}
                </p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-7">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    pathname === link.href
                      ? isScrolled ? 'text-[#7A1E24]' : 'text-[#FFB3C1]'
                      : `${navLinkBase} hover:text-[#C82040]`
                  }`}
                >
                  {language === 'en' ? link.labelEn : link.labelUr}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#7A1E24] to-[#C82040] transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                    <input
                      type="text"
                      placeholder={language === 'en' ? 'Search...' : 'تلاش...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      onBlur={() => !searchQuery && setIsSearchOpen(false)}
                      className="w-48 px-4 py-2 rounded-full bg-white text-[#3D1012] placeholder-[#C82040]/40 focus:outline-none focus:ring-2 focus:ring-[#C82040] border border-[#FFD6DE] text-sm"
                    />
                  </form>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className={`p-2 rounded-full transition-all duration-300 hover:bg-[#FFD6DE]/40 ${iconClass}`}
                  >
                    <Search size={18} />
                  </button>
                )}
              </div>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-full transition-all duration-300 hover:bg-[#FFD6DE]/40 flex items-center gap-1 text-xs font-semibold ${iconClass}`}
              >
                <Globe size={16} />
                {language === 'en' ? 'UR' : 'EN'}
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className={`p-2 rounded-full transition-all duration-300 hover:bg-[#FFD6DE]/40 relative ${iconClass}`}
              >
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#C82040] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className={`p-2 rounded-full transition-all duration-300 hover:bg-[#FFD6DE]/40 relative ${iconClass}`}
              >
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#D4A853] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between h-16">
            <Link href="/" className="group cursor-pointer">
              <span className={`font-serif text-xl font-bold transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-[#7A1E24] to-[#C82040] bg-clip-text text-transparent'
                  : 'text-white'
              }`}>
                CherryCore
              </span>
              <span className={`font-serif text-xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-[#D4A853]' : 'text-[#FFD6DE]'
              }`}>.pk</span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/wishlist"
                className={`p-2 rounded-full relative ${iconClass}`}
              >
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#C82040] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                href="/cart"
                className={`p-2 rounded-full relative ${iconClass}`}
              >
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#D4A853] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-all duration-300 ${iconClass}`}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <form onSubmit={handleSearchSubmit} className="md:hidden pb-3">
              <input
                type="text"
                placeholder={language === 'en' ? 'Search products...' : 'مصنوعات تلاش کریں...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full px-4 py-2 rounded-full bg-white text-[#3D1012] placeholder-[#C82040]/40 focus:outline-none focus:ring-2 focus:ring-[#C82040] border border-[#FFD6DE] text-sm"
              />
            </form>
          )}
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-72 bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-6 bg-gradient-to-r from-[#7A1E24] to-[#C82040]">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-serif text-2xl font-bold text-white">CherryCore</span>
                <span className="font-serif text-2xl font-bold text-[#FFD6DE]">.pk</span>
                <p className="text-xs text-white/70 mt-0.5 tracking-widest">
                  {language === 'en' ? 'SOFT GIRL ESSENTIALS' : 'پاکستان'}
                </p>
              </Link>
            </div>

            {/* Nav Links */}
            <nav className="p-5 space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'bg-[#FFD6DE] text-[#7A1E24] font-semibold'
                      : 'text-[#3D1012] hover:bg-[#FFF0F3] hover:text-[#C82040]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'en' ? link.labelEn : link.labelUr}
                </Link>
              ))}
            </nav>

            {/* Footer actions */}
            <div className="p-5 border-t border-[#FFD6DE] space-y-3">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFF0F3] text-[#7A1E24] font-medium text-sm hover:bg-[#FFD6DE] transition-colors"
              >
                <Globe size={16} />
                {language === 'en' ? 'اردو میں دیکھیں' : 'Switch to English'}
              </button>

              <div className="text-center text-xs text-[#7A1E24]/60 pt-2">
                <p className="flex items-center justify-center gap-1">
                  <Phone size={12} />
                  WhatsApp: +92 320 9548892
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
