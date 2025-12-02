import React from 'react';

const About = () => {
  const timelineEvents = [
    { year: '2002', title: 'Foundation', description: 'Prakruthi Social Service Society established in Devipatnam' },
    { year: '2005', title: 'Healthcare Initiative', description: 'Launched mobile medical units for tribal areas' },
    { year: '2008', title: 'Education Program', description: 'Started community learning centers' },
    { year: '2012', title: 'FCRA Registration', description: 'Obtained FCRA certification (010170278)' },
    { year: '2015', title: 'Livelihood Focus', description: 'Expanded agricultural and skill development programs' },
    { year: '2018', title: 'Relocation', description: 'Moved to Krushnipalem due to Polavaram Dam project' },
    { year: '2020', title: 'COVID Response', description: 'Emergency healthcare and relief operations' },
    { year: '2024', title: 'Digital Expansion', description: 'Launched online platforms and digital outreach' }
  ];

  const boardMembers = [
    { name: 'Chairman', role: 'Board Chairman', experience: '25+ years in social work' },
    { name: 'Secretary', role: 'Board Secretary', experience: '20+ years in NGO management' },
    { name: 'Treasurer', role: 'Board Treasurer', experience: '15+ years in financial management' },
    { name: 'Member', role: 'Board Member', experience: '18+ years in community development' }
  ];

  const staff = [
    { name: 'Executive Director', role: 'Leadership & Strategy', department: 'Administration' },
    { name: 'Program Manager', role: 'Program Coordination', department: 'Programs' },
    { name: 'Health Coordinator', role: 'Healthcare Services', department: 'Health' },
    { name: 'Education Officer', role: 'Educational Programs', department: 'Education' },
    { name: 'Field Coordinator', role: 'Community Outreach', department: 'Field Operations' },
    { name: 'Finance Officer', role: 'Financial Management', department: 'Finance' }
  ];

  const partners = [
    { name: 'Government of Andhra Pradesh', type: 'Government Partner', description: 'Collaboration on tribal welfare programs' },
    { name: 'District Collector Office', type: 'Administrative Partner', description: 'Local administration support' },
    { name: 'Primary Health Centers', type: 'Healthcare Partner', description: 'Medical services coordination' },
    { name: 'Tribal Welfare Department', type: 'Government Partner', description: 'Tribal development initiatives' },
    { name: 'Forest Department', type: 'Environmental Partner', description: 'Conservation and afforestation programs' },
    { name: 'Local NGOs', type: 'Civil Society Partner', description: 'Collaborative community programs' }
  ];

  const workAreas = [
    { mandal: 'Alluri Seetaramaraju District', villages: ['Krushnipalem', 'Devipatnam', 'Kunavaram', 'Vararamachandrapuram'], image: '/photos/DSCN1906.JPG' },
    { mandal: 'East Godavari District', villages: ['Addateegala', 'Gangavaram', 'Rajavommangi', 'Yellavaram'], image: '/photos/DSCN1960.JPG' },
    { mandal: 'West Godavari District', villages: ['Polavaram', 'Buttayagudem', 'Jeelugumilli', 'Chintalapudi'], image: '/photos/DSCN1961.JPG' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Prakruthi</h1>
          <p>23 years of dedicated service to tribal communities</p>
        </div>
        <div className="hero-bg">
          <img src="/photos/DSCN5844.jpg" alt="About Us" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Prakruthi Social Service Society was established in 2002 with a vision to serve the marginalized tribal and rural communities of Andhra Pradesh. Founded by dedicated social workers, our organization emerged from the need to address the healthcare, education, and livelihood challenges faced by these communities.</p>
              <p>Originally based in Devipatnam, we relocated to Krushnipalem Resettlement Village due to the Polavaram Dam project. This transition strengthened our resolve to support displaced communities and adapt our services to meet evolving needs.</p>
            </div>
            <div className="story-image">
              <img src="/photos/DSCN1962.JPG" alt="Our Journey" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="values-section">
        <div className="container">
          <div className="vmv-grid">
            <div className="vmv-card">
              <div className="vmv-icon">🎯</div>
              <h3>Vision</h3>
              <p>A society where tribal and rural communities have equal access to healthcare, education, and sustainable livelihoods, living with dignity and self-reliance.</p>
            </div>
            <div className="vmv-card">
              <div className="vmv-icon">🚀</div>
              <h3>Mission</h3>
              <p>To empower marginalized communities through comprehensive programs in healthcare, education, livelihood development, and environmental conservation while preserving their cultural identity.</p>
            </div>
            <div className="vmv-card">
              <div className="vmv-icon">💎</div>
              <h3>Values</h3>
              <ul>
                <li>Compassion & Empathy</li>
                <li>Transparency & Accountability</li>
                <li>Community Participation</li>
                <li>Cultural Sensitivity</li>
                <li>Sustainable Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our 23-year journey</p>
          </div>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h4 className="timeline-title">{event.title}</h4>
                  <p className="timeline-description">{event.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance - Board */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Board of Directors</h2>
            <p>Experienced leaders guiding our organizational vision</p>
          </div>
          <div className="board-grid">
            {boardMembers.map((member, index) => (
              <div key={index} className="board-member">
                <div className="member-photo">👨‍💼</div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-experience">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="staff-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Dedicated professionals implementing our programs</p>
          </div>
          <div className="staff-grid">
            {staff.map((member, index) => (
              <div key={index} className="staff-member">
                <div className="staff-icon">👥</div>
                <h4>{member.name}</h4>
                <p className="staff-role">{member.role}</p>
                <span className="staff-department">{member.department}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="organogram-section">
        <div className="container">
          <div className="section-header">
            <h2>Organizational Structure</h2>
            <p>Our governance and operational framework</p>
          </div>
          <div className="organogram">
            <div className="org-level">
              <div className="org-box board">Board of Directors</div>
            </div>
            <div className="org-level">
              <div className="org-box executive">Executive Director</div>
            </div>
            <div className="org-level">
              <div className="org-box manager">Program Manager</div>
              <div className="org-box manager">Finance Officer</div>
            </div>
            <div className="org-level">
              <div className="org-box coordinator">Health Coordinator</div>
              <div className="org-box coordinator">Education Officer</div>
              <div className="org-box coordinator">Field Coordinator</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Partners</h2>
            <p>Collaborative relationships that strengthen our impact</p>
          </div>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">🤝</div>
                <h4>{partner.name}</h4>
                <span className="partner-type">{partner.type}</span>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="work-areas-section">
        <div className="container">
          <div className="section-header">
            <h2>Where We Work</h2>
            <p>Our presence across districts and villages in Andhra Pradesh</p>
          </div>
          <div className="work-areas-grid">
            {workAreas.map((area, index) => (
              <div key={index} className="work-area-card">
                <div className="area-image">
                  <img src={area.image} alt={area.mandal} />
                </div>
                <div className="area-content">
                  <h3>{area.mandal}</h3>
                  <div className="villages-list">
                    <h4>Key Villages:</h4>
                    <ul>
                      {area.villages.map((village, idx) => (
                        <li key={idx}>{village}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="legal-section">
        <div className="container">
          <div className="legal-content">
            <div className="legal-text">
              <h2>Legal Information</h2>
              <div className="legal-details">
                <div className="legal-item">
                  <strong>Organization Name:</strong>
                  <span>Prakruthi Social Service Society</span>
                </div>
                <div className="legal-item">
                  <strong>Established:</strong>
                  <span>2002</span>
                </div>
                <div className="legal-item">
                  <strong>Registration:</strong>
                  <span>Registered under Societies Registration Act</span>
                </div>
                <div className="legal-item">
                  <strong>FCRA Number:</strong>
                  <span>010170278</span>
                </div>
                <div className="legal-item">
                  <strong>Address:</strong>
                  <span>Krushnipalem Resettlement Village, Alluri Seetaramaraju District, Andhra Pradesh</span>
                </div>
              </div>
            </div>
            <div className="legal-image">
              <img src="/photos/DSCN8304.JPG" alt="Legal Information" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;