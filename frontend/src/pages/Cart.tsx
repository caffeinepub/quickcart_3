import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { getCart, updateQuantity, removeFromCart, getCartTotal, CartItem } from '../utils/cart';

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>(getCart());
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const navigate = useNavigate();

  const refreshCart = () => setCart(getCart());

  useEffect(() => {
    window.addEventListener('cartUpdated', refreshCart);
    return () => window.removeEventListener('cartUpdated', refreshCart);
  }, []);

  const handleQty = (id: string, qty: number) => { updateQuantity(id, qty); refreshCart(); };
  const handleRemove = (id: string) => { removeFromCart(id); refreshCart(); };

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const delivery = subtotal >= 299 ? 0 : 29;
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + delivery - discount;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'FRESH10') setCouponApplied(true);
    else alert('Invalid coupon code. Try FRESH10');
  };

  if (cart.length === 0) {
    return (
      <div className="section-pad text-center">
        <div className="text-8xl mb-6">🛒</div>
        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.22 0.04 145)' }}>Your cart is empty</h2>
        <p className="text-base mb-8" style={{ color: 'oklch(0.55 0.04 145)' }}>Add some fresh groceries to get started!</p>
        <Link to="/all-categories" className="btn-primary inline-flex">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Cart</span>
          </nav>
          <h1 className="page-banner-title">Shopping Cart</h1>
          <p className="text-sm mt-1" style={{ color: 'oklch(0.45 0.05 145)' }}>{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0" style={{ backgroundColor: 'oklch(0.97 0.03 145)' }}>
                    🛒
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate" style={{ color: 'oklch(0.22 0.04 145)', fontFamily: 'Poppins, sans-serif' }}>{item.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'oklch(0.6 0.03 145)' }}>{item.unit}</p>
                    <p className="font-bold text-sm mt-1 green-text">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleQty(item.id, item.quantity - 1)} className="qty-btn"><Minus size={12} /></button>
                    <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                    <button onClick={() => handleQty(item.id, item.quantity + 1)} className="qty-btn"><Plus size={12} /></button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm green-text">₹{item.price * item.quantity}</p>
                    <button onClick={() => handleRemove(item.id)} className="mt-1 p-1 rounded-lg transition-colors" style={{ color: 'oklch(0.577 0.245 27.325)' }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-2xl p-6 sticky top-24" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Order Summary</h3>

                {/* Coupon */}
                <div className="flex gap-2 mb-4">
                  <div className="flex items-center gap-2 flex-1 rounded-lg border px-3 py-2" style={{ borderColor: 'oklch(0.88 0.03 145)' }}>
                    <Tag size={14} style={{ color: 'oklch(0.55 0.04 145)' }} />
                    <input
                      type="text"
                      placeholder="Coupon code"
                      value={coupon}
                      onChange={e => setCoupon(e.target.value)}
                      className="flex-1 text-sm outline-none bg-transparent"
                      disabled={couponApplied}
                    />
                  </div>
                  <button onClick={applyCoupon} disabled={couponApplied} className="px-3 py-2 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: couponApplied ? 'oklch(0.62 0.18 145)' : 'oklch(0.52 0.17 145)' }}>
                    {couponApplied ? '✓' : 'Apply'}
                  </button>
                </div>
                {couponApplied && <p className="text-xs mb-4 green-text font-semibold">✓ FRESH10 applied — 10% off!</p>}

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'oklch(0.45 0.04 145)' }}>Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'oklch(0.45 0.04 145)' }}>Delivery</span>
                    <span className={delivery === 0 ? 'font-semibold green-text' : 'font-semibold'}>{delivery === 0 ? 'FREE' : `₹${delivery}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span style={{ color: 'oklch(0.45 0.04 145)' }}>Discount</span>
                      <span className="font-semibold" style={{ color: 'oklch(0.68 0.19 55)' }}>-₹{discount}</span>
                    </div>
                  )}
                  <div className="border-t pt-3" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>
                    <div className="flex justify-between">
                      <span className="font-bold" style={{ color: 'oklch(0.18 0.04 145)' }}>Total</span>
                      <span className="font-bold text-lg green-text">₹{total}</span>
                    </div>
                  </div>
                </div>

                {subtotal < 299 && (
                  <p className="text-xs mb-4 p-2 rounded-lg" style={{ backgroundColor: 'oklch(0.97 0.03 145)', color: 'oklch(0.45 0.05 145)' }}>
                    Add ₹{299 - subtotal} more for free delivery!
                  </p>
                )}

                <button onClick={() => navigate({ to: '/checkout' })} className="btn-primary w-full flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
                <Link to="/all-categories" className="block text-center text-sm mt-3 green-text font-medium">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
