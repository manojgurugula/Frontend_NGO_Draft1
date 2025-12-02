import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Prakruthi Social Service Society</h3>
            <p>A registered NGO established in 2002, working with tribal and rural communities in Andhra Pradesh, India. Dedicated to transforming lives through comprehensive healthcare, education, and sustainable livelihood programs.</p>
            <p><strong>FCRA Registration:</strong> 010170278</p>
            <p><strong>Established:</strong> 2002</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Our Programs</h3>
            <ul>
              <li>Healthcare Services</li>
              <li>Education Support</li>
              <li>Livelihood Development</li>
              <li>Environmental Conservation</li>
              <li>Disaster Relief</li>
              <li>Women Empowerment</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p><strong>Address:</strong><br />
            H.NO- 718, Road No -31-B<br />
            Krishnunipalem, R&R Colony<br />
            Devipatnam Mandal<br />
            Alluri Seetaramaraju District<br />
            Andhra Pradesh, India-533354</p>
            <p><strong>Email:</strong> prakruthi2002@gmail.com</p>
            <p><strong>Phone:</strong> +91-9440916515, +91-9494617515</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Prakruthi Social Service Society. All rights reserved. | Serving tribal communities since 2002 | FCRA: 010170278</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;