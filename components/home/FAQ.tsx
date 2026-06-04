'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How long does delivery take?',
      answer:
        'Standard orders are delivered within 3-5 working days across Pakistan. Custom orders may take 7-10 days depending on complexity. We use reliable courier services and provide you with a tracking number so you can monitor your package every step of the way.',
    },
    {
      id: 'faq-2',
      question: 'What payment methods do you accept?',
      answer:
        'We accept multiple payment methods for your convenience: Cash on Delivery (COD) - pay when your order arrives, EasyPaisa, JazzCash, and Bank Transfer. For bank transfers, please contact us at 03004323930 for account details. Choose the method that works best for you at checkout.',
    },
    {
      id: 'faq-3',
      question: 'What is your return policy?',
      answer:
        'We offer a 7-day return/exchange policy for defective or damaged items. Please contact us within 48 hours of receiving your order if you have any issues. Custom orders cannot be returned unless there is a manufacturing defect. Returns are free if the item is damaged due to our error.',
    },
    {
      id: 'faq-4',
      question: 'Can I place a custom order?',
      answer:
        'Absolutely! We love custom orders. You can customize almost any product - from personalized jewelry to custom beauty sets. WhatsApp us your requirements at 03004323930 or use our custom order form. Our team will provide a quote and timeline within 24 hours.',
    },
    {
      id: 'faq-5',
      question: 'Do you offer wholesale prices?',
      answer:
        'Yes! We offer competitive wholesale pricing for bulk orders. Interested in reselling CherryCore products? Contact us on WhatsApp at 03004323930 or email us with your inquiry. We have special packages for retailers, boutiques, and resellers.',
    },
    {
      id: 'faq-6',
      question: 'How can I place a WhatsApp order?',
      answer:
        'Ordering on WhatsApp is super easy! Simply message us at 03004323930, browse our catalog, choose your products, and our team will send you payment details and process your order. WhatsApp ordering gets priority service and you can ask any questions directly with our team.',
    },
  ]

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A1E24] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-[#FFB3C1] mx-auto mb-6 rounded-full" />
          <p className="text-[#6B3D42] text-lg max-w-2xl mx-auto font-light">
            Have questions about CherryCore? Find answers here or reach out to our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map(faq => (
              <div
                key={faq.id}
                className="border-2 border-[#FFB3C1] rounded-xl overflow-hidden transition-all duration-300 bg-white hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#FFF0F3] transition-colors duration-200"
                >
                  <h3 className="font-bold text-[#7A1E24] text-left text-base md:text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-[#FFB3C1] transition-transform duration-300 ml-4 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                {openId === faq.id && (
                  <div className="px-6 py-4 bg-[#FFF8F9] border-t-2 border-[#FFB3C1]">
                    <p className="text-[#6B3D42] font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#6B3D42] mb-6 text-base font-light">
            Still have questions? Chat with our friendly team anytime!
          </p>
          <a
            href="https://wa.me/923004323930"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#7A1E24] hover:bg-[#5A1418] text-white font-bold rounded-full transition-colors duration-300">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
