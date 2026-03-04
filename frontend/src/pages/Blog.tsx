import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const BLOG_POSTS = [
  { id: '1', title: '10 Superfoods You Should Add to Your Diet Today', excerpt: 'Discover the most nutrient-dense foods that can transform your health and energy levels.', category: 'Health & Nutrition', date: 'Feb 28, 2026', readTime: '5 min', emoji: '🥗' },
  { id: '2', title: 'Quick & Easy 15-Minute Dinner Recipes', excerpt: 'Busy weeknight? These simple recipes use pantry staples and fresh vegetables for a wholesome meal.', category: 'Recipes', date: 'Feb 25, 2026', readTime: '7 min', emoji: '🍳' },
  { id: '3', title: 'How to Store Fruits & Vegetables to Keep Them Fresh Longer', excerpt: 'Learn the best storage techniques to extend the shelf life of your produce and reduce food waste.', category: 'Tips & Tricks', date: 'Feb 22, 2026', readTime: '4 min', emoji: '🥦' },
  { id: '4', title: 'The Complete Guide to Organic Eating on a Budget', excerpt: "Going organic doesn't have to break the bank. Here's how to make smart choices without overspending.", category: 'Organic Living', date: 'Feb 18, 2026', readTime: '6 min', emoji: '🌿' },
  { id: '5', title: 'Meal Prep Sunday: Plan Your Week in 2 Hours', excerpt: 'Master the art of meal prepping with our step-by-step guide to a stress-free, healthy week.', category: 'Meal Planning', date: 'Feb 15, 2026', readTime: '8 min', emoji: '📋' },
  { id: '6', title: 'Seasonal Eating: Why Buying Local & Seasonal Matters', excerpt: 'Understand the environmental and health benefits of eating with the seasons and supporting local farmers.', category: 'Sustainability', date: 'Feb 10, 2026', readTime: '5 min', emoji: '🌱' },
  { id: '7', title: "Baby's First Foods: A Complete Weaning Guide", excerpt: 'Everything you need to know about introducing solid foods to your baby safely and nutritiously.', category: 'Baby & Family', date: 'Feb 5, 2026', readTime: '9 min', emoji: '👶' },
  { id: '8', title: 'The Best Smoothie Recipes for Every Morning', excerpt: 'Start your day right with these delicious, nutrient-packed smoothie recipes using fresh fruits.', category: 'Recipes', date: 'Feb 1, 2026', readTime: '4 min', emoji: '🥤' },
  { id: '9', title: 'Understanding Food Labels: What to Look For', excerpt: 'Decode nutrition labels and ingredient lists to make healthier, more informed grocery choices.', category: 'Health & Nutrition', date: 'Jan 28, 2026', readTime: '6 min', emoji: '🏷️' },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Health & Nutrition': 'oklch(0.93 0.08 145)',
  'Recipes': 'oklch(0.95 0.06 55)',
  'Tips & Tricks': 'oklch(0.93 0.06 200)',
  'Organic Living': 'oklch(0.93 0.07 145)',
  'Meal Planning': 'oklch(0.95 0.05 80)',
  'Sustainability': 'oklch(0.93 0.07 145)',
  'Baby & Family': 'oklch(0.95 0.04 300)',
};

export default function Blog() {
  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Blog</span>
          </nav>
          <h1 className="page-banner-title">Tips, Recipes & More</h1>
          <p className="text-base mt-2" style={{ color: 'oklch(0.4 0.05 145)' }}>Fresh ideas for a healthier, tastier life</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map(post => (
              // Use plain anchor to avoid TanStack Router typed-path constraint on dynamic segments
              <a key={post.id} href={`/blog/${post.id}`} className="no-underline">
                <div className="blog-card h-full flex flex-col">
                  <div className="h-48 flex items-center justify-center text-7xl" style={{ backgroundColor: CATEGORY_COLORS[post.category] || 'oklch(0.97 0.03 145)' }}>
                    {post.emoji}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="tag-chip mb-3 self-start">{post.category}</span>
                    <h3 className="font-bold text-base mb-2 flex-1" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)', lineHeight: '1.4' }}>{post.title}</h3>
                    <p className="text-sm mb-4" style={{ color: 'oklch(0.45 0.04 145)', lineHeight: '1.6' }}>{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs" style={{ color: 'oklch(0.6 0.03 145)' }}>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime} read</span>
                      </div>
                      <span className="flex items-center gap-1 green-text font-semibold">Read <ArrowRight size={12} /></span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
