import React from 'react';
import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function Wishlist() {
  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Wishlist</span>
          </nav>
          <h1 className="page-banner-title">My Wishlist</h1>
        </div>
      </div>
      <div className="section-pad text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'oklch(0.97 0.04 27)' }}>
          <Heart size={36} style={{ color: 'oklch(0.65 0.2 27)' }} />
        </div>
        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.22 0.04 145)' }}>Your wishlist is empty</h2>
        <p className="text-base mb-8" style={{ color: 'oklch(0.55 0.04 145)' }}>Save your favourite products here for easy access later.</p>
        <Link to="/all-categories" className="btn-primary inline-flex">Browse Products</Link>
      </div>
    </div>
  );
}
