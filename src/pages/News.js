import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: 'Major Health Camp Success in Tribal Villages',
      excerpt: 'Our recent health camp served over 500 tribal families with comprehensive medical care, including free medicines and specialist consultations.',
      content: 'The three-day health camp organized in collaboration with district health authorities provided medical services to over 500 tribal families across 10 villages. The camp included general health checkups, eye examinations, dental care, and distribution of free medicines. Specialist doctors from the district hospital participated, providing consultations for chronic conditions. The camp also conducted health awareness sessions on hygiene, nutrition, and preventive care.',
      date: '2024-11-15',
      category: 'health',
      image: '/photos/DSCN1906.JPG',
      author: 'Dr. Ramesh Kumar',
      featured: true
    },
    {
      id: 2,
      title: 'New Education Initiative Launched for Migrant Children',
      excerpt: 'Prakruthi launches innovative mobile education program to support children of migrant workers in maintaining their studies.',
      content: 'Understanding the challenges faced by children of migrant workers, Prakruthi has launched a mobile education initiative. The program includes flexible timing, bridge courses, and digital learning materials. Mobile education units visit construction sites and temporary settlements to provide educational support. The initiative aims to prevent educational disruption and ensure continuity in learning for these vulnerable children.',
      date: '2024-11-10',
      category: 'education',
      image: '/photos/DSCN8210.JPG',
      author: 'Smt. Lakshmi Devi',
      featured: true
    },
    {
      id: 3,
      title: 'Cashew Farmers Cooperative Achieves Record Sales',
      excerpt: 'The tribal cashew farmers cooperative supported by Prakruthi reports 300% increase in income through direct market access.',
      content: 'The cashew farmers cooperative, established with Prakruthi\'s support, has achieved remarkable success. By eliminating middlemen and accessing direct markets, farmers have seen a 300% increase in their income. The cooperative now has 150 members across 15 villages and has established direct relationships with major buyers. Training programs on quality improvement and post-harvest processing have significantly enhanced the value of their produce.',
      date: '2024-11-05',
      category: 'livelihoods',
      image: '/photos/DSCN7459.JPG',
      author: 'Sri. Venkat Rao',
      featured: false
    },
    {
      id: 4,
      title: 'Environmental Conservation Drive Plants 10,000 Trees',
      excerpt: 'Community-led plantation drive successfully plants 10,000 native trees across tribal villages, enhancing forest cover.',
      content: 'In a massive community mobilization effort, Prakruthi coordinated the plantation of 10,000 native trees across 25 tribal villages. The drive focused on restoring degraded forest areas and creating green corridors. Community members, including school children, actively participated in the plantation and committed to maintaining the saplings. The initiative is part of a larger environmental conservation program aimed at combating climate change and preserving biodiversity.',
      date: '2024-10-28',
      category: 'environment',
      image: '/photos/DSCN8381.JPG',
      author: 'Environmental Team',
      featured: false
    },
    {
      id: 5,
      title: 'Prakruthi Receives State Recognition for Community Service',
      excerpt: 'Andhra Pradesh Government honors Prakruthi with the Best NGO Award for outstanding service to tribal communities.',
      content: 'Prakruthi Social Service Society has been honored with the Best NGO Award by the Andhra Pradesh Government for its outstanding contribution to tribal community development. The award recognizes 23 years of dedicated service in healthcare, education, livelihoods, and environmental conservation. The ceremony was attended by senior government officials and community leaders who praised Prakruthi\'s innovative approaches and sustainable impact.',
      date: '2024-10-20',
      category: 'organization',
      image: '/photos/IMGA0005.JPG',
      author: 'Admin Team',
      featured: true
    },
    {
      id: 6,
      title: 'Women\'s Self-Help Groups Show Remarkable Progress',
      excerpt: 'Women\'s self-help groups supported by Prakruthi demonstrate significant economic and social empowerment achievements.',
      content: 'The women\'s self-help groups (SHGs) facilitated by Prakruthi have shown remarkable progress in economic and social empowerment. With 25 active groups comprising 300 women, the SHGs have collectively saved over ₹5 lakhs and provided micro-loans for income-generating activities. Women have started small businesses including tailoring, food processing, and handicrafts. The groups have also become platforms for addressing social issues and promoting women\'s rights.',
      date: '2024-10-15',
      category: 'livelihoods',
      image: '/photos/DSCN7467.JPG',
      author: 'Women\'s Program Team',
      featured: false
    },
    {
      id: 7,
      title: 'Emergency Response During Recent Floods',
      excerpt: 'Prakruthi\'s quick response during recent floods provided immediate relief and support to affected tribal families.',
      content: 'When floods hit the region last month, Prakruthi\'s emergency response team immediately mobilized to provide relief to affected tribal communities. The team distributed food packets, clean water, medicines, and temporary shelter materials to 200 families. The ambulance service worked round-the-clock to evacuate patients and pregnant women to safety. Post-flood rehabilitation included cleaning of water sources, distribution of seeds for replanting, and psychological support for trauma victims.',
      date: '2024-10-08',
      category: 'disaster',
      image: '/photos/DSCN2067.JPG',
      author: 'Emergency Response Team',
      featured: false
    },
    {
      id: 8,
      title: 'Digital Literacy Program Reaches Remote Villages',
      excerpt: 'New digital literacy initiative brings computer education and internet access to tribal youth in remote areas.',
      content: 'Recognizing the importance of digital skills in the modern world, Prakruthi has launched a digital literacy program for tribal youth. Mobile computer labs visit remote villages to provide basic computer training, internet awareness, and digital skills development. The program has already reached 15 villages and trained over 200 young people. Participants learn basic computer operations, internet usage, and digital communication skills that enhance their employment prospects.',
      date: '2024-09-25',
      category: 'education',
      image: '/photos/DSCN7913.JPG',
      author: 'Education Team',
      featured: false
    },
    {
      id: 9,
      title: 'Traditional Medicine Documentation Project Completed',
      excerpt: 'Comprehensive documentation of traditional tribal medicine knowledge completed, preserving ancient healing practices.',
      content: 'After two years of intensive research, Prakruthi has completed the documentation of traditional medicine practices of local tribal communities. The project involved interviewing elderly healers, documenting medicinal plants, and recording preparation methods for traditional remedies. The documentation will help preserve this valuable knowledge for future generations while also exploring possibilities for integration with modern healthcare. The project has identified over 150 medicinal plants and documented 200 traditional remedies.',
      date: '2024-09-18',
      category: 'health',
      image: '/photos/DSCN7397.JPG',
      author: 'Research Team',
      featured: false
    },
    {
      id: 10,
      title: 'Annual Community Festival Celebrates Cultural Heritage',
      excerpt: 'The annual cultural festival organized by Prakruthi celebrates tribal heritage while promoting unity and cultural preservation.',
      content: 'Prakruthi\'s annual community festival brought together over 2,000 people from 30 villages to celebrate tribal cultural heritage. The three-day festival featured traditional dances, music performances, handicraft exhibitions, and cultural competitions. The event served as a platform for cultural exchange and helped preserve traditional art forms. Young people actively participated, ensuring the transmission of cultural knowledge to the next generation. The festival also provided a marketplace for local artisans and farmers to showcase their products.',
      date: '2024-09-10',
      category: 'events',
      image: '/photos/DSCN9417.JPG',
      author: 'Cultural Team',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'health', name: 'Health Programs' },
    { id: 'education', name: 'Education' },
    { id: 'livelihoods', name: 'Livelihoods' },
    { id: 'environment', name: 'Environment' },
    { id: 'organization', name: 'Organization' },
    { id: 'disaster', name: 'Disaster Relief' },
    { id: 'events', name: 'Events' }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const featuredNews = newsItems.filter(item => item.featured);
  const latestNews = newsItems.slice(0, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>News & Updates</h1>
          <p>Stay informed about our latest programs, achievements, and community impact</p>
        </div>
        <div className="hero-bg">
          <img src="/photos/IMGA0356.JPG" alt="News & Updates" />
        </div>
      </section>

      {/* Featured News */}
      <section className="featured-news">
        <div className="container">
          <h2 className="section-title">Featured Stories</h2>
          <div className="featured-grid">
            {featuredNews.map(item => (
              <article key={item.id} className="featured-article">
                <div className="article-image">
                  <img src={item.image} alt={item.title} />
                  <div className="article-category">{item.category}</div>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-date">{formatDate(item.date)}</span>
                    <span className="article-author">By {item.author}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <button className="read-more-btn">Read Full Story</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="latest-news-section">
        <div className="container">
          <h2 className="section-title">Latest Updates</h2>
          <div className="latest-news-grid">
            {latestNews.map(item => (
              <article key={item.id} className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">{formatDate(item.date)}</span>
                    <span className="news-category">{item.category}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="news-categories">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="all-news">
        <div className="container">
          <div className="news-grid">
            {filteredNews.map(item => (
              <article key={item.id} className="news-item">
                <div className="news-item-image">
                  <img src={item.image} alt={item.title} />
                  <div className="news-item-category">{item.category}</div>
                </div>
                <div className="news-item-content">
                  <div className="news-item-meta">
                    <span className="news-item-date">{formatDate(item.date)}</span>
                    <span className="news-item-author">{item.author}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="news-item-actions">
                    <button className="read-more">Read More</button>
                    <button className="share-btn">Share</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="press-media">
        <div className="container">
          <h2 className="section-title">Press & Media Coverage</h2>
          <div className="media-grid">
            <div className="media-item">
              <div className="media-logo">
                <div className="logo-placeholder">📰</div>
              </div>
              <div className="media-content">
                <h4>The Hindu</h4>
                <p>"Prakruthi's innovative healthcare delivery model transforms tribal health outcomes"</p>
                <span className="media-date">October 2024</span>
              </div>
            </div>
            <div className="media-item">
              <div className="media-logo">
                <div className="logo-placeholder">📺</div>
              </div>
              <div className="media-content">
                <h4>ETV Andhra Pradesh</h4>
                <p>"Documentary on Prakruthi's 23-year journey serving tribal communities"</p>
                <span className="media-date">September 2024</span>
              </div>
            </div>
            <div className="media-item">
              <div className="media-logo">
                <div className="logo-placeholder">📻</div>
              </div>
              <div className="media-content">
                <h4>All India Radio</h4>
                <p>"Interview with Prakruthi founders on sustainable development approaches"</p>
                <span className="media-date">August 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter to receive the latest updates about our programs and impact.</p>
            </div>
            <div className="newsletter-form">
              <form>
                <div className="form-group">
                  <input type="email" placeholder="Enter your email address" required />
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </div>
                <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-media">
        <div className="container">
          <h2 className="section-title">Follow Us</h2>
          <div className="social-links">
            <a href="#" className="social-link facebook">
              <span className="social-icon">📘</span>
              <span>Facebook</span>
            </a>
            <a href="#" className="social-link twitter">
              <span className="social-icon">🐦</span>
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link instagram">
              <span className="social-icon">📷</span>
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link youtube">
              <span className="social-icon">📹</span>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="news-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Get Involved</h2>
            <p>Join us in our mission to transform tribal communities. Your support makes a difference.</p>
            <div className="cta-buttons">
              <Link to="/volunteer" className="btn btn-primary">Volunteer</Link>
              <Link to="/donate" className="btn btn-secondary">Donate</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;