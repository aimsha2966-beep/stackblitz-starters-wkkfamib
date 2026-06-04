'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border-2 border-gold-light rounded-lg focus:border-gold focus:outline-none transition-colors"
          placeholder="e.g., Ayesha Khan"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border-2 border-gold-light rounded-lg focus:border-gold focus:outline-none transition-colors"
            placeholder="ayesha@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gold-light rounded-lg focus:border-gold focus:outline-none transition-colors"
            placeholder="+92 300 1234567"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Subject *
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-gold-light rounded-lg focus:border-gold focus:outline-none transition-colors"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Custom Order">Custom Order Question</option>
          <option value="Product Question">Product Question</option>
          <option value="Feedback">Feedback</option>
          <option value="Partnership">Partnership</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 border-2 border-gold-light rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-3 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
