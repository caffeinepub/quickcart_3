import React, { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Package, ChevronRight } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: string;
}

export default function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('freshcart_orders');
    if (data) setOrders(JSON.parse(data));
  }, []);

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Order History</span>
          </nav>
          <h1 className="page-banner-title">My Orders</h1>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc max-w-3xl">
          {orders.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'oklch(0.3 0.04 145)' }}>No orders yet</h3>
              <p className="text-sm mb-6" style={{ color: 'oklch(0.55 0.04 145)' }}>Start shopping to see your orders here</p>
              <Link to="/all-categories" className="btn-primary inline-flex">Start Shopping</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map(order => (
                <div key={order.id} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Order #{order.id}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'oklch(0.55 0.04 145)' }}>{new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: 'oklch(0.52 0.17 145)' }}>{order.status}</span>
                  </div>
                  <div className="text-sm mb-3" style={{ color: 'oklch(0.45 0.04 145)' }}>
                    {order.items.slice(0, 3).map(i => i.name).join(', ')}
                    {order.items.length > 3 && ` +${order.items.length - 3} more`}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold green-text">₹{order.total}</span>
                    <Link to="/order-tracking" className="flex items-center gap-1 text-sm font-semibold green-text">
                      Track <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
