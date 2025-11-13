import React from 'react';

const About = () => {
  return (
    <div>
      <section className="hero" style={{height: '50vh'}}>
        <div className="hero-content">
          <h1>About Prakruthi</h1>
          <p>Learn about our journey, mission, and impact</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="grid grid-2">
            <div>
              <h3>The Beginning (2002)</h3>
              <p>
                Prakruthi Social Service Society's journey began in 2002 when our founders 
                set foot in the remote Adivasi area of Devipatnam, East Godavari District, 
                Andhra Pradesh. What started as a small initiative to help tribal communities 
                has grown into a comprehensive social service organization.
              </p>
            </div>
            <div>
              <h3>Transformation & Growth</h3>
              <p>
                Over the years, we have implemented various welfare activities for tribal families. 
                Due to the Polavaram Dam Construction, we relocated our office from Devipatnam to 
                Krushnipalem Resettlement village in 2020, continuing our mission to serve 
                displaced communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Mission & Vision</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To serve tribal, rural, and urban communities by promoting social equality 
                and social justice. We focus on the upliftment of living standards of poor 
                people, particularly among the underprivileged sections of society.
              </p>
            </div>
            <div className="card">
              <h3>Our Vision</h3>
              <p>
                A society where every individual has access to basic necessities like 
                healthcare, education, and livelihood opportunities. We envision sustainable 
                development that preserves traditional culture while embracing progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Key Focus Areas</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Healthcare</h3>
              <p>
                Mother and child healthcare, addressing health problems faced by remote tribals, 
                and reducing infant and maternal mortality rates.
              </p>
            </div>
            <div className="card">
              <h3>Education</h3>
              <p>
                Formal, non-formal, and adult education programs, technical training, 
                and improving access to quality education for all.
              </p>
            </div>
            <div className="card">
              <h3>Livelihood</h3>
              <p>
                Addressing lack of livelihoods, MGNREGS implementation, and creating 
                alternative income generation opportunities.
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

export default About;