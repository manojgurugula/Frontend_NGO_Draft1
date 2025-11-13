import React from 'react';

const Programs = () => {
  return (
    <div>
      <section className="hero" style={{height: '50vh'}}>
        <div className="hero-content">
          <h1>Our Programs</h1>
          <p>Comprehensive initiatives for community development</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Key Programs</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Health Program</h3>
              <p>
                Mother and child healthcare services for tribal communities. 
                We focus on reducing infant and maternal mortality rates.
              </p>
            </div>
            <div className="card">
              <h3>Education Initiative</h3>
              <p>
                Formal, non-formal, and adult education programs. Technical training 
                in computers, typing, and health courses.
              </p>
            </div>
            <div className="card">
              <h3>Disaster Relief</h3>
              <p>
                Emergency response and rehabilitation programs for communities 
                affected by natural disasters.
              </p>
            </div>
            <div className="card">
              <h3>Livelihood Development</h3>
              <p>
                Creating sustainable income opportunities through skill development 
                and alternative livelihood programs.
              </p>
            </div>
            <div className="card">
              <h3>Cultural Preservation</h3>
              <p>
                Protecting traditional cultural systems through cultural programs 
                and heritage documentation.
              </p>
            </div>
            <div className="card">
              <h3>Environmental Conservation</h3>
              <p>
                Sustainable development and natural resource conservation programs 
                for environmental protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#2c5530', color: 'white'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2>Support Our Programs</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
            Your support helps us continue our vital work in communities that need it most.
          </p>
          <div>
            <a href="/donate" className="btn" style={{background: 'white', color: '#2c5530'}}>Donate Now</a>
            <a href="/volunteer" className="btn btn-secondary" style={{marginLeft: '1rem'}}>Volunteer With Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;