import React from 'react';
import { Link } from '@tanstack/react-router';
import { Target, Heart, Leaf, Users, Award, TrendingUp } from 'lucide-react';

const TEAM = [
  { name: 'Arjun Sharma', role: 'CEO & Co-Founder', emoji: '👨‍💼', bio: 'Former Amazon executive with 15 years in e-commerce and supply chain.' },
  { name: 'Priya Patel', role: 'CTO & Co-Founder', emoji: '👩‍💻', bio: 'Ex-Google engineer passionate about building scalable tech solutions.' },
  { name: 'Rahul Gupta', role: 'Head of Operations', emoji: '👨‍🔧', bio: "Logistics expert who built FreshCart's 10-minute delivery network." },
  { name: 'Sneha Reddy', role: 'Head of Marketing', emoji: '👩‍🎨', bio: 'Brand strategist who grew FreshCart from 0 to 2M users in 2 years.' },
  { name: 'Vikram Singh', role: 'Head of Procurement', emoji: '👨‍🌾', bio: 'Agricultural expert ensuring the freshest produce from local farms.' },
  { name: 'Meera Joshi', role: 'Customer Experience Lead', emoji: '👩‍💼', bio: 'Dedicated to making every FreshCart experience delightful.' },
];

const VALUES = [
  { icon: <Leaf size={28} />, title: 'Freshness First', desc: 'We source directly from farms and guarantee the freshest produce every time.' },
  { icon: <Heart size={28} />, title: 'Customer Love', desc: 'Every decision we make is centered around making our customers happy.' },
  { icon: <Target size={28} />, title: 'Speed & Reliability', desc: 'We promise 10-minute delivery and we deliver on that promise, every time.' },
  { icon: <Users size={28} />, title: 'Community Impact', desc: 'We support local farmers and create jobs in the communities we serve.' },
  { icon: <Award size={28} />, title: 'Quality Assurance', desc: 'Every product is quality-checked before it reaches your doorstep.' },
  { icon: <TrendingUp size={28} />, title: 'Sustainability', desc: 'We use eco-friendly packaging and work towards a greener future.' },
];

const MILESTONES = [
  { year: '2020', title: 'FreshCart Founded', desc: 'Started with 3 dark stores in Mumbai, delivering to 500 customers.' },
  { year: '2021', title: 'Series A Funding', desc: 'Raised ₹50 Crore to expand operations across 5 cities.' },
  { year: '2022', title: '1 Million Customers', desc: 'Crossed 1 million registered users and launched in 15 cities.' },
  { year: '2023', title: 'Organic Range Launch', desc: 'Launched certified organic product line with 500+ SKUs.' },
  { year: '2024', title: '2 Million Customers', desc: 'Expanded to 30 cities with 200+ dark stores across India.' },
  { year: '2025', title: 'International Expansion', desc: 'Launched in Dubai and Singapore, serving the Indian diaspora.' },
];

