import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { donationAPI, volunteerAPI, eventAPI } from '../services/api';

const Home = () => {
  const [stats, setStats] = useState({
    totalDonations: 0,
    totalDonors: 0,
    approvedVolunteers: 0,
    upcomingEvents: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const [donationStats, volunteerStats, eventStats] = await Promise.all([
        donationAPI.getStats(),
        volunteerAPI.getStats(),
        eventAPI.getStats()
      ]);
      
      setStats({
        totalDonations: donationStats.data.totalDonations || 0,
        totalDonors: donationStats.data.totalDonors || 0,
        approvedVolunteers: volunteerStats.data.approvedVolunteers || 0,
        upcomingEvents: eventStats.data.upcomingEvents || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      setError('Failed to load statistics');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Prakruthi Social Service Society</h1>
          <p>
            Empowering tribal and rural communities through sustainable development, 
            education, and healthcare since 2002.
          </p>
          <div className="hero-buttons">
            <Link to="/donate" className="btn btn-primary">Donate Now</Link>
            <Link to="/volunteer" className="btn btn-secondary">Join Us</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          {loading ? (
            <div className="loading-stats">
              <p>Loading statistics...</p>
            </div>
          ) : error ? (
            <div className="error-stats">
              <p>{error}</p>
            </div>
          ) : (
            <div className="stats-grid">
              <div className="stat-item">
                <h3>₹{stats.totalDonations.toLocaleString()}</h3>
                <p>Total Donations</p>
              </div>
              <div className="stat-item">
                <h3>{stats.totalDonors}</h3>
                <p>Generous Donors</p>
              </div>
              <div className="stat-item">
                <h3>{stats.approvedVolunteers}</h3>
                <p>Active Volunteers</p>
              </div>
              <div className="stat-item">
                <h3>{stats.upcomingEvents}</h3>
                <p>Upcoming Events</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">About Our Mission</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Our Story</h3>
              <p>
                Prakruthi Social Service Society began its journey in 2002 in Devipatnam village, 
                East Godavari District, Andhra Pradesh. We started with a simple mission: to serve 
                the tribal and rural communities who needed support the most.
              </p>
            </div>
            <div className="card">
              <h3>Our Impact</h3>
              <p>
                Over the years, we have implemented various welfare activities for tribal families, 
                focusing on healthcare, education, and sustainable development. We now operate from 
                Krushnipalem Resettlement village, continuing our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Health Program</h3>
              <p>
                Mother and child healthcare services for tribal communities. 
                We focus on reducing infant and maternal mortality rates through 
                comprehensive healthcare initiatives.
              </p>
            </div>
            <div className="card">
              <h3>Education Initiative</h3>
              <p>
                Formal, non-formal, and adult education programs. We provide 
                technical training in computers, typing, and health courses to 
                improve awareness and skills.
              </p>
            </div>
            <div className="card">
              <h3>Disaster Relief</h3>
              <p>
                Emergency response and rehabilitation programs for communities 
                affected by natural disasters like cyclones, droughts, and floods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="section-title">Join Our Cause</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: '#666'}}>
            Together, we can make a difference in the lives of those who need it most.
          </p>
          <div className="cta-buttons">
            <Link to="/volunteer" className="btn btn-primary">Become a Volunteer</Link>
            <Link to="/donate" className="btn btn-primary" style={{marginLeft: '1rem'}}>Make a Donation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;