import React, { useState } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import { ShoppingCart, Plus, Minus, Star, Shield, Truck, RotateCcw, Check } from 'lucide-react';
import { getProductById, ALL_PRODUCTS } from '../data/products';
import { addToCart } from '../utils/cart';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { productId } = useParams({ from: '/product/$productId' });
  const product = getProductById(productId);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="section-pad text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
        <Link to="/all-categories" className="btn-primary inline-flex mt-4">Browse Categories</Link>
      </div>
    );
  }

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = ALL_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 6);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart({ id: product.id, name: product.name, price: product.price, mrp: product.mrp, unit: product.unit, image: '' });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div className="page-banner py-4">
        <div className="container-fc">
          <nav className="text-xs" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link>
            {' / '}
            <Link to="/all-categories" className="hover:underline green-text">Categories</Link>
            {' / '}
            <span>{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image */}
            <div className="rounded-2xl flex items-center justify-center p-12" style={{ backgroundColor: 'oklch(0.97 0.03 145)', minHeight: 360 }}>
              <span className="text-9xl">{product.emoji}</span>
            </div>

            {/* Info */}
            <div>
              {discount > 0 && (
                <span className="discount-badge mb-3 inline-block">{discount}% OFF</span>
              )}
              <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{product.name}</h1>
              <p className="text-sm mb-4" style={{ color: 'oklch(0.55 0.04 145)' }}>Unit: {product.unit}</p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold green-text">₹{product.price}</span>
                {product.mrp > product.price && (
                  <span className="text-xl line-through" style={{ color: 'oklch(0.65 0.03 145)' }}>₹{product.mrp}</span>
                )}
                {discount > 0 && (
                  <span className="text-sm font-semibold" style={{ color: 'oklch(0.68 0.19 55)' }}>Save ₹{product.mrp - product.price}</span>
                )}
              </div>

              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="oklch(0.75 0.18 80)" color="oklch(0.75 0.18 80)" />)}
                <span className="text-sm ml-2" style={{ color: 'oklch(0.55 0.04 145)' }}>(4.8 · 234 reviews)</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map(tag => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>

              {/* Qty + Add */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-3 rounded-xl border px-3 py-2" style={{ borderColor: 'oklch(0.88 0.03 145)' }}>
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="qty-btn"><Minus size={14} /></button>
                  <span className="w-8 text-center font-bold text-lg">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="qty-btn"><Plus size={14} /></button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                  style={added ? { backgroundColor: 'oklch(0.42 0.15 145)' } : {}}
                >
                  {added ? <><Check size={16} /> Added to Cart!</> : <><ShoppingCart size={16} /> Add to Cart</>}
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: <Truck size={18} />, text: 'Fast Delivery' },
                  { icon: <Shield size={18} />, text: 'Quality Assured' },
                  { icon: <RotateCcw size={18} />, text: 'Easy Returns' },
                ].map((g, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 p-3 rounded-xl text-center" style={{ backgroundColor: 'oklch(0.97 0.03 145)' }}>
                    <span className="green-text">{g.icon}</span>
                    <span className="text-xs font-medium" style={{ color: 'oklch(0.35 0.05 145)' }}>{g.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="section-heading mb-2">Related Products</h2>
              <div className="section-heading-underline mb-6" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {related.map(p => <ProductCard key={p.id} {...p} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
