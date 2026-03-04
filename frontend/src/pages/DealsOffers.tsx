import React from 'react';
import { Link } from '@tanstack/react-router';
import { Tag, Copy } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';

const COUPONS = [
  { code: 'FRESH10', desc: '10% off on your first order', min: '₹199', expiry: 'Mar 31, 2026' },
  { code: 'VEGGIE30', desc: '30% off on Fruits & Vegetables', min: '₹299', expiry: 'Mar 15, 2026' },
  { code: 'FREEDEL', desc: 'Free delivery on any order', min: '₹99', expiry: 'Mar 20, 2026' },
  { code: 'ORGANIC20', desc: '20% off on Organic products', min: '₹499', expiry: 'Apr 5, 2026' },
];

export default function DealsOffers() {
  const dealProducts = ALL_PRODUCTS.filter(p => ((p.mrp - p.price) / p.mrp) >= 0.2);

  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code).catch(() => {});
    alert(`Coupon "${code}" copied!`);
  };

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Deals & Offers</span>
          </nav>
          <h1 className="page-banner-title">🔥 Deals & Offers</h1>
          <p className="text-base mt-2" style={{ color: 'oklch(0.4 0.05 145)' }}>Exclusive discounts and coupon codes just for you</p>
        </div>
      </div>

      {/* Coupons */}
      <section className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.02 145)' }}>
        <div className="container-fc">
          <h2 className="section-heading mb-2">Coupon Codes</h2>
          <div className="section-heading-underline mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COUPONS.map(c => (
              <div key={c.code} className="bg-white rounded-2xl p-5 border-2 border-dashed" style={{ borderColor: 'oklch(0.87 0.1 145)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={18} style={{ color: 'oklch(0.52 0.17 145)' }} />
                  <span className="font-bold text-lg green-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{c.code}</span>
                </div>
                <p className="text-sm mb-1" style={{ color: 'oklch(0.35 0.04 145)' }}>{c.desc}</p>
                <p className="text-xs mb-3" style={{ color: 'oklch(0.6 0.03 145)' }}>Min. order: {c.min} · Expires: {c.expiry}</p>
                <button onClick={() => copyCoupon(c.code)} className="flex items-center gap-2 w-full justify-center py-2 rounded-lg text-sm font-semibold transition-all" style={{ backgroundColor: 'oklch(0.97 0.03 145)', color: 'oklch(0.52 0.17 145)', border: '1px solid oklch(0.87 0.1 145)' }}>
                  <Copy size={14} /> Copy Code
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Products */}
      <section className="section-pad">
        <div className="container-fc">
          <h2 className="section-heading mb-2">Products on Sale</h2>
          <div className="section-heading-underline mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {dealProducts.map(p => <ProductCard key={p.id} {...p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
