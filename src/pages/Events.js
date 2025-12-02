import React from 'react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Health Camp - Tribal Villages',
      date: '2024-02-15',
      time: '9:00 AM - 4:00 PM',
      location: 'Krushnipalem Village',
      description: 'Free medical checkup and consultation for tribal families',
      image: '/photos/DSCN1906.JPG'
    },
    {
      id: 2,
      title: 'Educational Material Distribution',
      date: '2024-02-20',
      time: '10:00 AM - 2:00 PM',
      location: 'Multiple Villages',
      description: 'Distribution of books and learning materials to students',
      image: '/photos/DSCN8229.JPG'
    },
    {
      id: 3,
      title: 'Women Empowerment Workshop',
      date: '2024-02-25',
      time: '11:00 AM - 3:00 PM',
      location: 'Community Center',
      description: 'Skill development and microfinance training for women',
      image: '/photos/DSCN5885.JPG'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Tree Plantation Drive',
      date: '2024-01-15',
      location: 'Forest Area',
      description: 'Community plantation program with 500+ saplings',
      image: '/photos/DSCN5844.jpg'
    },
    {
      id: 5,
      title: 'Annual Community Celebration',
      date: '2023-12-20',
      location: 'Village Ground',
      description: 'Cultural programs and community gathering',
      image: '/photos/DSCN1906.JPG'
    },
    {
      id: 6,
      title: 'Agricultural Training Program',
      date: '2023-11-10',
      location: 'Farming Fields',
      description: 'Modern farming techniques workshop',
      image: '/photos/DSCN1962.JPG'
    }
  ];

  return (
    <div className="events-page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Events</h1>
          <p>Join us in our community initiatives and programs</p>
        </div>
        <div className="hero-bg">
          <img src="/photos/DSCN1906.JPG" alt="Events" />
        </div>
      </section>

      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Be part of our upcoming community programs and initiatives</p>
          </div>
          <div className="events-grid">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-date">
                    <span className="date">{new Date(event.date).getDate()}</span>
                    <span className="month">{new Date(event.date).toLocaleDateString('en', { month: 'short' })}</span>
                  </div>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <p><strong>Time:</strong> {event.time}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="events-section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header">
            <h2>Past Events</h2>
            <p>Highlights from our recent community programs</p>
          </div>
          <div className="events-grid">
            {pastEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;