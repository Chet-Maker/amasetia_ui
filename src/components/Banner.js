import React from 'react';
import './Component.css'; // Path to your CSS file for the banner
import logo from '../insight_companion.png';

function Banner() {
  return (
    <div className="top-banner">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="navigation text">
        <ul>
          <li><a href="/personality-tests">Personality Profiles</a></li>
          <li><a href="/companions">Companions</a></li>
          <li><a href="/journal">Journal</a></li>
          <li><a href="/about-insight-companions">About Insight Companions</a></li>
          <li><a href="/profile">Your Profile</a></li>
          <li><a href="/login">Login/Sign Up</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Banner;