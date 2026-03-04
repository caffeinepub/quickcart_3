import React, { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Eye, EyeOff } from 'lucide-react';

interface FormErrors { name?: string; email?: string; phone?: string; password?: string; confirm?: string; }

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone number';
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters';
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('freshcart_user', JSON.stringify({ name: form.name, email: form.email, phone: form.phone }));
      localStorage.setItem('freshcart_session', 'active');
      navigate({ to: '/' });
    }, 800);
  };

  const f = (key: keyof typeof form) => ({ value: form[key], onChange: (e: React.ChangeEvent<HTMLInputElement>) => setForm(p => ({ ...p, [key]: e.target.value })) });

  return (
    <div className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.02 145)' }}>
      <div className="container-fc max-w-md">
        <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 24px oklch(0.18 0.02 145 / 0.1)' }}>
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🌿</div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Create Account</h1>
            <p className="text-sm mt-1" style={{ color: 'oklch(0.55 0.04 145)' }}>Join FreshCart for fresh groceries</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="fc-label">Full Name</label>
              <input className={`fc-input ${errors.name ? 'error' : ''}`} {...f('name')} placeholder="John Doe" />
              {errors.name && <p className="fc-error">{errors.name}</p>}
            </div>
            <div>
              <label className="fc-label">Email Address</label>
              <input type="email" className={`fc-input ${errors.email ? 'error' : ''}`} {...f('email')} placeholder="your@email.com" />
              {errors.email && <p className="fc-error">{errors.email}</p>}
            </div>
            <div>
              <label className="fc-label">Phone Number</label>
              <input className={`fc-input ${errors.phone ? 'error' : ''}`} {...f('phone')} placeholder="10-digit mobile number" maxLength={10} />
              {errors.phone && <p className="fc-error">{errors.phone}</p>}
            </div>
            <div>
              <label className="fc-label">Password</label>
              <div className="relative">
                <input type={showPwd ? 'text' : 'password'} className={`fc-input pr-10 ${errors.password ? 'error' : ''}`} {...f('password')} placeholder="Min. 6 characters" />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: 'oklch(0.55 0.04 145)' }}>
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="fc-error">{errors.password}</p>}
            </div>
            <div>
              <label className="fc-label">Confirm Password</label>
              <input type="password" className={`fc-input ${errors.confirm ? 'error' : ''}`} {...f('confirm')} placeholder="Re-enter password" />
              {errors.confirm && <p className="fc-error">{errors.confirm}</p>}
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? '⏳ Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: 'oklch(0.45 0.04 145)' }}>
            Already have an account?{' '}
            <Link to="/login" className="font-semibold green-text">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
