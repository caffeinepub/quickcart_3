import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { addToCart } from '../utils/cart';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  mrp: number;
  unit: string;
  emoji?: string;
  image?: string;
  category?: string;
}

export default function ProductCard({ id, name, price, mrp, unit, emoji = '🛒', image }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const discount = Math.round(((mrp - price) / mrp) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      mrp,
      unit,
      image: image || '/assets/generated/product-placeholder.dim_400x400.png',
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleCardClick = () => {
    window.location.href = `/product/${id}`;
  };

  return (
    <div className="product-card group cursor-pointer" onClick={handleCardClick}>
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '1/1', backgroundColor: 'oklch(0.97 0.03 145)' }}>
        {discount > 0 && (
          <span className="discount-badge absolute top-2 left-2 z-10">{discount}% OFF</span>
        )}
        {image ? (
          <img
            src={image}
            alt={name}
            className="product-card-img"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/assets/generated/product-placeholder.dim_400x400.png';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">
            {emoji}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="product-card-body">
        <p className="product-card-name">{name}</p>
        <p className="text-xs mb-1" style={{ color: 'oklch(0.6 0.03 145)' }}>{unit}</p>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="product-card-price">₹{price}</span>
          {mrp > price && <span className="product-card-mrp">₹{mrp}</span>}
        </div>
        <button
          onClick={handleAddToCart}
          className={`add-to-cart-btn flex items-center justify-center gap-1.5 ${added ? 'opacity-90' : ''}`}
          style={added ? { backgroundColor: 'oklch(0.42 0.15 145)' } : {}}
        >
          {added ? (
            <><Check size={14} /> Added!</>
          ) : (
            <><Plus size={14} /> Add to Cart</>
          )}
        </button>
      </div>
    </div>
  );
}
