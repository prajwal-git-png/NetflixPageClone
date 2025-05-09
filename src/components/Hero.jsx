import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Starts at ₹149. Cancel at any time.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="email-form">
          <input type="email" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 