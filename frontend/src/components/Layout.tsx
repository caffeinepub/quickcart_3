import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from '@tanstack/react-router';
import { ShoppingCart, Search, Menu, X, User, ChevronDown, MapPin, Heart } from 'lucide-react';
import { getCartCount } from '../utils/cart';

const CATEGORIES = [
  { name: 'Fruits & Veggies', path: '/fruits-vegetables', emoji: '🥦' },
  { name: 'Dairy & Eggs', path: '/dairy-eggs', emoji: '🥛' },
  { name: 'Bakery', path: '/bakery-breads', emoji: '🍞' },
  { name: 'Meat & Seafood', path: '/meat-seafood', emoji: '🍗' },
  { name: 'Beverages', path: '/beverages', emoji: '🥤' },
  { name: 'Snacks', path: '/snacks-munchies', emoji: '🍿' },
  { name: 'Breakfast', path: '/breakfast-cereals', emoji: '🥣' },
  { name: 'Organic', path: '/organic-products', emoji: '🌿' },
  { name: 'Frozen Foods', path: '/frozen-foods', emoji: '❄️' },
  { name: 'Personal Care', path: '/personal-care', emoji: '🧴' },
  { name: 'Household', path: '/household-essentials', emoji: '🏠' },
  { name: 'Baby Care', path: '/baby-care', emoji: '👶' },
  { name: 'Pet Care', path: '/pet-care', emoji: '🐾' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [cartCount, setCartCount] = useState(getCartCount());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleCartUpdate = () => setCartCount(getCartCount());
    window.addEventListener('cartUpdated', handleCartUpdate);
    setCartCount(getCartCount());
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: '/search', search: { q: searchQuery.trim() } });
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>
      {/* Top Bar */}
      <div className="hidden md:block py-1.5 px-4 text-xs text-white text-center" style={{ backgroundColor: 'oklch(0.42 0.15 145)' }}>
        🚀 Free delivery on orders above ₹299 | Use code <strong>FRESH10</strong> for 10% off your first order!
      </div>

      {/* Main Navbar */}
      <nav className="fc-navbar">
        <div className="container-fc">
          <div className="flex items-center gap-4 py-3">
            {/* Logo */}
            <Link to="/" className="fc-navbar-brand flex-shrink-0">
              <img
                src="/assets/generated/freshcart-logo.dim_300x80.png"
                alt="FreshCart"
                className="h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span style="color:oklch(0.52 0.17 145);font-family:Poppins,sans-serif;font-weight:800;font-size:1.4rem;">🛒 FreshCart</span>';
                  }
                }}
              />
            </Link>

            {/* Location */}
            <button className="hidden lg:flex items-center gap-1 text-xs font-medium px-3 py-2 rounded-lg border border-dashed" style={{ borderColor: 'oklch(0.88 0.03 145)', color: 'oklch(0.4 0.05 145)' }}>
              <MapPin size={14} className="green-text" />
              <span>Deliver to <strong>Mumbai</strong></span>
              <ChevronDown size={12} />
            </button>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 hidden md:flex items-center rounded-xl overflow-hidden border-2 transition-all" style={{ borderColor: 'oklch(0.88 0.03 145)' }}>
              <input
                type="text"
                placeholder="Search for groceries, vegetables, fruits..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 text-sm outline-none bg-white"
                style={{ color: 'oklch(0.2 0.03 145)' }}
              />
              <button type="submit" className="px-4 py-2.5 text-white text-sm font-semibold" style={{ backgroundColor: 'oklch(0.52 0.17 145)' }}>
                <Search size={18} />
              </button>
            </form>

            {/* Right Actions */}
            <div className="flex items-center gap-2 ml-auto md:ml-0">
              <Link to="/wishlist" className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors" style={{ color: 'oklch(0.4 0.05 145)' }}>
                <Heart size={18} />
              </Link>
              <Link to="/login" className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors" style={{ color: 'oklch(0.4 0.05 145)' }}>
                <User size={18} />
                <span>Account</span>
              </Link>
              <Link to="/cart" className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold" style={{ backgroundColor: 'oklch(0.52 0.17 145)' }}>
                <ShoppingCart size={18} />
                <span className="hidden sm:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount > 99 ? '99+' : cartCount}</span>
                )}
              </Link>
              <button
                className="md:hidden p-2 rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Category Nav */}
          <div className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto scrollbar-hide">
            <Link to="/all-categories" className={`fc-nav-link whitespace-nowrap text-xs ${isActive('/all-categories') ? 'active' : ''}`}>
              All Categories
            </Link>
            {CATEGORIES.slice(0, 8).map(cat => (
              <Link key={cat.path} to={cat.path} className={`fc-nav-link whitespace-nowrap text-xs ${isActive(cat.path) ? 'active' : ''}`}>
                {cat.emoji} {cat.name}
              </Link>
            ))}
            <div className="relative">
              <button
                className="fc-nav-link text-xs flex items-center gap-1"
                onClick={() => setCatDropdownOpen(!catDropdownOpen)}
              >
                More <ChevronDown size={12} />
              </button>
              {catDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border py-2 z-50 min-w-48" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>
                  {CATEGORIES.slice(8).map(cat => (
                    <Link key={cat.path} to={cat.path} className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-green-50 transition-colors" style={{ color: 'oklch(0.3 0.04 145)' }} onClick={() => setCatDropdownOpen(false)}>
                      {cat.emoji} {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/deals-offers" className={`fc-nav-link whitespace-nowrap text-xs font-semibold ${isActive('/deals-offers') ? 'active' : ''}`} style={{ color: 'oklch(0.68 0.19 55)' }}>
              🔥 Deals
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''} overflow-y-auto`} style={{ zIndex: 45 }}>
        <div className="mb-4">
          <form onSubmit={handleSearch} className="flex items-center rounded-xl overflow-hidden border-2" style={{ borderColor: 'oklch(0.88 0.03 145)' }}>
            <input
              type="text"
              placeholder="Search groceries..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 text-sm outline-none"
            />
            <button type="submit" className="px-4 py-3 text-white" style={{ backgroundColor: 'oklch(0.52 0.17 145)' }}>
              <Search size={18} />
            </button>
          </form>
        </div>
        <nav className="flex flex-col gap-1">
          <Link to="/" className="fc-nav-link text-base py-3 border-b" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>🏠 Home</Link>
          <Link to="/all-categories" className="fc-nav-link text-base py-3 border-b" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>📦 All Categories</Link>
          {CATEGORIES.map(cat => (
            <Link key={cat.path} to={cat.path} className="fc-nav-link text-sm py-2.5 border-b" style={{ borderColor: 'oklch(0.96 0.01 145)' }}>
              {cat.emoji} {cat.name}
            </Link>
          ))}
          <Link to="/deals-offers" className="fc-nav-link text-base py-3 border-b" style={{ borderColor: 'oklch(0.93 0.03 145)', color: 'oklch(0.68 0.19 55)' }}>🔥 Deals & Offers</Link>
          <Link to="/login" className="fc-nav-link text-base py-3 border-b" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>👤 Login / Account</Link>
          <Link to="/cart" className="fc-nav-link text-base py-3 border-b" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>🛒 Cart ({cartCount})</Link>
          <Link to="/about" className="fc-nav-link text-base py-3 border-b" style={{ borderColor: 'oklch(0.93 0.03 145)' }}>ℹ️ About Us</Link>
          <Link to="/contact" className="fc-nav-link text-base py-3">📞 Contact Us</Link>
        </nav>
      </div>
      {mobileMenuOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMobileMenuOpen(false)} />}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="fc-footer">
        <div className="container-fc">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>🛒 FreshCart</span>
              </div>
              <p className="text-sm mb-4" style={{ color: 'oklch(0.72 0.04 145)' }}>
                Your trusted grocery delivery partner. Fresh produce, pantry essentials, and more — delivered to your door in minutes.
              </p>
              <div className="flex items-center gap-2 text-sm mb-2" style={{ color: 'oklch(0.72 0.04 145)' }}>
                <MapPin size={14} className="green-text flex-shrink-0" />
                <span>123 Green Market Street, Mumbai 400001</span>
              </div>
              <div className="flex gap-3 mt-4">
                {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
                  <button key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all" style={{ backgroundColor: 'oklch(0.22 0.04 145)' }}>
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="fc-footer-heading">Quick Links</h4>
              <Link to="/" className="fc-footer-link">Home</Link>
              <Link to="/about" className="fc-footer-link">About Us</Link>
              <Link to="/all-categories" className="fc-footer-link">All Categories</Link>
              <Link to="/deals-offers" className="fc-footer-link">Deals & Offers</Link>
              <Link to="/blog" className="fc-footer-link">Blog & Recipes</Link>
              <Link to="/careers" className="fc-footer-link">Careers</Link>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="fc-footer-heading">Customer Service</h4>
              <Link to="/contact" className="fc-footer-link">Contact Us</Link>
              <Link to="/faq" className="fc-footer-link">FAQ</Link>
              <Link to="/order-tracking" className="fc-footer-link">Track Order</Link>
              <Link to="/refund-return-policy" className="fc-footer-link">Returns & Refunds</Link>
              <Link to="/delivery-information" className="fc-footer-link">Delivery Info</Link>
              <Link to="/store-locator" className="fc-footer-link">Store Locator</Link>
            </div>

            {/* Legal */}
            <div>
              <h4 className="fc-footer-heading">Legal</h4>
              <Link to="/privacy-policy" className="fc-footer-link">Privacy Policy</Link>
              <Link to="/terms-conditions" className="fc-footer-link">Terms & Conditions</Link>
              <Link to="/refund-return-policy" className="fc-footer-link">Refund Policy</Link>
              <div className="mt-6">
                <h4 className="fc-footer-heading">Download App</h4>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white" style={{ backgroundColor: 'oklch(0.22 0.04 145)' }}>
                    📱 App Store
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white" style={{ backgroundColor: 'oklch(0.22 0.04 145)' }}>
                    🤖 Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'oklch(0.22 0.04 145)' }}>
            <p className="text-xs" style={{ color: 'oklch(0.6 0.03 145)' }}>
              © {new Date().getFullYear()} FreshCart. All rights reserved.
            </p>
            <p className="text-xs flex items-center gap-1" style={{ color: 'oklch(0.6 0.03 145)' }}>
              Built with <span className="text-red-400">❤️</span> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'freshcart')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
                style={{ color: 'oklch(0.72 0.04 145)' }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
