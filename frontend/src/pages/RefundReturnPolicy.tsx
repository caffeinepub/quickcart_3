import React from 'react';
import { Link } from '@tanstack/react-router';
import { CheckCircle, XCircle, Clock, Phone } from 'lucide-react';

export default function RefundReturnPolicy() {
  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Refund & Return Policy</span>
          </nav>
          <h1 className="page-banner-title">Refund & Return Policy</h1>
          <p className="text-sm mt-2" style={{ color: 'oklch(0.45 0.05 145)' }}>Last updated: March 1, 2026</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc max-w-3xl">
          {/* Quick Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: <CheckCircle size={24} />, title: 'Easy Returns', desc: 'Return within 24 hours of delivery', color: 'oklch(0.93 0.08 145)', textColor: 'oklch(0.35 0.1 145)' },
              { icon: <Clock size={24} />, title: 'Fast Refunds', desc: 'Processed within 3-5 business days', color: 'oklch(0.95 0.06 200)', textColor: 'oklch(0.3 0.08 200)' },
              { icon: <Phone size={24} />, title: '24/7 Support', desc: 'We\'re always here to help', color: 'oklch(0.95 0.06 55)', textColor: 'oklch(0.4 0.1 55)' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-4 text-center" style={{ backgroundColor: item.color }}>
                <div className="flex justify-center mb-2" style={{ color: item.textColor }}>{item.icon}</div>
                <p className="font-bold text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: item.textColor }}>{item.title}</p>
                <p className="text-xs" style={{ color: item.textColor, opacity: 0.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Return Eligibility',
                content: `You can return items if they are:

• Damaged or broken upon delivery
• Expired or past their best-before date
• Incorrect items (different from what you ordered)
• Significantly different from the product description
• Missing items from your order

Returns must be initiated within 24 hours of delivery. Fresh produce returns are evaluated on a case-by-case basis.`,
              },
              {
                title: 'Non-Returnable Items',
                content: `The following items cannot be returned:

• Items that have been opened or partially consumed (unless defective)
• Perishable items that have been stored incorrectly
• Items returned after 24 hours of delivery
• Personal care items once opened (for hygiene reasons)
• Items purchased during clearance sales (unless defective)`,
              },
              {
                title: 'How to Initiate a Return',
                content: `To return an item:

1. Contact our customer support within 24 hours of delivery
2. Provide your order ID and reason for return
3. Share photos of the damaged/incorrect item if applicable
4. Our team will review your request within 2 hours
5. If approved, a pickup will be arranged or a refund issued directly

Contact us via: App chat, Email (support@freshcart.in), or Phone (1800-FRESH-CART)`,
              },
              {
                title: 'Refund Process',
                content: `Once your return is approved:

• UPI/Digital Wallet refunds: Processed within 24 hours
• Credit/Debit Card refunds: 3-5 business days
• Net Banking refunds: 3-7 business days
• Cash on Delivery orders: Refunded to your FreshCart wallet or bank account within 5-7 business days

You will receive an email/SMS confirmation once the refund is processed.`,
              },
              {
                title: 'Cancellation Policy',
                content: `You can cancel your order:

• Before the order is packed: Full refund immediately
• After packing but before dispatch: Full refund within 24 hours
• After dispatch: Cannot be cancelled; initiate a return upon delivery

To cancel, go to My Orders in the app and tap "Cancel Order" or contact support.`,
              },
            ].map((section, i) => (
              <div key={i} className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 1px 6px oklch(0.18 0.02 145 / 0.06)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{section.title}</h2>
                <div className="text-sm whitespace-pre-line" style={{ color: 'oklch(0.4 0.04 145)', lineHeight: '1.8' }}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl text-center" style={{ backgroundColor: 'oklch(0.97 0.03 145)', border: '1px solid oklch(0.87 0.1 145)' }}>
            <p className="font-semibold mb-2" style={{ color: 'oklch(0.22 0.04 145)' }}>Need help with a return?</p>
            <p className="text-sm mb-4" style={{ color: 'oklch(0.45 0.04 145)' }}>Our support team is available 24/7</p>
            <Link to="/contact" className="btn-primary inline-flex">Contact Support</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
