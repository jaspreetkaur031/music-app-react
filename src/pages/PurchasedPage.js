import React from 'react';
import { Link } from 'react-router-dom';
// import './purchase.css'; // Import page-specific CSS

function PurchasedPage() {
  return (
    <main className="container main-content">
      {/* Section 1: Premium Hero Section */}
      <section className="section premium-hero-section animate-fadeInUp delay-200ms">
        <h1 className="premium-hero-title">Go Premium</h1>
        <p className="premium-hero-subtitle">
          Unlock ad-free listening, offline downloads, and high-quality audio.
          Support your favorite artists directly.
        </p>
      </section>
      
      {/* Section 2: Pricing Grid */}
      <section className="section pricing-grid animate-fadeInUp delay-400ms">
        {/* Pricing Card 1: Monthly */}
        <div className="pricing-card tilt-card glass-card glowing-border animate-fadeInUp delay-500ms">
          <span className="tag">Monthly</span>
          <h3>Standard</h3>
          <div className="price">$9.99<span>/month</span></div>
          <p className="description">Perfect for casual listening. Cancel anytime.</p>
          <ul className="features">
            <li>Ad-free music</li>
            <li>Listen anywhere</li>
            <li>On-demand playback</li>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>

        {/* Pricing Card 2: Annual (Popular) */}
        <div className="pricing-card popular tilt-card glass-card glowing-border animate-fadeInUp delay-600ms">
          <span className="tag">Annual</span>
          <h3>Pro</h3>
          <div className="price">$99.99<span>/year</span></div>
          <p className="description">Save 20% and get the best experience.</p>
          <ul className="features">
            <li>All Standard features</li>
            <li>Download for offline listening</li>
            <li>High-fidelity audio quality</li>
            <li>Early access to new releases</li>
          </ul>
          <button className="cta-button">Go Pro</button>
        </div>
      </section>
    </main>
  );
}

export default PurchasedPage;
