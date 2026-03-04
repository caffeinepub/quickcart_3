import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

interface FormData { name: string; email: string; phone: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; phone?: string; message?: string; }

export default function ContactUs() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (form.phone && !/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone number';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  const handleChange = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(p => ({ ...p, [key]: e.target.value }));
  };

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Contact Us</span>
          </nav>
          <h1 className="page-banner-title">Contact Us</h1>
          <p className="text-base mt-2" style={{ color: 'oklch(0.4 0.05 145)' }}>We're here to help — reach out anytime</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Get in Touch</h2>
              {[
                { icon: <MapPin size={20} />, title: 'Our Office', lines: ['123 Green Market Street', 'Bandra West, Mumbai 400050'] },
                { icon: <Phone size={20} />, title: 'Phone', lines: ['1800-FRESH-CART (Toll Free)', '+91 98765 43210'] },
                { icon: <Mail size={20} />, title: 'Email', lines: ['support@freshcart.in', 'business@freshcart.in'] },
                { icon: <Clock size={20} />, title: 'Support Hours', lines: ['24/7 Customer Support', 'Live chat available on app'] },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-xl" style={{ boxShadow: '0 1px 6px oklch(0.18 0.02 145 / 0.06)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 green-text" style={{ backgroundColor: 'oklch(0.93 0.08 145)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{item.title}</p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm" style={{ color: 'oklch(0.45 0.04 145)' }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden" style={{ height: 200, backgroundColor: 'oklch(0.93 0.06 145)', border: '1px solid oklch(0.87 0.1 145)' }}>
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <span className="text-4xl">🗺️</span>
                  <p className="text-sm font-semibold" style={{ color: 'oklch(0.35 0.08 145)' }}>FreshCart HQ</p>
                  <p className="text-xs" style={{ color: 'oklch(0.5 0.05 145)' }}>Bandra West, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 text-center" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'oklch(0.93 0.08 145)' }}>
                    <CheckCircle size={32} style={{ color: 'oklch(0.52 0.17 145)' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Message Sent!</h3>
                  <p className="text-sm mb-6" style={{ color: 'oklch(0.45 0.04 145)' }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' }); }} className="btn-primary inline-flex">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="fc-label">Full Name *</label>
                        <input className={`fc-input ${errors.name ? 'error' : ''}`} value={form.name} onChange={handleChange('name')} placeholder="John Doe" />
                        {errors.name && <p className="fc-error">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="fc-label">Email Address *</label>
                        <input type="email" className={`fc-input ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange('email')} placeholder="your@email.com" />
                        {errors.email && <p className="fc-error">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="fc-label">Phone Number</label>
                        <input className={`fc-input ${errors.phone ? 'error' : ''}`} value={form.phone} onChange={handleChange('phone')} placeholder="10-digit number (optional)" maxLength={10} />
                        {errors.phone && <p className="fc-error">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="fc-label">Subject</label>
                        <select className="fc-input" value={form.subject} onChange={handleChange('subject')}>
                          <option>General Inquiry</option>
                          <option>Order Issue</option>
                          <option>Delivery Problem</option>
                          <option>Refund Request</option>
                          <option>Product Quality</option>
                          <option>Partnership</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="fc-label">Message *</label>
                      <textarea className={`fc-input ${errors.message ? 'error' : ''}`} value={form.message} onChange={handleChange('message')} placeholder="Describe your issue or question in detail..." rows={5} />
                      {errors.message && <p className="fc-error">{errors.message}</p>}
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full">
                      {loading ? '⏳ Sending...' : '📨 Send Message'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
