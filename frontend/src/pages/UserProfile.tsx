import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { User, MapPin, Package, Edit2, Save } from 'lucide-react';

interface UserData {
  name: string; email: string; phone: string;
}

export default function UserProfile() {
  const [user, setUser] = useState<UserData>({ name: 'Guest User', email: 'guest@example.com', phone: '' });
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<UserData>(user);

  useEffect(() => {
    const data = localStorage.getItem('freshcart_user');
    if (data) { const u = JSON.parse(data); setUser(u); setForm(u); }
  }, []);

  const handleSave = () => {
    setUser(form);
    localStorage.setItem('freshcart_user', JSON.stringify(form));
    setEditing(false);
  };

  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>My Profile</span>
          </nav>
          <h1 className="page-banner-title">My Profile</h1>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-6 text-center" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl font-bold text-white" style={{ backgroundColor: 'oklch(0.52 0.17 145)' }}>
                  {user.name[0]?.toUpperCase() || 'U'}
                </div>
                <p className="font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{user.name}</p>
                <p className="text-xs mt-1" style={{ color: 'oklch(0.55 0.04 145)' }}>{user.email}</p>
              </div>
              <nav className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                {[
                  { icon: <User size={16} />, label: 'Profile', active: true },
                  { icon: <Package size={16} />, label: 'My Orders', link: '/order-history' },
                  { icon: <MapPin size={16} />, label: 'Addresses' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 text-sm font-medium border-b cursor-pointer transition-colors" style={{ borderColor: 'oklch(0.96 0.01 145)', backgroundColor: item.active ? 'oklch(0.97 0.03 145)' : 'white', color: item.active ? 'oklch(0.52 0.17 145)' : 'oklch(0.35 0.04 145)' }}>
                    {item.icon} {item.label}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Personal Information</h3>
                  <button onClick={() => editing ? handleSave() : setEditing(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: 'oklch(0.52 0.17 145)' }}>
                    {editing ? <><Save size={14} /> Save</> : <><Edit2 size={14} /> Edit</>}
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Full Name', key: 'name' as keyof UserData, placeholder: 'Your full name' },
                    { label: 'Email Address', key: 'email' as keyof UserData, placeholder: 'your@email.com' },
                    { label: 'Phone Number', key: 'phone' as keyof UserData, placeholder: '10-digit mobile number' },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="fc-label">{field.label}</label>
                      {editing ? (
                        <input className="fc-input" value={form[field.key]} onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))} placeholder={field.placeholder} />
                      ) : (
                        <p className="px-4 py-3 rounded-lg text-sm" style={{ backgroundColor: 'oklch(0.97 0.02 145)', color: form[field.key] ? 'oklch(0.25 0.04 145)' : 'oklch(0.65 0.03 145)' }}>
                          {form[field.key] || field.placeholder}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
