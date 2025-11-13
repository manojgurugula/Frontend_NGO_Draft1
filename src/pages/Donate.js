import React, { useState } from 'react';
import { donationAPI } from '../services/api';

const Donate = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    amount: '',
    message: '',
    donationType: 'one-time'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAmountSelect = (amount) => {
    setFormData({
      ...formData,
      amount: amount.toString()
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await donationAPI.create({
        ...formData,
        amount: parseFloat(formData.amount)
      });
      setMessage('Thank you for your generous donation! Your contribution will make a real difference in our communities.');
      setMessageType('success');
      setFormData({
        donorName: '',
        email: '',
        phone: '',
        amount: '',
        message: '',
        donationType: 'one-time'
      });
    } catch (error) {
      setMessage('An error occurred while processing your donation. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="hero" style={{height: '50vh'}}>
        <div className="hero-content">
          <h1>Make a Donation</h1>
          <p>Your generosity helps us create lasting change in communities</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Your Impact</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>₹500</h3>
              <p>
                Provides basic medical supplies for a health camp serving 
                50 tribal families in remote villages.
              </p>
            </div>
            <div className="card">
              <h3>₹1,000</h3>
              <p>
                Supports educational materials and supplies for 20 children 
                in our literacy programs for one month.
              </p>
            </div>
            <div className="card">
              <h3>₹2,500</h3>
              <p>
                Funds a complete health checkup camp including medicines 
                for 100 community members.
              </p>
            </div>
            <div className="card">
              <h3>₹5,000</h3>
              <p>
                Provides skill development training for 10 women in 
                self-help groups for sustainable livelihoods.
              </p>
            </div>
            <div className="card">
              <h3>₹10,000</h3>
              <p>
                Supports disaster relief operations including food, shelter, 
                and medical aid for affected families.
              </p>
            </div>
            <div className="card">
              <h3>Custom Amount</h3>
              <p>
                Every contribution, big or small, makes a meaningful 
                difference in someone's life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Donation Form</h2>
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
                <label>Donation Type</label>
                <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem'}}>
                  <label style={{display: 'flex', alignItems: 'center', fontWeight: 'normal'}}>
                    <input
                      type="radio"
                      name="donationType"
                      value="one-time"
                      checked={formData.donationType === 'one-time'}
                      onChange={handleChange}
                      style={{marginRight: '0.5rem'}}
                    />
                    One-time Donation
                  </label>
                  <label style={{display: 'flex', alignItems: 'center', fontWeight: 'normal'}}>
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={formData.donationType === 'monthly'}
                      onChange={handleChange}
                      style={{marginRight: '0.5rem'}}
                    />
                    Monthly Donation
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Select Amount (₹)</label>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.5rem', marginBottom: '1rem'}}>
                  {predefinedAmounts.map(amount => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      style={{
                        padding: '0.75rem',
                        border: formData.amount === amount.toString() ? '2px solid #4a7c59' : '2px solid #ddd',
                        background: formData.amount === amount.toString() ? '#4a7c59' : 'white',
                        color: formData.amount === amount.toString() ? 'white' : '#333',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Enter custom amount"
                  min="1"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="donorName">Full Name *</label>
                <input
                  type="text"
                  id="donorName"
                  name="donorName"
                  value={formData.donorName}
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
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share why you're supporting our cause"
                  rows="4"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={loading}
                style={{width: '100%', fontSize: '1.1rem'}}
              >
                {loading ? 'Processing...' : `Donate ₹${formData.amount || '0'}`}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Your Donation Matters</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Direct Impact</h3>
              <p>
                100% of your donation goes directly to our programs. We ensure 
                transparency and accountability in how funds are utilized.
              </p>
            </div>
            <div className="card">
              <h3>Sustainable Change</h3>
              <p>
                Your contribution helps create long-term solutions rather than 
                temporary fixes, empowering communities to become self-reliant.
              </p>
            </div>
            <div className="card">
              <h3>Verified Impact</h3>
              <p>
                We provide regular updates and reports on how your donations 
                are making a difference in the lives of beneficiaries.
              </p>
            </div>
            <div className="card">
              <h3>Tax Benefits</h3>
              <p>
                Donations to Prakruthi are eligible for tax deductions under 
                Section 80G of the Income Tax Act. We provide proper receipts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Other Ways to Help</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Volunteer Your Time</h3>
              <p>
                Join our team of dedicated volunteers and contribute your 
                skills and time to our various programs.
              </p>
              <a href="/volunteer" className="btn btn-primary">Volunteer</a>
            </div>
            <div className="card">
              <h3>Spread Awareness</h3>
              <p>
                Share our mission with your friends and family. Help us 
                reach more people who can support our cause.
              </p>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
            <div className="card">
              <h3>Corporate Partnership</h3>
              <p>
                Partner with us through CSR initiatives and make a larger 
                impact on community development programs.
              </p>
              <a href="/contact" className="btn btn-primary">Partner With Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Trust & Transparency</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Legal Registrations</h3>
              <ul style={{color: '#666', textAlign: 'left'}}>
                <li>Society Registration Act (2002)</li>
                <li>FCRA Registration: 010170278</li>
                <li>12A and 80G Income Tax Approvals</li>
                <li>CSR-1 Registration</li>
              </ul>
            </div>
            <div className="card">
              <h3>Financial Transparency</h3>
              <p>
                We maintain complete transparency in our financial operations. 
                Annual reports and audited financial statements are available 
                for public review.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;