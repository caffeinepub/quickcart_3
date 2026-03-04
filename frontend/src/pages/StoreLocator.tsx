import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { MapPin, Search, CheckCircle, XCircle } from 'lucide-react';

const SERVICEABLE_PINCODES = ['400001', '400050', '400051', '400052', '400053', '400054', '400055', '400056', '400057', '400058', '400059', '400060', '110001', '110002', '110003', '110004', '110005', '560001', '560002', '560003', '500001', '500002', '600001', '600002', '411001', '411002', '700001', '700002', '380001', '380002'];

const DARK_STORES = [
  { name: 'FreshCart Bandra', address: '45 Hill Road, Bandra West, Mumbai', city: 'Mumbai', hours: '24/7', phone: '+91 98765 43210' },
  { name: 'FreshCart Andheri', address: '12 Lokhandwala Complex, Andheri West, Mumbai', city: 'Mumbai', hours: '24/7', phone: '+91 98765 43211' },
  { name: 'FreshCart Powai', address: '8 Hiranandani Gardens, Powai, Mumbai', city: 'Mumbai', hours: '6 AM – 12 AM', phone: '+91 98765 43212' },
  { name: 'FreshCart Connaught Place', address: 'N-12 Connaught Place, New Delhi', city: 'Delhi', hours: '24/7', phone: '+91 98765 43213' },
  { name: 'FreshCart Koramangala', address: '80 Feet Road, Koramangala, Bangalore', city: 'Bangalore', hours: '24/7', phone: '+91 98765 43214' },
  { name: 'FreshCart Jubilee Hills', address: 'Road No. 36, Jubilee Hills, Hyderabad', city: 'Hyderabad', hours: '6 AM – 12 AM', phone: '+91 98765 43215' },
];

export default function StoreLocator() {
  const [pincode, setPincode] = useState('');
  const [checkResult, setCheckResult] = useState<'serviceable' | 'not-serviceable' | null>(null);
  const [selectedCity, setSelectedCity] = useState('All');

  const checkPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode.trim() || !/^\d{6}$/.test(pincode)) { alert('Please enter a valid 6-digit pincode'); return; }
    setCheckResult(SERVICEABLE_PINCODES.includes(pincode) ? 'serviceable' : 'not-serviceable');
  };

  const cities = ['All', ...Array.from(new Set(DARK_STORES.map(s => s.city)))];
  const filtered = selectedCity === 'All' ? DARK_STORES : DARK_STORES.filter(s => s.city === selectedCity);

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Store Locator</span>
          </nav>
          <h1 className="page-banner-title">Store Locator & Coverage</h1>
          <p className="text-base mt-2" style={{ color: 'oklch(0.4 0.05 145)' }}>Find FreshCart dark stores near you and check delivery coverage</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc">
          {/* Pincode Checker */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-6 text-center" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
              <div className="text-4xl mb-3">📍</div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Check Delivery Availability</h2>
              <p className="text-sm mb-5" style={{ color: 'oklch(0.5 0.04 145)' }}>Enter your pincode to check if FreshCart delivers to your area</p>
              <form onSubmit={checkPincode} className="flex gap-3">
                <div className="flex items-center gap-2 flex-1 rounded-xl border px-4 py-3" style={{ borderColor: 'oklch(0.88 0.03 145)' }}>
                  <Search size={16} style={{ color: 'oklch(0.55 0.04 145)' }} />
                  <input
                    type="text"
                    placeholder="Enter 6-digit pincode"
                    value={pincode}
                    onChange={e => { setPincode(e.target.value); setCheckResult(null); }}
                    className="flex-1 text-sm outline-none bg-transparent"
                    maxLength={6}
                  />
                </div>
                <button type="submit" className="btn-primary">Check</button>
              </form>
              {checkResult === 'serviceable' && (
                <div className="mt-4 flex items-center gap-2 justify-center p-3 rounded-xl" style={{ backgroundColor: 'oklch(0.93 0.08 145)' }}>
                  <CheckCircle size={18} style={{ color: 'oklch(0.52 0.17 145)' }} />
                  <p className="text-sm font-semibold green-text">Great news! We deliver to pincode {pincode} 🎉</p>
                </div>
              )}
              {checkResult === 'not-serviceable' && (
                <div className="mt-4 flex items-center gap-2 justify-center p-3 rounded-xl" style={{ backgroundColor: 'oklch(0.97 0.04 27)', border: '1px solid oklch(0.9 0.08 27)' }}>
                  <XCircle size={18} style={{ color: 'oklch(0.577 0.245 27.325)' }} />
                  <p className="text-sm font-semibold" style={{ color: 'oklch(0.5 0.2 27)' }}>Sorry, we don't deliver to {pincode} yet. Coming soon!</p>
                </div>
              )}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-2xl mb-10 flex items-center justify-center" style={{ height: 280, background: 'linear-gradient(135deg, oklch(0.93 0.08 145) 0%, oklch(0.87 0.1 145) 100%)', border: '2px solid oklch(0.87 0.1 145)' }}>
            <div className="text-center">
              <div className="text-6xl mb-3">🗺️</div>
              <p className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.25 0.08 145)' }}>Coverage Map</p>
              <p className="text-sm" style={{ color: 'oklch(0.4 0.06 145)' }}>30+ cities · 200+ dark stores across India</p>
            </div>
          </div>

          {/* Store List */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Our Dark Stores</h2>
              <div className="flex gap-2">
                {cities.map(city => (
                  <button key={city} onClick={() => setSelectedCity(city)} className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all" style={{ backgroundColor: selectedCity === city ? 'oklch(0.52 0.17 145)' : 'oklch(0.97 0.03 145)', color: selectedCity === city ? 'white' : 'oklch(0.4 0.05 145)', border: '1px solid oklch(0.87 0.1 145)' }}>
                    {city}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((store, i) => (
                <div key={i} className="bg-white rounded-xl p-5" style={{ boxShadow: '0 1px 6px oklch(0.18 0.02 145 / 0.06)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.93 0.08 145)' }}>
                      <MapPin size={18} style={{ color: 'oklch(0.52 0.17 145)' }} />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{store.name}</p>
                      <p className="text-xs mb-1" style={{ color: 'oklch(0.5 0.04 145)' }}>{store.address}</p>
                      <p className="text-xs" style={{ color: 'oklch(0.5 0.04 145)' }}>⏰ {store.hours} · 📞 {store.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
