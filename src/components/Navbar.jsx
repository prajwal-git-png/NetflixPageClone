import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="logo">NETFLIX</h1>
        </div>
        <div className="navbar-right">
          <select className="language-selector">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <button className="signin-button">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 