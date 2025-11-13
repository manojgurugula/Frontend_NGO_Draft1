import React, { useState } from 'react';
import { volunteerAPI } from '../services/api';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
    availability: '',
    motivation: ''
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
      await volunteerAPI.create(formData);
      setMessage('Thank you for your interest! Your volunteer application has been submitted successfully.');
      setMessageType('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        skills: '',
        availability: '',
        motivation: ''
      });
    } catch (error) {
      setMessage('An error occurred while submitting your application. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="hero" style={{height: '50vh'}}>
        <div className="hero-content">
          <h1>Become a Volunteer</h1>
          <p>Join our mission to empower communities and create lasting change</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Volunteer Application</h2>
          <div className="form-container">
            {message && (
              <div 
                style={{
                  padding: '1rem',
                  borderRadius: '5px',
                  marginBottom: '2rem',
                  background: messageType === 'success' ? '#d4edda' : '#f8d7da',
                  color: messageType === 'success' ? '#155724' : '#721c24'
                }}
              >
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
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
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="skills">Skills & Qualifications</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Please describe your relevant skills and experience"
                  rows="4"
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="availability">Availability</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                >
                  <option value="">Select your availability</option>
                  <option value="weekends">Weekends only</option>
                  <option value="weekdays">Weekdays only</option>
                  <option value="flexible">Flexible schedule</option>
                  <option value="full-time">Full-time commitment</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="motivation">Why do you want to volunteer with us?</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Please share your motivation for volunteering"
                  rows="4"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={loading}
                style={{width: '100%', fontSize: '1.1rem'}}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;