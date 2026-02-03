import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  // Reset scroll to top on load

  // Mock data representing the user's recent activity
  const activeBookings = [
    { id: "1", expert: "Alex Rivera", role: "Senior Full Stack Architect", status: "In Progress", date: "Feb 10, 2026", price: "$97.50", img: "/web.jpeg" },
    { id: "9", expert: "Sophia Alt", role: "AI Solutions Architect", status: "Scheduled", date: "Feb 12, 2026", price: "$152.50", img: "/ai.jpeg" }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        
        <header className="dashboard-header">
          <div>
            <h1>Welcome Back, User</h1>
            <p className="subtitle">Manage your expert consultations and project history</p>
          </div>
          <Link to="/services" className="new-booking-btn">+ New Booking</Link>
        </header>

        <div className="dashboard-grid">
          {/* Left: Active Projects */}
          <div className="dashboard-section">
            <h2 className="section-label">Active Bookings</h2>
            <div className="booking-list">
              {activeBookings.map((job) => (
                <div key={job.id} className="dash-card">
                  <div className="dash-card-info">
                    <img src={job.img} alt={job.expert} className="dash-avatar" />
                    <div>
                      <h3>{job.expert}</h3>
                      <p>{job.role}</p>
                    </div>
                  </div>
                  <div className="dash-card-meta">
                    <span className={`status-tag ${job.status.toLowerCase().replace(' ', '-')}`}>
                      {job.status}
                    </span>
                    <p className="dash-date">{job.date}</p>
                    <p className="dash-price">{job.price}</p>
                  </div>
                  <Link to={`/profile/${job.id}`} className="view-btn">View Details</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick Stats & Support */}
          <div className="dashboard-sidebar">
            <div className="stats-card">
              <h3>Account Summary</h3>
              <div className="stat-row">
                <span>Total Spent</span>
                <strong>$250.00</strong>
              </div>
              <div className="stat-row">
                <span>Completed Tasks</span>
                <strong>14</strong>
              </div>
              <div className="stat-row">
                <span>Pending Reviews</span>
                <Link to="/reviews/1" className="review-link">2 Required</Link>
              </div>
            </div>

            <div className="support-card">
              <h4>Need Help?</h4>
              <p>Contact our 24/7 support line for booking assistance.</p>
              <button className="contact-btn">Message Support</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;