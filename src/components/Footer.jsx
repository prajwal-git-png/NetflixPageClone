import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-top">Questions? Call 1-844-505-2993</p>
        
        <div className="footer-links">
          <div className="footer-column">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          
          <div className="footer-column">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
          
          <div className="footer-column">
            <a href="#">Account</a>
            <a href="#">Redeem Gift Cards</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          
          <div className="footer-column">
            <a href="#">Media Center</a>
            <a href="#">Buy Gift Cards</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </div>
        </div>
        
        <div className="language-select">
          <select>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>
        
        <p className="copyright">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer; 