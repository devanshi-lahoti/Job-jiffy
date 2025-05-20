import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-wrapper">
        <div className="about-text">
          <h2>Why Choose <span>JOBJIFFY</span>?</h2>
          <p>
            At JobJiffy, we connect you with verified professionals for all your home service needs. 
            Whether you need an electrician, plumber, cleaner, or more — we’re just a click away.
          </p>
          <ul>
            <li>✅ Trusted & Verified Experts</li>
            <li>✅ 24/7 Customer Support</li>
            <li>✅ Fast & Reliable Services</li>
            <li>✅ Transparent Pricing</li>
          </ul>
        </div>

        <div className="about-image">
          <div className="shape-bg"></div>
          <img src="https://cdn-icons-png.flaticon.com/512/6387/6387871.png" alt="Teamwork" />
        </div>
      </div>
    </div>
  );
}
