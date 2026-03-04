import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { MapPin, Clock, ChevronRight, Upload } from 'lucide-react';

const JOBS = [
  { title: 'Senior Software Engineer – Backend', dept: 'Engineering', location: 'Mumbai / Remote', type: 'Full-time', exp: '4-7 years' },
  { title: 'Product Manager – Growth', dept: 'Product', location: 'Bangalore', type: 'Full-time', exp: '3-6 years' },
  { title: 'Data Scientist – Demand Forecasting', dept: 'Data & Analytics', location: 'Mumbai', type: 'Full-time', exp: '2-5 years' },
  { title: 'Delivery Operations Manager', dept: 'Operations', location: 'Delhi NCR', type: 'Full-time', exp: '3-5 years' },
  { title: 'UI/UX Designer', dept: 'Design', location: 'Bangalore / Remote', type: 'Full-time', exp: '2-4 years' },
  { title: 'Category Manager – Fresh Produce', dept: 'Merchandising', location: 'Mumbai', type: 'Full-time', exp: '3-6 years' },
  { title: 'Customer Support Executive', dept: 'Customer Experience', location: 'Multiple Cities', type: 'Full-time', exp: '0-2 years' },
  { title: 'Delivery Partner', dept: 'Logistics', location: 'All Cities', type: 'Part-time / Full-time', exp: 'No experience required' },
];

const PERKS = [
  { emoji: '💰', title: 'Competitive Salary', desc: 'Market-leading compensation with ESOPs' },
  { emoji: '🏥', title: 'Health Insurance', desc: 'Comprehensive coverage for you and family' },
  { emoji: '🌴', title: 'Flexible Leave', desc: 'Unlimited PTO policy for all employees' },
  { emoji: '📚', title: 'Learning Budget', desc: '₹50,000 annual learning & development budget' },
  { emoji: '🍱', title: 'Free Groceries', desc: 'Monthly FreshCart credits for all employees' },
  { emoji: '🏠', title: 'Remote Friendly', desc: 'Hybrid work options for most roles' },
];

export default function Careers() {
  const [applied, setApplied] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [appForm, setAppForm] = useState({ name: '', email: '', phone: '', role: '' });

  const handleApply = (jobTitle: string) => {
    setAppForm(f => ({ ...f, role: jobTitle }));
    setShowForm(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(appForm.role);
    setShowForm(false);
  };

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Careers</span>
          </nav>
          <h1 className="page-banner-title">Join the FreshCart Team</h1>
          <p className="text-base mt-2" style={{ color: 'oklch(0.4 0.05 145)' }}>Help us build the future of grocery delivery in India</p>
        </div>
      </div>

      {/* Culture */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, oklch(0.18 0.08 145) 0%, oklch(0.42 0.15 145) 100%)' }}>
        <div className="container-fc text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Work at FreshCart?</h2>
          <p className="text-base opacity-90 max-w-2xl mx-auto mb-10">We're a fast-growing startup with the energy of a startup and the stability of a market leader. Join 10,000+ passionate people building something that matters.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PERKS.map((perk, i) => (
              <div key={i} className="rounded-2xl p-4 text-center" style={{ backgroundColor: 'oklch(1 0 0 / 0.1)' }}>
                <div className="text-3xl mb-2">{perk.emoji}</div>
                <p className="font-bold text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{perk.title}</p>
                <p className="text-xs opacity-80">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="section-pad">
        <div className="container-fc">
          <div className="text-center mb-10">
            <h2 className="section-heading">Open Positions</h2>
            <div className="section-heading-underline mx-auto" />
            <p className="text-sm mt-3" style={{ color: 'oklch(0.5 0.04 145)' }}>{JOBS.length} open positions across all departments</p>
          </div>

          {applied && (
            <div className="mb-6 p-4 rounded-xl flex items-center gap-3" style={{ backgroundColor: 'oklch(0.93 0.08 145)', border: '1px solid oklch(0.87 0.1 145)' }}>
              <span className="text-2xl">🎉</span>
              <p className="text-sm font-semibold green-text">Application submitted for "{applied}"! We'll be in touch within 5 business days.</p>
            </div>
          )}

          <div className="space-y-3">
            {JOBS.map((job, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ boxShadow: '0 1px 6px oklch(0.18 0.02 145 / 0.06)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs" style={{ color: 'oklch(0.5 0.04 145)' }}>
                    <span className="tag-chip">{job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                    <span>Exp: {job.exp}</span>
                  </div>
                </div>
                <button onClick={() => handleApply(job.title)} className="btn-primary flex-shrink-0 flex items-center gap-2 text-sm">
                  Apply Now <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {showForm && (
        <section className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.02 145)' }}>
          <div className="container-fc max-w-2xl">
            <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Apply for: {appForm.role}</h3>
              <p className="text-sm mb-6" style={{ color: 'oklch(0.5 0.04 145)' }}>Fill in your details and we'll get back to you soon</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="fc-label">Full Name *</label>
                    <input required className="fc-input" value={appForm.name} onChange={e => setAppForm(f => ({ ...f, name: e.target.value }))} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="fc-label">Email Address *</label>
                    <input required type="email" className="fc-input" value={appForm.email} onChange={e => setAppForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="fc-label">Phone Number *</label>
                  <input required className="fc-input" value={appForm.phone} onChange={e => setAppForm(f => ({ ...f, phone: e.target.value }))} placeholder="10-digit mobile number" maxLength={10} />
                </div>
                <div>
                  <label className="fc-label">Resume / CV</label>
                  <div className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors" style={{ borderColor: 'oklch(0.87 0.1 145)', backgroundColor: 'oklch(0.97 0.03 145)' }}>
                    <Upload size={24} className="mx-auto mb-2 green-text" />
                    <p className="text-sm font-medium" style={{ color: 'oklch(0.35 0.05 145)' }}>Click to upload or drag & drop</p>
                    <p className="text-xs mt-1" style={{ color: 'oklch(0.6 0.03 145)' }}>PDF, DOC up to 5MB</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button type="submit" className="btn-primary flex-1">Submit Application</button>
                  <button type="button" onClick={() => setShowForm(false)} className="btn-outline-primary flex-1">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
