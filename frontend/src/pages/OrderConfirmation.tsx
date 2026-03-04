import React, { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { CheckCircle, Package, Clock, MapPin } from 'lucide-react';

export default function OrderConfirmation() {
  const [order, setOrder] = useState<{ id: string; total: number; items: { name: string; quantity: number; price: number }[] } | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('freshcart_last_order');
    if (data) setOrder(JSON.parse(data));
  }, []);

  return (
    <div className="section-pad">
      <div className="container-fc max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'oklch(0.93 0.08 145)' }}>
            <CheckCircle size={40} style={{ color: 'oklch(0.52 0.17 145)' }} />
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Order Confirmed! 🎉</h1>
          <p className="text-base" style={{ color: 'oklch(0.45 0.05 145)' }}>Thank you for shopping with FreshCart</p>
          {order && <p className="text-sm mt-2 font-semibold green-text">Order ID: #{order.id}</p>}
        </div>

        <div className="bg-white rounded-2xl p-6 mb-6" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { icon: <Clock size={24} />, title: 'Estimated Delivery', value: '10-15 minutes' },
              { icon: <Package size={24} />, title: 'Order Status', value: 'Confirmed' },
              { icon: <MapPin size={24} />, title: 'Delivery To', value: 'Your Address' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ backgroundColor: 'oklch(0.97 0.03 145)' }}>
                <div className="green-text flex justify-center mb-2">{item.icon}</div>
                <p className="text-xs font-semibold mb-1" style={{ color: 'oklch(0.35 0.05 145)' }}>{item.title}</p>
                <p className="text-sm font-bold green-text">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {order && (
          <div className="bg-white rounded-2xl p-6 mb-6" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Order Items</h3>
            <div className="space-y-2 mb-4">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span style={{ color: 'oklch(0.4 0.04 145)' }}>{item.name} × {item.quantity}</span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 flex justify-between font-bold" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>
              <span>Total Paid</span>
              <span className="green-text">₹{order.total}</span>
            </div>
          </div>
        )}

        <div className="flex gap-4 flex-col sm:flex-row">
          <Link to="/order-tracking" className="btn-primary flex-1 flex items-center justify-center gap-2">
            Track Order
          </Link>
          <Link to="/" className="btn-outline-primary flex-1 flex items-center justify-center gap-2">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
