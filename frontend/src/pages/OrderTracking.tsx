import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Search, CheckCircle, Circle } from 'lucide-react';

const STEPS = [
  { label: 'Order Placed', desc: 'Your order has been received', time: '2 min ago', done: true },
  { label: 'Order Confirmed', desc: 'Store has confirmed your order', time: '1 min ago', done: true },
  { label: 'Being Packed', desc: 'Your items are being packed', time: 'Just now', done: true },
  { label: 'Out for Delivery', desc: 'Delivery partner is on the way', time: 'Expected in 5 min', done: false },
  { label: 'Delivered', desc: 'Order delivered successfully', time: 'Pending', done: false },
];

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [tracked, setTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) setTracked(true);
  };

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Track Order</span>
          </nav>
          <h1 className="page-banner-title">Track Your Order</h1>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc max-w-2xl">
          <form onSubmit={handleTrack} className="flex gap-3 mb-8">
            <input
              type="text"
              placeholder="Enter your Order ID (e.g. FC12345678)"
              value={orderId}
              onChange={e => setOrderId(e.target.value)}
              className="fc-input flex-1"
            />
            <button type="submit" className="btn-primary flex items-center gap-2">
              <Search size={16} /> Track
            </button>
          </form>

          {tracked && (
            <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Order #{orderId}</h3>
                  <p className="text-sm green-text font-semibold">Estimated delivery: 5 minutes</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: 'oklch(0.52 0.17 145)' }}>In Transit</span>
              </div>

              <div className="relative">
                {STEPS.map((step, i) => (
                  <div key={i} className="flex gap-4 pb-6 relative">
                    {i < STEPS.length - 1 && (
                      <div className="absolute left-4 top-8 bottom-0 w-0.5" style={{ backgroundColor: step.done ? 'oklch(0.52 0.17 145)' : 'oklch(0.88 0.03 145)' }} />
                    )}
                    <div className="flex-shrink-0 mt-0.5">
                      {step.done ? (
                        <CheckCircle size={32} style={{ color: 'oklch(0.52 0.17 145)' }} fill="oklch(0.93 0.08 145)" />
                      ) : (
                        <Circle size={32} style={{ color: 'oklch(0.88 0.03 145)' }} />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: step.done ? 'oklch(0.22 0.04 145)' : 'oklch(0.65 0.03 145)', fontFamily: 'Poppins, sans-serif' }}>{step.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'oklch(0.55 0.04 145)' }}>{step.desc}</p>
                      <p className="text-xs mt-0.5 font-medium" style={{ color: step.done ? 'oklch(0.52 0.17 145)' : 'oklch(0.7 0.03 145)' }}>{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!tracked && (
            <div className="text-center py-8" style={{ color: 'oklch(0.55 0.04 145)' }}>
              <div className="text-6xl mb-4">📦</div>
              <p className="text-base">Enter your order ID above to track your delivery</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
