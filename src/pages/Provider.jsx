import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Provider.css';

const Provider = () => {

  // Mock data for the freelancer's perspective
  const upcomingGigs = [
    { id: 101, client: "Sarah J.", service: "Backend Refactoring", date: "Feb 05, 2026", amount: "$350", status: "Confirmed" },
    { id: 102, client: "Mike T.", service: "API Security Audit", date: "Feb 08, 2026", amount: "$220", status: "Pending" }
  ];

  return (
    <div className="freelance-dashboard">
      <div className="fd-container">
        
        <header className="fd-header">
          <div>
            <p className="fd-badge">Expert Mode</p>
            <h1>Freelancer Console</h1>
          </div>
          <div className="fd-stats-bar">
            <div className="fd-stat-item">
              <span>Total Earnings</span>
              <strong>$4,250.00</strong>
            </div>
            <div className="fd-stat-item">
              <span>Rating</span>
              <strong>★ 4.9</strong>
            </div>
          </div>
        </header>

        <div className="fd-grid">
          {/* Main Work Area */}
          <div className="fd-main">
            <h2 className="fd-section-title">Upcoming Bookings</h2>
            <div className="fd-list">
              {upcomingGigs.map((gig) => (
                <div key={gig.id} className="fd-card">
                  <div className="fd-card-left">
                    <div className="client-avatar">{gig.client.charAt(0)}</div>
                    <div>
                      <h3>{gig.service}</h3>
                      <p>Client: {gig.client}</p>
                    </div>
                  </div>
                  <div className="fd-card-right">
                    <span className={`fd-status ${gig.status.toLowerCase()}`}>{gig.status}</span>
                    <p className="fd-date">{gig.date}</p>
                    <p className="fd-amount">{gig.amount}</p>
                    <div className="fd-actions">
                      <button className="fd-btn-msg">Message</button>
                      <button className="fd-btn-manage">Manage</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="fd-sidebar">
            <div className="fd-side-card">
              <h3>Profile Visibility</h3>
              <div className="fd-toggle-row">
                <span>Active for Hire</span>
                <div className="fd-toggle active"></div>
              </div>
              <Link to="/profile/1" className="fd-profile-link">View Public Profile</Link>
            </div>

            <div className="fd-side-card">
              <h3>Recent Feedback</h3>
              <div className="fd-mini-review">
                <p>"Alex is a coding wizard! Fixed bugs in no time."</p>
                <small>- Sarah J.</small>
              </div>
              <Link to="/reviews/1" className="fd-all-reviews">See all reviews</Link>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
};

export default Provider;