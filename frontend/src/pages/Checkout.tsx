import React, { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { getCart, getCartTotal, clearCart } from '../utils/cart';

interface FormData {
  name: string; phone: string; address: string; city: string; pincode: string; payment: string;
}
interface FormErrors {
  name?: string; phone?: string; address?: string; city?: string; pincode?: string;
}

export default function Checkout() {
  const cart = getCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({ name: '', phone: '', address: '', city: '', pincode: '', payment: 'cod' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [placing, setPlacing] = useState(false);

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const delivery = subtotal >= 299 ? 0 : 29;
  const total = subtotal + delivery;

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone number';
    if (!form.address.trim()) e.address = 'Address is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) e.pincode = 'Enter a valid 6-digit pincode';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setPlacing(true);
    const orderId = 'FC' + Date.now().toString().slice(-8);
    const order = { id: orderId, date: new Date().toISOString(), items: cart, total, address: form, status: 'Confirmed' };
    const history = JSON.parse(localStorage.getItem('freshcart_orders') || '[]');
    history.unshift(order);
    localStorage.setItem('freshcart_orders', JSON.stringify(history));
    localStorage.setItem('freshcart_last_order', JSON.stringify(order));
    clearCart();
    setTimeout(() => navigate({ to: '/order-confirmation' }), 800);
  };

  if (cart.length === 0) {
    return (
      <div className="section-pad text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold mb-3">Your cart is empty</h2>
        <Link to="/all-categories" className="btn-primary inline-flex mt-4">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <Link to="/cart" className="hover:underline green-text">Cart</Link> / <span>Checkout</span>
          </nav>
          <h1 className="page-banner-title">Checkout</h1>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Delivery Form */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <h3 className="text-lg font-bold mb-5" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>📍 Delivery Address</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="fc-label">Full Name *</label>
                      <input className={`fc-input ${errors.name ? 'error' : ''}`} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Doe" />
                      {errors.name && <p className="fc-error">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="fc-label">Phone Number *</label>
                      <input className={`fc-input ${errors.phone ? 'error' : ''}`} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="10-digit mobile number" maxLength={10} />
                      {errors.phone && <p className="fc-error">{errors.phone}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="fc-label">Full Address *</label>
                      <textarea className={`fc-input ${errors.address ? 'error' : ''}`} value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} placeholder="House/Flat no., Street, Area" rows={3} />
                      {errors.address && <p className="fc-error">{errors.address}</p>}
                    </div>
                    <div>
                      <label className="fc-label">City *</label>
                      <input className={`fc-input ${errors.city ? 'error' : ''}`} value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} placeholder="Mumbai" />
                      {errors.city && <p className="fc-error">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="fc-label">Pincode *</label>
                      <input className={`fc-input ${errors.pincode ? 'error' : ''}`} value={form.pincode} onChange={e => setForm(f => ({ ...f, pincode: e.target.value }))} placeholder="400001" maxLength={6} />
                      {errors.pincode && <p className="fc-error">{errors.pincode}</p>}
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <h3 className="text-lg font-bold mb-5" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>💳 Payment Method</h3>
                  <div className="space-y-3">
                    {[
                      { value: 'cod', label: '💵 Cash on Delivery', desc: 'Pay when your order arrives' },
                      { value: 'upi', label: '📱 UPI / PhonePe / GPay', desc: 'Instant payment via UPI' },
                      { value: 'card', label: '💳 Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
                    ].map(opt => (
                      <label key={opt.value} className="flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all" style={{ borderColor: form.payment === opt.value ? 'oklch(0.52 0.17 145)' : 'oklch(0.9 0.02 145)', backgroundColor: form.payment === opt.value ? 'oklch(0.97 0.03 145)' : 'white' }}>
                        <input type="radio" name="payment" value={opt.value} checked={form.payment === opt.value} onChange={e => setForm(f => ({ ...f, payment: e.target.value }))} className="accent-green-600" />
                        <div>
                          <p className="font-semibold text-sm" style={{ color: 'oklch(0.22 0.04 145)' }}>{opt.label}</p>
                          <p className="text-xs" style={{ color: 'oklch(0.55 0.04 145)' }}>{opt.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <div className="bg-white rounded-2xl p-6 sticky top-24" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Order Summary</h3>
                  <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="truncate mr-2" style={{ color: 'oklch(0.4 0.04 145)' }}>{item.name} × {item.quantity}</span>
                        <span className="font-semibold flex-shrink-0">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-3 space-y-2" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: 'oklch(0.45 0.04 145)' }}>Subtotal</span>
                      <span className="font-semibold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: 'oklch(0.45 0.04 145)' }}>Delivery</span>
                      <span className={`font-semibold ${delivery === 0 ? 'green-text' : ''}`}>{delivery === 0 ? 'FREE' : `₹${delivery}`}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>
                      <span>Total</span>
                      <span className="text-lg green-text">₹{total}</span>
                    </div>
                  </div>
                  <button type="submit" disabled={placing} className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
                    {placing ? '⏳ Placing Order...' : '🛒 Place Order'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
