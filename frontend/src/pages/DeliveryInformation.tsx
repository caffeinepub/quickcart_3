import React from 'react';
import { Link } from '@tanstack/react-router';
import { Truck, Clock, MapPin, Package, AlertCircle } from 'lucide-react';

const CITIES = [
  { name: 'Mumbai', areas: 'All areas', time: '10 min', fee: 'Free above ₹299' },
  { name: 'Delhi NCR', areas: 'Delhi, Noida, Gurgaon, Faridabad', time: '12 min', fee: 'Free above ₹299' },
  { name: 'Bangalore', areas: 'All areas', time: '10 min', fee: 'Free above ₹299' },
  { name: 'Hyderabad', areas: 'Hyderabad, Secunderabad', time: '15 min', fee: 'Free above ₹299' },
  { name: 'Chennai', areas: 'All areas', time: '12 min', fee: 'Free above ₹299' },
  { name: 'Pune', areas: 'Pune city limits', time: '15 min', fee: 'Free above ₹299' },
  { name: 'Kolkata', areas: 'Central & South Kolkata', time: '15 min', fee: 'Free above ₹299' },
  { name: 'Ahmedabad', areas: 'Ahmedabad city', time: '15 min', fee: 'Free above ₹299' },
];

export default function DeliveryInformation() {
  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Delivery Information</span>
          </nav>
          <h1 className="page-banner-title">Delivery Information</h1>
          <p className="text-base mt-2" style={{ color: 'oklch(0.4 0.05 145)' }}>Everything you need to know about our delivery service</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc">
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Clock size={28} />, title: '10-Minute Delivery', desc: 'Ultra-fast delivery from our dark stores near you' },
              { icon: <Truck size={28} />, title: 'Free Delivery', desc: 'On all orders above ₹299. Just ₹29 below that.' },
              { icon: <MapPin size={28} />, title: '30+ Cities', desc: 'Serving 30 cities across India with 200+ dark stores' },
              { icon: <Package size={28} />, title: 'Safe Packaging', desc: 'Eco-friendly, insulated packaging for all products' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 green-text" style={{ backgroundColor: 'oklch(0.93 0.08 145)' }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{item.title}</h3>
                <p className="text-xs" style={{ color: 'oklch(0.5 0.04 145)', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Delivery Details */}
            <div className="space-y-6">
              {[
                {
                  title: 'Delivery Hours',
                  content: `FreshCart delivers 24 hours a day, 7 days a week, 365 days a year — including holidays!

• Standard delivery: 6 AM – 12 AM (midnight)
• Late night delivery: 12 AM – 6 AM (select cities)
• Express delivery: Available all day in all cities`,
                },
                {
                  title: 'Delivery Fees',
                  content: `• Orders above ₹299: FREE delivery
• Orders below ₹299: ₹29 delivery fee
• Surge pricing may apply during peak hours or bad weather
• No hidden charges — what you see is what you pay`,
                },
                {
                  title: 'Special Instructions',
                  content: `You can add delivery instructions at checkout:

• Leave at door / with security
• Call before delivery
• Specific landmark or directions
• Preferred delivery time window

Our delivery partners will do their best to follow your instructions.`,
                },
                {
                  title: 'Packaging',
                  content: `We use eco-friendly packaging:

• Insulated bags for temperature-sensitive items
• Biodegradable packaging materials
• Separate bags for raw meat and produce
• Tamper-evident seals for all orders`,
                },
              ].map((section, i) => (
                <div key={i} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 1px 6px oklch(0.18 0.02 145 / 0.06)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <h3 className="font-bold text-base mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{section.title}</h3>
                  <p className="text-sm whitespace-pre-line" style={{ color: 'oklch(0.4 0.04 145)', lineHeight: '1.8' }}>{section.content}</p>
                </div>
              ))}
            </div>

            {/* City Table */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Serviceable Cities</h2>
              <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <div className="grid grid-cols-4 gap-0 p-3 text-xs font-bold" style={{ backgroundColor: 'oklch(0.52 0.17 145)', color: 'white' }}>
                  <span>City</span>
                  <span>Coverage</span>
                  <span>Avg Time</span>
                  <span>Delivery Fee</span>
                </div>
                {CITIES.map((city, i) => (
                  <div key={i} className="grid grid-cols-4 gap-0 p-3 text-xs border-b" style={{ borderColor: 'oklch(0.96 0.01 145)', backgroundColor: i % 2 === 0 ? 'white' : 'oklch(0.99 0.01 145)' }}>
                    <span className="font-semibold" style={{ color: 'oklch(0.22 0.04 145)' }}>{city.name}</span>
                    <span style={{ color: 'oklch(0.45 0.04 145)' }}>{city.areas}</span>
                    <span className="green-text font-semibold">{city.time}</span>
                    <span style={{ color: 'oklch(0.45 0.04 145)' }}>{city.fee}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl flex gap-3" style={{ backgroundColor: 'oklch(0.97 0.04 55)', border: '1px solid oklch(0.9 0.08 55)' }}>
                <AlertCircle size={18} style={{ color: 'oklch(0.68 0.19 55)', flexShrink: 0, marginTop: 2 }} />
                <p className="text-xs" style={{ color: 'oklch(0.4 0.08 55)', lineHeight: '1.6' }}>
                  Delivery times may vary during peak hours, bad weather, or high demand periods. We always strive to deliver as fast as possible!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
