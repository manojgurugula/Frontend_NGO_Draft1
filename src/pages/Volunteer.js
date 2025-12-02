import React, { useState } from 'react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    occupation: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    education: '',
    skills: '',
    experience: '',
    interests: [],
    availability: '',
    duration: '',
    motivation: '',
    languages: [],
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const volunteerAreas = [
    'Healthcare Services',
    'Education & Teaching',
    'Livelihood Training',
    'Environmental Conservation',
    'Disaster Relief',
    'Nutrition Programs',
    'Community Development',
    'Administrative Support',
    'Digital Marketing',
    'Photography/Documentation'
  ];

  const languages = [
    'Telugu', 'Hindi', 'English', 'Tamil', 'Kannada', 'Malayalam', 'Oriya', 'Bengali'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Volunteer Application:', formData);
    
    // Show thank you popup
    setShowThankYou(true);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      occupation: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      education: '',
      skills: '',
      experience: '',
      interests: [],
      availability: '',
      duration: '',
      motivation: '',
      languages: [],
      emergencyContact: '',
      emergencyPhone: ''
    });
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  return (
    <div className="volunteer-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Volunteer With Us</h1>
          <p>Join our mission to transform tribal communities</p>
        </div>
        <div className="hero-bg">
          <img src="/photos/DSCN7913.JPG" alt="Volunteer" />
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="why-volunteer-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Volunteer With Prakruthi?</h2>
            <p>Make a meaningful impact while gaining valuable experience</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Make Real Impact</h3>
              <p>Directly contribute to improving lives of tribal families and communities in Andhra Pradesh.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Personal Growth</h3>
              <p>Develop new skills, gain cultural insights, and build lasting relationships with communities.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Learn & Experience</h3>
              <p>Gain hands-on experience in social work, community development, and grassroots initiatives.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Recognition</h3>
              <p>Receive certificates and recommendations for your valuable contribution to social causes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="opportunities-section">
        <div className="container">
          <div className="section-header">
            <h2>Volunteer Opportunities</h2>
            <p>Choose from various programs based on your skills and interests</p>
          </div>
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <img src="/photos/DSCN5906.JPG" alt="Healthcare" />
              <h3>Healthcare Support</h3>
              <p>Assist in health camps, patient care, and health awareness programs in tribal villages.</p>
            </div>
            <div className="opportunity-card">
              <img src="/photos/DSCN8210.JPG" alt="Education" />
              <h3>Education & Teaching</h3>
              <p>Teach children, conduct skill development sessions, and support learning centers.</p>
            </div>
            <div className="opportunity-card">
              <img src="/photos/DSCN7463.JPG" alt="Livelihoods" />
              <h3>Livelihood Training</h3>
              <p>Train communities in agriculture, handicrafts, and income generation activities.</p>
            </div>
            <div className="opportunity-card">
              <img src="/photos/DSCN5832.JPG" alt="Environment" />
              <h3>Environmental Work</h3>
              <p>Participate in tree plantation, conservation drives, and environmental awareness programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Volunteer Application Form</h2>
              <p>Fill out this form to join our volunteer community</p>
            </div>
            
            <form onSubmit={handleSubmit} className="volunteer-form">
              {/* Personal Information */}
              <div className="form-section-title">
                <h3>Personal Information</h3>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
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
                  <label>Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="18"
                    max="70"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Occupation *</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Address Information */}
              <div className="form-section-title">
                <h3>Address Information</h3>
              </div>

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

              {/* Professional Information */}
              <div className="form-section-title">
                <h3>Professional & Educational Background</h3>
              </div>

              <div className="form-group">
                <label>Educational Qualification *</label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Education Level</option>
                  <option value="High School">High School</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Professional Degree">Professional Degree</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div className="form-group">
                <label>Skills & Expertise</label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="List your relevant skills and expertise"
                ></textarea>
              </div>

              <div className="form-group">
                <label>Previous Volunteer Experience</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Describe any previous volunteer or social work experience"
                ></textarea>
              </div>

              {/* Volunteer Preferences */}
              <div className="form-section-title">
                <h3>Volunteer Preferences</h3>
              </div>

              <div className="form-group">
                <label>Areas of Interest *</label>
                <div className="checkbox-grid">
                  {volunteerAreas.map(area => (
                    <label key={area} className="checkbox-label">
                      <input
                        type="checkbox"
                        value={area}
                        checked={formData.interests.includes(area)}
                        onChange={(e) => handleCheckboxChange(e, 'interests')}
                      />
                      {area}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Availability *</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Availability</option>
                    <option value="Weekends Only">Weekends Only</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Flexible">Flexible</option>
                    <option value="Full Time">Full Time</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Commitment Duration *</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Duration</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1+ years">1+ years</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Languages Known</label>
                <div className="checkbox-grid">
                  {languages.map(language => (
                    <label key={language} className="checkbox-label">
                      <input
                        type="checkbox"
                        value={language}
                        checked={formData.languages.includes(language)}
                        onChange={(e) => handleCheckboxChange(e, 'languages')}
                      />
                      {language}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Motivation to Volunteer *</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Why do you want to volunteer with Prakruthi? What motivates you to work with tribal communities?"
                  required
                ></textarea>
              </div>

              {/* Emergency Contact */}
              <div className="form-section-title">
                <h3>Emergency Contact</h3>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Emergency Contact Name *</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Emergency Contact Phone *</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn btn-primary">Submit Application</button>
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
              <div className="thank-you-icon">🎉</div>
              <h2>Thank You for Volunteering!</h2>
              <p>Your application has been submitted successfully. Our team will review your application and contact you within 3-5 business days.</p>
              <p>We appreciate your commitment to serving tribal communities and look forward to having you as part of the Prakruthi family.</p>
              <button onClick={closeThankYou} className="btn btn-primary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Volunteer;