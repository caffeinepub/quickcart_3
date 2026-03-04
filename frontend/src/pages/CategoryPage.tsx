import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/products';
import { Search, SlidersHorizontal } from 'lucide-react';

interface CategoryPageProps {
  category: string;
  title: string;
  emoji: string;
  color: string;
}

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'discount', label: 'Best Discount' },
];

export default function CategoryPage({ category, title, emoji, color }: CategoryPageProps) {
  const allProducts = getProductsByCategory(category);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');

  let filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sort === 'discount') filtered = [...filtered].sort((a, b) => (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp);

  return (
    <div>
      {/* Banner */}
      <div className="py-10 px-4" style={{ background: `linear-gradient(135deg, ${color} 0%, oklch(0.99 0 0) 100%)` }}>
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link>
            {' / '}
            <Link to="/all-categories" className="hover:underline green-text">Categories</Link>
            {' / '}
            <span>{title}</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{emoji}</span>
            <div>
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.06 145)' }}>{title}</h1>
              <p className="text-sm mt-1" style={{ color: 'oklch(0.45 0.05 145)' }}>{allProducts.length} products available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 py-3 border-b" style={{ backgroundColor: 'white', borderColor: 'oklch(0.93 0.03 145)' }}>
        <div className="container-fc flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2 rounded-xl border px-3 py-2 flex-1 max-w-sm" style={{ borderColor: 'oklch(0.88 0.03 145)' }}>
            <Search size={16} style={{ color: 'oklch(0.55 0.04 145)' }} />
            <input
              type="text"
              placeholder={`Search in ${title}...`}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent"
              style={{ color: 'oklch(0.2 0.03 145)' }}
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} style={{ color: 'oklch(0.55 0.04 145)' }} />
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="text-sm px-3 py-2 rounded-lg border outline-none cursor-pointer"
              style={{ borderColor: 'oklch(0.88 0.03 145)', color: 'oklch(0.3 0.04 145)' }}
            >
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="section-pad">
        <div className="container-fc">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'oklch(0.3 0.04 145)' }}>No products found</h3>
              <p className="text-sm" style={{ color: 'oklch(0.55 0.04 145)' }}>Try a different search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map(p => <ProductCard key={p.id} {...p} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
