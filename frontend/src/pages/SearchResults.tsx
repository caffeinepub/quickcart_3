import React, { useState, useEffect } from 'react';
import { Link, useSearch } from '@tanstack/react-router';
import { Search, SlidersHorizontal } from 'lucide-react';
import { searchProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function SearchResults() {
  const { q } = useSearch({ from: '/search' });
  const [query, setQuery] = useState(q || '');
  const [sort, setSort] = useState('default');

  useEffect(() => { setQuery(q || ''); }, [q]);

  let results = searchProducts(query);
  if (sort === 'price-asc') results = [...results].sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') results = [...results].sort((a, b) => b.price - a.price);
  else if (sort === 'discount') results = [...results].sort((a, b) => (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp);

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Search</span>
          </nav>
          <h1 className="page-banner-title">Search Results</h1>
          {query && <p className="text-sm mt-1" style={{ color: 'oklch(0.45 0.05 145)' }}>{results.length} results for "{query}"</p>}
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="flex items-center gap-2 rounded-xl border px-4 py-3 flex-1" style={{ borderColor: 'oklch(0.88 0.03 145)' }}>
              <Search size={18} style={{ color: 'oklch(0.55 0.04 145)' }} />
              <input
                type="text"
                placeholder="Search for products..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 text-sm outline-none bg-transparent"
                style={{ color: 'oklch(0.2 0.03 145)' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} style={{ color: 'oklch(0.55 0.04 145)' }} />
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="text-sm px-3 py-3 rounded-xl border outline-none cursor-pointer"
                style={{ borderColor: 'oklch(0.88 0.03 145)', color: 'oklch(0.3 0.04 145)' }}
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="discount">Best Discount</option>
              </select>
            </div>
          </div>

          {!query ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'oklch(0.3 0.04 145)' }}>Start searching</h3>
              <p className="text-sm" style={{ color: 'oklch(0.55 0.04 145)' }}>Type something above to find products</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">😕</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'oklch(0.3 0.04 145)' }}>No results found</h3>
              <p className="text-sm mb-6" style={{ color: 'oklch(0.55 0.04 145)' }}>Try different keywords or browse categories</p>
              <Link to="/all-categories" className="btn-primary inline-flex">Browse Categories</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {results.map(p => <ProductCard key={p.id} {...p} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
