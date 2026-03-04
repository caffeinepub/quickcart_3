import React from 'react';
import { Link } from '@tanstack/react-router';

const CATEGORIES = [
  { name: 'Fruits & Vegetables', path: '/fruits-vegetables', emoji: '🥦', color: 'oklch(0.93 0.08 145)', desc: 'Fresh farm produce daily', count: 12 },
  { name: 'Dairy & Eggs', path: '/dairy-eggs', emoji: '🥛', color: 'oklch(0.95 0.04 200)', desc: 'Milk, cheese, butter & more', count: 12 },
  { name: 'Bakery & Breads', path: '/bakery-breads', emoji: '🍞', color: 'oklch(0.95 0.06 80)', desc: 'Fresh baked every morning', count: 12 },
  { name: 'Meat & Seafood', path: '/meat-seafood', emoji: '🍗', color: 'oklch(0.95 0.05 30)', desc: 'Premium cuts & fresh catch', count: 12 },
  { name: 'Beverages', path: '/beverages', emoji: '🥤', color: 'oklch(0.93 0.06 200)', desc: 'Juices, teas, coffees & more', count: 12 },
  { name: 'Snacks & Munchies', path: '/snacks-munchies', emoji: '🍿', color: 'oklch(0.95 0.06 55)', desc: 'Chips, nuts, chocolates', count: 12 },
  { name: 'Breakfast & Cereals', path: '/breakfast-cereals', emoji: '🥣', color: 'oklch(0.95 0.05 80)', desc: 'Start your day right', count: 12 },
  { name: 'Organic Products', path: '/organic-products', emoji: '🌿', color: 'oklch(0.93 0.07 145)', desc: 'Certified organic range', count: 12 },
  { name: 'Frozen Foods', path: '/frozen-foods', emoji: '❄️', color: 'oklch(0.93 0.04 220)', desc: 'Quick & convenient meals', count: 12 },
  { name: 'Personal Care', path: '/personal-care', emoji: '🧴', color: 'oklch(0.95 0.04 300)', desc: 'Skincare, haircare & more', count: 12 },
  { name: 'Household Essentials', path: '/household-essentials', emoji: '🏠', color: 'oklch(0.95 0.03 200)', desc: 'Cleaning & home supplies', count: 12 },
  { name: 'Baby Care', path: '/baby-care', emoji: '👶', color: 'oklch(0.95 0.04 300)', desc: 'Safe products for babies', count: 12 },
  { name: 'Pet Care', path: '/pet-care', emoji: '🐾', color: 'oklch(0.95 0.05 55)', desc: 'Food & care for your pets', count: 12 },
];

export default function AllCategories() {
  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>All Categories</span>
          </nav>
          <h1 className="page-banner-title">All Categories</h1>
          <p className="text-base mt-2" style={{ color: 'oklch(0.4 0.05 145)' }}>Browse all {CATEGORIES.length} categories with 5000+ products</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CATEGORIES.map(cat => (
              <Link key={cat.path} to={cat.path} className="no-underline group">
                <div className="rounded-2xl p-6 transition-all duration-300 border-2 border-transparent group-hover:border-current" style={{ backgroundColor: cat.color, color: 'oklch(0.3 0.06 145)' }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{cat.emoji}</span>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: 'oklch(1 0 0 / 0.6)', color: 'oklch(0.35 0.08 145)' }}>
                      {cat.count}+ items
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{cat.name}</h3>
                  <p className="text-sm opacity-80">{cat.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold green-text">
                    Shop Now →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
