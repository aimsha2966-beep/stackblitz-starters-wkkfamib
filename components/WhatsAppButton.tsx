'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const message = encodeURIComponent('Hi CherryCore.pk! I would like to order a product.');
  const whatsappUrl = `https://wa.me/923209548892?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Order on WhatsApp"
    >
      {/* Tooltip */}
      <div className={`bg-[#1A0508] text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 shadow-lg ${
        showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
      }`}>
        Order on WhatsApp
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1A0508]" style={{ right: '-8px', left: 'auto' }} />
      </div>

      {/* Button */}
      <div className="relative w-14 h-14 bg-gradient-to-br from-[#C82040] to-[#7A1E24] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-[#C82040]/30 transition-all duration-300 hover:scale-110 animate-pulse-cherry">
        <MessageCircle size={24} className="text-white" />
        {/* Ping effect */}
        <span className="absolute inset-0 rounded-full bg-[#C82040] animate-ping opacity-20" />
      </div>
    </a>
  );
}
