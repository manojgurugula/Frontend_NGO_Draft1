import React, { useState } from 'react';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await contactAPI.create(formData);
      setMessage('Thank you for your message! We will get back to you within 24-48 hours.');
      setMessageType('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setMessage('An error occurred while sending your message. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="hero" style={{height: '50vh'}}>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions or support</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>📍 Our Location</h3>
              <p>
                Krushnipalem Resettlement Village<br/>
                Alluri Seetaramaraju District<br/>
                Andhra Pradesh, India
              </p>
            </div>
            <div className="card">
              <h3>📧 Email Us</h3>
              <p>
                General Inquiries:<br/>
                <a href="mailto:prakruthi2002@gmail.com" style={{color: '#4a7c59'}}>prakruthi2002@gmail.com</a>
              </p>
            </div>
            <div className="card">
              <h3>🕒 Office Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM<br/>
                Saturday: 9:00 AM - 2:00 PM<br/>
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>
          <div className="form-container">
            {message && (
              <div 
                style={{
                  padding: '1rem',
                  borderRadius: '5px',
                  marginBottom: '2rem',
                  background: messageType === 'success' ? '#d4edda' : '#f8d7da',
                  color: messageType === 'success' ? '#155724' : '#721c24',
                  border: `1px solid ${messageType === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                }}
              >
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Volunteer Opportunity">Volunteer Opportunity</option>
                  <option value="Donation Information">Donation Information</option>
                  <option value="Partnership">Partnership/Collaboration</option>
                  <option value="Media Inquiry">Media Inquiry</option>
                  <option value="Program Information">Program Information</option>
                  <option value="Complaint/Feedback">Complaint/Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your inquiry"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={loading}
                style={{width: '100%', fontSize: '1.1rem'}}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>How can I volunteer with Prakruthi?</h3>
              <p>
                You can apply to volunteer by filling out our volunteer application form. 
                We welcome volunteers from all backgrounds and skill levels.
              </p>
            </div>
            <div className="card">
              <h3>Are donations tax-deductible?</h3>
              <p>
                Yes, donations to Prakruthi are eligible for tax deductions under 
                Section 80G of the Income Tax Act. We provide proper receipts.
              </p>
            </div>
            <div className="card">
              <h3>What areas do you work in?</h3>
              <p>
                We primarily work in Alluri Seetaramaraju District, Andhra Pradesh, 
                focusing on tribal and rural communities in resettlement villages.
              </p>
            </div>
            <div className="card">
              <h3>How can I partner with Prakruthi?</h3>
              <p>
                We welcome partnerships with corporations, other NGOs, and government 
                agencies. Contact us to discuss collaboration opportunities.
              </p>
            </div>
            <div className="card">
              <h3>Do you provide internship opportunities?</h3>
              <p>
                Yes, we offer internship opportunities for students in social work, 
                public health, education, and related fields. Contact us for details.
              </p>
            </div>
            <div className="card">
              <h3>How do I stay updated on your activities?</h3>
              <p>
                Follow our events page and contact us to join our mailing list for 
                regular updates on our programs and activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#2c5530', color: 'white'}}>
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>Quick Actions</h2>
          <div className="grid grid-3">
            <div style={{textAlign: 'center'}}>
              <h3>Donate Now</h3>
              <p>Make a difference with your contribution</p>
              <a href="/donate" className="btn" style={{background: 'white', color: '#2c5530'}}>Donate</a>
            </div>
            <div style={{textAlign: 'center'}}>
              <h3>Volunteer</h3>
              <p>Join our team of dedicated volunteers</p>
              <a href="/volunteer" className="btn btn-secondary">Apply Now</a>
            </div>
            <div style={{textAlign: 'center'}}>
              <h3>Learn More</h3>
              <p>Discover our programs and impact</p>
              <a href="/about" className="btn btn-secondary">About Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{textAlign: 'center', background: '#fff3cd', border: '1px solid #ffeaa7'}}>
            <h3 style={{color: '#856404'}}>Emergency Contact</h3>
            <p style={{color: '#856404'}}>
              For urgent matters or emergency situations in our operational areas, 
              please contact us immediately at: <strong>prakruthi2002@gmail.com</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;