import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'general'
  });

  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const initMap = async () => {
      try {
        const res = await fetch('/site-config.json');
        const cfg = await res.json();
        const office = cfg.office;

        if (!window.L) {
          console.error('Leaflet not found. Make sure leaflet.js is loaded.');
          return;
        }
        const L = window.L;

        const mapEl = document.getElementById('map');
        if (!mapEl) return;

        // Check if map is already initialized
        if (mapEl._leaflet_id) {
          return; // Map already exists, don't reinitialize
        }

        const map = L.map('map', { scrollWheelZoom: false }).setView([office.lat, office.lng], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker = L.marker([office.lat, office.lng]).addTo(map);
        const googleLink = `https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lng}`;
        const popupHtml = `<strong>${office.title}</strong><br>${office.address}<br><a href="${googleLink}" target="_blank" rel="noopener">Open in Google Maps</a>`;
        marker.bindPopup(popupHtml).openPopup();

        mapEl.tabIndex = 0;
        mapEl.addEventListener('keydown', (e) => {
          if ((e.key === 'Enter' || e.key === ' ') && marker) marker.openPopup();
        });

      } catch (err) {
        console.error('Error loading map config or initializing map', err);
      }
    };

    initMap();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form:', formData);
    setShowThankYou(true);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactType: 'general'
    });
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us to learn more about our work</p>
        </div>
        <div className="hero-bg">
          <img src="/photos/DSCN2001.JPG" alt="Contact Us" />
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Reach out to us for any inquiries, partnerships, or to learn more about our programs.</p>
              
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-content">
                    <h3>Address</h3>
                    <p>H.NO- 718, Road No -31-B, Krishnunipalem, R&R Colony, Devipatnam Mandal, Alluri Seetaramaraju District, Andhra Pradesh, India-533354</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-content">
                    <h3>Phone</h3>
                    <p>+91-9440916515</p>
                    <p>+91-9494617515</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-content">
                    <h3>Email</h3>
                    <p><a href="mailto:prakruthi2002@gmail.com">prakruthi2002@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-content">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Contact Type *</label>
                  <select
                    name="contactType"
                    value={formData.contactType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="donation">Donation Related</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media Inquiry</option>
                    <option value="complaint">Complaint/Feedback</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>Find Us</h2>
            <p>Visit our office or use the map to get directions</p>
          </div>
          <div className="map-container">
            <div id="map" role="application" aria-label="Map showing Prakruthi Social Service Society location"></div>
            <div className="map-fallback">
              <p>
                <a href="https://www.google.com/maps/search/?api=1&query=17.403200,82.123400" target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="container">
          <div className="section-header">
            <h2>Quick Actions</h2>
            <p>Looking for something specific? Here are some quick links</p>
          </div>
          <div className="actions-grid">
            <div className="action-card">
              <div className="action-icon">🤝</div>
              <h3>Volunteer</h3>
              <p>Join our team and make a difference in tribal communities</p>
              <a href="/volunteer" className="btn btn-secondary">Apply Now</a>
            </div>
            <div className="action-card">
              <div className="action-icon">💝</div>
              <h3>Donate</h3>
              <p>Support our programs with your generous contribution</p>
              <a href="/donate" className="btn btn-secondary">Donate Now</a>
            </div>
            <div className="action-card">
              <div className="action-icon">📋</div>
              <h3>Programs</h3>
              <p>Learn about our comprehensive community development programs</p>
              <a href="/programs" className="btn btn-secondary">View Programs</a>
            </div>
            <div className="action-card">
              <div className="action-icon">📸</div>
              <h3>Gallery</h3>
              <p>See our work in action through photos and stories</p>
              <a href="/gallery" className="btn btn-secondary">View Gallery</a>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="thank-you-overlay" onClick={closeThankYou}>
          <div className="thank-you-popup" onClick={(e) => e.stopPropagation()}>
            <div className="thank-you-content">
              <div className="thank-you-icon">📧</div>
              <h2>Message Sent Successfully!</h2>
              <p>Thank you for contacting us. We have received your message and will get back to you within 24-48 hours.</p>
              <p>For urgent matters, please call us directly at +91-9440916515.</p>
              <button onClick={closeThankYou} className="btn btn-primary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;