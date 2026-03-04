import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
  {
    category: 'Orders & Delivery',
    emoji: '📦',
    questions: [
      { q: 'How fast is FreshCart delivery?', a: 'We deliver in 10-15 minutes to most locations. Our dark store network ensures your groceries reach you ultra-fast.' },
      { q: 'What is the minimum order value?', a: 'There is no minimum order value. However, orders below ₹299 will incur a delivery fee of ₹29.' },
      { q: 'Can I schedule a delivery for later?', a: 'Currently, we only offer express delivery. Scheduled delivery is coming soon!' },
      { q: 'What if I am not home during delivery?', a: 'Our delivery partner will call you. If unreachable, the order may be left with a neighbor or returned to the store.' },
    ],
  },
  {
    category: 'Payments',
    emoji: '💳',
    questions: [
      { q: 'What payment methods do you accept?', a: 'We accept Cash on Delivery, UPI (PhonePe, GPay, Paytm), Credit/Debit cards, and Net Banking.' },
      { q: 'Is it safe to pay online on FreshCart?', a: 'Yes, all online payments are secured with 256-bit SSL encryption and processed through trusted payment gateways.' },
      { q: 'Can I use multiple payment methods?', a: 'Currently, you can use one payment method per order. We are working on split payment options.' },
      { q: 'When will I be charged for my order?', a: 'For online payments, you are charged at the time of placing the order. For COD, payment is collected at delivery.' },
    ],
  },
  {
    category: 'Returns & Refunds',
    emoji: '🔄',
    questions: [
      { q: 'What is your return policy?', a: 'We accept returns for damaged, expired, or incorrect items within 24 hours of delivery. Fresh produce returns are evaluated case by case.' },
      { q: 'How do I initiate a return?', a: 'Contact our customer support via the app or call us at 1800-FRESH-CART. We will arrange a pickup or issue a refund.' },
      { q: 'How long does a refund take?', a: 'Refunds are processed within 3-5 business days to your original payment method. UPI refunds are usually instant.' },
      { q: 'Can I return perishable items?', a: 'Yes, if the item is damaged, spoiled, or not as described. We take quality very seriously and will make it right.' },
    ],
  },
  {
    category: 'Account & App',
    emoji: '👤',
    questions: [
      { q: 'How do I create a FreshCart account?', a: 'Click "Register" on the website or download our app. You need a valid email and phone number to sign up.' },
      { q: 'Can I use FreshCart without an account?', a: 'You can browse products without an account, but you need to sign in to place orders.' },
      { q: 'How do I change my delivery address?', a: 'Go to My Profile > Addresses to add, edit, or delete delivery addresses.' },
      { q: 'Is the FreshCart app available on iOS and Android?', a: 'Yes! Download the FreshCart app from the App Store or Google Play Store for the best experience.' },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>FAQ</span>
          </nav>
          <h1 className="page-banner-title">Frequently Asked Questions</h1>
          <p className="text-base mt-2" style={{ color: 'oklch(0.4 0.05 145)' }}>Find answers to common questions about FreshCart</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc max-w-3xl">
          {FAQ_DATA.map(section => (
            <div key={section.category} className="mb-8">
              <h2 className="flex items-center gap-2 text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>
                <span>{section.emoji}</span> {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={i} className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: '0 1px 6px oklch(0.18 0.02 145 / 0.06)', border: '1px solid oklch(0.93 0.03 145)' }}>
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between p-4 text-left transition-colors"
                        style={{ backgroundColor: isOpen ? 'oklch(0.97 0.03 145)' : 'white' }}
                      >
                        <span className="font-semibold text-sm pr-4" style={{ color: 'oklch(0.22 0.04 145)', fontFamily: 'Poppins, sans-serif' }}>{item.q}</span>
                        {isOpen ? <ChevronUp size={18} style={{ color: 'oklch(0.52 0.17 145)', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: 'oklch(0.55 0.04 145)', flexShrink: 0 }} />}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-sm" style={{ color: 'oklch(0.4 0.04 145)', lineHeight: '1.7', borderTop: '1px solid oklch(0.93 0.03 145)' }}>
                          <p className="pt-3">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-8 p-6 rounded-2xl text-center" style={{ backgroundColor: 'oklch(0.97 0.03 145)', border: '1px solid oklch(0.87 0.1 145)' }}>
            <p className="font-semibold mb-2" style={{ color: 'oklch(0.22 0.04 145)' }}>Still have questions?</p>
            <p className="text-sm mb-4" style={{ color: 'oklch(0.45 0.04 145)' }}>Our support team is available 24/7 to help you</p>
            <Link to="/contact" className="btn-primary inline-flex">Contact Support</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
