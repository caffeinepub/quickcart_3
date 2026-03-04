import React from 'react';
import { Link } from '@tanstack/react-router';

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This includes:

• Personal identification information (name, email address, phone number)
• Delivery address and location data
• Payment information (processed securely through third-party payment processors)
• Order history and preferences
• Device information and usage data when you use our app or website`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Process and fulfill your orders
• Send order confirmations, updates, and delivery notifications
• Provide customer support and respond to inquiries
• Personalize your shopping experience and recommend products
• Send promotional offers and newsletters (with your consent)
• Improve our services, website, and app
• Comply with legal obligations and prevent fraud`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:

• Delivery partners to fulfill your orders
• Payment processors to handle transactions securely
• Technology service providers who help us operate our platform
• Law enforcement when required by law

All third-party partners are bound by strict confidentiality agreements.`,
  },
  {
    title: '4. Cookies & Tracking',
    content: `We use cookies and similar tracking technologies to:

• Keep you logged in to your account
• Remember your cart and preferences
• Analyze website traffic and usage patterns
• Deliver relevant advertisements

You can control cookie settings through your browser. Disabling cookies may affect some features of our website.`,
  },
  {
    title: '5. Data Security',
    content: `We implement industry-standard security measures to protect your personal information:

• SSL/TLS encryption for all data transmission
• Secure storage with access controls
• Regular security audits and vulnerability assessments
• PCI-DSS compliant payment processing

However, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to:

• Access the personal information we hold about you
• Correct inaccurate or incomplete information
• Request deletion of your personal data
• Opt out of marketing communications at any time
• Data portability — receive your data in a structured format

To exercise these rights, contact us at privacy@freshcart.in`,
  },
  {
    title: '7. Data Retention',
    content: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Order history is retained for 7 years for tax and legal purposes. You may request deletion of your account and associated data at any time.`,
  },
  {
    title: '8. Contact Us',
    content: `If you have questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:

Email: privacy@freshcart.in
Phone: +91 98765 43210
Address: 123 Green Market Street, Bandra West, Mumbai 400050`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Privacy Policy</span>
          </nav>
          <h1 className="page-banner-title">Privacy Policy</h1>
          <p className="text-sm mt-2" style={{ color: 'oklch(0.45 0.05 145)' }}>Last updated: March 1, 2026</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc max-w-3xl">
          <div className="bg-white rounded-2xl p-6 mb-6" style={{ boxShadow: '0 2px 12px oklch(0.18 0.02 145 / 0.08)', border: '1px solid oklch(0.93 0.03 145)', backgroundColor: 'oklch(0.97 0.03 145)' }}>
            <p className="text-sm" style={{ color: 'oklch(0.35 0.05 145)', lineHeight: '1.7' }}>
              At FreshCart, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and mobile application. Please read this policy carefully.
            </p>
          </div>

          <div className="space-y-6">
            {SECTIONS.map((section, i) => (
              <div key={i} className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 1px 6px oklch(0.18 0.02 145 / 0.06)', border: '1px solid oklch(0.93 0.03 145)' }}>
                <h2 className="text-lg font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: 'oklch(0.18 0.04 145)' }}>{section.title}</h2>
                <div className="text-sm whitespace-pre-line" style={{ color: 'oklch(0.4 0.04 145)', lineHeight: '1.8' }}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
