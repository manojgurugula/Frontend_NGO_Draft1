/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { eventAPI } from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const [allEvents, upcoming, past] = await Promise.all([
        eventAPI.getAll(),
        eventAPI.getUpcoming(),
        eventAPI.getPast()
      ]);
      
      setEvents(allEvents.data);
      setUpcomingEvents(upcoming.data);
      setPastEvents(past.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const EventCard = ({ event }) => (
    <div className="card">
      {event.imageUrl && (
        <img 
          src={event.imageUrl} 
          alt={event.title}
          style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px', marginBottom: '1rem'}}
        />
      )}
      <h3>{event.title}</h3>
      <p style={{color: '#4a7c59', fontWeight: 'bold'}}>
        {formatDate(event.eventDate)}
      </p>
      {event.location && (
        <p style={{color: '#666', marginBottom: '1rem'}}>
          📍 {event.location}
        </p>
      )}
      <p style={{color: '#666', marginBottom: '1rem'}}>
        {event.description}
      </p>
      {event.maxParticipants && (
        <div style={{background: '#f8f9fa', padding: '0.5rem', borderRadius: '5px', marginBottom: '1rem'}}>
          <small>
            Participants: {event.currentParticipants || 0} / {event.maxParticipants}
          </small>
        </div>
      )}
      <span 
        className={`btn ${event.status === 'upcoming' ? 'btn-primary' : 'btn-secondary'}`}
        style={{fontSize: '0.9rem', padding: '0.5rem 1rem'}}
      >
        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
      </span>
    </div>
  );

  if (loading) {
    return (
      <div style={{textAlign: 'center', padding: '4rem'}}>
        <h2>Loading events...</h2>
      </div>
    );
  }

  return (
    <div>
      <section className="hero" style={{height: '50vh'}}>
        <div className="hero-content">
          <h1>Our Events</h1>
          <p>Join us in making a difference in our communities</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Events & Activities</h2>
          
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <button 
              className={`btn ${activeTab === 'upcoming' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('upcoming')}
              style={{marginRight: '1rem'}}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button 
              className={`btn ${activeTab === 'past' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('past')}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>

          {activeTab === 'upcoming' && (
            <div>
              {upcomingEvents.length > 0 ? (
                <div className="grid grid-3">
                  {upcomingEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="card" style={{textAlign: 'center'}}>
                  <h3>No Upcoming Events</h3>
                  <p>Stay tuned for our upcoming events and activities!</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'past' && (
            <div>
              {pastEvents.length > 0 ? (
                <div className="grid grid-3">
                  {pastEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="card" style={{textAlign: 'center'}}>
                  <h3>No Past Events</h3>
                  <p>Our event history will be displayed here.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Types of Events We Organize</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Health Camps</h3>
              <p>
                Free medical checkups, vaccination drives, and health awareness 
                programs in remote tribal villages.
              </p>
            </div>
            <div className="card">
              <h3>Educational Programs</h3>
              <p>
                Literacy drives, skill development workshops, and educational 
                awareness campaigns for all age groups.
              </p>
            </div>
            <div className="card">
              <h3>Cultural Events</h3>
              <p>
                Traditional festivals, cultural preservation programs, and 
                community celebrations to maintain tribal heritage.
              </p>
            </div>
            <div className="card">
              <h3>Environmental Drives</h3>
              <p>
                Tree plantation drives, cleanliness campaigns, and environmental 
                awareness programs for sustainable development.
              </p>
            </div>
            <div className="card">
              <h3>Relief Operations</h3>
              <p>
                Emergency response activities during natural disasters, 
                distribution of relief materials, and rehabilitation support.
              </p>
            </div>
            <div className="card">
              <h3>Community Meetings</h3>
              <p>
                Village assemblies, awareness sessions about government schemes, 
                and community development planning meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Get Involved</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Participate in Events</h3>
              <p>
                Join our events as a participant and contribute to community development. 
                Your presence and participation make our events more impactful.
              </p>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
            <div className="card">
              <h3>Volunteer at Events</h3>
              <p>
                Help us organize and conduct events by volunteering your time and skills. 
                Volunteers are the backbone of our successful events.
              </p>
              <a href="/volunteer" className="btn btn-primary">Become a Volunteer</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#2c5530', color: 'white'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2>Support Our Events</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
            Help us organize more impactful events for community development.
          </p>
          <div>
            <a href="/donate" className="btn" style={{background: 'white', color: '#2c5530'}}>Sponsor an Event</a>
            <a href="/volunteer" className="btn btn-secondary" style={{marginLeft: '1rem'}}>Volunteer</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
