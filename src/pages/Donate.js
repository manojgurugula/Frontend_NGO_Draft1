import React, { useState } from 'react';

const Donate = () => {
  const [formData, setFormData] = useState({
    donorType: 'individual',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    panNumber: '',
    donationType: 'one-time',
    amount: '',
    customAmount: '',
    program: 'general',
    paymentMethod: 'online',
    anonymous: false,
    taxReceipt: true,
    comments: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];
  
  const programs = [
    { id: 'general', name: 'General Fund - Where Most Needed' },
    { id: 'healthcare', name: 'Healthcare Services' },
    { id: 'education', name: 'Education & Skill Development' },
    { id: 'livelihoods', name: 'Livelihood Development' },
    { id: 'environment', name: 'Environmental Conservation' },
    { id: 'disaster', name: 'Disaster Relief' },
    { id: 'nutrition', name: 'Nutrition Programs' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAmountSelect = (amount) => {
    setFormData(prev => ({
      ...prev,
      amount: amount.toString(),
      customAmount: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation Form:', formData);
    setShowThankYou(true);
    
    // Reset form
    setFormData({
      donorType: 'individual',
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      panNumber: '',
      donationType: 'one-time',
      amount: '',
      customAmount: '',
      program: 'general',
      paymentMethod: 'online',
      anonymous: false,
      taxReceipt: true,
      comments: ''
    });
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  const finalAmount = formData.customAmount || formData.amount;

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Make a Donation</h1>
          <p>Your contribution transforms lives in tribal communities</p>
        </div>
        <div className="hero-bg">
          <img src="/photos/DSCN7467.JPG" alt="Donate" />
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <h2>Your Impact</h2>
            <p>See how your donation makes a difference</p>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-amount">₹500</div>
              <h3>Basic Healthcare</h3>
              <p>Provides medical consultation and medicines for 5 tribal families</p>
            </div>
            <div className="impact-card">
              <div className="impact-amount">₹1,000</div>
              <h3>Education Support</h3>
              <p>Supplies educational materials for 10 tribal children for one month</p>
            </div>
            <div className="impact-card">
              <div className="impact-amount">₹2,500</div>
              <h3>Nutrition Program</h3>
              <p>Provides supplementary nutrition for 20 malnourished children</p>
            </div>
            <div className="impact-card">
              <div className="impact-amount">₹5,000</div>
              <h3>Livelihood Training</h3>
              <p>Skill development training for 5 women in self-help groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="form-section">
        <div className="container">
          <div className="donation-container">
            <div className="form-header">
              <h2>Donation Details</h2>
              <p>Fill out the form below to make your contribution</p>
            </div>

            <form onSubmit={handleSubmit} className="donation-form">
              {/* Donor Type */}
              <div className="form-section-title">
                <h3>Donor Information</h3>
              </div>

              <div className="form-group">
                <label>Donor Type *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="donorType"
                      value="individual"
                      checked={formData.donorType === 'individual'}
                      onChange={handleInputChange}
                    />
                    Individual
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="donorType"
                      value="organization"
                      checked={formData.donorType === 'organization'}
                      onChange={handleInputChange}
                    />
                    Organization/Company
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{formData.donorType === 'individual' ? 'Full Name' : 'Organization Name'} *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
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
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>PAN Number (for tax receipt)</label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    placeholder="ABCDE1234F"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="form-group">
                <label>Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  required
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Pin Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Donation Details */}
              <div className="form-section-title">
                <h3>Donation Details</h3>
              </div>

              <div className="form-group">
                <label>Donation Type *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="donationType"
                      value="one-time"
                      checked={formData.donationType === 'one-time'}
                      onChange={handleInputChange}
                    />
                    One-time Donation
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={formData.donationType === 'monthly'}
                      onChange={handleInputChange}
                    />
                    Monthly Donation
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Donation Amount *</label>
                <div className="amount-selection">
                  <div className="amount-buttons">
                    {donationAmounts.map(amount => (
                      <button
                        key={amount}
                        type="button"
                        className={`amount-btn ${formData.amount === amount.toString() ? 'active' : ''}`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="custom-amount">
                    <input
                      type="number"
                      name="customAmount"
                      value={formData.customAmount}
                      onChange={handleInputChange}
                      placeholder="Enter custom amount"
                      min="100"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Support Program *</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                >
                  {programs.map(program => (
                    <option key={program.id} value={program.id}>
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Payment Method *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={handleInputChange}
                    />
                    Online Payment (UPI/Card/Net Banking)
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleInputChange}
                    />
                    Bank Transfer/Cheque
                  </label>
                </div>
              </div>

              {/* Preferences */}
              <div className="form-section-title">
                <h3>Preferences</h3>
              </div>

              <div className="form-group">
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleInputChange}
                    />
                    Make this donation anonymous
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="taxReceipt"
                      checked={formData.taxReceipt}
                      onChange={handleInputChange}
                    />
                    I need 80G tax receipt
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Comments/Message (Optional)</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Any special message or dedication for your donation"
                ></textarea>
              </div>

              {/* Summary */}
              {finalAmount && (
                <div className="donation-summary">
                  <h3>Donation Summary</h3>
                  <div className="summary-item">
                    <span>Amount:</span>
                    <span>₹{parseInt(finalAmount).toLocaleString()}</span>
                  </div>
                  <div className="summary-item">
                    <span>Type:</span>
                    <span>{formData.donationType === 'one-time' ? 'One-time' : 'Monthly'}</span>
                  </div>
                  <div className="summary-item">
                    <span>Program:</span>
                    <span>{programs.find(p => p.id === formData.program)?.name}</span>
                  </div>
                </div>
              )}

              <div className="form-submit">
                <button type="submit" className="btn btn-primary">
                  {formData.paymentMethod === 'online' ? 'Proceed to Payment' : 'Submit Donation Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="thank-you-overlay" onClick={closeThankYou}>
          <div className="thank-you-popup" onClick={(e) => e.stopPropagation()}>
            <div className="thank-you-content">
              <div className="thank-you-icon">💝</div>
              <h2>Thank You for Your Donation!</h2>
              <p>Your donation form has been submitted successfully. We will contact you shortly with payment details and further instructions.</p>
              <p>Your generosity will make a real difference in the lives of tribal families. We appreciate your support for our mission.</p>
              <div className="contact-info">
                <p><strong>For immediate assistance:</strong></p>
                <p>📞 Phone: +91-XXXXXXXXXX</p>
                <p>📧 Email: donations@prakruthi.org</p>
              </div>
              <button onClick={closeThankYou} className="btn btn-primary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;