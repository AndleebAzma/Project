import React from 'react';
import './NavigationBar.css'; // Import the CSS file

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="your-logo-url.png" alt="FoodApp Logo" /> */}
        <span>FoodApp</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu Bar</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
