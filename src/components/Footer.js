import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Prakruthi Social Service Society</h3>
            <p>
              Dedicated to serving tribal and rural communities since 2002. 
              Working towards sustainable development and social justice.
            </p>
            <div className="footer-registration">
              <p><strong>FCRA:</strong> 010170278</p>
              <p><strong>Established:</strong> 2002</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Our Programs</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>📍 Krushnipalem Resettlement Village</p>
              <p>Alluri Seetaramaraju District</p>
              <p>Andhra Pradesh, India</p>
              <p>📧 <a href="mailto:prakruthi2002@gmail.com">prakruthi2002@gmail.com</a></p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Our Focus Areas</h3>
            <ul className="focus-areas">
              <li>Healthcare Services</li>
              <li>Education Programs</li>
              <li>Disaster Relief</li>
              <li>Livelihood Development</li>
              <li>Cultural Preservation</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Prakruthi Social Service Society. All rights reserved.</p>
            <div className="footer-legal">
              <span>Registered NGO</span>
              <span>•</span>
              <span>80G Tax Exempt</span>
              <span>•</span>
              <span>FCRA Approved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;