export default function AboutUs() {
  return (
    <div>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>About Us</span>
          </nav>
          <h1 className="page-banner-title">About FreshCart</h1>
          <p className="text-base mt-2" style={{ color: 'oklch(0.4 0.05 145)' }}>Our story, mission, and the people behind your groceries</p>
        </div>
      </div>

      {/* Mission */}
      <section className="section-pad">
        <div className="container-fc">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="tag-chip mb-4 inline-block">Our Mission</span>
              <h2 className="section-heading mb-4">Making Fresh Groceries Accessible to Everyone</h2>
              <div className="section-heading-underline" />
              <p className="text-base mb-4" style={{ color: 'oklch(0.4 0.05 145)' }}>
                At FreshCart, we believe that everyone deserves access to fresh, high-quality groceries at affordable prices. We're on a mission to revolutionize the way India shops for groceries by combining technology, logistics, and a passion for freshness.
              </p>
              <p className="text-base mb-6" style={{ color: 'oklch(0.4 0.05 145)' }}>
                Founded in 2020, we started with a simple idea: what if you could get fresh groceries delivered to your door in under 10 minutes? Today, we serve over 2 million customers across 30 cities in India.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: '2M+', label: 'Happy Customers' },
                  { num: '30+', label: 'Cities Served' },
                  { num: '5000+', label: 'Products' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl" style={{ backgroundColor: 'oklch(0.97 0.03 145)' }}>
                    <div className="text-2xl font-bold green-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.num}</div>
                    <div className="text-xs mt-1" style={{ color: 'oklch(0.5 0.04 145)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-3xl flex items-center justify-center text-8xl" style={{ background: 'linear-gradient(135deg, oklch(0.93 0.08 145), oklch(0.87 0.1 145))' }}>
                  🛒
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl" style={{ backgroundColor: 'oklch(0.68 0.19 55)', boxShadow: '0 4px 12px oklch(0.68 0.19 55 / 0.4)' }}>
                  ⚡
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl" style={{ backgroundColor: 'oklch(0.52 0.17 145)', boxShadow: '0 4px 12px oklch(0.52 0.17 145 / 0.4)' }}>
                  🌿
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.02 145)' }}>
        <div className="container-fc max-w-4xl">
          <div className="text-center mb-8">
            <span className="tag-chip mb-4 inline-block">Our Story</span>
            <h2 className="section-heading">How FreshCart Began</h2>
            <div className="section-heading-underline mx-auto" />
          </div>
          <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)' }}>
            <p className="text-base mb-4" style={{ color: 'oklch(0.35 0.04 145)', lineHeight: '1.8' }}>
              It was a rainy evening in Mumbai when our co-founders Arjun and Priya found themselves unable to get fresh vegetables for dinner. Every nearby store was closed, and online delivery would take hours. That frustration sparked an idea.
            </p>
            <p className="text-base mb-4" style={{ color: 'oklch(0.35 0.04 145)', lineHeight: '1.8' }}>
              "What if we could build a network of micro-warehouses — dark stores — strategically placed across the city, so that no one is ever more than 2km away from fresh groceries?" Arjun recalls. Within 6 months, they had their first 3 dark stores operational in Mumbai.
            </p>
            <p className="text-base" style={{ color: 'oklch(0.35 0.04 145)', lineHeight: '1.8' }}>
              Today, FreshCart operates 200+ dark stores across 30 Indian cities, employs 10,000+ people, and has delivered over 50 million orders. But our core mission remains the same: making fresh, quality groceries accessible to everyone, everywhere, in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad">
        <div className="container-fc">
          <div className="text-center mb-10">
            <h2 className="section-heading">Our Core Values</h2>
            <div className="section-heading-underline mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 green-text" style={{ backgroundColor: 'oklch(0.93 0.08 145)' }}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{v.title}</h3>
                <p className="text-sm" style={{ color: 'oklch(0.45 0.04 145)', lineHeight: '1.6' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.02 145)' }}>
        <div className="container-fc">
          <div className="text-center mb-10">
            <h2 className="section-heading">Meet Our Team</h2>
            <div className="section-heading-underline mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">{member.emoji}</div>
                <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{member.name}</h3>
                <p className="text-sm font-medium mb-3 green-text">{member.role}</p>
                <p className="text-sm" style={{ color: 'oklch(0.45 0.04 145)', lineHeight: '1.6' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-pad">
        <div className="container-fc max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="section-heading">Our Journey</h2>
            <div className="section-heading-underline mx-auto" />
          </div>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'oklch(0.87 0.1 145)' }} />
            {MILESTONES.map((m, i) => (
              <div key={i} className="relative mb-8">
                <div className="timeline-dot absolute -left-5 top-1" />
                <div className="bg-white rounded-xl p-5" style={{ boxShadow: '0 2px 8px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <span className="text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block" style={{ backgroundColor: 'oklch(0.93 0.08 145)', color: 'oklch(0.35 0.1 145)' }}>{m.year}</span>
                  <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{m.title}</h3>
                  <p className="text-sm" style={{ color: 'oklch(0.45 0.04 145)' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
