import React, { useState, useEffect } from 'react';
import { donationAPI, volunteerAPI, eventAPI, contactAPI } from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalDonations: 0,
    totalDonors: 0,
    monthlyDonations: 0,
    approvedVolunteers: 0,
    pendingVolunteers: 0,
    upcomingEvents: 0,
    newMessages: 0
  });
  const [recentDonations, setRecentDonations] = useState([]);
  const [recentVolunteers, setRecentVolunteers] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [donationStats, volunteerStats, eventStats, contactStats, donations, volunteers, contacts] = await Promise.all([
        donationAPI.getStats(),
        volunteerAPI.getStats(),
        eventAPI.getStats(),
        contactAPI.getStats(),
        donationAPI.getAll(),
        volunteerAPI.getAll(),
        contactAPI.getAll()
      ]);
      
      setStats({
        totalDonations: donationStats.data.totalDonations || 0,
        totalDonors: donationStats.data.totalDonors || 0,
        monthlyDonations: donationStats.data.monthlyDonations || 0,
        approvedVolunteers: volunteerStats.data.approvedVolunteers || 0,
        pendingVolunteers: volunteerStats.data.pendingVolunteers || 0,
        upcomingEvents: eventStats.data.upcomingEvents || 0,
        newMessages: contactStats.data.newMessages || 0
      });
      
      setRecentDonations(donations.data.slice(0, 5));
      setRecentVolunteers(volunteers.data.slice(0, 5));
      setRecentContacts(contacts.data.slice(0, 5));
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  if (loading) {
    return (
      <div style={{textAlign: 'center', padding: '4rem'}}>
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Prakruthi NGO Dashboard</h1>
          <p>Overview of our organization's activities and impact</p>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>{formatCurrency(stats.totalDonations)}</h3>
            <p>Total Donations</p>
          </div>
          <div className="stat-card">
            <h3>{stats.totalDonors}</h3>
            <p>Total Donors</p>
          </div>
          <div className="stat-card">
            <h3>{formatCurrency(stats.monthlyDonations)}</h3>
            <p>This Month</p>
          </div>
          <div className="stat-card">
            <h3>{stats.approvedVolunteers}</h3>
            <p>Active Volunteers</p>
          </div>
          <div className="stat-card">
            <h3>{stats.pendingVolunteers}</h3>
            <p>Pending Applications</p>
          </div>
          <div className="stat-card">
            <h3>{stats.upcomingEvents}</h3>
            <p>Upcoming Events</p>
          </div>
          <div className="stat-card">
            <h3>{stats.newMessages}</h3>
            <p>New Messages</p>
          </div>
        </div>

        <div className="grid grid-3">
          <div className="card">
            <h3>Recent Donations</h3>
            {recentDonations.length > 0 ? (
              <div>
                {recentDonations.map(donation => (
                  <div key={donation.id} style={{borderBottom: '1px solid #eee', padding: '0.5rem 0'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div>
                        <strong>{donation.donorName}</strong>
                        <br/>
                        <small style={{color: '#666'}}>{formatDate(donation.donationDate)}</small>
                      </div>
                      <div style={{textAlign: 'right'}}>
                        <strong style={{color: '#4a7c59'}}>{formatCurrency(donation.amount)}</strong>
                        <br/>
                        <small style={{color: donation.paymentStatus === 'completed' ? '#28a745' : '#ffc107'}}>
                          {donation.paymentStatus}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{color: '#666'}}>No donations yet</p>
            )}
          </div>

          <div className="card">
            <h3>Recent Volunteer Applications</h3>
            {recentVolunteers.length > 0 ? (
              <div>
                {recentVolunteers.map(volunteer => (
                  <div key={volunteer.id} style={{borderBottom: '1px solid #eee', padding: '0.5rem 0'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div>
                        <strong>{volunteer.fullName}</strong>
                        <br/>
                        <small style={{color: '#666'}}>{formatDate(volunteer.applicationDate)}</small>
                      </div>
                      <div>
                        <span style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '3px',
                          fontSize: '0.8rem',
                          background: volunteer.status === 'approved' ? '#d4edda' : 
                                    volunteer.status === 'pending' ? '#fff3cd' : '#f8d7da',
                          color: volunteer.status === 'approved' ? '#155724' : 
                                volunteer.status === 'pending' ? '#856404' : '#721c24'
                        }}>
                          {volunteer.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{color: '#666'}}>No volunteer applications yet</p>
            )}
          </div>

          <div className="card">
            <h3>Recent Messages</h3>
            {recentContacts.length > 0 ? (
              <div>
                {recentContacts.map(contact => (
                  <div key={contact.id} style={{borderBottom: '1px solid #eee', padding: '0.5rem 0'}}>
                    <div>
                      <strong>{contact.name}</strong>
                      <br/>
                      <small style={{color: '#666'}}>{contact.subject}</small>
                      <br/>
                      <small style={{color: '#999'}}>{formatDate(contact.createdDate)}</small>
                      <span style={{
                        marginLeft: '0.5rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '3px',
                        fontSize: '0.7rem',
                        background: contact.status === 'new' ? '#fff3cd' : 
                                  contact.status === 'read' ? '#d1ecf1' : '#d4edda',
                        color: contact.status === 'new' ? '#856404' : 
                              contact.status === 'read' ? '#0c5460' : '#155724'
                      }}>
                        {contact.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{color: '#666'}}>No messages yet</p>
            )}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="grid grid-4">
            <div className="card" style={{textAlign: 'center'}}>
              <h3>Add Event</h3>
              <p>Create a new event or activity</p>
              <button className="btn btn-primary">Add Event</button>
            </div>
            <div className="card" style={{textAlign: 'center'}}>
              <h3>View All Donations</h3>
              <p>Manage donation records</p>
              <button className="btn btn-primary">View Donations</button>
            </div>
            <div className="card" style={{textAlign: 'center'}}>
              <h3>Manage Volunteers</h3>
              <p>Review volunteer applications</p>
              <button className="btn btn-primary">Manage Volunteers</button>
            </div>
            <div className="card" style={{textAlign: 'center'}}>
              <h3>View Messages</h3>
              <p>Respond to contact messages</p>
              <button className="btn btn-primary">View Messages</button>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Organization Information</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Registration Details</h3>
              <ul style={{color: '#666', textAlign: 'left'}}>
                <li>Society Registration: 2002</li>
                <li>FCRA Registration: 010170278</li>
                <li>12A and 80G Approved</li>
                <li>CSR-1 Registered</li>
              </ul>
            </div>
            <div className="card">
              <h3>Contact Information</h3>
              <p style={{color: '#666', textAlign: 'left'}}>
                Krushnipalem Resettlement Village<br/>
                Alluri Seetaramaraju District<br/>
                Andhra Pradesh, India<br/>
                Email: prakruthi2002@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;