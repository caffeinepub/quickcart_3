import React from 'react';
import { Link } from '@tanstack/react-router';

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using FreshCart's website, mobile application, or services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and others who access or use our services. We reserve the right to update these terms at any time, and continued use of our services constitutes acceptance of the updated terms.`,
  },
  {
    title: '2. Use of Services',
    content: `You may use our services only for lawful purposes and in accordance with these Terms. You agree not to:

• Use our services in any way that violates applicable laws or regulations
• Attempt to gain unauthorized access to our systems or user accounts
• Transmit any harmful, offensive, or disruptive content
• Use automated tools to scrape or collect data from our platform
• Impersonate any person or entity or misrepresent your affiliation

We reserve the right to terminate your access for violations of these terms.`,
  },
  {
    title: '3. Account Registration',
    content: `To place orders, you must create an account. You are responsible for:

• Providing accurate and complete registration information
• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized use

You must be at least 18 years old to create an account and place orders.`,
  },
  {
    title: '4. Orders & Pricing',
    content: `All orders are subject to product availability. We reserve the right to:

• Refuse or cancel any order at our discretion
• Modify prices without prior notice
• Limit quantities purchased per customer

Prices displayed are inclusive of applicable taxes unless stated otherwise. We strive for accuracy but are not responsible for typographical errors in pricing.`,
  },
  {
    title: '5. Delivery',
    content: `Delivery times are estimates and not guaranteed. Factors beyond our control (weather, traffic, etc.) may affect delivery times. We are not liable for delays caused by circumstances outside our reasonable control.

Delivery is available only in serviceable areas. You are responsible for providing accurate delivery information.`,
  },
  {
    title: '6. Intellectual Property',
    content: `All content on FreshCart, including text, graphics, logos, images, and software, is the property of FreshCart or its content suppliers and is protected by intellectual property laws.

You may not reproduce, distribute, or create derivative works without our express written permission.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by law, FreshCart shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.

Our total liability for any claim arising from these terms shall not exceed the amount paid by you for the specific order giving rise to the claim.`,
  },
  {
    title: '8. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.

For any legal notices, contact us at legal@freshcart.in`,
  },
];

export default function TermsConditions() {
  return (
    <div>
      <div className="page-banner">
        <div className="container-fc">
          <nav className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 145)' }}>
            <Link to="/" className="hover:underline green-text">Home</Link> / <span>Terms & Conditions</span>
          </nav>
          <h1 className="page-banner-title">Terms & Conditions</h1>
          <p className="text-sm mt-2" style={{ color: 'oklch(0.45 0.05 145)' }}>Last updated: March 1, 2026</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-fc max-w-3xl">
          <div className="rounded-2xl p-6 mb-6" style={{ backgroundColor: 'oklch(0.97 0.03 145)', border: '1px solid oklch(0.87 0.1 145)' }}>
            <p className="text-sm" style={{ color: 'oklch(0.35 0.05 145)', lineHeight: '1.7' }}>
              Please read these Terms and Conditions carefully before using FreshCart. These terms govern your use of our platform and services. By using FreshCart, you agree to these terms.
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
