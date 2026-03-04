import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { ArrowRight, Clock, Shield, Truck, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';

const HERO_SLIDES = [
  {
    headline: 'Fresh Groceries Delivered in 10 Minutes',
    sub: 'Order from 5000+ products across all categories. Fresh, fast, and affordable.',
    cta: 'Shop Now',
    ctaLink: '/all-categories',
    bg: 'linear-gradient(135deg, oklch(0.18 0.08 145) 0%, oklch(0.35 0.14 145) 50%, oklch(0.52 0.17 145) 100%)',
    emoji: '🥦🍎🥕',
  },
  {
    headline: 'Up to 50% Off on Fresh Fruits & Vegetables',
    sub: 'Farm-fresh produce sourced directly from local farmers. No middlemen, better prices.',
    cta: 'Explore Deals',
    ctaLink: '/deals-offers',
    bg: 'linear-gradient(135deg, oklch(0.55 0.18 55) 0%, oklch(0.68 0.19 55) 60%, oklch(0.75 0.18 80) 100%)',
    emoji: '🍊🍋🍇',
  },
  {
    headline: 'Premium Organic Products Now Available',
    sub: 'Certified organic, pesticide-free, and sustainably sourced. Good for you and the planet.',
    cta: 'Shop Organic',
    ctaLink: '/organic-products',
    bg: 'linear-gradient(135deg, oklch(0.22 0.06 145) 0%, oklch(0.42 0.15 145) 100%)',
    emoji: '🌿🥬🌱',
  },
];

const CATEGORIES = [
  { name: 'Fruits & Veggies', path: '/fruits-vegetables', emoji: '🥦', color: 'oklch(0.93 0.08 145)' },
  { name: 'Dairy & Eggs', path: '/dairy-eggs', emoji: '🥛', color: 'oklch(0.95 0.04 200)' },
  { name: 'Bakery', path: '/bakery-breads', emoji: '🍞', color: 'oklch(0.95 0.06 80)' },
  { name: 'Meat & Seafood', path: '/meat-seafood', emoji: '🍗', color: 'oklch(0.95 0.05 30)' },
  { name: 'Beverages', path: '/beverages', emoji: '🥤', color: 'oklch(0.93 0.06 200)' },
  { name: 'Snacks', path: '/snacks-munchies', emoji: '🍿', color: 'oklch(0.95 0.06 55)' },
  { name: 'Breakfast', path: '/breakfast-cereals', emoji: '🥣', color: 'oklch(0.95 0.05 80)' },
  { name: 'Organic', path: '/organic-products', emoji: '🌿', color: 'oklch(0.93 0.07 145)' },
  { name: 'Frozen Foods', path: '/frozen-foods', emoji: '❄️', color: 'oklch(0.93 0.04 220)' },
  { name: 'Personal Care', path: '/personal-care', emoji: '🧴', color: 'oklch(0.95 0.04 300)' },
  { name: 'Household', path: '/household-essentials', emoji: '🏠', color: 'oklch(0.95 0.03 200)' },
  { name: 'Baby Care', path: '/baby-care', emoji: '👶', color: 'oklch(0.95 0.04 300)' },
  { name: 'Pet Care', path: '/pet-care', emoji: '🐾', color: 'oklch(0.95 0.05 55)' },
  { name: 'All Categories', path: '/all-categories', emoji: '📦', color: 'oklch(0.93 0.04 145)' },
];

const FEATURES = [
  { icon: <Clock size={28} />, title: '10-Minute Delivery', desc: 'Ultra-fast delivery to your doorstep' },
  { icon: <Shield size={28} />, title: '100% Fresh Guarantee', desc: 'Quality checked before every delivery' },
  { icon: <Truck size={28} />, title: 'Free Delivery', desc: 'On orders above ₹299' },
  { icon: <Star size={28} />, title: '4.8★ Rated App', desc: 'Loved by 2M+ happy customers' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoPlay();
  };

  const prevSlide = () => goToSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const nextSlide = () => goToSlide((currentSlide + 1) % HERO_SLIDES.length);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) navigate({ to: '/search', search: { q: searchQuery.trim() } });
  };

  const popularProducts = ALL_PRODUCTS.slice(0, 12);
  const dealProducts = ALL_PRODUCTS.filter(p => ((p.mrp - p.price) / p.mrp) > 0.2).slice(0, 8);

  return (
    <div>
      {/* Hero Carousel */}
      <section className="hero-carousel relative" style={{ minHeight: 480 }}>
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className="hero-slide"
            style={{
              background: slide.bg,
              opacity: idx === currentSlide ? 1 : 0,
              pointerEvents: idx === currentSlide ? 'auto' : 'none',
              position: 'absolute',
              inset: 0,
              transition: 'opacity 0.7s ease',
            }}
          >
            <div className="container-fc h-full flex items-center" style={{ minHeight: 480 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full py-16">
                <div className="text-white animate-fade-in">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: 'oklch(1 0 0 / 0.2)' }}>
                    ⚡ Express Delivery Available
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {slide.headline}
                  </h1>
                  <p className="text-base md:text-lg mb-8 opacity-90">{slide.sub}</p>
                  <form onSubmit={handleSearch} className="search-bar-hero max-w-lg mb-6">
                    <input
                      type="text"
                      placeholder="Search for tomatoes, milk, bread..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                  </form>
                  <div className="flex gap-3 flex-wrap">
                    <Link to={slide.ctaLink} className="btn-accent">
                      {slide.cta} <ArrowRight size={16} />
                    </Link>
                    <Link to="/all-categories" className="btn-outline-primary" style={{ borderColor: 'white', color: 'white' }}>
                      Browse All
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-bounce">{slide.emoji.split('')[0]}</div>
                    <div className="flex gap-4 justify-center text-6xl">
                      {slide.emoji.split('').slice(1).map((e, i) => (
                        <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all z-10" style={{ backgroundColor: 'oklch(1 0 0 / 0.2)' }}>
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all z-10" style={{ backgroundColor: 'oklch(1 0 0 / 0.2)' }}>
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_SLIDES.map((_, idx) => (
            <button key={idx} onClick={() => goToSlide(idx)} className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`} />
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-6 border-b" style={{ backgroundColor: 'white', borderColor: 'oklch(0.93 0.03 145)' }}>
        <div className="container-fc">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3">
                <div className="green-text flex-shrink-0">{f.icon}</div>
                <div>
                  <p className="text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.22 0.04 145)' }}>{f.title}</p>
                  <p className="text-xs" style={{ color: 'oklch(0.55 0.04 145)' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>
        <div className="container-fc">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-heading">Shop by Category</h2>
              <div className="section-heading-underline" />
            </div>
            <Link to="/all-categories" className="text-sm font-semibold flex items-center gap-1 green-text">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-7 gap-3">
            {CATEGORIES.map(cat => (
              <Link key={cat.path} to={cat.path} className="no-underline">
                <div className="category-card" style={{ backgroundColor: cat.color }}>
                  <span className="text-3xl mb-2">{cat.emoji}</span>
                  <span className="category-name text-xs">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Banners */}
      <section className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.02 145)' }}>
        <div className="container-fc">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="offer-banner md:col-span-2">
              <div className="relative z-10">
                <span className="text-xs font-semibold opacity-80 uppercase tracking-wider">Limited Time</span>
                <h3 className="text-2xl font-bold mt-1 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Get 30% Off on Fresh Vegetables</h3>
                <p className="text-sm opacity-90 mb-4">Use code <strong>VEGGIE30</strong> at checkout</p>
                <Link to="/fruits-vegetables" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: 'oklch(1 0 0 / 0.2)', border: '2px solid white' }}>
                  Shop Now <ArrowRight size={14} />
                </Link>
              </div>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-6xl opacity-30">🥦🍅🥕</div>
            </div>
            <div className="offer-banner offer-banner-orange">
              <span className="text-xs font-semibold opacity-80 uppercase tracking-wider">New Arrivals</span>
              <h3 className="text-xl font-bold mt-1 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Organic Range Now Available</h3>
              <p className="text-sm opacity-90 mb-4">100% certified organic products</p>
              <Link to="/organic-products" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: 'oklch(1 0 0 / 0.2)', border: '2px solid white' }}>
                Explore <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="section-pad">
        <div className="container-fc">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-heading">Popular Products</h2>
              <div className="section-heading-underline" />
            </div>
            <Link to="/all-categories" className="text-sm font-semibold flex items-center gap-1 green-text">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularProducts.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Deals */}
      <section className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.02 145)' }}>
        <div className="container-fc">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-heading">🔥 Top Deals Today</h2>
              <div className="section-heading-underline" />
            </div>
            <Link to="/deals-offers" className="text-sm font-semibold flex items-center gap-1 green-text">
              All Deals <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {dealProducts.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* App Download Banner */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, oklch(0.18 0.08 145) 0%, oklch(0.42 0.15 145) 100%)' }}>
        <div className="container-fc">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Download the FreshCart App</h2>
              <p className="text-base opacity-90 mb-6">Get exclusive app-only deals, track your orders in real-time, and enjoy a seamless shopping experience.</p>
              <div className="flex gap-3 flex-wrap">
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold" style={{ backgroundColor: 'oklch(1 0 0 / 0.15)', border: '2px solid oklch(1 0 0 / 0.3)', color: 'white' }}>
                  📱 App Store
                </button>
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold" style={{ backgroundColor: 'oklch(1 0 0 / 0.15)', border: '2px solid oklch(1 0 0 / 0.3)', color: 'white' }}>
                  🤖 Google Play
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">📱</div>
                <div className="flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="oklch(0.75 0.18 80)" color="oklch(0.75 0.18 80)" />)}
                </div>
                <p className="text-white text-sm mt-2 opacity-80">4.8/5 from 2M+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="container-fc">
          <div className="text-center mb-10">
            <h2 className="section-heading">What Our Customers Say</h2>
            <div className="section-heading-underline mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Priya S.', text: 'FreshCart has completely changed how I shop for groceries. The 10-minute delivery is real!', rating: 5 },
              { name: 'Rahul M.', text: 'Amazing quality produce. The organic section is fantastic and prices are very competitive.', rating: 5 },
              { name: 'Anita K.', text: 'Super convenient app, great customer service, and always fresh products. Highly recommend!', rating: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="oklch(0.75 0.18 80)" color="oklch(0.75 0.18 80)" />)}
                </div>
                <p className="text-sm mb-4" style={{ color: 'oklch(0.4 0.04 145)' }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: 'oklch(0.52 0.17 145)' }}>
                    {t.name[0]}
                  </div>
                  <span className="font-semibold text-sm" style={{ color: 'oklch(0.22 0.04 145)' }}>{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
