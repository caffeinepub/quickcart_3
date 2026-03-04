import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Mail, CheckCircle } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) { setError('Email is required'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email address'); return; }
    setError('');
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1000);
  };

  return (
    <div className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.02 145)' }}>
      <div className="container-fc max-w-md">
        <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 4px 24px oklch(0.18 0.02 145 / 0.1)' }}>
          {sent ? (
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'oklch(0.93 0.08 145)' }}>
                <CheckCircle size={32} style={{ color: 'oklch(0.52 0.17 145)' }} />
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Email Sent!</h2>
              <p className="text-sm mb-6" style={{ color: 'oklch(0.45 0.04 145)' }}>We've sent a password reset link to <strong>{email}</strong>. Check your inbox.</p>
              <Link to="/login" className="btn-primary inline-flex">Back to Login</Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="text-5xl mb-3">🔐</div>
                <h1 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>Forgot Password?</h1>
                <p className="text-sm mt-1" style={{ color: 'oklch(0.55 0.04 145)' }}>Enter your email to receive a reset link</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="fc-label">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'oklch(0.55 0.04 145)' }} />
                    <input type="email" className={`fc-input pl-9 ${error ? 'error' : ''}`} value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" />
                  </div>
                  {error && <p className="fc-error">{error}</p>}
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full">
                  {loading ? '⏳ Sending...' : 'Send Reset Link'}
                </button>
              </form>
              <p className="text-center text-sm mt-6" style={{ color: 'oklch(0.45 0.04 145)' }}>
                Remember your password?{' '}
                <Link to="/login" className="font-semibold green-text">Sign In</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
