import React, { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Eye, EyeOff } from 'lucide-react';

interface FormErrors { email?: string; password?: string; }

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const e: FormErrors = {};
    if (!email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email address';
    if (!password) e.password = 'Password is required';
    else if (password.length < 6) e.password = 'Password must be at least 6 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('freshcart_user', JSON.stringify({ name: 'FreshCart User', email, phone: '' }));
      localStorage.setItem('freshcart_session', 'active');
      navigate({ to: '/' });
    }, 800);
  };

  return (
    <div className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.02 145)' }}>
      <div className="container-fc max-w-md">
        <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 24px oklch(0.18 0.02 145 / 0.1)' }}>
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🛒</div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Welcome Back!</h1>
            <p className="text-sm mt-1" style={{ color: 'oklch(0.55 0.04 145)' }}>Sign in to your FreshCart account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="fc-label">Email Address</label>
              <input type="email" className={`fc-input ${errors.email ? 'error' : ''}`} value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" />
              {errors.email && <p className="fc-error">{errors.email}</p>}
            </div>
            <div>
              <label className="fc-label">Password</label>
              <div className="relative">
                <input type={showPwd ? 'text' : 'password'} className={`fc-input pr-10 ${errors.password ? 'error' : ''}`} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: 'oklch(0.55 0.04 145)' }}>
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="fc-error">{errors.password}</p>}
            </div>
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-xs font-medium green-text">Forgot Password?</Link>
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? '⏳ Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: 'oklch(0.45 0.04 145)' }}>
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold green-text">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
