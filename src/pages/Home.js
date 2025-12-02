import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/HeroSection.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      image: '/photos/DSCN1906.JPG',
      title: 'Transforming Lives Through Healthcare',
      subtitle: 'Bringing quality medical care to tribal communities since 2002'
    },
    {
      image: '/photos/DSCN8229.JPG',
      title: 'Empowering Through Education',
      subtitle: 'Building brighter futures for tribal children and youth'
    },
    {
      image: '/photos/DSCN5885.JPG',
      title: 'Creating Sustainable Livelihoods',
      subtitle: 'Empowering women and families with income opportunities'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`bg-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="container">
            <div className={`hero-text ${isVisible ? 'show' : ''}`}>
              <h1 className="hero-title">
                <span className="main-title">Prakruthi</span>
                <span className="sub-title">Social Service Society</span>
                <span className="tagline">Empowering Tribal Communities Across Andhra Pradesh</span>
              </h1>
              
              <p className="hero-desc">
                Serving tribal and rural communities since 2002 through healthcare, education, 
                livelihood development, and disaster relief programs across Andhra Pradesh.
              </p>
              
              <div className="hero-buttons">
                <Link to="/donate" className="btn btn-donate">
                  ❤️ Donate Now
                </Link>
                <Link to="/volunteer" className="btn btn-volunteer">
                  🤝 Join Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="impact-stats-section">
        <div className="container">
          <div className="stats-header">
            <h2>Our Impact in Numbers</h2>
            <p>Measurable change in tribal communities across Andhra Pradesh</p>
          </div>
          <div className="stats-grid-enhanced">
            <div className="stat-card-enhanced">
              <div className="stat-icon">🏥</div>
              <div className="stat-content">
                <div className="stat-number">3,000+</div>
                <div className="stat-label">TB Patients Treated</div>
                <div className="stat-description">Healthcare services</div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon">🎓</div>
              <div className="stat-content">
                <div className="stat-number">520+</div>
                <div className="stat-label">Emergency Services</div>
                <div className="stat-description">Ambulance program</div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon">👩‍🌾</div>
              <div className="stat-content">
                <div className="stat-number">1,200+</div>
                <div className="stat-label">Kitchen Gardens</div>
                <div className="stat-description">Food security program</div>
              </div>
            </div>
            <div className="stat-card-enhanced">
              <div className="stat-icon">🌳</div>
              <div className="stat-content">
                <div className="stat-number">4,000+</div>
                <div className="stat-label">Welfare Schemes</div>
                <div className="stat-description">Government program access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Highlight */}
      <section className="mission-highlight">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="section-badge">Our Mission</div>
              <h2>Bridging Gaps, Building Futures</h2>
              <p>
                We work tirelessly to bridge the gap between marginalized tribal communities 
                and essential services. Our holistic approach addresses healthcare, education, 
                livelihoods, and environmental conservation to create lasting positive change.
              </p>
              <div className="mission-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Comprehensive healthcare delivery</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Quality education and skill development</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Sustainable livelihood creation</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Environmental conservation initiatives</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline">Learn Our Story</Link>
            </div>
            <div className="mission-visual">
              <div className="image-stack">
                <img src="/photos/CIMG0543.JPG" alt="Community Meeting" className="stack-image-1" />
                <img src="/photos/DSCN5906.JPG" alt="Healthcare" className="stack-image-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      <section className="programs-showcase">
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">Our Programs</div>
            <h2>Comprehensive Community Development</h2>
            <p>Integrated programs addressing the core needs of tribal communities</p>
          </div>
          <div className="programs-grid-enhanced">
            <div className="program-card-enhanced">
              <div className="program-image-container">
                <img src="/photos/DSCN5906.JPG" alt="Healthcare" />
                <div className="program-overlay">
                  <span className="program-icon">🏥</span>
                </div>
              </div>
              <div className="program-content-enhanced">
                <h3>Healthcare Services</h3>
                <p>Medical camps, TB treatment, ambulance services, and health awareness programs for tribal communities.</p>
                <div className="program-stats-mini">
                  <span>3,000+ TB patients treated</span>
                </div>
                <Link to="/programs" className="program-link-enhanced">
                  Explore Program <span>→</span>
                </Link>
              </div>
            </div>

            <div className="program-card-enhanced">
              <div className="program-image-container">
                <img src="/photos/DSCN8229.JPG" alt="Education" />
                <div className="program-overlay">
                  <span className="program-icon">🎓</span>
                </div>
              </div>
              <div className="program-content-enhanced">
                <h3>Education & Skills</h3>
                <p>Education support, skill development, youth training, and career development programs.</p>
                <div className="program-stats-mini">
                  <span>75+ youth trained in skills</span>
                </div>
                <Link to="/programs" className="program-link-enhanced">
                  Explore Program <span>→</span>
                </Link>
              </div>
            </div>

            <div className="program-card-enhanced">
              <div className="program-image-container">
                <img src="/photos/DSCN5885.JPG" alt="Livelihoods" />
                <div className="program-overlay">
                  <span className="program-icon">👩‍🌾</span>
                </div>
              </div>
              <div className="program-content-enhanced">
                <h3>Livelihood Development</h3>
                <p>Tailoring training, mushroom cultivation, palm leaf crafts, and kitchen garden programs.</p>
                <div className="program-stats-mini">
                  <span>1,200+ families with gardens</span>
                </div>
                <Link to="/programs" className="program-link-enhanced">
                  Explore Program <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section-enhanced">
        <div className="container">
          <div className="cta-content-enhanced">
            <div className="cta-text">
              <h2>Be Part of the Change</h2>
              <p>Join thousands of supporters who are making a real difference in tribal communities. Every contribution, big or small, creates lasting impact.</p>
            </div>
            <div className="cta-actions-enhanced">
              <Link to="/donate" className="btn btn-cta-primary">
                <span className="btn-icon">💝</span>
                <span className="btn-text">
                  <span className="btn-title">Make a Donation</span>
                  <span className="btn-subtitle">Support our programs</span>
                </span>
              </Link>
              <Link to="/volunteer" className="btn btn-cta-secondary">
                <span className="btn-icon">🤝</span>
                <span className="btn-text">
                  <span className="btn-title">Volunteer</span>
                  <span className="btn-subtitle">Join our mission</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;