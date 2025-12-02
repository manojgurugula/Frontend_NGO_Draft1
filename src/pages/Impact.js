import React from 'react';
import { Link } from 'react-router-dom';

const Impact = () => {
  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Impact</h1>
          <p>23 years of transforming lives and communities</p>
        </div>
        <div className="hero-bg">
          <img src="/photos/DSCN8655.JPG" alt="Our Impact" />
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="impact-statistics">
        <div className="container">
          <h2 className="section-title">Impact by Numbers</h2>
          <div className="stats-grid-large">
            <div className="stat-card-large">
              <div className="stat-icon">👥</div>
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Lives Impacted</div>
              <div className="stat-description">Direct and indirect beneficiaries across all programs</div>
            </div>
            <div className="stat-card-large">
              <div className="stat-icon">🏥</div>
              <div className="stat-number">25,000+</div>
              <div className="stat-label">Medical Treatments</div>
              <div className="stat-description">Free medical consultations and treatments provided</div>
            </div>
            <div className="stat-card-large">
              <div className="stat-icon">🎓</div>
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Students Supported</div>
              <div className="stat-description">Children receiving educational support and materials</div>
            </div>
            <div className="stat-card-large">
              <div className="stat-icon">🌱</div>
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Farmers Trained</div>
              <div className="stat-description">Farmers trained in sustainable agriculture practices</div>
            </div>
            <div className="stat-card-large">
              <div className="stat-icon">🚑</div>
              <div className="stat-number">3,000+</div>
              <div className="stat-label">Emergency Transports</div>
              <div className="stat-description">Emergency ambulance services provided</div>
            </div>
            <div className="stat-card-large">
              <div className="stat-icon">🏘️</div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Villages Served</div>
              <div className="stat-description">Villages with active program implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="container">
          <h2 className="section-title">Stories of Change</h2>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-image">
                <img src="/photos/DSCN9417.JPG" alt="Success Story" />
              </div>
              <div className="story-content">
                <h3>Ravi's Health Recovery</h3>
                <p className="story-category">Health Program Impact</p>
                <p>
                  "When I fell seriously ill, the nearest hospital was 50km away. Prakruthi's 
                  ambulance service saved my life by providing immediate transportation. 
                  Today, I'm healthy and back to work, supporting my family."
                </p>
                <div className="story-author">
                  <strong>Ravi Kumar</strong>
                  <span>Farmer, Devipatnam Village</span>
                </div>
              </div>
            </div>

            <div className="story-card">
              <div className="story-image">
                <img src="/photos/IMG_20160729_091701.jpg" alt="Education Success" />
              </div>
              <div className="story-content">
                <h3>Lakshmi's Educational Journey</h3>
                <p className="story-category">Education Program Impact</p>
                <p>
                  "My daughter was about to drop out due to lack of books and fees. 
                  Prakruthi's education support helped her continue studies. She's now 
                  in college, the first in our family to reach higher education."
                </p>
                <div className="story-author">
                  <strong>Lakshmi Devi</strong>
                  <span>Mother, Krushnipalem Village</span>
                </div>
              </div>
            </div>

            <div className="story-card">
              <div className="story-image">
                <img src="/photos/IMG_20160813_122418.jpg" alt="Livelihood Success" />
              </div>
              <div className="story-content">
                <h3>Suresh's Farming Success</h3>
                <p className="story-category">Livelihoods Program Impact</p>
                <p>
                  "The cashew farming training changed everything for my family. 
                  With better techniques and market linkages, our income increased 
                  by 300%. We now have a stable livelihood and bright future."
                </p>
                <div className="story-author">
                  <strong>Suresh Babu</strong>
                  <span>Cashew Farmer, Tribal Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program-wise Impact */}
      <section className="program-impact">
        <div className="container">
          <h2 className="section-title">Impact Across Programs</h2>
          <div className="program-impact-grid">
            <div className="impact-program">
              <div className="program-header">
                <div className="program-icon">🏥</div>
                <h3>Health Program</h3>
              </div>
              <div className="impact-metrics">
                <div className="metric">
                  <span className="metric-number">200+</span>
                  <span className="metric-label">Medical Camps</span>
                </div>
                <div className="metric">
                  <span className="metric-number">25,000+</span>
                  <span className="metric-label">Patients Treated</span>
                </div>
                <div className="metric">
                  <span className="metric-number">3,000+</span>
                  <span className="metric-label">Emergency Transports</span>
                </div>
                <div className="metric">
                  <span className="metric-number">95%</span>
                  <span className="metric-label">Patient Satisfaction</span>
                </div>
              </div>
              <div className="impact-description">
                <p>
                  Our health programs have significantly reduced infant and maternal 
                  mortality rates in tribal areas, providing accessible healthcare 
                  to remote communities.
                </p>
              </div>
            </div>

            <div className="impact-program">
              <div className="program-header">
                <div className="program-icon">🌱</div>
                <h3>Livelihoods Program</h3>
              </div>
              <div className="impact-metrics">
                <div className="metric">
                  <span className="metric-number">1,200+</span>
                  <span className="metric-label">Farmers Trained</span>
                </div>
                <div className="metric">
                  <span className="metric-number">300%</span>
                  <span className="metric-label">Income Increase</span>
                </div>
                <div className="metric">
                  <span className="metric-number">15</span>
                  <span className="metric-label">Cooperatives Formed</span>
                </div>
                <div className="metric">
                  <span className="metric-number">500+</span>
                  <span className="metric-label">Women Empowered</span>
                </div>
              </div>
              <div className="impact-description">
                <p>
                  Livelihood programs have transformed economic conditions, with 
                  participating families seeing significant income improvements 
                  and enhanced food security.
                </p>
              </div>
            </div>

            <div className="impact-program">
              <div className="program-header">
                <div className="program-icon">📚</div>
                <h3>Education Program</h3>
              </div>
              <div className="impact-metrics">
                <div className="metric">
                  <span className="metric-number">5,000+</span>
                  <span className="metric-label">Students Supported</span>
                </div>
                <div className="metric">
                  <span className="metric-number">80%</span>
                  <span className="metric-label">Dropout Reduction</span>
                </div>
                <div className="metric">
                  <span className="metric-number">200+</span>
                  <span className="metric-label">Higher Education</span>
                </div>
                <div className="metric">
                  <span className="metric-number">90%</span>
                  <span className="metric-label">Literacy Improvement</span>
                </div>
              </div>
              <div className="impact-description">
                <p>
                  Education initiatives have dramatically reduced dropout rates 
                  and increased literacy levels, opening new opportunities for 
                  tribal youth.
                </p>
              </div>
            </div>

            <div className="impact-program">
              <div className="program-header">
                <div className="program-icon">🌳</div>
                <h3>Environment Program</h3>
              </div>
              <div className="impact-metrics">
                <div className="metric">
                  <span className="metric-number">50,000+</span>
                  <span className="metric-label">Trees Planted</span>
                </div>
                <div className="metric">
                  <span className="metric-number">25%</span>
                  <span className="metric-label">Forest Cover Increase</span>
                </div>
                <div className="metric">
                  <span className="metric-number">100+</span>
                  <span className="metric-label">Water Bodies Restored</span>
                </div>
                <div className="metric">
                  <span className="metric-number">30+</span>
                  <span className="metric-label">Villages Adopted Green Practices</span>
                </div>
              </div>
              <div className="impact-description">
                <p>
                  Environmental conservation efforts have restored forest cover, 
                  improved water resources, and promoted sustainable practices 
                  in tribal communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After */}
      <section className="before-after">
        <div className="container">
          <h2 className="section-title">Transformation Stories</h2>
          <div className="transformation-grid">
            <div className="transformation-item">
              <h3>Healthcare Access</h3>
              <div className="before-after-content">
                <div className="before">
                  <h4>Before (2002)</h4>
                  <ul>
                    <li>No medical facilities in 50km radius</li>
                    <li>High infant and maternal mortality</li>
                    <li>No emergency transportation</li>
                    <li>Reliance on traditional healers only</li>
                  </ul>
                </div>
                <div className="after">
                  <h4>After (2025)</h4>
                  <ul>
                    <li>Regular medical camps in all villages</li>
                    <li>50% reduction in mortality rates</li>
                    <li>24/7 ambulance service available</li>
                    <li>Integration of modern and traditional medicine</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="transformation-item">
              <h3>Education Landscape</h3>
              <div className="before-after-content">
                <div className="before">
                  <h4>Before (2002)</h4>
                  <ul>
                    <li>70% children out of school</li>
                    <li>No educational materials available</li>
                    <li>High dropout rates</li>
                    <li>Limited career opportunities</li>
                  </ul>
                </div>
                <div className="after">
                  <h4>After (2025)</h4>
                  <ul>
                    <li>90% school enrollment achieved</li>
                    <li>Free materials for all students</li>
                    <li>80% reduction in dropouts</li>
                    <li>200+ students in higher education</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="transformation-item">
              <h3>Economic Conditions</h3>
              <div className="before-after-content">
                <div className="before">
                  <h4>Before (2002)</h4>
                  <ul>
                    <li>Subsistence farming only</li>
                    <li>No market access</li>
                    <li>Seasonal migration for work</li>
                    <li>Limited income sources</li>
                  </ul>
                </div>
                <div className="after">
                  <h4>After (2025)</h4>
                  <ul>
                    <li>Diversified agriculture practices</li>
                    <li>Direct market linkages established</li>
                    <li>Reduced migration, local employment</li>
                    <li>Multiple income streams developed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="community-testimonials">
        <div className="container">
          <h2 className="section-title">Community Voices</h2>
          <div className="testimonials-slider">
            <div className="testimonial-large">
              <div className="testimonial-content">
                <p>
                  "Prakruthi has been a blessing for our community. From healthcare to education, 
                  from farming techniques to women's empowerment - they have touched every aspect 
                  of our lives. Our village is completely transformed."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="/photos/IMG_20160813_151004.jpg" alt="Community Leader" />
                </div>
                <div className="author-info">
                  <strong>Venkat Rao</strong>
                  <span>Village Sarpanch, Devipatnam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="awards-recognition">
        <div className="container">
          <h2 className="section-title">Recognition & Awards</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h3>Best NGO Award</h3>
              <p>Andhra Pradesh Government recognition for outstanding service to tribal communities</p>
              <span className="award-year">2020</span>
            </div>
            <div className="award-item">
              <div className="award-icon">🌟</div>
              <h3>Excellence in Healthcare</h3>
              <p>District Collector's appreciation for innovative healthcare delivery in remote areas</p>
              <span className="award-year">2019</span>
            </div>
            <div className="award-item">
              <div className="award-icon">📜</div>
              <h3>Community Development</h3>
              <p>National recognition for comprehensive community development programs</p>
              <span className="award-year">2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="impact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Be Part of Our Impact</h2>
            <p>Join us in creating more success stories and transforming more lives.</p>
            <div className="cta-buttons">
              <Link to="/donate" className="btn btn-primary">Support Our Work</Link>
              <Link to="/volunteer" className="btn btn-secondary">Volunteer With Us</Link>
              <Link to="/programs" className="btn btn-outline">Explore Programs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;